import React, { FC, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {  Hidden, Visible } from 'react-grid-system';
import imgurl from '../../../img.url.js';

interface MissionVisionProps {
  indexTab: string;
}

const MissionBG = `${imgurl}/mission-bg.png`;
const VisionBG = `${imgurl}/vision-bg.png`;
const MissionWapBG = `${imgurl}/mission-wap-bg.svg`;
const VisionWapBG = `${imgurl}/vision-wap-bg.png`;

const MissionVisionContainer = styled.div`
  
  @media (max-width: 768px) {
    width: 100%;
    height: 332px;
    background: rgba(43, 88, 249, 1);
  }
`;

const Title = styled.div`
  padding-top: 80px;
  padding-bottom:44px;
  font-size: 40px;
  line-height: 48px;
  color:rgba(43, 43, 43, 1);
  text-align: center;
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom:40px;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 40px;
    color: rgba(255, 255, 255, 1);
  }
`;

// pc
const MissionVisionContainerWrap = styled.div`
  position: relative;
  height: 480px;
  margin: 0 auto;
  background-image: ${`url(${MissionBG})`};
  background-repeat: no-repeat;
  background-size: 510px 77px;
  background-position: center 112px;
  background-color: rgba(43, 88, 249, 1);
  transform: translateY(50%);
  transition: all 0.4s;
  opacity: 0;
  &.appear{
    transform: translateY(0);
    opacity: 1;
  }

  .mission-tips{
    padding-top: 72px;
    text-align: center;
    .title{
      font-size: 22px;
      line-height: 40px;
      color: rgba(255, 255, 255, 1);
    }
    .subtitle{
      padding-top: 60px;
      font-size: 36px;
      line-height: 56px;
      letter-spacing: 8px;
      color: rgba(255, 255, 255, 1);
    }
  }
  .vision-tips{
    width: 1200px;
    height: 310px;
    margin: 72px auto 0;
    padding-top: 72px;
    text-align: center;
    border-radius: 8px;
    background-image: ${`url(${VisionBG})`};
    background-repeat: no-repeat;
    background-size: 510px 77px;
    background-position: center 120px;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
    
    .title{
      font-size: 22px;
      line-height: 40px;
      color: rgba(90, 90, 90, 1);
    }
    .subtitle{
      padding-top: 60px;
      font-size: 36px;
      line-height: 56px;
      letter-spacing: 8px;
      color: rgba(43, 88, 249, 1);
    }
  }
`;

// wap
const MissionVisionWap = styled.div`
  position: relative;
  z-index: 22;
  margin-bottom: 100px;
  img.missvis{
    width: 100%;
    height: 134px;
    margin: 0;
  }
  img.vismiss{
    display: block;
    width: 343px;
    height: 156px;
    margin: 0 auto;
  }
`;


const AiTSXID = 'MissionVision';
const MissionVision: FC<MissionVisionProps> = ({ indexTab }) => {
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
    <MissionVisionContainer id={AiTSXID} style={{height: indexTab == 1 ? /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent) ? '441px' : '332px' : '332px',paddingTop: indexTab == 1 ? /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent) ? '109px' : '0' : '0',marginTop: indexTab == 1 ? /Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent) ? '0' : '256px' : '0' }}>
      <Hidden xs sm>
        <MissionVisionContainerWrap ref={myRef}>
            <div className='mission-tips'><p className="title">使命</p><p className="subtitle">以AI赋能经济发展和社会生活</p></div>
            <div className='vision-tips'><p className="title">愿景</p><p className="subtitle">成为智能用户运营领域创领者</p></div>
        </MissionVisionContainerWrap>
      </Hidden>
      <Visible xs sm>
        <Title>使命和愿景</Title>
        <MissionVisionWap ref={myRef}>
          <img className="missvis" src={MissionWapBG} />
          <img className="vismiss" src={VisionWapBG} />
        </MissionVisionWap>
      </Visible>
    </MissionVisionContainer>
  )
};

export default MissionVision;
