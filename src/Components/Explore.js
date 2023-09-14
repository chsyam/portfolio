import { FaHackerrank } from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import gfg from "../images/gfg.svg";

const Explore = () => {
  return (
    <div
      className="w-[600px] flex justify-center h-[205px] inline-block align-middle text-center rounded-md m-auto"
      style={{ backgroundColor: "rgba(94, 50, 18, 0.5)" }}
    >
      <div className="">
        <div className="text-4xl font-bold text-center">
          <div>
            <div className="my-[30px]">
              Learn
              <span className="text-[#5E3212]">&nbsp;& Explore</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="mx-[20px] text-center">
            <ul>
              <li className="text-[50px] mx-auto w-fit text-[#5E3212]">
                <FaHackerrank />
              </li>
              <li className="my-[10px]  text-white font-poppins">HackerRank</li>
            </ul>
          </div>
          <div className="mx-[20px]">
            <ul>
              <li className="text-[50px] text-[#5E3212] mx-auto w-fit">
                <SiLeetcode />
              </li>
              <li className="my-[10px] text-white font-poppins">LeetCode</li>
            </ul>
          </div>
          <div className="mx-[20px]">
            <ul>
              <li className="text-[50px] mx-auto w-fit text-[#5E3212]">
                <SiCodechef />
              </li>
              <li className="my-[10px] text-white font-poppins">CodeChef</li>
            </ul>
          </div>
          <div className="mx-[20px]">
            <ul>
              <li className="mx-auto w-fit text-[#5E3212]">
                <img width="62px" src={gfg} alt="grreks" />
              </li>
              <li className="my-[10px] text-white font-poppins">GFG</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
