import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../../../../styles/index.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const HeroSlider = () => {
  const navigate = useNavigate();

  const handleScroll = () => {
    window.scrollTo(0, 0);
  };

  const slides = [
    {
      image: "/slider1.png",
      title: "Empowering Girls Through Education & Values",
      desc: "At Ash Girls High School, we believe in shaping confident, educated, and responsible young women. With academic excellence, discipline, and cultural development, we prepare our students for a bright future.",
    },
    {
      image: "/slider2.jpg",
      title: "Nurturing Young Minds for a Brighter Tomorrow",
      desc: "At Kantaben Manilal Patel Primary School, we believe every child is unique and capable of greatness.",
    },
    {
      image: "/slider3.jpg",
      title: "A Place Where Learning Feels Like Home",
      desc: "Creating a supportive and inspiring environment for every child.",
    },
  ];

  return (
    <div className="relative w-full h-fit">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) =>
            `<span class="my-dot ${className}"></span>`,
        }}
        navigation={{ enabled: true, nextEl: ".next", prevEl: ".prev" }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className=" relative h-[90vh] md:h-[85vh] lg:h-[80vh] xl:h-[74vh]">
              <img
                src={slide.image}
                className="w-full h-[98%] object-cover brightness-40  vcut"
              />
              <div className="absolute bottom-1/2 left-1/2 translate-y-1/2 -translate-x-1/2 md:-translate-x-0 md:translate-y-0 md:bottom-40 lg:bottom-30 md:left-25 w-[80%] md:w-[60%] lg:w-[50%] flex flex-col gap-6 lg:gap-8">
                {/* Enroll Now */}
                <button
                  onClick={() => {
                    navigate("/admission");
                    handleScroll();
                  }}
                  className="flex items-center gap-3 w-fit  bg-white rounded-[20px] px-3 py-1 cursor-pointer"
                >
                  <span className="font-montserrat font-medium text-[16px] lg:text-lg xl:text-xl">
                    Enroll Now
                  </span>
                  <ArrowRight className="w-[16px] lg:w-4 xl:w-5" />
                </button>

                <h3 className="text-3xl lg:text-4xl xl:text-5xl text-white font-montserrat font-semibold ">
                  {slide.title}
                </h3>

                <p className="text-[16px] lg:text-xl xl:text-2xl text-white font-medium">
                  {slide.desc}
                </p>

                <button
                  className="cursor-pointer text-white bg-[#CC4237] text-[16px] lg:text-lg xl:text-xl font-medium font-montserrat py-2 px-4 border border-transparent rounded-full text-center w-fit"
                  onClick={() => {
                    navigate("/academics");
                    handleScroll();
                  }}
                >
                  Explore Academics
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev & Next Arrow*/}
      <div className="prev absolute bottom-3 left-[30%] md:left-[40%] lg:left-[43%] xl:left-[45%] z-50 cursor-pointer">
        <ArrowLeft className="w-5" />
      </div>

      <div className="next absolute bottom-3 right-[30%] md:right-[40%] lg:right-[43%] xl:right-[45%] z-50 cursor-pointer">
        <ArrowRight className="w-5" />
      </div>
    </div>
  );
};

export default HeroSlider;
