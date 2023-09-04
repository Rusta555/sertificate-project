import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Carousel = ({ data, i }) => {

    return (
        <div key={i} className='carousel-swiper'>
            <Swiper
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                }}
                loop={true}
                pagination={{
                    clickable: true
                }}
                modules={[Autoplay, Pagination]}
                className='mySwiper'
            >
                {data.map((item, i ) => (
                    <SwiperSlide key={i} className='cursor-pointer'>
                        <div className='swiper'>
                            <img src={item.image} alt='product' />
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <span>{item.price}</span>
                            <span>$</span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
export default Carousel;








