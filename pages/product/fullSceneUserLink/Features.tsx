import React, { FC, ReactNode, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Visible } from 'react-grid-system';
import FeatureIntroduce, { IFeatureIntroduceProps } from '../../../src/components/voice-robot/FeatureIntroduceNew';

const PREFIX = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023';
const FEATURE_TITLE: IFeatureIntroduceProps[] = [
  {
    iconnormal: `${PREFIX}/wechat-2.svg`,
    iconactive: `${PREFIX}/wechat-1.svg`,
    title: '微信',
    subtitle: 'WeChat',
    id: 'WeChat'
  },
  {
    iconnormal: `${PREFIX}/communicate-2.svg`,
    iconactive: `${PREFIX}/communicate-1.svg`,
    title: '通讯',
    subtitle: 'Communicate',
    id: 'Communicate'
  },
  {
    iconnormal: `${PREFIX}/onlinecommun-2.svg`,
    iconactive: `${PREFIX}/onlinecommun-1.svg`,
    title: '在线沟通',
    subtitle: 'Online Communication',
    id: 'OnlineCommunication'
  },
  {
    iconnormal: `${PREFIX}/intelligentter-2.svg`,
    iconactive: `${PREFIX}/intelligentter-1.svg`,
    title: '智能终端',
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
    id: 'WeChat',
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
    id: 'Communicate',
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
    id: 'OnlineCommunication',
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
    id: 'IntelligentTerminal',
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
    @media (max-width: 768px) {
      font-size: 24px;
      font-weight: 500;
      line-height: 40px;
      padding: 34px 15px;
    }
  }
  .placeholderDom{
    padding-top: 150px;
  }
  .capacity-tab{
    height: 170px;
    display: flex;
    justify-content: center;
    border-bottom: 4px solid #F4F8FE;
    @media (max-width: 768px) {
      height: 86px;
      border-bottom: 1px solid #F4F8FE;
    }
    .capacity-item{
      position: relative;
      padding-top: 28px;
      width: 190px;
      height: 170px;
      margin-right: 90px;
      text-align: center;
      box-sizing: border-box;
      cursor: pointer;
      @media (max-width: 768px) {
        flex: 1;
        margin-right: 0;
        height: 86px;
        padding-top: 14px;
      }
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
        @media (max-width: 768px) {
          width: 74px;
          height: 2px;
          left: 10px;
        }
      }
      img{
        width: 36px;
        height: 36px;
        @media (max-width: 768px) {
          width: 18px;
          height: 18px;
        }
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
        @media (max-width: 768px) {
          font-size: 10px;
          line-height: 14px;
        }
      }
      .subtitle{
        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 24px;
        color: rgba(90, 90, 90, 1);
        @media (max-width: 768px) {
          padding-top: 6px;
          font-size: 6px;
          letter-spacing: -1px;
          line-height: 12px;
        }
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
  .fixedTop{
    z-index: 9;
    position: fixed;
    top: 64px;
    width: 100vw;
    background:#fff;
  }
  .FeatureWap{
    .relative-position{
      position: relative;
      text-align: center;
      padding-top: 36px;
      padding-bottom: 34px;
      background: rgba(255, 255, 255, 1);
      .relative-position-wap0{
        position: absolute;
        top: -230px;
        left: 0;
        width: 100vw;
        background:#fff;
      }
      .relative-position-wap1{
        position: absolute;
        top: -230px;
        left: 0;
        width: 100vw;
        background:#fff;
      }
      .relative-position-wap2{
        position: absolute;
        top: -150px;
        left: 0;
        width: 100vw;
        background:#fff;
      }
      &:nth-child(2) {
        background: rgba(244, 248, 254, 1);
        img{
          width: 343px;
          height: 312px;
        }
        }
      }
      &:nth-child(3) {
        background: rgba(244, 248, 254, 1);
        img{
          width: 343px;
          height: 261px;
        }
        }
      }
      img{
        width: 343px;
        height: 289px;
      }
      .title1{
        padding-top: 24px;
        font-size: 22px;
        font-weight: 500;
        line-height: 30px;
      }
      .title2{
        padding-top: 20px;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: rgba(0, 0, 0, 0.8);
      }
      .title3{
        padding: 0 30px;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.65);
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
  const [is_fixed, set_is_fixed] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const fixedTop = navRef.current.offsetTop;
    
    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      const isFixed = scrollTop >= fixedTop;
      set_is_fixed(isFixed);
    }
    
  }, []);

  return (
    <FeatureWrap>
      <div className="title">产品能力</div>
      <Visible md lg xl xxl xxxl>
        <div className="capacity-tab" ref={navRef}>
          {FEATURE_TITLE.map((item, i) => (
            <div
              className={i == currIndex ? 'capacity-item active' : 'capacity-item'}
              onClick={() => {
                const node = document.querySelector(`.FeatureIntroduceWrap > .${item.id}`);
                if (node) {
                  node.scrollIntoView({ behavior: 'smooth' });
                }
                onCancel()
                setCurrIndex(i)
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
      </Visible>
      <Visible xs sm>
        <div className={`capacity-tab ${is_fixed ? 'fixedTop' : ''}`} ref={navRef}>
          {FEATURE_TITLE.map((item, i) => (
            <div
              className={i == currIndex ? 'capacity-item active' : 'capacity-item'}
              onClick={() => {
                const node = document.querySelector(`.FeatureIntroduceWrap > .relative-position > .${item.id}`);
                if (node) {
                  node.scrollIntoView({ behavior: 'smooth' });
                }
                onCancel()
                setCurrIndex(i)
              }}>
              <img src={i == currIndex ? item.iconnormal : item.iconactive} />
              <img src={item.iconnormal} />
              <div className="title-tab">{item.title}</div>
              <div className="subtitle">{item.subtitle}</div>
            </div>
          ))}
        </div>
        <div className='FeatureIntroduceWrap FeatureWap'>
          {FEATURE_INFO.map((item, i) => (
            <div className='relative-position'>
              {/*占位div,吸定后脱离文档流，dom高度发生变化了*/}
              <div className={`relative-position-wap${i} ${item.id}`}></div>
              <img src={item.pcImgs[0].src} />
              <div className='title1'>{item.title}</div>
              <div className='title2'>{item.textOne}</div>
              <div className='title3'>{item.textTwo}</div>
            </div>
          ))}
        </div>
      </Visible>
      
    </FeatureWrap>
  );
};

export type IFeaturesProps = IProps;
const Features = styled(RawFeatures) <IFeaturesProps>``;
export default Features;
