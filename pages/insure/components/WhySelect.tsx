import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'
import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';
import { RightArrow, LefttArrow } from '@indata/icon-byai';


const dataList = [
    {
        title: '/why_title1.png',
        url: '/why1.png'
    }
]
const Wrapper = div.styled`

`
const Title = div.styled`
font-size: 40px;
font-weight: 500;
letter-spacing: 0px;
line-height: 48px;
color: rgba(26, 26, 26, 1);
text-align: center;
`
export const WhySelect: FC = () => {
    const [currIndex, setCurrIndex] = useState(0);
    return (
        <Wrapper>
            <Title>客户为什么选择百应</Title>
            <ArrowClick>
            <img src={`${imgurl}/arowl1.png`}  />
            </ArrowClick>
            <Swiper effect="slide" autoplay={{delay: 1000}} 
            centeredSlides={true}
            spaceBetween={24}
            onSlideChange={swiper=>{
                setCurrIndex(swiper.activeIndex)
            }}>
            {DataTransferItemList.map(({url,title})=> (
                <SwiperSlide style={{width: '1080px'}}>
                    <div>
                    <img src={title} alt="" />
                    <img src={url} alt="" />
                    </div>
                </SwiperSlide>
            )

            )}
            </Swiper>
            <ArrowClick>
            <img src={`${imgurl}/arowl1.png`}  />
            </ArrowClick>
        </Wrapper>
    )
}