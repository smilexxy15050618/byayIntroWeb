import React, { FC, ReactNode, useState, useEffect } from 'react';
import styled from 'styled-components';
import FeatureIntroduce, { IFeatureIntroduceProps } from '../../../src/components/voice-robot/FeatureIntroduceNew';

const PREFIX = '/static/img2023';
const FEATURE_TITLE: IFeatureIntroduceProps[] = [
  {
    iconnormal:`${PREFIX}/multimodal-value-1.png`,
    title:  '情感化',
    subtitle: '高度拟人，情感感知与情感交互。在营销和宣传过程中，调动对方情感是关键所在，有助于提升用户体验和传递信息的效果。',
  },
  {
    iconnormal:`${PREFIX}/multimodal-value-2.png`,
    title:  '主动式',
    subtitle: '具备主动销售能力和宣传能力。根据预设目标，主动推进对话和沟通，而不仅限于被动响应和回答问题，从而实现更高效的销售和宣传效果。',
  },
  {
    iconnormal: `${PREFIX}/multimodal-value-3.png`,
    title:  '全双工',
    subtitle: '在语音和数字人场景中，听说状态的实时切换，适应各种场景，确保轮对话能力得到有效处理，使人机对话更加贴近真实的人际沟通。',
  },
  
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
      width: 400px;
      height: 350px;
      padding: 50px;
      text-align: center;
      box-sizing: border-box;
      background: rgba(243, 248, 255, 1);
      transition: all 0.3s ease-in;
      img{
        width: 80px;
        height: 80px;
      }
      .title-tab{
        margin-top: 18px;
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: 500;
        color: rgba(26, 26, 26, 1);
      }
      .subtitle{
        font-size: 14px;
        font-weight: 400;
        color: rgba(26, 26, 26, 0.65);
      }
      &:hover{
        transform: translateY(-8px);
    }
    }
    .FeatureValue-item:nth-child(2){
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
            <img src={item.iconnormal} />
            <div className="title-tab">{item.title}</div>
            <div className="subtitle">{item.subtitle}</div>
          </div>
        ))}
      </div>
    </FeatureValueWrap>
  );
};

export type IFeaturesProps = IProps;
const FabricValue = styled(RawFabricValue)<IFeaturesProps>``;
export default FabricValue;
