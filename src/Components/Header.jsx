import React from "react";
import HeaderItem from "./HeaderItem";
import { gray } from "../app/colors";
import MenuBurger from "./MenuBurger";
import localFont from 'next/font/local'
 

const myFont = localFont({ src:  "./../../public/fonts/Early-GameBoy.ttf" })

export default function Header() {
  return (
    <>
      <header className="w-full">
        <div
          className={`flex flex-row place-content-between min-w-full px-6 text-slate-300 py-6 md:px-12 text-base ${myFont.className} border-b-4 border-blue-500`}
          style={{ backgroundColor: gray }}
        >
          <div>
            <p>Multy_Klz</p>
          </div>
          <div className="hidden md:flex flex-row justify-between">
            <HeaderItem text="About Me" />
            <HeaderItem text="Projects" />
            <HeaderItem text="Contact" />
          </div>

          <div className="flex md:hidden flex-row">
            <MenuBurger />
          </div>
        </div>
      </header>
    </>
  );
}
