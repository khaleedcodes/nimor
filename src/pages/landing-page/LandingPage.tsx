import HeroSection from "./HeroSection";
import ProjectsSection from "./ProjectsSection";
// import ProjectRoadmap from "./ProjectRoadmap";
import FeedbacksSection from "./FeedbacksSection";
import FaqSection from "./FaqSection";
export default function LandingPage() {
  return (
    <div className="w-full flex flex-col gap-10">
      <HeroSection />
      <ProjectsSection />
      {/* <ProjectRoadmap /> */}
      <FeedbacksSection />
      <FaqSection />
    </div>
  );
}
