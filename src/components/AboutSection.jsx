import React from "react";
import { blue } from "../app/colors";
import localFont from 'next/font/local'
 

const myFont = localFont({ src:  "./../../public/fonts/Early-GameBoy.ttf" })

export default function AboutSection() {
  return (
    <div id="about-section">
      <h1 className={`${myFont.className}`} style={{ color: blue }}>
        About Me
      </h1>
      <div className="py-3">
        <div className=" flex flex-col gap-3">
          <p>
            Sou formado em Engenharia da Computação, entusiasta da área de
            segurança da informação e desenvolvimento de jogos. Atuo no
            desenvolvimento web, construindo soluções que envolvam e integrem as
            mais diversas tecnologias para cativar o usuário e criar
            experiências únicas.
          </p>
          <p>
            Produzi um site com foco em ajudar no aprendizado de algoritmos de
            exclusão mútua em sistemas distribuídos, desenvolvendo Explorable
            Explanations com animações e interatividade.
          </p>
          <p>
            Para isso, foi utilizado a biblioteca D3.js. Mais detalhes sobre
            este projeto pode ser consultado no meu{" "}
            <a
              className="font-bold text-blue-500"
              href="https://multy-klz.github.io/Mutual-Exclusion-Algorithms-Using-Explorable-Explanations//"
            >
              Github
            </a>
            .
          </p>
          <p>
            Possuo conhecimento em prototipação, design gráfico e ilustração.
          </p>
        </div>
      </div>
    </div>
  );
}
