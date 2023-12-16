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
import "./Components/styles/header.css";
import { useRef } from "react";

import {
	AboutLogo,
	CirtificationsLogo,
	ContactLogo,
	ExperienceLogo,
	HomeLogo,
	ProjectsLogo,
	SkillsLogo,
} from "./Components/svgs";

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
		<div className="bg-[#f3e8df] h-full">
			<div className="header h-[65px] bg-[red] flex justify-center flex-nowrap">
				<div
					className="cursor-pointer mx-[25px] text-[#5E3212] font-poppins text-[25px] flex flex-nowrap"
					onClick={HomeClickHandler}
				>
					<span className="pt-[7px] pr-[4px]">
						<HomeLogo />
					</span>
					<span>Home</span>
				</div>
				<div
					className="cursor-pointer  mx-[25px] text-[#5E3212] font-poppins text-[25px] flex flex-nowrap"
					onClick={() => scrollHandler(experience_ref)}
				>
					<span className="pt-[7px] pr-[4px]">
						<ExperienceLogo />
					</span>
					<span>Experience</span>
				</div>
				<div
					className="cursor-pointer  mx-[25px] text-[#5E3212] font-poppins text-[25px] flex flex-nowrap"
					onClick={() => scrollHandler(skills_ref)}
				>
					<span className="pt-[7px] pr-[1px]">
						<SkillsLogo />
					</span>
					<span>Skills</span>
				</div>
				<div
					className="cursor-pointer  mx-[25px] text-[#5E3212] font-poppins text-[25px] flex flex-nowrap"
					onClick={() => scrollHandler(projects_ref)}
				>
					<span className="pt-[7px] pr-[1px]">
						<ProjectsLogo />
					</span>
					<span>Projects</span>
				</div>
				<div
					className="cursor-pointer  mx-[25px] text-[#5E3212] font-poppins text-[25px] flex flex-nowrap"
					onClick={() => scrollHandler(achievements_ref)}
				>
					<span className="pt-[7px] pr-[1px]">
						<CirtificationsLogo />
					</span>
					<span>Cirtifications</span>
				</div>
				<div
					className="cursor-pointer  mx-[25px] text-[#5E3212] font-poppins text-[25px] flex flex-nowrap"
					onClick={() => scrollHandler(about_ref)}
				>
					<span className="pt-[7px] pr-[1px]">
						<AboutLogo />
					</span>
					<span>About</span>
				</div>
				<div
					className="cursor-pointer  mx-[25px] text-[#5E3212] font-poppins text-[25px] flex flex-nowrap"
					onClick={() => scrollHandler(contact_ref)}
				>
					<span className="pt-[7px] pr-[1px]">
						<ContactLogo />
					</span>
					<span>Contact</span>
				</div>
			</div>
			<div>
				<div ref={home_ref}>
					<Home />
				</div>
				<div>
					<Explore />
				</div>
				<div ref={experience_ref}>
					<Work />
				</div>
				<div ref={skills_ref}>
					<Skills />
				</div>
				<div ref={projects_ref}>
					<Projects />
				</div>
				<div ref={achievements_ref}>
					<Achievements />
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
		</div >
	);
}

export default App;
