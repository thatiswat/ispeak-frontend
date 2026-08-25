"use client";

import Link from "next/link";

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
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="relative mx-auto flex h-20 max-w-7xl items-center px-8">

        {/* Logo */}
        <Link
          href="/"
          className="text-[34px] font-black tracking-[-0.04em] text-slate-950"
        >
          Native
          <span className="text-[#1747FF]">e</span>
        </Link>

        {/* Navigation */}
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

        {/* Try Nativee */}
        <div className="ml-auto hidden lg:block">
          <Link
            href="https://app.nativee.in"
            className="rounded-2xl bg-[#1747FF] px-6 py-3 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#0f3ff5]"
          >
            Try Nativee
          </Link>
        </div>

      </div>
    </header>
  );
}