"use client";
import { useState, useRef, useEffect } from "react";
import { CiGlobe } from "react-icons/ci";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  const [wpm, setWpm] = useState(0);
  const textRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const el = textRef.current;
    if (!el) return;

    const fullHTML = el.innerHTML;
    const fullText = el.textContent || "";
    el.innerHTML = "";

    const ghost = document.createElement("div");
    ghost.innerHTML = fullHTML;

    const nodes: Node[] = [];
    ghost.childNodes.forEach((node) => nodes.push(node.cloneNode(true)));

    // GSAP timeline to sync typing + WPM
    const tl = gsap.timeline();

    // WPM counter start
    const counter = { value: 0 };
    const targetWpm = 92; // final value

    // Typing effect
    tl.to(
      {},
      {
        duration: 2,
        ease: "none",
        onUpdate: function () {
          const progress = this.progress();
          const charCount = Math.floor(progress * fullText.length);

          let currentText = "";
          let count = 0;

          nodes.forEach((node) => {
            if (node.nodeType === Node.TEXT_NODE) {
              const text = node.textContent || "";
              if (count < charCount) {
                currentText += text.substring(0, charCount - count);
              }
              count += text.length;
            } else if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement;
              const text = element.textContent || "";
              if (count + text.length < charCount) {
                currentText += element.outerHTML;
              } else if (count < charCount) {
                const visibleText = text.substring(0, charCount - count);
                currentText += `<${element.tagName.toLowerCase()} class="${element.className}">${visibleText}</${element.tagName.toLowerCase()}>`;
              }
              count += text.length;
            }
          });

          el.innerHTML = currentText;
        },
        onComplete: function () {
          blinkCursor(el);
        },
      },
    );

    // WPM count-up animation (starts at same time)
    tl.to(
      counter,
      {
        value: targetWpm,
        duration: 2,
        ease: "power1.out",
        onUpdate: () => setWpm(Math.floor(counter.value)),
      },
      0,
    ); // start at same time as typing

    // Cursor blinking
    function blinkCursor(target: HTMLElement) {
      gsap.to(target, {
        borderColor: "transparent",
        duration: 0.4,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });
    }
  }, []);

  return (
    <div className="text-foreground mt-10 flex gap-2">
      <div className="relative flex w-fit flex-col items-end">
        <h1
          ref={textRef}
          className="font-hero border-foreground absolute inset-0 h-fit w-fit overflow-hidden border-r-2 text-[8vw] font-bold whitespace-nowrap"
        >
          Fingers on{" "}
          <span className="to-foreground bg-linear-to-b from-[#FF6B00] via-[#FF3B30] bg-clip-text text-transparent">
            Fire
          </span>
        </h1>
        <h1 className="font-hero w-fit overflow-hidden border-r-4 text-[8vw] font-bold whitespace-nowrap opacity-0">
          Fingers on{" "}
          <span className="to-foreground bg-linear-to-b from-[#FF6B00] via-[#FF3B30] bg-clip-text text-transparent">
            Fire
          </span>
        </h1>
        <div className="md:[50vw] text-md font-body w-full text-right text-xl leading-8 tracking-widest lg:w-[35vw]">
          Race against time and rivals in the ultimate typing showdown. Feel the
          heat as every keystroke fuels your fire
        </div>

        <div className="pt-4 hover:translate-y-0.5">
          <button className="bg-foreground text-background font-body flex cursor-pointer items-center gap-1 rounded px-3 py-2 text-sm tracking-widest">
            <CiGlobe className="text-xl" />
            Play Globally
          </button>
        </div>
      </div>

      <div className="shadow-foreground border-foreground font-body mt-8 h-fit rounded border p-1.5 text-sm tracking-wide shadow-md/20 transition-all">
        {wpm} WPM
      </div>
    </div>
  );
};

export default Hero;
