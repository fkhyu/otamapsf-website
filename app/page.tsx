'use client';

import { home, benefits, steps, openness, general } from "../lib/content";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ClippedDiv from "@/components/ClippedDiv";
import { detectOS } from "@/utils/osDetect";
import { div } from "framer-motion/client";

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
          <h1 className="text-stone-500 dark:text-stone-300 text-6xl lg:text-8xl font-semibold leading-none">
            {home.title[0]}
          </h1>
          <div className="flex lg:flex-row flex-col-reverse items-start lg:items-end justify-between mt-4 gap-y-12">
            <div className="hidden lg:block max-w-xl text-[#FFA72C] dark:text-[#d8ac6f] text-lg md:text-xl 2xl:text-2xl font-normal leading-relaxed">
              {home.description}
            </div>
            <div className="flex flex-col gap-y-10 pr-0 lg:pr-10">
              <div className="text-stone-500 dark:text-stone-300 text-6xl lg:text-8xl font-semibold leading-none">
                {home.title[1]}
                <span className="text-[#FF8000] font-semibold">
                  {home.appName}
                </span>
              </div>
              <div className="flex flex-row-reverse lg:flex-row items-center justify-end gap-4 mt-6">
                <a
                  className="text-orange-900 dark:text-orange-200 text-lg lg:text-xl font-normal"
                  href={home.learnMoreLink}
                >
                  {home.learnMoreText}
                </a>
                <a
                  className="px-8 py-3 bg-orange-300/60 dark:bg-orange-300 dark:text-orange-800 rounded-[20px] inline-flex justify-center items-center gap-2 text-orange-900 text-lg lg:text-xl font-medium"
                  href={home.downloadRedirect}
                >
                  {home.downloadText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* What can you do? */}
      <section id="benefits" className="bg-[#1B0D00] dark:bg-orange-200 min-h-[70dvh] py-10 items-center justify-center flex flex-col lg:gap-y-12">
        <div className="text-stone-50 dark:text-stone-950 text-3xl lg:text-4xl font-medium leading-[60px] ">
          {benefits.title}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-screen-2xl mx-auto mt-10 gap-y-8 gap-x-32">
            {Object.entries(benefits.elements).map(([key, value]) => (
            <div
              key={key}
              className="inline-flex flex-col justify-start items-start gap-3.5 hover:bg-white dark:hover:bg-transparent hover:text-black hover:cursor-none px-8 py-6 transition-all duration-300 ease-in-out rounded-2xl text-stone-50 dark:text-stone-600 group"
            >
              <div className="inline-flex justify-start items-center gap-2.5 lg:translate-x-[-40px] group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                <span className="lg:opacity-0 group-hover:opacity-100 justify-start text-2xl lg:text-3xl font-medium leading-10 transition-all duration-300 ease-in-out">
                  {value.emoji}
                </span>
                <h2 className="justify-start text-2xl lg:text-3xl font-medium leading-10 text-[#FFFAF5CC] dark:text-stone-800 group-hover:text-black transition-all duration-300 ease-in-out">
                  {value.title}
                </h2>
              </div>
              <p className="self-stretch justify-start lg:text-lg text-start font-normal lg:max-w-3/4 text-[#FFFAF580] dark:text-stone-700 group-hover:text-[#00000080] transition-all duration-300 ease-in-out">
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
                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[20rem] lg:text-[25rem] font-bolt text-orange-200/30 dark:text-orange-200/5 leading-none pointer-events-none z-0"
                  >{step.number}</motion.div>

                  {/* Text Content - Fixed to viewport center */}
                  <motion.div
                    style={{ y: textY, opacity }}
                    className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center gap-6 text-center max-w-2xl px-6"
                  >
                    <h2 className="text-4xl lg:text-6xl font-semibold text-stone-800 dark:text-stone-200 leading-tight">
                      {step.title}
                    </h2>
                    <p className="text-lg lg:text-xl text-stone-600 dark:text-stone-400 max-w-lg leading-relaxed">
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
      <section className="min-h-[100vmin] flex flex-col items-center justify-center mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-full z-[10]">
          <div className="flex flex-col items-center justify-center max-w-screen-xl text-center gap-y-6 px-6">
            <h2 className="justify-start text-orange-400 dark:text-orange-300 text-3xl lg:text-6xl font-semibold">
              {openness.title}
            </h2>
            <p className="text-center justify-start text-stone-400 text-lg lg:text-2xl font-normal">
              {openness.description}
            </p>
          </div>

          {/* Globe */}
          <div className="mb-[-20vh]">
            <ClippedDiv />
          </div>
        </div>
      </section>
      <div className="w-full h-[6vh] bg-[#1B0D00] dark:bg-orange-200"></div>

      <section id="download" className="min-h-[70vh] flex items-center justify-center mx-auto bg-[#1B0D00] dark:bg-orange-200 relative">
          <div className="flex flex-col lg:flex-row w-full items-center justify-center lg:justify-between text-center gap-y-6 max-w-screen-2xl mx-auto">
            <div className="flex flex-col items-center lg:items-start gap-y-[20px]">
              <div className="text-stone-50 dark:text-stone-800 text-4xl lg:text-8xl font-semibold lg:text-start lg:leading-[150px]">Ready to begin?</div>
              <div className="text-stone-400 dark:text-stone-700 text-base lg:text-2xl font-normal text-center lg:text-start lg:leading-9">OtaMapSF is available on iOS and Android—download once, explore San Francisco with ease.</div>
            </div>

            <div>
              {detectOS() === 'iOS' || detectOS() === 'Android' ? (
                <a
                  className="px-8 py-3 bg-orange-300/60 dark:bg-orange-400 rounded-[20px] inline-flex justify-center items-center gap-2 text-white dark:text-orange-950 text-lg lg:text-xl font-medium"
                  href={home.downloadLink}
                >
                  {home.downloadText}
                </a>
              ) : (
                <div className="flex flex-col items-center gap-y-6">
                  <div className="text-orange-400/70 dark:text-orange-600/50 text-lg lg:text-xl font-normal">Available on iOS and Android</div>
                  <button
                    className="px-8 py-3 bg-orange-400 rounded-[20px] inline-flex justify-center items-center gap-2 text-white dark:text-orange-950 text-lg lg:text-xl font-medium"
                    onClick={() => window.location.href = home.downloadLink}
                  >
                    {home.downloadText}
                  </button>
                </div>

              )}
            </div>
          </div>
      </section>

      <footer>
        <div className="bg-[#1B0D00] dark:bg-orange-200 text-stone-50 dark:text-stone-800 text-center pb-6">
          <p className="text-sm lg:text-base opacity-70">Made with ❤️ by students from Otaniemi</p>
          <p className="text-xs lg:text-sm mt-2 opacity-50">© {new Date().getFullYear()} {general.organizationName}. All rights reserved.</p>
          <div className="mt-2">
            <a href="/privacy-policy" className="hover:underline text-xs lg:text-sm opacity-50">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
