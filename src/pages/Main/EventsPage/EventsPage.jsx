import Banner from "../../../layouts/main_component/Banner";

const EventsPage = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });

  return (
    <div className="flex flex-col items-center gap-36">
      <Banner current={"Event"} />

      {/* title */}
      <div className="flex flex-col items-center space-y-5 text-center px-3 md:px-8 lg:px-14">
        <h3 className="text-[#CC4237] text-3xl lg:text-[34px] font-montserrat font-bold">
          Event
        </h3>
        <p className="text-[16px] md:text-xl xl:text-2xl w-full lg:w-[80%] xl:w-[70%]">
          Our school regularly organizes cultural, educational, and fun-filled
          events where students get opportunities to explore, participate, and
          shine. These moments help them build confidence, teamwork, creativity,
          and leadership skills.
        </p>
      </div>

      <div className="w-full space-y-8">
        {/* date */}
        <div className="flex gap-5 items-start  px-14">
          <div className="text-[#011844] font-montserrat text-xl px-6 py-3 rounded-full border border-[#1C375E]">
            {month}
          </div>
          <div className="text-[#011844] font-montserrat text-xl px-6 py-3 rounded-full border border-[#1C375E]">
            {year}
          </div>
        </div>

        {/* events */}
        <div className="border-t border-b h-[55vh] flex items-center justify-center">
          <h3 className="font-montserrat font-medium text-3xl">
            No Events Found
          </h3>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
