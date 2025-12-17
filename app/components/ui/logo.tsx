"use client";

import React from "react";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export const Logo = ({ className, width = 180, height = 40 }: LogoProps) => {
  return (
    <div
      className={className}
      style={{ width, height }}
    >
      <span
        className="font-bold text-2xl bg-gradient-to-r from-[#ED4C84] via-[#F06292] to-[#EC407A] bg-clip-text text-transparent"
        style={{ fontSize: height * 0.6 }}
      >
        Argumindo
      </span>
    </div>
  );
};
