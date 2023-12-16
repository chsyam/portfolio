import { BsGithub, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import Selfie from "../images/self.jpg";
import { Link } from "react-router-dom";

const Home = () => {
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
		{
			link: "https://www.youtube.com/channel/UCsnGsqVWEl_37bGwA_MmAng",
			logo: <BsYoutube />,
		},
	];

	
	return (
		<div className="mt-[50px] mb-[4%] h-[600px] flex justify-center font-poppins">
			<div className="details my-auto mr-[3%]">
				<div className="name font-bold text-[40px] text-[#5E3212]">
					Syam Kumar Chintakayala
				</div>
				<div className="domain font-mono mt-[20px] text-[#5E3212]">
					Educator | Freelancer | Web Developer | Programmer
				</div>
				<div className="icons my-[30px] text-[#5E3212]">
					<ul className="flex">
						{social_medial_links.map((website) => (
							<li className="mr-[25px] text-3xl cursor-pointer">
								<Link target="_blank" to={website.link}>
									{website.logo}
								</Link>
							</li>
						))}
					</ul>
				</div>

				<div className="rounded-md my-[40px] p-[10px] contact bg-[#A96628] justify-start w-fit">
					<div className="flex cursor-pointer">
						<span className="font-bold text-white text-xl inline-block align-middle">
							Contact
						</span>
						<span className="text-white mx-[5px] mt-[3px] text-2xl">
							<HiMail />
						</span>
					</div>
				</div>
			</div>
			<div className="my-auto">
				<img width="400px" height="600px" src={Selfie} alt="myphoto"></img>
			</div>
		</div>
	);
};

export default Home;
