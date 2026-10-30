/**
 * Obtiene los últimos videos del canal y los guarda en src/data/youtube-videos.json.
 *
 * Estrategia (en orden, nunca rompe el build):
 *   1. YouTube Data API v3 — si existe YOUTUBE_API_KEY (CI/GitHub Actions).
 *   2. Página pública /@handle/videos — parsea ytInitialData (sin API key).
 *   3. Si ambas fallan: se conserva el contenido guardado.
 *
 * Corre en `prebuild` y en el workflow de GitHub Actions cada 6 horas.
 */
import { readFile, writeFile } from 'node:fs/promises';

const outputPath = new URL('../src/data/youtube-videos.json', import.meta.url);
const apiKey = process.env.YOUTUBE_API_KEY;
const channelId = process.env.YOUTUBE_CHANNEL_ID || 'UCwvO94g5B-22nwJDlKvwdAw';
const handle = process.env.YOUTUBE_HANDLE || '@codigotecnologico10';
const MAX_VIDEOS = 8;

/* ---------- 1. YouTube Data API v3 (con clave) ---------- */
async function fetchFromApi() {
  if (!apiKey) return null;

  const channelUrl = new URL('https://www.googleapis.com/youtube/v3/channels');
  channelUrl.search = new URLSearchParams({ part: 'contentDetails', id: channelId, key: apiKey });
  const channelResponse = await fetch(channelUrl);
  if (!channelResponse.ok) throw new Error(`channels ${channelResponse.status}`);

  const channelData = await channelResponse.json();
  const uploads = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;
  if (!uploads) throw new Error('el canal no tiene uploads públicos');

  const videosUrl = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
  videosUrl.search = new URLSearchParams({
    part: 'snippet',
    playlistId: uploads,
    maxResults: String(MAX_VIDEOS),
    key: apiKey,
  });
  const videosResponse = await fetch(videosUrl);
  if (!videosResponse.ok) throw new Error(`playlistItems ${videosResponse.status}`);

  const data = await videosResponse.json();
  return (data.items ?? [])
    .map((item) => ({
      id: item.snippet?.resourceId?.videoId,
      title: item.snippet?.title,
    }))
    .filter((v) => v.id && v.title);
}

/* ---------- 2. Página pública del canal (sin clave) ---------- */
async function fetchFromPage() {
  const url = `https://www.youtube.com/${handle}/videos`;
  const response = await fetch(url, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      'Accept-Language': 'es-CO,es',
    },
    signal: AbortSignal.timeout(15000),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);

  const html = await response.text();
  const match = /var ytInitialData = (\{[\s\S]+?\})\s*;\s*<\/script>/.exec(html);
  if (!match) throw new Error('ytInitialData no encontrado');
  const data = JSON.parse(match[1]);

  const videos = [];
  const seen = new Set();
  const push = (id, title) => {
    if (id && title && !seen.has(id)) {
      seen.add(id);
      videos.push({ id, title });
    }
  };

  const walk = (node) => {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) return node.forEach(walk);
    // Formato clásico
    if (node.videoRenderer?.videoId) {
      const t = node.videoRenderer.title;
      push(node.videoRenderer.videoId, t?.runs?.map((r) => r.text).join('') ?? t?.simpleText);
    }
    // Formato actual (lockupViewModel)
    if (node.lockupViewModel?.contentId) {
      const title = node.lockupViewModel.metadata?.lockupMetadataViewModel?.title?.content;
      push(node.lockupViewModel.contentId, title);
    }
    for (const value of Object.values(node)) walk(value);
  };
  walk(data);

  if (videos.length === 0) throw new Error('sin videos en la página');
  return videos;
}

/* ---------- 3. Fallback: conservar contenido guardado ---------- */
async function keepPrevious(reason) {
  try {
    await readFile(outputPath, 'utf8');
    console.warn(`[youtube] ${reason}; se conserva el contenido guardado.`);
    process.exit(0);
  } catch {
    console.error(`[youtube] ${reason} y no hay contenido previo.`);
    process.exit(1);
  }
}

async function main() {
  let videos = null;
  let source = '';

  try {
    videos = await fetchFromApi();
    if (videos?.length) source = 'api';
  } catch (err) {
    console.warn(`[youtube] API falló (${err.message}); se intenta la página del canal.`);
  }

  if (!videos?.length) {
    try {
      videos = await fetchFromPage();
      source = 'página';
    } catch (err) {
      return keepPrevious(`No se pudo obtener la lista (${err.message})`);
    }
  }

  const list = videos.slice(0, MAX_VIDEOS);
  const next = `${JSON.stringify(list, null, 2)}\n`;
  const current = await readFile(outputPath, 'utf8').catch(() => '[]');

  if (current !== next) {
    await writeFile(outputPath, next, 'utf8');
    console.log(`[youtube] ${list.length} videos actualizados (vía ${source}).`);
  } else {
    console.log(`[youtube] No hay videos nuevos (vía ${source}).`);
  }
}

main().catch((err) => {
  console.error('[youtube] error inesperado:', err.message);
  process.exit(0);
});
