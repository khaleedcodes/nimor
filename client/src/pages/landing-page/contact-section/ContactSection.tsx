import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
}

export default function ContactForm() {
  // Form state management
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Spotlight effect state
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const formRef = useRef<HTMLDivElement>(null);

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Project type options
  const projectTypes = [
    { value: "website-design", label: "Website Design & Development" },
    { value: "website-redesign", label: "Website Redesign" },
    { value: "seo-analytics", label: "SEO & Analytics" },
    { value: "support-maintenance", label: "Support & Maintenance" },
  ];

  // Update spotlight position on mouse move relative to form
  const handleMouseMove = (e: MouseEvent) => {
    if (formRef.current) {
      const rect = formRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    }
  };

  // Handle form hover events
  const handleMouseEnter = () => {
    setIsHovered(true);
    document.addEventListener("mousemove", handleMouseMove);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    document.removeEventListener("mousemove", handleMouseMove);
  };

  // Cleanup mouse event listener
  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    // Real-time email validation
    if (name === "email") {
      setIsEmailValid(value.length > 0 && emailRegex.test(value));
    }
  };

  // Validate form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      setShowSuccess(true);

      // Reset form
      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: "",
      });
      setIsEmailValid(false);

      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{ backgroundColor: "#0a0a0a" }}
    >
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 dot-pattern" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-blue-400 mb-4">Get a Quote</h1>
          <p className="text-gray-300 text-lg max-w-md mx-auto leading-relaxed">
            Tell us about your project and we'll get back to you within 24
            hours.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          ref={formRef}
          className="relative border rounded-2xl p-10 shadow-2xl backdrop-blur-lg"
          style={{
            backgroundColor: "rgba(30, 30, 30, 0.8)",
            borderColor: "rgba(107, 114, 128, 0.5)",
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            rotateX: isHovered ? -5 : 0,
            rotateY: isHovered ? 2 : 0,
            z: isHovered ? 50 : 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            rotateX: { duration: 0.4, ease: "easeOut" },
            rotateY: { duration: 0.4, ease: "easeOut" },
            z: { duration: 0.4, ease: "easeOut" },
          }}
        >
          {/* Glass spotlight effect below form */}
          <motion.div
            className="absolute -inset-6 pointer-events-none rounded-3xl"
            style={{
              background: `radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, 
                rgba(59, 130, 246, 0.2) 0%, 
                rgba(59, 130, 246, 0.05) 50%, 
                transparent 80%)`,
              filter: "blur(2px)",
              zIndex: -1,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />

          {/* Inner glow for premium feel */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
          />
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name Field */}
            <div className="group relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="peer w-full px-5 py-4 border rounded-xl text-white placeholder-transparent focus:outline-none transition-all duration-300"
                style={{
                  backgroundColor: "rgba(55, 55, 55, 0.6)",
                  borderColor: "rgba(107, 114, 128, 0.5)",
                }}
                placeholder="Your full name"
                aria-describedby={errors.name ? "name-error" : undefined}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgb(59, 130, 246)";
                  e.target.style.boxShadow =
                    "0 0 0 2px rgba(59, 130, 246, 0.5)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(107, 114, 128, 0.5)";
                  e.target.style.boxShadow = "none";
                }}
              />
              <label
                htmlFor="name"
                className="absolute left-5 -top-2.5 px-2 text-sm font-medium transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm"
                style={{
                  color: "#9CA3AF",
                  backgroundColor: "rgba(30, 30, 30, 0.8)",
                }}
              >
                Name *
              </label>
              {errors.name && (
                <motion.div
                  id="name-error"
                  className="text-sm mt-2 flex items-center gap-1"
                  style={{ color: "#EF4444" }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>⚠</span>
                  {errors.name}
                </motion.div>
              )}
            </div>

            {/* Email Field */}
            <div className="group relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="peer w-full px-5 py-4 border rounded-xl text-white placeholder-transparent focus:outline-none transition-all duration-300"
                style={{
                  backgroundColor: "rgba(55, 55, 55, 0.6)",
                  borderColor: "rgba(107, 114, 128, 0.5)",
                }}
                placeholder="your@email.com"
                aria-describedby={
                  errors.email
                    ? "email-error"
                    : isEmailValid
                    ? "email-success"
                    : undefined
                }
                onFocus={(e) => {
                  e.target.style.borderColor = "rgb(59, 130, 246)";
                  e.target.style.boxShadow =
                    "0 0 0 2px rgba(59, 130, 246, 0.5)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(107, 114, 128, 0.5)";
                  e.target.style.boxShadow = "none";
                }}
              />
              <label
                htmlFor="email"
                className="absolute left-5 -top-2.5 px-2 text-sm font-medium transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm"
                style={{
                  color: "#9CA3AF",
                  backgroundColor: "rgba(30, 30, 30, 0.8)",
                }}
              >
                Email *
              </label>
              {errors.email && (
                <motion.div
                  id="email-error"
                  className="text-sm mt-2 flex items-center gap-1"
                  style={{ color: "#EF4444" }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>⚠</span>
                  {errors.email}
                </motion.div>
              )}
              {isEmailValid && !errors.email && (
                <motion.div
                  id="email-success"
                  className="text-sm mt-2 flex items-center gap-1"
                  style={{ color: "#10B981" }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Check className="w-4 h-4" />
                  <span>Valid email address</span>
                </motion.div>
              )}
            </div>

            {/* Project Type Dropdown */}
            <div className="group relative">
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleInputChange}
                className="peer w-full px-5 py-4 border rounded-xl text-white focus:outline-none transition-all duration-300 appearance-none cursor-pointer"
                style={{
                  backgroundColor: "rgba(55, 55, 55, 0.6)",
                  borderColor: "rgba(107, 114, 128, 0.5)",
                }}
                aria-describedby={
                  errors.projectType ? "project-type-error" : undefined
                }
                onFocus={(e) => {
                  e.target.style.borderColor = "rgb(59, 130, 246)";
                  e.target.style.boxShadow =
                    "0 0 0 2px rgba(59, 130, 246, 0.5)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(107, 114, 128, 0.5)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <option
                  value=""
                  style={{ backgroundColor: "#1F2937", color: "#9CA3AF" }}
                >
                  Select a project type
                </option>
                {projectTypes.map((type) => (
                  <option
                    key={type.value}
                    value={type.value}
                    style={{ backgroundColor: "#1F2937", color: "#FFFFFF" }}
                  >
                    {type.label}
                  </option>
                ))}
              </select>
              <label
                htmlFor="projectType"
                className="absolute left-5 -top-2.5 px-2 text-sm font-medium transition-all duration-300"
                style={{
                  color: "#9CA3AF",
                  backgroundColor: "rgba(30, 30, 30, 0.8)",
                }}
              >
                Project Type *
              </label>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <ChevronDown
                  className="w-5 h-5 transition-transform duration-200 group-focus-within:rotate-180"
                  style={{ color: "#9CA3AF" }}
                />
              </div>
              {errors.projectType && (
                <motion.div
                  id="project-type-error"
                  className="text-sm mt-2 flex items-center gap-1"
                  style={{ color: "#EF4444" }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>⚠</span>
                  {errors.projectType}
                </motion.div>
              )}
            </div>

            {/* Message Field */}
            <div className="group relative">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="peer w-full px-5 py-4 bg-gray-800/40 border border-gray-600/50 rounded-xl text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none hover:border-gray-500/70"
                placeholder="Tell us about your project..."
              />
              <label
                htmlFor="message"
                className="absolute left-5 -top-2.5 px-2 text-sm font-medium text-gray-400 bg-gradient-to-br from-gray-900/80 to-gray-800/60 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-blue-400"
              >
                Message
              </label>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-blue-800 disabled:to-purple-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-transparent shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Get a Quote"
                )}
              </span>
            </motion.button>
          </form>
        </motion.div>

        {/* Success Message */}
        {showSuccess && (
          <motion.div
            className="mt-8 p-6 bg-gradient-to-r from-emerald-900/40 to-green-900/40 border border-emerald-500/50 rounded-2xl text-emerald-300 text-center backdrop-blur-sm"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
          >
            <div className="flex items-center justify-center space-x-3">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 500 }}
              >
                <Check className="w-6 h-6 text-emerald-400" />
              </motion.div>
              <span className="font-medium">
                Thank you! We'll get back to you within 24 hours.
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
