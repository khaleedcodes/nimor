// import Rocket from "../../../components/Rocket";
import { motion } from "framer-motion";
import {
  headerVariants,
  itemVariants,
} from "../../landing-page/services-section/variants";
import SectionHeader from "@/components/SectionHeader";
import Button from "@/components/Button";
import { ChevronRight } from "lucide-react";

const arrowVariants = {
  initial: { x: 0 },
  hover: { x: 5 },
};

const ContactSection = () => {
  const handleSubmit = () => {};

  return (
    <section className="py-16 rounded-xl mt-20 mx-2 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 gap-10 flex flex-col">
        <div className="flex justify-center flex-col lg:flex-row  gap-4">
          <motion.div
            className="flex-col gap-4 text-left w-full lg:w-1/2 flex"
            variants={headerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Left side: SectionHeader */}
            <div className="w-full flex justify-start">
              <SectionHeader>Contact us</SectionHeader>
            </div>

            {/* Right side: Description */}
            <div className="w-full flex justify-start">
              <p className="text-sm leading-relaxed max-w-2xl text-black">
                Let's turn your idea into a rocket ship! Share your vision
                below, and we'll help you soar beyond the stars.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <div className="w-full flex justify-center">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-new-accent p-8 rounded-xl shadow-md text-white w-full"
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
                  className="mt-1 block w-full bg-second-accent text-white outline-none border-white/30 rounded-md shadow-sm p-3 placeholder:text-white/60 focus:ring-white focus:border-white focus:outline-none"
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
                  className="mt-1 block w-full bg-second-accent text-white outline-none border-white/30 rounded-md shadow-sm p-3 placeholder:text-white/60 focus:ring-white focus:border-white focus:outline-none"
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
                  className="mt-1 block w-full bg-second-accent text-white outline-none border-white/30 rounded-md shadow-sm p-3 focus:ring-white focus:border-white focus:outline-none"
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
                  className="mt-1 block w-full bg-second-accent text-white outline-none border-white/30 rounded-md shadow-sm p-3 placeholder:text-white/60 focus:ring-white focus:border-white focus:outline-none"
                  placeholder="Tell us a bit about your project goals..."
                ></textarea>
              </div>

              <motion.div
                className="text-center w-full"
                variants={itemVariants}
              >
                <motion.div
                  initial="initial"
                  whileHover="hover"
                  className="inline-block w-full"
                >
                  <Button className="pt-2 pb-2 pl-6 pr-6 flex items-center justify-center gap-1 w-full">
                    Submit Project Request
                    <motion.div variants={arrowVariants}>
                      <ChevronRight strokeWidth={1.5} />
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
