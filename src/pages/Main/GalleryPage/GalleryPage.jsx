import GalleryImage from "../../../components/GalleryImage";
import Banner from "../../../layouts/main_component/Banner";

const GalleryPage = () => {
  return (
    <div className="flex flex-col items-center gap-36">
      <Banner current={"Gallery"} />

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
      </div>
    </div>
  );
};

export default GalleryPage;
