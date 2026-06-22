"use client";

type Props = {
  sourceLanguage: string;
  targetLanguage: string;
  onSourceChange: (value: string) => void;
  onTargetChange: (value: string) => void;
};

export default function LanguagePicker({
  sourceLanguage,
  targetLanguage,
  onSourceChange,
  onTargetChange
}: Props) {
  return (
    <div className="flex justify-center gap-4 flex-wrap">

      <select
        value={sourceLanguage}
        onChange={(e) =>
          onSourceChange(
            e.target.value
          )
        }
        className="
        bg-slate-950
        border
        border-slate-800
        rounded-xl
        px-5
        py-3
        text-white
        "
      >
        <option value="">
          Select Language
        </option>

        <option value="auto">
          Auto Detect (Beta)
        </option>

        <option value="en">
          English
        </option>

        <option value="hi">
          Hindi
        </option>

        <option value="kn">
          Kannada
        </option>

        <option value="ta">
          Tamil
        </option>

        <option value="te">
          Telugu
        </option>

        <option value="ml">
          Malayalam
        </option>
      </select>

      <select
        value={targetLanguage}
        onChange={(e) =>
          onTargetChange(
            e.target.value
          )
        }
        className="
        bg-slate-950
        border
        border-slate-800
        rounded-xl
        px-5
        py-3
        text-white
        "
      >
        <option value="en">
          English
        </option>

        <option value="hi">
          Hindi
        </option>

        <option value="kn">
          Kannada
        </option>

        <option value="ta">
          Tamil
        </option>

        <option value="te">
          Telugu
        </option>

        <option value="ml">
          Malayalam
        </option>
      </select>

    </div>
  );
}
