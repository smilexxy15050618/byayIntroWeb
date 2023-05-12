import React, { FC, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Visible } from 'react-grid-system';
import ByProgressSwiper from '../../../src/components/common/ByProgressSwiper';
import { IFeatureIntroduceProps } from '../../../src/components/voice-robot/FeatureIntroduceNew';

const PREFIX = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023';
// const PREFIX = '/static/img2023';
const FEATURE_TITLE: IFeatureIntroduceProps[] = [
  {
    img1: `${PREFIX}/multimodal-value-1-1.svg`,
    img2: `${PREFIX}/multimodal-value-1-2.svg`,
    img3: `${PREFIX}/multimodal-value-1-3.png`,
    title: '情感化',
    subtitle:
      '高度拟人，情感感知与情感交互。在营销和宣传过程中，调动对方情感是关键所在，有助于提升用户体验和传递信息的效果。',
  },
  {
    img1: `${PREFIX}/multimodal-value-2-1.svg`,
    img2: `${PREFIX}/multimodal-value-2-2.svg`,
    img3: `${PREFIX}/multimodal-value-2-3.png`,
    title: '主动式',
    subtitle:
      '具备主动销售能力和宣传能力。根据预设目标，主动推进对话和沟通，而不仅限于被动响应和回答问题，从而实现更高效的销售和宣传效果。',
  },
  {
    img1: `${PREFIX}/multimodal-value-3-1.svg`,
    img2: `${PREFIX}/multimodal-value-3-2.svg`,
    img3: `${PREFIX}/multimodal-value-3-3.png`,
    title: '全双工',
    subtitle:
      '在语音和数字人场景中，听说状态的实时切换，适应各种场景，确保多轮对话能力得到有效处理，使人机对话更加贴近真实的人际沟通。',
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
    line-height: 228px;
    color: rgba(26, 26, 26, 1);
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
const FabricValue = styled(RawFabricValue)<IFeaturesProps>``;
export default FabricValue;
