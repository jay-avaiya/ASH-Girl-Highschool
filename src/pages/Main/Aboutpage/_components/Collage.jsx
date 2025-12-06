import React from "react";

const Collage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      {/* Collage */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-y-14 lg:gap-y-0 px-3 md:px-8 lg:px-14 w-full">
        {/* left Video */}
        <div className="relative w-full h-[40vh] md:w-[80%] md:h-[45vh]  lg:w-[50%] lg:h-[65vh] overflow-hidden">
          <img
            src="/four.jpg"
            alt="video"
            className="w-full h-full object-cover rounded-[50px] border brightness-50"
          />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] cursor-pointer">
            <img src="/play.png" alt="play" />
          </div>
        </div>

        {/* Right images */}
        <div className="w-full lg:w-[45%] flex flex-col gap-8">
          {/* upper  */}
          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-normal lg:items-start text-center md:text-end w-fit h-fit gap-5">
            <p className="hidden md:inline text-lg lg:text-[16px] xl:text-xl w-[45%] lg:w-[60%]">
              From science experiments and storytelling sessions to sports days
              and cultural festivals, life at Ash Girls School is vibrant and
              full of discovery.
            </p>
            <img
              src="/eight.jpg"
              alt="eight"
              className="w-[350px] h-[160px] xl:w-[380px] xl:h-[190px] object-cover rounded-[50px]"
            />
            <p className="md:hidden  text-[16px] w-[80%]">
              From science experiments and storytelling sessions to sports days
              and cultural festivals, life at Ash Girls School is vibrant and
              full of discovery.
            </p>
          </div>

          {/* lower */}
          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-normal lg:items-start text-center md:text-start w-fit h-fit gap-5">
            <img
              src="/nine.jpg"
              alt="eight"
              className="w-[350px] h-[160px] xl:w-[380px] xl:h-[190px] object-cover rounded-[50px]"
            />
            <p className="text-[16px] md:text-lg lg:text-[16px] xl:text-xl w-[80%] md:w-[45%] lg:w-[60%]">
              Whether you're a parent, educator, or well-wisher, we invite you
              to be part of our growing family. Together, let’s shape a future
              where every girl shines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collage;
