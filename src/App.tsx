import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';

const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfConditions = lazy(() => import('./pages/TermsOfConditions'));
const BlogIndex = lazy(() => import('./pages/BlogIndex'));
const Glossary = lazy(() => import('./pages/Glossary'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
