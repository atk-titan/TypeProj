import Hero from "@/component/Hero";
import Para from "@/component/Para";

export default function Home() {

  return (
    <div>
        <Hero />
        <Para />
        {/* <Modal title="Join Room" placeholder="Enter Room Id/name" inputTitle="Room Name:" btnText="Join"/> */}
        {/* <Modal title="Room Creation" placeholder="Default (room123)" inputTitle="Room Name (Optional):" btnText="Create"/> */}
    </div>
  );
}
