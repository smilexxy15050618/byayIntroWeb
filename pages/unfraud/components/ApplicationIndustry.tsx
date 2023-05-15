import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'
import { Visible } from 'react-grid-system';
import ByProgressSwiper from '../../../src/components/common/ByProgressSwiper';

const MainWrap = styled.div`
width: 1200px;
margin: 0 auto;
@media (max-width: 768px) { 
    width: 100%;
    .custom-bar-wrapper {
        display: none;
    }
    .swiper-counter {
        display: none;
    }
    }
.title {
    font-size: 40px;
font-weight: 500;
letter-spacing: 0px;
line-height: 48px;
color: rgba(26, 26, 26, 1);
text-align: center;
@media(max-width: 768px) {
    font-size: 24px;
font-weight: 500;
letter-spacing: 0px;
line-height: 40px;
color: rgba(0, 0, 0, 1);
margin-bottom: 40px;
}
}
.content {
width: 100%;
height: 288px;
background: url(${imgurl}/gafz_yycj2.png) no-repeat;
background-size: 100% 100%;
position: relative;
margin-top: 58px;
transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    &.appear{
      transform: translateY(0);
      opacity: 1;
    }
img {
    width: 288px;
    height: 255px;
    position: absolute;
    right: 0;
    top: 0;
    margin-bottom: 0;
}
}
@media (max-width: 768px)  {
   

    .my-slide{
      width: 300px;
      height: 116px;
      border-radius: 8px;
      background: rgba(246, 252, 255, 1);
      padding: 24px 16px;
      box-sizing: border-box;
      .title_mobile{
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 0px;
        line-height: 20px;
        color: rgba(43, 88, 249, 1);
        margin-bottom: 8px;
        span {
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 20px;
            color: rgba(0, 0, 0, 1);
            text-align: justify;
            margin-left: 8px;
        }
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
        width: 287px;
      }
    }
}
`
const ApplicationIndustrys = 'ApplicationIndustrys'
export const ApplicationIndustry: FC = () => {
    useEffect(() => {
        const ScrollMagic = require('scrollmagic');
        var controller = new ScrollMagic.Controller();
        const videoContent = document.getElementById(ApplicationIndustrys);
        new ScrollMagic.Scene({
            triggerElement: videoContent, //触发元素
            triggerHook: 'onEnter', //触发元素开始离开视口时触发
            offset: 10, //从开始点滚动多少px触发（施法前摇）
            duration: 400, //效果持续的距离（法术持续时间/距离）
        })
            // .setClassToggle('.aitxs', 'appear')
            .addTo(controller)
            .on('enter', () => {
                videoContent.classList.add('appear')
                // console.log('进入');

                controller.destroy();
            });
    }, []);
    return (
        <MainWrap>
            <div className="title">应用场景</div>
            <Visible md lg xl xxl xxxl>
              <div id={ApplicationIndustrys} className="content">
                <img src={imgurl+'/gafz_yycj.png'} alt="" />
              </div>
            </Visible>
            <Visible xs sm>
           <div id={ApplicationIndustrys}>
           <ByProgressSwiper
              newProgress={true}
              initialSlide={0}
              contentPadding="12px" progressPadding="0px"
              previewWidth="67px"
            >
              <div style={{ width: '300px' }} className="my-slide">
                      <div className='title_mobile'>高效劝阻<span>加强数智化建设</span></div>
                      <p>
                      AI高效劝阻拦截；智能化策略引擎；全流程、专业化反诈预防沟通
                      </p>
              </div>
              <div style={{ width: '300px' }} className="my-slide">
                      <div className='title_mobile'>有效宣传<span>落实全区域覆盖</span></div>
                      <p>
                      多渠道触达；微信添加持续保护
                      </p>
              </div>
              <div style={{ width: '300px' }} className="my-slide">
                      <div className='title_mobile'>智能交互<span>增进警民间互动</span></div>
                      <p>
                      做群众身边的警察朋友，帮助识别诈骗套路；支持多媒体交互
                      </p>
              </div>
              <div style={{ width: '300px' }} className="my-slide">
                      <div className='title_mobile'>分类管理<span>提升多样性防控</span></div>
                      <p>
                      个性化标签，保护易感人群；驾驶仓数据展示；反诈预防专题数据分析
                      </p>
              </div>
            </ByProgressSwiper>
            <div className='img_bottom2'>
            <img src={`${imgurl}/gafz_yycj.png`} alt="" />
            </div>
           </div>
            </Visible>
        </MainWrap>
    )
}