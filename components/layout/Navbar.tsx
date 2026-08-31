"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";

const links = [
  {
    name: "Products",
    href: "#products",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "mailto:support@nativee.in",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">

      {/* Main Navbar */}

      <div className="relative mx-auto flex h-20 max-w-7xl items-center px-5 sm:px-8">

        {/* Logo */}

        <Link
          href="/"
          aria-label="Nativee home"
          className="shrink-0"
          onClick={() => setOpen(false)}
        >
          <Logo
            className="text-[30px] sm:text-[34px]"
            variant="light"
          />
        </Link>

        {/* Desktop Navigation */}

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 lg:flex">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-[15px] font-medium text-slate-600 transition-colors hover:text-slate-950"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}

        <div className="ml-auto hidden lg:block">
          <Link
            href="/launch"
            className="rounded-2xl bg-[#1747FF] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#0f3ff5]"
          >
            Try Nativee
          </Link>
        </div>

        {/* Mobile Menu Button */}

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="ml-auto flex h-10 w-10 items-center justify-center rounded-xl text-slate-900 transition-colors hover:bg-slate-100 lg:hidden"
        >
          <span className="relative block h-5 w-5">

            <span
              className={`absolute left-0 top-[3px] h-[2px] w-5 bg-current transition-all duration-200 ${
                open ? "top-[9px] rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[9px] h-[2px] w-5 bg-current transition-all duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[15px] h-[2px] w-5 bg-current transition-all duration-200 ${
                open ? "top-[9px] -rotate-45" : ""
              }`}
            />

          </span>
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`border-t border-slate-200 bg-white lg:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        <nav className="px-5 py-5 sm:px-8">

          <div className="flex flex-col">

            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-slate-100 py-4 text-base font-medium text-slate-700 transition-colors hover:text-slate-950"
              >
                {item.name}
              </Link>
            ))}

          </div>

          <Link
            href="/launch"
            onClick={() => setOpen(false)}
            className="mt-5 flex items-center justify-center rounded-2xl bg-[#1747FF] px-6 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#0f3ff5]"
          >
            Try Nativee
          </Link>

        </nav>
      </div>

    </header>
  );
}