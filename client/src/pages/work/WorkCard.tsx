import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Mouse } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Work } from "./works";

interface WorkCardProps {
  work: Work;
}

export default function WorkCard({ work }: WorkCardProps) {
  const navigate = useNavigate();
  const imgRef = useRef<HTMLImageElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const handleCaseStudyClick = () => {
    navigate(`/case-study/${work.id}`);
  };

  const handleLiveWebsiteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (work.liveUrl)
      window.open(work.liveUrl, "_blank", "noopener,noreferrer");
  };

  const handleCaseStudyButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleCaseStudyClick();
  };

  const onImageLoad = () => {
    if (imgRef.current) {
      const imgHeight = imgRef.current.offsetHeight;
      const containerHeight = imgRef.current.parentElement!.offsetHeight;
      const offset = imgHeight - containerHeight;
      setScrollOffset(offset > 0 ? offset : 0);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="work-card bg-new-accent border border-second-accent rounded-2xl overflow-hidden shadow-md transition-shadow group cursor-pointer"
      onClick={handleCaseStudyClick}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 p-6 md:p-10">
        {/* Left: Text */}
        <div className="flex flex-col justify-between text-white">
          <div>
            <h3 className="text-xl md:text-2xl font-semibold mb-1">
              {work.title}
            </h3>
            <p className="text-sm text-gray-400 mb-3">{work.subtitle}</p>
            <p className="text-card-text text-sm md:text-base leading-relaxed mb-6">
              {work.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {work.categories.map((category) => (
                <span
                  key={category}
                  className="bg-second-accent text-gray-200 px-3 py-1 rounded-full text-xs font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 flex-wrap">
            <button
              onClick={handleCaseStudyButtonClick}
              className="bg-white text-black hover:bg-gray-200 px-4 py-2 text-sm rounded-lg font-medium flex items-center gap-1 transition"
            >
              View Case Study <ArrowRight size={16} />
            </button>

            {work.liveUrl && (
              <button
                onClick={handleLiveWebsiteClick}
                className="bg-card-bg text-white hover:bg-first-accent px-4 py-2 text-sm rounded-lg font-medium flex items-center gap-1 transition"
              >
                Live Website <ExternalLink size={16} />
              </button>
            )}

            {work.year && (
              <span className="text-sm text-gray-400 ml-auto">{work.year}</span>
            )}
          </div>
        </div>

        {/* Right: Scrolling Screenshot */}
        <div className="rounded-xl overflow-hidden shadow-xl border border-gray-700 bg-black h-[300px] md:h-[360px] mt-6 md:mt-0 md:ml-10">
          <div className="relative w-full h-full overflow-hidden group-hover:cursor-pointer">
            <motion.img
              ref={imgRef}
              src={work.image}
              alt={work.title}
              onLoad={onImageLoad}
              initial={{ y: 0 }}
              whileHover={{ y: scrollOffset ? -scrollOffset : 0 }}
              transition={{ duration: 10, ease: "easeInOut" }}
              className="w-full object-top object-cover h-auto"
            />
            <div className="absolute top-2 left-2 text-xs flex gap-1 items-center text-first-accent bg-new-accent px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition">
              HOVER TO SCROLL <Mouse className="w-3" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
