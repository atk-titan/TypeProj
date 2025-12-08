"use client";

import { useState } from "react";
import DisplayText from "./DisplayText";
import ArcMaskComponent from "./Arc";
import Graph from "./Graph";

const SinglePlayerPanel = ({ paragraph }: { paragraph: string }) => {
  const [input, setInput] = useState("");
  const [accuracy, setAccuracy] = useState(100);

  const accuracyChecker = (typed: string) => {
    const l = typed.length;

    if (l === 0) {
      setAccuracy(100);
      return;
    }

    let mismatch = 0;

    for (let i = 0; i < l; i++) {
      if (typed[i] !== paragraph[i]) mismatch++;
    }

    const acc = Math.floor(((l - mismatch) / l) * 100);
    setAccuracy(acc);
  };

  const onChange = (str: string) => {
    setInput(str);
    accuracyChecker(str); 
  };

  return (
    <div className="w-full">
      <div className=" h-fit w-fit p-4 rounded-xl bg-neutral-100 shadow-xl hover:shadow-transparent hover:cursor-pointer">
        <div className="font-body tracking-wider font-medium text-xl pb-3">
          Accuracy:
        </div>
        <ArcMaskComponent progress={accuracy} className="h-20 font-body" />
      </div>
        <Graph />
      <DisplayText paragraph={paragraph} input={input} setInput={onChange} />
    </div>
  );
};

export default SinglePlayerPanel;
