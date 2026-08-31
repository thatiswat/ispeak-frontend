import Image from "next/image";

import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    status: "AVAILABLE TODAY",
    title: "Connect",
    description:
      "Speak naturally with someone who speaks another language. Nativee bridges the conversation in real time.",
    features: [
      "Voice Communication",
      "Real-Time Translation",
      "Multiple Languages",
      "Cross-Language Conversations",
    ],
    href: "/launch",
    cta: "Try Connect",
    featured: true,
  },
  {
    status: "AVAILABLE TODAY",
    title: "Converse",
    description:
      "Have natural two-way conversations while each person speaks in their preferred language.",
    features: [
      "Live Conversations",
      "Two-Way Communication",
      "Real-Time Translation",
      "Multiple Languages",
    ],
    href: "/launch",
    cta: "Try Converse",
  },
  {
    status: "AVAILABLE TODAY",
    title: "Chat",
    description:
      "Message across languages while Nativee keeps the conversation understandable for everyone.",
    features: [
      "Multilingual Messaging",
      "Automatic Translation",
      "Original + Translated Messages",
      "Voice Messages",
    ],
    href: "/launch",
    cta: "Try Chat",
  },
  {
    status: "COMING SOON",
    title: "Call",
    description:
      "Talk across languages through voice calls without requiring everyone to speak the same language.",
    features: [
      "Cross-Language Calls",
      "Real-Time Voice",
      "Live Translation",
      "Multilingual Communication",
    ],
    href: "#",
    cta: "Coming Soon",
  },
];

export default function Platform() {
  return (
    <Section
      id="products"
      spacing="compact"
      className="bg-white !py-10 sm:!py-12 lg:!py-13"
    >
      <Container>

        {/* Section heading */}

        <div className="mx-auto max-w-4xl text-center">

          {/* Nativee App Identity */}

          <div className="mb-4 flex justify-center sm:mb-5">
            <div className="overflow-hidden rounded-[17px] shadow-sm ring-1 ring-slate-200 sm:rounded-[19px]">
              <Image
                src="/icon.png"
                alt="Nativee app"
                width={64}
                height={64}
                className="h-16 w-16 sm:h-[68px] sm:w-[68px]"
              />
            </div>
          </div>

          <SectionHeading
            align="center"
            badge="NATIVEE MOBILE"
            title={
              <>
                One app.
                <br />
                Four ways to communicate.
              </>
            }
            description="Connect, converse, chat and call across languages—all within the Nativee experience."
          />

        </div>

        {/* Product cards */}

        <div className="mt-8 grid gap-4 sm:mt-9 sm:gap-5 xl:grid-cols-4">

          {features.map((feature) => (
            <article
              key={feature.title}
              className={`group flex min-h-[390px] flex-col rounded-[22px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:min-h-[408px] sm:rounded-[24px] ${
                feature.featured
                  ? "border-blue-200 bg-blue-50/40"
                  : "border-slate-200 bg-white"
              }`}
            >

              {/* Status */}

              <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#1747FF] sm:text-[10px] sm:tracking-[0.26em]">
                {feature.status}
              </span>

              {/* Title */}

              <h3 className="mt-3 text-[25px] font-black leading-none tracking-[-0.04em] text-slate-950 sm:mt-4 sm:text-[27px]">
                {feature.title}
              </h3>

              {/* Description */}

              <p className="mt-3 min-h-0 text-[13px] leading-6 text-slate-600 sm:mt-4 sm:min-h-[68px] sm:text-[14px]">
                {feature.description}
              </p>

              {/* Divider */}

              <div className="my-3 h-px bg-slate-200 sm:my-4" />

              {/* Features */}

              <ul className="space-y-2 sm:space-y-2.5">
                {feature.features.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[12px] leading-5 text-slate-700 sm:text-[13px]"
                  >
                    <span className="mt-0.5 shrink-0 font-bold text-[#1747FF]">
                      ✓
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}

              <div className="mt-auto pt-4">
                <Button
                  href={feature.href}
                  variant={feature.featured ? "primary" : "secondary"}
                >
                  {feature.cta}
                </Button>
              </div>

            </article>
          ))}

        </div>

      </Container>
    </Section>
  );
}