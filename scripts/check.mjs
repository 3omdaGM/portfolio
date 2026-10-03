// Dependency-free release checks for a static GitHub Pages site.
import { readFile, readdir, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
const root = fileURLToPath(new URL('../', import.meta.url));
const html = await readFile(resolve(root, 'index.html'), 'utf8');
const errors = [];
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
if (new Set(ids).size !== ids.length) errors.push('Duplicate HTML IDs');
let localLinks = 0;
for (const [, target] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
  if (target.startsWith('#')) {
    if (!ids.includes(target.slice(1))) errors.push(`Missing section: ${target}`);
  } else if (!/^(https?:|mailto:|tel:|data:)/.test(target)) {
    localLinks++;
    try { await access(resolve(root, target)); } catch { errors.push(`Missing asset: ${target}`); }
  }
}
for (const [, tag] of html.matchAll(/(<a\b[^>]*target="_blank"[^>]*>)/g)) {
  if (!tag.includes('noopener')) errors.push(`Unprotected external link: ${tag}`);
}
async function scripts(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = resolve(dir, entry.name);
    if (entry.isDirectory()) { if (!['.git', 'node_modules'].includes(entry.name)) await scripts(path); }
    else if (/\.(mjs|js)$/.test(entry.name)) {
      const result = spawnSync(process.execPath, ['--check', path], { encoding: 'utf8' });
      if (result.status !== 0) errors.push(result.stderr);
      const code = await readFile(path, 'utf8');
      for (const [, imported] of code.matchAll(/from\s+['"](\.[^'"]+)['"]/g)) {
        try { await access(resolve(dirname(path), imported)); } catch { errors.push(`Missing import: ${imported}`); }
      }
    }
  }
}
await scripts(root);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`PASS: ${ids.length} unique IDs, ${localLinks} local asset references, internal links, safe new-tab links, JS syntax, and module imports.`);
