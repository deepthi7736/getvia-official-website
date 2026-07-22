import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/layout/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const ListBusinessPage = lazy(() => import("./pages/ListBusinessPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const BookDemoPage = lazy(() => import("./pages/BookDemoPage"));
const PlatformPage = lazy(() => import("./pages/PlatformPage"));
const HowItWorksPage = lazy(() => import("./pages/HowItWorksPage"));

const FeaturesPage = lazy(() => import("./pages/FeaturesPage"));
const TechnologyPage = lazy(() => import("./pages/TechnologyPage"));
const IndustriesPage = lazy(() => import("./pages/IndustriesPage"));
const ForBusinessesPage = lazy(() =>
  import("./pages/ForBusinessesPage")
);
const ForProfessionalsPage = lazy(() =>
  import("./pages/ForProfessionalsPage")
);
const CustomersPage = lazy(() => import("./pages/CustomersPage"));
const VerificationPage = lazy(() =>
  import("./pages/VerificationPage")
);
const BlogPage = lazy(() => import("./pages/BlogPage"));
const BlogArticlePage = lazy(() =>
  import("./pages/BlogArticlePage")
);

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
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/for-businesses" element={<ForBusinessesPage />} />
          <Route
            path="/for-professionals"
            element={<ForProfessionalsPage />}
          />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/verification" element={<VerificationPage />} />

          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />

          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/book-demo" element={<BookDemoPage />} />
          <Route
            path="/list-your-business"
            element={<ListBusinessPage />}
          />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
