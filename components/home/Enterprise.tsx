import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const visionPoints = [
  {
    number: "01",
    title: "People",
    description:
      "Speak naturally with anyone, even without sharing the same language.",
  },
  {
    number: "02",
    title: "Businesses",
    description:
      "Reach customers across languages without language becoming a barrier.",
  },
  {
    number: "03",
    title: "Communities",
    description:
      "Bring people together across India's languages and cultures.",
  },
  {
    number: "04",
    title: "Every connection",
    description:
      "Make language invisible wherever people communicate and connect.",
  },
];

export default function Enterprise() {
  return (
    <Section
      spacing="default"
      className="bg-slate-50 !py-12 sm:!py-14 lg:!py-16"
    >
      <Container>

        {/* Vision */}

        <div className="mx-auto max-w-4xl text-center">
          <SectionHeading
            align="center"
            badge="OUR VISION"
            title={
              <>
                Language should never decide
                <br className="hidden sm:block" />
                {" "}who you can talk to.
              </>
            }
            description="Nativee is building a world where people communicate naturally across languages starting with India and extending everywhere."
          />
        </div>

        {/* Vision principles */}

        <div className="relative mt-8 sm:mt-10">

          {/* Desktop connecting line */}

          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[57px] hidden h-px bg-slate-200 lg:block"
          />

          <div className="relative grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">

            {visionPoints.map((item) => (
              <article
                key={item.number}
                className="
                  group
                  relative
                  flex
                  min-h-[200px]
                  flex-col
                  rounded-[22px]
                  border
                  border-slate-200
                  bg-white
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-200
                  hover:shadow-[0_20px_45px_-28px_rgba(23,71,255,0.35)]
                  sm:min-h-[215px]
                  sm:rounded-[28px]
                  sm:p-7
                "
              >

                {/* Number */}

                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold tracking-[0.25em] text-[#1747FF]">
                    {item.number}
                  </span>

                  <span className="h-2 w-2 rounded-full bg-slate-200 transition-colors duration-300 group-hover:bg-[#1747FF]" />
                </div>

                {/* Divider */}

                <div className="mt-5 h-px bg-slate-100 sm:mt-6" />

                {/* Content */}

                <div className="mt-5 sm:mt-6">
                  <h3 className="text-xl font-bold tracking-[-0.025em] text-slate-950 sm:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 text-[13px] leading-6 text-slate-600 sm:mt-3 sm:text-sm sm:leading-7">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent */}

                <div className="mt-auto pt-4 sm:pt-5">
                  <div className="h-1 w-8 rounded-full bg-slate-200 transition-all duration-300 group-hover:w-12 group-hover:bg-[#1747FF]" />
                </div>

              </article>
            ))}

          </div>
        </div>

        {/* Closing statement */}

        <div className="mx-auto mt-10 max-w-4xl text-center sm:mt-12">

          <div className="mx-auto mb-5 h-px w-10 bg-[#1747FF] sm:mb-6 sm:w-12" />

          <p className="text-xl font-semibold leading-[1.45] tracking-[-0.025em] text-slate-900 sm:text-2xl md:text-3xl">
            We believe communication should feel natural,
            <br className="hidden md:block" />
            no matter what language you speak.
          </p>

          <p className="mt-3 text-xs font-medium text-slate-500 sm:mt-4 sm:text-sm">
            That is what Nativee is building.
          </p>

        </div>

      </Container>
    </Section>
  );
}