"use client"
import { useState } from "react";
import { CiGlobe } from "react-icons/ci";

const Hero = () => {
    const [wpm, setWpm] = useState(42);

  return (
    <div className="text-foreground mt-10 flex gap-2">
      <div className="w-fit flex flex-col items-end relative">
        <h1 className="w-fit font-hero font-bold text-[8vw]">
          Fingers on{" "}
          <span className="bg-linear-to-b from-[#FF6B00] via-[#FF3B30] to-foreground bg-clip-text text-transparent">
            Fire
          </span>
        </h1>
        <div className="w-full md:[50vw] lg:w-[35vw] text-md font-body tracking-widest text-right text-xl leading-8">
          Race against time and rivals in the ultimate typing showdown. Feel the
          heat as every keystroke fuels your fire
        </div>
        <div className="pt-4">
          <button className="py-2 px-3 bg-foreground text-background rounded text-md font-body tracking-widest flex items-center gap-1">
            <CiGlobe className="text-xl"/>
            Play Globally
          </button>
        </div>
      </div>
      <div className="mt-8 border border-foreground p-1.5 h-fit rounded text-sm font-body tracking-wide transition-all">
        {wpm} WPM
      </div>
    </div>
  );
};

export default Hero;
