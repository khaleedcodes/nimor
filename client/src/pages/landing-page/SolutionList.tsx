import { motion } from "framer-motion";
import SolutionCard from "./SolutionCard";
import { SolutionCardType } from "../../types/types";
import megaphone from "../../assets/images/megaphone.png";
// import Dollar from "../../assets/icons/Dollar";
// import Update from "../../assets/icons/Update";

const solutions: SolutionCardType[] = [
  {
    problem: "Increase Digital Reach",
    solution:
      "Nimor designs custom websites to enhance your online presence, increase traffic, and generate leads.",
    cardImage: megaphone,
  },
  // {
  //   problem: "Drive Higher Conversions",
  //   solution:
  //     "Nimor creates compelling calls-to-action (CTAs) and engaging designs that encourage users to take action.",
  //   cardIcon: Dollar,
  // },
  // {
  //   problem: "Modernize Your Website",
  //   solution:
  //     "Nimor offers modern and visually appealing website designs that captivate audiences.",
  //   cardIcon: Update,
  // },
];

function SolutionList() {
  // const parentVariants = {
  //   hidden: { y: 0 },
  //   visible: { y: 0, transition: { staggerChildren: 0.15 } },
  // };

  return (
    <motion.div
      // variants={parentVariants}
      initial="hidden"
      whileInView={"visible"}
      className="flex gap-10 flex-wrap"
    >
      {solutions.map(({ problem, solution, cardIcon, cardImage }, index) => {
        return (
          <SolutionCard
            key={index}
            problem={problem}
            solution={solution}
            cardIcon={cardIcon}
            cardImage={cardImage}
          />
        );
      })}
    </motion.div>
  );
}

export default SolutionList;
