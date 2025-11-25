"use client";
import { useState, useEffect, useRef } from "react";

interface DisplayTextProps {
  paragraph: string;
  input: string;
  setInput: (str: string) => void;
}

const DisplayText = ({ paragraph , input , setInput }: DisplayTextProps) => {
  const [caretStyle, setCaretStyle] = useState({ top: 0, left: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= paragraph.length) {
      setInput(e.target.value);
    }
  };

  useEffect(() => {
    const currentSpan = spansRef.current[input.length];

    if (!currentSpan || !containerRef.current) return;

    const spanRect = currentSpan.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    setCaretStyle({
      top: spanRect.top - containerRect.top,
      left: spanRect.left - containerRect.left,
    });
  }, [input]);

  return (
    <div
      ref={containerRef}
      className="font-body relative w-full text-xl leading-loose"
    >
      {/* Paragraph Rendering */}
      <div className="w-full py-4 text-neutral-400">
        {paragraph.split("").map((char, index) => {
          let className = "";

          if (index < input.length) {
            className =
              input[index] === char
                ? "text-foreground"
                : "text-red-600 underline";
          }

          return (
            <span
              ref={(el) => {
                spansRef.current[index] = el;
              }}
              key={index}
              className={className}
            >
              {char}
            </span>
          );
        })}
      </div>

      {/* 🔥 Custom Caret */}
      <div
        className="animate-blink absolute h-6 w-[2px] bg-black"
        style={{
          top: caretStyle.top,
          left: caretStyle.left,
        }}
      />

      {/* Hidden Input */}
      <input
        value={input}
        onChange={handleChange}
        spellCheck={false}
        className="font-body absolute inset-0 h-full w-full bg-transparent py-4 text-xl leading-loose tracking-normal whitespace-pre-wrap text-transparent caret-transparent outline-none selection:bg-transparent"
      />
    </div>
  );
};

export default DisplayText;
