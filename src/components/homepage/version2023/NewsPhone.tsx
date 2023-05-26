import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../../img.url.js';
import { Swiper, SwiperSlide, Pagination } from 'swiper/react';

const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 32px;
  color: rgba(26, 26, 26, 1);
  text-align: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 40px;
  padding-left: 16px;
  padding-right: 16px;
  .swiper-container {
    width: 100%;
    height: 204px;
    border-radius: 8px;
    margin: 0;
    .swiper-pagination {
      text-align: left;
      padding-left: 16px;
    }
    .swiper-slide {
      background: url(${imgurl}/hybg1.png) no-repeat;
      background-size: 100% 100%;
      &:nth-child(2) {
        background: url(${imgurl}/hybg3.png) no-repeat;
        background-size: 100% 100%;
      }
      &:nth-child(3) {
        background: url(${imgurl}/hybg2.png) no-repeat;
        background-size: 100% 100%;
      }
      button {
        &:hover {
          color: rgba(43, 88, 249, 1);
          border-color: rgba(43, 88, 249, 1);
        }
        &:focus {
          border: 1px solid #1a1a1a !important;
          color: #1a1a1a !important;
          outline: none;
        }
      }
    }
    .swiper-pagination-bullet {
      width: 14px;
      height: 14px;
      border: none;
      background: url(${imgurl}/bullets.png);
      background-size: 100% 100%;
      margin-right: 11px;
    }
    .swiper-pagination-bullet-active {
      background: url(${imgurl}/bullets-active.png);
      background-size: 100% 100%;
    }
    .swiper-slide {
      padding: 16px;
      box-sizing: border-box;
      border-radius: 8px;
      div:first-child {
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 32px;
        color: #1a1a1a;
        margin-bottom: 24px;
      }
      div:nth-child(2) {
        font-size: 24px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 40px;
        color: #1a1a1a;
        margin-bottom: 38px;
      }
      button {
        // width: 60px;
        // height: 20px;
        padding: 0 5px;
        opacity: 1;
        border-radius: 4px;

        border: 1px solid #1a1a1a;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        // line-height: 18px;
        color: #1a1a1a;
        text-align: center;
        background: none;
      }
    }
  }
