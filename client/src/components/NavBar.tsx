import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Menu, X, ChevronDown } from "lucide-react";

// Animations
const arrowVariants = {
  initial: { x: 0 },
  hover: { x: 5 },
};

const parentVariants = {
  hidden: { y: 0 },
  visible: { y: 0, transition: { staggerChildren: 0.15 } },
};

const childVariants = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const mobileMenuVariants = {
  closed: { x: "100%" },
  open: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
};

const navLinkVariants = {
  initial: { x: 0 },
  hover: { x: 5 },
};

const dotVariants = {
  initial: { opacity: 0, x: -8, scale: 0.6 },
  hover: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300 },
  },
};

const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

const dropdownItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const chevronVariants = {
  closed: { rotate: 0 },
  open: { rotate: 180 },
};

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (menuOpen) setMenuOpen(false);
      if (servicesOpen) setServicesOpen(false);
      setShowNav(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpen, servicesOpen]);

  const services = [
    { label: "Web Design", href: "/services/web-design" },
    { label: "Web Redesign", href: "/services/web-redesign" },
    { label: "SEO & Analytics", href: "/services/seo-analytics" },
    { label: "Support & Maintenance", href: "/services/support-maintenance" },
  ];

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/works", label: "Works" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <div
      className={`top-0 z-[60] bg-primary border-b border-b-card-bg fixed w-full transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <motion.nav
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="flex justify-between items-center p-4 max-w-screen-xl mx-auto"
      >
        <motion.div variants={childVariants}>
          <Link to="/">
            <span className="text-white font-bold text-xl">Nimor</span>
          </Link>
        </motion.div>

        {/* Desktop nav links */}
        <motion.ul
          variants={childVariants}
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link to={to}>
                <motion.div
                  initial="initial"
                  whileHover="hover"
                  className="flex items-center gap-1 cursor-pointer"
                >
                  <motion.span
                    variants={dotVariants}
                    className="w-2 h-2 bg-first-accent rounded-full"
                  />
                  <motion.span
                    variants={navLinkVariants}
                    className={`transition-colors border-b-2 ${
                      isActive(to)
                        ? "text-first-accent border-first-accent"
                        : "text-white border-transparent"
                    }`}
                  >
                    {label}
                  </motion.span>
                </motion.div>
              </Link>
            </li>
          ))}

          {/* Services Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <motion.div
              initial="initial"
              whileHover="hover"
              className="flex items-center gap-1 cursor-pointer"
            >
              <motion.span
                variants={dotVariants}
                className="w-2 h-2 bg-first-accent rounded-full"
              />
              <motion.span
                variants={navLinkVariants}
                className={`transition-colors border-b-2 flex items-center gap-1 ${
                  location.pathname.startsWith("/services")
                    ? "text-first-accent border-first-accent"
                    : "text-white border-transparent"
                }`}
              >
                Services
                <motion.div
                  variants={chevronVariants}
                  animate={servicesOpen ? "open" : "closed"}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </motion.span>
            </motion.div>

            {/* Desktop Dropdown */}
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 mt-2 w-56 bg-new-accent rounded-lg shadow-lg border border-second-accent py-2 z-50"
                >
                  {services.map((service) => (
                    <motion.div
                      key={service.href}
                      variants={dropdownItemVariants}
                    >
                      <Link to={service.href}>
                        <div className="px-4 py-3 hover:bg-first-accent transition-colors cursor-pointer">
                          <span className="text-white hover:text-white transition-colors">
                            {service.label}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </motion.ul>

        {/* CTA Button (Desktop) */}
        <motion.div
          className="text-center hidden md:flex"
          variants={childVariants}
        >
          <motion.div
            initial="initial"
            whileHover="hover"
            className="inline-block"
          >
            <Link to="/contact">
              <motion.button className="pt-2 pb-2 pl-6 pr-6 flex items-center justify-center gap-1 bg-first-accent text-white rounded-md hover:bg-second-accent transition-colors">
                Let's talk!
                <motion.div variants={arrowVariants}>
                  <ChevronRight strokeWidth={1.5} />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="text-white"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.nav>

      {/* Click-outside overlay */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile sliding menu */}
      <motion.ul
        initial="closed"
        animate={menuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        className="fixed top-0 right-0 h-screen w-64 bg-new-accent shadow-lg p-8 flex flex-col gap-6 md:hidden z-30"
      >
        <button
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="self-end mb-4 text-white"
        >
          <X size={28} />
        </button>

        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <Link to={to}>
              <div
                onClick={() => setMenuOpen(false)}
                className={`block text-lg font-semibold transition-colors cursor-pointer ${
                  isActive(to)
                    ? "text-first-accent underline underline-offset-4"
                    : "text-white"
                }`}
              >
                {label}
              </div>
            </Link>
          </li>
        ))}

        {/* Mobile Services Dropdown */}
        <li>
          <div
            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            className={`block text-lg font-semibold transition-colors cursor-pointer flex items-center justify-between ${
              location.pathname.startsWith("/services")
                ? "text-first-accent underline underline-offset-4"
                : "text-white"
            }`}
          >
            Services
            <motion.div
              variants={chevronVariants}
              animate={mobileServicesOpen ? "open" : "closed"}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={16} />
            </motion.div>
          </div>

          <AnimatePresence>
            {mobileServicesOpen && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mt-3 ml-4 space-y-3"
              >
                {services.map((service) => (
                  <motion.div
                    key={service.href}
                    variants={dropdownItemVariants}
                  >
                    <Link to={service.href}>
                      <div
                        onClick={() => setMenuOpen(false)}
                        className="text-gray-300 hover:text-first-accent transition-colors cursor-pointer"
                      >
                        {service.label}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </li>

        <li>
          <motion.div className="text-center w-full">
            <motion.div
              initial="initial"
              whileHover="hover"
              className="inline-block w-full"
            >
              <Link to="/contact">
                <motion.button
                  onClick={() => setMenuOpen(false)}
                  className="pt-2 pb-2 pl-6 pr-6 flex items-center justify-center gap-1 w-full bg-first-accent text-white rounded-md hover:bg-second-accent transition-colors"
                >
                  Let's talk!
                  <motion.div variants={arrowVariants}>
                    <ChevronRight strokeWidth={1.5} />
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </li>
      </motion.ul>
    </div>
  );
}

export default NavBar;
