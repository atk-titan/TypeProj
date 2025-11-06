const NavBar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="font-logo text-foreground text-3xl tracking-widest">
        <span>Key</span>
        <span className="bg-linear-to-b from-[#FF6B00] via-[#FF3B30] to-foreground bg-clip-text text-transparent">
          Blitz
        </span>
      </div>
      <div className="font-body font-medium flex items-center sm:gap-8 gap-2 tracking-widest md:text-md text-sm">
        <div className="cursor-pointer hover:underline transition-all duration-200">
          Single Player
        </div>
        <div className="cursor-pointer border border-foreground p-2 rounded hover:underline transition-all duration-200">
          Create Room
        </div>
        <div className="cursor-pointer border border-foreground bg-foreground text-background p-2 rounded hover:underline transition-all duration-200">
          Join Room
        </div>
      </div>
    </div>
  );
};

export default NavBar;
