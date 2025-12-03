import { ArrowRight } from "lucide-react";
import GalleryImage from "../../../../components/GalleryImage";
import { useNavigate } from "react-router-dom";

const Gallery = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/gallery");
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col items-center gap-12 px-14">
      {/* heading */}
      <div className="flex flex-col items-center text-center space-y-3">
        <h3 className="text-[#CC4237] text-[34px] font-montserrat font-bold">
          Gallery
        </h3>
        <p className="text-xl w-[60%]">
          Our school encourages learning through experience. <br /> From
          festivals to competitions, classroom activities to social awareness
          programs — every moment helps students learn, explore, and shine.
        </p>
      </div>

      <GalleryImage />

      {/* button */}
      <button
        onClick={handleClick}
        className="w-fit md:h-[50px] h-[45px] bg-[#CC4237] rounded-[50px] text-white font-semibold md:text-[20px] text-[16px] flex justify-center items-center gap-x-4 mx-auto  px-8 cursor-pointer"
      >
        Explore Events <ArrowRight />
      </button>
    </div>
  );
};

export default Gallery;
