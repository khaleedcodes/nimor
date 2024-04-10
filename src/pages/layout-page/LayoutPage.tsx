import { PageLayoutProp } from "../../../src/types/types";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

function PageLayout({ children }: PageLayoutProp) {
  return (
    <div className="flex flex-col border">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default PageLayout;
