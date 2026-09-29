import fs from 'node:fs';
import path from 'node:path';

// Import source proposed by Antigravity; never execute generated commands.
const root = path.resolve(import.meta.dirname, '..');
const events = fs.readFileSync(path.join(root, 'antigravity-source.ndjson'), 'utf8')
  .split(/\r?\n/).flatMap(line => { try { return [JSON.parse(line)]; } catch { return []; } });
const result = events.findLast(event => event.event === 'result')?.result;
let proposal = result?.structured_output;
if (!proposal && result?.response) proposal = JSON.parse(result.response);
if (!proposal && process.argv.includes('--partial')) {
  const text = events.map(event => event.step_update?.text_delta ?? '').join('');
  let depth = 0, inString = false, escaped = false, start = 0;
  const files = [];
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (inString) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === '"') inString = false;
      continue;
    }
    if (char === '"') inString = true;
    else if (char === '{') { depth++; if (depth === 2) start = i; }
    else if (char === '}') {
      if (depth === 2) {
        const item = JSON.parse(text.slice(start, i + 1));
        if (typeof item.path === 'string' && typeof item.content === 'string') files.push(item);
      }
      depth--;
    }
  }
  proposal = { files, notes: 'Partial output: completed file objects only.' };
}
if (!proposal?.files?.length) throw new Error('No completed source output yet.');
const permittedRootFiles = new Set(['package.json', 'tsconfig.json', 'tsconfig.app.json', 'tsconfig.node.json', 'vite.config.ts', 'index.html', 'README.md', '.gitignore']);
for (const file of proposal.files) {
  const destination = path.resolve(root, file.path);
  if (!destination.startsWith(root + path.sep) || file.path.includes('..') ||
      !(permittedRootFiles.has(file.path) || /^(src|public)\/[\w./-]+$/.test(file.path))) {
    throw new Error(`Unexpected output path: ${file.path}`);
  }
  if (process.argv.includes('--write')) {
    fs.mkdirSync(path.dirname(destination), { recursive: true });
    fs.writeFileSync(destination, file.content, 'utf8');
  }
}
console.log(JSON.stringify({ status: result?.status ?? 'generating', files: proposal.files.map(file => ({ path: file.path, characters: file.content.length })), notes: proposal.notes, package: JSON.parse(proposal.files.find(file => file.path === 'package.json')?.content ?? '{}') }, null, 2));
