"use client";

import { useState } from "react";

interface DisplayTextProps {
  paragraph: string;
}

const DisplayText = ({ paragraph }: DisplayTextProps) => {
  const [input, setInput] = useState("");

  return (
    <div className="flex flex-col gap-4 font-body leading-loose text-xl">
      <div className="absolute w-full p-4 text-lg text-neutral-500">
        {paragraph}
      </div>

      {/* Input box where user types */}
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-4 text-lg outline-none placeholder:text-foreground z-30"
      />
    </div>
  );
};

export default DisplayText;
