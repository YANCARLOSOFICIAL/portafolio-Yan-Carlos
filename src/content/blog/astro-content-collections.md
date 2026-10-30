---
title: "De una sola página a blog: Content Collections en Astro 5"
description: "Así migramos este portafolio de componentes hardcodeados a un sistema de contenido real con Markdown, rutas dinámicas y SEO desde el build."
pubDate: 2026-10-16
category: web
tags: [astro, markdown, seo, ssg]
featured: true
---

Este sitio empezó con **un solo archivo**: `index.astro` con todo el contenido dentro de los componentes. Funcionaba, pero cada entrada nueva significaba tocar código. Con **Content Collections** el contenido se separa del código: escribes Markdown, el build genera las rutas.

## 1. La colección

```ts
// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['ia', 'web', 'dev']),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
```

El `schema` con Zod es la parte que más ahorra dolores de cabeza: si te comes una coma en el frontmatter, **el build falla en lugar de publicar basura**.

## 2. Las rutas dinámicas

```astro
---
// src/pages/blog/[...slug].astro
import { getCollection, render } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}

const { post } = Astro.props;
const { Content } = await render(post);
---
<article class="prose-brutal"><Content /></article>
```

`getStaticPaths` es la magia de lo estático: cada Markdown se convierte en un HTML en el build. Cero servidor, cero base de datos, cero factura.

## 3. Lo que ganamos

| Antes | Después |
| --- | --- |
| Contenido dentro de TSX | Archivos `.md` independientes |
| Copiar y pegar tarjetas | Listado generado desde la colección |
| SEO manual por página | Frontmatter → meta tags automáticos |
| Sin sitemap real | Sitemap generado en cada build |

## 4. El sitemap ya no se mantiene a mano

Antes había un `public/sitemap.xml` escrito a mano que se olvidaba de actualizar. Con `@astrojs/sitemap` se genera solo:

```js
// astro.config.mjs
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [react(), tailwind(), sitemap()],
  site: 'https://portafolio-yan-carlos.pages.dev',
});
```

> Dato clave: en SSG el **contenido es tu única fuente de verdad**. Si un dato vive en dos lugares, eventualmente miente.

## Próximo paso

Con la colección lista, el siguiente salto es un **feed RSS** y filtros por categoría en `/blog`. Todo se resuelve leyendo la misma colección.
