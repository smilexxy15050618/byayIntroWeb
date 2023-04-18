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
export const WhySelect: FC = () => {
    const [currIndex, setCurrIndex] = useState(0);
    return (
        <Wrapper>
            <Title>客户为什么选择百应</Title>
            <div className="myswiper-container">
            {/* <ArrowClick>
            <img src={`${imgurl}/arowl1.png`}  />
            </ArrowClick> */}
            <Swiper effect="slide" autoplay={{delay: 1000}} 
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

            <Swiper effect="slide" autoplay={{delay: 1000}} 
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