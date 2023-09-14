import Selfie from "../images/self.jpg";
const AboutMe = () => {
  return (
    <div>
      <div className="text-4xl text-[#5E3212] font-poppins mt-[50px] mb-[20px] text-center">
        About Me
      </div>
      <div>
        <div className="image my-[40px]">
          <img
            className="h-[350px] w-[300px] mx-auto"
            src={Selfie}
            alt="myphoto"
          ></img>
        </div>
        <div className="mx-auto font-poppins text-md text-justify w-[70%] my-[10px]">
          <div className="mb-[20px]">Hii-- </div>
          <div className="mb-[20px]">
            Im a final year student at Gayatri Vidya Parishad College Of
            Engineering, Visakhapatnam, pursuing Bachelor of Technology in
            Computer Science and Engineering. I am working in web development,
            Competitive Coding, Problem Solving and an enthusiast learner.
          </div>
          <div className="mb-[20px]">
            Apart from being a developer, I enjoy most of my time playing
            Cricket & Chess, and also I am an active volunteer of College
            Rotaract Club (RACGVP)
          </div>
          <div className="mb-[20px]">
            I'm always interested in hearing from others and discussing with the
            inspiring and like-minded souls, so feel free to contact me if you'd
            like to connect.
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
