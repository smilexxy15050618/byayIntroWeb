import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import {  Hidden, Visible } from 'react-grid-system';
import imgurl from '../../../img.url.js';
import ByProgressSwiper from '../common/ByProgressSwiper';

const titleList = [
  {
    title: '线上警民互动平台',
    subTitle: '以AI机器人为技术依托打造统一的虚拟IP民警，通过全渠道通道，实现警民长效高效连接',
    url: '/gongan-govern-1.svg',
    urlWap: '/gongan-govern-1.svg',
  },

  {
    title: '“三驱一体”运营体系',
    subTitle: '通过问题、需求、数据驱动运营，方案体系即时准确，实现高效的、科学的管理及决策',
    url: '/gongan-govern-2.svg',
    urlWap: '/gongan-govern-2.svg',
  },
  {
    title: '数据模型闭环完整',
    subTitle: 'AI社工与居民的互动中自动化采集互动标签、模型标签，完善标签画像，保障基层基础数据的鲜活性',
    url: '/gongan-govern-3.svg',
    urlWap: '/gongan-govern-3.svg',
  },
  {
    title: '数据驾驶舱',
    subTitle: '基于实际运行数据建设驾驶舱，辅助公安分析研判居民服务治理重点，支撑后续政策研究制定及决策',
    url: '/gongan-govern-4.png',
    urlWap: '/gongan-govern-4.png',
  },
];
export type IAiProps = {};

const Pane = styled.div`
  padding: 80px 0;
  @media (max-width: 768px) {
    padding: 37px 0;
  }
  @media (max-width: 768px) {
    .swiper-slide {
      width: 310px !important;
    }
    .custom-bar-wrapper{
        width: 300px;
    }
  }
  .title {
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
    color: rgba(26, 26, 26, 1);
    text-align: center;
    @media (max-width: 768px) {
      padding: 0 30px;
      font-size: 24px;
      font-weight: 500;
      line-height: 40px;
    }
  }
  .desc {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 32px;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    margin: 16px auto 40px;
    @media (max-width: 768px) {
      padding: 0 40px;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      margin: 16px auto 34px;
    }
  }
  .swiper-wrapper .swiper-slide{
  }
  .channel-item{
    position: relative;
    width: 310px;
    height: 340px;
    border-radius: 8px;
    background: rgba(246, 252, 255, 1);
    .title {
      padding-top: 16px;
      font-size: 16px;
      line-height: 20px;
      padding: 24px 16px 0;
      text-align: left;
    }
    .subtitle {
      padding: 12px 16px 15px;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
    }
    img{
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 200px;
    }
  }
`;
const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 560px;
  .lists {
    width: 296px;
  }
  .imgWrapper {
    width: 888px;
    height: 560px;
    border-radius: 8px;
    background: rgba(246, 252, 255, 1);
    box-sizing: border-box;
  }
  img {
    width: 100%;
    height: 560px;
    margin: 0;
  }
`;
const ListItem = styled.div`
  width: 296px;
  height: 104px;
  padding-top: 38px;
  padding-left: 40px;
  background: rgba(246, 252, 255, 1);
  margin-bottom: 8px;
  border-radius: 8px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    div:first-child {
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 24px;
      color: rgba(43, 88, 249, 1);
    }
  }
  div:first-child {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(90, 90, 90, 1);
  }
  &.active {
    width: 296px;
    height: 224px;
    background: rgba(43, 88, 249, 1);
    color: rgba(255, 255, 255, 1);
    padding: 40px 46px 48px 40px;
    box-sizing: border-box;
    div:first-child {
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 24px;
      color: rgba(255, 255, 255, 1);
      margin-bottom: 16px;
    }
    div:last-child {
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 0px;
      line-height: 24px;
      color: rgba(255, 255, 255, 1);
      text-align: left;
    }
  }
`;
const MainWrap = styled.div`
  .aitxs {
    transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    &.appear {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const AiTSXID = 'aitsx';
const AI: FC<IAiProps> = ({ }) => {
  const [currIndex, setCurrIndex] = useState(0);
  useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const videoContent = document.getElementById(AiTSXID);
    new ScrollMagic.Scene({
      triggerElement: videoContent, //触发元素
      triggerHook: 'onEnter', //触发元素开始离开视口时触发
      offset: 10, //从开始点滚动多少px触发（施法前摇）
      duration: 400, //效果持续的距离（法术持续时间/距离）
    })
      .setClassToggle('.aitxs', 'appear')
      .addTo(controller)
      .on('enter', () => {
        // videoContent.classList.add('appear')
        // console.log('进入');

        controller.destroy();
      });
  }, []);
  return (
    <MainWrap id={AiTSXID}>
      <Pane>
        <div class="title">开辟基层治理新路径，打造权威可信、即时响应的“AI警察朋友”</div>
        <div class="desc">搭建警民”线上联络网格”，实现与居民的无感链接和深度触达</div>
        <img src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/gongan-govern-4.png" style={{width:'0',height:'0',opacity:'0'}} />
        <Visible md lg xl xxl xxxl>
          <div style={{ maxWidth: 1200, width: '100vw', margin: '0 auto' }}>
            <div className="aitxs">
              <ListWrapper>
                <div class="lists">
                  {titleList.map(({ title, subTitle }, index) => {
                    return (
                      <ListItem
                        className={
                          index == currIndex ? 'animate__animated animate__fadeIn animate__ahead_300ms active' : ''
                        }
                        onClick={() => setCurrIndex(index)}>
                        <div>{title}</div>
                        {index == currIndex && <div dangerouslySetInnerHTML={{ __html: subTitle }}></div>}
                      </ListItem>
                    );
                  })}
                </div>
                <div class="imgWrapper">
                  <img src={`${imgurl}${titleList[currIndex].url}`} />
                </div>
              </ListWrapper>
            </div>
          </div>
        </Visible>
        <Visible xs sm>
          <ByProgressSwiper
            newProgress={true}
            initialSlide={0}
            slidesPerView="auto"
            autoplayDelay={5000}
            spaceBetween={16}
            centeredSlides={true}>
            {titleList.map((item, i) => (
              // 算垂直百分比时应该用对应(margin或padding)/父元素width，得到其占比
              <div className="channel-item">
                <div className="title">{item.title}</div>
                <div className="subtitle" dangerouslySetInnerHTML={{ __html: item.subTitle }}></div>
                <img src={imgurl + item.urlWap} />
              </div>
            ))}
          </ByProgressSwiper>
        </Visible>
      </Pane>
    </MainWrap>
  );
};

export default AI;
