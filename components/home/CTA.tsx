import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#1747FF] px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl text-center">

        <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
          Speak your language.
          <br />
          Be understood by anyone.
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-blue-100 sm:mt-6 sm:text-lg sm:leading-8">
          Connect, converse and chat across languages with Nativee.
        </p>

        <div className="mx-auto mt-8 flex w-full max-w-sm flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">

          <Link
            href="/launch"
            className="rounded-2xl bg-white px-7 py-3.5 text-[15px] font-semibold text-[#1747FF] transition-transform duration-200 hover:scale-[1.02] sm:px-8 sm:py-4"
          >
            Get Started
          </Link>

          <Link
            href="#products"
            className="rounded-2xl border border-white/30 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white/10 sm:px-8 sm:py-4"
          >
            Explore Nativee
          </Link>

        </div>

      </div>
    </section>
  );
}