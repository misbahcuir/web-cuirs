"use client";
import React, { useState } from "react";

const LogoIcon = () => (
  <img
    src="/favicon-cuirs.svg"
    alt="CUIRS Logo"
    width="24"
    height="24"
    className="w-6 h-6 rounded-full"
  />
);
const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);
const CloseIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
const NavLink = ({ href, children, isActive = false }) => (
  <a
    href={href}
    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
      isActive
        ? "text-[#e63946]"
        : "text-gray-600 dark:text-gray-300 hover:text-[#e63946]"
    }`}
  >
    {children}
  </a>
);
const Button = ({ children, variant = "primary", className = "", onClick }) => {
  const baseClasses =
    "px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:scale-105";
  const variants = {
    primary:
      "bg-gray-900 dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 focus:ring-gray-900 dark:focus:ring-gray-300",
    secondary:
      "bg-white dark:bg-gray-900 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-800 focus:ring-gray-300 dark:focus:ring-gray-600 shadow-sm border border-gray-200 dark:border-gray-700",
    outline:
      "bg-white dark:bg-black text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-900 focus:ring-gray-300 dark:focus:ring-gray-600",
  };
  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
const MobileMenu = ({ isOpen, navItems }) => (
  <div
    className={`
      md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700 shadow-lg
      transition-all duration-300 ease-in-out
      ${
        isOpen
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }
  `}
  >
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {navItems.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-gray-700 dark:text-gray-300 hover:text-[#e63946] hover:bg-gray-50 dark:hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium"
        >
          {item}
        </a>
      ))}
    </div>
    <div className="pt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
      <div className="px-5">
        <Button
          variant="outline"
          className="w-full"
          onClick={() =>
            window.open("https://forms.gle/GsXEBDraQEQ8tRuQA", "_blank")
          }
        >
          Join Us
        </Button>
      </div>
    </div>
  </div>
);

const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink] = useState("Features");
  const navItems = ["Home", "About", "Peoples", "Constitution", "Contact"];
  return (
    <header className="relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <LogoIcon />
            <span className="text-xl font-bold text-[#5b92e5]">CUIRS</span>
          </div>
          <nav className="hidden md:flex items-center space-x-1 bg-gray-100/50 dark:bg-gray-800/50 p-1 rounded-full">
            {navItems.map((item) => (
              <NavLink
                key={item}
                href={`#${item.toLowerCase()}`}
                isActive={activeLink === item}
              >
                {item}
              </NavLink>
            ))}
          </nav>
          <div className="hidden md:block">
            <Button
              variant="outline"
              onClick={() =>
                window.open("https://forms.gle/GsXEBDraQEQ8tRuQA", "_blank")
              }
            >
              Join Us
            </Button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#e63946]"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMenuOpen} navItems={navItems} />
    </header>
  );
};

const Hero = () => (
  <section className="relative z-10 text-center py-16 sm:py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider text-[#e63946] bg-[#e6394724] rounded-full">
        CUIRS
      </span>
      <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
        Chittagong University{" "}
        <span className="text-[#E63946]">International Relations Society</span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
        A student-driven platform fostering research, dialogue, and global
        engagement to shape the leaders of tomorrow.
      </p>
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button
          variant="primary"
          className="w-full sm:w-auto bg-[#e63946] text-white"
        >
          ABOUT CUIRS
        </Button>
        <Button variant="secondary" className="w-full sm:w-auto">
          CONTACT US
        </Button>
      </div>
    </div>
  </section>
);

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden bg-transparent ">
      <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[40rem] h-[40rem] bg-transparent rounded-full blur-3xl" />
      </div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 pointer-events-none">
        <div className="w-[40rem] h-[40rem] bg-transparent rounded-full blur-3xl" />
      </div>
      <HeaderSection />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default HeroSection;
