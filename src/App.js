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

import { useRef } from "react";
import { BsSun, BsTelephone } from "react-icons/bs";

function App() {
  const home_ref = useRef();
  const experience_ref = useRef();
  const achievements_ref = useRef();
  const skills_ref = useRef();
  const projects_ref = useRef();
  const contact_ref = useRef();
  const about_ref = useRef();
  const qualif_ref = useRef();

  const scrollHandler = (elemRef) => {
    window.scrollTo({
      top: elemRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  const HomeClickHandler = () => {
    if (window.scrollY < 40) {
      window.location.reload();
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="App font-poppins bg-[#f3e8df] h-full">
      <div className="sticky top-0 bg-[#f3e8df] border border-b-gray-400">
        <div className="flex justify-center mb-[10px]">
          <div className="w-[80%] mt-[20px] flex flex-wrap justify-center">
            <div
              className="cursor-pointer underline underline-offset-2 mx-[25px] text-[#5E3212] font-poppins text-[25px]"
              onClick={HomeClickHandler}
            >
              Home
            </div>
            <div
              className="cursor-pointer underline underline-offset-2 mx-[25px] text-[#5E3212] font-poppins text-[25px]"
              onClick={() => scrollHandler(experience_ref)}
            >
              Experience
            </div>
            <div
              className="cursor-pointer underline underline-offset-2 mx-[25px] text-[#5E3212] font-poppins text-[25px]"
              onClick={() => scrollHandler(skills_ref)}
            >
              Skills
            </div>
            <div
              className="cursor-pointer underline underline-offset-2 mx-[25px] text-[#5E3212] font-poppins text-[25px]"
              onClick={() => scrollHandler(projects_ref)}
            >
              Projects
            </div>
            <div
              className="cursor-pointer underline underline-offset-2 mx-[25px] text-[#5E3212] font-poppins text-[25px]"
              onClick={() => scrollHandler(achievements_ref)}
            >
              Cirtifications
            </div>
            <div
              className="cursor-pointer underline underline-offset-2 mx-[25px] text-[#5E3212] font-poppins text-[25px]"
              onClick={() => scrollHandler(about_ref)}
            >
              About
            </div>
            <div
              className="cursor-pointer underline underline-offset-2 mx-[25px] text-[#5E3212] font-poppins text-[25px]"
              onClick={() => scrollHandler(contact_ref)}
            >
              Contact
            </div>
          </div>
          <div className="w-[20%] mt-[20px] mr-[5%] flex flex-wrap justify-end">
            <div className="p-[10px] text-[20px] border-2 border-[#5E3212] rounded-full w-[45px] h-[45px] mx-[10px] cursor-pointer text-[#5E3212]">
              <BsTelephone />
            </div>
            <div className="p-[10px] text-[20px] border-2 border-[#5E3212] rounded-full w-[45px]  h-[45px] mx-[10px] cursor-pointer text-[#5E3212]">
              <BsSun />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div ref={home_ref}>
          <Home />
        </div>
        <Explore />
        <div ref={experience_ref}>
          <Work />
        </div>
        <div ref={skills_ref}>
          <Skills />
        </div>
        <div ref={achievements_ref}>
          <Achievements />
        </div>
        <div ref={projects_ref}>
          <Projects />
        </div>
        <div ref={about_ref}>
          <AboutMe />
        </div>
        <div ref={qualif_ref}>
          <Qualification />
        </div>
        <div ref={contact_ref}>
          <Footer />
        </div>
        <ScrollUp />
      </div>
    </div>
  );
}

export default App;
