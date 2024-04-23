import React from "react";

export default function HeaderItem({ text, targetId, scrollToSection}) {
    return (
    <div className={"mx-2"} onClick={() => scrollToSection(targetId)}>
           
            <p>{text}</p>
       
    </div>
    )
}