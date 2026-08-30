import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  spacing?: "hero" | "default" | "compact";
  id?: string;
}

export default function Section({
  children,
  className = "",
  spacing = "default",
  id,
}: SectionProps) {
  const spacingClass = {
    hero: "py-28 lg:py-32",
    default: "py-17 lg:py-21",
    compact: "py-12 lg:py-15",
  };

  return (
    <section
      id={id}
      className={`${spacingClass[spacing]} ${className}`}
    >
      {children}
    </section>
  );
}