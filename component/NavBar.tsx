const NavBar = ({ setToggle }: { setToggle: ( val:string )=> void }) => {

  return (
    <div className="flex items-center justify-between">
      <div className="font-logo text-foreground text-3xl tracking-widest">
        <span>Key</span>
        <span className="to-foreground bg-linear-to-b from-[#FF6B00] via-[#FF3B30] bg-clip-text text-transparent">
          Blitz
        </span>
      </div>
      <div className="font-body md:text-md flex items-center gap-2 text-sm font-medium tracking-widest sm:gap-8">
        <div className="cursor-pointer transition-all duration-200 hover:underline">
          Single Player
        </div>
        <div
          className="border-foreground cursor-pointer rounded border p-2 transition-all duration-200 hover:underline"
          onClick={() => setToggle("create")}
        >
          Create Room
        </div>
        <div
          className="border-foreground bg-foreground text-background cursor-pointer rounded border p-2 transition-all duration-200 hover:underline"
          onClick={() => setToggle("join")}
        >
          Join Room
        </div>
      </div>
    </div>
  );
};

export default NavBar;
