"use client";

import { motion } from "motion/react";
import Portfolio from "./Portfolio";

const Body = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* ABOUT SECTION */}
      <section className="min-h-screen w-full overflow-x-hidden px-6 py-24 md:px-12 lg:px-20">
        {/* Heading */}
        <motion.h2
          className="text-center font-oswald text-5xl font-medium tracking-tight text-amber-100 md:text-6xl"
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
        >
          ABOUT US
        </motion.h2>

        {/* Break */}
        <motion.img
          src="/images/break1.png"
          alt="break image"
          className="mx-auto mb-16 h-[60px] w-full max-w-[350px] object-cover pt-5"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
        />

        {/* About Content */}
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-24">
          {/* Image */}
          <motion.div
            className="min-w-0 w-full md:w-1/2"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
            }}
          >
            <img
              src="/images/sixseven.png"
              alt="Tattoo artist working"
              className="h-[350px] w-full object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="min-w-0 w-full md:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: 0.15,
            }}
          >
            <p className="mb-3 text-sm tracking-[0.3em] text-amber-200">
              OUR STORY
            </p>

            <p className="max-w-xl font-lato text-lg leading-8 text-stone-300">
              We believe tattoos are more than ink on skin. Every piece tells a
              story, carries a memory, or represents something that stays with
              you forever.
            </p>

            <p className="mt-5 max-w-xl font-lato text-lg leading-8 text-stone-300">
              Our studio brings together creativity, craftsmanship, and a deep
              respect for the art of tattooing. Every design is created with
              intention and every client gets a piece that feels uniquely
              theirs.
            </p>
          </motion.div>
        </div>

        {/* Learn More */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 12,
          }}
        >
            <a
            href="/about"
            className="bg-bone px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-[#E8750B] hover:text-bone"
            >
            Learn More
            </a>
        </motion.div>
      </section>

      {/* PORTFOLIO */}
      <Portfolio />
    </div>
  );
};

export default Body;