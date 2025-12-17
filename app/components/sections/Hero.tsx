"use client";

import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-white relative overflow-hidden">
      {/* Mobile Layout */}
      <div className="lg:hidden px-4 pt-6 pb-8">
        <div className="relative flex flex-col items-center">
          
          {/* Girl photo with violet circle - Mobile top left */}
          <div className="absolute left-0 top-0 w-[54px] h-[66px] z-10 animate-fade-in-left">
            <div className="relative w-full h-full">
              <div className="absolute bottom-0 left-0 w-[52px] h-[52px] bg-[#ddd6fe] rounded-full overflow-hidden">
                <Image
                  src="/images/hero-girl.png"
                  alt="Student"
                  width={52}
                  height={68}
                  className="absolute top-[-14px] left-[2px] w-[52px] object-cover"
                />
              </div>
              <div className="absolute left-[-3px] top-[19px] animate-float">
                <div className="w-[11px] h-[11px] bg-[#f07e9e] rounded-full" />
              </div>
            </div>
          </div>

          {/* Swirly arrow - Mobile */}
          <div className="absolute left-[5px] top-[55px] animate-float-slow">
            <Image
              src="/images/hero/Vector 584.svg"
              alt=""
              width={35}
              height={34}
              className="w-[35px]"
            />
          </div>

          {/* Main Content Area - Mobile */}
          <div className="relative flex flex-col items-center w-full mt-[50px]">
            
            {/* Heading Section */}
            <div className="relative flex flex-col items-center">
              
              {/* Green star icon - Mobile */}
              <div className="absolute top-[-35px] right-[-20px] animate-twinkle">
                <Image
                  src="/images/hero/Group 1261161710.svg"
                  alt=""
                  width={46}
                  height={46}
                  className="w-[46px]"
                />
              </div>

              {/* First line */}
              <div className="relative animate-fade-in-up">
                <h1 className="font-bold text-[28px] text-[#1d1f20] text-center leading-[36px]">
                  Transform Kids into
                </h1>
              </div>

              {/* Second line */}
              <div className="relative animate-fade-in-up delay-100" style={{ animationFillMode: 'both' }}>
                <span className="absolute bg-[#875bf7] opacity-50 h-[30px] right-0 w-[115px] top-[3px]" />
                <h1 className="relative font-bold text-[28px] text-[#1d1f20] text-center leading-[36px]">
                  Confident Thinkers
                </h1>
              </div>

              {/* Third line */}
              <div className="relative animate-fade-in-up delay-200" style={{ animationFillMode: 'both' }}>
                <span className="absolute bg-[#f4bd12] opacity-50 h-[30px] left-[22px] w-[110px] top-[3px]" />
                <h1 className="relative font-bold text-[28px] text-[#1d1f20] text-center leading-[36px]">
                  & Powerful Speakers
                </h1>
              </div>
            </div>

            {/* Subtitle - Mobile */}
            <div className="max-w-[355px] mt-4 animate-fade-in-up delay-300" style={{ animationFillMode: 'both' }}>
              <p className="font-outfit font-normal text-[16px] text-[#30374f] text-center leading-[24px]">
                A complete journey from foundational reasoning to championship-level debate. Real-world topics, AI practice, and gamified learning for ages 9-15+.
              </p>
            </div>

            {/* CTA Buttons - Mobile (side by side) */}
            <div className="flex flex-row gap-[28px] mt-6 animate-fade-in-up delay-400" style={{ animationFillMode: 'both' }}>
              {/* Primary - Yellow Button */}
              <button className="relative h-[42px] w-[140px] cursor-pointer group rounded-full">
                <div className="absolute inset-0 top-[4px] bg-[#facc15] rounded-full" />
                <div className="absolute inset-0 bottom-[4px] bg-[#fde047] rounded-full flex items-center justify-center gap-1.5 hover:brightness-105 transition-all">
                  <span className="font-bold text-[12px] text-[#0e101b] leading-[18px]">Start Free Trial</span>
                  <span className="bg-[#0e101b] rounded-full flex items-center justify-center">
                    <Image
                      src="/images/hero/Frame-1.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="w-[16px]"
                    />
                  </span>
                </div>
              </button>

              {/* Secondary - Gray Button */}
              <button className="relative h-[42px] w-[140px] cursor-pointer group rounded-full">
                <div className="absolute inset-0 top-[4px] bg-[#dcdfea] rounded-full" />
                <div className="absolute inset-0 bottom-[4px] bg-[#eff1f5] rounded-full flex items-center justify-center gap-1.5 hover:bg-[#e5e7ef] transition-colors">
                  <span className="font-bold text-[12px] text-[#0e101b] leading-[18px]">Watch Demo</span>
                  <Image
                    src="/images/hero/Frame.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="w-[16px]"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block max-w-[1370px] mx-auto px-8 py-[30px]">
        <div className="relative flex flex-col items-center justify-center min-h-[587px]">
          
          {/* Girl photo - Desktop */}
          <div className="absolute left-[-14px] top-[-20px] w-[118px] h-[145px] z-10 animate-fade-in-left">
            <div className="absolute bottom-0 left-0 w-[113px] h-[113px] bg-[#ddd6fe] rounded-full overflow-hidden">
              <Image
                src="/images/hero-girl.png"
                alt="Student"
                width={114}
                height={151}
                className="absolute top-[-31px] left-[5px] w-[114px] object-cover"
              />
            </div>
            <div className="absolute top-0 left-[5px] w-[113px] h-[99px] overflow-hidden">
              <Image
                src="/images/hero-girl.png"
                alt=""
                width={114}
                height={152}
                className="w-full object-cover object-top"
              />
            </div>
            <div className="absolute left-[-6px] top-[42px] animate-float">
              <Image
                src="/images/hero/Ellipse 3854.svg"
                alt=""
                width={23}
                height={23}
              />
            </div>
          </div>

          {/* Swirly arrow - Desktop */}
          <div className="absolute left-[160px] top-[80px] hidden xl:block animate-float-slow">
            <Image
              src="/images/hero/Vector 584.svg"
              alt=""
              width={108}
              height={204}
              className="w-[108px]"
            />
          </div>

          {/* Main Content Area - Desktop */}
          <div className="relative flex flex-col items-center gap-6 w-full">
            
            <div className="relative flex flex-col items-center">
              
              {/* Green star icon - Desktop */}
              <div className="absolute top-[-60px] right-[-350px] animate-twinkle">
                <Image
                  src="/images/hero/Group 1261161710.svg"
                  alt=""
                  width={92}
                  height={92}
                  className="w-[92px]"
                />
              </div>

              {/* First line */}
              <div className="relative animate-fade-in-up">
                <h1 className="font-bold text-[54px] xl:text-[63.36px] text-[#1d1f20] text-center leading-[1.4]">
                  Transform Kids into
                </h1>
                
                <div className="absolute right-[-210px] top-[30px] z-[1]">
                  <Image
                    src="/images/hero/Frame 1261161712.svg"
                    alt=""
                    width={194}
                    height={127}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Second line */}
              <div className="relative animate-fade-in-up delay-100" style={{ animationFillMode: 'both' }}>
                <span className="absolute bg-[#875bf7] opacity-50 h-[60px] xl:h-[72px] right-0 w-[220px] xl:w-[279px] top-[10px]" />
                <h1 className="relative font-bold text-[54px] xl:text-[63.36px] text-[#1d1f20] text-center leading-[1.4]">
                  Confident Thinkers
                </h1>
                <div className="absolute right-[-60px] top-[30px] animate-breathe">
                  <div className="w-[55px] h-[55px] bg-[#f07e9e] rounded-full" />
                </div>
              </div>

              {/* Third line */}
              <div className="relative animate-fade-in-up delay-200" style={{ animationFillMode: 'both' }}>
                <span className="absolute bg-[#f4bd12] opacity-50 h-[60px] xl:h-[72px] left-[50px] xl:left-[60px] w-[220px] xl:w-[293px] top-[10px]" />
                <h1 className="relative font-bold text-[54px] xl:text-[63.36px] text-[#1d1f20] text-center leading-[1.4]">
                  & Powerful Speakers
                </h1>
              </div>
            </div>

            {/* Subtitle - Desktop */}
            <div className="max-w-[813px] px-4 mt-2 animate-fade-in-up delay-300" style={{ animationFillMode: 'both' }}>
              <p className="font-outfit font-normal text-[18px] xl:text-[20px] text-[#30374f] text-center leading-[30px]">
                A complete journey from foundational reasoning to championship-level debate.
                <br />
                Real-world topics, AI practice, and gamified learning for ages 9-15+.
              </p>
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="flex flex-row gap-5 mt-4 animate-fade-in-up delay-400" style={{ animationFillMode: 'both' }}>
              <button className="relative h-[72px] w-[240px] cursor-pointer group rounded-full">
                <div className="absolute inset-0 top-[8px] bg-[#facc15] rounded-full" />
                <div className="absolute inset-0 bottom-[8px] bg-[#fde047] rounded-full flex items-center justify-center gap-2.5 hover:brightness-105 transition-all">
                  <span className="font-bold text-[20px] text-[#0e101b] leading-[24px]">Start Free Trial</span>
                  <span className="bg-[#0e101b] rounded-full flex items-center justify-center">
                    <Image
                      src="/images/hero/Frame-1.svg"
                      alt=""
                      width={29}
                      height={29}
                      className="w-[29px]"
                    />
                  </span>
                </div>
              </button>

              <button className="relative h-[72px] w-[224px] cursor-pointer group rounded-full">
                <div className="absolute inset-0 top-[8px] bg-[#dcdfea] rounded-full" />
                <div className="absolute inset-0 bottom-[8px] bg-[#eff1f5] rounded-full flex items-center justify-center gap-2.5 hover:bg-[#e5e7ef] transition-colors">
                  <span className="font-bold text-[20px] text-[#0e101b] leading-[24px]">Watch Demo</span>
                  <Image
                    src="/images/hero/Frame.svg"
                    alt=""
                    width={29}
                    height={29}
                    className="w-[29px]"
                  />
                </div>
              </button>
            </div>
          </div>

          {/* Purple wave decoration - Desktop */}
          <div className="absolute left-[50px] top-[320px] animate-float-reverse">
            <Image
              src="/images/hero/Vector.svg"
              alt=""
              width={90}
              height={92}
              className="w-[90px]"
            />
          </div>

          {/* Boy at desk - Desktop */}
          <div className="absolute right-[-30px] bottom-[40px] animate-fade-in-right" style={{ transform: "rotate(7.354deg)" }}>
            <Image
              src="/images/hero-boy.png"
              alt="Student learning"
              width={153}
              height={123}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
