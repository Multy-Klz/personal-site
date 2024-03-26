"use client";
import React, { useState } from "react";
import HeaderItem from "./HeaderItem";
import { gray } from "../app/colors";

function MenuBurger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>Menu</button>
      {isOpen && (
        <a onClick={() => setIsOpen(!isOpen)}>
          <div
            className="absolute w-full top-0 right-0 border-b-2 border-blue-500 z-10"
            style={{ backgroundColor: gray }}
          >
            <div className="flex flex-col justify-between items-center gap-1 py-2">
              <HeaderItem text="About Me" />
              <HeaderItem text="Projects" />
              <HeaderItem text="Contact" />
              
            </div>
          </div>
        </a>
      )}
    </div>
  );
}

export default MenuBurger;
