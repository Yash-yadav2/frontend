import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper/modules";


const winners = [
  { name: "A. S.", game: "Sugar Rush 1000", amount: "₺ 106.258,00", img: "https://agstatic.com/games/egtdigital/315/flaming_hot_extreme_vip_bell_link.jpg" },
  { name: "K. S.", game: "Gates of Olympus 1000", amount: "₺ 14.926,50", img: "/image/lucky_penny.jpg" },
  { name: "A. E.", game: "Gold Party", amount: "₺ 16.740,00", img: "/images/casibom-bonanza-pc.jpg" },
  { name: "J. D.", game: "Starlight Princess", amount: "₺ 9.800,00", img: "/images/banner-persembe-v2-pc.jpg" },
  { name: "P. K.", game: "Sweet Bonanza", amount: "₺ 12.500,00", img: "https://agstatic.com/games/digitain/315/sportsbook.jpg" },
  { name: "M. G.", game: "Big Bass Bonanza", amount: "₺ 8.900,00", img: "/cardimages/big_bass_floats_my_boat.jpg" },
  { name: "L. T.", game: "Wolf Gold", amount: "₺ 11.250,00", img: "/cardimages/title-popular-bg-v2-tr.png" },
];

export default function LatestWinners() {
  return (
    <div className="bg-[#151414] text-white px-6 pb-8">
      <h2 className="text-xl font-semibold mb-4">LATEST WINNERS</h2>
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1 },  // Mobile: Show 1 winner at a time
          768: { slidesPerView: 2 },  // Tablet: Show 2 winners at a time
          1024: { slidesPerView: 3 }, // Desktop: Show 3 winners at a time
        }}
        spaceBetween={0}
        loop={true}
        freeMode={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[FreeMode, Autoplay]}
        className="w-full"
      >
        {winners.map((winner, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#262425]  flex justify-between overflow-hidden  items-center p-4 space-x-4">
             <div className="flex items-center justify-center gap-5">
             <img src={winner.img} alt={winner.game} className="w-16 h-16 " />
              <div>
                <p className="font-semibold">{winner.name}</p>
                <p className="text-gray-400 text-sm">{winner.game}</p>
              </div>
             </div>
             <div className="flex items-center justify-between gap-5">
             <p className="text-yellow-500 text-xl font-bold">{winner.amount}</p>
             <div className=" h-[7vh] w-[0.1vw] bg-gray-400"></div>
             </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
