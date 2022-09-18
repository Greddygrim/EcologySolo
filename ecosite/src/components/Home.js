import React from "react";
import { Navbar } from "./navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Footer } from "./Footer.js";
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "swiper/css";

// import required modules
import { Lazy, Pagination, Navigation } from "swiper";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        lazy
        pagination={{
          clickable: true,
        }}
        navigation
        modules={[Lazy, Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <h1 className="swiper-header">Plant a Tree & Save the Planet</h1>
          <img data-src="/smalltreemaker.jpg" className="swiper-lazy" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="swiper-header">Protect our Oceans</h1>
          <img data-src="oceans.jpg" className="swiper-lazy" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="swiper-header">Save the Bees</h1>
          <img data-src="bees.jpg" className="swiper-lazy" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="swiper-header">Defend Our Forrest</h1>
          <img data-src="forrest.jpg" className="swiper-lazy" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      </Swiper>
      <Footer />
    </div>
  );
};
export default Home;
