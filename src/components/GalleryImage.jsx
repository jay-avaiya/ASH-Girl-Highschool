import React from "react";

const GalleryImage = () => {
  return (
    <div className="flex flex-row gap-5">
      {/* first tower */}
      <div className="relative rounded-[20px] w-[300px] h-[487px] flex items-center justify-center">
        <img
          src="/g1.jpg"
          alt="Gallery1"
          className="w-full h-full rounded-[20px] object-cover"
        />
        <div className="absolute bottom-3 bg-white w-[85%] text-center py-2 rounded-full">
          <p className="text-lg text-[#CC4237] font-medium font-montserrat">
            Extra Curriculum Activity
          </p>
        </div>
      </div>

      {/* middle first */}
      <div className="flex flex-col justify-end gap-5">
        <div className="relative flex items-center justify-center w-[300px] h-[260px]">
          <img
            src="/four.jpg"
            alt="Gallery2"
            className="w-full h-full rounded-[20px] object-cover"
          />
          <div className="absolute bottom-3 bg-white w-[85%] text-center py-2 rounded-full">
            <p className="text-lg text-[#CC4237] font-medium font-montserrat ">
              Extra Curriculum Activity
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center rounded-[20px] w-[300px] h-[160px]">
          <img
            src="/g2.jpg"
            alt="Gallery3"
            className="w-full h-full rounded-[20px] object-cover"
          />
          <div className="absolute bottom-3 bg-white w-[85%] text-center py-2 rounded-full">
            <p className="text-lg text-[#CC4237] font-medium font-montserrat ">
              Extra Curriculum Activity
            </p>
          </div>
        </div>
      </div>

      {/* middle second */}
      <div className="flex flex-col justify-end gap-5">
        <div className="relative flex items-center justify-center rounded-[20px] w-[300px] h-[160px]">
          <img
            src="/g3.jpg"
            alt="Gallery4"
            className="w-full h-full rounded-[20px] object-cover"
          />
          <div className="absolute bottom-3 bg-white w-[85%] text-center py-2 rounded-full">
            <p className="text-lg text-[#CC4237] font-medium font-montserrat ">
              Extra Curriculum Activity
            </p>
          </div>
        </div>
        <div className="relative flex items-center justify-center rounded-[20px] w-[300px] h-[260px]">
          <img
            src="/g4.jpg"
            alt="Gallery5"
            className="w-full h-full rounded-[20px] object-cover"
          />
          <div className="absolute bottom-3 bg-white w-[85%] text-center py-2 rounded-full">
            <p className="text-lg text-[#CC4237] font-medium font-montserrat ">
              Extra Curriculum Activity
            </p>
          </div>
        </div>
      </div>

      {/* last tower */}
      <div className="relative flex items-center justify-center rounded-[20px] w-[300px] h-[487px]">
        <img
          src="/g5.jpg"
          alt="Gallery6"
          className="w-full h-full rounded-[20px] object-cover"
        />
        <div className="absolute bottom-3 bg-white w-[85%] text-center py-2 rounded-full">
          <p className="text-lg text-[#CC4237] font-medium font-montserrat ">
            Extra Curriculum Activity
          </p>
        </div>
      </div>
    </div>
  );
};

export default GalleryImage;
