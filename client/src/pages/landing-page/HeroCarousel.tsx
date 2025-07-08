import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import bundlebit from "../../assets/images/clients/bundlebit.png";
import ecoglow from "../../assets/images/clients/ecoglow.png";
import ember from "../../assets/images/clients/ember.png";
import maplefix from "../../assets/images/clients/maplefix.png";
import pawtastic from "../../assets/images/clients/pawtastic.png";
import truenorth from "../../assets/images/clients/truenorth.png";

const clients = [truenorth, bundlebit, ecoglow, ember, maplefix, pawtastic];

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