`;
const RightNews = styled.div`
width: 100%;
border-radius: 8px;
background: rgba(246, 252, 255, 1);
padding: 20px;
margin-top: 24px;
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
.hoverCode{
    position: relative;
    display:inline-block;
    width:140px;
    text-align:right;
    .bgsks{
    display:none;

        border-radius: 4px;
        background-color: white;
        width: 140px;
        height:140px;
        line-height:140px;
        text-align:center;
        z-index: 3;
    position: absolute;
        top: 0;
    transform: translateY(-100%) translateX(25%);
    }
    .qrcode{
            width:140px
       margin:0;
    }

}
.hoverCode:hover .bgsks{
    display:block;
}
.center {
    margin-top: 28px;
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        img {
            width: 109px;
            height: 47px;
            margin-bottom: 0px;
            margin-right: 12px;
            border-radius: 4px;
        }
        span {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0px;
          line-height: 20px;
          color: rgba(90, 90, 90, 1);
          cursor: pointer;
          overflow: hidden;
    text-overflow: ellipsis;
  // 只要超过宽度就换行，不论中文还是英文
    word-break: break-all;
 //最多展示两行
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
          &:hover {
              color: #2B58F9;
          }
        }
    }
}
`;
const list = [
  {
    img: `${imgurl}/dongtai1.jpeg`,
    text: '打造数字政务发展新标杆，百应发布国内首个政务行业专有大模型“万机”',
    path: 'https://mp.weixin.qq.com/s/WQ0NuKNJbSuIwsRNaC5qcw',
  },
  {
    img: `${imgurl}/dongtai2.jpeg`,
    text: '创新引领｜百应科技荣登《2023中国未来独角兽TOP100榜单》',
    path: 'https://mp.weixin.qq.com/s/1yppgDXsWYBGhyeC14-sKg',
  },
  {
    img: `${imgurl}/dongtai3.jpeg`,
    text: '百应科技“AI警官”亮相第二十二届中国国际安博会',
    path: 'https://mp.weixin.qq.com/s/VzW7r4vKjkaHcFco4gaPyg',
  },
  {
    img: `${imgurl}/dongtai4.jpg`,
    text: '百应科技实力入选「2022中国企业数智化创新TOP50」榜单',
    path: 'https://mp.weixin.qq.com/s/irAz2DFmGIZAenwn_YR4ug',
  },
];
export const NewsPhone = () => {
  return (
    <div style={{ paddingTop: '40px' }}>
      <Title>新闻与动态</Title>
      {/* <Title>洞察行业趋势发展</Title> */}
      <Wrapper>
        <Swiper
          effect="slide"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}>
          <SwiperSlide>
            <div 
              style={{
                fontSize: '16px',
                fontWeight: '500',
                letterSpacing: '0px',
                lineHeight: '18px',
                color: 'rgba(26, 26, 26, 1)',
                marginBottom: '10px'
              }}
            >行业报告</div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: '400',
                letterSpacing: '0px',
                lineHeight: '20px',
                color: 'rgba(26, 26, 26, 1)',
                marginBottom: '18px'
              }}>
              引领对话式AI，百应科技入选<br></br>艾瑞《2022中国人工智能产业研究报告》
            </div>
            <button
              onClick={() => {
                window.open('https://mp.weixin.qq.com/s/B5PsNbhgrzjIfoZyIFel6A');
              }}>
              查看详情
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <div
                style={{
                fontSize: '16px',
                fontWeight: '500',
                letterSpacing: '0px',
                lineHeight: '18px',
                color: 'rgba(26, 26, 26, 1)',
                marginBottom: '10px'
              }}>行业报告</div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: '400',
                letterSpacing: '0px',
                lineHeight: '20px',
                color: 'rgba(26, 26, 26, 1)',
                marginBottom: '18px'
              }}>
              人人都想要的超级用户，<br></br>《私域2.0-会员全域增长白皮书》正式发布！
            </div>
            <button
              onClick={() => {
                window.open('https://mp.weixin.qq.com/s/-ASpK_Yjmi50cGTGnAOb8g');
              }}>
              查看详情
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                fontSize: '16px',
                fontWeight: '500',
                letterSpacing: '0px',
                lineHeight: '18px',
                color: 'rgba(26, 26, 26, 1)',
                marginBottom: '10px'
              }}>行业报告</div>
            <div
              style={{
                fontSize: '12px',
                fontWeight: '400',
                letterSpacing: '0px',
                lineHeight: '20px',
                color: 'rgba(26, 26, 26, 1)',
                marginBottom: '18px'
              }}>
              参编《2022浙江省人工智能产业发展报告<br></br>百应硬核展现“再上分”
            </div>
            <button
              onClick={() => {
                window.open('https://mp.weixin.qq.com/s/ZIO9FaodpCTOaEV3-Akkyg');
              }}>
              查看详情
            </button>
          </SwiperSlide>
        </Swiper>
        <RightNews>
          <div className="top">
            <span  style={{
                fontSize: '16px',
                fontWeight: '500',
                letterSpacing: '0px',
                lineHeight: '18px',
                color: 'rgba(26, 26, 26, 1)',
                marginBottom: '10px'
              }}>百应动态</span>
            <span className="hoverCode">
              查看更多
              <div className="bgsks">
                <img
                  src="https://cdn.byai.com/by-fe-cdn/static/pmp/77229f52-63fc-45b3-a901-4e54192c540a.png"
                  className="qrcode"
                />
              </div>
            </span>
          </div>
          <div className="center">
            {list.map(item => {
              return (
                <div
                  onClick={() => {
                    if (item.path) {
                      window.open(item.path);
                    }
                  }}>
                  <img src={item.img} alt="" />
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </RightNews>
      </Wrapper>
    </div>
  );
};
