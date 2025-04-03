import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import LoginForm from "./LoginForm";


const slides = [
  { id: 1, image: "/images/casibom-bonanza-1000-pc.jpg" },
  { id: 2, image: "/images/VIP_Bell_Link_Desktop-scaled.jpg" },
  { id: 10, image: "/images/casibom-bonanza-pc.jpg" },
  { id: 11, image: "/images/VIP_Bell_Link_Desktop-scaled.jpg" },
];


const Carousel = () => {
const [isOpen, setIsOpen] = useState(false);

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
            <button onClick={() => setIsOpen(true)} className="bg-yellow-500  text-black font-bold  rounded-[0.5vw]  shadow-lg">
            HEMEN OYNA
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
{isOpen && <LoginForm onClose={() => setIsOpen(false)} />}

    </div>
  );
};

export default Carousel;
