import Image from "next/image";
import Link from "next/link";
import GrassImage from "../../public/images/bence-balla-schottner-fdSJH2f7E8I-unsplash.jpg";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="w-screen h-[500px] overflow-hidden z-0">
          <Image src={GrassImage} alt="grass" />
        </div>
        <p className="text-white absolute text-4xl pt-[25px] pl-[25px] lg:text-[100px] lg:pt-[200px] lg:pl-[100px]">Crocket Landscaping</p>
      </div>
    </>
  );
}
