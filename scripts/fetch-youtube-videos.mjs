import { readFile, writeFile } from 'node:fs/promises';

const outputPath = new URL('../src/data/youtube-videos.json', import.meta.url);
const apiKey = process.env.YOUTUBE_API_KEY;
const channelId = process.env.YOUTUBE_CHANNEL_ID || 'UCwvO94g5B-22nwJDlKvwdAw';

if (!apiKey) {
  console.log('[youtube] YOUTUBE_API_KEY no está configurada; se conserva el contenido guardado.');
  process.exit(0);
}

const channelUrl = new URL('https://www.googleapis.com/youtube/v3/channels');
channelUrl.search = new URLSearchParams({
  part: 'contentDetails',
  id: channelId,
  key: apiKey,
});

const channelResponse = await fetch(channelUrl);
if (!channelResponse.ok) {
  throw new Error(`[youtube] No se pudo consultar el canal (${channelResponse.status}).`);
}

const channelData = await channelResponse.json();
const uploadsPlaylistId = channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads;

if (!uploadsPlaylistId) {
  throw new Error('[youtube] El canal no tiene una lista de videos pública disponible.');
}

const videosUrl = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
videosUrl.search = new URLSearchParams({
  part: 'snippet',
  playlistId: uploadsPlaylistId,
  maxResults: '2',
  key: apiKey,
});

const videosResponse = await fetch(videosUrl);
if (!videosResponse.ok) {
  throw new Error(`[youtube] No se pudieron consultar los videos (${videosResponse.status}).`);
}

const videosData = await videosResponse.json();
const videos = (videosData.items ?? [])
  .map((item) => ({
    id: item.snippet?.resourceId?.videoId,
    title: item.snippet?.title,
  }))
  .filter((video) => video.id && video.title);

if (videos.length === 0) {
  throw new Error('[youtube] La respuesta no contiene videos válidos.');
}

const current = await readFile(outputPath, 'utf8');
const next = `${JSON.stringify(videos, null, 2)}\n`;

if (current !== next) {
  await writeFile(outputPath, next, 'utf8');
  console.log(`[youtube] ${videos.length} videos actualizados.`);
} else {
  console.log('[youtube] No hay videos nuevos.');
}
