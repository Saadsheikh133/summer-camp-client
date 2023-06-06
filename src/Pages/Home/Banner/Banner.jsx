import { Pagination, Navigation, HashNavigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import racket from '../../../assets/images/racket.jpg';
import cricket from '../../../assets/images/cricket.jpg';
import basketball from '../../../assets/images/basketball.jpg';
import tenise from '../../../assets/images/tenise.jpg';
import football from '../../../assets/images/football.jpg';
import hockey from '../../../assets/images/hockey.jpg';


const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                hashNavigation={{
                    watchState: true,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation, HashNavigation]}
                className="mySwiper"
            >
                <SwiperSlide data-hash="slide1">
                    <img className="h-[500px] w-full" src={racket} alt="" />
                </SwiperSlide>
                <SwiperSlide data-hash="slide2">
                    <img className="h-[500px] w-full" src={cricket} alt="" />
                </SwiperSlide>
                <SwiperSlide data-hash="slide3">
                    <img className="h-[500px] w-full" src={basketball} alt="" />
                </SwiperSlide>
                <SwiperSlide data-hash="slide4">
                    <img className="h-[500px] w-full" src={tenise} alt="" />
                </SwiperSlide>
                <SwiperSlide data-hash="slide5">
                    <img className="h-[500px] w-full" src={football} alt="" />
                </SwiperSlide>
                <SwiperSlide data-hash="slide6">
                    <img className="h-[500px] w-full" src={hockey} alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;