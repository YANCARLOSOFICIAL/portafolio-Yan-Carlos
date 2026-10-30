/**
 * Descarga el README.md de cada proyecto (src/content/projects/*.md) desde
 * GitHub (rama por defecto) y lo guarda en src/data/readmes.json.
 *
 * - No necesita token: usa raw.githubusercontent.com (HEAD = rama por defecto).
 * - Nunca rompe el build: si un README falla, se queda el anterior o se omite.
 * - Corre en `prebuild` antes de `npm run build`.
 */
import { readdir, readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const PROJECTS_DIR = join(ROOT, 'src', 'content', 'projects');
const OUT_FILE = join(ROOT, 'src', 'data', 'readmes.json');

function parseProject(file) {
  const raw = file.replace(/^---\r?\n([\s\S]*?)\r?\n---.*/, '$1');
  const github = /^github:\s*(\S+)/m.exec(raw)?.[1];
  return github;
}

function parseRepo(url) {
  const m = /github\.com\/([^/\s]+)\/([^/\s]+?)(?:\.git)?(?:\/|$)/.exec(url);
  return m ? { owner: m[1], repo: m[2] } : null;
}

async function fetchReadme(owner, repo) {
  const candidates = ['README.md', 'readme.md', 'README.MD'];
  for (const name of candidates) {
    try {
      const res = await fetch(
        `https://raw.githubusercontent.com/${owner}/${repo}/HEAD/${name}`,
        { signal: AbortSignal.timeout(10000) }
      );
      if (res.ok) {
        const text = await res.text();
        if (text.trim()) return text;
      }
    } catch {
      // seguimos con el siguiente candidato
    }
  }
  return null;
}

async function main() {
  let existing = {};
  try {
    existing = JSON.parse(await readFile(OUT_FILE, 'utf8'));
  } catch {
    // primera ejecución
  }

  const files = (await readdir(PROJECTS_DIR)).filter((f) => f.endsWith('.md'));
  const result = { ...existing };

  await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/, '');
      const github = parseProject(await readFile(join(PROJECTS_DIR, file), 'utf8'));
      const repo = github ? parseRepo(github) : null;
      if (!repo) {
        console.log(`[readmes] ${slug}: sin github, se omite`);
        return;
      }
      const readme = await fetchReadme(repo.owner, repo.repo);
      if (readme) {
        const changed = result[slug] !== readme;
        result[slug] = readme;
        console.log(`[readmes] ${slug}: README ${changed ? 'actualizado' : 'sin cambios'}`);
      } else if (existing[slug]) {
        console.log(`[readmes] ${slug}: fetch falló, se conserva el anterior`);
      } else {
        console.warn(`[readmes] ${slug}: sin README disponible`);
      }
    })
  );

  await mkdir(dirname(OUT_FILE), { recursive: true });
  await writeFile(OUT_FILE, JSON.stringify(result, null, 2) + '\n', 'utf8');
  console.log(`[readmes] guardado: ${Object.keys(result).length} README(s)`);
}

main().catch((err) => {
  console.error('[readmes] error fatal (no rompe el build):', err.message);
  process.exit(0);
});
