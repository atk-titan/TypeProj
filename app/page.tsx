"use client";
import Hero from "@/component/Hero";
import NavBar from "@/component/NavBar";
import Para from "@/component/Para";
import { useEffect, useState } from "react";

export default function Home() {
  const [toggle, setToggle] = useState("");

  useEffect(() => {
    console.log(toggle);
  }, [toggle]);

  return (
    <div className="bg-background relative h-screen w-screen">
      <div className="m-auto max-w-10/12 py-3">
        <NavBar setToggle={setToggle} />
        <Hero />
        <Para />
      </div>
      <div
        id="texture"
        className="pointer-events-none absolute inset-0 bg-repeat mix-blend-multiply"
      ></div>
    </div>
  );
}
