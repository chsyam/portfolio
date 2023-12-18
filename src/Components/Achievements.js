import { AiOutlineEye, AiOutlineChrome } from "react-icons/ai";
import nptel from "./cirtifications/nptel.jpg";
import coursera from "./cirtifications/coursera.jpg";
import mta_Python from "./cirtifications/mta_Python.jpg";
import js from "./cirtifications/js.jpg";
import MySQL from "./cirtifications/MySQL.jpg";
import eYantra from "./cirtifications/eYantra.jpg";

import "./styles/achievements.css";

const Achievements = () => {
	const earned = [
		{
			image: eYantra,
			description:
				"e-Yantra Robotics Competition (eYRC 2021-22)",
		},
		{
			image: MySQL,
			description:
				"The Ultimate MySQL Bootcamp -Udemy",
		},
		{
			image: nptel,
			description:
				"Programming, Data Structures and Algorithms using Python -NPTEL",
		},
		{
			image: coursera,
			description:
				"HTML, CSS, Javascript for Web Developers -Coursera",
		},
		{
			image: mta_Python,
			description:
				"Introduction to Programming using Python -MTA",
		},
		{
			image: js,
			description:
				"JavaScript Basics for Beginners -Udemy",
		}
	];

	const bg_style = {
		backgroundColor: "#f3e8df",
		border: "1px solid #f3e8df",
		top: "30%",
		right: "10px",
		position: "absolute",
	};

	return (
		<div>
			<div className="text-4xl text-[#5E3212] font-poppins mt-[90px] mb-[40px] text-center">
				Cirtifications
			</div>
			<div className="flex flex-wrap justify-center">
				{earned.map((item) => (
					<div className="cirtifications_card">
						<div>
							<img
								src={item.image}
								alt="myphoto"
								style={{ height: "250px", width: "300px" }}
							></img>
							<div
								className="text-[#5E3212] rounded-[5px] text-2xl bg-[#5E3212]"
								style={bg_style}
							>
								<ul>
									<li className="m-[5px] cursor-pointer">
										<AiOutlineEye />
									</li>
									<li className="m-[5px] cursor-pointer">
										<AiOutlineChrome />
									</li>
								</ul>
							</div>
						</div>
						<div className="description">
							{item.description}
						</div>
					</div>
				))}
			</div>
		</div >
	);
};
export default Achievements;
