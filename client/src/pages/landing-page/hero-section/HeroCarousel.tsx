import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";

// AVIF format
import bundlebitAvif from "../../../assets/images/clients/bundlebit.avif";
import ecoglowAvif from "../../../assets/images/clients/ecoglow.avif";
import emberAvif from "../../../assets/images/clients/ember.avif";
import maplefixAvif from "../../../assets/images/clients/maplefix.avif";
import pawtasticAvif from "../../../assets/images/clients/pawtastic.avif";
import truenorthAvif from "../../../assets/images/clients/truenorth.avif";

// WebP format
import bundlebitWebp from "../../../assets/images/clients/bundlebit.webp";
import ecoglowWebp from "../../../assets/images/clients/ecoglow.webp";
import emberWebp from "../../../assets/images/clients/ember.webp";
import maplefixWebp from "../../../assets/images/clients/maplefix.webp";
import pawtasticWebp from "../../../assets/images/clients/pawtastic.webp";
import truenorthWebp from "../../../assets/images/clients/truenorth.webp";

// PNG format (fallback)
import bundlebitPng from "../../../assets/images/clients/bundlebit.png";
import ecoglowPng from "../../../assets/images/clients/ecoglow.png";
import emberPng from "../../../assets/images/clients/ember.png";
import maplefixPng from "../../../assets/images/clients/maplefix.png";
import pawtasticPng from "../../../assets/images/clients/pawtastic.png";
import truenorthPng from "../../../assets/images/clients/truenorth.png";

const clients = [
  { avif: bundlebitAvif, webp: bundlebitWebp, png: bundlebitPng },
  { avif: ecoglowAvif, webp: ecoglowWebp, png: ecoglowPng },
  { avif: emberAvif, webp: emberWebp, png: emberPng },
  { avif: maplefixAvif, webp: maplefixWebp, png: maplefixPng },
  { avif: pawtasticAvif, webp: pawtasticWebp, png: pawtasticPng },
  { avif: truenorthAvif, webp: truenorthWebp, png: truenorthPng },
];

// import EmblaCarousel from "./EmblaCarousel";
// import { EmblaOptionsType } from "e3mbla-carousel";

// const OPTIONS: EmblaOptionsType = { loop: true };
// const SLIDE_COUNT = 5;
// const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function HeroCarousel() {
  return (
    <>
      {/* <EmblaCarousel slides={SLIDES} options={OPTIONS} /> */}
      <Carousel className="w-full">
        <CarouselContent>
          {clients.map(({ avif, webp, png }, index) => {
            return (
              <CarouselItem
                className="md:basis-1 lg:basis-1/2 rounded-2xl"
                key={index}
              >
                <picture className="rounded-2xl">
                  <source
                    srcSet={avif}
                    type="image/avif"
                    className="rounded-2xl"
                  />
                  <source
                    srcSet={webp}
                    type="image/webp"
                    className="rounded-2xl"
                  />
                  <img src={png} loading="lazy" className="rounded-2xl" />
                </picture>
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
