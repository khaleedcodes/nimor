import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import WordMark from "./WordMark";
import Button from "./Button";
import { ChevronRight, Menu, X } from "lucide-react";
import { itemVariants } from "@/pages/landing-page/services-section/variants";

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

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (menuOpen) setMenuOpen(false);
      setShowNav(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, menuOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/work", label: "Work" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

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
          <WordMark classes="text-black" />
        </motion.div>

        {/* Desktop nav links */}
        <motion.ul
          variants={childVariants}
          className="hidden md:flex items-center gap-8"
        >
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to}>
                {({ isActive }) => (
                  <motion.div
                    initial="initial"
                    whileHover="hover"
                    className="flex items-center gap-1"
                  >
                    <motion.span
                      variants={dotVariants}
                      className="w-2 h-2 bg-first-accent rounded-full"
                    />
                    <motion.span
                      variants={navLinkVariants}
                      className={`transition-colors border-b-2 ${
                        isActive
                          ? "text-first-accent border-first-accent"
                          : "text-white border-transparent"
                      }`}
                    >
                      {label}
                    </motion.span>
                  </motion.div>
                )}
              </NavLink>
            </li>
          ))}
        </motion.ul>

        {/* CTA Button (Desktop) */}
        <motion.div
          className="text-center hidden md:flex"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div
            initial="initial"
            whileHover="hover"
            className="inline-block"
          >
            <Button className="pt-2 pb-2 pl-6 pr-6 flex items-center justify-center gap-1">
              Let's talk!
              <motion.div variants={arrowVariants}>
                <ChevronRight strokeWidth={1.5} />
              </motion.div>
            </Button>
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
            <NavLink
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-lg font-semibold transition-colors ${
                  isActive
                    ? "text-first-accent underline underline-offset-4"
                    : "text-white"
                }`
              }
            >
              {label}
            </NavLink>
          </li>
        ))}

        <li>
          <motion.div className="text-center w-full" variants={itemVariants}>
            <motion.div
              initial="initial"
              whileHover="hover"
              className="inline-block w-full"
            >
              <Button className="pt-2 pb-2 pl-6 pr-6 flex items-center justify-center gap-1 w-full">
                Let's talk!
                <motion.div variants={arrowVariants}>
                  <ChevronRight strokeWidth={1.5} />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </li>
      </motion.ul>
    </div>
  );
}

export default NavBar;
