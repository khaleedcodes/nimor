import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import PageLayout from "./pages/layout-page/LayoutPage";
import ErrorPage from "./pages/error-page/ErrorPage";
import FormSubmittedPage from "./pages/form-submitted-page/FormSubmittedPage";
import Logo from "./pages/landing-page/Logo";
import WorkPage from "./pages/work-page/WorkPage";
import CaseStudyPage from "./pages/work-page/CaseStudyPage";
import AboutPage from "./pages/about-page/AboutPage";
import ContactPage from "./pages/contact-page/ContactPage";
import ServiceDetailPage from "./pages/service-detail-page/ServiceDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageLayout>
        <LandingPage />
      </PageLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/works",
    element: (
      <PageLayout>
        <WorkPage />
      </PageLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <PageLayout>
        <AboutPage />
      </PageLayout>
    ),
  },
  {
    path: "/contact",
    element: (
      <PageLayout>
        <ContactPage />
      </PageLayout>
    ),
  },
  {
    path: "/services/:id",
    element: (
      <PageLayout>
        <ServiceDetailPage />
      </PageLayout>
    ),
  },
  {
    path: "/works/:id",
    element: (
      <PageLayout>
        <CaseStudyPage />
      </PageLayout>
    ),
  },
  {
    path: "/submitted",
    element: <FormSubmittedPage />,
  },
  {
    path: "/logo",
    element: <Logo />,
  },
]);

function App() {
  return (
    <div className="bg-primary text-white overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
