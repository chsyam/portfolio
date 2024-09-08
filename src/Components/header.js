import { useRef } from "react";
import { Home } from "./svgs";

function Header() {
	const ref = useRef(null);
	const clickHandler = () => {
		ref.current?.scrollIntoView({ behaviour: "smooth" });
	};
	return (
		<div>
			<div className="flex justify-center">
				<div className="w-[80%] my-[20px] flex justify-center flex-nowrap">
					<button
						onClick={clickHandler}
						className="cursor-pointer underline underline-offset-2 mx-[25px] text-[#5E3212] font-poppins text-[25px]"
					>
						<Home />
						Home
					</button>
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
			</div>
		</div>
	);
}

export default Header;
