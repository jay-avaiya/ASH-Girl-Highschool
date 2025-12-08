import Banner from "../../../layouts/main_component/Banner";
import CareerCard from "./_components/CareerCard";

const CareerPage = () => {
  return (
    <div className="flex flex-col items-center gap-36">
      <Banner current={"Career"} />

      <div className="px-3 md:px-8 lg:px-14 w-full flex flex-col gap-14 lg:gap-18">
        {/* heading */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <h3 className="text-[#CC4237] text-3xl xl:text-[34px] font-bold font-montserrat lg:w-[35%] xl:w-[30%] text-center lg:text-left">
            Meet the Team Work Behind Our Success
          </h3>
          <p className="text-lg xl:text-xl lg:w-[60%] xl:w-[55%] text-center lg:text-left">
            Kantaben Manilal Patel Primary School was established with the
            belief that education is the most powerful tool to shape young minds
            and communities.
          </p>
        </div>

        <img
          src="/c1.jpg"
          alt="c1"
          className="h-[50vh] lg:h-[70vh] w-full object-cover rounded-[50px]"
        />
      </div>

      <div className="px-4 md:px-10 lg:px-14 flex flex-col items-center space-y-24 min-h-screen">
        <h3 className="text-[#CC4237] text-[26px] md:text-3xl lg:text-[34px] font-montserrat font-semibold text-center">
          Currently Open Position
        </h3>

        {/* Responsive Job Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 md:gap-10 lg:gap-24 w-full place-items-center">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <CareerCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
