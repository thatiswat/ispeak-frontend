import Image from "next/image";

import Container from "../ui/Container";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "You speak",
    description: "Speak naturally in your language.",
  },
  {
    number: "02",
    title: "Nativee connects",
    description: "Your message crosses the language barrier.",
  },
  {
    number: "03",
    title: "They understand",
    description: "They hear it in their language.",
  },
];

export default function Developer() {
  return (
    <Section
      spacing="compact"
      className="bg-white !py-12 lg:!py-14"
    >
      <Container>

        {/* =========================================================
            SECTION HEADING
        ========================================================= */}

        <div className="mx-auto max-w-4xl text-center">

          <SectionHeading
            align="center"
            badge="HOW NATIVEE WORKS"
            title={
              <>
                You speak. Nativee connects.
              </>
            }
            description="Speak naturally. Nativee bridges the language gap."
          />

        </div>

        {/* =========================================================
            PRODUCT SHOWCASE
        ========================================================= */}

        <div
          className="
            relative
            mx-auto
            mt-8
            h-[540px]
            max-w-5xl
            lg:mt-10
          "
        >

          {/* =======================================================
              SOFT GLOW
          ======================================================= */}

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[440px]
              w-[280px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-blue-50/70
              blur-3xl
            "
          />

          {/* =======================================================
              DESKTOP STEP 01
          ======================================================= */}

          <div
            className="
              absolute
              left-0
              top-[90px]
              z-30
              hidden
              w-[210px]
              rounded-[20px]
              border
              border-slate-200
              bg-white
              p-4
              shadow-[0_18px_45px_-24px_rgba(15,23,42,0.32)]
              lg:block
              xl:left-2
            "
          >

            <div className="flex items-start gap-3">

              <span
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#1747FF]
                  text-[10px]
                  font-bold
                  text-white
                "
              >
                01
              </span>

              <div className="min-w-0">

                <h3
                  className="
                    text-sm
                    font-bold
                    leading-5
                    text-slate-950
                  "
                >
                  You speak
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-slate-500
                  "
                >
                  Speak naturally in your language.
                </p>

              </div>

            </div>

            {/* Connector */}

            <div
              aria-hidden="true"
              className="
                absolute
                right-[-52px]
                top-1/2
                hidden
                h-px
                w-[52px]
                -translate-y-1/2
                bg-slate-200
                xl:block
              "
            />

          </div>

          {/* =======================================================
              DESKTOP STEP 02
          ======================================================= */}

          <div
            className="
              absolute
              right-0
              top-[225px]
              z-30
              hidden
              w-[210px]
              rounded-[20px]
              border
              border-slate-200
              bg-white
              p-4
              shadow-[0_18px_45px_-24px_rgba(15,23,42,0.32)]
              lg:block
              xl:right-2
            "
          >

            <div className="flex items-start gap-3">

              <span
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#1747FF]
                  text-[10px]
                  font-bold
                  text-white
                "
              >
                02
              </span>

              <div className="min-w-0">

                <h3
                  className="
                    text-sm
                    font-bold
                    leading-5
                    text-slate-950
                  "
                >
                  Nativee connects
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-slate-500
                  "
                >
                  Your message crosses the language barrier.
                </p>

              </div>

            </div>

            {/* Connector */}

            <div
              aria-hidden="true"
              className="
                absolute
                left-[-52px]
                top-1/2
                hidden
                h-px
                w-[52px]
                -translate-y-1/2
                bg-slate-200
                xl:block
              "
            />

          </div>

          {/* =======================================================
              DESKTOP STEP 03
          ======================================================= */}

          <div
            className="
              absolute
              bottom-[42px]
              left-2
              z-30
              hidden
              w-[210px]
              rounded-[20px]
              border
              border-slate-200
              bg-white
              p-4
              shadow-[0_18px_45px_-24px_rgba(15,23,42,0.32)]
              lg:block
              xl:left-8
            "
          >

            <div className="flex items-start gap-3">

              <span
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#1747FF]
                  text-[10px]
                  font-bold
                  text-white
                "
              >
                03
              </span>

              <div className="min-w-0">

                <h3
                  className="
                    text-sm
                    font-bold
                    leading-5
                    text-slate-950
                  "
                >
                  They understand
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    leading-5
                    text-slate-500
                  "
                >
                  They hear it in their language.
                </p>

              </div>

            </div>

            {/* Connector */}

            <div
              aria-hidden="true"
              className="
                absolute
                right-[-52px]
                top-1/2
                hidden
                h-px
                w-[52px]
                -translate-y-1/2
                bg-slate-200
                xl:block
              "
            />

          </div>

          {/* =======================================================
              MOBILE EXPLANATIONS
          ======================================================= */}

          <div
            className="
              mb-5
              grid
              gap-3
              sm:grid-cols-3
              lg:hidden
            "
          >

            {steps.map((step) => (
              <div
                key={step.number}
                className="
                  rounded-[18px]
                  border
                  border-slate-200
                  bg-white
                  p-4
                  shadow-[0_10px_30px_-22px_rgba(15,23,42,0.35)]
                "
              >

                <div className="flex items-start gap-3">

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#1747FF]
                      text-[10px]
                      font-bold
                      text-white
                    "
                  >
                    {step.number}
                  </span>

                  <div className="min-w-0">

                    <h3
                      className="
                        text-sm
                        font-bold
                        leading-5
                        text-slate-950
                      "
                    >
                      {step.title}
                    </h3>

                    <p
                      className="
                        mt-1
                        text-xs
                        leading-5
                        text-slate-500
                      "
                    >
                      {step.description}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

          {/* =======================================================
              PHONE
          ======================================================= */}

          <div
            className="
              absolute
              left-1/2
              top-0
              z-20
              w-[250px]
              -translate-x-1/2
              sm:w-[260px]
            "
          >

            {/* Phone shadow */}

            <div
              aria-hidden="true"
              className="
                absolute
                bottom-[-18px]
                left-1/2
                h-8
                w-40
                -translate-x-1/2
                rounded-full
                bg-slate-900/10
                blur-2xl
              "
            />

            {/* Phone outer body */}

            <div
              className="
                relative
                rounded-[36px]
                bg-slate-950
                p-[5px]
                shadow-[0_28px_65px_-30px_rgba(15,23,42,0.55)]
              "
            >

              {/* Side button */}

              <div
                aria-hidden="true"
                className="
                  absolute
                  right-[-3px]
                  top-[92px]
                  h-12
                  w-[3px]
                  rounded-r-full
                  bg-slate-700
                "
              />

              {/* Phone screen */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[31px]
                  bg-[#F7F9FC]
                "
              >

                {/* Dynamic Island */}

                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-1/2
                    top-2.5
                    z-40
                    h-[18px]
                    w-[64px]
                    -translate-x-1/2
                    rounded-full
                    bg-slate-950
                  "
                />

                {/* =================================================
                    PHONE HEADER
                ================================================= */}

                <div
                  className="
                    border-b
                    border-slate-200
                    bg-white
                    px-4
                    pb-3
                    pt-8
                  "
                >

                  <div className="flex items-center justify-between">

                    {/* Nativee app identity + Connect */}

                    <div className="flex min-w-0 items-center gap-2.5">

                      {/* Nativee App Icon */}

                      <Image
                        src="/nativee-icon.png"
                        alt="Nativee"
                        width={30}
                        height={30}
                        className="
                          h-[30px]
                          w-[30px]
                          shrink-0
                          rounded-[9px]
                        "
                      />

                      <div className="min-w-0">

                        <h3
                          className="
                            text-[20px]
                            font-black
                            leading-none
                            tracking-[-0.04em]
                            text-slate-950
                          "
                        >
                          Connect
                        </h3>

                        <p
                          className="
                            mt-1
                            text-[9px]
                            font-medium
                            leading-none
                            text-slate-500
                          "
                        >
                          Understand{" "}
                          <span className="text-[#3563FF]">
                            anything.
                          </span>
                        </p>

                      </div>

                    </div>

                    {/* More options */}

                    <button
                      type="button"
                      aria-label="More options"
                      className="
                        flex
                        h-7
                        w-7
                        shrink-0
                        items-center
                        justify-center
                        rounded-[10px]
                        border
                        border-slate-200
                        bg-slate-50
                      "
                    >
                      <span className="flex gap-[3px]">

                        <span
                          className="
                            h-[3px]
                            w-[3px]
                            rounded-full
                            bg-slate-500
                          "
                        />

                        <span
                          className="
                            h-[3px]
                            w-[3px]
                            rounded-full
                            bg-slate-500
                          "
                        />

                        <span
                          className="
                            h-[3px]
                            w-[3px]
                            rounded-full
                            bg-slate-500
                          "
                        />

                      </span>
                    </button>

                  </div>

                </div>

                {/* =================================================
                    APP CONTENT
                ================================================= */}

                <div className="space-y-2.5 p-2.5">

                  {/* =================================================
                      LANGUAGE SELECTOR
                  ================================================= */}

                  <div
                    className="
                      rounded-[17px]
                      border
                      border-slate-200
                      bg-white
                      p-3
                      shadow-[0_2px_8px_-5px_rgba(15,23,42,0.25)]
                    "
                  >

                    <div className="flex items-center gap-2">

                      {/* Source language */}

                      <div className="min-w-0 flex-1">

                        <div className="flex items-center gap-1">

                          <span
                            className="
                              truncate
                              text-[14px]
                              font-extrabold
                              leading-none
                              tracking-[-0.02em]
                              text-slate-950
                            "
                          >
                            English
                          </span>

                          <span className="text-[9px] text-slate-400">
                            ⌄
                          </span>

                        </div>

                        <p
                          className="
                            mt-1
                            text-[6px]
                            font-bold
                            tracking-[0.16em]
                            text-[#3563FF]
                          "
                        >
                          YOU SPEAK
                        </p>

                      </div>

                      {/* Swap */}

                      <div
                        className="
                          flex
                          h-7
                          w-7
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-slate-200
                          bg-slate-50
                        "
                      >
                        <span className="text-sm text-[#3563FF]">
                          ⇄
                        </span>
                      </div>

                      {/* Target language */}

                      <div className="min-w-0 flex-1 text-right">

                        <div
                          className="
                            flex
                            items-center
                            justify-end
                            gap-1
                          "
                        >

                          <span
                            className="
                              truncate
                              text-[14px]
                              font-extrabold
                              leading-none
                              tracking-[-0.02em]
                              text-slate-950
                            "
                          >
                            Hindi
                          </span>

                          <span className="text-[9px] text-slate-400">
                            ⌄
                          </span>

                        </div>

                        <p
                          className="
                            mt-1
                            text-[6px]
                            font-bold
                            tracking-[0.16em]
                            text-[#20BE63]
                          "
                        >
                          THEY HEAR
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* =================================================
                      YOU SAID
                  ================================================= */}

                  <div
                    className="
                      overflow-hidden
                      rounded-[17px]
                      border
                      border-slate-200
                      bg-white
                      shadow-[0_2px_8px_-5px_rgba(15,23,42,0.25)]
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        border-b
                        border-slate-100
                        px-3
                        py-2
                      "
                    >

                      <span
                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-[#3563FF]
                        "
                      />

                      <span
                        className="
                          text-[7px]
                          font-bold
                          tracking-[0.18em]
                          text-slate-500
                        "
                      >
                        YOU SAID
                      </span>

                    </div>

                    <div className="px-3 py-3">

                      <p
                        className="
                          text-[12px]
                          font-medium
                          leading-5
                          tracking-[-0.01em]
                          text-slate-950
                        "
                      >
                        Hello, welcome to India.
                      </p>

                    </div>

                  </div>

                  {/* =================================================
                      TRANSLATION INDICATOR
                  ================================================= */}

                  <div
                    className="
                      flex
                      items-center
                      justify-center
                      gap-1
                    "
                  >

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#3563FF]
                      "
                    />

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#3563FF]/50
                      "
                    />

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#20BE63]/50
                      "
                    />

                    <span
                      className="
                        h-1.5
                        w-1.5
                        rounded-full
                        bg-[#20BE63]
                      "
                    />

                  </div>

                  {/* =================================================
                      THEY HEARD
                  ================================================= */}

                  <div
                    className="
                      overflow-hidden
                      rounded-[17px]
                      border
                      border-slate-200
                      bg-white
                      shadow-[0_2px_8px_-5px_rgba(15,23,42,0.25)]
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        border-b
                        border-slate-100
                        px-3
                        py-2
                      "
                    >

                      <span
                        className="
                          h-2
                          w-2
                          rounded-full
                          bg-[#20BE63]
                        "
                      />

                      <span
                        className="
                          text-[7px]
                          font-bold
                          tracking-[0.18em]
                          text-slate-500
                        "
                      >
                        THEY HEARD
                      </span>

                      <div
                        className="
                          ml-auto
                          flex
                          h-5
                          w-5
                          items-center
                          justify-center
                          rounded-full
                          bg-green-50
                        "
                      >

                        <span className="text-[8px] text-[#20BE63]">
                          ◖))
                        </span>

                      </div>

                    </div>

                    <div className="px-3 py-3">

                      <p
                        className="
                          text-[12px]
                          font-medium
                          leading-5
                          tracking-[-0.01em]
                          text-slate-950
                        "
                      >
                        नमस्ते, भारत में आपका स्वागत है।
                      </p>

                    </div>

                  </div>

                  {/* =================================================
                      VOICE BUTTON
                  ================================================= */}

                  <div className="flex justify-center py-1">

                    <div
                      className="
                        flex
                        h-[50px]
                        w-[50px]
                        items-center
                        justify-center
                        rounded-full
                        border-[3px]
                        border-blue-100
                        bg-blue-50
                      "
                    >

                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-[#3563FF]
                          shadow-md
                          shadow-blue-200
                        "
                      >

                        {/* Microphone */}

                        <div
                          className="
                            relative
                            h-4
                            w-3.5
                            rounded-full
                            border-2
                            border-white
                          "
                        >

                          <div
                            className="
                              absolute
                              bottom-[-5px]
                              left-1/2
                              h-2
                              w-[2px]
                              -translate-x-1/2
                              bg-white
                            "
                          />

                          <div
                            className="
                              absolute
                              bottom-[-5px]
                              left-1/2
                              h-[2px]
                              w-3.5
                              -translate-x-1/2
                              bg-white
                            "
                          />

                        </div>

                      </div>

                    </div>

                  </div>

                </div>

                {/* =================================================
                    BOTTOM NAVIGATION
                ================================================= */}

                <div
                  className="
                    border-t
                    border-slate-200
                    bg-white
                    px-2.5
                    py-2
                  "
                >

                  <div className="flex items-center justify-around">

                    {/* Connect */}

                    <div className="text-center">

                      <div className="text-xs leading-none text-[#3563FF]">
                        ◎
                      </div>

                      <p
                        className="
                          mt-1
                          text-[6px]
                          font-bold
                          text-[#3563FF]
                        "
                      >
                        Connect
                      </p>

                    </div>

                    {/* Converse */}

                    <div className="text-center">

                      <div className="text-xs leading-none text-slate-400">
                        ◌
                      </div>

                      <p
                        className="
                          mt-1
                          text-[6px]
                          text-slate-400
                        "
                      >
                        Converse
                      </p>

                    </div>

                    {/* Call */}

                    <div className="text-center">

                      <div className="text-xs leading-none text-slate-400">
                        ◡
                      </div>

                      <p
                        className="
                          mt-1
                          text-[6px]
                          text-slate-400
                        "
                      >
                        Call
                      </p>

                    </div>

                    {/* You */}

                    <div className="text-center">

                      <div className="text-xs leading-none text-slate-400">
                        ○
                      </div>

                      <p
                        className="
                          mt-1
                          text-[6px]
                          text-slate-400
                        "
                      >
                        You
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </Container>
    </Section>
  );
}