import React from "react";

const Stickynote = ({ title, text, color = "#FBD767" }) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className="relative w-[320px] h-[280px] lg:w-[290px] lg:h-[250px] xl:w-[340px] xl:h-[300px] px-4 py-5 
      rotate-[-0.3deg] shadow-[-12px_5px_20px_rgba(0,0,0,0.30)]"
    >
      {/* shadow */}
      <div className="absolute -left-[18px] top-[30px] w-[35px] h-[240px] bg-gradient-to-r from-black/20 to-transparent blur-xl opacity-50 -z-10" />

      {/* text */}
      <div className="text-center space-y-14 rotate-[-0.29deg]">
        <h5 className="text-lg font-semibold text-[#515151] rotate-[0.04deg]">
          {title || "Pragram - 1"}
        </h5>
        <p className="text-[16px] text-[#4D4D4D] px-4">
          {text ||
            "Female candidates who have passed XII Std. examination conducted by Gujarat State Education Board or its equivalent are eligible for admission"}
        </p>
      </div>

      {/* pin */}
      <div className="absolute -top-11 -right-8 w-[90px] h-[70px]">
        <img src="/pin.png" alt="" className="w-full h-full" />
      </div>

      {/* border */}
      <div
        style={{ borderColor: color }}
        className="absolute right-0 bottom-0 translate-y-1/4 translate-x-1/4 
        w-[90px] h-[80px] border-r-[6px] border-b-[6px]"
      ></div>
    </div>
  );
};

export default Stickynote;
