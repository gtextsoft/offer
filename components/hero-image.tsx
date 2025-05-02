"use client"

import Image from "next/image"

export function HeroImage() {
  return (
    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] mt-6 md:mt-0 overflow-hidden rounded-lg shadow-lg">
      <Image
        src="/images/hero-background.jpg"
        alt="People supporting each other"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover hover:scale-105 transition-transform duration-500"
        onError={(e) => {
          // Fallback to smaller image if the large one fails
          const target = e.target as HTMLImageElement;
          target.src = "/images/hero-background1.png";
        }}
        loading="eager"
      />
    </div>
  )
} 