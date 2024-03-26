import React from "react";
import { gray, blue } from "../app/colors";
import SocialMediaInfo from "./SocialMediaInfo";
import { MdOutlineEmail  } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import localFont from 'next/font/local'
 

const myFont = localFont({ src:  "./../../public/fonts/Early-GameBoy.ttf" })

export default function Contact() {
    return (
        <div className="h-full w-full px-12 py-6 pb-6   text-slate-100" style={{backgroundColor: gray}}>
            <h1 className={`${myFont.className}`} style={{ color: blue, paddingBottom: '12px' }}>Contact Me</h1>
            <div className="grid grid-cols-12 gap-1">
                <div className="col-span-8 col-start-1 md:col-span-2">
                    <SocialMediaInfo href={"https://github.com/Multy-Klz"} Component={FaGithub}  name={"Github - Multy-Klz"} />
                    <SocialMediaInfo  href={"https://www.linkedin.com/in/julio-santana-292452218/"} Component={FaLinkedin}  name={"LinkedIn Profile"} />
                    <SocialMediaInfo  href={"https://mail.google.com/mail/?view=cm&fs=1&to=multyroom@gmail.com&su=Olá Julio O/&body=Descreva seu assunto aqui.."} Component={MdOutlineEmail} name={"multyroom@gmail.com"} />
                </div>
            </div>
        </div>
    )
}
// https://mail.google.com/mail/?view=cm&fs=1&to=multyroom@gmail.com&su=Olá Julio&body=BODY