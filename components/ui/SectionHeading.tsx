import { ReactNode } from "react";

interface SectionHeadingProps {
  badge?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={
        isCenter
          ? "mx-auto w-full max-w-4xl text-center"
          : "w-full max-w-4xl text-left"
      }
    >
      {badge && (
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#1747FF]">
          {badge}
        </p>
      )}

      <h2
        className={`mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-950 md:text-5xl ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-6 max-w-3xl text-lg leading-8 text-slate-600 ${
            isCenter ? "mx-auto text-center" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}