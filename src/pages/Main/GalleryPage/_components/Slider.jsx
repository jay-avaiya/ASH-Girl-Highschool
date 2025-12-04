import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Slider = () => {
  const images = [
    { path: "/one.jpg", alt: "Image 1" },
    { path: "/one.jpg", alt: "Image 1" },
    { path: "/one.jpg", alt: "Image 1" },
    { path: "/one.jpg", alt: "Image 1" },
    { path: "/one.jpg", alt: "Image 1" },
    { path: "/one.jpg", alt: "Image 1" },
  ];

  return (
    <div className="flex flex-col items-center h-screen gap-20">
      {/* heading */}
      <div className="flex flex-col items-center text-center space-y-5">
        <h3 className="text-[#CC4237] text-[34px] font-montserrat font-bold">
          Diwali Festival Celebration
        </h3>
        <p className="text-2xl w-[67%]">
          Our nurturing environment encourages every student to think
          creatively, learn enthusiastically, and grow confidently.
        </p>
      </div>

      {/* swiper */}
      {/*  */}
      <div className="flex flex-col items-center gap-8">
        <Swiper
          slidesPerView={3.5}
          spaceBetween={10}
          pagination={{
            clickable: true,
            el: ".gallery-pagination",
          }}
          navigation={{
            prevEl: ".gallery-prev",
            nextEl: ".gallery-next",
          }}
          loop={true}
          modules={[Pagination, Navigation]}
          className="gallery-swiper w-full max-w-screen"
        >
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <div className="w-[350px] h-[380px]">
                <img
                  src={image.path}
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center gap-4">
          <button className="gallery-prev cursor-pointer">
            <ArrowLeft size={20} />
          </button>
          <div className="gallery-pagination flex justify-center items-center gap-2"></div>
          <button className="gallery-next cursor-pointer">
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
