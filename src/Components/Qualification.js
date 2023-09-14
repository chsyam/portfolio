import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";

const Qualification = () => {
  const edu_qual = [
    {
      title: "Computer Science Engineering, B.Tech",
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

  const th_td = {
    border: "1px solid black",
    textAlign: "center",
  };
  return (
    <div>
      <div className="text-4xl text-[#5E3212] font-poppins my-[70px] text-center">
        Educational Qualification
      </div>
      <div className="flex justify-around font-poppins">
        {edu_qual.map((qual) => (
          <table className="w-[350px] h-[250px]">
            <tr>
              <th style={th_td} colSpan="2">
                {qual.title}
              </th>
            </tr>
            <tr>
              <td style={th_td} className="p-2">
                <CiLocationOn />
              </td>
              <td style={th_td}>{qual.organization}</td>
            </tr>
            <tr>
              <td style={th_td} className="p-2">
                <FaRegCalendarAlt />
              </td>
              <td style={th_td}>{qual.time}</td>
            </tr>
            <tr>
              <td style={th_td} className="p-2">
                <BsCheckCircle />
              </td>
              <td style={th_td}>{qual.grade}</td>
            </tr>
          </table>
        ))}
      </div>
    </div>
  );
};
export default Qualification;
