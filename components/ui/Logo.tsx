type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export default function Logo({
  className = "",
  variant = "light",
}: LogoProps) {
  return (
    <span
      className={`
        inline-block
        font-[family-name:var(--font-poppins)]
        font-bold
        leading-none
        tracking-[-0.02em]
        whitespace-nowrap
        select-none
        ${className}
      `}
      aria-label="Nativee"
    >
      <span
        className={
          variant === "dark"
            ? "text-white"
            : "text-[var(--nativee-dark)]"
        }
      >
        Nativ
      </span>

      <span className="text-[var(--nativee-blue)]">
        ee
      </span>
    </span>
  );
}