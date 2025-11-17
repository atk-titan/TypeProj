"use client";

const NavBar = ({ onAction }: { onAction: (str: string) => void }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="font-logo text-foreground text-3xl tracking-widest">
        <span>Key</span>
        <span className="to-foreground bg-linear-to-b from-[#FF6B00] via-[#FF3B30] bg-clip-text text-transparent">
          Blitz
        </span>
      </div>

      <div className="text-sm font-body flex items-center gap-6 font-medium tracking-widest">
        <div className="cursor-pointer" onClick={() => onAction("single")}>
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
