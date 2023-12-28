import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "./styles.css";
import { useState } from "react";

const experienceData = [
  {
    companyName: "Enext",
    description: "Description 1",
  },
  {
    companyName: "FIAP",
    description: "Description 2",
  },
  {
    companyName: "Red Ventures",
    description: "Description 3",
  },
  {
    companyName: "Origin",
    description: "Description 4",
  },
];

export const CarrouselExperience = () => {
  const [sliderisMounted, setSliderisMounted] = useState(false);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation={sliderisMounted}
        pagination={{ clickable: true }}
        onSwiper={() => setSliderisMounted(true)}
        onSlideChange={(swiper) => console.log("slide change", swiper)}
        className="carousel-experience relative"
      >
        {sliderisMounted
          ? experienceData.map((experience) => (
              <SwiperSlide key={experience.companyName}>
                <div className="h-full flex justify-center items-center">
                  <span>{experience.companyName}</span>
                </div>
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </>
  );
};
