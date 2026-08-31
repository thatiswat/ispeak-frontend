import Image from "next/image";
import Link from "next/link";

export default function Launch() {
  return (
    <main className="flex h-screen flex-col overflow-hidden bg-white text-[#070B17]">

      {/* Header */}

      <header className="shrink-0 px-6 py-6 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link
            href="/"
            aria-label="Nativee"
            className="text-[30px] font-bold tracking-[-0.045em]"
          >
            Nativ<span className="text-[#1747FF]">ee</span>
          </Link>

          <span className="text-sm font-medium text-slate-400">
            Mobile
          </span>
        </div>
      </header>

      {/* Launch */}

      <section className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-3xl text-center">

          <Image
            src="/icon.png"
            alt="Nativee"
            width={96}
            height={96}
            priority
            className="mx-auto h-24 w-24 rounded-[24px]"
          />

          <p className="mt-7 text-[11px] font-bold uppercase tracking-[0.32em] text-[#1747FF]">
            Nativee Mobile
          </p>

          <h1 className="mt-4 text-5xl font-black leading-none tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Coming Soon
          </h1>

          <div className="mx-auto mt-6 h-1 w-10 rounded-full bg-[#1747FF]" />

          <p className="mt-6 text-base font-medium text-slate-500 sm:text-lg">
            Launching 2027
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm font-medium text-slate-400">
            <span>Connect</span>
            <span>Converse</span>
            <span>Chat</span>
            <span>Call</span>
          </div>

        </div>
      </section>

      {/* Footer */}

      <footer className="shrink-0 border-t border-slate-100 px-6 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between text-xs text-slate-400">
          <span>Nativee</span>
          <span>Made in India 🇮🇳</span>
        </div>
      </footer>

    </main>
  );
}