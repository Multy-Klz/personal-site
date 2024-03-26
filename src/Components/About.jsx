import React from "react";
import { gray } from "../app/colors";
import AboutStack from "./AboutStack";
import AboutSection from "./AboutSection";

export default function About() {
    return (
        <div className="grid grid-rows-1 md:grid-cols-2 h-full w-full px-12 py-6 text-slate-100" style={{backgroundColor: gray}}>
            <AboutSection />
            <AboutStack />
        </div>
    )
}