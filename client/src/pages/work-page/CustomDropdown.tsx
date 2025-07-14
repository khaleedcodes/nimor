import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface CustomDropdownProps {
  options: string[]; // First item should be "industry" or "service"
  value: string;
  onChange: (value: string) => void;
}

export default function CustomDropdown({
  options,
  value,
  onChange,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [dropdownWidth, setDropdownWidth] = useState<number>(120); // default width

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Measure max width of dropdown items
  useEffect(() => {
    if (listRef.current) {
      const items = Array.from(listRef.current.children) as HTMLElement[];
      const widths = items.map((el) => el.offsetWidth + 32); // include padding (px-4)
      setDropdownWidth(Math.max(...widths));
    }
  }, [options]);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  const handleSelect = (option: string) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={containerRef}>
      {/* Animate width of the button */}
      <motion.div
        animate={{ width: dropdownWidth }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="inline-block"
      >
        <button
          type="button"
          onClick={toggleOpen}
          className="w-full inline-flex justify-between items-center bg-new-accent border border-second-accent rounded-lg px-4 py-2 text-white text-left hover:border-first-accent transition"
        >
          <span className="truncate capitalize">{value}</span>
          <ChevronDown
            size={20}
            className={`ml-2 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </motion.div>

      {/* Hidden width-measuring list */}
      <ul
        ref={listRef}
        className="absolute left-0 top-0 invisible pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        {options.map((option) => (
          <li key={option} className="px-4 py-2">
            {option}
          </li>
        ))}
      </ul>

      {/* Dropdown list */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ width: dropdownWidth }}
            className="absolute left-0 mt-1 rounded-lg border border-second-accent bg-new-accent shadow-lg z-50 whitespace-nowrap text-white overflow-hidden"
          >
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleSelect(option)}
                className={`capitalize cursor-pointer px-4 py-2 hover:bg-first-accent ${
                  option === value ? "bg-first-accent font-semibold" : ""
                }`}
              >
                {option}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
