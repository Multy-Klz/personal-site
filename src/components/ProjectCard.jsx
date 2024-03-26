import React from "react";
import Image from "next/image";

export default function ProjectCard({ href, source, name, description, isDesktop }) {
  
  return (
    <a
      href="#"
      className="mx-10  my-4 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl transition duration-500 ease-in-out transform hover:shadow-green"
    >
      <div className="object-fill w-full  rounded-t-lg md:h-64 md:w-1/2" >
        <Image
          className="object-cover h-full rounded-t-lg   md:rounded-none md:rounded-s-lg"
          src={source}
          alt={name}
          width={300}
          height={500}
        />
      </div>
      <div className={`flex flex-col ${isDesktop ? "w-1/2" : "w-4/5"} justify-between px-2 leading-normal`}>
        <h1 className={`mb-2 ${isDesktop ? "text-2xl" : "text-xl"}  font-bold tracking-tight text-gray-900 `}>
          {name}
        </h1>
        {isDesktop && (
          <p className="mb-3 font-normal text-gray-900">
            {description}
          </p>
        )}
      </div>
    </a>
  );
}
