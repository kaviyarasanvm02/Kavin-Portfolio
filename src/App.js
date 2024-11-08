import Intro from "./Components/NavBar/Intro/intro";
import NavBar from "./Components/NavBar/navbar";
import Skills from "./Components/NavBar/Skills/skills";
import Projects from "./Components/Projects/project";
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Intro/>
    <Skills/>
    <Projects/>
    </div>
  );
}

export default App;
