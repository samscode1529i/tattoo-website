"use client";

import { motion } from "motion/react";

const Portfolio = () => {
  const images = [
    "/images/portfolio/p1.jpg",
    "/images/portfolio/p2.png",
    "/images/portfolio/p15.jpg",
    "/images/portfolio/p3.png",
    "/images/portfolio/p5.jpg",
    "/images/portfolio/p6.jpg",
    "/images/portfolio/p7.jpg",
    "/images/portfolio/p8.jpg",
    "/images/portfolio/p9.jpg",
    "/images/portfolio/p12.jpg",
  ];

  return (
    <section className="max-h-90vh mb-10 px-6 py-24 md:px-12 lg:px-20 bg-gray-900/20">
      

      {/* Portfolio Heading */}
      <motion.h2
        className="mb-6 text-center font-oswald text-5xl font-medium tracking-tight text-amber-100 md:text-6xl"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
        }}
      >
        PORTFOLIO
      </motion.h2>

      {/* Break */}
      <motion.img
        src="/images/break1.png"
        alt="break image"
        className="mx-auto mb-16 h-[30px] w-[290px] object-cover"
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
        }}
      />

      {/* Portfolio Images */}
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

        {images.map((image, index) => (
          <motion.div
            key={image}
            className="h-[155px] overflow-hidden"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 12,
              delay: index * 0.08,
            }}
          >
            <img
              src={image}
              alt={`Tattoo work ${index + 1}`}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        ))}

      </div>

      {/* See More */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 12,
        }}
      >
        <a
          href="#portfolio"
          className="font-lato bg-gray-900/20 text-lg text-amber-100 underline underline-offset-8 transition-opacity hover:opacity-60"
        >
          See more
        </a>
      </motion.div>

    </section>
  );
};

export default Portfolio;