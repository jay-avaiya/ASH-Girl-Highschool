import { ChevronRight } from "lucide-react";
import React from "react";

const Card = () => {
  return (
    <div className="w-fit h-fit">
      <img
        src="/person.png"
        alt="person"
        className="w-[280px] h-[400px] object-cover rounded-t-[70px] rounded-br-[70px] border-4 border-white"
      />
      <div className="flex justify-between mt-2 md:mt-3">
        <div>
          <h4 className="text-xl md:text-2xl font-montserrat font-semibold">
            Name
          </h4>
          <p className="text-sm md:text-xl font-medium">Designation</p>
        </div>
        <button className="bg-[#CC4237] text-white w-[45px] h-[45px] md:w-[55px] md:h-[55px] rounded-full flex items-center justify-center shrink-0 cursor-pointer">
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Card;
