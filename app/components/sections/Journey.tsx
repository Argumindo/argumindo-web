"use client";

import Image from "next/image";

interface LevelCardProps {
  level: number;
  ages: string;
  title: string;
  subtitle?: string;
  items: string[];
  borderColor: string;
  bgColor: string;
  badgeColor: string;
  badgeSrc: string;
  isMobile?: boolean;
}

function LevelCard({ level, ages, title, subtitle, items, borderColor, bgColor, badgeColor, badgeSrc, isMobile }: LevelCardProps) {
  return (
    <div 
      className={`bg-[#f8f8f8] border-2 rounded-[28px] shadow-[0px_6px_6px_-3px_rgba(16,24,40,0.03),0px_15px_18px_-3px_rgba(16,24,40,0.08)] p-4 pt-0 hover-lift cursor-pointer ${isMobile ? 'w-[228px]' : 'w-[326px]'}`}
      style={{ borderColor }}
    >
      {/* Badge on top */}
      <div className="flex justify-center -mt-[24px]">
        <Image
          src={badgeSrc}
          alt=""
          width={38}
          height={48}
          className={isMobile ? "w-[27px] h-[34px]" : "w-[38px] h-[48px]"}
        />
      </div>
      
      {/* Inner card */}
      <div 
        className={`rounded-[20px] p-4 pt-[18px] ${isMobile ? 'mt-[20px]' : 'mt-[30px]'}`}
        style={{ backgroundColor: bgColor }}
      >
        {/* Level & Age */}
        <div className="flex items-center justify-between px-2 mb-4">
          <span className={`font-medium text-black font-outfit ${isMobile ? 'text-[14px]' : 'text-[16px]'}`}>Level {level}</span>
          <span 
            className={`text-[#0e101b] px-3 py-1 rounded-[6px] border font-outfit font-medium ${isMobile ? 'text-[11px]' : 'text-[12px]'}`}
            style={{ borderColor: badgeColor }}
          >
            {ages}
          </span>
        </div>
        
        {/* Title */}
        <div className="px-2 mb-3">
          <h3 className={`font-bold text-[#0e101b] leading-normal ${isMobile ? 'text-[18px]' : 'text-[22px]'}`}>
            {title}
            {subtitle && <><br/>{subtitle}</>}
          </h3>
        </div>
        
        {/* Items */}
        <ul className="space-y-3 px-2">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <Image
                src={index < 2 ? "/images/journey/Star 2.svg" : "/images/journey/Star 3.svg"}
                alt=""
                width={11}
                height={19}
                className={isMobile ? "w-[8px] h-[13px] flex-shrink-0" : "w-[11px] h-[19px] flex-shrink-0"}
              />
              <span className={`font-outfit text-[#0e101b] ${isMobile ? 'text-[14px]' : 'text-[16px]'}`}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

interface ProgressIconProps {
  iconSrc: string;
  bgSrc: string;
  ellipse1Src: string;
  ellipse2Src: string;
  size?: number;
}

function ProgressIcon({ iconSrc, bgSrc, ellipse1Src, ellipse2Src, size = 104 }: ProgressIconProps) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Background circle with gradient */}
      <Image
        src={bgSrc}
        alt=""
        width={113}
        height={108}
        className="absolute inset-0 w-full h-full"
      />
      {/* Ellipse layers - dark outer */}
      <Image
        src={ellipse1Src}
        alt=""
        width={80}
        height={75}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: size * 0.77, height: size * 0.72 }}
      />
      {/* Ellipse layers - light inner */}
      <Image
        src={ellipse2Src}
        alt=""
        width={80}
        height={72}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ width: size * 0.77, height: size * 0.69 }}
      />
      {/* Icon - centered */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
           style={{ width: size * 0.35, height: size * 0.35 }}>
        <Image
          src={iconSrc}
          alt=""
          width={37}
          height={37}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}

