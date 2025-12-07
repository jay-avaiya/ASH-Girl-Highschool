import GalleryImage from "../../../components/GalleryImage";
import Banner from "../../../layouts/main_component/Banner";
import Slider from "./_components/Slider";

const GalleryPage = () => {
  return (
    <div className="flex flex-col items-center gap-36">
      <Banner current={"Gallery"} />

      <div className="flex flex-col items-center gap-12 px-3 md:px-8 lg:px-14">
        {/* heading */}
        <div className="flex flex-col items-center text-center space-y-3">
          <h3 className="text-[#CC4237] text-3xl lg:text-[34px] font-montserrat font-bold">
            Gallery
          </h3>
          <p className="text-[16px] md:text-xl lg:text-2xl w-full lg:w-[80%] xl:w-[66%]">
            Our school encourages learning through experience. <br /> From
            festivals to competitions, classroom activities to social awareness
            programs — every moment helps students learn, explore, and shine.
          </p>
        </div>

        <GalleryImage />
      </div>
      <Slider />
    </div>
  );
};

export default GalleryPage;
