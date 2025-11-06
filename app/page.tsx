import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-screen relative bg-background ">
      <div className="absolute inset-0 mix-blend-multiply bg-repeat pointer-events-none">
        <Image
          src="/paper_texture.jpeg"
          alt="texture"
          height={50}
          width={50}
        ></Image>
      </div>
    </div>
  );
}
