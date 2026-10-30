---
title: "Desplegar Astro en Cloudflare Pages con CI que refresca tu contenido"
description: "Cómo publicar un sitio Astro estático en Cloudflare Pages y automatizar la ingesta de datos externos con GitHub Actions antes de cada build."
pubDate: 2026-09-29
category: dev
tags: [cloudflare, astro, ci, github-actions]
---

Un sitio estático tiene un ciclo de vida simple: **datos → build → HTML → CDN**. El truco está en automatizar el primer paso para que el sitio nunca muestre información vieja.

## El build

```json
{
  "scripts": {
    "prebuild": "node scripts/fetch-youtube-videos.mjs",
    "build": "astro build"
  }
}
```

`prebuild` corre **automáticamente** antes de `build` en npm. Ahí vive la ingesta: llamamos a la API de YouTube, guardamos los últimos videos en `src/data/youtube-videos.json` y el build los incluye.

```js
// scripts/fetch-youtube-videos.mjs (extracto)
const res = await fetch(
  `https://www.googleapis.com/youtube/v3/search?...&channelId=${CHANNEL_ID}`,
  { headers: { Authorization: `Bearer ${token}` } }
);
writeFileSync('src/data/youtube-videos.json', JSON.stringify(items, null, 2));
```

Si la API falla, el script **no rompe el build**: deja el JSON anterior. La última versión buena siempre es preferible a un deploy roto.

## El cron que mantiene todo vivo

```yaml
# .github/workflows/refresh-content.yml
on:
  schedule:
    - cron: '17 */6 * * *' # cada 6 horas, minuto distinto al :00
  workflow_dispatch:

jobs:
  refresh:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm run prebuild
      - run: git config user.name 'github-actions[bot]'
      - run: git add src/data && git commit -m 'chore: refresh youtube content' || exit 0
      - run: git push
```

Dos detalles que duelen si no los sabes:

1. **`|| exit 0`**: si no hay cambios que commitear, la acción no debe fallar.
2. **`cron` en minuto raro** (`17` en vez de `00`): GitHub agenda en minutos exactos globalmente y el `:00` es el más congestionado; los jobs se retrasan horas.

## Cloudflare Pages

| Setting | Valor |
| --- | --- |
| Build command | `npm run build` |
| Build output | `dist` |
| Node version | `20` (en `package.json` o `.node-version`) |

La primera vez que conectas el repo, Cloudflare detecta Astro y lo configura solo. Después, **cada push a `main` = deploy**.

## Verificación post-deploy

```bash
curl -s https://tu-sitio.pages.dev/sitemap.xml | head
```

El sitemap generado en build es la prueba más rápida de que el deploy trajo el contenido nuevo. Si `sitemap-index.xml` no lista las rutas nuevas, el build no corrió con el contenido actualizado.

> **TL;DR**: los datos se refrescan en CI, el build empaqueta lo último que haya, y la CDN solo sirve HTML final. Cero servidores vigilando.
