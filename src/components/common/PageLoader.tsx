/**
 * components/common/PageLoader.tsx
 *
 * Minimal full-screen loading indicator shown while lazy-loaded
 * page chunks are being fetched. Replaced with a proper spinner
 * during the visual design phase.
 */

export default function PageLoader() {
  return (
    <div
      role="status"
      aria-label="Loading page"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        fontFamily: 'var(--font-sans)',
        color: 'var(--color-text-muted)',
        fontSize: '0.875rem',
        letterSpacing: '0.05em',
      }}
    >
      Loading…
    </div>
  );
}
