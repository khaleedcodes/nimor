import { useState } from "react";
import bundleupHover from "../images/Bundleup-hover.png";
import bundleup from "../images/bundleup-logo.png";

function Bundleup() {
  const [isHovered, setIsHovered] = useState(false);
  function toggleIsHoveredTrue() {
    setIsHovered(true);
  }
  function toggleIsHoveredFalse() {
    setIsHovered(false);
  }
  return (
    <div
      className="mt-[0.3rem] ml-1"
      onMouseEnter={toggleIsHoveredTrue}
      onMouseLeave={toggleIsHoveredFalse}
    >
      <a href="https://bundleup.us/nimor" className="">
        {isHovered ? (
          <img className="w-[26px] h-[26px]" src={bundleupHover} />
        ) : (
          <img className="w-[26px] h-[26px]" src={bundleup} />
        )}
      </a>
    </div>
  );
}

export default Bundleup;
