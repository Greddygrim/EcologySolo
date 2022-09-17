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
          <img data-src="/smalltree.jpg" className="swiper-lazy" />
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
      <Footer />
    </div>
  );
};
export default Home;
