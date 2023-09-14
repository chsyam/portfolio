import { MdLocationOn, MdOutgoingMail, MdSend } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillGithub, AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="text-4xl text-[#5E3212] font-poppins mt-[50px] mb-[30px] text-center">
        Contact
      </div>
      <div className="bg-[#f3e8df] py-[20px]">
        <table className="mx-auto mt-[20px]">
          <tbody>
            <tr>
              <td className="bg-[#f3e8df] h-[70px] border-none"></td>{" "}
              <td className="p-0 border-none" rowSpan="3">
                <table className="block text-[#5E3212]">
                  <tbody>
                    <tr>
                      <td>
                        <form className="mx-[20px]">
                          <input
                            className="rounded-md"
                            type="text"
                            placeholder="Your Name"
                          />
                          <br />
                          <input
                            className="rounded-md"
                            type="text"
                            placeholder="Your E-mail"
                          />
                          <br />
                          <textarea
                            className="rounded-md"
                            type="text"
                            rows="7"
                            placeholder="Your Message"
                          />
                          <br />
                          <button
                            className="bg-[#5E3212] text-white rounded-md flex justify-center"
                            type="submit"
                          >
                            <div className="ml-[10px] my-[5px] font-bold text-2xl">
                              Send
                            </div>
                            <div className="mr-[5px] ml-[3px] my-[5px] font-bold text-2xl p-1">
                              <MdSend />
                            </div>
                          </button>
                          <br />
                        </form>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className="p-0 border-none">
                <table className="child bg-[#5E321233]">
                  <tbody>
                    <tr>
                      <th colspan="2" className="text-2xl">
                        Contact Me
                      </th>
                    </tr>
                    <tr>
                      <td className="pl-2 text-2xl w-[50px]">
                        <MdLocationOn />
                      </td>
                      <td className="w-[250px]">
                        Eluru, Andhra Pradesh, India
                      </td>
                    </tr>
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
                      <td className="w-[250px]">+918008331438</td>
                    </tr>
                    <tr>
                      <td colSpan="2">
                        <ul className="pl-2 flex justify-left text-2xl">
                          <li className="px-1">
                            <AiFillGithub />
                          </li>
                          <li className="px-1">
                            <CiLinkedin />
                          </li>
                          <li className="px-1">
                            <AiOutlineTwitter />
                          </li>
                          <li className="px-1">
                            <AiFillYoutube />
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td className="bg-[#f3e8df] h-[70px] border-none"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Footer;
