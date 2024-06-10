import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
import ProjectRoadmap from "./ProjectRoadmap";
import FeedbacksSection from "./FeedbacksSection";
import FaqSection from "./FaqSection";
import SolutionsSection from "./SolutionsSection";
import WebsitesSection from "./WebsitesSection";
export default function LandingPage() {
  return (
    <div className="w-full flex flex-col gap-5">
      <HeroSection />
      <SolutionsSection />
      <ProjectsSection />
      <WebsitesSection />
      <ProjectRoadmap />
      <FeedbacksSection />
      <FaqSection />
    </div>
  );
}
