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

// Property-type detail pages (Book Our Service cards)
const InteriorSpacesPage = lazy(
  () => import('@/pages/services/InteriorSpacesPage')
);
const VillasBungalowsPage = lazy(
  () => import('@/pages/services/VillasBungalowsPage')
);
const HighRiseApartmentsPage = lazy(
  () => import('@/pages/services/HighRiseApartmentsPage')
);
const CommercialSpacesPage = lazy(
  () => import('@/pages/services/CommercialSpacesPage')
);
const ResidentialBuildingsPage = lazy(
  () => import('@/pages/services/ResidentialBuildingsPage')
);
const IndustriesPage = lazy(
  () => import('@/pages/services/IndustriesPage')
);
const ProjectsPage = lazy(() => import('@/pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('@/pages/ProjectDetailPage'));
const ColourIdeasPage = lazy(() => import('@/pages/ColourIdeasPage'));
const ColourIdeasRoomPage = lazy(() => import('@/pages/ColourIdeasRoomPage'));
const ResourcesPage = lazy(() => import('@/pages/ResourcesPage'));
const GenericPlaceholderPage = lazy(() => import('@/pages/GenericPlaceholderPage'));
const CityLocationPage = lazy(() => import('@/pages/CityLocationPage'));
const BlogListPage = lazy(() => import('@/pages/BlogListPage'));
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'));
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
          // Property-type detail pages (Book Our Service cards)
          {
            path: 'interior-spaces',
            element: (
              <Suspense fallback={<PageLoader />}>
                <InteriorSpacesPage />
              </Suspense>
            ),
          },
          {
            path: 'villas-bungalows',
            element: (
              <Suspense fallback={<PageLoader />}>
                <VillasBungalowsPage />
              </Suspense>
            ),
          },
          {
            path: 'high-rise-apartments',
            element: (
              <Suspense fallback={<PageLoader />}>
                <HighRiseApartmentsPage />
              </Suspense>
            ),
          },
          {
            path: 'commercial-spaces',
            element: (
              <Suspense fallback={<PageLoader />}>
                <CommercialSpacesPage />
              </Suspense>
            ),
          },
          {
            path: 'residential-buildings',
            element: (
              <Suspense fallback={<PageLoader />}>
                <ResidentialBuildingsPage />
              </Suspense>
            ),
          },
          {
            path: 'industries',
            element: (
              <Suspense fallback={<PageLoader />}>
                <IndustriesPage />
              </Suspense>
            ),
          },
          {
            path: ':slug',
            element: (
              <Suspense fallback={<PageLoader />}>
                <GenericPlaceholderPage />
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
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<PageLoader />}>
                <ColourIdeasPage />
              </Suspense>
            ),
          },
          {
            path: ':roomSlug',
            element: (
              <Suspense fallback={<PageLoader />}>
                <ColourIdeasRoomPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'resources',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<PageLoader />}>
                <ResourcesPage />
              </Suspense>
            ),
          },
          {
            path: 'blogs',
            children: [
              {
                index: true,
                element: (
                  <Suspense fallback={<PageLoader />}>
                    <BlogListPage />
                  </Suspense>
                ),
              },
              {
                path: ':slug',
                element: (
                  <Suspense fallback={<PageLoader />}>
                    <BlogPostPage />
                  </Suspense>
                ),
              },
            ]
          },
          {
            path: ':slug',
            element: (
              <Suspense fallback={<PageLoader />}>
                <GenericPlaceholderPage />
              </Suspense>
            ),
          },
        ]
      },
      {
        path: 'locations/:city',
        element: (
          <Suspense fallback={<PageLoader />}>
            <CityLocationPage />
          </Suspense>
        ),
      },
      {
        path: 'products',
        element: (
          <Suspense fallback={<PageLoader />}>
            <GenericPlaceholderPage />
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
