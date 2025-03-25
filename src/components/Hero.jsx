import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  { id: 1, image: "/images/casibom-bonanza-1000-pc.jpg" },
  { id: 2, image: "/images/VIP_Bell_Link_Desktop-scaled.jpg" },
  { id: 3, image: "/images/VIP_Bell_Link_Desktop-scaled.jpg" },
  { id: 4, image: "/images/casibom-bonanza-pc.jpg" },
  { id: 5, image: "/images/casibom-bonanza-pc.jpg" },
  { id: 6, image: "/images/casibom-bonanza-pc.jpg" },
  { id: 7, image: "/images/casibom-bonanza-pc.jpg" },
  { id: 8, image: "/images/casibom-bonanza-pc.jpg" },
  { id: 9, image: "/images/casibom-bonanza-pc.jpg" },
  { id: 10, image: "/images/casibom-bonanza-pc.jpg" },
  { id: 11, image: "/images/VIP_Bell_Link_Desktop-scaled.jpg" },
  { id: 12, image: "/images/VIP_Bell_Link_Desktop-scaled.jpg" },
];

const Carousel = () => {
  return (
    <div className="coursel bg-[#151414]  h-[20vh] md:h-[51vh] w-full">
    <Swiper
      modules={[ Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className="w-full h-full md:h-fit rounded-xl"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="relative h-[51vh] w-full">
          {/* Background Image */}
          <img
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className="w-full h-full object-cover"
          />

          {/* Centered Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-yellow-500  text-black font-bold  rounded-[0.5vw]  shadow-lg">
            HEMEN OYNA
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Carousel;
