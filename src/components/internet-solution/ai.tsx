import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import {  Hidden, Visible } from 'react-grid-system';
import imgurl from '../../../img.url.js';
import ByProgressSwiper from '../common/ByProgressSwiper';

const titleList = [
  {
    title: '三大保障&提升方案',
    subTitle: '自研产品，全面保障用户体验<br />专业知识库，运营效率不断提升<br />行业方法论，保障外呼效果<br />全面运营服务，为效果负责',
    url: '/internet-solution-1.png',
    urlWap: '/internet-solution-wap-1.png',
  },
  {
    title: '高转化模型测试',
    subTitle: '全变量对照测试，提升效果转化文<br />案设计精细化，为沟通结果负责把<br />控变量节点密度，验证最优模型数<br />据分析迭代，完成激活上升曲线',
    url: '/internet-solution-2.png',
    urlWap: '/internet-solution-wap-2.png',
  },
  {
    title: '全流程智能化、自动化',
    subTitle: '人群精细拆分，千人千面策略运营<br />用户数据分析，规划运营增长旅途<br />智能、流畅、自然，提升用户体验',
    url: '/internet-solution-3.svg',
    urlWap: '/internet-solution-wap-3.png',
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
    width: 310px;
    height: 340px;
    border-radius: 8px;
    background: rgba(246, 252, 255, 1);
    .title {
      font-size: 16px;
      line-height: 20px;
      padding: 24px 16px 0;
      text-align: left;
    }
    .subtitle {
      padding: 12px 16px 0 16px;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
    }
    img{
      margin-top: 12px;
      width: 100%;
      height: 189px;
    }
  }
`;
const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 448px;
  .lists {
    width: 296px;
  }
  .imgWrapper {
    width: 888px;
    height: 448px;
    border-radius: 8px;
    background: rgba(246, 252, 255, 1);
    box-sizing: border-box;
  }
  img {
    width: 100%;
    height: 448px;
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
    padding: 40px 0 48px 40px;
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
const AI: FC<IAiProps> = ({}) => {
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
        <Visible md lg xl xxl xxxl>
          <div class="title">以数智化助力互联网企业增长，提升用户活跃度</div>
        </Visible>
        <Visible xs sm>
          <div class="title">以数智化助力互联网企业增长<br />提升用户活跃度</div>
        </Visible>
        <div class="desc">助力品牌激活会员、高效转化、差异化触达营销，实现运营效率质变</div>
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
                <img src={imgurl+item.urlWap} />
              </div>
            ))}
          </ByProgressSwiper>
        </Visible>
      </Pane>
    </MainWrap>
  );
};

export default AI;
