import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";
import "./styles.css";

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
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log({ swiper })}
        onSlideChange={(swiper) => console.log("slide change", swiper)}
        //   onNavigationNext={(swiper) => console.log(swiper)}
        //   onNavigationPrev={(swiper) => console.log(swiper)}
        className="carousel-experience h-[89px] relative"
      >
        {experienceData.map((experience) => (
          <SwiperSlide key={experience.companyName}>
            <div className="h-full flex justify-center items-center">
              <span>{experience.companyName}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
