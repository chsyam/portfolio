import Header from "./Components/header";
import Home from "./Components/Home";
import Explore from "./Components/Explore";
import Work from "./Components/Work";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import AboutMe from "./Components/AboutMe";
import Qualification from "./Components/Qualification";
import Footer from "./Components/Footer";
import ScrollUp from "./Components/ScrollUp";

function App() {
  return (
    <div className="App font-poppins bg-[#f3e8df] h-full">
      <Header />
      <Home />
      <Explore />
      <Work />
      <Skills />
      <Achievements />
      <Projects />
      <AboutMe />
      <Qualification />
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
