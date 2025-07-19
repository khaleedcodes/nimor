import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ContentSections from "./ContentSections";

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-black text-white mt-20"
    >
      <HeroSection />
      <ContentSections />
    </motion.div>
  );
}
