import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X } from "lucide-react";
import WorkCard from "./WorkCard";
import { works } from "./works";
import CustomDropdown from "./CustomDropdown";

const industries = [
  "industry",
  "startup",
  "restaurant",
  "repair",
  "cleaning",
  "landscaping",
  "pet care",
];

const services = ["service", "redesign", "seo", "web development"];

export default function WorksSection() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("industry");
  const [selectedService, setSelectedService] = useState<string>("service");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleIndustryChange = (value: string) => setSelectedIndustry(value);
  const handleServiceChange = (value: string) => setSelectedService(value);
  const clearFilters = () => {
    setSelectedIndustry("industry");
    setSelectedService("service");
    setSearchQuery("");
  };

  const matchesSearch = (text: string) =>
    text.toLowerCase().includes(searchQuery.toLowerCase());

  const filteredWorks = works.filter((work) => {
    const industryMatch =
      selectedIndustry === "industry" || work.industry === selectedIndustry;
    const serviceMatch =
      selectedService === "service" || work.service === selectedService;

    const searchMatch =
      searchQuery.trim() === "" ||
      matchesSearch(work.title) ||
      matchesSearch(work.subtitle || "") ||
      matchesSearch(work.description) ||
      matchesSearch(work.industry) ||
      matchesSearch(work.service) ||
      work.categories.some((cat) => matchesSearch(cat));

    return industryMatch && serviceMatch && searchMatch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
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
          <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-200">
              Case Studies.{" "}
              <span className="text-gray-400">Featured Projects.</span>
            </h2>

            {/* Search Toggle */}
            {/* Search Toggle */}
            <div className="flex items-center gap-2 overflow-hidden relative">
              <AnimatePresence initial={false}>
                {searchOpen && (
                  <motion.input
                    key="search-input"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    exit={{ width: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search projects..."
                    className="bg-transparent border border-gray-600 rounded-lg px-3 py-1 text-white placeholder-gray-400 focus:outline-none focus:border-white"
                  />
                )}
              </AnimatePresence>

              <motion.button
                key="search-toggle"
                initial={false}
                animate={{ marginLeft: searchOpen ? 0 : "0.5rem" }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  if (searchOpen && searchQuery !== "") {
                    setSearchQuery("");
                  } else {
                    setSearchOpen(!searchOpen);
                  }
                }}
                className="p-2 text-white border border-gray-600 rounded-lg hover:border-white transition"
              >
                {searchOpen ? <X size={20} /> : <Search size={20} />}
              </motion.button>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <CustomDropdown
              options={industries}
              value={selectedIndustry}
              onChange={handleIndustryChange}
            />
            <CustomDropdown
              options={services}
              value={selectedService}
              onChange={handleServiceChange}
            />
            <AnimatePresence>
              {(selectedIndustry !== "industry" ||
                selectedService !== "service" ||
                searchQuery !== "") && (
                <motion.button
                  key="clear-filters"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  onClick={clearFilters}
                  className="text-sm font-medium px-4 py-2 rounded-lg border border-gray-600 text-gray-300 hover:text-white hover:border-white transition"
                >
                  Clear Filters
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Project List */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedIndustry}-${selectedService}-${searchQuery}`}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="space-y-8"
          >
            {filteredWorks.map((work) => (
              <motion.div key={work.id} variants={itemVariants}>
                <WorkCard work={work} />
              </motion.div>
            ))}

            {filteredWorks.length === 0 && (
              <motion.div
                variants={itemVariants}
                className="text-center py-12 text-gray-300 max-w-xl mx-auto"
              >
                <p className="text-lg md:text-xl font-medium mb-4">
                  We haven’t built something quite like this — yet.
                </p>
                <p className="text-sm md:text-base mb-6 text-gray-400">
                  But we’d love to change that. Be one of the first to bring
                  your idea to life, and we might even feature your project in
                  our collection.
                </p>
                <button
                  onClick={() => (window.location.href = "/contact")}
                  className="bg-first-accent hover:bg-first-accent/80 text-white px-6 py-3 rounded-lg font-medium transition"
                >
                  Start Your Project
                </button>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
