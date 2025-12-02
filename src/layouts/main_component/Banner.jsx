import React from "react";
import { useNavigate } from "react-router-dom";

const Banner = ({ to = "Home", current, path = "" }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${path}`);
    window.scrollTo(0, 0);
  };

  return (
    <div
      className="relative w-full h-[180px] md:h-[250px] lg:h-[260px] xl:h-[280px] 2xl:h-[320px] bg-no-repeat bg-cover bg-bottom"
      style={{
        backgroundImage: "url('/banner.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute bottom-2 md:bottom-5 lg:bottom-9 xl:bottom-11 left-1/2 -translate-x-1/2   flex items-center gap-4 py-1 px-4 md:px-6 lg:px-8 xl:px-10 lg:py-2 bg-[#CC4237] text-white w-fit rounded-full">
        <button
          onClick={() => handleClick()}
          className="cursor-pointer font-montserrat font-bold text-sm md:text-base xl:text-lg text-white/60 hover:text-white"
        >
          {to}
        </button>
        <div className="h-6 w-[1.5px] bg-white"></div>
        <button className="cursor-pointer font-montserrat font-bold text-sm md:text-base xl:text-lg">
          {current}
        </button>
      </div>
    </div>
  );
};

export default Banner;
