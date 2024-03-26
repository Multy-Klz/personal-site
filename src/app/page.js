import Header from '../Components/Header.jsx'
import Apresentation from '../Components/Apresentation'
import About from '../Components/About'
import Projects from '../Components/ProjectsContainer.jsx'
import Contact from '../Components/Contact'


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
