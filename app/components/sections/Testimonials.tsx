"use client";

import Image from "next/image";
import { useState, useRef } from "react";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  avatarSrc: string;
  bgColor: string;
}

function TestimonialCard({ quote, name, title, avatarSrc, bgColor }: TestimonialProps) {
  return (
    <div 
      className="flex-shrink-0 w-[306px] lg:w-[361px] rounded-[10px] px-4 py-6 hover-lift cursor-pointer"
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col gap-[19px]">
        {/* Quote content */}
        <div className="w-full lg:w-[329px]">
          {/* Opening quote */}
          <div className="w-[30px] h-[30px] mb-2">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 17.5H7.5C7.5 12.5 10 10 12.5 7.5L10 5C5 7.5 2.5 12.5 2.5 17.5V25H12.5V17.5Z" fill="#0e101b" fillOpacity="0.3"/>
              <path d="M27.5 17.5H22.5C22.5 12.5 25 10 27.5 7.5L25 5C20 7.5 17.5 12.5 17.5 17.5V25H27.5V17.5Z" fill="#0e101b" fillOpacity="0.3"/>
            </svg>
          </div>
          
          {/* Quote text */}
          <p className="font-outfit text-[16px] lg:text-[18px] text-[#0e101b] leading-[24px] lg:leading-[27px] min-h-[120px] lg:min-h-[135px]">
            {quote}
          </p>
          
          {/* Closing quote */}
          <div className="w-full flex justify-end">
            <div className="w-[30px] h-[30px] rotate-180">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 17.5H7.5C7.5 12.5 10 10 12.5 7.5L10 5C5 7.5 2.5 12.5 2.5 17.5V25H12.5V17.5Z" fill="#0e101b" fillOpacity="0.3"/>
                <path d="M27.5 17.5H22.5C22.5 12.5 25 10 27.5 7.5L25 5C20 7.5 17.5 12.5 17.5 17.5V25H27.5V17.5Z" fill="#0e101b" fillOpacity="0.3"/>
              </svg>
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full lg:w-[316px] h-[1px] bg-[#0e101b] opacity-10" />
        
        {/* User info */}
        <div className="flex items-center gap-5">
          <div className="w-[48px] h-[48px] rounded-full overflow-hidden">
            <Image
              src={avatarSrc}
              alt={name}
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-[18px] lg:text-[20px] text-[#30374f] tracking-[-0.2px] leading-[26px] lg:leading-[28px]">
              {name}
            </h4>
            <p className="font-outfit font-medium text-[14px] lg:text-[16px] text-[#30374f] leading-[22px] lg:leading-[24px]">
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const testimonials = [
    {
      quote: "My students are finally learning how to think before they speak. They're forming opinions, backing them up with evidence, and presenting their thoughts with confidence.",
      name: "Mr. Daniel Rivera",
      title: "English Faculty",
      avatarSrc: "/images/testimonals/BG.png",
      bgColor: "#ece9fe",
    },
    {
      quote: "The structured approach, instant feedback, and level-based challenges have made reasoning and logic genuinely exciting for our learners",
      name: "Priya Sharma",
      title: "Principal",
      avatarSrc: "/images/testimonals/BG-1.png",
      bgColor: "#e0eaff",
    },
    {
      quote: "What impressed us most was how quickly students connected with the learning experience. It doesn't just teach them to argue — it teaches them to reason, empathize, and lead.",
      name: "Dr. Steven Morales",
      title: "Academic Director",
      avatarSrc: "/images/testimonals/BG-2.png",
      bgColor: "#fef9c3",
    },
    {
      quote: "This has raised the bar for what early debate education can be. It's not about winning arguments anymore — it's about learning to think critically and express ideas with empathy.",
      name: "Ms. Srujana",
      title: "English Faculty",
      avatarSrc: "/images/testimonals/BG-3.png",
      bgColor: "#fff1e8",
    },
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -334, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 334, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-10 lg:py-[120px] px-4 lg:px-[80px]">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-[74px]">
          <h2 className="font-bold text-[24px] lg:text-[48px] text-[#1d1f20] leading-[1.3] lg:leading-normal max-w-[370px] lg:max-w-[644px] mx-auto">
            We have already helped more than 3,000 students
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-9 lg:mb-[46px]">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-[30px] lg:w-[46px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[30px] lg:w-[46px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Scrollable container */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-[20px] lg:gap-[28px] overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex items-center justify-center gap-[62px] lg:gap-[42px]">
          <button 
            onClick={scrollLeft}
            className={`w-[36px] h-[36px] lg:w-[46px] lg:h-[46px] rounded-full border flex items-center justify-center transition-colors ${
              canScrollLeft 
                ? 'bg-white border-[#dcdfea] hover:bg-gray-50' 
                : 'bg-white border-[#dcdfea] opacity-50 cursor-not-allowed'
            }`}
            disabled={!canScrollLeft}
          >
            <svg className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.75 22.5L11.25 15L18.75 7.5" stroke="#0e101b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            onClick={scrollRight}
            className={`w-[36px] h-[36px] lg:w-[46px] lg:h-[46px] rounded-full border flex items-center justify-center transition-colors ${
              canScrollRight 
                ? 'bg-[#0e101b] border-[#fcfcfd]' 
                : 'bg-[#0e101b] border-[#fcfcfd] opacity-50 cursor-not-allowed'
            }`}
            disabled={!canScrollRight}
          >
            <svg className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.25 7.5L18.75 15L11.25 22.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
