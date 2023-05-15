import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
// import Pane from '../../../src/components/homepage/version2023/Pane';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js';
import { Hidden, Visible } from 'react-grid-system';

export type IStrategyProps = {};
const Pane = styled.div`
  margin-top: 80px;
  min-height: 300px;
  
  .title {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 48px;
    color: rgba(26, 26, 26, 1);
    text-align: center;
   
  }
  @media (max-width: 768px) { 
    .title{
      width: 300px;
      margin: 0 auto;
      font-size: 24px;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 40px;
    }
     
    }

  .desc {
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 32px;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    margin: 16px auto 40px;
  }
  
`;
const ArrowClick = styled.div`
  width: 18px;
  height: 40px;
  opacity: 1;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  z-index: 22;
  .left_img {
    width: 100%;
    cursor: pointer;
    margin-bottom: 0;
    &:hover {
      content: url(${imgurl}/hover_left1.png);
    }
  }
  .right_img {
    width: 100%;
    cursor: pointer;
    margin-bottom: 0;
    &:hover {
      content: url(${imgurl}/hover_right1.png);
    }
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justifycontent: center;
  transform: translateY(50%);
  transition: all 0.4s;
  opacity: 0;
  &.appear {
    transform: translateY(0);
    opacity: 1;
  }
  .swiper-container {
    width: 1100px;
    .my-slide {
      width: 1100px;
    }
  }
  @media (max-width: 768px) { 
    .swiper-container {
    width: 100%;
    .my-slide {
      width:  100%;
    }
  }
     
    }
`;
const STRATEGY = 'STRATEGY_WRAP';
const Strategy: FC<IStrategyProps> = ({}) => {
  useEffect(() => {
    const videoContent = document.getElementById(STRATEGY);
    videoContent.classList.add('appear');
  }, []);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  return (
    <>
      <Pane>
      <Hidden xs sm>
        <div className="title">以数智化提升车企营销、获客、客户服务能力及效果</div>
        {/* <div class="desc">目前汽车行业面临的痛点</div> */}
        <div style={{ maxWidth: 1200, width: '100vw', margin: '0 auto', marginTop: '24px' }}>
          <Wrapper id={STRATEGY}>
            <ArrowClick
              onClick={e => {
                controlledSwiper.navigation.onPrevClick(e);
              }}>
              <img className="left_img" src={`${imgurl}/left1.png`} />
            </ArrowClick>
            <Swiper
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              onSwiper={swiper => setControlledSwiper(swiper)}>
              <SwiperSlide style={{ width: '1100px' }} className="my-slide">
                <img style={{ textAlign: 'center', maxWidth: '100%' }} src={imgurl + '/carbanner1.png'}></img>
              </SwiperSlide>
              <SwiperSlide style={{ width: '1100px' }} className="my-slide">
                <img style={{ textAlign: 'center', maxWidth: '100%' }} src={imgurl + '/carbanner2.png'}></img>
              </SwiperSlide>
              <SwiperSlide style={{ width: '1100px' }} className="my-slide">
                <img style={{ textAlign: 'center', maxWidth: '100%' }} src={imgurl + '/carbanner3.png'}></img>
              </SwiperSlide>
            </Swiper>
            <ArrowClick
              onClick={e => {
                controlledSwiper.navigation.onNextClick(e);
              }}>
              <img className="right_img" src={`${imgurl}/right1.png`} />
            </ArrowClick>
          </Wrapper>
        </div>
      </Hidden>
      <Visible xs sm>
      <div className="title">以数智化提升车企营销1、获客、客户服务能力及效果</div>
        {/* <div class="desc">目前汽车行业面临的痛点</div> */}
        <div style={{  width: '100vw', marginTop: '24px' }}>
          <Wrapper id={STRATEGY}>
            <ArrowClick
              onClick={e => {
                controlledSwiper.navigation.onPrevClick(e);
              }}>
              <img className="left_img" src={`${imgurl}/left1.png`} />
            </ArrowClick>
            <Swiper
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              onSwiper={swiper => setControlledSwiper(swiper)}>
              <SwiperSlide style={{ width: '100%' }} className="my-slide">
                <img style={{ textAlign: 'center', maxWidth: '100%' }} src={imgurl + '/carbanner1.png'}></img>
              </SwiperSlide>
              <SwiperSlide style={{ width: '100%' }} className="my-slide">
                <img style={{ textAlign: 'center', maxWidth: '100%' }} src={imgurl + '/carbanner2.png'}></img>
              </SwiperSlide>
              <SwiperSlide style={{ width: '100%' }} className="my-slide">
                <img style={{ textAlign: 'center', maxWidth: '100%' }} src={imgurl + '/carbanner3.png'}></img>
              </SwiperSlide>
            </Swiper>
            <ArrowClick
              onClick={e => {
                controlledSwiper.navigation.onNextClick(e);
              }}>
              <img className="right_img" src={`${imgurl}/right1.png`} />
            </ArrowClick>
          </Wrapper>
        </div>
      </Visible>
      </Pane>
    </>
  );
};

export default Strategy;
