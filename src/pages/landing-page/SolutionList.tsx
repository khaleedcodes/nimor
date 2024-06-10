import { motion } from "framer-motion";
import SolutionCard from "./SolutionCard";
import { SolutionCardType } from "../../types/types";
import megaphone from "../../assets/images/megaphone.png";
import Dollar from "../../assets/icons/Dollar";
import Update from "../../assets/icons/Update";

const solutions: SolutionCardType[] = [
  {
    problem: "Elevate Your Online Presence",
    solution:
      "Nimor crafts custom websites to elevate your online presence and drive success. Our unique designs attract visitors, boost traffic, and generate leads.",
    cardImage: megaphone,
  },
  {
    problem: "Drive Higher Conversions",
    solution:
      "Nimor creates compelling calls-to-action (CTAs) and engaging designs that encourage users to take action, ultimately driving more leads, sales, and revenue for your business.",
    cardIcon: Dollar,
  },
  {
    problem: "Modernize Your Website",
    solution:
      "Nimor offers modern and visually appealing website designs that captivate audiences, improve user experience, and reflect the professionalism of the business.",
    cardIcon: Update,
  },
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
