import React from "react";
import Stack from "./Stack";

import { blue } from "../app/colors";
import stacks from "../../public/stacks.json";
import localFont from 'next/font/local'
 

const myFont = localFont({ src:  "./../../public/fonts/Early-GameBoy.ttf" })

export default function AboutStack() {
    return (
        <div className="flex flex-col px-3 text-center justify-center items-center">
                <h1 className={`${myFont.className}`} style={{ color: blue }}>My Stack</h1>
            <div className="flex flex-row md:px-12 justify-center flex-wrap md:w-3/4">
                    {
                        stacks.map((stack, index) => {
                            return (
                                <Stack key={index} href={stack.href} source={stack.source} name={stack.name} />
                            )
                        })
                    }
            </div>
        </div>
    )
}