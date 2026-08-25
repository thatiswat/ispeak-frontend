import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const visionPoints = [
  {
    number: "01",
    title: "People",
    description:
      "Speak naturally with anyone, even when you don't share the same language.",
  },
  {
    number: "02",
    title: "Businesses",
    description:
      "Reach and serve customers across languages without making language a barrier.",
  },
  {
    number: "03",
    title: "Communities",
    description:
      "Bring people together across India's many languages and cultures.",
  },
  {
    number: "04",
    title: "Every connection",
    description:
      "Make language invisible wherever people communicate, connect, and understand.",
  },
];

export default function Enterprise() {
  return (
    <Section spacing="default" className="bg-slate-50">
      <Container>

        {/* Vision */}

        <div className="mx-auto max-w-4xl text-center">

          <SectionHeading
            align="center"
            badge="OUR VISION"
            title={
              <>
                Language should never decide
                <br />
                who you can talk to.
              </>
            }
            description="Nativee is building a world where people can communicate naturally across languages—starting with India and extending everywhere."
          />

        </div>

        {/* Vision principles */}

        <div className="relative mt-16">

          {/* Connecting line */}

          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[57px] hidden h-px bg-slate-200 lg:block"
          />

          <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {visionPoints.map((item) => (
              <article
                key={item.number}
                className="group relative flex min-h-[270px] flex-col rounded-[28px] border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_45px_-28px_rgba(23,71,255,0.35)]"
              >

                {/* Number */}

                <div className="flex items-center justify-between">

                  <span className="text-xs font-bold tracking-[0.25em] text-[#1747FF]">
                    {item.number}
                  </span>

                  <span className="flex h-2 w-2 rounded-full bg-slate-200 transition-colors duration-300 group-hover:bg-[#1747FF]" />

                </div>

                {/* Divider */}

                <div className="mt-7 h-px bg-slate-100" />

                {/* Content */}

                <div className="mt-7">

                  <h3 className="text-2xl font-bold tracking-[-0.025em] text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                </div>

                {/* Bottom accent */}

                <div className="mt-auto pt-8">

                  <div className="h-1 w-8 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-12 group-hover:bg-[#1747FF]" />

                </div>

              </article>
            ))}

          </div>
        </div>

        {/* Closing statement */}

        <div className="mx-auto mt-20 max-w-4xl text-center">

          <div className="mx-auto mb-8 h-px w-12 bg-[#1747FF]" />

          <p className="text-2xl font-semibold leading-relaxed tracking-[-0.025em] text-slate-900 md:text-3xl">
            We believe communication should feel natural,
            <br className="hidden md:block" />
            no matter what language you speak.
          </p>

          <p className="mt-5 text-sm font-medium text-slate-500">
            That is what Nativee is building.
          </p>

        </div>

      </Container>
    </Section>
  );
}