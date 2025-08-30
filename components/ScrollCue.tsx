"use client";
import { motion } from "framer-motion";

export default function ScrollCue() {
  return (
    <div className="relative z-10 -mt-6 flex justify-center pb-2 md:-mt-10">
      <motion.div
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col items-center text-xs text-slate-300"
      >
        <span>Scroll</span>
        <span className="mt-1 block h-6 w-[1px] bg-slate-500/40" />
      </motion.div>
    </div>
  );
}
