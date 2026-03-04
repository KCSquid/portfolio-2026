"use client";

import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Home() {
  const [aboutOpacity, setAboutOpacity] = useState(0);
  const [visibleWords, setVisibleWords] = useState(0);
  const [quoteIndex, setQuoteIndex] = useState(0);

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
      const scrollY = window.scrollY;
      const docHeight =
        (document.documentElement.scrollHeight - window.innerHeight) / 4.5;
      const scrollPercent = docHeight > 0 ? (scrollY * 1.25) / docHeight : 0;
      setAboutOpacity(scrollPercent);
      const wordCount = words.length;
      setVisibleWords(Math.floor(scrollPercent * wordCount) - 6);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [words.length]);

  return (
    <div className="flex flex-col max-w-screen h-[600vh] items-center bg-[#f0f0f0]">
      <div
        className="fixed w-full h-screen p-4 sm:p-8 flex items-center justify-center bg-[#f0f0f0]"
        style={{
          opacity: 1 - aboutOpacity ** 3 * 0.8,
          marginTop: 20 * aboutOpacity ** 1.8,
        }}
      >
        <div className="w-full h-full relative flex flex-col items-center justify-center">
          <div className="w-full flex flex-col sm:flex-row justify-between items-end gap-2">
            <h1 className="opacity-0 sm:-mb-5 -mb-10.5 text-5xl sm:text-8xl -ml-0.5">
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
          <div className="bg-[url('/cncutout.png')] z-100 absolute w-full mt-[calc(6rem-1.25rem)] h-full bg-center bg-cover"></div>
          <h1
            className="text-5xl sm:text-9xl absolute stroke text-white/25 opacity-60 font-sans top-[27%] text-center"
            style={{
              marginTop: 10 * aboutOpacity ** 1.1,
            }}
          >
            jahvon cockburn
          </h1>
        </div>
      </div>
      <div className="h-screen"></div>
      <div className="w-full h-[550vh] mt-10 sm:mt-20 bg-[#0e0e0e] z-10 flex flex-col items-center rounded-t-[2.5rem]">
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
                      ? `rgba(86,180,171,${aboutOpacity})`
                      : `rgba(255,255,255,${aboutOpacity})`,
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
              <button className="cursor-pointer px-6 mt-4 py-2.5 border self-end border-white/25 rounded-full hover:text-black transition-colors duration-200 hover:bg-[rgba(86,180,171)] hover:border-[rgba(86,180,171)]">
                Say Hello
              </button>
            </div>
          </div>
          <Project
            title="Language Coach"
            url="..."
            description="Language Coach is a tool designed to help users improve their language skills through interactive exercises and feedback using Gemini AI. Features include interactive speaking/listening exercises and real-time feedback on pronunciation and grammar."
            image="bg-[url('/language.png')]"
            offset="top-16"
            skills="Next.js, TypeScript, Gemini API, puter.js, daisyUI, Tailwind CSS"
          />
          <Project
            title="Turny Stark"
            url="..."
            description="An algorithm and hardware project for automatically solving a Rubik's Cube. Includes cube rotation logic, servo control, and tuning for precise movements."
            image="bg-[url('/cube.png')]"
            offset="top-[calc(4rem+5rem)]"
            skills="Algorithm Design, Servo Control, Embedded Systems"
          />
          <Project
            title="Virtis"
            url="..."
            description="Virtis, a toy programming language written in TypeScript with Deno to explore parsing, tokenization, and code generation."
            image="bg-[url('/virtis.png')]"
            offset="top-[calc(4rem+10rem)]"
            skills="Deno, TypeScript, Node.js"
          />
          <div className="h-screen absolute top-[500vh] bg-[#f0f0f0] w-full"></div>
        </div>

        <div className="absolute top-[500vh] bg-[#f0f0f0] z-10 w-full h-[120vh] -mt-20 p-16 flex flex-col items-center gap-24 rounded-t-[2.5rem]">
          <div className="flex flex-col sm:flex-row justify-between w-full gap-4">
            <h1 className="font-sans text-5xl sm:text-9xl w-full">contact</h1>
            <h1 className="font-sans text-xl w-full text-right md:block hidden">
              full-stack
              <br />
              software developer
            </h1>
          </div>
          <div className="flex md:flex-row flex-col gap-8 md:gap-0 justify-between w-full">
            <div className="flex flex-col gap-4 w-full">
              <h1 className="font-sans text-3xl">
                get in touch with me or explore further
              </h1>
              <div className="flex gap-8">
                <div className="flex gap-2 sm:gap-4">
                  <a
                    href="https://github.com/jahvon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-[rgba(86,180,171)] hover:border-[rgba(86,180,171)] transition-colors duration-200 border-2 p-2 rounded-full"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://linkedin.com/in/jahvon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-[rgba(86,180,171)] hover:border-[rgba(86,180,171)] transition-colors duration-200 border-2 p-2 rounded-full"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="mailto:jahvon.cockburn@gmail.com"
                    className="hover:bg-[rgba(86,180,171)] hover:border-[rgba(86,180,171)] transition-colors duration-200 border-2 p-2 rounded-full"
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8 w-full">
              <div className="font-alt text-xl sm:text-3xl w-full flex flex-wrap h-fit">
                <h1
                  dangerouslySetInnerHTML={{ __html: quotes[quoteIndex].text }}
                />
              </div>
              <div className="flex gap-12 w-full justify-center">
                <button
                  className="size-12 flex items-center justify-center rounded-full bg-[rgb(86,180,171)]"
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
                  className="size-12 flex items-center justify-center rounded-full bg-[rgb(86,180,171)]"
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
          <div className="w-full flex gap-4 absolute bottom-0 p-16 -z-10">
            <h1 className="font-sans text-3xl sm:text-7xl">
              Jahvon
              <br /> Cockburn
            </h1>
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
      className={`border border-neutral-800 w-full h-fit sticky ${offset} shadow-[0px_-4px_6px_0px_rgba(0,0,0,0.1)] gap-4 flex flex-col p-4 sm:p-8 bg-neutral-900 rounded-3xl mb-[30vh] sm:mb-[50vh]`}
    >
      <div className="flex flex-col sm:flex-row w-full justify-between text-white items-center gap-2">
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
