"use client";
import React, { useState, useRef, useEffect } from "react";
import { gray } from "../app/colors";
import ProjectSlider from "./ProjectSlider";
import localFont from 'next/font/local'

const myFont = localFont({ src: "./../../public/fonts/Early-GameBoy.ttf" })

export default function ProjectContainer() {
  
  return (
    
    <>
      <div className="w-full flex flex-col items-center">

        <div className="px-12 py-6">
          <h1 className={`${myFont.className}`} style={{ color: gray }}>
            Projects
          </h1>
        </div>
        <div className="w-5/6 h-full py-12" >
          <ProjectSlider />
        </div>
      </div>
    </>
   
  );
}
