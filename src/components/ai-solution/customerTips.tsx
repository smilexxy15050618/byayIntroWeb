import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';
import Pane from '../../components/homepage/version2023/Pane';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'
import ByProgressSwiper from '../../../src/components/common/ByProgressSwiper';



// import { RightArrow, LefttArrow } from '@indata/icon-byai';

interface ICarouselProps {
    style?: CSSProperties;
}

const HoveUp = styled.div`
        position: relative;
    .coverimg{
        position: absolute;
        height: 860px;
        width:100%;
    }
    #CUSTOMERTIPS {
        transform: translateY(50%);
        transition: all 0.4s;
        opacity: 0;
        &.appear{
            transform: translateY(0);
            opacity: 1;
          }
    }
   .wrap_hovres{
        width: 1080px;
        margin:0 auto; 
       @media(max-width: 768px) {
        width: 100vw;
            .custom-bar-wrapper{
                width: 300px;
            }
       }
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
    @media(max-width: 768px) {
        width: 100%;
        padding: 0;
        img{
            width:100%;
            margin:0 auto;
        }
    }
    
   }
`

const ArrowClick = styled.div`
width: 18px;
    height: 40px;
    opacity: 1;
    align-self:center;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    z-index:22;
    cursor: pointer;
    .left_img{
        width: 18px;

        height: 40px;
    cursor:pointer;
    &:hover {
        content: url(${imgurl}/left_blue.png)
    }
    }
    .right_img {
        width: 18px;

        height: 40px;
        cursor:pointer;
        &:hover {
            content: url(${imgurl}/right_blue.png)
        }
    }
    img{
        margin-bottom: 0;
    }
`
const dataList = [
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
    },
    {
        url: '/cusino5.png',
        bg: '/syt.png'
    }
]
let imglegt = `${imgurl}/arowl1.png`;
let imgright = `${imgurl}/arowl2.png`;
const CUSTOMERTIPS = 'CUSTOMERTIPS'
const Carousel: React.FC<ICarouselProps> = ({ style }) => {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [currIndex, setCurrIndex] = useState(0);
    const [arrowbg, setArrowbg] = useState(imglegt);
    const [arrowbg2, setArrowbg2] = useState(imgright);
    useEffect(() => {
        const ScrollMagic = require('scrollmagic');
        var controller = new ScrollMagic.Controller();
        const videoContent = document.getElementById(CUSTOMERTIPS);
        new ScrollMagic.Scene({
            triggerElement: videoContent, //触发元素
            triggerHook: 'onEnter', //触发元素开始离开视口时触发
            offset: 10, //从开始点滚动多少px触发（施法前摇）
            duration: 400, //效果持续的距离（法术持续时间/距离）
        })
            // .setClassToggle('.aitxs', 'appear')
            .addTo(controller)
            .on('enter', () => {
                videoContent.classList.add('appear')
                // console.log('进入');

                controller.destroy();
            });
    }, []);
    return (

        <HoveUp>
            <Visible md lg xl xxl xxxl>
                <div style={{ 'background': '#F6FCFF' }} className='coverimg'>

                </div>
                <div id={CUSTOMERTIPS} style={{ width: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
                    <ArrowClick onClick={e => {
                        const res = controlledSwiper.navigation.onPrevClick(e);
                    }} style={{ marginRight: 30 }} onMouseEnter={() => {
                        // if(currIndex != 0){
                        setArrowbg(`${imgurl}/arowl1hover.png`)
                        // }
                    }}
                        onMouseLeave={() => {
                            setArrowbg(imglegt)
                        }}>
                        <img src={arrowbg} />
                    </ArrowClick>

                    <div className='wrap_hovres'>

                        <Pane title="客户案例"
                            titleStyle={{ marginBottom: '48px', position: 'relative', zIndex: 22 }}
                            style={{ paddingBottom: 100, background: 'none' }} mobileStyle={{ paddingBottom: 40 }}>
                                <Swiper
                                    
                                    className='swiperwrap'
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true
                                    }}
                                    loop={true}
                                    slidesPerView='auto'
                                    onSwiper={swiper => setControlledSwiper(swiper)}
                                    onSlideChange={(e) => { console.log(setCurrIndex(e.activeIndex)) }}
                                >
                                    {dataList.map(({ url }) => (
                                        <SwiperSlide style={{}}>
                                            <div className='card'>
                                                <img src={`${imgurl}${url}`} />
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                        </Pane>
                    </div>
                    <ArrowClick onClick={e => {
                        controlledSwiper.navigation.onNextClick(e);
                    }} style={{ marginLeft: 30 }} onMouseEnter={() => {
                        // if(currIndex != 0){
                        setArrowbg2(`${imgurl}/arowl2hover.png`)
                        // }
                    }}
                        onMouseLeave={() => {
                            setArrowbg2(imgright)
                        }}>
                        <img src={arrowbg2} />
                    </ArrowClick>
                </div>
            </Visible>
            <Visible xs sm>

                <div id={CUSTOMERTIPS} style={{ width: 'calc(100vw - 18px)', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>

                    <div className='wrap_hovres'>

                        <Pane title="客户案例"
                            titleStyle={{ marginBottom: '48px', position: 'relative', zIndex: 22 }}
                            style={{ paddingBottom: 100 }} mobileStyle={{ paddingBottom: 40 }}>
                            <ByProgressSwiper
                                newProgress={true}
                                initialSlide={0}
                                contentPadding="2.4%" progressPadding="0px"
                                previewWidth="0"
                            >
                                {dataList.map(({ url }) => (
                                    <div style={{}}>
                                        <div className='card'>
                                            <img src={`${imgurl}${url}`} />
                                        </div>
                                    </div>
                                ))}
                            </ByProgressSwiper>
                    </Pane>
                </div>
            </div>
        </Visible>
        </HoveUp >

    );
};

export default Carousel;
