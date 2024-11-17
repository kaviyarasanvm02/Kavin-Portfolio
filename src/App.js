import Intro from "./Components/NavBar/Intro/intro";
import NavBar from "./Components/NavBar/navbar";
import Skills from "./Components/NavBar/Skills/skills";
import Projects from "./Components/Projects/project";
import Education from "./Components/Education/education";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
function App() {
  return (
    <div className="App">
    <NavBar/>
    <Intro/>
    <Skills/>
    <Projects/>
    <Education/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
