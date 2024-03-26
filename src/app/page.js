import Header from '../components/Header.jsx'
import Apresentation from '../components/Apresentation.jsx'
import About from '../components/About.jsx'
import Projects from '../components/ProjectsContainer.jsx'
import Contact from '../components/Contact.jsx'
import './globals.css'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-100">
      <Header />  
      <Apresentation />
      <About />
      <Projects />
      <Contact  />
    </main>
  )
}
