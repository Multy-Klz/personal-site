import React from "react";
import imagem from "../../public/images/escritorio.jpg";
import Image from "next/image";

export default function ProjectCard({ href, source, name, description }) {
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
      <div className="flex flex-col w-1/2 justify-between px-2 leading-normal">
        <h5 className="mb-2 text-2xl  font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
        </p>
      </div>
    </a>
  );
}