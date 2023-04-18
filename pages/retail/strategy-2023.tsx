import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import Pane from '../../src/components/homepage/version2023/Pane';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import imgurl from '../../img.url.js'

export type IStrategyProps = {};

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
    .left_img{
        width:100%;
      cursor:pointer;
      margin-bottom: 0;
      &:hover {
        content: url(${imgurl}/hover_left1.png);
      }
      }
      .right_img {
          width:100%;
          cursor:pointer;
          margin-bottom: 0;
          &:hover {
            content: url(${imgurl}/hover_right1.png);
          }
      }
`
const Wrapper = styled.div`
width: 100%;
display: flex;
justifyContent: center;
  .swiper-container {
    width: 1100px;
    .my-slide {
        width: 1100px;
    }
  }
`

const Strategy: FC<IStrategyProps> = ({ }) => {
    const [controlledSwiper, setControlledSwiper] = useState(null);
    const [controlledSwiper1, setControlledSwiper1] = useState(null);
    return (
       <>
        <Pane title="百应策略: 被TOP品牌验证的会员运营策略">
            <div style={{ maxWidth: 1200, width: '100vw', margin: '0 auto' }}>
                <Wrapper>
                <ArrowClick onClick={e => { controlledSwiper.navigation.onPrevClick(e) }}>
                <img className="left_img" src={`${imgurl}/left1.png`} />
                </ArrowClick>
                <Swiper loop={true} autoplay={{delay: 3000}} onSwiper={swiper => setControlledSwiper(swiper)}>
                    <SwiperSlide style={{width: '1100px'}} className='my-slide'>
                        <img
                            style={{ textAlign: 'center', maxWidth: '100%' }}
                            src={imgurl+'/strategy1.png'}></img>
                    </SwiperSlide>
                    <SwiperSlide style={{width: '1100px'}} className='my-slide'>
                        <img
                            style={{ textAlign: 'center', maxWidth: '100%' }}
                            src={imgurl+'/strategy2.png'}></img>
                    </SwiperSlide>
                </Swiper>
                <ArrowClick onClick={e => { controlledSwiper.navigation.onNextClick(e) }}>
                <img className="right_img" src={`${imgurl}/right1.png`} />
                </ArrowClick>
                </Wrapper>
            </div>
        </Pane>
        <Pane title="百应玩法: 行业领先的“单次AI电话”运营方法论">
        <div style={{ maxWidth: 1200, width: '100vw', margin: '0 auto' }}>
            <Wrapper>
            <ArrowClick onClick={e => { controlledSwiper1.navigation.onPrevClick(e) }}>
            <img className="left_img" src={`${imgurl}/left1.png`} />
            </ArrowClick>
            <Swiper loop={true} autoplay={{delay: 3000}} onSwiper={swiper => setControlledSwiper1(swiper)}>
                <SwiperSlide style={{width: '1100px'}} className='my-slide'>
                    <img
                        style={{ textAlign: 'center', maxWidth: '100%' }}
                        src={imgurl+'/play1.png'}></img>
                </SwiperSlide>
                <SwiperSlide style={{width: '1100px'}} className='my-slide'>
                    <img
                        style={{ textAlign: 'center', maxWidth: '100%' }}
                        src={imgurl+'/play2.png'}></img>
                </SwiperSlide>
            </Swiper>
            <ArrowClick onClick={e => { controlledSwiper1.navigation.onNextClick(e) }}>
            <img className="right_img" src={`${imgurl}/right1.png`} />
            </ArrowClick>
            </Wrapper>
        </div>
    </Pane>
       </>
    );
};

export default Strategy;
