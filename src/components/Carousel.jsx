import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";

const Carousel = (props) => {
  return (
    <div className='xxx'>\
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable:true,
        }}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
        >
            <SwiperSlide className='cursor-pointer'>
              <div className='swiper'>
              <img src="props.img" alt="product" />{props.image}
              <p>{props.title}</p>
              <p>{props.description}</p>
              <span>{props.price}</span>
              <span>$</span>
              </div>
            </SwiperSlide>
          </Swiper>
    </div>
  );
};
export default Carousel;








