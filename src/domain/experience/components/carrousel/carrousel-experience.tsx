"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./carrousel-experience.css";
import { useState } from "react";
import { experiences } from "../../typing/constants";

interface Props {
  initialSlide: number;
  onSliderChange: (index: number) => void;
}

export const CarrouselExperience = (props: Props) => {
  const { onSliderChange, initialSlide } = props;
  const [sliderisMounted, setSliderisMounted] = useState(false);

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      slidesPerView={1}
      navigation={sliderisMounted}
      pagination={{ clickable: true }}
      onSwiper={() => setSliderisMounted(true)}
      onSlideChange={(swiper) => onSliderChange(swiper.activeIndex)}
      className="carousel-experience relative "
      initialSlide={initialSlide}
      suppressHydrationWarning
    >
      {sliderisMounted
        ? experiences.map((experience) => (
            <SwiperSlide key={experience.companyName}>
              <div className="h-full flex text-primary-white justify-center items-center">
                <span>{experience.companyName}</span>
              </div>
            </SwiperSlide>
          ))
        : null}
    </Swiper>
  );
};
