import "./styles/experience.css";

const Work = () => {
	const Experience = [
		{
			title: "TCS",
			image: "tcs.svg",
			time: "June 2023 - Present",
			role: "Java FullStack Developer",
			description:
				[
					"Using the platform Fiverr, I'm providing the best services with a proven track record of successful projects & I bring adaptability and creativity to every assignment.",
					"My freelance journey showcases a diverse skill set, from teaching to web development, ensuring a holistic approach to client projects."
				],
			skills: ["Java", "Spring Boot", "Microservices", "Docker", "Kubernetes", "Next JS", "Tailwind CSS", "MySQL"]
		},
		{
			title: "ByteXL",
			image: "bytexl.png",
			time: "April 2023 - June 2023",
			role: "Educator",
			description:
				[
					"Using the platform Fiverr, I'm providing the best services with a proven track record of successful projects & I bring adaptability and creativity to every assignment.",
					"My freelance journey showcases a diverse skill set, from teaching to web development, ensuring a holistic approach to client projects."
				],
			skills: ["Problem Solving", "Teaching", "C", "Python"]
		},
		{
			title: "Fiverr",
			image: "fiverr.svg",
			time: "Dec 2022 - June 2023",
			role: "Freelancer",
			description:
				[
					"Using the platform Fiverr, I'm providing the best services with a proven track record of successful projects & I bring adaptability and creativity to every assignment.",
					"My freelance journey showcases a diverse skill set, from teaching to web development, ensuring a holistic approach to client projects."
				],
			skills: ["Python", "Java", "C/C++", "Teaching", "Web Developement"]
		},
		// {
		// 	title: "Cognizant",
		// 	image: "cognizant.svg",
		// 	time: "Nov 2022 - Feb 2023",
		// 	role: "Full Stack Developer - Intern",
		// 	description:
		// 		[
		// 			"Using the platform Fiverr, I'm providing the best services with a proven track record of successful projects & I bring adaptability and creativity to every assignment.",
		// 			"My freelance journey showcases a diverse skill set, from teaching to web development, ensuring a holistic approach to client projects."
		// 		],
		// 	skills: ["React JS", "Spring Boot", "Java", "JUnit", "Tailwind CSS", "MySQL"]
		// },
	];
	return (
		<div>
			<div className="text-4xl text-[#5E3212] font-poppins mt-[90px] mb-[40px] text-center">
				Work Experience
			</div>
			<div className="m-auto">
				<ul className="flex justify-center gap-[50px]">
					{
						Experience.map((exp, index) => (
							<li key={index} className="p-[20px] font-poppins">
								<div className="bg-[#fff] rounded-[5px] w-fit">
									<img
										className="rounded-[5px] w-[140px] p-[10px] h-[100px]"
										src={require(`../images/${exp.image}`)}
										alt="company"
									/>
								</div>
								<div className="description mt-[25px] w-[300px] text-[16px] text-justify">
									<table className="mx-auto">
										<tbody>
											<tr>
												<td className="text-[20px]">
													<b>{exp.title}</b>
												</td>
											</tr>
											<tr>
												<td className="border-b-2 border-gray-700"></td>
											</tr>
											<tr>
												<td className="role">
													{exp.role}
												</td>
											</tr>
											<tr>
												<td className="border-b-[2px] border-white"></td>
											</tr>
											<tr className="role">
												<td className="border-none">{exp.time}</td>
											</tr>
											<tr>
												<td className="border-b-[2px] border-white"></td>
											</tr>
											<tr>
												<td className="border-none text-justify">
													<div className="text_scroll">
														<ul>
															{exp.description.map((desc, index) => (
																<span key={index}>
																	{desc}
																	<br />
																</span >
															))}
														</ul>
													</div>
												</td>
											</tr>
											<tr>
												<td className="border-b-[2px] border-white"></td>
											</tr>
											<tr>
												<td className="skills_row">
													<span className="underline">skills:</span><br />
													{
														" " + exp.skills.join(" - ").toString()
													}
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</li>
						))
					}
				</ul>
			</div>
		</div >
	);
};

export default Work;
