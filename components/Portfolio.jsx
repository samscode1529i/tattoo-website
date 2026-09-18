"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { supabase } from "@/lib/supabase";

const Portfolio = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolio = async () => {
      const { data, error } = await supabase
      .from("portfolio")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(10);

      if (error) {
        console.error("Error fetching portfolio:", error);
        setLoading(false);
        return;
      }

      setImages(data || []);
      setLoading(false);
    };

    fetchPortfolio();
  }, []);

  return (
    <section className="max-h-90vh mb-10 bg-gray-900/20 px-6 py-24 md:px-12 lg:px-20">

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

      {/* Loading */}
      {loading && (
        <p className="text-center font-lato text-sm text-stone-400">
          Loading portfolio...
        </p>
      )}

      {/* Portfolio Images */}
      {!loading && (
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

          {images.map((item, index) => (
            <motion.div
              key={item.id}
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
                src={item.image_url}
                alt={item.title || `Tattoo work ${index + 1}`}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          ))}

        </div>
      )}

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
          href="/portfolio"
          className="bg-gray-900/20 font-lato text-lg text-amber-100 underline underline-offset-8 transition-opacity hover:opacity-60"
        >
          See more
        </a>
      </motion.div>

    </section>
  );
};

export default Portfolio;