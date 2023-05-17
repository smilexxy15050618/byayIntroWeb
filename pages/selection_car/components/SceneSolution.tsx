import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import ByProgressSwiper from '../../../src/components/common/ByProgressSwiper';

import imgurl from '../../../img.url.js';
interface SceneSolution {}
const Pane = styled.div`
  margin-top: 80px;
  .title {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 48px;
    color: rgba(26, 26, 26, 1);
    text-align: center;
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
  @media (max-width: 768px)  {
   
   .title{
     font-size: 24px;
   font-weight: 500;
   letter-spacing: 0px;
   line-height: 40px;
   color: rgba(0, 0, 0, 1);
   margin-bottom: 40px;
   
   }
  }
`;
const HoveUp = styled.div`
  width: 1250px;
  margin: 0 auto;
`;
const Card = styled.div<{ bg: number }>`
  margin: 0 auto;
  img {
    width: 100%;
    margin: 0;
  }
`;



const MainWrap = styled.div`
  transform: translateY(50%);
  transition: all 0.4s;
  opacity: 0;
  &.appear {
    transform: translateY(0);
    opacity: 1;
  }
  width: 1200px;
  margin: 0 auto;
  @media (max-width: 768px) { 
    width: 100%;
    }
  .title {
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 48px;
    color: rgba(26, 26, 26, 1);
    text-align: center;
  }
  .content {
    width: 100%;
    height: 360px;
    background: url(${imgurl}/caryycj.png) no-repeat;
    background-size: 100% auto;
    position: relative;
    margin-top: 58px;
    img {
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  @media (max-width: 768px)  {
   .custom-bar-wrapper{
    display:none;
   }
   .swiper-counter {
    display:none;
   }

    .my-slide{
      width: 300px;
      height: 116px;
      border-radius: 8px;
      background: rgba(246, 252, 255, 1);
      padding: 24px 16px;
      box-sizing: border-box;
      .title_mobile{
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 20px;
        color: rgba(0, 0, 0, 1);
        margin-bottom: 8px;
      }
      p{
        font-size: 12px;
font-weight: 400;
letter-spacing: 0px;
line-height: 20px;
color: rgba(0, 0, 0, 1);
      }
    }
    .img_bottom2{
      text-align: center;
      padding-bottom: 70px;
      img{
        width: 300px;
        margin-top: 20px;
      }
    }
  }
`;

const carouselDataList = imgurl + '/scenario-img.png';

const SceneSolution: FC<SceneSolution> = ({}) => {
  const HANGYE = 'hangye_2023_2009d';
  useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const videoContent = document.getElementById(HANGYE);
    new ScrollMagic.Scene({
      triggerElement: videoContent, //触发元素
      triggerHook: 'onEnter', //触发元素开始离开视口时触发
      offset: 10, //从开始点滚动多少px触发（施法前摇）
      duration: 400, //效果持续的距离（法术持续时间/距离）
    })
      // .setClassToggle('.aitxs', 'appear')
      .addTo(controller)
      .on('enter', () => {
        if(videoContent){
          videoContent.classList.add('appear');
        }
        // console.log('进入');
        controller.destroy();
      });
  }, []);
  return (
    <Pane>
      <div className="title">应用场景</div>
      {/* <div class="desc">运营策略覆盖消费金融业务全链路</div> */}
      <Visible md lg xl xxl xxxl>
      <Hidden xs sm>
        <MainWrap id={HANGYE}>
          <div className="content">
            <img src={`${imgurl}/caryycj2.png`} alt="" />
          </div>
        </MainWrap>
      </Hidden>
      </Visible>
      <Visible xs sm>
      <MainWrap id={HANGYE}>
      <ByProgressSwiper
              newProgress={true}
              initialSlide={0}
              contentPadding="12px" progressPadding="0px"
              previewWidth="67px"
            >
              <div style={{ width: '300px' }} className="my-slide">
                      <div className='title_mobile'>线索清洗</div>
                      <p>
                      多元渠道提升线索量级，持续触达提升品牌势能，搭建初筛模型识别高价值线索
                      </p>
              </div>
              <div style={{ width: '300px' }} className="my-slide">
                      <div className='title_mobile'>营销通知</div>
                      <p>
                      电联人效提升3倍以上，AI标记准确率97%以上，营销触达率100%
                      </p>
              </div>
              <div style={{ width: '300px' }} className="my-slide">
                      <div className='title_mobile'>私域加粉</div>
                      <p>
                      用户分层精准营销，构建基于用户数据的品牌私域流量池，蓄力长期转化
                      </p>
              </div>
              <div style={{ width: '300px' }} className="my-slide">
                      <div className='title_mobile'>试驾邀约</div>
                      <p>
                    体验服务的形式邀约更能加深用户对品牌的印象，促进潜在用户到店转化
                      </p>
              </div>
              <div style={{ width: '300px' }} className="my-slide">
                      <div className='title_mobile'>售后回访</div>
                      <p>
                   用户反馈路径AI代替人工自动化执行，构建“反馈-响应-回访”一体化售后闭环
                      </p>
              </div>
            </ByProgressSwiper>
            <div className='img_bottom2'>
            <img src={`${imgurl}/caryycj2.png`} alt="" />
            </div>
            </MainWrap>
        {/* <CarouselMobile dataList={carouselDataList}></CarouselMobile> */}
      </Visible>
    </Pane>
  );
};

export default SceneSolution;
