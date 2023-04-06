import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import Box from '../../src/components/Box';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';
import { Content, LogoWrapper, SwiperWrapper, Text, PeopleList, PersonDesc, PersonName } from './styled';
import { RightArrow, LefttArrow } from '@indata/icon-byai';
import { CarouseLContent } from './CarouselContent';

interface ICarouselProps {
  dataList: { logoUrl: string; content: string; personAvatarSrc: string; personName: string; personDesc: string }[];
  style?: CSSProperties;
}

export const Carousel: React.FC<ICarouselProps> = ({ dataList, style }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);

  return (
    <SwiperWrapper style={style}>
      <RightArrow className="next-btn swiper-nav-btn" onClick={e => controlledSwiper.navigation.onNextClick(e)} />
      <LefttArrow className="prev-btn swiper-nav-btn" onClick={e => controlledSwiper.navigation.onPrevClick(e)} />
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        slidesPerView={1}
        onSwiper={swiper => setControlledSwiper(swiper)}
        onSlideChange={(...args) => console.log(args)}
        loop={true}>
        {dataList.map((data, i) => (
          <SwiperSlide>
            <CarouseLContent
              onClick={(e, i) =>
                i === 1 ? controlledSwiper.navigation.onPrevClick(e) : controlledSwiper.navigation.onNextClick(e)
              }
              dataList={dataList}
              index={i}
              data={data}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </SwiperWrapper>
  );
};
