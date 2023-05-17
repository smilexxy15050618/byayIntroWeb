import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Pane from '../../src/components/homepage/version2023/Pane';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import imgurl from '../../img.url.js';
import { Visible } from 'react-grid-system';
import ByProgressSwiper from '../../src/components/common/ByProgressSwiper';

export type IStrategyProps = {};

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
      width: calc(100vw - 14px);
    .my-slide {
      width: calc(100vw - 14px);
      div:first-child {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 40px;
        text-align: center;
      }
    }
    }
    
  }
`;
const MainMobileStyle = styled.div`
  @media (max-width: 768px) {
    .fWovXn{
      width:80%;
      margin:0 auto;
    }
  }


`
const STRATEGY = 'STRATEGY_WRAP';
const STRATEGY1 = 'STRATEGY_WRAP1';
const Strategy: FC<IStrategyProps> = ({ }) => {
  useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const videoContent = document.getElementById(STRATEGY);
    new ScrollMagic.Scene({
      triggerElement: videoContent, //触发元素
      triggerHook: 'onEnter', //触发元素开始离开视口时触发
      offset: 10, //从开始点滚动多少px触发（施法前摇）
      duration: 400, //效果持续的距离（法术持续时间/距离）
    })
      // .setClassToggle('.aitxs', 'appear')
      .addTo(controller)
      .on('enter', () => {
        videoContent.classList.add('appear');
        // console.log('进入');

        controller.destroy();
      });
    const ScrollMagic1 = require('scrollmagic');
    var controller1 = new ScrollMagic1.Controller();
    const videoContent1 = document.getElementById(STRATEGY1);
    new ScrollMagic.Scene({
      triggerElement: videoContent1, //触发元素
      triggerHook: 'onEnter', //触发元素开始离开视口时触发
      offset: 10, //从开始点滚动多少px触发（施法前摇）
      duration: 400, //效果持续的距离（法术持续时间/距离）
    })
      // .setClassToggle('.aitxs', 'appear')
      .addTo(controller1)
      .on('enter', () => {
        videoContent1.classList.add('appear');
        // console.log('进入');

        controller1.destroy();
      });
  }, []);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [controlledSwiper1, setControlledSwiper1] = useState(null);
  return (
    <>
      <Visible md lg xl xxl xxxl>
        <Pane title="百应策略: 被TOP品牌验证的会员运营策略">
          <div style={{ maxWidth: 1200, width: '100vw', margin: '0 auto' }}>
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
                  <img style={{ textAlign: 'center', maxWidth: '100%' }} src={imgurl + '/strategy1.png'}></img>
                </SwiperSlide>
                <SwiperSlide style={{ width: '1100px' }} className="my-slide">
                  <img style={{ textAlign: 'center', maxWidth: '100%' }} src={imgurl + '/strategy2.png'}></img>
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
        </Pane>
        <Pane title="百应玩法：行业领先的AI触达运营方法论">
          <div style={{ maxWidth: 1200, width: '100vw', margin: '0 auto' }}>
            <Wrapper id={STRATEGY1}>
              <ArrowClick
                onClick={e => {
                  controlledSwiper1.navigation.onPrevClick(e);
                }}>
                <img className="left_img" src={`${imgurl}/left1.png`} />
              </ArrowClick>
              <Swiper
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                onSwiper={swiper => setControlledSwiper1(swiper)}>
                <SwiperSlide style={{ width: '1100px' }} className="my-slide">
                  <img style={{ textAlign: 'center', maxWidth: '100%' }} src={imgurl + '/play1.png'}></img>
                </SwiperSlide>
                <SwiperSlide style={{ width: '1100px' }} className="my-slide">
                  <img style={{ textAlign: 'center', maxWidth: '100%' }} src={imgurl + '/play2.png'}></img>
                </SwiperSlide>
              </Swiper>
              <ArrowClick
                onClick={e => {
                  controlledSwiper1.navigation.onNextClick(e);
                }}>
                <img className="right_img" src={`${imgurl}/right1.png`} />
              </ArrowClick>
            </Wrapper>
          </div>
        </Pane>
      </Visible>
      <Visible xs sm>
        <MainMobileStyle id="STRAGETYMOBILE">
        <Pane title="百应策略: 被TOP品牌验证的会员运营策略">
        <div style={{  width: '100vw', margin: '-16px auto 0' }}>
          <Wrapper id={STRATEGY}>
            <ByProgressSwiper
              newProgress={true}
              initialSlide={0}
              contentPadding="20px" progressPadding="0px"
              // previewWidth="70px"
            >
              <div style={{ width: '100%' }} className="my-slide">
                <div>提升超级会员占比 拉升会员LTV</div>
                <img style={{ textAlign: 'center', maxWidth: '100%' }} src={imgurl + '/strategy2_m.png'}></img>
              </div>
              <div style={{ width: '100%' }} className="my-slide">
                <div>全流程策略支持，实现优体验、高转化</div>
                <img style={{ textAlign: 'center', maxWidth: '100%' }} src={imgurl + '/strategy1_m.png'}></img>
              </div>
            </ByProgressSwiper>
          </Wrapper>
        </div>
        </Pane>
        <Pane title="百应玩法：行业领先的AI触达运营方法论">
        <div style={{ width: '100vw', margin: '-16px auto 0' }}>
          <Wrapper id={STRATEGY1}>
            <ByProgressSwiper
              newProgress={true}
              initialSlide={0}
              contentPadding="20px" progressPadding="0px"
              // previewWidth="70px"
            >
              <div style={{ width: '100%' }} className="my-slide">
                <div>一式 × 三率 × 七变量</div>
                <img style={{ textAlign: 'center', maxWidth: '100%' }} src={imgurl + '/play1_m.png'}></img>
              </div>
              <div style={{ width: '100%' }} className="my-slide">
                <div>触达流程精细化，AI带来效率质变</div>
                <img style={{ textAlign: 'center', maxWidth: '100%' }} src={imgurl + '/play2_m.png'}></img>
              </div>
            </ByProgressSwiper>
          </Wrapper>
        </div>
        </Pane>
        </MainMobileStyle>
      </Visible>
    </>
  );
};

export default Strategy;
