"use client";

import Link from "next/link";
import { useEffect } from "react";
import gsap from "gsap";

export default function Navbar() {
  useEffect(() => {
    gsap.from(".nav-item", {
      y: -20,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <nav className="py-6 px-8 flex justify-between items-center">
      <div className="text-3xl font-bold text-lightSeafoam">DeepSea</div>
      <ul className="flex space-x-8 text-lg font-semibold">
        <li className="nav-item">
          <Link href="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link href="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
