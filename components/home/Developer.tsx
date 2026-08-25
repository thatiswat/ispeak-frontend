import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Speak",
    description: "Speak naturally in your language.",
  },
  {
    number: "02",
    title: "Nativee connects",
    description: "Nativee bridges the language between you.",
  },
  {
    number: "03",
    title: "Understand",
    description: "The other person hears you in their language.",
  },
];

export default function Developer() {
  return (
    <Section spacing="default" className="bg-white">
      <Container>
        <div className="grid items-center gap-24 lg:grid-cols-2">

          {/* Left */}

          <div>
            <SectionHeading
              badge="HOW NATIVEE WORKS"
              title={
                <>
                  Speak freely.
                  <br />
                  Understand everyone.
                </>
              }
              description="Nativee removes language barriers from everyday communication."
            />

            <div className="mt-12 space-y-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-5"
                >
                  <span className="pt-1 text-sm font-semibold text-[#1747FF]">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-lg font-bold text-slate-950">
                      {step.title}
                    </h3>

                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}

          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-50 shadow-xl">
            <div className="border-b border-slate-200 px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                NATIVEE
              </p>
            </div>

            <div className="p-8">
              <div className="flex flex-col items-center gap-5">

                <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    YOU
                  </p>

                  <p className="mt-3 text-2xl font-bold text-slate-950">
                    Hindi
                  </p>
                </div>

                <div className="text-xl text-[#1747FF]">
                  ↓
                </div>

                <div className="w-full rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1747FF]">
                    NATIVEE
                  </p>

                  <p className="mt-3 text-xl font-bold text-slate-950">
                    Connects the languages
                  </p>
                </div>

                <div className="text-xl text-[#1747FF]">
                  ↓
                </div>

                <div className="w-full rounded-2xl border border-slate-200 bg-white p-6 text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                    THEM
                  </p>

                  <p className="mt-3 text-2xl font-bold text-slate-950">
                    Tamil
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </Container>
    </Section>
  );
}