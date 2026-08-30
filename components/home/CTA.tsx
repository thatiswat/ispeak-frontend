import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-[#1747FF] py-24">
      <div className="mx-auto max-w-4xl px-8 text-center">

        <h2 className="text-5xl font-extrabold leading-[1.08] tracking-[-0.035em] text-white md:text-6xl">
          Speak your language.
          <br />
          Be understood by anyone.
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-lg font-normal leading-8 text-blue-100">
          Connect, converse and chat across languages with Nativee.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="https://app.nativee.in"
            className="rounded-2xl bg-white px-8 py-4 text-[15px] font-semibold text-[#1747FF] transition-transform duration-200 hover:scale-[1.02]"
          >
            Get Started
          </Link>

          <Link
            href="#products"
            className="rounded-2xl border border-white/30 px-8 py-4 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-white/10"
          >
            Explore Nativee
          </Link>
        </div>

      </div>
    </section>
  );
}