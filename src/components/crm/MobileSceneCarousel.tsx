import React, { useState, useLayoutEffect, useEffect } from 'react';
import Box from '../Box';
import styled, { css } from 'styled-components';
import { sceneList } from './SceneCarousel';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MobileSceneSwiper } from './MobileSceneSwiper';
import ByProgressSwiper from '../common/ByProgressSwiper';

const Wrap = styled(Box)`
  .swiper-container {
    width: 342px;
    /* height: 452px; */
    height: 439px;
    margin: 0 auto;
    overflow: visible;
  }

  .swiper-slide {
    overflow: hidden;
    width: 326px !important;
    margin: 0 8px;
  }

  .carousel-item {
    /* height: 492px; */
    height: 479px;
  }
`;

const OuterControl = styled(Box)<{ active?: boolean }>`
  color: ${props => (props.active ? '#2B58F9' : 'rgba(0, 0, 0, 0.85)')};
  font-weight: ${props => (props.active ? 500 : 400)};
  ${props =>
    props.active &&
    css`
      &::after {
        content: '';
        display: block;
        width: 16px;
        height: 3px;
        background: #2b58f9;
        border-radius: 8px 8px 0px 0px;
        transform: translateY(calc(100% + 4px));
        margin: 0 auto;
      }
    `}
`;

const OuterControlWrap = styled(Box)`
  overflow-x: auto;
  overflow-y: visible;
  ${OuterControl}:last-child {
    padding-right: 32px;
  }
  &::-webkit-scrollbar {
    // 整个滚动条
    display: none;
  }
`;

const OuterContent = styled(Box)`
  width: 100%;
  /* height: 492px; */
  height: 479px;
  background: #2b58f9;
`;

const MobileSceneCarousel = () => {
  const [outActiveKey, setOutActiveKey] = useState(0);
  return (
    <Wrap>
      <OuterControlWrap display="flex" pb={4}>
        {sceneList.map(({ title }, idx) => (
          <OuterControl
            key={title}
            active={outActiveKey === idx}
            pl={4}
            whiteSpace="nowrap"
            fontSize="14px"
            lineHeight="20px"
            onClick={() => setOutActiveKey(idx)}>
            {title}
          </OuterControl>
        ))}
      </OuterControlWrap>
      <OuterContent>
        <Carousel activeIndex={outActiveKey} indicators={false} controls={false}>
          {sceneList.map(({ content, title }, idx) => (
            <CarouselItem className="carousel-item" key={title}>
              {outActiveKey === idx && <MobileSceneSwiper data={content} />}
            </CarouselItem>
          ))}
        </Carousel>
      </OuterContent>
    </Wrap>
  );
};

export { MobileSceneCarousel };
