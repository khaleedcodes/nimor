import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import bundlebit from "../../assets/images/clients/bundlebit.png";
import khaleed from "../../assets/images/clients/khaleed.png";
import nairaupdatesng from "../../assets/images/clients/nairaupdatesng.png";
import quizwave from "../../assets/images/clients/quizwave.png";

const clients = [bundlebit, nairaupdatesng, khaleed, quizwave];

// import EmblaCarousel from "./EmblaCarousel";
// import { EmblaOptionsType } from "embla-carousel";

// const OPTIONS: EmblaOptionsType = { loop: true };
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function HeroCarousel() {
  return (
    <>
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
      <Carousel className="w-full">
        <CarouselContent>
          {clients.map((client, index) => {
            return (
              <CarouselItem
                className="md:basis-1 lg:basis-1/2 rounded-2xl"
                key={index}
              >
                <img src={client} className="rounded-2xl" />
              </CarouselItem>
            );
          })}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
      </Carousel>
    </>
  );
}

export default HeroCarousel;
