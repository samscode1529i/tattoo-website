"use client";

import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { motion } from "motion/react";


const faqs = [
  {
    question: "HOW DO I BOOK AN APPOINTMENT?",
    answer:
      "You can book an appointment by contacting us through the contact section or through our social media pages. We'll discuss your idea, placement, size, and availability before confirming your appointment.",
  },
  {
    question: "DO YOU ACCEPT WALK-INS?",
    answer:
      "Appointments are preferred so we can make sure enough time is available for your tattoo. Walk-ins may be accepted depending on the day's availability.",
  },
  {
    question: "HOW MUCH DOES A TATTOO COST?",
    answer:
      "Pricing depends on the size, placement, style, and amount of detail required. Contact us with your idea and we'll be able to give you a more accurate estimate.",
  },
  {
    question: "CAN I BRING MY OWN DESIGN?",
    answer:
      "Absolutely. You can bring your own reference or design. We'll discuss how it can be adapted to work best with your chosen placement and tattoo style.",
  },
  {
    question: "HOW SHOULD I PREPARE FOR MY APPOINTMENT?",
    answer:
      "Make sure you've eaten beforehand, stay hydrated, and get a good night's sleep. Wear comfortable clothing that gives easy access to the area being tattooed.",
  },
  {
    question: "HOW LONG DOES A TATTOO TAKE TO HEAL?",
    answer:
      "Most tattoos take around two to four weeks for the surface of the skin to heal. Complete healing can take longer depending on the size and placement of the tattoo.",
  },
  {
    question: "DO YOU TATTOO MINORS?",
    answer:
      "We only tattoo clients who meet the studio's minimum age requirements. Please contact us beforehand if you're unsure whether you are eligible for an appointment.",
  },
  {
    question: "WHAT STYLES DO YOU SPECIALIZE IN?",
    answer:
      "Our studio works across several styles, including blackwork, fine line, and traditional tattooing. If you have a specific idea, send us your references and we'll discuss the best approach.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="FAQ"
      className="min-h-screen overflow-x-hidden px-6  md:px-12 lg:px-20"
    >
      {/* Heading */}
      <h2 className="text-center font-oswald text-5xl font-medium tracking-tight text-amber-100 md:text-6xl">
        FREQUENTLY ASKED QUESTIONS
      </h2>

            {/* Break  */}
            <motion.img 
                src="/images/break1.png"
                alt="break image"
                className="mx-auto pt-5 object-cover w-[350px] h-[55] mb-16"
                initial={{y: 100}}
                whileInView={{y:0}}
                viewport={{ once: true, amount:0.2 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 12,
                }}
            />

      {/* Space */}
      <div className="h-20" />

      {/* FAQ Grid */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 4 < 2 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 12,
                delay: (index % 4) * 0.1,
              }}
              className="w-full"
            >
              {/* Question Box */}
              <button
                onClick={() => toggleFAQ(index)}
                className={`flex min-h-[80px] w-full items-center justify-between border px-5 py-5 text-left transition-all duration-300 ${
                  isOpen
                    ? "border-ember bg-ember"
                    : "border-white bg-transparent hover:border-ember"
                }`}
              >
                <span
                  className={`pr-4 font-lato text-sm font-semibold tracking-wide transition-colors duration-300 ${
                    isOpen ? "text-ink-950" : "text-white"
                  }`}
                >
                  {faq.question}
                </span>

                {/* Arrow */}
                <FaChevronRight
                  size={12}
                  className={`shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "rotate-90 text-ink-950"
                      : "text-white"
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="bg-ink-950 px-5 py-6">
                    <p className="font-lato text-sm leading-7 text-white">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}