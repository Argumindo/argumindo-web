"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-[0px_2px_0px_0px_rgba(0,0,0,0.08)] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-[93px] py-3 lg:py-[23px] flex items-center justify-between h-[62px] lg:h-[80px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-[10px] group">
          {/* Logo Icon */}
          <Image
            src="/images/logo-icon.svg"
            alt="Argumindo"
            width={30}
            height={40}
            className="w-[27px] h-[36px] lg:w-[30px] lg:h-[40px] animate-logo-jump"
          />
          {/* Logo Text */}
          <span className="font-bold text-[20px] lg:text-[24px] text-[#ed4c84] leading-[1.4]">
            argumindo
          </span>
        </Link>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center gap-[48px]">
          {/* Login Link */}
          <Link
            href="/login"
            className="font-medium text-[16px] text-[#200e32] tracking-[0.1px] leading-[22px] hover:text-[#ed4c84] transition-colors"
          >
            Login
          </Link>

          {/* Get Started Button */}
          <button className="relative h-[50.4px] w-[168px] cursor-pointer group">
            {/* Bottom shadow layer */}
            <div className="absolute inset-0 top-[5.6px] bg-[#dcdfea] rounded-full" />
            {/* Top button layer */}
            <div className="absolute inset-0 bottom-[5.6px] bg-[#eff1f5] rounded-full flex items-center justify-center gap-[6.72px] hover:bg-[#e5e7ef] transition-colors">
              <span className="font-bold text-[14px] text-[#270410] leading-[16.8px]">
                Get Started
              </span>
              <span className="bg-[#270410] rounded-full p-[2px] flex items-center justify-center">
                <Image
                  src="/images/hero/Frame-1.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="w-[20px] h-[20px]"
                />
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Hamburger Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden w-[24px] h-[24px] flex flex-col items-center justify-center gap-[5px]"
        >
          <span className={`w-[18px] h-[2px] bg-[#200e32] rounded transition-transform ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`w-[18px] h-[2px] bg-[#200e32] rounded transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-[18px] h-[2px] bg-[#200e32] rounded transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 animate-fade-in">
          <div className="flex flex-col gap-4">
            <Link
              href="/login"
              className="font-medium text-[16px] text-[#200e32] py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
            <button className="relative h-[42px] w-full cursor-pointer group">
              {/* Bottom shadow layer */}
              <div className="absolute inset-0 top-[4px] bg-[#dcdfea] rounded-full" />
              {/* Top button layer */}
              <div className="absolute inset-0 bottom-[4px] bg-[#eff1f5] rounded-full flex items-center justify-center gap-[6px]">
                <span className="font-bold text-[14px] text-[#270410]">
                  Get Started
                </span>
                <span className="bg-[#270410] rounded-full p-[2px] flex items-center justify-center">
                  <Image
                    src="/images/hero/Frame-1.svg"
                    alt=""
                    width={18}
                    height={18}
                    className="w-[18px] h-[18px]"
                  />
                </span>
              </div>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
