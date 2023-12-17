import { Cpp } from "./skills/c++";
import { Css } from "./skills/css";
import { Docker } from "./skills/docker";
import { Html } from "./skills/html";
import { Java } from "./skills/java";
import { JavaScript } from "./skills/javascript";
import { NextJS } from "./skills/next-js";
import { Python } from "./skills/python";
import { React } from "./skills/react";
import { MySQL } from "./skills/mysql";
import { SpringBoot } from "./skills/spring-boot";
import { Kubernetes } from "./skills/kubernetes";
import "./styles/skills.css"

const Skills = () => {
	return (
		<div className="">
			<div className="text-4xl text-[#5E3212] font-poppins my-[50px] text-center">
				skills
			</div>
			<div className="skills">
				<div className="all_skills">
					<div
						className="skill_card"
					>
						<div className="image">
							<Cpp width={110} height={110} />
						</div>
						<div className="description">
							<span>C/C++</span>
						</div>
					</div>
					<div
						className="skill_card"
					>
						<div className="image">
							<Html width={110} height={110} />
						</div>
						<div className="description">
							<span>HTML</span>
						</div>
					</div>
					<div
						className="skill_card"
					>
						<div className="image">
							<Css width={110} height={110} />
						</div>
						<div className="description">
							<span>CSS</span>
						</div>
					</div>
					<div
						className="skill_card"
					>
						<div className="image">
							<Java width={110} height={110} />
						</div>
						<div className="description">
							<span>Java</span>
						</div>
					</div>
					<div
						className="skill_card"
					>
						<div className="image">
							<JavaScript width={110} height={110} />
						</div>
						<div className="description">
							<span>Java Script</span>
						</div>
					</div>
					<div
						className="skill_card"
					>
						<div className="image">
							<Python width={110} height={110} />
						</div>
						<div className="description">
							<span>Python</span>
						</div>
					</div>
					<div
						className="skill_card"
					>
						<div className="image">
							<MySQL width={110} height={110} />
						</div>
						<div className="description">
							<span>MySQL</span>
						</div>
					</div>
					<div
						className="skill_card"
					>
						<div className="image">
							<NextJS width={110} height={110} />
						</div>
						<div className="description">
							<span>Next JS</span>
						</div>
					</div>
					<div
						className="skill_card"
					>
						<div className="image">
							<SpringBoot width={110} height={110} />
						</div>
						<div className="description">
							<span>Spring Boot</span>
						</div>
					</div>
					<div
						className="skill_card"
					>
						<div className="image">
							<React width={110} height={110} />
						</div>
						<div className="description">
							<span>React JS</span>
						</div>
					</div>
					<div
						className="skill_card"
					>
						<div className="image">
							<Docker width={110} height={110} />
						</div>
						<div className="description">
							<span>Docker</span>
						</div>
					</div>
					<div
						className="skill_card"
					>
						<div className="image">
							<Kubernetes width={110} height={110} />
						</div>
						<div className="description">
							<span>Kubernetes</span>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};

export default Skills;
