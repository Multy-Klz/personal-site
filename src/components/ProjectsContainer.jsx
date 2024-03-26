"use client";
import React, { useState, useEffect } from "react";
import { gray } from "../app/colors";
import ProjectSlider from "./ProjectSlider";
import localFont from 'next/font/local'

const myFont = localFont({ src: "./../../public/fonts/Early-GameBoy.ttf" })

export default function ProjectContainer() {
  const [isDesktop, setIsDesktop] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 700);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // call the function initially to set the state based on initial window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    
    <>
      <div className="w-full flex flex-col items-center text-gray-900">

        <div className={`px-12 ${isDesktop ? "py-6" :  "pt-6 pb-3"}`}>
          <h1 className={`${myFont.className}`} style={{ color: gray }}>
            Projects
          </h1>
        </div>
        <div className={`w-5/6 h-full ${isDesktop ? "py-12" : "py-2"}`} >
          <ProjectSlider isDesktop={isDesktop} />
        </div>
      </div>
    </>
   
  );
}
