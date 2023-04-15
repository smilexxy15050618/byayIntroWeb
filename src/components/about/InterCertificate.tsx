import React, { FC, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Theme } from '../../constants/style';
import { splitCssValue } from '../../lib/utils';

const Title = styled.div`
  padding-top: 80px;
  padding-bottom: 46px;
  font-size: 40px;
  line-height: 48px;
  color:rgba(51, 51, 51, 1);
  text-align: center;
`;


const FlairVoucherContainer = styled.div<{ maxWidthPc?: string; minWidthPC?: string }>`
  @media (min-width: 768px) {
    max-width: ${props => props.maxWidthPc || Theme.ContentWidth};
    min-width: ${props => props.minWidthPC || 'unset'};
    width: calc(
      100vw / ${splitCssValue(Theme.DesignDraftWidth).num} *
        ${props => splitCssValue(props.maxWidthPc || Theme.ContentWidth).num}
    );
    margin: 0 auto;
  }
  position: relative;
  height: 100%;
  @media (max-width: 768px) {
    width: 100% !important;
  }
`;

const FlairVoucherSlide = styled.div<{ backgroundImage?: string }>`
  display: flex;
  justify-content: center;

  transform: translateY(50%);
  transition: all 0.4s;
  opacity: 0;
  &.appear{
    transform: translateY(0);
    opacity: 1;
  }

  .FlairVoucherItem{
    width: 257px;
    height: 365px;
    padding: 10px;
    border-radius: 8px;
    background-image: ${props => `url(${props.backgroundImage})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    box-shadow: 0px 2px 19px 0px rgba(196, 196, 196, 0.42);
    margin-right: 16px;
    img{
      transition: all 0.5s;
      width: 237px;
      height: 345px;
    }
    img:hover{
      transform: scale(1.02);
    }
  }
  .FlairVoucherItem:child{
    margin: 0;
  }
`;

const SERVICE_DEMAND = [
  {
    img: 'https://img.js.design/assets/img/643262186f24f01dceb06549.png',
  },
  {
    img: 'https://img.js.design/assets/img/643262173d1ec540d034f6f5.png',
  },
  {
    img: 'https://img.js.design/assets/img/6432621aaebb4a605ef35643.png',
  },
  {
    img: 'https://img.js.design/assets/img/643262182bace1545710c2d2.png',
  }
];

interface SocietyDutyProps {
  minWidthPC?: string;
  backgroundImage: string;
}

const InterCertificate: React.SFC<SocietyDutyProps> = ({ minWidthPC, backgroundImage }) => {
  const myRef = useRef(null);
  useEffect(() => {
    const timer =  setInterval(()=>{
      if(myRef.current){
        clearInterval(timer);
        const ScrollMagic = require('scrollmagic');
        var controller = new ScrollMagic.Controller();
        const videoContent = myRef.current;
          new ScrollMagic.Scene({
            triggerElement: videoContent, //触发元素
            triggerHook: 'onEnter', //触发元素开始离开视口时触发
            offset: 0, //从开始点滚动多少px触发（施法前摇）
            duration: 400, //效果持续的距离（法术持续时间/距离）
          })
            .addTo(controller)
            .on('enter', () => {
                videoContent.classList.add('appear')
                controller.destroy();
            });
      }
    })
  }, [myRef]);
  return (
  <FlairVoucherContainer maxWidthPc="1200px" minWidthPC={minWidthPC}>
    <Title>四大国际权威安全认证</Title>
    <FlairVoucherSlide ref={myRef} backgroundImage={backgroundImage}>
      {SERVICE_DEMAND.map((item, index) => (
        <div className='FlairVoucherItem'>
          <img src={item.img} />
        </div>
      ))}
    </FlairVoucherSlide>
  </FlairVoucherContainer>
  )
};

export default InterCertificate;
