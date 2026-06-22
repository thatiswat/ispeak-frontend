"use client";

import { Mic } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";

type Props = {
  onRecordingComplete: (
    blob: Blob
  ) => void;

  disabled?: boolean;
};

export default function MicButton({
  onRecordingComplete,
  disabled = false
}: Props) {

  const [recording, setRecording] =
    useState(false);

  const recorderRef =
    useRef<MediaRecorder | null>(
      null
    );

  const chunksRef =
    useRef<Blob[]>([]);

  async function startRecording() {

    if (
      disabled ||
      recording
    ) return;

    try {

      const stream =
        await navigator.mediaDevices.getUserMedia({
          audio: true
        });

      chunksRef.current = [];

      const recorder =
        new MediaRecorder(
          stream
        );

      recorderRef.current =
        recorder;

      recorder.ondataavailable = (
        event
      ) => {

        if (
          event.data &&
          event.data.size > 0
        ) {

          chunksRef.current.push(
            event.data
          );

        }

      };

      recorder.start();

      setRecording(
        true
      );

    } catch (error) {

      console.error(
        "Microphone access failed:",
        error
      );

    }

  }

  function stopRecording() {

    if (
      !recorderRef.current ||
      !recording
    ) return;

    recorderRef.current.onstop =
      () => {

        const blob =
          new Blob(
            chunksRef.current,
            {
              type:
                "audio/webm"
            }
          );

        onRecordingComplete(
          blob
        );

      };

    recorderRef.current.stop();

    recorderRef.current.stream
      .getTracks()
      .forEach(
        (
          track
        ) =>
          track.stop()
      );

    setRecording(
      false
    );

  }

  return (

    <div className="flex justify-center relative">

      <motion.button

        disabled={
          disabled
        }

        onMouseDown={
          startRecording
        }

        onMouseUp={
          stopRecording
        }

        onTouchStart={(e) => {

          e.preventDefault();

          startRecording();

        }}

        onTouchEnd={(e) => {

          e.preventDefault();

          stopRecording();

        }}

        animate={{
          boxShadow: disabled
            ? "0 0 0px rgba(99,102,241,0.1)"
            : [
                "0 0 0px rgba(99,102,241,0.2)",
                "0 0 60px rgba(99,102,241,0.5)",
                "0 0 0px rgba(99,102,241,0.2)"
              ]
        }}

        transition={{
          repeat:
            disabled
              ? 0
              : Infinity,

          duration: 2
        }}

        whileHover={{
          scale:
            disabled
              ? 1
              : 1.05
        }}

        whileTap={{
          scale:
            disabled
              ? 1
              : 0.95
        }}

        className={`
          h-48
          w-48
          rounded-full
          flex
          items-center
          justify-center
          transition
          ${
            disabled
              ? `
                bg-slate-700
                opacity-60
                cursor-not-allowed
              `
              : `
                bg-gradient-to-br
                from-indigo-500
                to-violet-600
                shadow-[0_0_80px_rgba(99,102,241,0.35)]
              `
          }
        `}
      >

        <Mic size={60} />

      </motion.button>

      {recording && (

        <div
          className="
          absolute
          mt-56
          text-indigo-300
          "
        >
          Listening...
        </div>

      )}

    </div>

  );

}