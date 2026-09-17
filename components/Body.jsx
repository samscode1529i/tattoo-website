"use client"; 
import { motion } from "motion/react";
import Portfolio from "./Portfolio";
import FAQ from "./Faq";

const Body = () => {
  return (
    <div>
        <section className="min-h-screen px-6 py-24 md:px-12 lg:px-20">

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

            {/* Break  */}
            <motion.img 
                src="/images/break1.png"
                alt="break image"
                className="mx-auto pt-5 object-cover w-[250px] h-[10] mb-16"
                initial={{y: 100}}
                whileInView={{y:0}}
                viewport={{ once: true, amount:0.2 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                }}
            />

        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row md:gap-16 lg:gap-24">

            {/* Image */}
            <motion.div
            className="w-full md:w-1/2"
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
            className="w-full md:w-1/2"
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

            

            <p className="font-lato max-w-xl text-lg leading-8 text-stone-300 ">
                We believe tattoos are more than ink on skin. Every piece tells a
                story, carries a memory, or represents something that stays with
                you forever.
            </p>

            <p className="font-lato mt-5 max-w-xl text-lg leading-8 text-stone-300">
                Our studio brings together creativity, craftsmanship, and a deep
                respect for the art of tattooing. Every design is created with
                intention and every client gets a piece that feels uniquely theirs.
            </p>
            </motion.div>

        </div>
        <div className="flex justify-center mt-8">
            <button className=" bg-bone px-5 py-2.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-[#E8750B] hover:text-bone">
                learn more
            </button>
        </div>

        </section>
        
        <Portfolio />
        {/* <FAQ /> */}
    </div>


    
  );
};

export default Body;
