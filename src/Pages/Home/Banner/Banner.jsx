import { Pagination, Navigation, HashNavigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

import racket from '../../../assets/images/racket2.jpg';
import cricket from '../../../assets/images/cricket2.jpg';
import basketball from '../../../assets/images/basketball2.jpg';
import tenise from '../../../assets/images/tenise2.jpg';
import football from '../../../assets/images/football2.jpg';
import hockey from '../../../assets/images/hockey2.jpg';


const Banner = () => {
    return (
        <div className='pt-24'>
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
                <SwiperSlide className="related" data-hash="slide1">
                    <img className="h-[500px] w-full object-cover rounded-xl" src={racket} alt="" />
                    <div className="absolute flex items-center text-white w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0">
                        <div className="space-y-7 lg:w-1/2 lg:pl-12 ">
                            <h2 className="text-4xl text-semibold">Badminton</h2>
                            <p className="tracking-wide lg:text-xl">The beginnings of badminton can be traced to the mid-1800s, where it was created by British military officers stationed in British India. Originally called battledore rather than badminton, its use of a shuttlecock, rather than a ball, has remained constant over the years.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-hash="slide2">
                    <img className="h-[500px] w-full object-cover rounded-xl" src={cricket} alt="" />
                    <div className="absolute flex items-center text-white w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0">
                        <div className="space-y-7 lg:w-3/4 lg:pl-12 ">
                            <h2 className="text-4xl text-semibold">Cricket</h2>
                            <p className="tracking-wide lg:text-xl">There is a consensus of expert opinion that cricket may have been invented during Saxon or Norman times by children living in the Weald, an area of dense woodlands and clearings in south-east England. The first reference to cricket being played as an adult sport was in 1611, and in the same year, a dictionary defined cricket as a boys game. There is also the thought that cricket may have derived from bowls, by the intervention of a batsman trying to stop the ball from reaching its target by hitting it away.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-hash="slide3">
                    <img className="h-[500px] w-full object-cover rounded-xl" src={basketball} alt="" />
                    <div className="absolute flex items-center text-white w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0">
                        <div className="space-y-7 lg:w-1/2 lg:pl-12 ">
                            <h2 className="text-4xl text-semibold">Basketball</h2>
                            <p className="tracking-wide lg:text-xl">Basketball was invented by James Naismith in Springfield, Massachusetts, in 1891. Within a few decades, the new game became popular throughout the United States as an indoor sport. The popularity spread overseas and the International Basketball Federation (FIBA) was organized in 1932 in Geneva, Switzerland.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-hash="slide4">
                    <img className="h-[500px] w-full object-cover rounded-xl" src={tenise} alt="" />
                    <div className="absolute flex items-center text-white w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0">
                        <div className="space-y-7 lg:w-3/4 lg:pl-12 ">
                            <h2 className="text-4xl text-semibold pt-4">Tennis</h2>
                            <p className="tracking-wide lg:text-xl">The racket sport traditionally named lawn tennis, invented in Birmingham, England, now commonly known simply as tennis, is the direct descendant of what is now denoted real tennis or royal tennis, which continues to be played today as a separate sport with more complex rules. Most rules of (lawn) tennis derive from this precursor and it is reasonable to see both sports as variations of the same game. Most historians believe that tennis originated in the monastic cloisters in northern France in the 12th century, but the ball was then struck with the palm of the hand, hence the name jeu de paume (game of the palm).It was not until the 16th century that rackets came into use and the game began to be called tennis. It was popular in England and France, and Henry VIII of England was a big fan of the game, now referred to as real tennis.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-hash="slide5">
                    <img className="h-[500px] w-full object-cover mt-10 rounded-xl" src={football} alt="" />
                    <div className="absolute flex items-center text-white w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0">
                        <div className="space-y-7 lg:w-3/4 lg:pl-12 ">
                            <h2 className="text-4xl text-semibold">Football</h2>
                            <p className="lg:text-xl">The history of association football, more commonly known as football or soccer, stretches back at least to the medieval times. Some predecessors of football may date back to ancient Greece and Rome, and similar games were played in ancient China and Japan. The history of football in Britain dates at least to the eighth century CE.

                                The development of association football has its origins in medieval ball games and English public school games. The modern game of association football originated in the mid-nineteenth century by the efforts of English football clubs to standardize the varying sets of football rules, culminating in the formation of The Football Association (The FA) in London, England, in 1863, and their issuing of the Laws of the Game in the same year.The Laws of the Game were later trusted to the International Football Association Board (IFAB) and then adopted by the International Association Football Federation (FIFA).</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-hash="slide6">
                    <img className="h-[500px] w-full object-cover rounded-xl" src={hockey} alt="" />
                    <div className="absolute flex items-center text-white w-full h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0">
                        <div className="space-y-7 lg:w-3/4 lg:pl-12 ">
                            <h2 className="text-4xl text-semibold">Hockey</h2>
                            <p className="tracking-wide lg:text-xl">Ice hockey (or simply hockey) is a team sport played on ice skates, usually on an ice skating rink with lines and markings specific to the sport. It belongs to a family of sports called hockey. In ice hockey, two opposing teams use ice hockey sticks to control, advance, and shoot a closed, vulcanized, rubber disc called a puck into the other teams goal. Each goal is worth one point. The team which scores the most goals is declared the winner. In a formal game, each team has six skaters on the ice at a time, barring any penalties, one of whom is the goaltender. Ice hockey is a full contact sport, and is considered to be one of the more physically demanding team sports.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;