export function Journey() {
  const levels = [
    {
      level: 1,
      ages: "Ages 9-10",
      title: "Foundational",
      subtitle: "Reasoning",
      items: ["Understanding Arguments", "Evidence Basics", "Public Speaking"],
      borderColor: "#fed422",
      bgColor: "#fef4cb",
      badgeColor: "#ca8a04",
      badgeSrc: "/images/journey/Group-3.svg", // Yellow badge
    },
    {
      level: 2,
      ages: "Ages 11-12",
      title: "Intermediate",
      subtitle: "Argumentation",
      items: ["Advanced Evidence", "Refutation", "Media Literacy"],
      borderColor: "#ffabc4",
      bgColor: "#fcedf0",
      badgeColor: "#d08ebe",
      badgeSrc: "/images/journey/Group-1.svg", // Pink badge
    },
    {
      level: 3,
      ages: "Ages 13-14",
      title: "Advanced Debate",
      subtitle: "Mastery",
      items: ["Policy Debate", "Philosophy", "Tournament Prep"],
      borderColor: "#949af6",
      bgColor: "#e0eaff",
      badgeColor: "#949af6",
      badgeSrc: "/images/journey/Group-2.svg", // Blue/indigo badge
    },
    {
      level: 4,
      ages: "Ages 15+",
      title: "Championship",
      subtitle: "Excellence",
      items: ["Critical Theory", "Elite Strategy", "Leadership"],
      borderColor: "#f094f6",
      bgColor: "#fce7f6",
      badgeColor: "#d08ebe",
      badgeSrc: "/images/journey/Group.svg", // Purple/pink badge
    },
  ];

  return (
    <section className="bg-white py-10 lg:py-[72px] px-4 lg:px-[112px]">
      {/* Header */}
      <div className="text-center mb-3">
        <h2 className="font-bold text-[24px] lg:text-[40px] text-[#0e101b] leading-[1.2] mb-3">
          Your Journey to Mastery
        </h2>
        <p className="font-outfit text-[16px] lg:text-[20px] text-[#0e101b] max-w-[358px] lg:max-w-[672px] mx-auto leading-[1.5]">
          Progressive curriculum designed by debate experts. Each level builds systematically on previous foundations.
        </p>
      </div>

      {/* Journey Map - Desktop */}
      <div className="relative max-w-[1118px] mx-auto hidden lg:block" style={{ height: '1202px' }}>
        
        {/* Curved Path - Vector 590 */}
        <div className="absolute left-[calc(50%-9px)] -translate-x-1/2 top-[291px] w-[294px] h-[717px]">
          <Image
            src="/images/journey/Vector 590.png"
            alt=""
            width={294}
            height={717}
            className="w-full h-full"
          />
        </div>

        {/* Progress Icon 1 - Lightbulb (YELLOW) - between Level 1 and Level 2 */}
        <div className="absolute left-[334px] top-[223px]">
          <ProgressIcon 
            iconSrc="/images/journey/mage_light-bulb-fill.svg" 
            bgSrc="/images/journey/Bg/Progress.svg"
            ellipse1Src="/images/journey/Ellipse 3873.svg"
            ellipse2Src="/images/journey/Ellipse 3872.svg"
          />
        </div>

        {/* Progress Icon 2 - Rocket (PINK) - right side */}
        <div className="absolute left-[628px] top-[387px]">
          <ProgressIcon 
            iconSrc="/images/journey/mingcute_rocket-fill.svg" 
            bgSrc="/images/journey/Bg/Progress-1.svg"
            ellipse1Src="/images/journey/Ellipse 3873-1.svg"
            ellipse2Src="/images/journey/Ellipse 3872-1.svg"
          />
        </div>

        {/* Progress Icon 3 - Crown (PURPLE) - center area */}
        <div className="absolute left-[381px] top-[734px]">
          <ProgressIcon 
            iconSrc="/images/journey/material-symbols_chess-queen.svg" 
            bgSrc="/images/journey/Bg/Progress-2.svg"
            ellipse1Src="/images/journey/Ellipse 3873-2.svg"
            ellipse2Src="/images/journey/Ellipse 3872-2.svg"
          />
        </div>

        {/* Progress Icon 4 - Trophy (PINK) - bottom */}
        <div className="absolute left-[644px] top-[966px]">
          <ProgressIcon 
            iconSrc="/images/journey/bi_trophy-fill.svg" 
            bgSrc="/images/journey/Bg/Progress-3.svg"
            ellipse1Src="/images/journey/Ellipse 3873-3.svg"
            ellipse2Src="/images/journey/Ellipse 3872-3.svg"
          />
        </div>

        {/* Level 1 - Top Left */}
        <div className="absolute left-[5px] top-[72px]">
          <LevelCard {...levels[0]} />
        </div>

        {/* Parrot decoration - top right (near Level 2) */}
        <div className="absolute left-[928px] top-[117px] w-[133px] h-[144px] animate-head-bob">
          <Image
            src="/images/journey/Gemini_Generated_Image_8tj5n88tj5n88tj5 3.png"
            alt=""
            width={133}
            height={144}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Level 2 - Right side */}
        <div className="absolute left-[735px] top-[247px]">
          {/* Pink circle decoration */}
          <div className="absolute -top-[10px] -right-[10px] w-[12px] h-[12px] rounded-full bg-[#f5b1f1]" />
          <LevelCard {...levels[1]} />
        </div>

        {/* Parrot decoration - center (with wings spread) */}
        <div className="absolute left-[calc(50%-82px)] -translate-x-1/2 top-[474px] w-[148px] h-[144px] animate-sway">
          <Image
            src="/images/journey/Gemini_Generated_Image_8tj5n88tj5n88tj5 2.png"
            alt=""
            width={148}
            height={144}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Level 3 - Left side */}
        <div className="absolute left-[49px] top-[582px]">
          <LevelCard {...levels[2]} />
        </div>

        {/* Parrot with trophy - right side (near Level 4) */}
        <div className="absolute left-[898px] top-[671px] w-[163px] h-[172px] animate-hop">
          <Image
            src="/images/journey/unnamed 1.png"
            alt=""
            width={163}
            height={172}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Level 4 - Right side bottom */}
        <div className="absolute left-[756px] top-[826px]">
          {/* Pink circle decoration */}
          <div className="absolute -top-[10px] -right-[10px] w-[12px] h-[12px] rounded-full bg-[#f5b1f1]" />
          <LevelCard {...levels[3]} />
        </div>
      </div>

      {/* Mobile Layout - Stack cards vertically with roadmap and progress icons */}
      <div className="lg:hidden relative pt-[50px]">
        {/* Curved Path - Mobile (scaled down) */}
        <div className="absolute left-[97px] top-[254px] w-[206px] h-[982px]">
          <Image
            src="/images/journey/Vector 590.png"
            alt=""
            width={206}
            height={982}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Level Cards with Progress Icons */}
        <div className="relative space-y-[92px]">
          {/* Level 1 */}
          <div className="flex items-start justify-start pl-4">
            <LevelCard {...levels[0]} isMobile />
            {/* Progress Icon - Lightbulb */}
            <div className="absolute right-[16px] top-[95px]">
              <ProgressIcon 
                iconSrc="/images/journey/mage_light-bulb-fill.svg" 
                bgSrc="/images/journey/Bg/Progress.svg"
                ellipse1Src="/images/journey/Ellipse 3873.svg"
                ellipse2Src="/images/journey/Ellipse 3872.svg"
                size={44}
              />
            </div>
          </div>

          {/* Level 2 */}
          <div className="flex items-start justify-end pr-4">
            {/* Progress Icon - Rocket */}
            <div className="absolute left-[16px] top-[421px]">
              <ProgressIcon 
                iconSrc="/images/journey/mingcute_rocket-fill.svg" 
                bgSrc="/images/journey/Bg/Progress-1.svg"
                ellipse1Src="/images/journey/Ellipse 3873-1.svg"
                ellipse2Src="/images/journey/Ellipse 3872-1.svg"
                size={44}
              />
            </div>
            <LevelCard {...levels[1]} isMobile />
          </div>

          {/* Parrot decoration - center */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[582px] w-[91px] h-[88px]">
            <Image
              src="/images/journey/Gemini_Generated_Image_8tj5n88tj5n88tj5 2.png"
              alt=""
              width={91}
              height={88}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Level 3 */}
          <div className="flex items-start justify-start pl-4">
            <LevelCard {...levels[2]} isMobile />
            {/* Progress Icon - Crown */}
            <div className="absolute right-[16px] top-[747px]">
              <ProgressIcon 
                iconSrc="/images/journey/material-symbols_chess-queen.svg" 
                bgSrc="/images/journey/Bg/Progress-2.svg"
                ellipse1Src="/images/journey/Ellipse 3873-2.svg"
                ellipse2Src="/images/journey/Ellipse 3872-2.svg"
                size={44}
              />
            </div>
          </div>

          {/* Parrot with trophy decoration */}
          <div className="absolute right-[16px] top-[898px] w-[83px] h-[88px]">
            <Image
              src="/images/journey/unnamed 1.png"
              alt=""
              width={83}
              height={88}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Level 4 */}
          <div className="flex items-start justify-end pr-4">
            {/* Progress Icon - Trophy */}
            <div className="absolute left-[16px] top-[1072px]">
              <ProgressIcon 
                iconSrc="/images/journey/bi_trophy-fill.svg" 
                bgSrc="/images/journey/Bg/Progress-3.svg"
                ellipse1Src="/images/journey/Ellipse 3873-3.svg"
                ellipse2Src="/images/journey/Ellipse 3872-3.svg"
                size={44}
              />
            </div>
            <LevelCard {...levels[3]} isMobile />
          </div>
        </div>
      </div>

      {/* View Full Curriculum Button */}
      <div className="flex justify-center mt-8 lg:mt-12">
        <button className="relative h-[42px] lg:h-[72px] w-[187px] lg:w-[320px]">
          {/* Shadow layer */}
          <div className="absolute top-[calc(50%+3px)] lg:top-[calc(50%+4px)] -translate-y-1/2 left-[6px] lg:left-[10px] w-[170px] lg:w-[292px] h-[38px] lg:h-[64px] bg-[#dcdfea] rounded-[48px]" />
          {/* Main button */}
          <div className="absolute top-[1px] left-[6px] lg:left-[10px] w-[170px] lg:w-[292px] h-[38px] lg:h-[64px] bg-[#eff1f5] rounded-[48px] flex items-center justify-center gap-2">
            <span className="font-bold text-[14px] lg:text-[20px] text-[#270410]">View Full Curriculum</span>
            <div className="bg-[#270410] rounded-[10px] lg:rounded-[14px] w-[15px] lg:w-[26px] h-[15px] lg:h-[26px] flex items-center justify-center">
              <Image
                src="/images/journey/Frame.svg"
                alt=""
                width={26}
                height={26}
                className="w-full h-full"
              />
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}
