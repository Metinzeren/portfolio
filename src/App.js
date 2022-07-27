import { ToastContainer } from "react-toastify";
import "./App.css";
import { About } from "./PortfolioContainer/AboutMe/About";
import { Contact } from "./PortfolioContainer/ContactMe/Contact";
import { Home } from "./PortfolioContainer/Home/Home";
import Project from "./PortfolioContainer/Projects/Project";
import Skills from "./PortfolioContainer/Skills/Skills";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Home />
      <About />
      <Skills />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
