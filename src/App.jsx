import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import ScrollToTop from "./components/layout/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

/* Main platform pages */

const ListBusinessPage = lazy(() => import("./pages/ListBusinessPage"));

const AboutPage = lazy(() => import("./pages/AboutPage"));

const ContactPage = lazy(() => import("./pages/ContactPage"));

const FAQPage = lazy(() => import("./pages/FAQPage"));

const BookDemoPage = lazy(() => import("./pages/BookDemo"));

const PlatformPage = lazy(() => import("./pages/PlatformPage"));

const HowItWorksPage = lazy(() => import("./pages/HowItWorksPage"));

const FeaturesPage = lazy(() => import("./pages/FeaturesPage"));

const TechnologyPage = lazy(() => import("./pages/TechnologyPage"));

const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));

/* Audience pages */

const ForBusinessesPage = lazy(() => import("./pages/ForBusinessesPage"));

const ForProfessionalsPage = lazy(() =>
  import("./pages/ForProfessionalsPage"),
);

const CustomersPage = lazy(() => import("./pages/CustomersPage"));

const VerificationPage = lazy(() => import("./pages/VerificationPage"));

/* Blog pages */

const BlogPage = lazy(() => import("./pages/BlogPage"));

const BlogArticlePage = lazy(() => import("./pages/BlogArticlePage"));

/* Resources and support pages */

const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));

const HelpCenterPage = lazy(() => import("./pages/HelpCenterPage"));

const SupportPage = lazy(() => import("./pages/SupportPage"));

/* Case study pages */

const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));

const CaseStudyPage = lazy(() => import("./pages/CaseStudyPage"));

/* Company pages */

const CareersPage = lazy(() => import("./pages/CareersPage"));

const PartnersPage = lazy(() => import("./pages/PartnersPage"));

const PressPage = lazy(() => import("./pages/PressPage"));

/* Legal pages */

const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));

const TermsOfServicePage = lazy(() =>
  import("./pages/TermsOfServicePage"),
);

const CookiePolicyPage = lazy(() => import("./pages/CookiePolicyPage"));

const RefundPolicyPage = lazy(() => import("./pages/RefundPolicyPage"));

/* Not found page */

const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function RouteFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-[#DDE5DE] border-t-[#007A1F]"
        role="status"
        aria-label="Loading page"
      />
    </div>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />

      <Suspense fallback={<RouteFallback />}>
        <Routes>
          {/* Home */}

          <Route path="/" element={<Home />} />

          {/* Platform and product */}

          <Route path="/about" element={<AboutPage />} />

          <Route path="/platform" element={<PlatformPage />} />

          <Route path="/how-it-works" element={<HowItWorksPage />} />

          <Route path="/features" element={<FeaturesPage />} />

          <Route path="/technology" element={<TechnologyPage />} />

          <Route path="/industries" element={<IndustriesPage />} />

          {/* Audience */}

          <Route
            path="/for-businesses"
            element={<ForBusinessesPage />}
          />

          <Route
            path="/for-professionals"
            element={<ForProfessionalsPage />}
          />

          <Route path="/customers" element={<CustomersPage />} />

          <Route
            path="/verification"
            element={<VerificationPage />}
          />

          {/* Blog */}

          <Route path="/blog" element={<BlogPage />} />

          <Route path="/blog/:slug" element={<BlogArticlePage />} />

          {/* Resources and support */}

          <Route path="/resources" element={<ResourcesPage />} />

          <Route
            path="/help-center"
            element={<HelpCenterPage />}
          />

          <Route path="/support" element={<SupportPage />} />

          {/* Case studies */}

          <Route
            path="/case-studies"
            element={<CaseStudiesPage />}
          />

          <Route
            path="/case-studies/:slug"
            element={<CaseStudyPage />}
          />

          {/* Company */}

          <Route path="/careers" element={<CareersPage />} />

          <Route path="/partners" element={<PartnersPage />} />

          <Route path="/press" element={<PressPage />} />

          {/* Contact and actions */}

          <Route path="/contact" element={<ContactPage />} />

          <Route path="/faq" element={<FAQPage />} />

          <Route
            path="/book-demo"
            element={<BookDemoPage />}
          />

          <Route
            path="/list-your-business"
            element={<ListBusinessPage />}
          />

          {/* Legal */}

          <Route
            path="/privacy-policy"
            element={<PrivacyPolicyPage />}
          />

          <Route
            path="/terms-of-service"
            element={<TermsOfServicePage />}
          />

          <Route
            path="/cookie-policy"
            element={<CookiePolicyPage />}
          />

          <Route
            path="/refund-policy"
            element={<RefundPolicyPage />}
          />

          {/* Page not found — always keep this last */}

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
