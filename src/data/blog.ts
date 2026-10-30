export type BlogCategory = 'ia' | 'web' | 'dev';

export interface CategoryMeta {
  label: string;
  color: string;
  es: string;
  en: string;
}

/** Colores alineados con el tema de tailwind.config.js */
export const CATEGORIES: Record<BlogCategory, CategoryMeta> = {
  ia: { label: 'IA', color: 'text-cyber border-cyber', es: 'Inteligencia artificial', en: 'Artificial intelligence' },
  web: { label: 'WEB', color: 'text-accent border-accent', es: 'Desarrollo web', en: 'Web development' },
  dev: { label: 'DEV', color: 'text-depth border-depth', es: 'Herramientas y workflow', en: 'Tools and workflow' },
};

export const CATEGORY_KEYS = Object.keys(CATEGORIES) as BlogCategory[];

const MONTHS_ES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const MONTHS_EN = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

export function formatDate(date: Date, lang: 'es' | 'en' = 'es'): string {
  const months = lang === 'es' ? MONTHS_ES : MONTHS_EN;
  // UTC: el schema convierte 'YYYY-MM-DD' a medianoche UTC, evita restar un día en UTC-5
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${day} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

/** Fecha estilo git: 2026-10-21 */
export function gitDate(date: Date): string {
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${date.getUTCFullYear()}-${m}-${d}`;
}

export function readingTime(body: string | undefined): number {
  const words = (body ?? '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
