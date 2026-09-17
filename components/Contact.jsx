"use client";

import { motion } from "motion/react";

export default function Contact() {
  return (
    <section
      id="contact-us"
      className="bg-ink-900 mt-10 px-6 py-24 md:px-12 lg:px-20"
    >
      {/* Heading */}
      <motion.h2
        className="text-center font-oswald text-5xl font-medium tracking-tight text-amber-100 md:text-6xl"
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
        }}
      >
        CONTACT US
      </motion.h2>

      {/* Section break */}
      <motion.img
        src="/images/break1.png"
        alt="section break"
        className="mx-auto mt-6 h-[40px] w-[350px] object-cover"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
        }}
      />

      {/* Intro */}
      <motion.p
        className="mx-auto mt-10 max-w-2xl text-center font-lato text-sm leading-7 text-stone-300 md:text-base"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
          delay: 0.1,
        }}
      >
        Have an idea for your next tattoo? Tell us a little about yourself,
        your design, and what you're looking for. We'll get back to you with
        the next steps.
      </motion.p>

      {/* Form */}
      <motion.form
        className="mx-auto mt-16 max-w-5xl"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
          delay: 0.15,
        }}
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Full Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-3 block font-lato text-sm font-semibold uppercase tracking-wide text-bone"
            >
              Full Name
            </label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your full name"
              className="w-full border-b border-white/40 bg-transparent px-0 py-3 font-lato text-bone outline-none transition-colors placeholder:text-stone-500 focus:border-ember"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-3 block font-lato text-sm font-semibold uppercase tracking-wide text-bone"
            >
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full border-b border-white/40 bg-transparent px-0 py-3 font-lato text-bone outline-none transition-colors placeholder:text-stone-500 focus:border-ember"
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="mb-3 block font-lato text-sm font-semibold uppercase tracking-wide text-bone"
            >
              Phone
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+20 000 000 0000"
              className="w-full border-b border-white/40 bg-transparent px-0 py-3 font-lato text-bone outline-none transition-colors placeholder:text-stone-500 focus:border-ember"
            />
          </div>

          {/* Ink Type */}
          <div>
            <label
              htmlFor="inkType"
              className="mb-3 block font-lato text-sm font-semibold uppercase tracking-wide text-bone"
            >
              Ink Type / Style
            </label>

            <select
              id="inkType"
              name="inkType"
              defaultValue=""
              className="w-full border-b border-white/40 bg-transparent px-0 py-3 font-lato text-bone outline-none transition-colors focus:border-ember"
            >
              <option value="" disabled className="bg-ink-900">
                Choose a style
              </option>

              <option value="black-and-white" className="bg-ink-900">
                Black & White
              </option>

              <option value="full-body" className="bg-ink-900">
                Full Body
              </option>

              <option value="color" className="bg-ink-900">
                Color
              </option>

              <option value="blackwork" className="bg-ink-900">
                Blackwork
              </option>

              <option value="fine-line" className="bg-ink-900">
                Fine Line
              </option>

              <option value="traditional" className="bg-ink-900">
                Traditional
              </option>

              <option value="realism" className="bg-ink-900">
                Realism
              </option>

              <option value="other" className="bg-ink-900">
                Other
              </option>
            </select>
          </div>

          {/* Design Details */}
          <div className="md:col-span-2">
            <label
              htmlFor="design"
              className="mb-3 block font-lato text-sm font-semibold uppercase tracking-wide text-bone"
            >
              Design Details
            </label>

            <textarea
              id="design"
              name="design"
              rows="5"
              placeholder="Tell us about the tattoo you have in mind..."
              className="w-full resize-none border border-white/40 bg-transparent px-4 py-4 font-lato text-sm leading-7 text-bone outline-none transition-colors placeholder:text-stone-500 focus:border-ember"
            />
          </div>

          {/* More Details */}
          <div className="md:col-span-2">
            <label
              htmlFor="moreDetails"
              className="mb-3 block font-lato text-sm font-semibold uppercase tracking-wide text-bone"
            >
              More Details
            </label>

            <textarea
              id="moreDetails"
              name="moreDetails"
              rows="4"
              placeholder="Placement, approximate size, references, preferred dates, or anything else you'd like us to know..."
              className="w-full resize-none border border-white/40 bg-transparent px-4 py-4 font-lato text-sm leading-7 text-bone outline-none transition-colors placeholder:text-stone-500 focus:border-ember"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="mt-10 flex justify-center">
          <button
            type="submit"
            className="bg-bone px-10 py-3.5 font-lato text-sm font-semibold uppercase tracking-wide text-ink-950 transition-colors duration-300 hover:bg-ember hover:text-bone"
          >
            Send Request
          </button>
        </div>
      </motion.form>
    </section>
  );
}