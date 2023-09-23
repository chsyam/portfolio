import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";

const Qualification = () => {
  const edu_qual = [
    {
      title: "Computer Science, B.Tech",
      organization:
        "Gayatri Vidya Parishad College of Engineering, Visakhapatnam",
      time: "2019-2023",
      grade: "8.39 CGPA",
    },
    {
      title: "Intermediate (PCM)",
      organization: "Vidya Vikas Jr. College, Eluru",
      time: "2017-2019",
      grade: "974/1000 Marks",
    },
    {
      title: "SSC",
      organization: "Aadarsha Vidya Niketan High School, Raghavapuram",
      time: "2016-2017",
      grade: "9.7 CGPA",
    },
  ];

  return (
    <div>
      <div className="text-4xl text-[#5E3212] font-poppins mt-[100px] mb-[15px] text-center">
        Education
      </div>
      <div className="m-auto">
        <ul className="flex flex-wrap justify-center">
          {edu_qual.map((exp) => (
            <li className="p-[20px]">
              <div className="description mt-[25px] w-[300px] text-[16px] ">
                <table className="mx-auto">
                  <tbody>
                    <tr className="h-[50px]">
                      <td
                        className="border-none text-xl text-center"
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
                    <tr className="h-[50px]">
                      <td className="pr-2">{<CiLocationOn />}</td>
                      <td className="">{exp.organization}</td>
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
                    <tr>
                      <td
                        colSpan="2"
                        className="border border-0 border-b border-gray-300"
                      ></td>
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
