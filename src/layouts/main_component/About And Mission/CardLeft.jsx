import React from "react";
import { useNavigate } from "react-router-dom";

const CardLeft = ({ title, para, buttonRequired, i1, i2, i3, i4 }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex items-center justify-between px-24 pointer-events-none h-[85vh] w-full">
      {/* left image */}
      <div className="w-fit relative">
        {/* main image */}
        <img
          src={i1 || "/one.jpg"}
          alt="one"
          className="w-[600px] h-[433px] border-[5px] border-white rounded-[65px] object-cover shadow-[0px_0px_15px_rgba(0,0,0,0.25)]"
        />

        {/* back image */}
        <img
          src={i2 || "/two.jpg"}
          alt="two"
          className="w-[450px] h-[325px] object-cover rounded-[40px]
            absolute -z-50  -bottom-1/2 -translate-x-1/6 -translate-y-1/3
            shadow-[0_10px_25px_rgba(0,0,0,0.12)] 
          "
        />

        {/* left image */}
        <img
          src={i3 || "/three.jpg"}
          alt="three"
          className="w-[124px] h-[100px] object-cover border-[3px] border-white rounded-[20px]
          absolute z-50 -top-10 -translate-x-1/2
          "
        />

        {/* right image */}
        <img
          src={i4 || "/four.jpg"}
          alt="four"
          className="w-[124px] h-[100px] object-cover border-[3px] border-white rounded-[20px]
          absolute z-50 top-1/2 -translate-y-1/2 -right-2.5 translate-x-1/2"
        />
      </div>

      {/* Right Text */}
      <div className="flex flex-col gap-5 w-[43%]">
        <h3 className="text-[#CC4237] text-[34px] font-montserrat font-extrabold">
          {title}
        </h3>
        <div className="text-xl whitespace-pre-line">
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
    </div>
  );
};

export default CardLeft;
