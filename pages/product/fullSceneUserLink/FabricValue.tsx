import React, { FC, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Visible } from 'react-grid-system';
import ByProgressSwiper from '../../../src/components/common/ByProgressSwiper';
import { IFeatureIntroduceProps } from '../../../src/components/voice-robot/FeatureIntroduceNew';

const PREFIX = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023';
const FEATURE_TITLE: IFeatureIntroduceProps[] = [
  {
    img1: `${PREFIX}/tswr-2.svg`,
    img2: `${PREFIX}/tswr-1.svg`,
    img3: `${PREFIX}/tswr-3.png`,
    title: '推送勿扰',
    subtitle: '勿扰能力让您可以在特定的时间段，无论如何都不打扰到用户，让互动“刚刚好” ',
  },
  {
    img1: `${PREFIX}/tdlj-2.svg`,
    img2: `${PREFIX}/tdlj-1.svg`,
    img3: `${PREFIX}/tdlj-3.png`,
    title: '天盾拦截',
    subtitle: '实现用户触达频次控制，确保不过度打扰用户，保证用户体验及舒适度',
  },
  {
    img1: `${PREFIX}/gxhts-2.svg`,
    img2: `${PREFIX}/gxhts-1.svg`,
    img3: `${PREFIX}/gxhts-3.png`,
    title: '个性化内容推送',
    subtitle: '通过采集和分析用户数据，可以更好地提供符合用户兴趣的内容，促进产品的销售和推广',
  },
  {
    img1: `${PREFIX}/abtest-2.svg`,
    img2: `${PREFIX}/abtest-1.svg`,
    img3: `${PREFIX}/abtest-3.png`,
    title: 'A/B Test',
    subtitle: '通过AB测试不断优化自己的触达策略，提高用户体验和市场竞争力，实现持续稳定的增长',
  },
];

const FeatureValueWrap = styled.div`
  margin-bottom: 100px;
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
  .title {
    display: flex;
    justify-content: center;
    height: 228px;
    line-height: 228px;
    font-size: 40px;
    font-weight: 500;
    letter-spacing: 0px;
    color: rgba(26, 26, 26, 1);
    @media (max-width: 768px) {
      font-size: 24px;
      height: 105px;
      line-height: 105px;
    }
  }
  .FeatureValue-tab {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    @media (max-width: 768px) {
      width: 100vw;
    }
    &.appear {
      transform: translateY(0);
      opacity: 1;
    }

    .FeatureValue-item {
      width: 400px;
      height: 349px;
      background: #f3f8ff;
      padding: 69px 50px 0;
      transition: all 0.3s ease-in;
      @media (max-width: 768px) {
        width: 240px;
        height: 250px;
        margin-right: 16px;
        padding: 30px;
      }
      img {
        transition: all 0.3s;
      }
      &:hover {
        transform: translateY(-8px);
        div {
          img:first-child {
            transform: translate(5px, -5px);
          }
          img:last-child {
            transform: translate(-5px, 5px);
          }
        }
      }
      &:nth-child(3) {
        &:hover {
          div {
            img:last-child {
              transform: translate(5px, -5px);
            }
            img:first-child {
              transform: translate(-5px, 5px);
            }
          }
        }
      }
      div:first-child {
        position: relative;
        width: 80px;
        height: 80px;
        margin: 0 auto 24px;
      }
      div:nth-child(2) {
        font-size: 18px;
        font-weight: 500;
        letter-spacing: 0px;
        color: rgba(26, 26, 26, 1);
        text-align: center;
      }
      div:last-child {
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        color: rgba(26, 26, 26, 0.65);
        text-align: left;
        @media (max-width: 768px) {
          padding-top: 20px;
        }
      }
      img {
        position: absolute;
        margin-bottom: 0;
        &:first-child {
          width: 80px;
          top: -1px;
          right: 0px;
        }
      }
    }
    .FeatureValue-item:nth-child(2) {
      background: rgba(249, 253, 255, 1);
    }
    .active {
      &::before {
        display: block;
      }
    }
  }
`;

interface IProps {
  className?: string;
  children?: ReactNode;
}

const AISOLUTION = 'ai_jiejue_2940';

const RawFabricValue: FC<IProps> = ({ className }) => {
  const [currIndex, setCurrIndex] = useState(0);

  useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const videoContent = document.getElementById(AISOLUTION);
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
    <FeatureValueWrap>
      <div className="title">产品价值</div>
      <Visible md lg xl xxl xxxl>
        <div className="FeatureValue-tab" id={AISOLUTION}>
          {FEATURE_TITLE.map((item, i) => (
            <div className="FeatureValue-item">
              <div>
                <img src={item.img1} alt="" />
                <img src={item.img2} alt="" />
              </div>
              <div>{item.title}</div>
              <div>{item.subtitle}</div>
            </div>
          ))}
        </div>
      </Visible>
      <Visible xs sm>
        <div className="FeatureValue-tab" id={AISOLUTION}>
          <ByProgressSwiper
            newProgress={true}
            initialSlide={0}
            contentPadding="32px"
            progressPadding="0px"
            previewWidth="70px">
            {FEATURE_TITLE.map((item, i) => (
              // 算垂直百分比时应该用对应(margin或padding)/父元素width，得到其占比
              <div className="FeatureValue-item">
                <div>
                  <img src={item.img3} alt="" />
                </div>
                <div>{item.title}</div>
                <div>{item.subtitle}</div>
              </div>
            ))}
          </ByProgressSwiper>
        </div>
      </Visible>
    </FeatureValueWrap>
  );
};

export type IFeaturesProps = IProps;
const FabricValue = styled(RawFabricValue) < IFeaturesProps > ``;
export default FabricValue;
