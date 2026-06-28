import Navbar from "./components/layout/Navbar";
import Background from "./components/layout/Background";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";

function App() {

  return (
    <>
      <Background />

      <Navbar />

      <main>
        <Hero />
        <About/>
        <Skills/>
      </main>

    </>
  )
}

export default App;