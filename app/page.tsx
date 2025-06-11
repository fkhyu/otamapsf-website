import Image from "next/image";
import { home } from "../lib/content";

export default function Home() {
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
      <section className="bg-[#1B0D00] min-h-[100dvh] flex items-center justify-center">
        test2
      </section>
    </div>
  );
}
