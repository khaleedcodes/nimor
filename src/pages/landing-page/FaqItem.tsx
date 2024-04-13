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
      className={`cursor-pointer transition-all duration-300 bg-[rgb(96,76,199,0.03)] ${
        isActive ? "" : "h-16 max-sm:h-[4.5rem]"
      } overflow-hidden`}
    >
      <div className="flex items-center justify-between p-4 max-sm:p-[1.3rem] gap-4">
        <p className="text-first-accent font-bold">{question}</p>
        <Arrow isActive={isActive} />
      </div>
      <p className="pb-4 pl-4 pr-4 text-second-accent">{answer}</p>
    </div>
  );
}

export default FaqItem;
