import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/layout/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const ListBusinessPage = lazy(() =>
  import("./pages/ListBusinessPage")
);

const AboutPage = lazy(() =>
  import("./pages/AboutPage")
);

const ContactPage = lazy(() =>
  import("./pages/ContactPage")
);

const FAQPage = lazy(() =>
  import("./pages/FAQPage")
);

const BookDemoPage = lazy(() =>
  import("./pages/BookDemoPage")
);

const PlatformPage = lazy(() =>
  import("./pages/PlatformPage")
);

const HowItWorksPage = lazy(() =>
  import("./pages/HowItWorksPage")
);

const FeaturesPage = lazy(() =>
  import("./pages/FeaturesPage")
);

const TechnologyPage = lazy(() =>
  import("./pages/TechnologyPage")
);

const IndustriesPage = lazy(() =>
  import("./pages/IndustriesPage")
);

const ForBusinessesPage = lazy(() =>
  import("./pages/ForBusinessesPage")
);

const ForProfessionalsPage = lazy(() =>
  import("./pages/ForProfessionalsPage")
);

const CustomersPage = lazy(() =>
  import("./pages/CustomersPage")
);

const VerificationPage = lazy(() =>
  import("./pages/VerificationPage")
);

const BlogPage = lazy(() =>
  import("./pages/BlogPage")
);

const BlogArticlePage = lazy(() =>
  import("./pages/BlogArticlePage")
);

/* New resource and support pages */

const ResourcesPage = lazy(() =>
  import("./pages/ResourcesPage")
);

const HelpCenterPage = lazy(() =>
  import("./pages/HelpCenterPage")
);

const SupportPage = lazy(() =>
  import("./pages/SupportPage")
);

/* New case study pages */

const CaseStudiesPage = lazy(() =>
  import("./pages/CaseStudiesPage")
);

const CaseStudyPage = lazy(() =>
  import("./pages/CaseStudyPage")
);

/* New company pages */

const CareersPage = lazy(() =>
  import("./pages/CareersPage")
);

const PartnersPage = lazy(() =>
  import("./pages/PartnersPage")
);

const PressPage = lazy(() =>
  import("./pages/PressPage")
);

const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage")
);

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
          {/* Main page */}

          <Route
            path="/"
            element={<Home />}
          />

          {/* Product and company information */}

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/platform"
            element={<PlatformPage />}
          />

          <Route
            path="/how-it-works"
            element={<HowItWorksPage />}
          />

          <Route
            path="/features"
            element={<FeaturesPage />}
          />

          <Route
            path="/technology"
            element={<TechnologyPage />}
          />

          <Route
            path="/industries"
            element={<IndustriesPage />}
          />

          {/* Audience pages */}

          <Route
            path="/for-businesses"
            element={<ForBusinessesPage />}
          />

          <Route
            path="/for-professionals"
            element={<ForProfessionalsPage />}
          />

          <Route
            path="/customers"
            element={<CustomersPage />}
          />

          <Route
            path="/verification"
            element={<VerificationPage />}
          />

          {/* Blog */}

          <Route
            path="/blog"
            element={<BlogPage />}
          />

          <Route
            path="/blog/:slug"
            element={<BlogArticlePage />}
          />

          {/* Resources and support */}

          <Route
            path="/resources"
            element={<ResourcesPage />}
          />

          <Route
            path="/help-center"
            element={<HelpCenterPage />}
          />

          <Route
            path="/support"
            element={<SupportPage />}
          />

          {/* Case studies */}

          <Route
            path="/case-studies"
            element={<CaseStudiesPage />}
          />

          <Route
            path="/case-studies/:slug"
            element={<CaseStudyPage />}
          />

          {/* Careers, partners, and press */}

          <Route
            path="/careers"
            element={<CareersPage />}
          />

          <Route
            path="/partners"
            element={<PartnersPage />}
          />

          <Route
            path="/press"
            element={<PressPage />}
          />

          {/* Contact and actions */}

          <Route
            path="/contact"
            element={<ContactPage />}
          />

          <Route
            path="/faq"
            element={<FAQPage />}
          />

          <Route
            path="/book-demo"
            element={<BookDemoPage />}
          />

          <Route
            path="/list-your-business"
            element={<ListBusinessPage />}
          />

          {/* Not found page */}

          <Route
            path="*"
            element={<NotFoundPage />}
          />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
