import { BiExpand } from "react-icons/bi";

const Work = () => {
  const Experience = [
    {
      title: "TCS",
      image: "tcs.avif",
      time: "June 2023 - Present",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      title: "ByteXL",
      image: "bytexl.jpeg",
      time: "May 2023 - June 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      title: "Fiverr",
      image: "freelancer.jpeg",
      time: "Dec 2022 - Present",
      description:
        "Develop the websites based on the requirements given by clients across the globe and Provide training in problem solving using Python, C & Java",
    },
    {
      title: "Cognizant",
      image: "cognizant.jpeg",
      time: "Nov 2023 - Feb 2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
  ];
  return (
    <div>
      <div className="text-4xl text-[#5E3212] font-poppins mt-[90px] mb-[40px] text-center">
        Work Experience
      </div>
      <div className="m-auto">
        <ul className="flex justify-center">
          {Experience.map((exp) => (
            <li className="p-[20px]">
              <div className=" w-fit">
                <img
                  className="rounded-md w-[100px] h-[100px] border border-black"
                  src={require(`../images/${exp.image}`)}
                  alt="company"
                ></img>
              </div>
              <div className="description mt-[25px] w-[250px] text-[16px] text-justify">
                <table className="mx-auto">
                  <tbody>
                    <tr>
                      <td className="text-[20px]">
                        <b>{exp.title}</b>
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-0 border-b-2 border-gray-700"></td>
                    </tr>
                    <tr className="h-[35px]">
                      <td className="border-none">{exp.time}</td>
                    </tr>
                    <tr>
                      <td className="border border-0 border-b border-gray-300"></td>
                    </tr>
                    <tr>
                      <td className="border-none text-justify">
                        {exp.description}
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-0 border-b border-gray-300"></td>
                    </tr>
                    <tr className="h-[35px]">
                      <td className="mt-2 float-right cursor-pointer hover:text-xl">
                        <BiExpand />
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

export default Work;
