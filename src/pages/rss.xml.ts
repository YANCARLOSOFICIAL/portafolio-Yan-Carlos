import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime()
  );

  return rss({
    title: 'Código Tecnológico — Blog',
    description:
      'Notas sobre inteligencia artificial, desarrollo web y herramientas: tutoriales, guías y cosas que aprendo construyendo.',
    site: context.site ?? 'https://portafolio-yan-carlos.pages.dev',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      categories: [post.data.category],
    })),
    customData: '<language>es</language>',
  });
}
