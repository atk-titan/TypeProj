"use client";

import { useRouter } from "next/navigation";

const NavBar = ({ onAction }: { onAction: (str: string) => void }) => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between">
      <div className="font-logo text-foreground text-3xl tracking-widest cursor-pointer"
        onClick={()=> router.push("/")}
      >
        <span>Key</span>
        <span className="to-foreground bg-linear-to-b from-[#FF6B00] via-[#FF3B30] bg-clip-text text-transparent">
          Blitz
        </span>
      </div>

      <div className="font-body flex items-center gap-6 text-sm font-medium tracking-widest">
        <div
          className="cursor-pointer"
          onClick={() => {
            router.push("/single-player");
            onAction("single");
          }}
        >
          Single Player
        </div>
        <div
          className="cursor-pointer border p-2"
          onClick={() => onAction("create")}
        >
          Create Room
        </div>
        <div
          className="bg-foreground text-background cursor-pointer border p-2"
          onClick={() => onAction("join")}
        >
          Join Room
        </div>
      </div>
    </div>
  );
};

export default NavBar;
