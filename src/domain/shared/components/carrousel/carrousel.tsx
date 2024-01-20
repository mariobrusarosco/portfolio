"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carrousel.css";
import { useState } from "react";

interface Props {
  initialSlide: number;
  onSliderChange: (index: number) => void;
  list: any[];
  ComponentForSlide: React.FC<any>; // TODO - Type this
}

export const Carrousel = (props: Props) => {
  const { onSliderChange, initialSlide, list, ComponentForSlide } = props;
  const [sliderisMounted, setSliderisMounted] = useState(false);

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      navigation={sliderisMounted}
      pagination={{ clickable: true }}
      onSwiper={() => {
        setSliderisMounted(true);
      }}
      onSlideChange={(swiper) => onSliderChange(swiper.activeIndex)}
      className="carousel-experience relative "
      initialSlide={initialSlide}
      suppressHydrationWarning
    >
      {sliderisMounted
        ? list?.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="h-full flex justify-center items-center">
                <ComponentForSlide {...item} />
              </div>
            </SwiperSlide>
          ))
        : null}
    </Swiper>
  );
};
