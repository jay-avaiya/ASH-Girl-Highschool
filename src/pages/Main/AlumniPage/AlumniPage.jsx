import { ArrowRight } from "lucide-react";
import Banner from "../../../layouts/main_component/Banner";

const AlumniPage = () => {
  return (
    <div className="flex flex-col items-center gap-40">
      <Banner current={"Alumni"} />

      {/* Title */}
      <div className="w-full px-6 sm:px-8 md:px-16 lg:px-14 py-2 space-y-10">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-montserrat font-semibold text-[#CC4237] leading-snug">
          Ash Education Alumni Network A <br /> Lifelong Community
        </h3>

        <div className="flex flex-col gap-12">
          <p className="text-[#011844] text-lg sm:text-xl md:text-2xl">
            As an alumnus, you are an important part of our journey. This
            platform helps you reconnect with classmates, teachers, and your
            alma mater. Whether you wish to network professionally, share
            achievements, mentor current students, or simply stay updated, this
            community keeps you connected. We invite all alumni to strengthen
            this network by sharing experiences, participating in events, and
            contributing to the progress of future nursing professionals.
            Together, we continue building a legacy of skilled, confident and
            compassionate healthcare providers.
          </p>

          <button className="flex items-center gap-4 bg-[#1C375E] text-white rounded-full w-[180px] sm:w-[220px] md:w-[252px] py-2 px-3 justify-center border border-transparent  transition-colors duration-200 cursor-pointer">
            <span className="text-base sm:text-lg md:text-[20px]">
              Join Now
            </span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="w-full lg:w-[60%]  space-y-10 flex justify-center">
        <div className="w-full xl:w-[1344px] flex flex-col gap-10 sm:gap-[52px] items-center">
          <div className="w-full border border-[#F2647C] rounded-[50px] px-6 sm:px-10 xl:px-13 py-10 sm:py-12 xl:py-16 flex flex-col gap-4 sm:gap-6 xl:gap-[30px]">
            <h3 className="text-[#011844] text-2xl sm:text-3xl xl:text-4xl font-lato font-extrabold">
              <span className="text-[#B3130F]">Alumni</span> Event
            </h3>
            <p className="text-[#213455] text-xl sm:text-2xl xl:text-[28px] font-lato">
              Coming Soon!
            </p>
          </div>

          <div className="w-[90%] h-[1px] bg-gradient-to-r from-[#B3130F40] via-[#B3130F] to-[#B3130F40]"></div>

          <div className="w-full border border-[#F2647C] rounded-[50px] px-6 sm:px-10 xl:px-13 py-10 sm:py-12 xl:py-16 flex flex-col gap-4 sm:gap-6 xl:gap-[30px]">
            <h3 className="text-[#011844] text-2xl sm:text-3xl xl:text-4xl font-lato font-extrabold">
              <span className="text-[#B3130F]">Alumni</span> News & Updates
            </h3>
            <p className="text-[#213455] text-xl sm:text-2xl xl:text-[28px] font-lato">
              Coming Soon!
            </p>
          </div>

          <div className="w-[90%] h-[1px] bg-gradient-to-r from-[#B3130F40] via-[#B3130F] to-[#B3130F40]"></div>

          <div className="w-full border border-[#F2647C] rounded-[50px] px-6 sm:px-10 xl:px-13 py-10 sm:py-12 xl:py-16 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-6 xl:gap-0">
            <div className="flex flex-col gap-4 sm:gap-6 xl:gap-[30px]">
              <h3 className="text-[#B3130F] text-2xl sm:text-3xl xl:text-4xl font-lato font-extrabold">
                Donations
              </h3>
              <p className="text-[#213455] text-xl sm:text-2xl xl:text-[28px] font-lato">
                Want to Contribute? Donate Now!
              </p>
            </div>

            <button className="flex items-center gap-4 bg-[#B3130F] border border-transparent text-white rounded-full py-2 px-6  cursor-pointer w-fit">
              <span className="text-base sm:text-lg xl:text-[20px]">
                Donate Now
              </span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniPage;
