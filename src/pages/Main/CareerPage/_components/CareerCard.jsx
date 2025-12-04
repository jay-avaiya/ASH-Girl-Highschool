import { Clock, LucideBriefcaseBusiness, MapPin, Wallet } from "lucide-react";

const CareerCard = () => {
  return (
    <div className="w-full max-w-[400px] rounded-[50px] shadow-2xl shadow-black/25 px-6 md:px-8 pt-11 pb-6 flex flex-col gap-4 mx-auto group hover:bg-[#CC4237]  transition-all duration-300">
      <p className="text-[#213455] text-[22px] md:text-[26px] font-lato font-bold group-hover:text-white">
        Full Time
      </p>

      <h3 className="text-[#213455] text-[26px] md:text-[32px] font-lato font-bold group-hover:text-white">
        Marketing Advisor
      </h3>

      <div className="flex flex-col gap-4">
        <div className="flex gap-3">
          <LucideBriefcaseBusiness
            size={22}
            className="text-[#CC4237] group-hover:text-white"
          />
          <span className="font-figtree font-semibold text-[15px] md:text-[16px] text-[#6C757D] group-hover:text-white">
            Hotels & Tourism
          </span>
        </div>

        <div className="flex gap-3">
          <Clock size={22} className="text-[#CC4237] group-hover:text-white" />
          <span className="font-figtree font-semibold text-[15px] md:text-[16px] text-[#6C757D] group-hover:text-white">
            Full time
          </span>
        </div>

        <div className="flex gap-3">
          <Wallet size={22} className="text-[#CC4237] group-hover:text-white" />
          <span className="font-figtree font-semibold text-[15px] md:text-[16px] text-[#6C757D] group-hover:text-white">
            $40000-$42000
          </span>
        </div>

        <div className="flex gap-3">
          <MapPin size={22} className="text-[#CC4237] group-hover:text-white" />
          <span className="font-figtree font-semibold text-[15px] md:text-[16px] text-[#6C757D] group-hover:text-white">
            New-York, USA
          </span>
        </div>
      </div>

      <button className="w-full py-2.5 px-6 bg-[#CC4237] text-white text-lg md:text-xl border border-transparent rounded-full cursor-pointer transition-all duration-300 text-center group-hover:text-black group-hover:bg-white">
        Enroll Now
      </button>
    </div>
  );
};

export default CareerCard;
