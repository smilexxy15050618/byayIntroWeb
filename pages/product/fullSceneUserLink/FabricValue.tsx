import React, { FC, ReactNode, useState, useEffect } from 'react';
import styled from 'styled-components';
import FeatureIntroduce, { IFeatureIntroduceProps } from '../../../src/components/voice-robot/FeatureIntroduceNew';

const PREFIX = '/static/img2023';
const FEATURE_TITLE: IFeatureIntroduceProps[] = [
  {
    img1:`${PREFIX}/tswr-2.svg`,
    img2:`${PREFIX}/tswr-1.svg`,
    title:  '推送勿扰',
    subtitle: ' ',
  },
  {
    img1:`${PREFIX}/tdlj-2.svg`,
    img2:`${PREFIX}/tdlj-1.svg`,
    title:  '天盾拦截',
    subtitle: '实现用户触达频次控制，确保不过度打扰用户，保证用户体验及舒适度。',
  },
  {
    img1:`${PREFIX}/gxhts-2.svg`,
    img2:`${PREFIX}/gxhts-1.svg`,
    title:  '个性化内容推送',
    subtitle: '通过采集和分析用户数据，个性化内容推送可以更好地了解用户的需求，提供符合用户兴趣的内容，提高用户体验和满意度，促进产品或服务的销售推广。',
  },
  {
    img1:`${PREFIX}/abtest-2.svg`,
    img2:`${PREFIX}/abtest-1.svg`,
    title:  'A/B Test',
    subtitle: '通过AB测试来不断优化自己的触达策略，提高用户体验和市场竞争力，实现更加持续和稳定的发展。',
  }
];


const FeatureValueWrap = styled.div`
  margin-bottom: 100px;
  .title{
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
  .FeatureValue-tab{
    width: 1200px;
    margin: 0 auto;
    display: flex;

    transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    &.appear{
      transform: translateY(0);
      opacity: 1;
    }
    
    .FeatureValue-item{
      width: 300px;
      height: 349px;
      background: #F3F8FF;
      padding: 69px 50px 0;
      transition: all 0.3s ease-in;
      img {
          transition: all 0.3s;
      }
      &:hover {
        transform: translateY(-8px);
          div {
              img:first-child {
                  transform: translate(5px,-5px);
              }
              img:last-child {
                  transform: translate(-5px,5px);
              }
          }
      }
      &:nth-child(3) {
          &:hover {
              div {
                  img:last-child {
                      transform: translate(5px,-5px);
                  }
                  img:first-child {
                      transform: translate(-5px,5px);
                  }
              }
          }
      }
      &:nth-child(4) {
          &:hover {
              background: #F9FDFF;
              div {
                  img:last-child {
                      transform: translateY(5px);
                  }
                  img:first-child {
                      transform: translateY(-5px);
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
    .FeatureValue-item:nth-child(2),.FeatureValue-item:nth-child(4){
      background: rgba(249, 253, 255, 1);
    }
    .active{
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

const AISOLUTION = 'ai_jiejue_2940'

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
            videoContent.classList.add('appear')
            // console.log('进入');
            
            controller.destroy();
        });
  }, []);

  return (
    <FeatureValueWrap id="#aaa">
      <div className="title">产品价值</div>
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
    </FeatureValueWrap>
  );
};

export type IFeaturesProps = IProps;
const FabricValue = styled(RawFabricValue)<IFeaturesProps>``;
export default FabricValue;
