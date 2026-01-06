import Image from "next/image";

export function CTA() {
  return (
    <section className="relative bg-white pt-[50px] lg:pt-[120px] pb-[100px] lg:pb-[200px] px-4 lg:px-[80px] overflow-hidden">
      {/* Decorative clouds */}
      <div className="absolute left-[10px] lg:left-[52px] top-[57px] lg:top-[103px] animate-float-slow">
        <Image
          src="/images/cta/XMLID_53_.svg"
          alt=""
          width={137}
          height={78}
          className="w-[77px] lg:w-[137px] h-[44px] lg:h-[78px]"
        />
      </div>
      <div className="absolute right-[10px] lg:right-[20px] top-[74px] lg:top-[59px] animate-float">
        <Image
          src="/images/cta/XMLID_51_.svg"
          alt=""
          width={100}
          height={44}
          className="w-[62px] lg:w-[100px] h-[27px] lg:h-[44px]"
        />
      </div>

      {/* Content container */}
      <div className="relative max-w-[896px] mx-auto px-0 lg:px-8 text-center">
        {/* Heading */}
        <div className="mb-4">
          <h2 className="font-bold text-[24px] lg:text-[48px] text-[#1d1f20] leading-[1.3] lg:leading-normal">
            Ready to Build Powerful<br />
            Communication Skills?
          </h2>
        </div>

        {/* Subtitle */}
        <div className="max-w-[370px] lg:max-w-[672px] mx-auto mb-[48px] lg:mb-[66px]">
          <p className="font-outfit text-[16px] lg:text-[20px] text-[#0e101b] leading-[24px] lg:leading-[34px]">
            Join thousands of students learning to think critically, speak<br className="hidden lg:block" />
            confidently, and lead with empathy.
          </p>
        </div>

        {/* Buttons */}
        <div className="relative flex flex-row gap-4 lg:gap-5 items-center justify-center">
          {/* Parrot decoration */}
          <div className="absolute left-[calc(50%-170px)] top-[-50px] hidden lg:block animate-hop">
            <Image
              src="/images/cta/Group 50.svg"
              alt=""
              width={44}
              height={59}
            />
          </div>

          {/* Parrot decoration - Mobile */}
          <div className="absolute left-[calc(50%-85px)] top-[-45px] lg:hidden block animate-hop">
            <Image
              src="/images/cta/Group 50.svg"
              alt=""
              width={34}
              height={46}
              className="w-[34px] h-[46px]"
            />
          </div>

          {/* Start Free Trial Button */}
          <button className="relative h-[42px] lg:h-[72px] w-[140px] lg:w-[240px] cursor-pointer group animate-pulse-soft">
            {/* Shadow layer */}
            <div className="absolute left-0 top-[calc(50%+3px)] lg:top-[calc(50%+4px)] -translate-y-1/2 w-[140px] lg:w-[240px] h-[37px] lg:h-[64px] bg-[#e89ab0] rounded-[46px]" />
            {/* Main button */}
            <div className="absolute left-0 top-[1px] w-[140px] lg:w-[240px] h-[37px] lg:h-[64px] bg-[#fcaec4] rounded-[46px] flex items-center justify-center gap-[6px] lg:gap-[9.6px] group-hover:bg-[#f9a0b8] transition-colors">
              <span className="font-bold text-[14px] lg:text-[20px] text-[#270410] leading-[16px] lg:leading-[24px]">
                Start Free Trial
              </span>
              <div className="bg-[#270410] rounded-[10px] lg:rounded-[15.6px] p-[2px]">
                <Image
                  src="/images/cta/Frame.svg"
                  alt=""
                  width={29}
                  height={29}
                  className="w-[16px] lg:w-[29px] h-[16px] lg:h-[29px]"
                />
              </div>
            </div>
          </button>

          {/* Watch Demo Button */}
          <button className="relative h-[42px] lg:h-[72px] w-[140px] lg:w-[224px] cursor-pointer group">
            {/* Shadow layer */}
            <div className="absolute left-0 top-[calc(50%+3px)] lg:top-[calc(50%+4px)] -translate-y-1/2 w-[140px] lg:w-[224px] h-[37px] lg:h-[64px] bg-[#dcdfea] rounded-[48px]" />
            {/* Main button */}
            <div className="absolute left-0 top-[1px] w-[140px] lg:w-[224px] h-[37px] lg:h-[64px] bg-[#eff1f5] rounded-[48px] flex items-center justify-center gap-[6px] lg:gap-[9.6px] group-hover:bg-[#e8eaef] transition-colors">
              <span className="font-bold text-[14px] lg:text-[20px] text-[#270410] leading-[16px] lg:leading-[24px]">
                Watch Demo
              </span>
              <Image
                src="/images/cta/Frame-1.svg"
                alt=""
                width={29}
                height={29}
                className="w-[16px] lg:w-[29px] h-[16px] lg:h-[29px]"
              />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
