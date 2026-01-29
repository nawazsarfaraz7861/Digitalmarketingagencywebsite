import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CareersPage } from './pages/CareersPage';
import { BlogPage } from './pages/BlogPage';
import { OurTeamPage } from './pages/OurTeamPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/about',
    Component: AboutPage,
  },
  {
    path: '/careers',
    Component: CareersPage,
  },
  {
    path: '/blog',
    Component: BlogPage,
  },
  {
    path: '/team',
    Component: OurTeamPage,
  },
  {
    path: '/case-studies',
    Component: CaseStudiesPage,
  },
  {
    path: '/contact',
    Component: ContactPage,
  },
  {
    path: '/privacy',
    Component: PrivacyPolicyPage,
  },
]);
