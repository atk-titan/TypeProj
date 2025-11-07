"use client";
import { useState } from "react";
import { CiGlobe } from "react-icons/ci";

const Hero = () => {
  const [wpm, setWpm] = useState(42);

  return (
    <div className="text-foreground mt-10 flex gap-2">
      <div className="relative flex w-fit flex-col items-end">
        <h1 className="font-hero w-fit text-[8vw] font-bold">
          Fingers on{" "}
          <span className="to-foreground bg-linear-to-b from-[#FF6B00] via-[#FF3B30] bg-clip-text text-transparent">
            Fire
          </span>
        </h1>
        <div className="md:[50vw] text-md font-body w-full text-right text-xl leading-8 tracking-widest lg:w-[35vw]">
          Race against time and rivals in the ultimate typing showdown. Feel the
          heat as every keystroke fuels your fire
        </div>
        <div className="pt-4">
          <button className="bg-foreground text-background font-body flex items-center gap-1 rounded px-3 py-2 text-sm tracking-widest cursor-pointer">
            <CiGlobe className="text-xl" />
            Play Globally
          </button>
        </div>
      </div>
      <div className="shadow-md/20 shadow-foreground border-foreground font-body mt-8 h-fit rounded border p-1.5 text-sm tracking-wide transition-all">
        {wpm} WPM
      </div>
    </div>
  );
};

export default Hero;
