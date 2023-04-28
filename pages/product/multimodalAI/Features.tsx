import React, { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import FeatureIntroduce, { IFeatureIntroduceProps } from '../../../src/components/voice-robot/FeatureIntroduceNew';

const PREFIX = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023';
const FEATURE_TITLE: IFeatureIntroduceProps[] = [
  {
    iconnormal: `${PREFIX}/capacity-1-1.svg`,
    iconactive: `${PREFIX}/capacity-1-2.svg`,
    title: '语音交互',
    subtitle: 'Voice Interaction',
    id: 'voice'
  },
  {
    iconnormal: `${PREFIX}/capacity-2-1.svg`,
    iconactive: `${PREFIX}/capacity-2-2.svg`,
    title: '文本交互',
    subtitle: 'Text Interaction',
    id: 'version'
  },
  {
    iconnormal: `${PREFIX}/capacity-3-1.svg`,
    iconactive: `${PREFIX}/capacity-3-2.svg`,
    title: '虚拟数字人',
    subtitle: 'Virtual Digital Human',
    id: 'digit'
  },

];

const FEATURE_INFO: IFeatureIntroduceProps[] = [
  {
    title: '语音交互',
    textOne: '打造极致的对话体验',
    textTwo: '基于自然语言处理（NLP）、语音识别（ASR）和语音合成（TTS）技术，实现自动语音应答，用自然逼真的对话与客户沟通。通过语音机器人完成营销、宣传、回访、催收等外呼和接待场景语音对话。',
    pcImgs: [
      {
        src: `${PREFIX}/capacity-1.svg`,
        style: { width: '680px', height: '573px', top: '100px', left: '0' },
        className: ['animate__fadeInRight'],
      },
    ],
    id: 'voice',
    boxheight: '773px',
  },
  {
    title: '文本交互',
    textOne: '更聪明、更自然、更善解人意',
    textTwo: '提供文本对话交互功能，能替代人工客服解决大部分咨询问题。支持官网、企业微信、APP等线上全渠道接入，24小时全天候在线，用户在各个入口都能体验智能、便捷的咨询服务。',
    pcImgs: [
      {
        src: `${PREFIX}/capacity-2.svg`,
        style: { width: '680px', height: '619px', top: '100px', left: '0' },
        className: ['animate__fadeInLeft'],
      }
    ],
    id: 'version',
    boxheight: '819px',
  },
  {
    title: '视觉交互/虚拟数字人',
    textOne: '多样形象、智慧大脑、实时交互',
    textTwo: '将计算机视觉、语音识别、自然语言处理等AI技术深度融合，充分模拟人与人之间真实可感的对话交互方式，达到“听得懂，看得见，说得出“的效果，所见即所得。',
    pcImgs: [
      {
        src: `${PREFIX}/capacity-3.svg`,
        style: { width: '680px', height: '518px', top: '100px', right: '0' },
        className: ['animate__fadeInRight'],
      }
    ],
    id: 'digit',
    boxheight: '718px',
  },
];

const FeatureWrap = styled.div`
  
  .title{
    display: flex;
    justify-content: center;
    padding: 100px 0 40px;
    font-size: 40px;
    font-weight: 500;
    line-height: 48px;
    color: rgba(26, 26, 26, 1);
  }
  .capacity-tab{
    height: 170px;
    display: flex;
    justify-content: center;
    border-bottom: 4px solid #F4F8FE;
    .capacity-item{
      position: relative;
      padding-top: 28px;
      width: 190px;
      height: 170px;
      margin-right: 90px;
      text-align: center;
      box-sizing: border-box;
      cursor: pointer;
      &:hover{
        img:nth-child(1){
          display: none;
        }
        img:nth-child(2){
          display: inline-block;
        }
      }
      &::before {
        display: none;
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 190px;
        height: 4px;
        background: rgba(43, 88, 249, 1);
      }
      img{
        width: 36px;
        height: 36px;
      }
      img:nth-child(1){
        display: inline-block;
      }
      img:nth-child(2){
        display: none;
      }
      .title-tab{
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 28px;
        color: rgba(26, 26, 26, 1);
      }
      .subtitle{
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 24px;
        color: rgba(90, 90, 90, 1);
      }
    }
    .capacity-item:last-child{
      margin-right: 0;
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

const RawFeatures: FC<IProps> = ({ className, onCancel }) => {
  const [currIndex, setCurrIndex] = useState(0);

  return (
    <FeatureWrap>
      <div className="title">产品能力</div>
      <div className="capacity-tab">
        {FEATURE_TITLE.map((item, i) => (
          <div
            className={i == currIndex ? 'capacity-item active' : 'capacity-item'}
            onClick={() => {
              const node = document.querySelector(`.FeatureIntroduceWrap > .${item.id}`);
              if (node) {
                node.scrollIntoView({ behavior: 'smooth' });
              }
              onCancel()
            }}>
            <img src={i == currIndex ? item.iconnormal : item.iconactive} />
            <img src={item.iconnormal} />
            <div className="title-tab">{item.title}</div>
            <div className="subtitle">{item.subtitle}</div>
          </div>
        ))}
      </div>
      <div className='FeatureIntroduceWrap'>
        {FEATURE_INFO.map((item, i) => (
          <FeatureIntroduce
            {...item}
            key={i}
            id={item.id}
            imgFirst={i % 2 === 1}
            background={i == 2 ? 'rgba(244, 248, 254, 1)' : '#FFFFFF'}
            height={item.boxheight}
            padding="0 0"
            className={'relative-position ' + item.id}
          />
        ))}
      </div>
    </FeatureWrap>
  );
};

export type IFeaturesProps = IProps;
const Features = styled(RawFeatures) <IFeaturesProps>``;
export default Features;
