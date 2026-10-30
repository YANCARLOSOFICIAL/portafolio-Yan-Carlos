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
    draft: z.boolean().default(false),
    lang: z.enum(['es', 'en']).default('es'),
    featured: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    descriptionEn: z.string(),
    tech: z.array(z.string()),
    category: z.enum(['fullstack', 'frontend', 'backend', 'ai']),
    demo: z.string().url().optional(),
    github: z.string().url(),
    featured: z.boolean().default(false),
    /** true = sin ficha ni enlaces al repo: la tarjeta solo lleva a la demo */
    demoOnly: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
