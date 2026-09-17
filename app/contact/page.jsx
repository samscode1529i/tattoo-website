"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "motion/react";

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <header className="bg-ink-950">
        <Navbar />

        <div className="px-6 pb-20 pt-32 md:px-12 lg:px-20">
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
            CONTACT US
          </motion.h1>

          <motion.img
            src="/images/break1.png"
            alt="section break"
            className="mx-auto mt-6 h-[40px] w-[350px] object-cover"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: 0.1,
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
            Have an idea for your next tattoo? Tell us about it and we'll get
            back to you with everything you need to know about your appointment.
          </motion.p>
        </div>
      </header>

      {/* Contact Section */}
      <main className="bg-ink-900 px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
            }}
          >
            <h2 className="font-oswald text-3xl text-amber-100 md:text-4xl">
              LET'S TALK
            </h2>

            <p className="mt-4 max-w-lg font-lato text-sm leading-7 text-stone-300">
              Fill out the form below with as much detail as possible. The more
              we know about your idea, the better we can understand what you're
              looking for.
            </p>

            <form className="mt-10 space-y-8">
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
                  required
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
                  required
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
                  required
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
              <div>
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
                  required
                  placeholder="Tell us about the tattoo you have in mind..."
                  className="w-full resize-none border border-white/40 bg-transparent px-4 py-4 font-lato text-sm leading-7 text-bone outline-none transition-colors placeholder:text-stone-500 focus:border-ember"
                />
              </div>

              {/* More Details */}
              <div>
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
                  placeholder="Placement, approximate size, preferred date, references, or anything else..."
                  className="w-full resize-none border border-white/40 bg-transparent px-4 py-4 font-lato text-sm leading-7 text-bone outline-none transition-colors placeholder:text-stone-500 focus:border-ember"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="bg-bone px-10 py-3.5 font-lato text-sm font-semibold uppercase tracking-wide text-ink-950 transition-colors duration-300 hover:bg-ember hover:text-bone"
              >
                Send Request
              </button>
            </form>
          </motion.div>

          {/* Map + Studio Info */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: 0.15,
            }}
            className="lg:pt-2"
          >
            <h2 className="font-oswald text-3xl text-amber-100 md:text-4xl">
              FIND US
            </h2>

            <p className="mt-4 font-lato text-sm leading-7 text-stone-300">
              Come visit the studio or get in touch with us to arrange your
              appointment.
            </p>

            {/* Map */}
            <div className="mt-8 h-[400px] w-full overflow-hidden border border-white/20">
              <iframe
                src="https://www.google.com/maps?q=Cairo,Egypt&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio location"
              />
            </div>

            {/* Studio Information */}
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <p className="font-lato text-xs font-semibold uppercase tracking-[0.2em] text-ember">
                  Address
                </p>

                <p className="mt-2 font-lato text-sm leading-6 text-stone-300">
                  142 Maadi Street
                  <br />
                  Cairo, Egypt
                </p>
              </div>

              <div>
                <p className="font-lato text-xs font-semibold uppercase tracking-[0.2em] text-ember">
                  Opening Hours
                </p>

                <p className="mt-2 font-lato text-sm leading-6 text-stone-300">
                  Tuesday – Saturday
                  <br />
                  11:00 AM – 7:00 PM
                </p>
              </div>

              <div>
                <p className="font-lato text-xs font-semibold uppercase tracking-[0.2em] text-ember">
                  Email
                </p>

                <a
                  href="mailto:hello@noirneedle.com"
                  className="mt-2 block font-lato text-sm text-stone-300 transition-colors hover:text-ember"
                >
                  hello@noirneedle.com
                </a>
              </div>

              <div>
                <p className="font-lato text-xs font-semibold uppercase tracking-[0.2em] text-ember">
                  Phone
                </p>

                <a
                  href="tel:+200000000000"
                  className="mt-2 block font-lato text-sm text-stone-300 transition-colors hover:text-ember"
                >
                  +20 000 000 0000
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
}