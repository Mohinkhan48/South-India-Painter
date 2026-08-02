/**
 * pages/ProjectDetailPage.tsx
 *
 * PLACEHOLDER — Individual project detail page (dynamic route: /projects/:slug).
 *
 * Planned sections:
 *   - Project hero image / gallery
 *   - Project details (location, category, year, scope)
 *   - Before / after gallery
 *   - Related projects
 *   - CTA to get a similar project
 */

import { useParams } from 'react-router-dom';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <section className="section container">
      <h1 style={{ fontFamily: 'var(--font-display)', marginBottom: '1rem' }}>
        Project Detail
      </h1>
      <p style={{ color: 'var(--color-text-muted)' }}>
        Project detail page placeholder for <strong>{slug}</strong> — design coming
        in a separate phase.
      </p>
    </section>
  );
}
