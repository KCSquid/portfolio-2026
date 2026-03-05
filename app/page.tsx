"use client";

import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { cubicBezier } from "motion";

export default function Home() {
  const [visibleWords, setVisibleWords] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

  const { scrollYProgress } = useScroll();
  const firstScrollProgress = useTransform(scrollYProgress, [0, 0.23], [0, 1]);
  const scrollCurve = useTransform(scrollYProgress, [0, 0.23], [1, 0], {
    ease: cubicBezier(1, 0, 0.8, 0.8),
  });

  const highlightStyle = "color: rgb(44,92,87); font-weight: 500;";
  const quotes = [
    {
      text: `"Education is the passport to the <span style='${highlightStyle}'>future</span>, for tomorrow belongs to those who prepare for it <span style='${highlightStyle}'>today</span>"<span style="color:rgba(0,0,0,0.2)"> — Malcolm X</span>`,
    },
    {
      text: `"And above all, watch with <span style='${highlightStyle}'>glittering eyes</span> the whole world around you because the greatest secrets are always hidden in the most unlikely places. <span style='${highlightStyle}'>Those who don't believe in magic will never find it</span>."<span style="color:rgba(0,0,0,0.2)"> — Roald Dahl</span>`,
    },
    {
      text: `"<span style='${highlightStyle}'>Success</span> is not the key to <span style='${highlightStyle}'>happiness</span>. Happiness is the key to <span style='${highlightStyle}'>success</span>. If you love what you are doing, you will be successful."<span style="color:rgba(0,0,0,0.2)"> — Albert Schweitzer</span>`,
    },
  ];

  const aboutText =
    "I'm a full stack developer with 8+ years of exploring new technologies. I craft sleek, modern web experiences — from first sketch to final launch — with a passion for design, detail, and bringing bold ideas to life.";
  const words = aboutText.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      const wordCount = words.length;
      setVisibleWords(
        Math.floor(firstScrollProgress.get() * 1.25 * wordCount) - 8,
      );
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [words.length, firstScrollProgress]);

  return (
    <div className="flex flex-col max-w-screen items-center bg-[#f0f0f0]">
      <div className="w-full h-screen">
        <motion.div
          className="fixed w-full h-screen p-4 sm:p-8 flex items-center justify-center bg-[#f0f0f0]"
          style={{
            opacity: scrollCurve.get(),
            translateY: `${7 - 7 * scrollCurve.get()}%`,
          }}
        >
          <div className="select-none w-full h-full relative flex flex-col items-center justify-center">
            <div className="w-full flex flex-col sm:flex-row justify-between items-end gap-2">
              <h1 className="opacity-0 font-sans sm:-mb-5 -mb-10.5 text-5xl sm:text-8xl -ml-0.5">
                portfolio
              </h1>
              <h1 className="absolute -ml-0.5 -z-10 bg-[url('/toronto.png')] w-full h-full top-0 left-0 -mb-5 bg-cover bg-clip-text text-transparent font-sans font-bold text-5xl sm:text-8xl">
                portfolio
              </h1>
              <h1 className="bg-[url('/toronto.png')] bg-cover bg-clip-text text-transparent font-alt font tracking-tighter text-base sm:text-xl">
                software developer
              </h1>
            </div>
            <div className="bg-[url('/toronto.png')] w-full h-full bg-center bg-cover rounded-b-3xl"></div>
            <div className="absolute z-100 w-full h-full flex flex-col">
              <div className="opacity-0 w-full flex flex-col sm:flex-row justify-between items-end gap-2">
                <h1 className="font-sans sm:-mb-5 -mb-10.5 text-5xl sm:text-8xl -ml-0.5">
                  portfolio
                </h1>
                <h1 className="bg-[url('/toronto.png')] bg-cover bg-clip-text text-transparent font-alt font tracking-tighter text-base sm:text-xl">
                  software developer
                </h1>
              </div>
              <div className="bg-[url('/cncutout2.png')] w-full h-full bg-center bg-cover"></div>
            </div>
            <motion.h1
              className="text-7xl stroke-thin sm:text-9xl absolute sm:stroke text-white/25 opacity-60 font-sans top-[27%] text-center"
              style={{
                translateY: `${25 - 25 * scrollCurve.get()}%`,
              }}
            >
              jahvon
              <br /> cockburn
            </motion.h1>
          </div>
        </motion.div>
      </div>

      <div className="w-full h-[475vh] mt-10 sm:mt-20 bg-[#0e0e0e] z-10 flex flex-col items-center rounded-t-[2.5rem]">
        <div className="w-full h-full p-4 sm:p-16 flex flex-col items-center gap-4">
          <div className="font-alt md:text-5xl text-4xl w-full flex flex-wrap gap-2 h-fit transition-colors duration-200">
            <span className="text-transparent select-none">000</span>
            {words.map((word, i) => (
              <span
                key={i}
                className="h-fit transition-opacity duration-200"
                style={{
                  opacity: i <= visibleWords ? 1 : 0.1,
                  color:
                    14 <= i && i <= 17
                      ? `rgba(86,180,171,${firstScrollProgress.get()})`
                      : `rgba(255,255,255,${firstScrollProgress.get()})`,
                }}
              >
                {word}
              </span>
            ))}
          </div>
          <div className="w-full h-fit flex justify-end font-alt mb-24">
            <div className="max-w-full md:max-w-2/3 lg:max-w-1/2 flex flex-col text-white/50">
              <h2>
                I&apos;m a 16 year old developer based in Toronto, Canada. 🍁 I
                specialize in building robust, scalable web applications and
                intuitive user interfaces. With a strong foundation in both
                frontend and backend technologies, I turn complex problems into
                elegant solutions. Let&apos;s create something impactful
                together.
              </h2>
              <button
                className="cursor-pointer px-6 mt-4 py-2.5 border sm:self-center border-white/25 rounded-full hover:text-black transition-colors duration-200 hover:bg-[rgba(86,180,171)] hover:border-[rgba(86,180,171)]"
                onClick={() =>
                  window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth",
                  })
                }
              >
                Say Hello
              </button>
            </div>
          </div>
          <Project
            title="Language Coach"
            url="https://github.com/KCSquid/language-coach"
            description="Language Coach is a tool designed to help users improve their language skills through interactive exercises and feedback using Gemini AI. Features include interactive speaking/listening exercises and real-time feedback on pronunciation and grammar."
            image="bg-[url('/language.png')]"
            offset="top-4 sm:top-16"
            skills="Next.js, TypeScript, Gemini API, puter.js, daisyUI, Tailwind CSS"
          />
          <Project
            title="Turny Stark"
            url="https://github.com/KCSquid/turny-stark"
            description="An algorithm and hardware project for automatically solving a Rubik's Cube. Includes cube rotation logic, servo control, and tuning for precise movements."
            image="bg-[url('/cube.png')]"
            offset="top-[calc(1rem+3.5rem)] sm:top-[calc(4rem+5rem)]"
            skills="Algorithm Design, Servo Control, Embedded Systems"
          />
          <Project
            title="Virtis"
            url="https://github.com/KCSquid/virtis"
            description="Virtis, a toy programming language written in TypeScript with Deno to explore parsing, tokenization, and code generation."
            image="bg-[url('/virtis.png')]"
            offset="top-[calc(1rem+7rem)] sm:top-[calc(4rem+10rem)]"
            skills="Deno, TypeScript, Node.js"
          />
        </div>

        <div className="absolute top-[500vh] bg-[#f0f0f0] z-10 w-full h-fit -mt-22 sm:-mt-19 p-16 flex flex-col items-center gap-24 rounded-t-[2.5rem]">
          <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
            <h1 className="font-sans text-5xl sm:text-9xl w-full">contact</h1>
            <h1 className="font-sans text-xl w-full text-right md:block hidden">
              full-stack
              <br />
              software developer
            </h1>
          </div>

          <div className="flex md:flex-row flex-col gap-8 md:gap-0 justify-between w-full">
            <div className="flex flex-col gap-8 md:gap-16 w-full">
              <div className="flex flex-col gap-4 w-full">
                <h1 className="font-sans text-3xl">
                  get in touch with me or explore further
                </h1>
                <div className="flex gap-8">
                  <div className="flex gap-2 sm:gap-4">
                    <a
                      href="https://github.com/kcsquid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-[rgba(86,180,171)] hover:border-[rgba(86,180,171)] transition-colors duration-200 border-2 p-2 rounded-full"
                      aria-label="GitHub"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/jahvon-cockburn-b864b8313"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-[rgba(86,180,171)] hover:border-[rgba(86,180,171)] transition-colors duration-200 border-2 p-2 rounded-full"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={24} />
                    </a>
                    <a
                      href="mailto:kcs@kcsquid.xyz"
                      className="hover:bg-[rgba(86,180,171)] hover:border-[rgba(86,180,171)] transition-colors duration-200 border-2 p-2 rounded-full"
                      aria-label="Email"
                    >
                      <Mail size={24} />
                    </a>
                  </div>
                </div>
              </div>
              <h1 className="font-sans text-3xl sm:text-7xl">
                Jahvon
                <br className="md:block hidden" /> Cockburn
              </h1>
            </div>
            <div className="flex flex-col gap-8 w-full justify-between min-h-3/4">
              <div className="font-alt text-xl sm:text-3xl w-full flex flex-wrap">
                <h1
                  dangerouslySetInnerHTML={{ __html: quotes[quoteIndex].text }}
                />
              </div>
              <div className="flex gap-12 w-full justify-center">
                <button
                  className="size-12 cursor-pointer flex items-center justify-center rounded-full transition-colors duration-200 text-[rgb(86,180,171)] hover:text-black border-2 border-[rgb(86,180,171)] hover:bg-[rgb(86,180,171)]"
                  onClick={() =>
                    setQuoteIndex(
                      (prev) => (prev - 1 + quotes.length) % quotes.length,
                    )
                  }
                  aria-label="Previous quote"
                >
                  <ChevronLeft />
                </button>
                <h1 className="opacity-65 size-12 flex items-center justify-center rounded-full border-2 font-alt">
                  {quoteIndex + 1}
                </h1>
                <button
                  className="size-12 cursor-pointer flex items-center justify-center rounded-full transition-colors duration-200 text-[rgb(86,180,171)] hover:text-black border-2 border-[rgb(86,180,171)] hover:bg-[rgb(86,180,171)]"
                  onClick={() =>
                    setQuoteIndex((prev) => (prev + 1) % quotes.length)
                  }
                  aria-label="Next quote"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Project({
  title,
  url,
  description,
  image,
  offset,
  skills,
}: {
  title: string;
  url: string;
  description: string;
  image: string;
  offset: string;
  skills: string;
}) {
  return (
    <div
      className={`border border-neutral-800 w-full h-fit sticky ${offset} shadow-[0px_-4px_6px_0px_rgba(0,0,0,0.1)] gap-4 flex flex-col p-4 sm:p-8 bg-neutral-900 rounded-3xl mb-[15vh] sm:mb-[35vh]`}
    >
      <div
        className="absolute inset-0 pointer-events-none rounded-3xl opacity-15"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 60%, transparent 100%)",
          zIndex: 0,
        }}
      />
      <div className="flex flex-row w-full justify-between text-white items-center gap-2">
        <h1 className="text-xl sm:text-3xl font-sans">{title}</h1>
        <a
          className="font-alt text-white/50 underline"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github Repository
        </a>
      </div>

      <div className="flex flex-col sm:flex-row w-full justify-between text-white items-center gap-4">
        <div className="flex flex-col gap-4 w-full sm:w-1/2">
          <h1 className="font-alt text-white/50">{description}</h1>
          <h1 className="font-alt text-white/50">
            Skills Used:
            <br />
            <span className="font-medium text-white/75">{skills}</span>
          </h1>
        </div>
        <div
          className={`rounded-2xl w-full sm:w-1/2 max-w-100 aspect-video ${image} bg-cover bg-center`}
        ></div>
      </div>
    </div>
  );
}
