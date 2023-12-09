"use client";

import Image from "next/image";
import Link from "next/link";
import GrassImage from "../../../public/images/prosha-amiri-J-eAZWqkVB8-unsplash.jpg";
import BeforeImage from "../../../public/images/dan-meyers-Vwdq_KoW74E-unsplash.jpg";
import AfterImage from "../../../public/images/marta-bibi-N-lK5xhXIug-unsplash.jpg";

export default function Portfolio() {
  return (
    <>
      <div className="flex">
        <div className="w-screen lg:h-[500px] overflow-hidden z-0">
          <Image src={GrassImage} alt="grass" />
        </div>
        <p className="text-white absolute text-4xl pt-[25px] pl-[25px] lg:text-[100px] lg:pt-[200px] lg:pl-[100px]">
          Portfolio
        </p>
      </div>
      <div className="flex flex-col lg:flex-row max-w-[1200px] m-auto mt-6 lg:mt-10">
        <div className="w-screen lg:w-[600px] lg:h-[390px] overflow-hidden">
          <p className="text-center text-xl lg:text-4xl">Before</p>
          <Image src={BeforeImage} alt="gross house" />
        </div>
        <div className="w-screen lg:w-[600px] lg:h-[390px] overflow-hidden">
          <p className="text-center text-xl lg:text-4xl">After</p>
          <Image src={AfterImage} alt="gross house" />
        </div>
      </div>
      <p className="text-center mx-4 my-6">
        This house was really jacked up. It took 3 days of back breaking labor,
        but we finally got it looking pretty good I think.
      </p>
    </>
  );
}
