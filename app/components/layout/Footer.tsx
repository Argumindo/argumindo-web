import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative">
      {/* Cloud decoration at top */}
      <div className="relative w-full" style={{ marginBottom: '-70px' }}>
        <Image
          src="/images/footer-clouds.svg"
          alt=""
          width={1440}
          height={224}
          className="w-full h-auto"
        />
      </div>

      {/* Main footer content */}
      <div className="bg-[#fed8e2] px-4 lg:px-[80px] py-[16px] lg:py-[64px]">
        <div className="max-w-[1280px] mx-auto w-full lg:w-[1200px]">
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col gap-6 mb-[32px]">
            {/* Brand column - Mobile */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 group cursor-pointer">
                <Image
                  src="/images/footer/Group 1261161706.svg"
                  alt="Argumindo"
                  width={36}
                  height={48}
                  className="w-[29px] h-[38px] group-hover:animate-sway"
                />
                <span className="font-bold text-[20px] text-[#ed4c84] leading-[1.4]">
                  argumindo
                </span>
              </div>
              <p className="font-outfit text-[14px] text-[#0f172a] leading-[22px]">
                AI-powered debate and communication training for ages 9-15+
              </p>
            </div>

            {/* Mobile: 2x2 grid for links */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4">
              {/* Product column */}
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-[18px] text-[#0f172a]">Product</h4>
                <nav className="flex flex-col">
                  <Link href="#" className="font-outfit text-[14px] text-[#0f172a] leading-[28px] hover:opacity-70 transition-opacity">
                    Curriculum
                  </Link>
                  <Link href="#" className="font-outfit text-[14px] text-[#0f172a] leading-[28px] hover:opacity-70 transition-opacity">
                    Features
                  </Link>
                  <Link href="#" className="font-outfit text-[14px] text-[#0f172a] leading-[28px] hover:opacity-70 transition-opacity">
                    For Schools
                  </Link>
                </nav>
              </div>

              {/* Resources column */}
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-[18px] text-[#0f172a]">Resources</h4>
                <nav className="flex flex-col">
                  <Link href="#" className="font-outfit text-[14px] text-[#0f172a] leading-[28px] hover:opacity-70 transition-opacity">
                    Blog
                  </Link>
                  <Link href="#" className="font-outfit text-[14px] text-[#0f172a] leading-[28px] hover:opacity-70 transition-opacity">
                    FAQ
                  </Link>
                </nav>
              </div>

              {/* Company column */}
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-[18px] text-[#0f172a]">Company</h4>
                <nav className="flex flex-col">
                  <Link href="#" className="font-outfit text-[14px] text-[#0f172a] leading-[28px] hover:opacity-70 transition-opacity">
                    About
                  </Link>
                  <Link href="#" className="font-outfit text-[14px] text-[#0f172a] leading-[28px] hover:opacity-70 transition-opacity">
                    Privacy policy
                  </Link>
                  <Link href="#" className="font-outfit text-[14px] text-[#0f172a] leading-[28px] hover:opacity-70 transition-opacity">
                    Terms of Use
                  </Link>
                </nav>
              </div>

              {/* Contact column */}
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-[18px] text-[#0f172a]">Contact</h4>
                <nav className="flex flex-col">
                  <Link href="mailto:info@argumindo.com" className="flex items-center gap-1 font-outfit text-[14px] text-[#0f172a] leading-[28px] hover:opacity-70 transition-opacity">
                    <Image
                      src="/images/footer/Frame.svg"
                      alt=""
                      width={14}
                      height={14}
                      className="w-[14px] h-[14px]"
                    />
                    info@argumindo.com
                  </Link>
                </nav>
              </div>
            </div>
          </div>

          {/* Desktop Layout - All columns in one row */}
          <div className="hidden lg:flex flex-row gap-[32px] items-start justify-center mb-[48px]">
            {/* Brand column */}
            <div className="w-[360px] shrink-0 flex flex-col gap-4">
              <div className="flex items-center gap-[12px] group cursor-pointer">
                <Image
                  src="/images/footer/Group 1261161706.svg"
                  alt="Argumindo"
                  width={36}
                  height={48}
                  className="w-[36px] h-[48px] group-hover:animate-sway"
                />
                <span className="font-bold text-[28.8px] text-[#ed4c84] leading-[1.4]">
                  argumindo
                </span>
              </div>
              <p className="font-outfit text-[16px] text-[#0f172a] leading-[24px]">
                AI-powered debate and communication<br />
                training for ages 9-15+
              </p>
            </div>

            {/* Product column */}
            <div className="flex-1 flex flex-col gap-4">
              <h4 className="font-bold text-[24px] text-[#0f172a]">Product</h4>
              <nav className="flex flex-col">
                <Link href="#" className="font-outfit text-[16px] text-[#0f172a] leading-[34px] hover:opacity-70 transition-opacity">
                  Curriculum
                </Link>
                <Link href="#" className="font-outfit text-[16px] text-[#0f172a] leading-[34px] hover:opacity-70 transition-opacity">
                  Features
                </Link>
                <Link href="#" className="font-outfit text-[16px] text-[#0f172a] leading-[34px] hover:opacity-70 transition-opacity">
                  For Schools
                </Link>
              </nav>
            </div>

            {/* Resources column */}
            <div className="flex-1 flex flex-col gap-4">
              <h4 className="font-bold text-[24px] text-[#0f172a]">Resources</h4>
              <nav className="flex flex-col">
                <Link href="#" className="font-outfit text-[16px] text-[#0f172a] leading-[34px] hover:opacity-70 transition-opacity">
                  Blog
                </Link>
                <Link href="#" className="font-outfit text-[16px] text-[#0f172a] leading-[34px] hover:opacity-70 transition-opacity">
                  FAQ
                </Link>
              </nav>
            </div>

            {/* Company column */}
            <div className="flex-1 flex flex-col gap-4">
              <h4 className="font-bold text-[24px] text-[#0f172a]">Company</h4>
              <nav className="flex flex-col">
                <Link href="#" className="font-outfit text-[16px] text-[#0f172a] leading-[34px] hover:opacity-70 transition-opacity">
                  About
                </Link>
                <Link href="#" className="font-outfit text-[16px] text-[#0f172a] leading-[34px] hover:opacity-70 transition-opacity">
                  Privacy policy
                </Link>
                <Link href="#" className="font-outfit text-[16px] text-[#0f172a] leading-[34px] hover:opacity-70 transition-opacity">
                  Terms of Use
                </Link>
              </nav>
            </div>

            {/* Contact column */}
            <div className="flex-1 flex flex-col gap-4">
              <h4 className="font-bold text-[24px] text-[#0f172a]">Contact</h4>
              <nav className="flex flex-col">
                <Link href="mailto:info@argumindo.com" className="flex items-center gap-1 font-outfit text-[16px] text-[#0f172a] leading-[34px] hover:opacity-70 transition-opacity">
                  <Image
                    src="/images/footer/Frame.svg"
                    alt=""
                    width={16}
                    height={16}
                  />
                  info@argumindo.com
                </Link>
              </nav>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-[#f4a8bb] pt-4 lg:pt-[33px]">
            <p className="font-outfit text-[14px] lg:text-[16px] text-[#0f172a] text-center leading-[20px] lg:leading-[24px]">
              © 2025 Argumindo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
