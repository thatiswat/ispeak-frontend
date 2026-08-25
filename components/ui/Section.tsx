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
    hero: "py-16 lg:py-20",
    default: "py-20 lg:py-24",
    compact: "py-16 lg:py-20",
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