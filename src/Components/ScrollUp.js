import { FaArrowCircleUp } from "react-icons/fa";
import React from "react";
import { useEffect, useState } from "react";

const ScrollUp = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);
  const scroll_to_top = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTopButton && (
        <div
          className="fixed right-[10px] text-4xl bottom-[10px] cursor-pointer"
          onClick={scroll_to_top}
        >
          <FaArrowCircleUp />
        </div>
      )}
    </div>
  );
};
export default ScrollUp;
