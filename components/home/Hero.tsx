import Button from "../ui/Button";
import Container from "../ui/Container";
import HeroHeading from "../ui/HeroHeading";
import Section from "../ui/Section";

export default function Hero() {
  return (
    <Section
      spacing="hero"
      className="border-b border-slate-200 bg-white !py-20 sm:!py-24 lg:!py-28"
    >
      <Container>

        <HeroHeading
          badge="WE CAN TALK."
          title={
            <>
              Built for every
              <br className="hidden sm:block" />
              {" "}Indian language.
            </>
          }
          description="Nativee helps people speak, understand and connect across languages through voice, conversations, chat and calls."
        />

        <div className="mx-auto mt-9 flex w-full max-w-sm flex-col items-center justify-center gap-3 sm:mt-12 sm:max-w-none sm:flex-row sm:gap-4">
          <Button href="/launch">
            Try Nativee
          </Button>

          <Button
            href="#products"
            variant="secondary"
          >
            Explore Nativee
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500 sm:mt-14 sm:gap-x-10 sm:text-sm">
          <span>Connect</span>
          <span>Converse</span>
          <span>Chat</span>
          <span>Call</span>
        </div>

      </Container>
    </Section>
  );
}