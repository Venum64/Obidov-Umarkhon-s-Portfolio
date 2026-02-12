import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Contacts from './components/Contacts/Contacts'
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services'

const App = () => {
  return (
    <div>
      <header>
        <Hero />
      </header>
      <main>
        <About />
        <Skills />
        <Services />
        <Portfolio />
      </main>
      <footer>
        <Contacts />
      </footer>
    </div>
  )
}

export default App