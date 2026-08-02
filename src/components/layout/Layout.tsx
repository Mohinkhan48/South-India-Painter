/**
 * components/layout/Layout.tsx
 *
 * Root layout wrapper rendered by React Router for all routes.
 *
 * Structure:
 *   <a> skip-to-main link (accessibility)
 *   <Header>
 *   <main id="main-content"> ← Outlet renders child routes here
 *   <Footer>
 */

import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      {/* Accessibility: skip to main content for keyboard users */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-1" style={{ paddingTop: 'var(--header-height)' }}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
