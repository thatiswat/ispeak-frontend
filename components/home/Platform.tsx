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
    href: "https://app.nativee.in",
    cta: "Try Connect",
    featured: true,
  },
  {
    status: "AVAILABLE TODAY",
    title: "Converse",
    description:
      "Have natural two-way conversations while each person speaks in the language they are most comfortable with.",
    features: [
      "Live Conversations",
      "Two-Way Communication",
      "Real-Time Translation",
      "Multiple Languages",
    ],
    href: "https://app.nativee.in",
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
    href: "https://app.nativee.in",
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
      className="bg-white !py-12 lg:!py-14"
    >
      <Container>

        {/* Section heading */}

        <div className="mx-auto max-w-4xl text-center">

          {/* Nativee App Identity */}

          <div className="mb-6 flex justify-center">
            <div className="overflow-hidden rounded-[20px] shadow-sm ring-1 ring-slate-200">
              <Image
                src="/nativee-icon.png"
                alt="Nativee app"
                width={72}
                height={72}
                className="h-[72px] w-[72px]"
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
            description={
              "Connect, converse, chat and call across languages—all within the Nativee experience."
            }
          />

        </div>

        {/* Product cards */}

        <div className="mt-10 grid gap-5 xl:grid-cols-4">

          {features.map((feature) => (
            <article
              key={feature.title}
              className={`group flex min-h-[430px] flex-col rounded-[24px] border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                feature.featured
                  ? "border-blue-200 bg-blue-50/40"
                  : "border-slate-200 bg-white"
              }`}
            >

              {/* Status */}

              <span className="text-[10px] font-bold uppercase tracking-[0.26em] text-[#1747FF]">
                {feature.status}
              </span>

              {/* Title */}

              <h3 className="mt-4 text-[27px] font-black leading-none tracking-[-0.04em] text-slate-950">
                {feature.title}
              </h3>

              {/* Description */}

              <p className="mt-4 min-h-[72px] text-[14px] leading-6 text-slate-600">
                {feature.description}
              </p>

              {/* Divider */}

              <div className="my-4 h-px bg-slate-200" />

              {/* Features */}

              <ul className="space-y-2.5">
                {feature.features.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13px] leading-5 text-slate-700"
                  >
                    <span className="mt-0.5 shrink-0 font-bold text-[#1747FF]">
                      ✓
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}

              <div className="mt-auto pt-5">
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