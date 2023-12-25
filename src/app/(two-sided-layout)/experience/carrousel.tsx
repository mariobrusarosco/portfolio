import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
import "swiper/css/scrollbar";

export const Carrousel = () => {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper.activeIndex)}
        onSlideChange={(swiper) => console.log("slide change", swiper)}
        //   onNavigationNext={(swiper) => console.log(swiper)}
        //   onNavigationPrev={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};
