import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import PageLayout from "./pages/layout-page/LayoutPage";
import ErrorPage from "./pages/error-page/ErrorPage";
import FormSubmittedPage from "./pages/form-submitted-page/FormSubmittedPage";

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
    path: "/submitted",
    element: <FormSubmittedPage />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
