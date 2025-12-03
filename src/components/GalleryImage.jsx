import React from "react";

const GalleryImage = () => {
  return (
    <div className="flex flex-row gap-5">
      {/* first tower */}
      <div className="bg-amber-300 rounded-[20px] w-[300px] h-[487px]">
        <img
          src="/g1.jpg"
          alt="Gallery1"
          className="w-full h-full rounded-[20px] object-cover"
        />
      </div>

      {/* middle first */}
      <div className="flex flex-col justify-end gap-5">
        <div className="w-[300px] h-[260px]">
          <img
            src="/four.jpg"
            alt="Gallery2"
            className="w-full h-full rounded-[20px] object-cover"
          />
        </div>
        <div className="bg-amber-300 rounded-[20px] w-[300px] h-[160px]">
          <img
            src="/g2.jpg"
            alt="Gallery3"
            className="w-full h-full rounded-[20px] object-cover"
          />
        </div>
      </div>

      {/* middle second */}
      <div className="flex flex-col justify-end gap-5">
        <div className="bg-amber-300 rounded-[20px] w-[300px] h-[160px]">
          <img
            src="/g3.jpg"
            alt="Gallery4"
            className="w-full h-full rounded-[20px] object-cover"
          />
        </div>
        <div className="bg-amber-300 rounded-[20px] w-[300px] h-[260px]">
          <img
            src="/g4.jpg"
            alt="Gallery5"
            className="w-full h-full rounded-[20px] object-cover"
          />
        </div>
      </div>

      {/* last tower */}
      <div className="bg-amber-300 rounded-[20px] w-[300px] h-[487px]">
        <img
          src="/g5.jpg"
          alt="Gallery6"
          className="w-full h-full rounded-[20px] object-cover"
        />
      </div>
    </div>
  );
};

export default GalleryImage;
