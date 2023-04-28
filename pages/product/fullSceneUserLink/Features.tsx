import React, { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import FeatureIntroduce, { IFeatureIntroduceProps } from '../../../src/components/voice-robot/FeatureIntroduceNew';

const PREFIX = '/static/img2023';
const FEATURE_TITLE: IFeatureIntroduceProps[] = [
  {
    iconnormal:`${PREFIX}/wechat-2.svg`,
    iconactive:`${PREFIX}/wechat-1.svg`,
    title:  '微信',
    subtitle: 'WeChat',
    id: 'WeChat'
  },
  {
    iconnormal:`${PREFIX}/communicate-2.svg`,
    iconactive:`${PREFIX}/communicate-1.svg`,
    title:  '通讯',
    subtitle: 'Communicate',
    id: 'Communicate'
  },
  {
    iconnormal: `${PREFIX}/onlinecommun-2.svg`,
    iconactive: `${PREFIX}/onlinecommun-1.svg`,
    title:  '在线沟通',
    subtitle: 'Online Communication',
    id: 'OnlineCommunication'
  },
  {
    iconnormal: `${PREFIX}/intelligentter-2.svg`,
    iconactive: `${PREFIX}/intelligentter-1.svg`,
    title:  '智能终端',
    subtitle: 'Intelligent Terminal',
    id: 'IntelligentTerminal'
  },
];

const FEATURE_INFO: IFeatureIntroduceProps[] = [
  {
    title: '微信生态流量触达',
    textTwo: '加微/单聊/群/朋友圈/视频号/公众号/小程序集成微信生态触达渠道，低成本高效率触达客户',
    pcImgs: [
      {
        src: `${PREFIX}/wechat-banner.svg`,
        style: { width: '680px', height: '573px', top: '100px', left: '0' },
        className: ['animate__fadeInRight'],
      },
    ],
    id:'WeChat',
    boxheight: '718px',
  },
  {
    title: '电话 / 短信 / 5G消息',
    textTwo: '支持超大并发预测式呼叫、短信和5G消息，保障畅通无阻的沟通',
    pcImgs: [
      {
        src: `${PREFIX}/communicate-banner.svg`,
        style: { width: '680px', height: '619px', top: '100px', left: '0' },
        className: ['animate__fadeInLeft'],
      }
    ],
    id:'Communicate',
    boxheight: '784px',
  },
  {
    title: '在线沟通',
    textTwo: '提供网站/小程序/APP内的音视频在线沟通，方便实时交流',
    pcImgs: [
      {
        src: `${PREFIX}/onlinecommun-banner.svg`,
        style: { width: '680px', height: '518px', top: '100px', right: '0' },
        className: ['animate__fadeInRight'],
      }
    ],
    id:'OnlineCommunication',
    boxheight: '718px',
  },
  {
    title: '线下智能终端',
    textTwo: '兼容智能终端设备，实现线上线下无缝连接与触达',
    pcImgs: [
      {
        src: `${PREFIX}/intelligentter-banner.svg`,
        style: { width: '680px', height: '518px', top: '100px', right: '0' },
        className: ['animate__fadeInLeft'],
      }
    ],
    id:'IntelligentTerminal',
    boxheight: '750px',
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
            className={i==currIndex?'capacity-item active':'capacity-item'}
            onClick={() => {
              const node = document.querySelector(`.FeatureIntroduceWrap > .${item.id}`);
              if (node) {
                node.scrollIntoView({ behavior: 'smooth' });
              }
              onCancel()
            }}>
            <img src={i==currIndex ? item.iconnormal : item.iconactive} />
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
            background={i % 2 === 1 ? 'rgba(244, 248, 254, 1)' : '#FFFFFF'}
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
const Features = styled(RawFeatures)<IFeaturesProps>``;
export default Features;
