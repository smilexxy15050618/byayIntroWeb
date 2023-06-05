import React, { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import {  Hidden, Visible } from 'react-grid-system';
import imgurl from '../../../img.url.js';
import ByProgressSwiper from '../common/ByProgressSwiper';

const titleList = [
  {
    title: '全业务场景覆盖',
    subTitle: '覆盖贷款、理财、网银、信用卡4<br />大类业务营销、唤醒、促销等20+<br />细分场景业务实践沉淀1000+套场<br />景运营策略模版',
    subTitleWap: '覆盖贷款、理财、网银、信用卡4大类业务<br />营销、唤醒、促销等20+细分场景<br />业务实践沉淀1000+套场景运营策略模版',
    url: '/bank-govern-1.svg',
  },

  {
    title: '全生命周期用户运营',
    subTitle: '丰富数据标签建模分层<br />分层用户精细化运营<br />用户画像实时分析<br />赋能中长尾用户活跃激活',
    subTitleWap:'丰富数据标签建模分层<br />分层用户精细化运营<br />用户画像实时分析<br />赋能中长尾用户活跃激活',
    url: '/bank-govern-2.svg',
  },
  {
    title: 'ROI导向升级运营服务',
    subTitle: '运营策略制定与持续迭代<br />运营流程自动化执行<br />话术制作与持续调优<br />数据结果实时分析',
    subTitleWap:'运营策略制定与持续迭代<br />运营流程自动化执行<br />话术制作与持续调优<br />数据结果实时分析',
    url: '/bank-govern-3-new.svg',
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
        width: 300px !important;
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
  height: 552px;
  .lists {
    width: 296px;
  }
  .imgWrapper {
    width: 888px;
    height: 552px;
    border-radius: 8px;
    background: rgba(246, 252, 255, 1);
    box-sizing: border-box;
  }
  img {
    width: 100%;
    height: 552px;
    margin: 0;
    border-radius: 8px;
  }
`;
const ListItem = styled.div`
  width: 296px;
  height: 148px;
  padding-top: 62px;
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
    height: 240px;
    background: rgba(43, 88, 249, 1);
    color: rgba(255, 255, 255, 1);
    padding: 36px 35px 48px 40px;
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
        <div class="title">银行全场景智能营销</div>
        <div class="desc">围绕用户生命周期，以转化效果为导向，助力银行机构AUM和MAU双效提升</div>
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
                        <div dangerouslySetInnerHTML={{ __html: title }}></div>
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
                <div className="title" dangerouslySetInnerHTML={{ __html: item.title }}></div>
                <div className="subtitle" dangerouslySetInnerHTML={{ __html: item.subTitleWap }}></div>
                {/*'/static/img2023'*/}
                <img src={imgurl+item.url} />
              </div>
            ))}
          </ByProgressSwiper>
        </Visible>
      </Pane>
    </MainWrap>
  );
};

export default AI;
