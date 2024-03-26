import React from "react";
import { gray, blue } from "../app/colors";
import SocialMediaInfo from "../Components/SocialMediaInfo";
import { MdOutlineEmail  } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import localFont from 'next/font/local'
 

const myFont = localFont({ src:  "./../../public/fonts/Early-GameBoy.ttf" })

export default function Contact() {
    return (
        <div className="h-full w-full px-12 py-6 pb-6   text-slate-100" style={{backgroundColor: gray}}>
            <h1 className={`${myFont.className}`} style={{ color: blue, paddingBottom: '12px' }}>Contact Me</h1>
            <div className="grid grid-cols-12 gap-1">
                <div className="col-span-6 col-start-1 md:col-span-4">
                    <SocialMediaInfo  Component={FaGithub}  name={"Github - Multy-Klz"} />
                    <SocialMediaInfo  Component={FaLinkedin}  name={"LinkedIn Profile"} />
                    <SocialMediaInfo  Component={MdOutlineEmail} name={"multyroom@gmail.com"} />
                    
                </div>
            </div>
        </div>
    )
}
// https://mail.google.com/mail/?view=cm&fs=1&to=multyroom@gmail.com&su=Olá Julio&body=BODY