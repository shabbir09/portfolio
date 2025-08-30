"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedText({ items, interval=1800 }:{ items:string[], interval?:number }){
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i + 1) % items.length), interval);
    return () => clearInterval(id);
  }, [interval, items.length]);
  return (
    <div className="inline-block relative h-8 align-middle overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={items[index]}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="text-brand-accent font-semibold"
        >
          {items[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}
