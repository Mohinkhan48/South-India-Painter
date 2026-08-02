/**
 * main.tsx
 *
 * Application entry point.
 *
 * - Imports global CSS (Tailwind v4 + CSS custom properties)
 * - Mounts React 18 root with StrictMode
 */

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/styles/globals.css';
import App from './App';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(
    'Root element #root not found. Check your index.html file.'
  );
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
