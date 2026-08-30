import Button from "../ui/Button";
import Container from "../ui/Container";
import HeroHeading from "../ui/HeroHeading";
import Section from "../ui/Section";

export default function Hero() {
  return (
    <Section
      spacing="hero"
      className="border-b border-slate-200 bg-white"
    >
      <Container>

        <HeroHeading
          badge="WE CAN TALK."
          title={
            <>
              Built for every
              <br />
              Indian language.
            </>
          }
          description="Nativee helps people speak, understand and connect across languages through voice, conversations, chat and calls."
        />

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="https://app.nativee.in">
            Try Nativee
          </Button>

          <Button
            href="#products"
            variant="secondary"
          >
            Explore Nativee
          </Button>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm font-medium text-slate-500">
          <span>Connect</span>
          <span>Converse</span>
          <span>Chat</span>
          <span>Call</span>
        </div>

      </Container>
    </Section>
  );
}