import { AiOutlineEye, AiOutlineChrome } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
const Achievements = () => {
  const earned = [
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const bg_style = {
    backgroundColor: "rgba(94, 50, 18, 0.3)",
    top: "35%",
    right: "3%",
    position: "absolute",
  };
  return (
    <div>
      <div className="text-4xl text-[#5E3212] font-poppins mt-[90px] mb-[40px] text-center">
        Cirtifications
      </div>
      <div className="flex flex-wrap justify-center">
        {earned.map((item) => (
          <div>
            <div
              className="card m-[15px] relative h-[250px] w-[300px] rounded-md"
              style={{ backgroundColor: "rgba(94, 50, 18, 0.3)" }}
            >
              <div
                className="text-[#5E3212] rounded-md text-2xl bg-[#5E3212]"
                style={bg_style}
              >
                <ul>
                  <li className="m-[10px] cursor-pointer">
                    <AiOutlineEye />
                  </li>
                  <li className="m-[10px] cursor-pointer">
                    <AiOutlineChrome />
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-[250px] text-justify text-[#5E3212] font-poppins mx-[20px] text-[15px]">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Achievements;
