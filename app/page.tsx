import Hero from "@/component/Hero";
import Modal from "@/component/Modal";
import NavBar from "@/component/NavBar";
import Para from "@/component/Para";

export default function Home() {

  return (
    <div className="bg-background relative h-screen w-screen">
      <div className="relative m-auto max-w-10/12 py-3">
        <NavBar />
        <Hero />
        <Para />
        {/* <Modal title="Join Room" placeholder="Enter Room Id/name" inputTitle="Room Name:" btnText="Join"/> */}
        <Modal title="Room Creation" placeholder="Default (room123)" inputTitle="Room Name (Optional):" btnText="Create"/>
      </div>
      <div
        id="texture"
        className="pointer-events-none absolute inset-0 bg-repeat mix-blend-multiply"
      ></div>
    </div>
  );
}
