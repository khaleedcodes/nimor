import HeroSection from "./HeroSection";
// import ProjectsSection from "./ProjectsSection";
import ProjectRoadmap from "./ProjectRoadmap";
// import FeedbacksSection from "./FeedbacksSection";
import FaqSection from "./FaqSection";
// import SolutionsSection from "./SolutionsSection";
import WebsitesSection from "./WebsitesSection";
import ServicesSection from "./services-section/ServicesSection";
import WhyChooseUs from "./why-nimor-section/WhyChooseUs";
import TestimonialSection from "./testimonial-section/Testimonial";
import ContactForm from "./contact-section/ContactSection";
// import ProjectSlider from "./projects-section/ProjectSlider";
export default function LandingPage() {
  return (
    <div className="w-full flex flex-col gap-10">
      <HeroSection />
      <ServicesSection />
      <WebsitesSection />
      {/* <ProjectSlider/>
      <ProjectsSection /> */}
      <ProjectRoadmap />
      <WhyChooseUs />
      <TestimonialSection />
      {/* <FeedbacksSection /> */}
      <ContactForm />
      <FaqSection />
    </div>
  );
}
