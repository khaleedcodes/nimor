import { SolutionCardType } from "../../types/types";
import HowItWorksCard from "./HowItWorksCard";
import MagnifyingGlass from "../../assets/icons/MagnifyingGlass";
import DesignIcon from "../../assets/icons/DesignIcon";
import CodeIcon from "../../assets/icons/CodeIcon";
import RocketIcon from "../../assets/icons/RocketIcon";

const solutions: SolutionCardType[] = [
  {
    problem: "Research",
    solution:
      "Nimor starts by uncovering your requirements, exploring your market and studying your competitors.",
    cardIcon: MagnifyingGlass,
  },
  {
    problem: "Design",
    solution:
      "we craft a beautiful looking & functional design with engaging words and images to make your website unique.",
    cardIcon: DesignIcon,
  },
  {
    problem: "Development",
    solution:
      "We then bring the design to life through our development process, This involves coding, testing, and refining every part.",
    cardIcon: CodeIcon,
  },
  {
    problem: "Launch",
    solution:
      "Finally, we officially launch your website, making it accessible to your audience and ready to fulfill its purpose on the web.",
    cardIcon: RocketIcon,
  },
];

function HowItWorksList() {
  return (
    <div className="flex gap-10 flex-wrap justify-center">
      {solutions.map(({ problem, solution, cardIcon, cardImage }, index) => {
        return (
          <HowItWorksCard
            key={index}
            problem={problem}
            solution={solution}
            cardIcon={cardIcon}
            cardImage={cardImage}
          />
        );
      })}
    </div>
  );
}

export default HowItWorksList;
