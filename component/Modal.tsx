"use client";
import { IoIosClose } from "react-icons/io";

const Modal = ({
  title,
  placeholder,
  inputTitle,
  btnText,
}: {
  title: string;
  placeholder: string;
  inputTitle: string;
  btnText: string;
}) => {
  return (
    <div className="bg-foreground/20 fixed inset-0 h-full w-full backdrop-blur-sm">
      <div className="font-hero bg-background text-foreground absolute top-1/4 left-1/2 w-xl -translate-x-1/2 rounded p-5">
        <div className="mb-8 flex justify-between">
          <h1 className="font-hero text-foreground text-2xl font-semibold tracking-wide">
            {title}
          </h1>
          <div className="hover:border-foreground h-fit cursor-pointer rounded-full border border-transparent text-lg font-semibold transition-all duration-200">
            <IoIosClose />
          </div>
        </div>
        <div className="font-body flex flex-col rounded border border-neutral-400 p-2 tracking-widest">
          <label htmlFor="inputBox" className="text-foreground mb-1 text-xs">
            {inputTitle}
          </label>
          <input
            name="inputBox"
            className="placeholder:font-body placeholder:text-sm placeholder:text-neutral-500 focus:outline-0"
            type="text"
            placeholder={placeholder}
          />
        </div>
        <div className="mt-6 flex items-center gap-4 text-sm font-semibold tracking-wider">
          <button className="border-foreground bg-foreground text-background w-24 rounded border py-1 cursor-pointer">
            {btnText}
          </button>
          <button className="text-foreground/90 border-foreground w-24 rounded border py-1 cursor-pointer">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
