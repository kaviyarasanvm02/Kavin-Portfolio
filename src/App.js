import Intro from "./Components/NavBar/Intro/intro";
import NavBar from "./Components/NavBar/navbar";
import Skills from "./Components/NavBar/Skills/skills";
import Projects from "./Components/Projects/project";
import Education from "./Components/Education/education";
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Intro/>
    <Skills/>
    <Projects/>
    <Education/>
    </div>
  );
}

export default App;
