import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

const MainSwiper = () => {
  const LgSwiperImgs = [
    '/Swiper/LgSwiperImg.jpg',
    '/Swiper/LgSwiperImg1.jpg',
    '/Swiper/LgSwiperImg2.jpg',
  ];

  return (
    <Swiper
      modules={[A11y, Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      spaceBetween={20}
      slidesPerView={1}
      className="aspect-video w-full lg:w-2/3"
    >
      {LgSwiperImgs.map((el, i) => {
        return (
          <SwiperSlide key={i}>
            <img className="h-full rounded-xl" src={el} alt="SwiperImage" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MainSwiper;
