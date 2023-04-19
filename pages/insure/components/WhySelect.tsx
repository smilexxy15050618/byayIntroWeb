import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';
import { RightArrow, LefttArrow } from '@indata/icon-byai';


const dataList = [
    {
        url: '/why1.png'
    },
    // {
    //     url: '/why2.png'
    // }
]
const Wrapper = styled.div`
padding-top: 80px;
padding-bottom: 100px;
  .myswiper-container {
    width: 1200px;
    margin: 0 auto;
    flex-wrap:wrap;
    display: flex;
    justify-content: center;
    transform: translateY(20%);
    transition: all 0.4s;
    opacity: 0;
    &.appear{
      transform: translateY(0);
      opacity: 1;
    }
    .swiper-wrapper {
        width: 1100px !important;
        text-align: center;
    }
    .swiper-container {
        background: rgba(255, 255, 255, 1);
    }
    .title {
        display: block;
        width: 306px;
        height: 24px;
        margin: 0 auto 109px;
    }
    .content {
        display: block;
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
    .my-slide {
        width: 1100px;
        height: 640px;
        opacity: 1;
        border-radius: 8px;
    }
  }
`
const Title = styled.div`
font-size: 40px;
font-weight: 500;
letter-spacing: 0px;
line-height: 48px;
color: rgba(26, 26, 26, 1);
text-align: center;
margin-bottom: 48px;
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
    img{
      width:100%;
      cursor:pointer;
    }
`
const WHYSELECT = 'WHYSELECT'
export const WhySelect: FC = () => {
    const [currIndex, setCurrIndex] = useState(0);
    useEffect(() => {
        const ScrollMagic = require('scrollmagic');
        var controller = new ScrollMagic.Controller();
        const videoContent = document.getElementById(WHYSELECT);
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
        <Wrapper>
            <Title>客户为什么选择百应</Title>
            <div id={WHYSELECT} className="myswiper-container">
            {/* <ArrowClick>
            <img src={`${imgurl}/arowl1.png`}  />
            </ArrowClick> */}
            <Swiper effect="slide" autoplay={{delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,}} 
            centeredSlides={true}
            spaceBetween={20}
            onSlideChange={swiper=>{
                setCurrIndex(swiper.activeIndex)
            }} style={{marginBottom:'42px'}}>
                <SwiperSlide>
                    <div className='my-slide'>
                    <img className='content' src={imgurl+'/why1.png'} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
            {/* <ArrowClick>
            <img src={`${imgurl}/arowr1.png`}  />
            </ArrowClick> */}

            <Swiper effect="slide" autoplay={{delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,}} 
            centeredSlides={true}
            spaceBetween={20}
            onSlideChange={swiper=>{
                setCurrIndex(swiper.activeIndex)
            }}>
                <SwiperSlide>
                    <div className='my-slide'>
                    <img className='content' src={imgurl+'/why2.png'} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
            </div>
        </Wrapper>
    )
}