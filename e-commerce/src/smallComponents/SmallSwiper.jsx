import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const SmallSwiper = () => {
  const SmSwiperImgs = [
    '/Swiper/SmSwiperImg.jpg',
    '/Swiper/SmSwiperImg1.jpg',
    '/Swiper/SmSwiperImg2.jpg',
  ];
  return (
    <Swiper
      modules={[A11y, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      direction="vertical"
      spaceBetween={20}
      slidesPerView={2}
      className="aspect-video w-0 lg:w-1/3"
    >
      {SmSwiperImgs.map((el, i) => {
        return (
          <SwiperSlide key={i}>
            <img className="h-full rounded-xl" src={el} alt="SwiperImage" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SmallSwiper;
