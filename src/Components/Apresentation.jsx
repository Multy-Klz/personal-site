import React from "react";
import Image from "next/image";
import profile from "../../public/images/profile.png";
import Background from  './../../public/images/bg.svg';

export default function Apresentation() {
  return (
    <div className="flex flex-row h-full   w-full justify-center items-center my-10 px-10">
      <div className="w-1/2 flex justify-center">
        <div className="relative top-0 hidden md:block">
          <div className=" absolute  animate-color-change bottom-1 right-1 scale-75 translate-x-24 translate-y-10">
            <Image src={Background} alt="Background" width={500} height={500}  />
          </div>

          <svg className="mask absolute bottom-0">
            <defs>
              <clipPath id="svgMask">
                <path
                  d="M 300 0 L 0 0 L 0 220.992188 C 0 220.996094 0 221 0 221.003906 L 0 222.820312 L 0.0429688 222.8125 C 0.578125 234.019531 6.101562 247.40625 19.855469 262.117188 C 40.199219 284.523438 100.992188 320.746094 181.421875 286.390625 C 264.621094 250.847656 297.445312 200.8125 299.917969 164.332031 L 300 164.316406 L 300 162.921875 C 300.097656 160.863281 300.09375 158.855469 300 156.894531 Z M 300 0 "
                  fill="#72AF5D"
                />
              </clipPath>
            </defs>
          </svg>

          <div
            className="relative bottom-0 h-full"
            id="profile-image-container"
          >
            <Image
              className=""
              id="profile-image"
              src={profile}
              width={300}
              height={300}
              alt="profile"
            />
          </div>
        </div>
        <div className="flex w-3/4 justify-center md:hidden">
          <Image
            className=""
            id="profile-image-backup"
            src={profile}
            width={300}
            height={300}
            alt="profile"
          />
        </div>
      </div>
      <div className="w-1/2">
        <p className="font-bold text-right md:text-left">Hi, my name is</p>
        <p className="md:text-8xl text-4xl text-right md:text-left font-bold m-0">
          Julio Santana
        </p>
        <p className="md:text-base text-right md:text-left text-[10px] max-w-sm ">
          I live in Brasil and I’m a Full Stack Web Developer specializing in
          building and designing awesome experiences.
        </p>
      </div>
    </div>
  );
}
