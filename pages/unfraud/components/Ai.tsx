import React, { FC, useEffect, useState } from 'react';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import imgurl from '../../../img.url.js';
import ByProgressSwiper from '../../../src/components/common/ByProgressSwiper';

const titleList = [
  {
    title: '宣防劝阻工作分类管理',
    subTitle: '分段式的预防策略，通过协助公安劝阻、宣防的预防工作，逐步消减受害人、潜在受害人和易感人群的占比',
    subTitlem: '分段式的预防策略，通过协助公安劝阻、宣防的预防工作，逐步消减受害人、潜在受害人和易感人群的占比',

    url: '/gafz1.png',
    urlm: '/gafz1m.png'
  },
  {
    title: '反诈预防平台业务流程',
    subTitle: '数据清洗与分发<br>策略制定与执行<br>反诈效果追踪反馈<br>专业知识库创建及丰富',
    subTitlem: '数据清洗与分发，策略制定与执行，反诈效果追踪反馈，专业知识库创建及丰富',
    url: '/gafz2.png',
    urlm: '/gafz2m.png'
  },
  {
    title: '触达双通道',
    subTitle:
      '群体全覆盖：覆盖潜在受害人群；<br>​业务强闭环：宣传劝阻持续转化；<br>保护全方位：根据不同线索等级，<br>递进式全方位持续保护',
    subTitlem: '群体全覆盖：覆盖潜在受害人群；<br>​业务强闭环：宣传劝阻持续转化；<br>保护全方位：根据不同线索等级，<br>递进式全方位持续保护',

    url: '/gafz3.png',
    urlm: '/gafz3m.png'
  },
  {
    title: '数据驾驶舱',
    subTitle: '全流程可视化：数据报表和大屏；<br>全面追踪宣传劝阻转化数据；<br>持续反馈居民画像，支撑后续反诈策略决策',
    subTitlem: '全流程可视化：数据报表和大屏；<br>全面追踪宣传劝阻转化数据；<br>持续反馈居民画像，支撑后续反诈策略决策',

    url: '/gafz4.png',
    urlm: '/gafz4m.png'
  },
];
export interface IAiProps { }
const Pane = styled.div`
  padding: 80px 0;
  @media(max-width: 768px) {
    padding: 0 0 80px 0;
    .custom-bar-wrapper{
      width: 300px;
    }
  }
  .title {
    text-align: center;
    font-size: 40px;
    font-weight: 500;
    color: rgb(26, 26, 26);
    line-height: 48px;
    @media(max-width: 768px) {
      font-size: 24px;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 40px;
      margin: 40px 31px 16px;
      text-align: justify;
    }
  }
  .sec-title {
    margin-top:16px;
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 32px;
    color: rgba(51,51,51,1);
    margin-bottom: 40px;
    @media(max-width: 768px) {
      font-size: 16px;
font-weight: 400;
letter-spacing: 0px;
line-height: 24px;
margin: 0px 31px;
text-align: justify;

    }
  }
`;
const ListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 768px) {
    .swiper-slide {
      width: 300px;
    }
  }
  .lists {
    width: 296px;
    @media (max-width: 768px) {
      width: 300px;
      height: 340px;
      border-radius: 8px;
      background: rgba(246, 252, 255, 1);
      div:first-child {
        font-size: 16px;
       font-weight: 600;
       letter-spacing: 0px;
       margin-bottom: 12px;
       padding: 24px 0 0 16px;
      }
      div:nth-child(2) {
        width: 268px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 20px;
        color: rgba(0, 0, 0, 1);
        text-align: justify;
        margin-bottom: 24px;
        padding: 0 0 0 16px;
      }
      img {
        margin-bottom: 0px;
      }
    }
  }
  .imgWrapper {
    width: 888px;
    height: 560px;
    opacity: 1;
    border-radius: 8px;
    background: rgba(246, 252, 255, 1);
    padding: 16px;
    box-sizing: border-box;
  }
  img {
    width: 100%;
    height: 528px;
  }
`;
const ListItem = styled.div`
  width: 300px;
  height: 104px;
  padding-top: 38px;
  padding-left: 40px;
  background: rgba(246, 252, 255, 1);
  margin-bottom: 8px;
  border-radius: 8px;
  box-sizing: border-box;
  div:first-child {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(90, 90, 90, 1);
    &:hover {
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 24px;
      color: rgba(43, 88, 249, 1);
    }
  }
  &.active {
    // width: 296px;
    height: 224px;
    background: rgba(43, 88, 249, 1);
    color: rgba(255, 255, 255, 1);
    padding: 40px 40px 48px 40px;
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

const UNFRAUDAI = 'UNFRAUDAI';
export const Ai: FC<IAiProps> = ({ }) => {
  const [currIndex, setCurrIndex] = useState(0);
  useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const videoContent = document.getElementById(UNFRAUDAI);
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
  }, []);
  return (
    <MainWrap>
      <Visible md lg xl xxl xxxl>
        <Pane>
          <div className="title">构建数智化反诈新模式，打造最全面的电信网络诈骗预防平台</div>
          <div className="sec-title">强力提升公安反诈预防全业务效能，助力电诈“双降”，持续保障居民生命财产安全</div>

          <div style={{ maxWidth: 1200, width: '100vw', margin: '0 auto' }}>
            <div id={UNFRAUDAI} className="aitxs">
              <ListWrapper>
                <div className="lists">
                  {titleList.map(({ title, subTitle }, index) => {
                    return (
                      <ListItem className={index == currIndex ? 'active' : null} onClick={() => setCurrIndex(index)}>
                        <div>{title}</div>
                        {index == currIndex && <div dangerouslySetInnerHTML={{ __html: subTitle }}></div>}
                      </ListItem>
                    );
                  })}
                </div>
                <div className="imgWrapper">
                  <img src={`${imgurl}${titleList[currIndex].url}`} />
                </div>
              </ListWrapper>
            </div>
          </div>
        </Pane>
      </Visible>
      <Visible xs sm>
        <Pane>
          <div className="title">构建数智化反诈新模式，打造最全面的数智反诈预防平台</div>
          <div className="sec-title">强力提升公安反诈预防全业务效能，助力电诈“双降”，持续保障居民生命财产安全</div>

          <div style={{ maxWidth: 1200, width: '100vw', margin: '0 auto' ,marginTop:'20px'}}>
            <div id={UNFRAUDAI} className="aitxs">
              <ListWrapper>
                <ByProgressSwiper
                  newProgress={true}
                  initialSlide={0}
                  slidesPerView="auto"
                  spaceBetween={12}
                >
                  {titleList.map((item, index) => {
                    return (
                      <div className='lists'>
                        <div>{item.title}</div>
                        <div dangerouslySetInnerHTML={{ __html: item.subTitlem }}></div>
                        <img style={{ width: '100%', height: '200px' }} src={imgurl + item.urlm} alt="" />
                      </div>
                    )
                  })}
                </ByProgressSwiper>
              </ListWrapper>
            </div>
          </div>
        </Pane>
      </Visible>
    </MainWrap>
  );
};
