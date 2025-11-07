import Hero from "@/component/Hero";
import NavBar from "@/component/NavBar";
import Para from "@/component/Para";

export default function Home() {
  return (
    <div className="h-screen w-screen relative bg-background ">
      <div className="m-auto max-w-10/12 py-3">
        <NavBar />
        <Hero />
        <Para />
      </div>
      <div
        id="texture"
        className="absolute inset-0 mix-blend-multiply bg-repeat pointer-events-none"
      ></div>
    </div>
  );
}
