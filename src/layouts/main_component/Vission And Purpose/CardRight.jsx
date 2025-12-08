import React from "react";
import { useNavigate } from "react-router-dom";

const CardRight = ({ title, para, buttonRequired, i1, i2, i3, i4 }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-3 md:px-8 lg:px-14 pointer-events-none h-fit lg:min-h-screen w-full">
      {/* Left Text */}
      <div className="flex flex-col gap-5 w-full md:w-[90%] lg:w-[45%] xl:w-[43%]">
        <h3 className="text-[#CC4237] text-3xl xl:text-[34px] font-montserrat font-extrabold">
          {title}
        </h3>
        <div className="text-lg lg:text-[16px] xl:text-xl whitespace-pre-line">
          {para || (
            <>
              Ash Girls High School is dedicated to providing quality education
              in a safe, supportive, and inspiring environment for young girls.{" "}
              <br />
              Our teaching approach focuses on academics, character-building,
              practical learning, and co-curricular activities that help
              students grow mentally, socially, and emotionally.
            </>
          )}
        </div>
        {buttonRequired && (
          <button
            className="cursor-pointer text-white bg-[#CC4237] text-[16px] lg:text-lg xl:text-xl font-medium font-montserrat py-1 px-4 border border-transparent rounded-full text-center w-fit"
            onClick={() => handleClick()}
          >
            Know More About Us
          </button>
        )}
      </div>

      {/* Right image */}
      <div className="w-fit relative mt-20 lg:mt-0 lg:pr-6 xl:px-10 rotate-y-180">
        {/* main image */}
        <img
          src={i1 || "/one.jpg"}
          alt="one"
          className="w-[280px] md:w-[420px] md:h-[325px] xl:w-[600px] xl:h-[433px] border-[5px] border-white rounded-[20px]  md:rounded-[65px] object-cover shadow-[0px_0px_15px_rgba(0,0,0,0.25)]"
        />

        {/* back image */}
        <img
          src={i2 || "/two.jpg"}
          alt="two"
          className="w-[220px] md:w-[350px] md:h-[225px] xl:w-[450px] xl:h-[325px] object-cover rounded-[15px] md:rounded-[40px]
            absolute -z-50  -bottom-1/2 -translate-x-1/6 -translate-y-1/3
            shadow-[0_10px_25px_rgba(0,0,0,0.12)] 
          "
        />

        {/* top image */}
        <img
          src={i3 || "/three.jpg"}
          alt="three"
          className="w-[80px] md:w-[110px] md:h-[90px] xl:w-[124px] xl:h-[100px] object-cover border-[3px] border-white rounded-[10px] md:rounded-[20px]
          absolute z-50 -top-2.5 right-1/2 -translate-y-1/2 -translate-x-1/2
          "
        />

        {/* left image */}
        <img
          src={i4 || "/four.jpg"}
          alt="four"
          className="w-[80px] md:w-[110px] md:h-[90px] xl:w-[124px] xl:h-[100px] object-cover border-[3px] border-white rounded-[10px] md:rounded-[20px]
          absolute z-50 -translate-y-1/2 -right-10 xl:-right-5"
        />
      </div>
    </div>
  );
};

export default CardRight;

// top-1/2 -translate-y-1/2 -right-2.5 translate-x-1/2
