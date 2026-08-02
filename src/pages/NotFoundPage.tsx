/**
 * pages/NotFoundPage.tsx
 *
 * 404 Not Found page — shown when no route matches.
 *
 * Uses React Router's useNavigate to provide a "Go Home" action.
 */

import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <section
      className="section container"
      style={{ textAlign: 'center', paddingBlock: '6rem' }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '4rem',
          color: 'var(--color-accent)',
          marginBottom: '0.5rem',
        }}
      >
        404
      </h1>
      <p
        style={{
          fontSize: '1.25rem',
          color: 'var(--color-text-primary)',
          marginBottom: '0.75rem',
        }}
      >
        Page not found
      </p>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        style={{
          padding: '0.75rem 2rem',
          background: 'var(--color-accent)',
          color: '#fff',
          fontWeight: 600,
          borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
          border: 'none',
          fontSize: '1rem',
        }}
      >
        Go Home
      </button>
    </section>
  );
}
