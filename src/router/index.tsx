/**
 * router/index.tsx
 *
 * Application route configuration using React Router v6 createBrowserRouter.
 *
 * All routes are wrapped by the Layout component (Header + Footer).
 * Lazy loading is set up for each page to enable code splitting.
 *
 * Route map:
 *   /                           → HomePage
 *   /services                   → ServicesPage
 *   /services/interior-painting → InteriorPaintingPage
 *   /services/exterior-painting → ExteriorPaintingPage
 *   /services/waterproofing     → WaterproofingPage
 *   /services/wall-textures     → WallTexturesPage
 *   /services/wallpaper         → WallpaperPage
 *   /services/wood-finishes     → WoodFinishesPage
 *   /services/commercial-painting → CommercialPaintingPage
 *   /projects                   → ProjectsPage
 *   /projects/:slug             → ProjectDetailPage
 *   /colour-ideas               → ColourIdeasPage
 *   /about                      → AboutPage
 *   /contact                    → ContactPage
 *   *                           → NotFoundPage
 */

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '@/components/layout/Layout';
import PageLoader from '@/components/common/PageLoader';

// ---------------------------------------------------------------------------
// Lazy-loaded page components
// ---------------------------------------------------------------------------

const HomePage = lazy(() => import('@/pages/HomePage'));
const ServicesPage = lazy(() => import('@/pages/ServicesPage'));
const InteriorPaintingPage = lazy(
  () => import('@/pages/services/InteriorPaintingPage')
);
const ExteriorPaintingPage = lazy(
  () => import('@/pages/services/ExteriorPaintingPage')
);
const WaterproofingPage = lazy(
  () => import('@/pages/services/WaterproofingPage')
);
const WallTexturesPage = lazy(
  () => import('@/pages/services/WallTexturesPage')
);
const WallpaperPage = lazy(() => import('@/pages/services/WallpaperPage'));
const WoodFinishesPage = lazy(
  () => import('@/pages/services/WoodFinishesPage')
);
const CommercialPaintingPage = lazy(
  () => import('@/pages/services/CommercialPaintingPage')
);
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetailPage'));
const ColourIdeasPage = lazy(() => import('@/pages/ColourIdeasPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));
const ContactPage = lazy(() => import('@/pages/ContactPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

// ---------------------------------------------------------------------------
// Router definition
// ---------------------------------------------------------------------------

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'services',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<PageLoader />}>
                <ServicesPage />
              </Suspense>
            ),
          },
          {
            path: 'interior-painting',
            element: (
              <Suspense fallback={<PageLoader />}>
                <InteriorPaintingPage />
              </Suspense>
            ),
          },
          {
            path: 'exterior-painting',
            element: (
              <Suspense fallback={<PageLoader />}>
                <ExteriorPaintingPage />
              </Suspense>
            ),
          },
          {
            path: 'waterproofing',
            element: (
              <Suspense fallback={<PageLoader />}>
                <WaterproofingPage />
              </Suspense>
            ),
          },
          {
            path: 'wall-textures',
            element: (
              <Suspense fallback={<PageLoader />}>
                <WallTexturesPage />
              </Suspense>
            ),
          },
          {
            path: 'wallpaper',
            element: (
              <Suspense fallback={<PageLoader />}>
                <WallpaperPage />
              </Suspense>
            ),
          },
          {
            path: 'wood-finishes',
            element: (
              <Suspense fallback={<PageLoader />}>
                <WoodFinishesPage />
              </Suspense>
            ),
          },
          {
            path: 'commercial-painting',
            element: (
              <Suspense fallback={<PageLoader />}>
                <CommercialPaintingPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'projects',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<PageLoader />}>
                <ProjectsPage />
              </Suspense>
            ),
          },
          {
            path: ':slug',
            element: (
              <Suspense fallback={<PageLoader />}>
                <ProjectDetailPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'colour-ideas',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ColourIdeasPage />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageLoader />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<PageLoader />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoader />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);

// ---------------------------------------------------------------------------
// Router provider export
// ---------------------------------------------------------------------------

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
