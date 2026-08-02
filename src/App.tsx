/**
 * App.tsx
 *
 * Application root. Mounts the router.
 *
 * Framer Motion's LazyMotion is configured here at the app level so all
 * child components can use motion features without individual setup.
 * Using domAnimation feature bundle for the best balance of size and capability.
 */

import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion';
import AppRouter from '@/router';

export default function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <AppRouter />
      </MotionConfig>
    </LazyMotion>
  );
}
