import React from "react";

const Collage = () => {
  return (
    <div>
      {/* Collage */}
      <div className="flex flex-row items-center justify-between px-14 w-full">
        {/* left Video */}
        <div className="relative w-[50%] h-[65vh] overflow-hidden">
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
        <div className="w-[45%] flex flex-col gap-8">
          {/* upper */}
          <div className="flex flex-row text-end w-fit h-fit gap-5">
            <p className="text-xl w-[60%]">
              From science experiments and storytelling sessions to sports days
              and cultural festivals, life at Ash Girls School is vibrant and
              full of discovery.
            </p>
            <img
              src="/eight.jpg"
              alt="eight"
              className="w-[380px] h-[190px] object-cover rounded-[50px]"
            />
          </div>

          {/* lower */}
          <div className="flex flex-row text-start w-fit h-fit gap-5">
            <img
              src="/nine.jpg"
              alt="eight"
              className="w-[380px] h-[190px] object-cover rounded-[50px]"
            />
            <p className="text-xl w-[60%]">
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
