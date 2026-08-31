import Link from "next/link";
import Logo from "@/components/ui/Logo";

const productLinks = [
  {
    name: "Connect",
    href: "/launch",
  },
  {
    name: "Converse",
    href: "/launch",
  },
  {
    name: "Chat",
    href: "/launch",
  },
  {
    name: "Call",
    href: "#",
  },
];

const companyLinks = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Contact",
    href: "mailto:support@nativee.in",
  },
];

const exploreLinks = [
  {
    name: "Try Nativee",
    href: "/launch",
  },
  {
    name: "Products",
    href: "#products",
  },
  {
    name: "Status",
    href: "https://status.nativee.in",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B17] text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:py-24">

        {/* Top */}

        <div className="grid gap-12 sm:gap-16 lg:grid-cols-12 lg:gap-20">

          {/* Brand */}

          <div className="lg:col-span-5">

            <Link
              href="/"
              aria-label="Nativee home"
              className="inline-block"
            >
              <Logo
                className="text-[32px] sm:text-4xl"
                variant="dark"
              />
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400 sm:mt-8 sm:text-lg sm:leading-8">
              The communication layer for a multilingual world.
              Nativee connects people across languages through
              voice, conversations, calls and chat.
            </p>

            <div className="mt-7 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">

              {["Connect", "Converse", "Chat", "Call"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-slate-300 sm:px-4 sm:py-2 sm:text-sm"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

          {/* Navigation */}

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-12 lg:col-span-7">

            <FooterColumn
              title="Products"
              links={productLinks}
            />

            <FooterColumn
              title="Company"
              links={companyLinks}
            />

            <FooterColumn
              title="Explore"
              links={exploreLinks}
            />

          </div>

        </div>

        {/* Divider */}

        <div className="my-10 h-px bg-white/10 sm:my-14 lg:my-16" />

        {/* Bottom */}

        <div className="flex flex-col gap-5 text-xs text-slate-500 sm:text-sm md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 Nativee. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-8">

            <Link
              href="#"
              className="transition hover:text-white"
            >
              Privacy
            </Link>

            <Link
              href="#"
              className="transition hover:text-white"
            >
              Terms
            </Link>

            <Link
              href="https://status.nativee.in"
              className="transition hover:text-white"
            >
              Status
            </Link>

            <span className="hidden text-slate-700 sm:inline">
              |
            </span>

            <span className="text-slate-400">
              Made in India 🇮🇳
            </span>

          </div>

        </div>

      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}) {
  return (
    <div>

      <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500 sm:text-sm">
        {title}
      </h3>

      <ul className="mt-5 space-y-4 sm:mt-8 sm:space-y-5">

        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white sm:text-base"
            >
              {link.name}
            </Link>
          </li>
        ))}

      </ul>

    </div>
  );
}