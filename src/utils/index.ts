/**
 * utils/index.ts
 *
 * Central export point for utility/helper functions.
 *
 * Planned utilities:
 *   - cn(...classes) — conditional class name merger
 *   - formatPhoneNumber(phone) — Indian phone number formatter
 *   - slugify(text) — text to URL slug
 *   - truncate(text, length) — truncate text with ellipsis
 *
 * Utilities will be added here as each feature is built.
 */

/**
 * cn — Merge class names, filtering out falsy values.
 * Lightweight alternative to clsx for simple use cases.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * slugify — Convert a string to a URL-safe slug.
 * @example slugify('Interior Painting') → 'interior-painting'
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * truncate — Truncate text to a maximum length with ellipsis.
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trimEnd() + '…';
}
