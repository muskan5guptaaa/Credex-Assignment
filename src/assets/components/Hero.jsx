import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
      <section className="bg-blue-100 py-20 text-center">
        <h1 className="text-4xl font-bold">Sell Unused Software Licenses</h1>
        <p className="mt-4 text-lg">Turn your unused software into cash in minutes!</p>
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded">Get a Quote</button>
        <motion.h1
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="text-4xl font-bold"
>
  Sell Your Software Licenses Easily
</motion.h1>
      </section>
    );
  }
  