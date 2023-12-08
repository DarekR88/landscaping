import Image from "next/image";
import Link from "next/link";
import GrassImage from "../../public/images/bence-balla-schottner-fdSJH2f7E8I-unsplash.jpg";
import GardenImage from "../../public/images/ignacio-correia-1_yycyoMT6g-unsplash.jpg";

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="w-screen lg:h-[500px] overflow-hidden z-0">
          <Image src={GrassImage} alt="grass" />
        </div>
        <p className="text-white absolute text-4xl pt-[25px] pl-[25px] lg:text-[100px] lg:pt-[200px] lg:pl-[100px]">
          Crocket Landscaping
        </p>
      </div>
      <div className="max-w-[1200px] flex flex-col lg:flex-row m-auto my-6 lg:my-10">
        <div className="lg:w-[600px] lg:h-[333px] overflow-hidden">
          <Image src={GardenImage} alt="walkway" />
        </div>
        <div className="flex px-4 pt-4 lg:text-xl lg:w-[600px] lg:h-[333px]">
          <p>
            Make your landscaping dreams come true with Crocket Landscaping.
            With our knowledgeable and hardworking staff there is no job too
            big, or too small. Every customer is important to us. Let us help
            you create a beautiful garden of flowers, or a bountiful fruit and
            vegetable garden. Want to revitalize your lawn? We offer aeration,
            weeding, and fertilization services. When it comes to creating and
            maintaining a beautiful home, we have your back.
          </p>
        </div>
      </div>
    </>
  );
}
