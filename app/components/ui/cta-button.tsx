"use client";

import { Button } from "@/components/ui/button";
import { ButtonProps } from "@/components/ui/button";

interface CTAButtonProps extends ButtonProps {
  children: React.ReactNode;
  href?: string;
}

export function CTAButton({
  children,
  className,
  onClick,
  href,
  ...props
}: CTAButtonProps) {
  const handleClick = () => {
    if (href && typeof window !== "undefined") {
      window.open(href, "_blank");
    }
  };

  return (
    <Button
      className={`w-full sm:w-fit bg-gradient-to-r from-[#ED4C84] to-[#E91E63] text-white text-lg px-6 sm:px-8 py-6 sm:py-6 rounded-lg font-medium shadow-0 hover:opacity-90 flex items-center gap-2 ${className}`}
      onClick={onClick || (href ? handleClick : undefined)}
      {...props}
    >
      {children}
      <svg
        width="20"
        height="20"
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-1"
      >
        <path
          d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    </Button>
  );
}
