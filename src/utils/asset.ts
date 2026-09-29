/**
 * Resolve public asset paths taking into account Vite's base path
 * (e.g. for GitHub Pages subpath deployment)
 */
export function resolveAsset(path?: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const baseUrl = import.meta.env?.BASE_URL || '/';
  const base = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  return `${base}${cleanPath}`;
}
