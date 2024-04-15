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
      {/* <div className="flex flex-col gap-2 items-center border rounded-md">
        <img className="w-10 h-10" src={modern} alt="" />
        <p className="text-center">Modern Website Designs by Nimor</p>
        <p className="text-center">
          Nimor can provide modern and visually appealing website designs that
          captivate audiences, improve user experience, and reflect the
          professionalism of the business.
        </p>
      </div> */}
    </div>
  );
}

export default SolutionCard;
