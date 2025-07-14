import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import PageLayout from "./pages/layout-page/LayoutPage";
import ErrorPage from "./pages/error-page/ErrorPage";
import FormSubmittedPage from "./pages/form-submitted-page/FormSubmittedPage";
import Logo from "./pages/landing-page/Logo";
import WorkPage from "./pages/work-page/WorkPage";
import WorksSection from "./pages/work/WorksSection";

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
    path: "/work",
    element: (
      <PageLayout>
        <WorkPage />
        <WorksSection/>
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
