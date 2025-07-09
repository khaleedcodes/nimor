import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import WordMark from "./WordMark";
import Button from "./Button";
import { ChevronRight, Menu, X } from "lucide-react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="sticky top-0 z-20 bg-primary border-b border-b-card-bg">
      <motion.nav
        variants={parentVariants}
        initial="hidden"
        animate="visible"
        className="flex justify-between items-center p-4 max-w-7xl mx-auto"
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
              <Link
                to={to}
                className="text-black hover:text-accent transition-colors"
              >
                {label}
              </Link>
            </li>
          ))}
        </motion.ul>

        {/* Desktop button */}
        <motion.div variants={childVariants} className="hidden md:flex">
          <Link to="/contact">
            <Button className="pt-2 pb-2 pl-6 pr-6 flex items-center gap-2">
              Let's talk! <ChevronRight strokeWidth={1.5} />
            </Button>
          </Link>
        </motion.div>

        {/* Mobile menu toggle (always hamburger) */}
        <div className="md:hidden flex items-center">
          <button
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
            className="text-white"
          >
            <Menu size={28} className="text-white" />
          </button>
        </div>
      </motion.nav>

      {/* Backdrop (click to close menu) */}
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
        className="fixed top-0 right-0 h-full w-64 bg-primary shadow-lg p-8 flex flex-col gap-6 md:hidden z-30"
      >
        {/* Close (X) button inside the menu */}
        <button
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          className="self-end mb-4 text-white"
        >
          <X size={28} />
        </button>

        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              onClick={() => setMenuOpen(false)}
              className="block text-black text-lg font-semibold"
            >
              {label}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <Button className="w-full flex justify-center">
              Let's talk! <ChevronRight strokeWidth={1.5} />
            </Button>
          </Link>
        </li>
      </motion.ul>
    </div>
  );
}

export default NavBar;
