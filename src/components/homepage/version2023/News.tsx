import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../../img.url.js'
import { Swiper, SwiperSlide, Pagination} from 'swiper/react';

const Title = styled.div`
font-size: 40px;
font-weight: 500;
letter-spacing: 0px;
line-height: 48px;
color: rgba(26, 26, 26, 1);
text-align: center;
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
padding-top: 47px;
padding-bottom: 67px;
.swiper-container {
    width: 704px;
    height: 408px;
    background: rgb(209, 221, 252);
    margin: 0;
    .swiper-pagination-bullet {
        width: 14px;
        height: 14px;
        border: none;
        background: url(${imgurl}/bullets.png);
        background-size: 100% 100%;
    }
    .swiper-pagination-bullet-active {
        background: url(${imgurl}/bullets-active.png);
        background-size: 100% 100%;
    }
}
`
const RightNews = styled.div`
width: 420px;
height: 408px;
border-radius: 8px;
background: rgba(246, 252, 255, 1);
margin-left: 24px;
padding: 24px;
.top {
    display: flex;
    justify-content: space-between;
    span:first-child {
        font-size: 20px;
font-weight: 500;
letter-spacing: 0px;
line-height: 32px;
color: rgba(26, 26, 26, 1);
    }
    span:last-child {
        cursor: pointer;
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 32px;
        color: rgba(43, 88, 249, 1);
    }
}
.center {
    margin-top: 28px;
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
        img {
            width: 128px;
            height: 56px;
            margin-bottom: 0px;
        }
        span {
            font-size: 14px;
font-weight: 500;
letter-spacing: 0px;
line-height: 22px;
color: rgba(90, 90, 90, 1);
cursor: pointer;
&:hover {
    color: #2B58F9;
}
        }
    }
}
`
const list = [
    {
        text: '打造数字政务发展新标杆，百应发布国内首个政务行业专有大模型“万机”'
    },
    {
        text: '创新引领｜百应科技荣登《2023中国未来独角兽TOP100榜单》'
    },
    {
        text: '百应科技“AI警官”亮相第二十二届中国国际安博会'
    },
    {
        text: '百应科技实力入选「2022中国企业数智化创新TOP50」榜单'
    }
]
export const News = () => {
    return (
        <div style={{paddingTop: '80px'}}>
            <Title>新闻动态</Title>
        <Wrapper>
            <Swiper effect="slide"  autoplay={{
             delay: 1000,
             disableOnInteraction: false,
             pauseOnMouseEnter: true
        }}
        pagination={{ clickable: true }}
        >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>

            </Swiper>
           <RightNews>
             <div className='top'>
                <span>百应动态</span>
                <span>查看更多</span>
             </div>
             <div className='center'>
                {list.map((item)=> {
                    return(<div>
                    <img src="" alt="" />
                    <span>{item.text}</span>
                    </div>)
                })}
             </div>
           </RightNews>
        </Wrapper>
        </div>
    )
}