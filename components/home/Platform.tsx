import Button from "../ui/Button";
import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    status: "Available Today",
    title: "Connect",
    description:
      "Connect with people across languages and communicate naturally without sharing the same language.",
    features: [
      "Multilingual Communication",
      "Voice",
      "Real-Time Translation",
      "Cross-Language Conversations",
    ],
    href: "https://app.nativee.in",
    cta: "Get Started",
    featured: true,
  },
  {
    status: "Available Today",
    title: "Converse",
    description:
      "Have natural conversations across languages with Nativee bridging the communication gap in real time.",
    features: [
      "Live Conversations",
      "Multiple Languages",
      "Voice Communication",
      "Real-Time Translation",
    ],
    href: "https://app.nativee.in",
    cta: "Get Started",
  },
  {
    status: "Available Today",
    title: "Chat",
    description:
      "Message naturally across languages while Nativee helps everyone understand the conversation.",
    features: [
      "Multilingual Messaging",
      "Real-Time Translation",
      "Group Conversations",
      "Cross-Language Chat",
    ],
    href: "https://app.nativee.in",
    cta: "Get Started",
  },
  {
    status: "Coming Soon",
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
      spacing="default"
      className="bg-white"
    >
      <Container>
        <SectionHeading
          align="center"
          badge="NATIVEE MOBILE"
          title={
            <>
              One app.
              <br />
              Communication without barriers.
            </>
          }
          description="Nativee brings voice, conversations, chat and calls together in one multilingual communication experience."
        />

        <div className="mt-16 grid gap-8 xl:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className={`group flex h-full flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                feature.featured
                  ? "border-blue-200 bg-blue-50/40"
                  : "border-slate-200 bg-white"
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">
                {feature.status}
              </span>

              <h3 className="mt-6 text-3xl font-black text-slate-950">
                {feature.title}
              </h3>

              <p className="mt-5 flex-1 text-base leading-8 text-slate-600">
                {feature.description}
              </p>

              <div className="my-8 h-px bg-slate-200" />

              <ul className="space-y-4">
                {feature.features.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-slate-700"
                  >
                    <span className="text-blue-600">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
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