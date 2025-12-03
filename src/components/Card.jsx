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
      <div className="flex justify-between mt-3">
        <div>
          <h4 className="text-3xl font-montserrat font-semibold">Name</h4>
          <p className="text-xl font-medium">Designation</p>
        </div>
        <button className="bg-[#CC4237] text-white w-[55px] h-[55px] rounded-full flex items-center justify-center shrink-0 cursor-pointer">
          <ChevronRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Card;
