import { ArrowRight, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/events");
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col items-center gap-12 px-14">
      {/* heading */}
      <div className="flex flex-col items-center text-center space-y-3">
        <h3 className="text-[#CC4237] text-[34px] font-montserrat font-bold">
          Events
        </h3>
        <p className="text-xl w-[63%]">
          Our school regularly organizes cultural, educational, and fun-filled
          events where students get opportunities to explore, participate, and
          shine. These moments help them build confidence, teamwork, creativity,
          and leadership skills.
        </p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-2 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="relative">
            <img
              src="/event.png"
              alt="event"
              className="w-[700px] h-[260px] object-cover rounded-[65px] border-[5px] border-white shadow-[0px_0px_15px_rgba(0,0,0,0.25)]"
            />
            <div className="text-[#011844] font-montserrat font-medium text-sm bg-white px-3 py-2 rounded-full absolute top-6 left-6">
              Sport Day, 5th April 2025
            </div>
            <button className="absolute right-6 bottom-6 bg-white text-[#CC4237] w-[55px] h-[55px] rounded-full flex items-center justify-center shrink-0 cursor-pointer">
              <ChevronRight size={30} />
            </button>
          </div>
        ))}
      </div>

      {/* button */}
      <button
        onClick={handleClick}
        className="w-fit md:h-[50px] h-[45px] bg-[#CC4237] rounded-[50px] text-white font-semibold md:text-[20px] text-[16px] flex justify-center items-center gap-x-4 mx-auto mt-2 px-8 cursor-pointer"
      >
        Explore Events <ArrowRight />
      </button>
    </div>
  );
};

export default Events;
