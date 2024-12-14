"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function HeroSection() {
  const heroText = useRef(null);

  useEffect(() => {
    gsap.from(heroText.current, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <section
      className="h-screen flex flex-col items-center justify-center text-center 
        bg-deep-gradient relative overflow-hidden"
    >
      <h1
        ref={heroText}
        className="text-6xl font-bold text-lightSeafoam leading-tight"
      >
        Explore the <span className="text-waveGreen">Deep Sea</span>
      </h1>
      <p className="mt-4 text-xl text-coralRed">
        Discover hidden treasures beneath the ocean’s surface.
      </p>
      <a
        href="#about"
        className="mt-8 px-8 py-4 bg-waveGreen text-deepSeaBlue font-bold 
        rounded-lg text-xl hover:bg-coralRed transition"
      >
        Dive In
      </a>
      {/* Ocean Effect */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-deepSeaBlue to-transparent"></div>
    </section>
  );
}
