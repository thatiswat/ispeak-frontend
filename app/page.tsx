"use client";

import { useState } from "react";

import Hero from "@/components/Hero";
import LanguagePicker from "@/components/LanguagePicker";
import MicButton from "@/components/MicButton";
import { sendAudio } from "@/lib/api";

const BACKEND_URL =
  "https://ispeak-backend-production-d877.up.railway.app";

const LANGUAGE_NAMES = {
  "": "Select Language",
  auto: "Auto Detect",
  en: "English",
  hi: "Hindi",
  kn: "Kannada",
  ta: "Tamil",
  te: "Telugu",
  ml: "Malayalam"
};

export default function Home() {

  const [status, setStatus] =
    useState("Ready to translate");

  const [audioUrl, setAudioUrl] =
    useState<string | null>(null);

  const [isProcessing, setIsProcessing] =
    useState(false);

  const [history, setHistory] =
    useState<
      {
        original: string;
        translated: string;
        time: string;
      }[]
    >([]);

  const [sourceLanguage, setSourceLanguage] =
    useState("");

  const [targetLanguage, setTargetLanguage] =
    useState("hi");

  function replayAudio() {

    if (!audioUrl)
      return;

    const audio =
      new Audio(
        audioUrl
      );

    audio.currentTime = 0;

    audio
      .play()
      .catch(
        console.error
      );

  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">

      <Hero />

      <section className="px-6 pb-20">

        <div
          className="
          max-w-5xl
          mx-auto
          mt-8
          bg-slate-900/40
          backdrop-blur-xl
          border
          border-slate-800
          rounded-[40px]
          p-8
          "
        >

          <LanguagePicker
            sourceLanguage={sourceLanguage}
            targetLanguage={targetLanguage}
            onSourceChange={setSourceLanguage}
            onTargetChange={setTargetLanguage}
          />

          <div className="flex justify-center gap-4 mt-4">

            <button
              onClick={() => {

                if (
                  sourceLanguage === "" ||
                  sourceLanguage === "auto"
                ) return;

                const temp =
                  sourceLanguage;

                setSourceLanguage(
                  targetLanguage
                );

                setTargetLanguage(
                  temp
                );

              }}
              className="
              px-4
              py-2
              rounded-xl
              bg-slate-800
              hover:bg-slate-700
              transition
              "
            >
              ⇄ Swap
            </button>

            <button
              onClick={() =>
                setHistory([])
              }
              className="
              px-4
              py-2
              rounded-xl
              bg-slate-800
              hover:bg-slate-700
              transition
              "
            >
              Clear History
            </button>

          </div>

          <p className="text-center text-slate-500 mt-4">

            {
              LANGUAGE_NAMES[
                sourceLanguage as keyof typeof LANGUAGE_NAMES
              ]
            }

            {" → "}

            {
              LANGUAGE_NAMES[
                targetLanguage as keyof typeof LANGUAGE_NAMES
              ]
            }

          </p>

          <div className="mt-10">

            <MicButton
              disabled={isProcessing}
              onRecordingComplete={async (blob) => {

                if (isProcessing)
                  return;

                if (!sourceLanguage) {

                  setStatus(
                    "Select source language first"
                  );

                  return;

                }

                setIsProcessing(
                  true
                );

                try {

                  setStatus(
                    "Translating..."
                  );

                  setAudioUrl(
                    null
                  );

                  const data =
                    await sendAudio(
                      blob,
                      sourceLanguage,
                      targetLanguage
                    );

                  console.log(
                    "Backend response:",
                    data
                  );

                  setHistory((prev) => [

                    {
                      original:
                        data.original,

                      translated:
                        data.translated,

                      time:
                        new Date()
                          .toLocaleTimeString(
                            [],
                            {
                              hour: "numeric",
                              minute: "2-digit"
                            }
                          )
                    },

                    ...prev

                  ].slice(0, 20));

                  const url =
                    data.audio_url.startsWith("http")
                    ? data.audio_url
                    : `${BACKEND_URL}${data.audio_url.startsWith("/") ? "" : "/"}${data.audio_url}`;

                  console.log(
                    "Audio URL:",
                    url
                  );

                  setAudioUrl(
                    url
                  );

                  const audio =
                    new Audio(
                       url
                    );

                  audio.volume = 1; 

                  audio
                    .play()
                    .then(() => {

                      console.log(
                        "Audio playing"
                      );

                    })
                    .catch((err) => {

                      console.error(
                        "Audio autoplay failed:",
                        err
                      );

                    });

                  setStatus(
                    "Translation Ready"
                  );

                } catch (error) {

                  console.error(
                    "Translation error:",
                    error
                  );

                  setStatus(
                    "Failed"
                  );

                } finally {

                  setIsProcessing(
                    false
                  );

                }

              }}
            />

          </div>

          <p className="text-center mt-6 text-slate-400">

            {
              isProcessing
                ? "Translating..."
                : status
            }

          </p>

          <div
            className="
            mt-12
            space-y-4
            max-h-[500px]
            overflow-y-auto
            pr-2
            "
          >

            {history.length === 0 ? (

              <div
                className="
                text-center
                text-slate-500
                py-12
                "
              >
                Start speaking to begin a conversation
              </div>

            ) : (

              history.map(
                (item, index) => (

                  <div
                    key={`${item.time}-${index}`}
                    className="
                    bg-slate-950/50
                    border
                    border-slate-800
                    rounded-3xl
                    p-5
                    "
                  >

                    <p
                      className="
                      text-xs
                      uppercase
                      tracking-widest
                      text-indigo-400
                      "
                    >
                      YOU SAID
                    </p>

                    <p className="mt-2">
                      {item.original}
                    </p>

                    <p
                      className="
                      text-xs
                      text-slate-500
                      mt-2
                      "
                    >
                      {item.time}
                    </p>

                    <div className="h-px bg-slate-800 my-4" />

                    <p
                      className="
                      text-xs
                      uppercase
                      tracking-widest
                      text-green-400
                      "
                    >
                      THEY HEAR
                    </p>

                    <p className="mt-2">
                      {item.translated}
                    </p>

                  </div>

                )
              )

            )}

          </div>

          <div
            className="
            mt-6
            bg-slate-950/60
            border
            border-slate-800
            rounded-[28px]
            p-5
            "
          >

            <p
              className="
              text-slate-500
              text-xs
              tracking-[0.25em]
              uppercase
              "
            >
              AUDIO
            </p>

            {audioUrl && (

              <button
                onClick={
                  replayAudio
                }
                className="
                w-full
                mt-4
                py-3
                rounded-2xl
                bg-slate-800
                hover:bg-slate-700
                transition
                "
              >
                ▶ Replay Translation
              </button>

            )}

          </div>

        </div>

      </section>

    </main>
  );
}