import Selfie from "../images/self.jpg";

const AboutMe = () => {
	return (
		<div className="">
			<div className="text-4xl text-[#5E3212] font-poppins my-[50px] text-center">
				About Me
			</div>
			<div className="flex justify-center">
				<div className="p-[20px]">
					<img
						className="mx-auto rounded-full"
						src={Selfie}
						alt="myphoto"
					></img>
				</div>
				<div className="font-poppins text-sm w-[40%] text-justify p-[20px] m-[20px]">
					Im a final year student at Gayatri Vidya Parishad College Of
					Engineering, Visakhapatnam, pursuing Bachelor of Technology in
					Computer Science and Engineering. I am working in web development,
					Competitive Coding, Problem Solving and an enthusiast learner.
					<br />
					<br />
					Apart from being a developer, I enjoy most of my time playing
					cricket & chess, and also I am an active volunteer of College
					Rotaract Club (RACGVP).
					<br />
					<br />
					I'm always interested in hearing from others and discussing with the
					inspiring and like-minded souls, so feel free to contact me if you'd
					like to connect.
				</div>
			</div>
		</div >
	);
};
export default AboutMe;
