"use client";

import { useState } from "react";
import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  "All",
  "Fine Line",
  "Black & Bold",
  "Colour",
  "Anime",
  "Arabic",
  "Lettering",
];

const portfolioImages = [
  {
    src: "/images/portfolio/p1.jpg",
    category: "Fine Line",
  },
  {
    src: "/images/portfolio/p2.png",
    category: "Black & Bold",
  },
  {
    src: "/images/portfolio/p3.png",
    category: "Colour",
  },
  {
    src: "/images/portfolio/p4.jpg",
    category: "Anime",
  },
  {
    src: "/images/portfolio/p5.jpg",
    category: "Arabic",
  },
  {
    src: "/images/portfolio/p6.jpg",
    category: "Lettering",
  },
  {
    src: "/images/portfolio/p7.jpg",
    category: "Fine Line",
  },
  {
    src: "/images/portfolio/p8.jpg",
    category: "Black & Bold",
  },
  {
    src: "/images/portfolio/p9.jpg",
    category: "Colour",
  },
  {
    src: "/images/portfolio/p10.jpg",
    category: "Colour",
  },
  {
    src: "/images/portfolio/p11.jpg",
    category: "Colour",
  },
  {
    src: "/images/portfolio/p12.jpg",
    category: "Colour",
  },
  {
    src: "/images/portfolio/p13.jpg",
    category: "Colour",
  },
  {
    src: "/images/portfolio/p14.jpg",
    category: "Colour",
  },
  {
    src: "/images/portfolio/p15.jpg",
    category: "Colour",
  },
  {
    src: "/images/portfolio/p16.jpg",
    category: "Colour",
  },
  {
    src: "/images/portfolio/p17.jpg",
    category: "Colour",
  },
  {
    src: "/images/portfolio/p18.jpg",
    category: "Colour",
  },
  {
    src: "/images/portfolio/p19.jpg",
    category: "Colour",
  },
  {
    src: "/images/portfolio/p20.jpg",
    category: "Colour",
  },
  {
    src: "/images/portfolio/p21.jpg",
    category: "Colour",
  },
  {
    src: "/images/portfolio/p22.jpg",
    category: "Colour",
  },
  {
    src: "/images/portfolio/p23.jpg",
    category: "Colour",
  },
  {
    src: "/images/portfolio/p24.jpg",
    category: "Colour",
  },
  {
    src: "/images/portfolio/p25.jpg",
    category: "Colour",
  },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? portfolioImages
      : portfolioImages.filter(
          (image) => image.category === activeCategory
        );

  return (
    <>
      {/* HEADER */}
      <header className="bg-ink-950">
        <Navbar />
        <div className="px-6 pb-16 pt-32 md:px-12 lg:px-20">
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
            PORTFOLIO
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
            Explore some of our work across different tattoo styles.
          </motion.p>
        </div>
      </header>

      {/* PORTFOLIO */}
      <main className="min-h-screen bg-ink-900 px-4 py-[17px] md:px-6">
        <div className="mx-auto max-w-[1600px]">

          {/* CATEGORY BUTTONS */}
          <div className="mb-[17px] flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const active = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`border px-5 py-2.5 font-lato text-xs font-semibold uppercase tracking-wide transition-all duration-300 ${
                    active
                      ? "border-ember bg-ember text-ink-950"
                      : "border-white/30 bg-transparent text-bone hover:border-ember hover:text-ember"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* IMAGE GRID */}
          <motion.div
            layout
            className="grid grid-cols-2 gap-[2px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                layout
                key={image.src}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: index * 0.04,
                }}
                className="group relative aspect-[222/278] overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={`${image.category} tattoo`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* CATEGORY LABEL */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-ink-950/90 px-3 py-2 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="font-lato text-[10px] font-semibold uppercase tracking-wider text-amber-100">
                    {image.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        <Footer />
      </main>
    </>
  );
}