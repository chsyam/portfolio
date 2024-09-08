import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";

const Qualification = () => {
	const edu_qual = [
		{
			title: "Computer Science, B.Tech",
			organization:
				"GVPCE, Visakhapatnam",
			time: "2019-2023",
			grade: "8.39 CGPA",
			location: "https://maps.app.goo.gl/jQpUuqwoKQCReteg6"
		},
		{
			title: "Intermediate (PCM)",
			organization: "Vidya Vikas Jr. College, Eluru",
			time: "2017-2019",
			grade: "974/1000 Marks",
			location: "https://maps.app.goo.gl/PChwqoKoBwbvd1uAA"
		},
		{
			title: "SSC",
			organization: "Aadarsha Vidya Niketan HS, Raghavapuram",
			time: "2016-2017",
			grade: "9.7 CGPA",
			location: "https://maps.app.goo.gl/hnF9oiEc5WwZRA2KA"
		},
	];

	return (
		<div className="shadow-xl my-[100px] w-max m-auto rounded-[5px] border-[3px] border-white">
			<div className="text-4xl text-[#5E3212] font-poppins mt-[10px] text-center">
				Education
			</div>
			<div className="">
				<ul className="flex flex-wrap justify-center">
					{edu_qual.map((exp, index) => (
						<li key={index} className="p-[10px]">
							<div className="description mt-[15px] w-[300px] text-[16px] ">
								<table className="mx-auto">
									<tbody>
										<tr className="h-[50px]">
											<td
												className="border-none text-xl text-left"
												colSpan="2"
											>
												<b>{exp.title}</b>
											</td>
										</tr>
										<tr>
											<td
												colSpan="2"
												className="border border-0 border-b border-gray-300"
											></td>
										</tr>
										<tr className="h-[50px]"
											onClick={() => window.open(exp.location, "_blank")}
										>
											<td className="pr-2">{<CiLocationOn />}</td>
											<td className="text-[18px]">{exp.organization}</td>
										</tr>
										<tr>
											<td
												colSpan="2"
												className="border border-0 border-b border-gray-300"
											></td>
										</tr>
										<tr className="h-[50px]">
											<td className="pr-2">{<FaRegCalendarAlt />}</td>
											<td className="border-none">{exp.time}</td>
										</tr>
										<tr>
											<td
												colSpan="2"
												className="border border-0 border-b border-gray-300"
											></td>
										</tr>
										<tr>
											<td className="pr-2">{<BsCheckCircle />}</td>
											<td className="border-none text-justify h-[50px]">
												{exp.grade}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};
export default Qualification;
