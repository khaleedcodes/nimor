import { useState } from "react";
import { motion } from "framer-motion";
import WorkCard from "./WorkCard";
import { works } from "./works";
import CustomDropdown from "./CustomDropdown";

const industries = [
  "industry", // acts as "All Industries"
  "startup",
  "restaurant",
  "repair",
  "cleaning",
  "landscaping",
  "pet care",
];

const services = [
  "service", // acts as "All Services"
  "redesign",
  "seo",
  "web development",
];

export default function WorksSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("industry");
  const [selectedService, setSelectedService] = useState<string>("service");

  const filteredWorks = works.filter((work) => {
    const industryMatch = selectedIndustry === "industry" || work.industry === selectedIndustry;
    const serviceMatch = selectedService === "service" || work.service === selectedService;
    return industryMatch && serviceMatch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-primary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-200">
            Case Studies. <span className="text-gray-400">Featured Projects.</span>
          </h2>

          {/* Dropdown Filters */}
          <div className="flex flex-wrap gap-4">
            <CustomDropdown
              options={industries}
              value={selectedIndustry}
              onChange={setSelectedIndustry}
            />
            <CustomDropdown
              options={services}
              value={selectedService}
              onChange={setSelectedService}
            />
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {filteredWorks.map((work) => (
            <motion.div key={work.id} variants={itemVariants}>
              <WorkCard work={work} />
            </motion.div>
          ))}

          {filteredWorks.length === 0 && (
            <p className="text-gray-500 text-center py-10">No projects found for selected filters.</p>
          )}
        </motion.div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <button className="bg-first-accent hover:bg-first-accent/80 text-white px-8 py-3 rounded-lg font-medium transition-colors">
            Load More Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
