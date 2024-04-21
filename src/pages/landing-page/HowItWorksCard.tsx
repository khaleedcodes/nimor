import type { SolutionCardProp } from "../../types/types";

function HowItWorksCard({
  problem,
  solution,
  cardIcon: CardIcon,
  cardImage,
}: SolutionCardProp) {
  return (
    <div className="basis-96 grow flex flex-col gap-6 p-4 items-center rounded-md bg-[rgb(96,76,199,0.03)]">
      <div className="flex flex-col gap-6 items-center rounded-md p-2 ">
        <div className="p-2 rounded-lg">
          {cardImage && <img className="w-12 h-12" src={cardImage} alt="" />}
          {CardIcon && <CardIcon />}
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-center font-semibold">{problem}</p>
          <p className="text-center text-gray-600">{solution}</p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorksCard;
