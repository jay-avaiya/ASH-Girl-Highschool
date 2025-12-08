import Card from "../../../components/Card";
import Banner from "../../../layouts/main_component/Banner";
import Stickynote from "./_components/Stickynote";

const AcademicsPage = () => {
  return (
    <div className="flex flex-col items-center gap-36">
      <Banner current={"Academics"} />

      {/* Heading */}
      <div className="space-y-5 flex flex-col items-center px-3 md:px-8 lg:px-14">
        <h3 className="text-3xl lg:text-[34px] text-[#CC4237] font-montserrat font-bold">
          Programs We Offer
        </h3>
        <p className="text-[16px] md:text-xl xl:text-2xl lg:w-[71%] text-center">
          At Ash Girls School, our Managing Committee plays a vital role in
          shaping the strategic direction and nurturing the values that define
          our institution. Each member brings a wealth of experience,
          dedication, and a shared commitment to empowering young girls through
          quality education.
        </p>
      </div>

      {/* Stickynotes */}
      <div className="hidden lg:block w-full px-14 space-y-14">
        <div className="flex items-start justify-between h-[400px]">
          <Stickynote color={"#80CAFF"} />
          <div className="h-full flex items-end">
            <Stickynote color={"#FBD767"} />
          </div>
          <Stickynote color={"#FFBDF2"} />
        </div>

        <div className="flex items-center justify-center w-full">
          <div className="flex w-[70%] items-center justify-between ">
            <Stickynote color={"#85E0A3"} />
            <Stickynote color={"#D9B8FF"} />
          </div>
        </div>
      </div>

      {/* sticky note ( mobile + tablet ) */}
      <div className="lg:hidden w-full px-3 md:px-8 flex flex-col items-center gap-16">
        <Stickynote color={"#80CAFF"} />
        <Stickynote color={"#FBD767"} />
        <Stickynote color={"#FFBDF2"} />
        <Stickynote color={"#85E0A3"} />
        <Stickynote color={"#D9B8FF"} />
      </div>

      {/* Achievements */}
      <div className="w-full flex flex-col items-center gap-20 px-3 md:px-8 lg:px-14">
        {/* title */}
        <div className="flex flex-col items-center text-center gap-5">
          <h3 className="text-[#CC4237] text-3xl lg:text-[34px] font-bold font-montserrat">
            Academic Achievement
          </h3>
          <p className="text-[16px] md:text-xl xl:text-2xl lg:w-[84%]">
            At Ash Girls School, academic excellence is not just a goal—it’s a
            journey nurtured with care, creativity, and confidence. Our
            classrooms are vibrant spaces where students are encouraged to ask
            questions, explore ideas, and challenge themselves.
          </p>
        </div>

        {/* Achievement card */}
        <div className="hidden w-full h-[65vh] xl:h-[70vh] lg:flex justify-end">
          <div className="relative w-[82%] h-full bg-[#FF55001C] rounded-[15px] flex flex-col items-end justify-center shadow-[0_0_20px_0_rgba(0,0,0,0.15)]">
            <div className="w-[78%] xl:w-[81%] flex flex-col items-start">
              <h3 className="text-3xl xl:text-[34px] font-montserrat font-semibold">
                Grade 10 Topper – 98.6%
              </h3>
              <p className="text-[16px] xl:text-lg font-medium text-[#8D8D8D] w-[90%] mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                consectetur adipiscing, Lorem ipsum dolor sit amet, consectetur.
                Lorem dolor sit amet, consectetur adipiscing elit. Lorem ipsum .
              </p>{" "}
              <br /> <br /> <br />
              <p className="text-[16px] xl:text-lg font-medium text-[#8D8D8D] w-[90%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                consectetur adipiscing, Lorem ipsum dolor sit amet, consectetur.
                Lorem dolor sit amet, consectetur adipiscing elit. Lorem ipsum,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                consectetur adipiscing, Lorem ipsum dolor.
              </p>
            </div>

            <img
              src="/a1.png"
              alt="a1"
              className="absolute -left-5 -translate-x-1/2 z-10
               w-[340px] h-[350px] xl:w-[440px] xl:h-[450px] object-cover border-[12px] border-white rounded-[15px] shadow-[0_0_18px_0_rgba(182,182,182,0.25)]"
            />
          </div>
        </div>

        {/* Achievement card ( mobile + tablet ) */}
        <div className="lg:hidden w-full h-screen flex justify-center mt-36">
          <div className="relative w-full md:w-[70%] h-[70vh] bg-[#FF55001C] rounded-[15px] flex flex-col items-end justify-center shadow-[0_0_20px_0_rgba(0,0,0,0.15)]">
            <img
              src="/a1.png"
              alt="a1"
              className="absolute -top-15 md:-top-5 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10
               w-[280px] h-[280px] md:w-[340px] md:h-[350px] object-cover border-[12px] border-white rounded-[15px] shadow-[0_0_18px_0_rgba(182,182,182,0.25)]"
            />

            <div className="flex flex-col items-start justify-center text-center mt-8 md:mt-16">
              <h3 className="text-xl md:text-3xl xl:text-[34px] font-montserrat font-semibold w-full">
                Grade 10 Topper – 98.6%
              </h3>
              <p className="text-sm md:text-[16px] font-medium text-[#8D8D8D]  mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                consectetur adipiscing, Lorem ipsum dolor sit amet, consectetur.
                Lorem dolor sit amet, consectetur adipiscing elit. Lorem ipsum .
              </p>{" "}
              <br /> <br /> <br />
              <p className="text-sm md:text-[16px] font-medium text-[#8D8D8D]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                consectetur adipiscing, Lorem ipsum dolor sit amet, consectetur.
                Lorem dolor sit amet, consectetur adipiscing elit. Lorem ipsum,
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                consectetur adipiscing, Lorem ipsum dolor.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Faculty */}
      <div className="flex flex-col items-center justify-center gap-16 px-14">
        <h3 className="text-[#CC4237] text-3xl lg:text-[34px] font-montserrat font-bold">
          Faculty
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-16">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage;
