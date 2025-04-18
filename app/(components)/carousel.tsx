"use client";

import useEmblaCarousel from "embla-carousel-react";
import { StaticImageData } from "next/image";
import { useCallback } from "react";

interface ICarousel {
  row: StaticImageData[];
}

export const Carousel = ({ row }: ICarousel) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <div className="overflow-hidden w-full h-full" ref={emblaRef}>
      <div className="flex h-full">
        {row.map((src, index) => (
          <div className="min-w-full h-full" key={index}>
            <img
              src={src.src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <div
          className="navigate-images left-2 -scale-x-100"
          onClick={scrollPrev}
        >
          {"‣"}
        </div>
        <div className="navigate-images right-2" onClick={scrollNext}>
          {"‣"}
        </div>
      </div>
    </div>
  );
};
