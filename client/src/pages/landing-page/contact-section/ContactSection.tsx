import Rocket from "../../../components/Rocket";
import { motion } from "framer-motion";
import { headerVariants } from "../../landing-page/services-section/variants";
import SectionHeader from "@/components/SectionHeader";
const ContactSection = () => {
  const handleSubmit = () => {};

  return (
    <section className="py-16 bg-[rgb(96,76,199,0.2)] rounded-xl mt-20 mx-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-10 flex flex-col">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between lg:gap-8 gap-4 text-left"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Left side: SectionHeader */}
          <div className="flex-shrink-0 w-full lg:w-5/12">
            <SectionHeader> Start Your Project</SectionHeader>
          </div>

          {/* Right side: Description */}
          <div className="w-full lg:w-7/12">
            <p className="text-sm leading-relaxed max-w-2xl text-white">
              Let's turn your idea into a rocket ship! Share your vision
              below, and we'll help you soar beyond the stars.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Rocket />
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-[rgb(96,76,199)] p-8 rounded-xl shadow-md text-white"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full bg-[#140f28] text-white border border-white/30 rounded-md shadow-sm p-3 placeholder:text-white/60 focus:ring-white focus:border-white focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full bg-[#140f28] text-white border border-white/30 rounded-md shadow-sm p-3 placeholder:text-white/60 focus:ring-white focus:border-white focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-white"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  className="mt-1 block w-full bg-[#140f28] text-white border border-white/30 rounded-md shadow-sm p-3 focus:ring-white focus:border-white focus:outline-none"
                >
                  <option value="">Select a type</option>
                  <option value="website">Website</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="mobile">Mobile App</option>
                  <option value="branding">Branding</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-1 block w-full bg-[#140f28] text-white border border-white/30 rounded-md shadow-sm p-3 placeholder:text-white/60 focus:ring-white focus:border-white focus:outline-none"
                  placeholder="Tell us a bit about your project goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-[rgb(96,76,199)] font-semibold py-3 px-6 rounded-md hover:bg-white/90 transition duration-300"
              >
                Submit Project Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
