"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps extends React.ComponentProps<typeof Image> {
  className?: string
  style?: React.CSSProperties
}

export const OptimizedImage = ({
  className,
  style,
  ...props
}: OptimizedImageProps) => {
  return (
    <Image
      className={cn("", className)}
      style={style}
      {...props}
    />
  )
} 