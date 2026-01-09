"use client";

import Image from "next/image";

interface FeatureCardProps {
  bgColor: string;
  iconContent: React.ReactNode;
  title: string;
  description: string;
  decoration?: React.ReactNode;
  isMobile?: boolean;
}

function FeatureCard({ bgColor, iconContent, title, description, decoration, isMobile }: FeatureCardProps) {
  if (isMobile) {
    return (
      <div
        className="relative w-full rounded-[18px] overflow-clip pb-[10px]"
        style={{ backgroundColor: bgColor }}
      >
        {/* Decoration */}
        {decoration}

        {/* Content */}
        <div className="p-[10px]">
          <div className="flex flex-col gap-[21px]">
            {/* Icon */}
            <div className="w-[62px] h-[62px] relative">
              {iconContent}
            </div>

            {/* Text */}
            <div className="px-[9px]">
              <h3 className="font-bold text-[16px] text-[#1d1f20] leading-[22px] mb-2">
                {title}
              </h3>
              <p className="font-outfit text-[14px] text-[#0e101b] leading-[20px]">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative flex-1 min-w-[280px] h-[270px] rounded-[18px] overflow-hidden hover-lift cursor-pointer"
      style={{ backgroundColor: bgColor }}
    >
      {/* Decoration */}
      {decoration}

      {/* Content */}
      <div className="absolute left-[16px] top-[23px] w-[calc(100%-32px)]">
        {/* Icon */}
        <div className="w-[62px] h-[62px] mb-[21px] relative">
          {iconContent}
        </div>

        {/* Text */}
        <div className="px-[9px]">
          <h3 className="font-bold text-[20px] text-[#1d1f20] leading-[26px] mb-2">
            {title}
          </h3>
          <p className="font-outfit text-[18px] text-[#0e101b] leading-[26px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

// Icon with star background and sparkles
function StarIcon({ iconSrc }: { iconSrc: string }) {
  return (
    <>
      <Image src="/images/features/Star 1.svg" alt="" width={61} height={61} className="absolute inset-0 w-full h-full" />
      <Image src={iconSrc} alt="" width={24} height={24} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[24px] h-[24px]" />
      {/* Sparkles */}
      <Image src="/images/features/Group 1261161714.svg" alt="" width={6} height={8} className="absolute top-[21px] left-[10px]  w-[6px]" />
      <Image src="/images/features/Group 1261161713.svg" alt="" width={5} height={9} className="absolute bottom-[19px] right-[8px] w-[5px]" />
    </>
  );
}

export function Features() {
  const features = [
    {
      bgColor: "#ddd6fe",
      iconSrc: "/images/features/mingcute_video-fill.svg",
      title: "3-Minute Video Lessons",
      description: "Engaging, age-appropriate lessons designed for maximum retention and minimal time commitment.",
      decorationType: "wave",
    },
    {
      bgColor: "#7cd4fd",
      iconSrc: "/images/features/clarity_talk-bubbles-solid.svg",
      title: "AI Debate Practice",
      description: "Practice debates with AI opponents that adapt to your skill level and provide instant feedback.",
      decorationType: "star",
    },
    {
      bgColor: "#fda8e5",
      iconSrc: "/images/features/ri_progress-5-line.svg",
      title: "Real-Time Progress Tracking",
      description: "Track development across 5 core skills: Reasoning, Structure, Evidence, Persuasion, Delivery.",
      decorationType: "dots",
    },
    {
      bgColor: "#ffd166",
      iconSrc: "/images/features/iconamoon_news-fill.svg",
      title: "Real-World Topics",
      description: "Learn from current events and news—no fiction or fantasy. Build skills that matter.",
      decorationType: "dots-yellow",
    },
    {
      bgColor: "#a7f3d0",
      iconSrc: "/images/features/icon-park-solid_game.svg",
      title: "Gamified Learning",
      description: "Earn badges, maintain streaks, and level up as you master the art of argumentation.",
      decorationType: "circles",
    },
    {
      bgColor: "#b6d8ff",
      iconSrc: "/images/features/gridicons_trophy.svg",
      title: "Championship Ready",
      description: "By 10th grade, students are prepared for debate competitions and college-level discourse.",
      decorationType: "wave-light",
    },
  ];

  const getDecoration = (type: string, isMobile = false) => {
    switch (type) {
      case "wave":
        return (
          <div className={`absolute ${isMobile ? 'right-[-10px] top-[-39px] w-[105px] h-[94px]' : 'right-[-10px] top-[-25px] w-[105px] h-[94px]'}`}>
            <Image src="/images/features/Vector 574.svg" alt="" width={105} height={94} className="w-full h-full" />
          </div>
        );
      case "star":
        return (
          <div className={`absolute ${isMobile ? 'right-[-20px] top-[-48px] w-[135px] h-[135px]' : 'right-[-15px] top-[-35px] w-[135px] h-[135px]'}`}>
            <Image src="/images/features/Star 4.svg" alt="" width={110} height={110} className="w-full h-full rotate-[-15deg]" />
          </div>
        );
      case "dots":
        return (
          <div className={`absolute ${isMobile ? 'right-[0px] top-[-21px]' : 'right-[20px] top-[-21px]'} flex gap-[2px]`}>
            {[...Array(11)].map((_, i) => (
              <div key={i} className={`${isMobile ? 'w-[6.3px] h-[66px]' : 'w-[9px] h-[91px]'} rounded-full bg-[#fcedf0]`} />
            ))}
          </div>
        );
      case "dots-yellow":
        return (
          <div className={`absolute ${isMobile ? 'right-[0px] top-[-20px]' : 'right-[10px] top-[-21px]'} flex gap-[2px]`}>
            {[...Array(11)].map((_, i) => (
              <div key={i} className={`${isMobile ? 'w-[6.3px] h-[66px]' : 'w-[9px] h-[91px]'} rounded-full bg-[#fff4cb] opacity-60`} />
            ))}
          </div>
        );
      case "circles":
        return (
          <div className={`absolute ${isMobile ? 'right-[-10px] top-[-62px] w-[124px] h-[124px]' : 'right-[-10px] top-[-35px] w-[130px] h-[130px]'}`}>
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full border-[3px] border-[#d1fae5]" />
              <div className="absolute inset-[15px] rounded-full border-[3px] border-[#d1fae5]" />
              <div className="absolute inset-[30px] rounded-full border-[3px] border-[#fef08a]" />
              <div className="absolute inset-[42px] rounded-full bg-[#fef08a]" />
              <div className="absolute inset-[52px] rounded-full bg-[#fda4af]" />
            </div>
          </div>
        );
      case "wave-light":
        return (
          <div className={`absolute ${isMobile ? 'right-[-10px] top-[-32px] w-[105px] h-[94px]' : 'right-[-10px] top-[-25px] w-[105px] h-[94px]'}`}>
            <Image src="/images/features/Vector 574.svg" alt="" width={105} height={94} className="w-full h-full opacity-40" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="bg-white">
      {/* Mobile Layout */}
      <div className="lg:hidden px-[20px] py-[40px]">
        {/* Header - Mobile */}
        <div className="flex flex-col gap-[12px] items-center mb-[36px]">
          <h2 className="font-bold text-[20px] text-[#0e101b] leading-[26px] text-center">
            Everything You Need to Succeed
          </h2>
          <p className="font-outfit text-[14px] text-[#0e101b] leading-[20px] text-center max-w-[672px]">
            A complete learning platform combining expert curriculum, AI technology, and proven gamification.
          </p>
        </div>

        {/* Feature Cards - Mobile */}
        <div className="flex flex-col gap-[24px]">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              bgColor={feature.bgColor}
              iconContent={<StarIcon iconSrc={feature.iconSrc} />}
              title={feature.title}
              description={feature.description}
              decoration={getDecoration(feature.decorationType, true)}
              isMobile
            />
          ))}
        </div>

        {/* CTA Button - Mobile */}
        <div className="flex justify-center mt-8">
          <button className="relative h-[42px] w-[187px]">
            <div className="absolute top-[calc(50%+2.33px)] -translate-y-1/2 left-[5.83px] w-[170.333px] h-[37.333px] bg-[#dcdfea] rounded-[28px]" />
            <div className="absolute top-[0.58px] left-[5.83px] w-[170.333px] h-[37.333px] bg-[#eff1f5] rounded-[28px] flex items-center justify-center gap-[5.6px]">
              <span className="font-bold text-[12px] text-[#0e101b] leading-[18px]">Get Started for FREE</span>
              <div className="bg-[#0e101b] rounded-[8.215px] w-[15.167px] h-[15.167px] flex items-center justify-center">
                <Image
                  src="/images/features/Frame.svg"
                  alt=""
                  width={15}
                  height={15}
                  className="w-full h-full"
                />
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block py-[120px] px-[80px]">
        <div className="max-w-[1280px] mx-auto">
          {/* Header - Desktop */}
          <div className="relative mb-[42px]">
            <h2 className="font-bold text-[40px] text-[#0e101b] leading-[48px] mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="font-outfit text-[20px] text-[#0e101b] leading-[30px] max-w-[753px]">
              A complete learning platform combining expert curriculum, AI technology, and proven gamification.
            </p>

            {/* Parrot with microphone - Desktop only */}
            <div className="absolute right-0 top-[-37px] w-[314px] h-[260px] animate-head-bob">
              <Image
                src="/images/features/Gemini_Generated_Image_d7qug2d7qug2d7qu 1.png"
                alt="Argumindo mascot"
                width={314}
                height={260}
                className="w-full h-full object-contain"
              />
              {/* Microphone stand base */}
              <div className="absolute left-[133px] top-[201px] w-[66px] h-[5px] bg-[#132d40]" />
            </div>
          </div>

          {/* Feature Cards - Desktop */}
          <div className="flex flex-col gap-6">
            {/* Row 1 */}
            <div className="relative flex flex-row gap-6">
              {/* White pill dividers between cards */}
              <div className="absolute left-[31%] top-[42px] flex-col gap-[19px] flex z-10">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-[44px] h-[17px] bg-white rounded-full" />
                ))}
              </div>
              <div className="absolute left-[65%] top-[42px] flex-col gap-[19px] flex z-10">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-[44px] h-[17px] bg-white rounded-full" />
                ))}
              </div>
              {features.slice(0, 3).map((feature, index) => (
                <FeatureCard
                  key={index}
                  bgColor={feature.bgColor}
                  iconContent={<StarIcon iconSrc={feature.iconSrc} />}
                  title={feature.title}
                  description={feature.description}
                  decoration={getDecoration(feature.decorationType)}
                />
              ))}
            </div>

            {/* Row 2 */}
            <div className="relative flex flex-row gap-6">
              {/* White pill dividers between cards */}
              <div className="absolute left-[31%] top-[42px] flex-col gap-[19px] flex z-10">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-[44px] h-[17px] bg-white rounded-full" />
                ))}
              </div>
              <div className="absolute left-[65%] top-[42px] flex-col gap-[19px] flex z-10">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-[44px] h-[17px] bg-white rounded-full" />
                ))}
              </div>
              {features.slice(3, 6).map((feature, index) => (
                <FeatureCard
                  key={index}
                  bgColor={feature.bgColor}
                  iconContent={<StarIcon iconSrc={feature.iconSrc} />}
                  title={feature.title}
                  description={feature.description}
                  decoration={getDecoration(feature.decorationType)}
                />
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="flex justify-center mt-12">
            <button className="relative h-[72px] w-[320px]">
              <div className="absolute top-[calc(50%+4px)] -translate-y-1/2 left-[10px] w-[292px] h-[64px] bg-[#dcdfea] rounded-[48px]" />
              <div className="absolute top-[1px] left-[10px] w-[292px] h-[64px] bg-[#eff1f5] rounded-[48px] flex items-center justify-center gap-2">
                <span className="font-bold text-[20px] text-[#270410]">Get Started for FREE</span>
                <div className="bg-[#270410] rounded-[14px] w-[26px] h-[26px] flex items-center justify-center">
                  <Image
                    src="/images/features/Frame.svg"
                    alt=""
                    width={26}
                    height={26}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
