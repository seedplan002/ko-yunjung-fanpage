"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#home", label: "홈" },
  { href: "#about", label: "프로필" },
  { href: "#filmography", label: "필모그래피" },
  { href: "#gallery", label: "갤러리" },
  { href: "#awards", label: "수상내역" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#home" className="gradient-text text-xl font-bold tracking-wider">
          KO YUN-JUNG
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-widest text-[#f5f0eb]/60 uppercase transition-colors duration-300 hover:text-[#c9a87c]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴 열기"
        >
          <span
            className={`block h-0.5 w-6 bg-[#c9a87c] transition-transform duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#c9a87c] transition-opacity duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#c9a87c] transition-transform duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`glass absolute left-0 right-0 top-full overflow-hidden transition-all duration-500 md:hidden ${
          mobileOpen ? "max-h-80 py-6" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm tracking-widest text-[#f5f0eb]/60 uppercase transition-colors duration-300 hover:text-[#c9a87c]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
