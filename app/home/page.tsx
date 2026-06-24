import Link from "next/link";
import Logo from "@/components/Logo";

const modes = [
  {
    title: "Connect",
    desc: "Speak once. Hear translation instantly.",
    href: "/connect",
  },
  {
    title: "Converse",
    desc: "Live two-way conversation.",
    href: "/converse",
  },
  {
    title: "Call",
    desc: "Real-time translated calls.",
    soon: true,
  },
  {
    title: "Chat",
    desc: "Cross-language messaging.",
    soon: true,
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F8F9FC]">
      <div className="absolute top-8 left-8">
        <Logo className="text-3xl" />
      </div>

      <div className="flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-5xl">

          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold tracking-tight text-[#060814]">
              Choose Mode
            </h1>

            <p className="mt-3 text-lg text-zinc-500">
              How would you like to communicate?
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {modes.map((mode) => {
              const card = (
                <div
                  className={`
                    rounded-[32px]
                    border border-zinc-200
                    bg-white
                    p-8
                    transition-all
                    hover:-translate-y-1
                    hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                    ${mode.soon ? "opacity-60" : ""}
                  `}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-3xl font-semibold">
                        {mode.title}
                      </h2>

                      <p className="mt-3 text-zinc-500">
                        {mode.desc}
                      </p>
                    </div>

                    {mode.soon ? (
                      <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs">
                        Soon
                      </span>
                    ) : (
                      <span className="text-[#2D52FF] text-2xl">
                        →
                      </span>
                    )}
                  </div>
                </div>
              );

              return mode.href ? (
                <Link key={mode.title} href={mode.href}>
                  {card}
                </Link>
              ) : (
                <div key={mode.title}>{card}</div>
              );
            })}
          </div>

        </div>
      </div>
    </main>
  );
}