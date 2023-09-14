import { BsSun, BsTelephone } from "react-icons/bs";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center">
        <div className="w-[80%] mt-[20px] flex justify-center">
          <div className="cursor-pointer underline underline-offset-2 mx-[25px] text-[#5E3212] font-poppins text-[25px]">
            Home
          </div>
          <div className="cursor-pointer underline underline-offset-2 mx-[25px] text-[#5E3212] font-poppins text-[25px]">
            Services
          </div>
          <div className="cursor-pointer underline underline-offset-2 mx-[25px] text-[#5E3212] font-poppins text-[25px]">
            Achievements
          </div>
          <div className="cursor-pointer underline underline-offset-2 mx-[25px] text-[#5E3212] font-poppins text-[25px]">
            About
          </div>
          <div className="cursor-pointer underline underline-offset-2 mx-[25px] text-[#5E3212] font-poppins text-[25px]">
            Contact
          </div>
        </div>
        <div className="w-[20%] mt-[20px] mr-[5%] flex justify-end">
          <div className="p-[10px] text-[20px] border-2 border-[#5E3212] rounded-full w-[45px] mx-[10px] cursor-pointer text-[#5E3212]">
            <BsTelephone />
          </div>
          <div className="p-[10px] text-[20px] border-2 border-[#5E3212] rounded-full w-[45px] mx-[10px] cursor-pointer text-[#5E3212]">
            <BsSun />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
