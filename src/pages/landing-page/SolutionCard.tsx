import { motion } from "framer-motion";
import type { SolutionCardProp } from "../../types/types";

function SolutionCard({
  problem,
  solution,
  cardIcon: CardIcon,
  cardImage,
}: SolutionCardProp) {
  // const childVariants = {
  //   hidden: { opacity: 0, y: 100 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  // };
  return (
    <div className="basis-96 grow flex flex-col gap-6 p-4 items-center rounded-md bg-[rgb(96,76,199,0.1)]">
      <motion.div
        // variants={childVariants}
        className="flex flex-col gap-6 items-center rounded-md p-2"
      >
        <div className="p-2 rounded-lg">
          {cardImage && <img className="w-12 h-12" src={cardImage} alt="" />}
          {CardIcon && <CardIcon />}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-center font-semibold">{problem}</p>
          <p className="text-center text-card-text">{solution}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default SolutionCard;
