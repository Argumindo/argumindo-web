"use client"

import * as React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Autoplay as SwiperAutoplayModule, EffectFade } from "swiper/modules";
import type { Swiper as SwiperInstance } from "swiper";
import type { SwiperOptions } from "swiper/types";
import { cn } from "@/lib/utils";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // If you plan to use fade effect

type SwiperCarouselApi = SwiperInstance;

interface SwiperCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  opts?: SwiperOptions; // Allows passing any Swiper option
  setApi?: (api: SwiperCarouselApi) => void;
  orientation?: "horizontal" | "vertical"; // Swiper's default is horizontal
  // Common Swiper props can be included directly in opts or managed here
  loop?: boolean;
  autoplay?: boolean | { delay?: number; disableOnInteraction?: boolean };
  slidesPerView?: number | 'auto';
  spaceBetween?: number;
  showNavigation?: boolean;
  showPagination?: boolean;
  paginationClickable?: boolean;
  effect?: 'slide' | 'fade' | 'coverflow' | 'flip' | 'creative' | 'cards'; // Common effects
}

const SwiperCarousel = React.forwardRef<
  HTMLDivElement,
  SwiperCarouselProps
>(
  (
    {
      className,
      opts,
      setApi,
      orientation = "horizontal",
      loop = false,
      autoplay = false,
      slidesPerView = 1,
      spaceBetween = 0,
      showNavigation = false, // Default to false to match Embla version not showing them by default
      showPagination = false, // Default to false
      paginationClickable = true,
      effect = 'slide',
      children,
      ...props
    },
    ref
  ) => {
    const modules = [Navigation, Pagination, SwiperAutoplayModule, EffectFade];
    
    const autoplayOptions = typeof autoplay === 'object' 
      ? autoplay 
      : autoplay 
      ? { delay: 3000, disableOnInteraction: false } 
      : undefined;

    const resolvedOpts: SwiperOptions = {
      direction: orientation,
      loop,
      slidesPerView,
      spaceBetween,
      effect,
      ...(autoplayOptions && { autoplay: autoplayOptions }),
      navigation: showNavigation ? {
        nextEl: '.swiper-button-next-custom', // Custom class for next button
        prevEl: '.swiper-button-prev-custom', // Custom class for prev button
      } : false,
      pagination: showPagination ? { clickable: paginationClickable, el: '.swiper-pagination-custom' } : false,
      modules,
      ...opts, // User-provided opts will override defaults if specified
    };

    return (
      <div ref={ref} className={cn("relative group", className)} {...props}>
        <Swiper
          onSwiper={setApi}
          {...resolvedOpts}
        >
          {children}
          {/* Custom Navigation Buttons and Pagination container need to be outside Swiper slides, 
              but Swiper configuration points to them. */}
        </Swiper>
        {/* Render custom navigation buttons if showNavigation is true */}
        {/* These are positioned absolutely relative to the main carousel div */}
        {showNavigation && (
          <>
            <SwiperCarouselPrevious className="swiper-button-prev-custom" />
            <SwiperCarouselNext className="swiper-button-next-custom" />
          </>
        )}
        {showPagination && (
            <div className="swiper-pagination-custom text-center mt-2"></div>
        )}
      </div>
    );
  }
);
SwiperCarousel.displayName = "SwiperCarousel";

const SwiperCarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => (
  <SwiperSlide className={cn("flex-none w-full h-auto", className)}>
    <div ref={ref} {...props}>
      {children}
    </div>
  </SwiperSlide>
));
SwiperCarouselItem.displayName = "SwiperCarouselItem";


// Custom Navigation Buttons, styled to match the original Embla ones
const SwiperCarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const swiper = useSwiper(); // Hook to get the Swiper instance, only works if this button is a child of Swiper
                             // For external buttons, we assign class names and let Swiper navigation module handle it.
  return (
    <button
      ref={ref}
      // className prop here is the one Swiper's navigation module will look for.
      className={cn(
        "absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 p-2 shadow-md hover:bg-white transition-opacity opacity-0 group-hover:opacity-100 disabled:opacity-30",
        className // This ensures swiper-button-prev-custom is applied
      )}
      // onClick={() => swiper.slidePrev()} // Only needed if not using Swiper's navigation module directly
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </button>
  );
});
SwiperCarouselPrevious.displayName = "SwiperCarouselPrevious";

const SwiperCarouselNext = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => {
  const swiper = useSwiper(); // Similar to above
  return (
    <button
      ref={ref}
      className={cn(
        "absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full bg-white/80 p-2 shadow-md hover:bg-white transition-opacity opacity-0 group-hover:opacity-100 disabled:opacity-30",
        className // This ensures swiper-button-next-custom is applied
      )}
      // onClick={() => swiper.slideNext()} // Only needed if not using Swiper's navigation module directly
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-gray-700">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  );
});
SwiperCarouselNext.displayName = "SwiperCarouselNext";

export {
  type SwiperCarouselApi,
  SwiperCarousel,
  SwiperCarouselItem, // Note: This is the SwiperSlide wrapper
  SwiperCarouselPrevious,
  SwiperCarouselNext,
}; 