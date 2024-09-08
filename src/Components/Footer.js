import { MdOutgoingMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

import "./Footer.css";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
	const social_medial_links = [
		{
			link: "https://www.linkedin.com/in/chsyamkumar/",
			logo: <BsLinkedin />,
		},
		{
			link: "https://github.com/chsyam",
			logo: <BsGithub />,
		},
		{
			link: "https://twitter.com/Syam_KumarCH",
			logo: <BsTwitter />,
		},
	];

	return (
		<div>
			<div className="text-4xl text-[#5E3212] font-poppins mt-[10px] text-center">
				Contact Info
			</div>
			<div className="py-[20px] shadow-md">
				<table className="mx-auto mt-[20px]">
					<tbody>
						{/* <tr>
							<td className="h-[70px] border-none"></td>
							<td className="p-0 border-none" width="350" rowSpan="3">
								<table className="block bg-[#5E321280]">
									<tbody>
										<tr>
											<td>
												<form className="mx-[20px]">
													<div className="">
														<input
															className="rounded-md"
															type="text"
															placeholder="your name"
															required
														/>
													</div>
													<div>
														<input
															className="rounded-md"
															type="email"
															placeholder="your email"
															required
														/>
													</div>
													<div>
														<textarea
															className="rounded-md"
															type="text"
															rows="6"
															placeholder="your message"
															required
														/>
													</div>
													<div>
														<button
															className="bg-[#5E3212] text-white rounded-2xl flex justify-center"
															type="submit"
														>
															<div className="ml-[10px] my-[5px] text-xl">
																send
															</div>
															<div className="m-[5px] text-xl py-[6px]">
																<MdSend />
															</div>
														</button>
													</div>
												</form>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr> */}
						<tr>
							<td className="p-0 border-none">
								<table className="child bg-[#5E321233]">
									<tbody>
										{/* <tr>
											<td colspan="2" className="text-2xl text-center">
												Contact Info
											</td>
										</tr> */}
										{/* <tr>
											<td className="pl-2 text-2xl w-[50px]">
												<MdLocationOn />
											</td>
											<td className="w-[250px]">
												Eluru, Andhra Pradesh, India
											</td>
										</tr> */}
										<tr>
											<td className="pl-2 text-2xl w-[50px]">
												<MdOutgoingMail />
											</td>
											<td className="w-[250px] underline underline-offset-2">
												syamkumar6845@gmail.com
											</td>
										</tr>
										<tr>
											<td className="pl-2 text-2xl w-[50px]">
												<FiPhoneCall />
											</td>
											<td className="w-[250px]">+91-8008331438</td>
										</tr>
										<tr>
											<td colSpan="2">
												<ul className="pl-2 flex justify-left text-2xl">
													{
														social_medial_links.map((website, index) => (
															<li key={index} className="px-1 mr-2 text-xl cursor-pointer">
																<Link target="_blank" to={website.link}>
																	{website.logo}
																</Link>
															</li>
														))
													}
												</ul>
											</td>
										</tr>
									</tbody>
								</table>
							</td>
						</tr>
						<tr>
							<td className="h-[70px] border-none"></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div >
	);
};

export default Footer;
