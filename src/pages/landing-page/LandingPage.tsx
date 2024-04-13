import HeroSection from "./HeroSection";
// import ClientCarousel from "./ClientCarousel";
import ProjectsSection from "./ProjectsSection";
// import ProjectRoadmap from "./ProjectRoadmap";
// import FeedbacksSection from "./FeedbacksSection";
import FaqSection from "./FaqSection";
export default function LandingPage() {
  return (
    <div className="w-full flex flex-col gap-4">
      <HeroSection />
      {/* <ClientCarousel /> */}
      <ProjectsSection />
      {/* <ProjectRoadmap /> */}
      {/* <FeedbacksSection /> */}
      <FaqSection />
    </div>
  );
}
