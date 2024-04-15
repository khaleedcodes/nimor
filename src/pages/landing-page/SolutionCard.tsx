import type { SolutionCardProp } from "../../types/types";

function SolutionCard({
  problem,
  solution,
  cardIcon: CardIcon,
  cardImage,
}: SolutionCardProp) {
  return (
    <div className="basis-96 grow flex flex-col gap-6 p-4 items-center rounded-md border">
      <div className="flex flex-col gap-6 items-center rounded-md p-2 ">
        {cardImage && <img className="w-12 h-12" src={cardImage} alt="" />}
        {CardIcon && <CardIcon />}
        <div className="flex flex-col gap-2">
          <p className="text-center font-bold">{problem}</p>
          <p className="text-center text-gray-600">{solution}</p>
        </div>
      </div>
    </div>
  );
}

export default SolutionCard;
