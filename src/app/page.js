"use client"
import Header from '../components/Header.jsx'
import Apresentation from '../components/Apresentation.jsx'
import About from '../components/About.jsx'
import Projects from '../components/ProjectsContainer.jsx'
import Contact from '../components/Contact.jsx'
import './globals.css'
import { useRef } from 'react'


export default function Home() {
  const refs = {};
  refs.aboutRef = useRef(null);
  refs.projectsRef = useRef(null);
  refs.contactRef = useRef(null);
  
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-100">
      <Header scrollToSection={scrollToSection} refs={ refs } />  
      <Apresentation />
      <About aboutRef={ refs.aboutRef} />
      <Projects projectsRef={ refs.projectsRef}/>
      <Contact  projectsRef={ refs.contactRef}/>
    </main>
  )
}
