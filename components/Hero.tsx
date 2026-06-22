"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-12 px-6">

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="
        text-7xl
        md:text-8xl
        font-bold
        tracking-tight
        "
      >
        iSpeak
      </motion.h1>

      <p className="text-slate-400 text-xl mt-4">
        Talk Across Languages. Naturally.
      </p>

      <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
        Real-time voice translation built for conversations
        across India.
      </p>

    </section>
  );
}