import Navbar from "./components/Navbar";
import About from "./pages/About";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import TechStacks from "./pages/TechStacks";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <TechStacks />
      <Projects />
      <TechStacks />
    </div>
  );
}

export default App;
