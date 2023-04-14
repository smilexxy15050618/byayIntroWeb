import React, { FC, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Theme } from '../../constants/style';
import { splitCssValue } from '../../lib/utils';


interface MissionVisionProps {
  minWidthPC?: string;
  backgroundImage?: string;
}

const MissionVisionContainer = styled.div<{ maxWidthPc?: string; minWidthPC?: string }>`
  @media (min-width: 768px) {
    max-width: ${props => props.maxWidthPc || Theme.ContentWidth};
    min-width: ${props => props.minWidthPC || 'unset'};
    width: calc(
      100vw / ${splitCssValue(Theme.DesignDraftWidth).num} *
        ${props => splitCssValue(props.maxWidthPc || Theme.ContentWidth).num}
    );
    margin: 0 auto;
  }
  height: 100%;
  @media (max-width: 768px) {
    width: 100% !important;
  }

  .aitxs{
    transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    &.appear{
      transform: translateY(0);
      opacity: 1;
    }
  }

`;

const Title = styled.div`
  padding-top: 80px;
  padding-bottom:44px;
  font-size: 40px;
  line-height: 48px;
  color:rgba(43, 43, 43, 1);
  text-align: center;
`;

const MissionVisionContainerWrap = styled.div<{ backgroundImage?: string }>`
  position: relative;
  width: 1034px;
  height: 500px;
  margin: 0 auto;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  
  transform: translateY(50%);
  transition: all 0.4s;
  opacity: 0;
  &.appear{
    transform: translateY(0);
    opacity: 1;
  }

  .mission-tips{
    position: absolute;
    left: 140px;
    top: 72px;
    font-size: 36px;
    color: rgba(43, 88, 249, 1);
    letter-spacing: 4.06px;
    span{
      color:rgba(43, 43, 43, 1)
    }
  }
  .vision-tips{
    position: absolute;
    left: 72px;
    top: 268px;
    font-size: 36px;
    color: rgba(43, 88, 249, 1);
    letter-spacing: 4.06px;
    span{
      color:rgba(43, 43, 43, 1)
    }
  }
`;


const AiTSXID = 'MissionVision';
const MissionVision: FC<MissionVisionProps> = ({ minWidthPC, backgroundImage }) => {
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
    <MissionVisionContainer id={AiTSXID} maxWidthPc="1200px" minWidthPC={minWidthPC}>
      <Title>使命和愿景</Title>
      <MissionVisionContainerWrap backgroundImage={backgroundImage} ref={myRef}>
          <div className='mission-tips'><span>使命：</span>以AI赋能经济发展和社会生活</div>
          <div className='vision-tips'><span>愿景：</span>成为具有世界级竞争力的中国科技公司</div>
      </MissionVisionContainerWrap>
    </MissionVisionContainer>
  )
};

export default MissionVision;
