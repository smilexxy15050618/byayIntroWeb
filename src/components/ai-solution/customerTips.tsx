import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';
import Pane from '../../components/homepage/version2023/Pane';
import { Hidden, Visible } from 'react-grid-system';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'



// import { RightArrow, LefttArrow } from '@indata/icon-byai';

interface ICarouselProps {
    style?: CSSProperties;
}

const HoveUp = styled.div`
        position: relative;
    .coverimg{
        position: absolute;
        height: 625px;
        width:100%;
    }
   .wrap_hovres{
        width: 1080px;
    margin:0 auto; 
   }
   .swiperwrap{
    box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
    border-radius: 8px;

   }

   .card{
    width:1080px;
    padding:40px;
    border:none;
    margin:0 auto;
    box-sizing:border-box;
    img{
        width:1000px;
        margin:0 auto;
    }
   }
`

const ArrowClick = styled.div`
    width: 40px;
    height: 40px;
    opacity: 1;
    align-self:center;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    z-index:22;
    img{
      width:100%;
    cursor:pointer;

    }
`
const dataList = [
    {
        url: '/cusino5.png',
        bg: '/syt.png'
    },
    {
        url: '/cusino2.png',
        bg: '/mz.png'
    },
    {
        url: '/cusino3.png',
        bg: '/fs.png',
    },
    {
        url: '/cusino4.png',
        bg: '/ry.png'
    }
]
const Carousel: React.FC<ICarouselProps> = ({ style }) => {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [currIndex,setCurrIndex] = useState(0);
    return (

        <HoveUp>
            <div style={{'background': `url(${imgurl}${dataList[currIndex].bg}) no-repeat,100% 100%`}} className='coverimg'>

            </div>
            <div style={{ width: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
                <ArrowClick onClick={e => {
                    const res = controlledSwiper.navigation.onPrevClick(e);
                }} style={{ marginRight: 30 }}>
                    <img src={`${imgurl}/arowl1.png`} />
                </ArrowClick>

                <div className='wrap_hovres'>

                    <Pane title=" 客户案例"
                        titleStyle={{ marginBottom: '48px' }}
                        style={{ paddingBottom: 100 }} mobileStyle={{ paddingBottom: 40 }}>
                        <Hidden xs sm>
                            <Swiper
                                className='swiperwrap'
                                autoplay={{
                                    delay: 5000,
                                }}
                                slidesPerView='auto'
                                onSwiper={swiper => setControlledSwiper(swiper)}
                                onSlideChange = {(e)=> {console.log(setCurrIndex(e.activeIndex))}}
                                loop={false}>
                                {dataList.map(({url}) => (
                                    <SwiperSlide style={{}}>
                                        <div className='card'>
                                            <img src={`${imgurl}${url}`} />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </Hidden>
                        <Visible xs sm>
                            {/* <CarouselMobile dataList={carouselDataList}></CarouselMobile> */}
                        </Visible>
                    </Pane>
                </div>
                <ArrowClick onClick={e => {
                    controlledSwiper.navigation.onNextClick(e);
                }} style={{ marginLeft: 30 }}>
                    <img src={`${imgurl}/arowr1.png`} />
                </ArrowClick>
            </div>
        </HoveUp>

    );
};

export default Carousel;
