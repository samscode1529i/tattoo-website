"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-ink-950">
        <Navbar />

        <div className="px-6 pb-24 pt-32 md:px-12 lg:px-20">
          <motion.h1
            className="text-center font-oswald text-5xl font-medium tracking-tight text-amber-100 md:text-7xl"
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
            }}
          >
            ABOUT US
          </motion.h1>

          
            {/* Break */}
            <motion.img
                src="/images/break1.png"
                alt="break image"
                className="mx-auto mb-16 p-2 h-[50px] w-[310px] object-cover"
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                }}
            />

          <motion.p
            className="mx-auto mt-8 max-w-2xl text-center font-lato text-sm leading-7 text-stone-300 md:text-base"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: 0.2,
            }}
          >
            More than ink. We create tattoos that carry meaning, tell stories,
            and become part of who you are.
          </motion.p>
        </div>
      </header>

      {/* Our Story */}
      <main className="bg-ink-900">
        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-24">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
            >
              <img
                src="/images/sixseven.png"
                alt="Tattoo artist working"
                className="h-[450px] w-full object-cover md:h-[550px]"
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: 0.15,
              }}
            >
              <p className="font-lato text-xs font-semibold uppercase tracking-[0.3em] text-ember">
                OUR STORY
              </p>

              <h2 className="mt-4 font-oswald text-4xl text-amber-100 md:text-5xl">
                TATTOOS WITH MEANING
              </h2>

              <div className="mt-6 space-y-5 font-lato text-base leading-8 text-stone-300">
                <p>
                  We believe tattoos are more than ink on skin. They can mark a
                  moment, represent a memory, or simply be a way of expressing
                  who you are.
                </p>

                <p>
                  Our studio was built around that idea. Every tattoo begins
                  with a conversation. We take the time to understand your
                  vision, refine the details, and create something that feels
                  personal to you.
                </p>

                <p>
                  From the first sketch to the final line, we care about the
                  small details that turn an idea into a piece of art you'll be
                  proud to carry.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="bg-ink-950 px-6 py-24 md:px-12 lg:px-20">
          <motion.div
            className="mx-auto max-w-7xl"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
            }}
          >
            <div className="text-center">
              <p className="font-lato text-xs font-semibold uppercase tracking-[0.3em] text-ember">
                OUR APPROACH
              </p>

              <h2 className="mt-3 font-oswald text-4xl text-amber-100 md:text-5xl">
                MADE WITH INTENTION
              </h2>

            {/* Break */}
            <motion.img
                src="/images/break1.png"
                alt="break image"
                className="mx-auto pt-6 mb-16 h-[60px] w-[350px] object-cover"
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                }}
            />
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {/* Card 1 */}
              <motion.div
                className="border border-white/20 p-8 transition-colors duration-300 hover:border-ember"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                }}
              >
                <span className="font-oswald text-4xl text-ember">01</span>

                <h3 className="mt-6 font-oswald text-2xl text-bone">
                  LISTEN
                </h3>

                <p className="mt-4 font-lato text-sm leading-7 text-stone-400">
                  Every tattoo starts with understanding your idea, your story,
                  and what you want the final piece to represent.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                className="border border-white/20 p-8 transition-colors duration-300 hover:border-ember"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: 0.1,
                }}
              >
                <span className="font-oswald text-4xl text-ember">02</span>

                <h3 className="mt-6 font-oswald text-2xl text-bone">
                  CREATE
                </h3>

                <p className="mt-4 font-lato text-sm leading-7 text-stone-400">
                  We turn your concept into a thoughtful design while paying
                  attention to placement, proportions, and detail.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                className="border border-white/20 p-8 transition-colors duration-300 hover:border-ember"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: 0.2,
                }}
              >
                <span className="font-oswald text-4xl text-ember">03</span>

                <h3 className="mt-6 font-oswald text-2xl text-bone">
                  INK
                </h3>

                <p className="mt-4 font-lato text-sm leading-7 text-stone-400">
                  Once everything is right, we bring the design to life with
                  careful technique and attention to every line.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Styles */}
        <section className="px-6 py-24 md:px-12 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
              }}
            >
              <p className="font-lato text-xs font-semibold uppercase tracking-[0.3em] text-ember">
                WHAT WE DO
              </p>

              <h2 className="mt-3 font-oswald text-4xl text-amber-100 md:text-5xl">
                OUR STYLES
              </h2>

              <div className="mt-10 grid grid-cols-2 gap-px bg-white/20 md:grid-cols-4">
                {[
                  "BLACKWORK",
                  "FINE LINE",
                  "TRADITIONAL",
                  "REALISM",
                  "BLACK & WHITE",
                  "COLOR",
                  "CUSTOM",
                  "AND MORE",
                ].map((style, index) => (
                  <div
                    key={style}
                    className="bg-ink-900 px-5 py-8 text-center transition-colors duration-300 hover:bg-ember"
                  >
                    <span className="font-oswald text-lg text-bone">
                      {style}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink-950 px-6 py-28 text-center md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
            }}
          >
            <h2 className="font-oswald text-4xl text-amber-100 md:text-6xl">
              HAVE AN IDEA?
            </h2>

            <p className="mx-auto mt-5 max-w-xl font-lato text-sm leading-7 text-stone-300">
              Tell us what you're thinking and let's turn your idea into
              something permanent.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-block bg-bone px-10 py-3.5 font-lato text-sm font-semibold uppercase tracking-wide text-ink-950 transition-colors duration-300 hover:bg-ember hover:text-bone"
            >
              Get In Touch
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}