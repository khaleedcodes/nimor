import { useState } from "react";
import Arrow from "../../assets/icons/Arrow";
import { FaqItemProp } from "../../types/types";

function FaqItem({ question, answer }: FaqItemProp) {
  const [isActive, setIsActive] = useState(false);
  function toggleIsActive() {
    setIsActive((isActive) => !isActive);
  }
  return (
    <div
      onClick={() => {
        toggleIsActive();
      }}
      className={`cursor-pointer rounded-md transition-all duration-300 bg-[rgb(96,76,199,0.03)] ${
        isActive ? "" : "h-16 max-sm:h-20 max-smallest:h-24"
      } overflow-hidden`}
    >
      <div className="flex items-center justify-between gap-4 p-4">
        <p className="text-first-accent font-bold">{question}</p>
        <Arrow isActive={isActive} />
      </div>
      <p
        className={`pb-4 pl-4 pr-4  text-second-accent ${
          isActive ? "" : "max-sm:pt-4 max-smallest:pt-7"
        }`}
      >
        {answer}
      </p>
    </div>
  );
}

export default FaqItem;
