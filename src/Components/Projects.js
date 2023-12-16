import { AiOutlineEye, AiOutlineChrome } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Card = () => {
  const bg_style = {
    backgroundColor: "rgba(94, 50, 18, 0.3)",
    top: "27%",
    left: "2%",
    position: "absolute",
  };

  return (
    <div className="">
      <div className="text-4xl text-[#5E3212] font-poppins mt-[50px] mb-[20px] text-center">
        My Recent works
      </div>

      <div className="card my-[80px] flex justify-center">
        <div className="description mr-[10px] text-[#5E3212] font-poppins w-[35%] p-[20px] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div
          className="card_item ml-[10px] relative grid place-content-center p-[20px] w-[35%] h-[300px] rounded-xl"
          style={{ backgroundColor: "rgba(94, 50, 18, 0.5)" }}
        >
          <div
            className="text-[#5E3212] rounded-md text-2xl bg-[#5E3212]"
            style={bg_style}
          >
            <div>
              <div className="m-[10px] cursor-pointer">
                <AiOutlineEye />
              </div>
              <div className="m-[10px] cursor-pointer">
                <AiOutlineChrome />
              </div>
              <div className="m-[10px] cursor-pointer">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="text-[#5E3212] text-3xl font-bold">Dairy Bike</div>
        </div>
      </div>
      <div className="card my-[80px] flex justify-center">
        <div
          className="card_item mr-[10px] relative grid place-content-center p-[20px] w-[35%] h-[300px] rounded-xl"
          style={{ backgroundColor: "rgba(94, 50, 18, 0.5)" }}
        >
          <div
            className="text-[#5E3212] rounded-md text-2xl bg-[#5E3212]"
            style={bg_style}
          >
            <div>
              <div className="m-[10px] cursor-pointer">
                <AiOutlineEye />
              </div>
              <div className="m-[10px] cursor-pointer">
                <AiOutlineChrome />
              </div>
              <div className="m-[10px] cursor-pointer">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="text-[#5E3212] text-3xl font-bold">Dairy Bike</div>
        </div>
        <div className="description text-[#5E3212] font-poppins w-[35%] p-[20px] text-justify ml-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
      <div className="card my-[80px] flex justify-center">
        <div className="description mr-[10px] text-[#5E3212] font-poppins w-[35%] p-[20px] text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div
          className="card_item ml-[10px] relative grid place-content-center p-[20px] w-[35%] h-[300px] rounded-xl"
          style={{ backgroundColor: "rgba(94, 50, 18, 0.5)" }}
        >
          <div
            className="text-[#5E3212] rounded-md text-2xl bg-[#5E3212]"
            style={{
              backgroundColor: "rgba(94, 50, 18, 0.3)",
              top: "27%",
              left: "2%",
              position: "absolute",
            }}
          >
            <div>
              <div className="m-[10px] cursor-pointer">
                <AiOutlineEye />
              </div>
              <div className="m-[10px] cursor-pointer">
                <AiOutlineChrome />
              </div>
              <div className="m-[10px] cursor-pointer">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
          <div className="text-[#5E3212] text-3xl font-bold">Dairy Bike</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
