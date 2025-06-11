'use client';

import { home, benefits, steps } from "../lib/content";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start start", "end end"],
  })

  const stepProgress = useTransform(scrollYProgress, [0, 1], [0, 4]);

  return (
    <div className="font-[family-name:var(--font-poppins)]">

    {/* Main screen */}
      <main className="min-h-[100dvh] flex items-center justify-center mx-auto px-6">
        <div className="flex flex-col w-full max-w-screen-2xl">
          <h1 className="text-stone-500 text-6xl lg:text-8xl font-semibold leading-none">
            {home.title[0]}
          </h1>
          <div className="flex lg:flex-row flex-col-reverse items-start lg:items-end justify-between mt-4 gap-y-12">
            <div className="hidden lg:block max-w-xl text-[#FFA72C] text-lg md:text-xl 2xl:text-2xl font-normal leading-relaxed">
              {home.description}
            </div>
            <div className="flex flex-col gap-y-10 pr-0 lg:pr-10">
              <div className="text-stone-500 text-6xl lg:text-8xl font-semibold leading-none">
                {home.title[1]}
                <span className="text-[#FF8000] font-semibold">
                  {home.appName}
                </span>
              </div>
              <div className="flex flex-row-reverse lg:flex-row items-center justify-end gap-4 mt-6">
                <a
                  className="text-yellow-900 text-lg lg:text-xl font-normal"
                  href={home.learnMoreLink}
                >
                  {home.learnMoreText}
                </a>
                <a
                  className="px-8 py-3 bg-orange-300/60 rounded-[20px] inline-flex justify-center items-center gap-2 text-yellow-900 text-lg lg:text-xl font-medium"
                  href={home.downloadLink}
                >
                  {home.downloadText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* What can you do? */}
      <section className="bg-[#1B0D00] min-h-[70dvh] py-10 items-center justify-center flex flex-col lg:gap-y-12">
        <div className="text-stone-50 text-3xl lg:text-4xl font-medium leading-[60px] ">
          {benefits.title}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-2xl mx-auto mt-10 gap-y-8 gap-x-32">
            {Object.entries(benefits.elements).map(([key, value]) => (
            <div
              key={key}
              className="inline-flex flex-col justify-start items-start gap-3.5 hover:bg-white hover:text-black hover:cursor-none px-8 py-6 transition-all duration-300 ease-in-out rounded-2xl bg-[#1B0D00] text-stone-50 group"
            >
              <div className="inline-flex justify-start items-center gap-2.5 lg:translate-x-[-40px] group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                <span className="lg:opacity-0 group-hover:opacity-100 justify-start text-2xl lg:text-3xl font-medium leading-10 transition-all duration-300 ease-in-out">
                  {value.emoji}
                </span>
                <h2 className="justify-start text-2xl lg:text-3xl font-medium leading-10 text-[#FFFAF5CC] group-hover:text-black transition-all duration-300 ease-in-out">
                  {value.title}
                </h2>
              </div>
              <p className="self-stretch justify-start lg:text-lg text-start font-normal lg:max-w-3/4 text-[#FFFAF580] group-hover:text-[#00000080] transition-all duration-300 ease-in-out">
              {value.description}
              </p>
            </div>
            ))}
        </div>
      </section>

      {/* Steps */}
      <section ref={stepsRef} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            {steps.map((step, index) => {
              const stepStart = index / steps.length;
              const stepEnd = (index + 1) / steps.length;

              const numberY = useTransform(
                scrollYProgress,
                [stepStart, stepEnd],
                ["30vh", "-30vh"]
              );

              const numberOpacity = useTransform(
                scrollYProgress,
                [stepStart, stepStart + 0.05, stepEnd - 0.05, stepEnd],
                [0, 1, 1, 0]
              );

              const textY = useTransform(
                scrollYProgress,
                [stepStart, stepStart + 0.1, stepEnd - 0.1, stepEnd],
                ["50vh", "0vh", "0vh", "-50vh"]
              );

              const opacity = useTransform(
                scrollYProgress,
                [stepStart, stepStart + 0.1, stepEnd - 0.1, stepEnd],
                [0, 1, 1, 0]
              );

              return (
                <div key={index} className="absolute inset-0">
                  {/* Background Number - Fixed to viewport center */}
                  <motion.div
                    style={{ y: numberY, opacity: numberOpacity }}
                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20rem] lg:text-[25rem] font-bolt text-orange-200/30 leading-none pointer-events-none z-0"
                  >{step.number}</motion.div>

                  {/* Text Content - Fixed to viewport center */}
                  <motion.div
                    style={{ y: textY, opacity }}
                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-6 text-center max-w-2xl px-6"
                  >
                    <h2 className="text-4xl lg:text-6xl font-semibold text-stone-800 leading-tight">
                      {step.title}
                    </h2>
                    <p className="text-lg lg:text-xl text-stone-600 max-w-lg leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>


      {/* By students */}
      <section className="min-h-[100dvh] flex items-center justify-center mx-auto px-6 ">
        <div className="flex flex-col items-center justify-center max-w-screen-xl text-center gap-y-6">
          <h2 className="justify-start text-yellow-800 text-3xl lg:text-6xl font-semibold">
            Made by Students, Shared with the World
          </h2>
          <p className="text-center justify-start text-stone-400 text-lg lg:text-2xl font-normal">
            This isn’t a polished corporate product—it’s a tool built by students who wanted to solve a real-world challenge. It’s open source, and you're welcome to take it further.
          </p>
        </div>
      </section>
    </div>
  );
}
