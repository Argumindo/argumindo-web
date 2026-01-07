"use client";

import Image from "next/image";

export function Stats() {
  return (
    <section className="relative bg-[#feeff4] rounded-[24px] mx-4 lg:mx-8 overflow-hidden">
      
      {/* Mobile Layout */}
      <div className="lg:hidden relative h-[325px] py-[42px]">
        {/* Background ellipse - Mobile */}
        <div className="absolute top-[-40px] left-0 w-[391px] h-[370px] overflow-hidden">
          <div className="absolute left-[calc(50%+14.5px)] top-[158px] -translate-x-1/2 w-[528px] h-[621px]">
            <svg width="100%" height="100%" viewBox="0 0 528 621" fill="none">
              <ellipse cx="264" cy="310.5" rx="263" ry="309.5" stroke="#7D89B0" strokeOpacity="0.3" strokeDasharray="8 8"/>
            </svg>
          </div>
        </div>

        {/* Stats Container - Mobile */}
        <div className="relative flex flex-col items-center px-[5px] w-[381px] mx-auto">
          {/* Top row - 2 cards with gap */}
          <div className="flex items-center gap-[11px]">
            {/* Stat 1: 208 Video Lessons */}
            <div className="relative w-[86px] h-[86px] right-[20px] top-[10px]">
              <Image
                src="/images/stats/Frame-3.svg"
                alt=""
                width={78}
                height={69}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-bold text-[26.7px] text-[#1d1f20] leading-[1.2]">208</span>
                <span className="text-[9.54px] text-[#0e101b] text-center leading-[14.3px]">
                  Video<br/>Lessons
                </span>
              </div>
            </div>

            {/* Stat 2: 3k+ Active Learners */}
            <div className="relative w-[76px] h-[76px] right-[20px] top-[10px]">
              <Image
                src="/images/stats/Frame-2.svg"
                alt=""
                width={61}
                height={60}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-bold text-[24.3px] text-[#1d1f20] leading-[1.2]">3k+</span>
                <span className="text-[8.68px] text-[#0e101b] text-center leading-[13px]">
                  Active<br/>Learners
                </span>
              </div>
            </div>
          </div>

          {/* Bottom row - 2 cards spread */}
          <div className="flex items-start justify-between w-full left-[20px]">
            {/* Stat 3: 4 Progressive Levels */}
            <div className="relative w-[83px] h-[83px]">
              <Image
                src="/images/stats/Frame-1.svg"
                alt=""
                width={75}
                height={72}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-bold text-[28.6px] text-[#1d1f20] leading-[1.2]">4</span>
                <span className="text-[10.2px] text-[#0e101b] text-center leading-[15.3px]">
                  Progressive<br/>Levels
                </span>
              </div>
            </div>

            {/* Stat 4: 5 Core Skills Tracked */}
            <div className="relative w-[79px] h-[79px] right-[40px]">
              <Image
                src="/images/stats/Frame.svg"
                alt=""
                width={66}
                height={65}
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-bold text-[25px] text-[#1d1f20] leading-[1.2]">5</span>
                <span className="text-[8.95px] text-[#0e101b] text-center leading-[13.4px]">
                  Core Skills<br/>Tracked
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mascot Bird - Center on mobile */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[180px] w-[100px]">
          <div className="relative animate-breathe">
            {/* Thought bubble / sparkle */}
            <div className="absolute -top-[23px] -right-[15px] w-[41px] z-10 animate-sparkle-pop" style={{ transform: 'rotate(-11deg)' }}>
              <Image
                src="/images/stats/Frame 1973342018.svg"
                alt=""
                width={71}
                height={76}
                className="w-full"
              />
            </div>
            
            {/* Wings */}
            <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[110%] z-[0] animate-wing-flap origin-top">
              <Image
                src="/images/stats/Group 16.svg"
                alt=""
                width={143}
                height={55}
                className="w-full"
              />
            </div>
            
            {/* Body */}
            <Image
              src="/images/stats/body.svg"
              alt="Argumindo Mascot"
              width={130}
              height={189}
              className="w-full relative z-[1]"
            />
            
            {/* Body center/belly */}
            <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[55%] z-[2]">
              <Image
                src="/images/stats/body center.svg"
                alt=""
                width={72}
                height={60}
                className="w-full"
              />
            </div>
            
            {/* Eyes - using Group 17 like desktop */}
            <div className="absolute top-[22%] left-[14%] w-[70%] z-[3] animate-blink origin-center">
              <Image
                src="/images/stats/Group 17.svg"
                alt=""
                width={91}
                height={41}
                className="w-full"
              />
            </div>
            
            {/* Left eyebrow */}
            <div className="absolute top-[18%] left-[20%] w-[14%] z-[4] animate-eyebrow">
              <Image
                src="/images/stats/left eyebrow.svg"
                alt=""
                width={18}
                height={8}
                className="w-full"
              />
            </div>
            
            {/* Right eyebrow */}
            <div className="absolute top-[18%] right-[26%] w-[14%] z-[4] scale-x-[-1] animate-eyebrow">
              <Image
                src="/images/stats/right eyebrow.svg"
                alt=""
                width={18}
                height={8}
                className="w-full"
              />
            </div>
            
            {/* Beak with mouth */}
            <div className="absolute top-[35%] left-[39%] w-[22%] z-[5]">
              <Image
                src="/images/stats/beak.svg"
                alt=""
                width={29}
                height={34}
                className="w-full"
              />
            </div>
            
            {/* Feet */}
            <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[55%] z-[0]">
              <Image
                src="/images/stats/Frame 3.svg"
                alt=""
                width={72}
                height={17}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative pt-16 pb-16">
          {/* Background ellipse - Desktop */}
          <div className="absolute top-[95px] left-1/2 -translate-x-1/2 w-[660px] h-[625px]">
            <svg width="100%" height="100%" viewBox="0 0 660 625" fill="none">
              <ellipse cx="330" cy="312.5" rx="329" ry="311.5" stroke="#7D89B0" strokeOpacity="0.3" strokeDasharray="8 8"/>
            </svg>
          </div>

          <div className="relative max-w-[1200px] mx-auto px-8">
            <div className="relative h-[460px]">
              {/* Stat 1: 208 Video Lessons - Blue blob, top-left */}
              <div className="absolute left-[25%] bottom-[20%] top-[5px] w-[200px]">
                <div className="relative">
                  <Image
                    src="/images/stats/Frame-3.svg"
                    alt=""
                    width={204}
                    height={187}
                    className="w-full"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-bold text-[50px] text-[#1d1f20] leading-[1.2]">208</span>
                    <span className="text-[18px] text-[#0e101b] text-center leading-[1.5]">
                      Video<br/>Lessons
                    </span>
                  </div>
                </div>
              </div>

              {/* Stat 2: 3k+ Active Learners - Yellow blob, top-right */}
              <div className="absolute right-[25%] bottom-[20%] top-0 w-[200px]">
                <div className="relative">
                  <Image
                    src="/images/stats/Frame-2.svg"
                    alt=""
                    width={188}
                    height={186}
                    className="w-full"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-bold text-[50px] text-[#1d1f20] leading-[1.2]">3k+</span>
                    <span className="text-[18px] text-[#0e101b] text-center leading-[1.5]">
                      Active<br/>Learners
                    </span>
                  </div>
                </div>
              </div>

              {/* Stat 3: 4 Progressive Levels - Pink blob, bottom-left */}
              <div className="absolute left-[10%] right top-[220px] w-[200px]">
                <div className="relative">
                  <Image
                    src="/images/stats/Frame-1.svg"
                    alt=""
                    width={185}
                    height={179}
                    className="w-full"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-bold text-[50px] text-[#1d1f20] leading-[1.2]">4</span>
                    <span className="text-[18px] text-[#0e101b] text-center leading-[1.5]">
                      Progressive<br/>Levels
                    </span>
                  </div>
                </div>
              </div>

              {/* Stat 4: 5 Core Skills Tracked - Purple blob, bottom-right */}
              <div className="absolute right-[10%] top-[230px] w-[200px]">
                <div className="relative">
                  <Image
                    src="/images/stats/Frame.svg"
                    alt=""
                    width={200}
                    height={192}
                    className="w-full"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="font-bold text-[50px] text-[#1d1f20] leading-[1.2]">5</span>
                    <span className="text-[18px] text-[#0e101b] text-center leading-[1.5]">
                      Core Skills<br/>Tracked
                    </span>
                  </div>
                </div>
              </div>

              {/* Mascot Bird - Center */}
              <div className="absolute left-1/2 -translate-x-1/2 top-[240px] w-[226px]">
                <div className="relative animate-breathe">
                  {/* Thought bubble / sparkle */}
                  <div className="absolute -top-[30px] -right-[20px] w-[70px] z-10 animate-sparkle-pop">
                    <Image
                      src="/images/stats/Frame 1973342018.svg"
                      alt=""
                      width={71}
                      height={76}
                      className="w-full"
                    />
                  </div>
                  
                  {/* Wings */}
                  <div className="absolute top-[55%] left-1/2 -translate-x-1/2 w-[110%] animate-wing-flap origin-top">
                    <Image
                      src="/images/stats/Group 16.svg"
                      alt=""
                      width={227}
                      height={87}
                      className="w-full"
                    />
                  </div>
                  
                  {/* Body */}
                  <Image
                    src="/images/stats/body.svg"
                    alt="Argumindo Mascot"
                    width={173}
                    height={251}
                    className="w-full relative z-[1]"
                  />
                  
                  {/* Body center/belly */}
                  <div className="absolute top-[60%] left-1/2 -translate-x-1/2 w-[55%] z-[2]">
                    <Image
                      src="/images/stats/body center.svg"
                      alt=""
                      width={98}
                      height={82}
                      className="w-full"
                    />
                  </div>
                  
                  {/* Eyes - with blink animation */}
                  <div className="absolute top-[22%] left-[14%] w-[70%] z-[3] animate-blink origin-center">
                    <Image
                      src="/images/stats/Group 17.svg"
                      alt=""
                      width={119}
                      height={54}
                      className="w-full"
                    />
                  </div>
                  
                  {/* Left eyebrow - with raise animation */}
                  <div className="absolute top-[18%] left-[20%] w-[14%] z-[4] animate-eyebrow">
                    <Image
                      src="/images/stats/left eyebrow.svg"
                      alt=""
                      width={21}
                      height={10}
                      className="w-full"
                    />
                  </div>
                  
                  {/* Right eyebrow - with raise animation */}
                  <div className="absolute top-[18%] right-[26%] w-[14%] z-[4] scale-x-[-1] animate-eyebrow">
                    <Image
                      src="/images/stats/right eyebrow.svg"
                      alt=""
                      width={21}
                      height={10}
                      className="w-full"
                    />
                  </div>
                  
                  {/* Beak with mouth */}
                  <div className="absolute top-[35%] left-[39%] w-[22%] z-[5]">
                    <Image
                      src="/images/stats/beak.svg"
                      alt=""
                      width={51}
                      height={59}
                      className="w-full"
                    />
                  </div>
                  
                  {/* Feet */}
                  <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 w-[55%] z-[0]">
                    <Image
                      src="/images/stats/Frame 3.svg"
                      alt=""
                      width={94}
                      height={22}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </section>
  );
}
