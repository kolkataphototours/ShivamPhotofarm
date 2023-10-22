"use client";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";
import details from "../../data/Films/details.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const GlassmorphicImage = ({ index, cla }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Link
      data-aos={`${cla}`}
      data-aos-duration="500"
      href={`/films/${index}`}
      className="relative m-4 w-11/12 h-11/12 shadow-md shadow-gray-500 overflow-hidden"
    >
      <div className=" flex items-center justify-center ">
        <Image
          src={require(`../../data/Films/Images/${details[index].link}`)}
          alt="Your Image"
          class="w-full h-full object-cover"
          height={500}
          width={500}
        />
      </div>
      <div class="absolute inset-0"></div>
      <div>
        <p className="flex ">
          <h1 class=" text-white text-lg sm:text-xl md:text-2xl font-sang text-center font-sang  font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {details[index].place}
            <br />
            {details[index].name}
          </h1>
        </p>
      </div>
    </Link>
  );
};

export default GlassmorphicImage;
