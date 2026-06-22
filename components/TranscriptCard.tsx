type Props = {
  title: string;
  content: string;
};

export default function TranscriptCard({
  title,
  content,
}: Props) {
  return (
    <div
      className="
      bg-slate-950/60
      border
      border-slate-800
      rounded-[28px]
      p-6
      min-h-[180px]
      transition-all
      hover:border-indigo-500/30
      "
    >

      <h2
        className="
        text-xs
        tracking-[0.25em]
        uppercase
        text-slate-500
        font-medium
        "
      >
        {title}
      </h2>

      <p className="mt-6 text-lg text-white">
        {content}
      </p>

    </div>
  );
}