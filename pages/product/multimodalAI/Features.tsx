import React, { FC, ReactNode, useEffect, useRef, useState } from 'react';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import FeatureIntroduce, { IFeatureIntroduceProps } from '../../../src/components/voice-robot/FeatureIntroduceNew';

const PREFIX = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023';
const FEATURE_TITLE: IFeatureIntroduceProps[] = [
  {
    iconnormal: `${PREFIX}/capacity-1-1.svg`,
    iconactive: `${PREFIX}/capacity-1-2.svg`,
    title: '语音交互',
    subtitle: 'Voice Interaction',
    id: 'voice',
  },
  {
    iconnormal: `${PREFIX}/capacity-2-1.svg`,
    iconactive: `${PREFIX}/capacity-2-2.svg`,
    title: '文本交互',
    subtitle: 'Text Interaction',
    id: 'version',
  },
  {
    iconnormal: `${PREFIX}/capacity-3-1.svg`,
    iconactive: `${PREFIX}/capacity-3-2.svg`,
    title: '虚拟数字人',
    subtitle: 'Virtual Digital Human',
    id: 'digit',
  },
];

const FEATURE_INFO: IFeatureIntroduceProps[] = [
  {
    title: '语音交互',
    textOne: '打造极致的对话体验',
    textTwo:
      '基于自然语言处理（NLP）、语音识别（ASR）和语音合成（TTS）技术，实现自动语音应答，用自然逼真的对话与客户沟通。通过语音机器人完成营销、宣传、回访、催收等外呼和接待场景语音对话。',
    pcImgs: [
      {
        src: `${PREFIX}/capacity-1.svg`,
        srcWap: `${PREFIX}/capacity-wap-1.png`,
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
    textTwo:
      '提供文本对话交互功能，能替代人工客服解决大部分咨询问题。支持官网、企业微信、APP等线上全渠道接入，24小时全天候在线，用户在各个入口都能体验智能、便捷的咨询服务。',
    pcImgs: [
      {
        src: `${PREFIX}/capacity-2.svg`,
        srcWap: `${PREFIX}/capacity-2.svg`,
        style: { width: '680px', height: '619px', top: '100px', left: '0' },
        className: ['animate__fadeInLeft'],
      },
    ],
    id: 'version',
    boxheight: '819px',
  },
  {
    title: '视觉交互/虚拟数字人',
    textOne: '多样形象、智慧大脑、实时交互',
    textTwo:
      '将计算机视觉、语音识别、自然语言处理等AI技术深度融合，充分模拟人与人之间真实可感的对话交互方式，达到“听得懂，看得见，说得出“的效果，所见即所得。',
    pcImgs: [
      {
        src: `${PREFIX}/capacity-3.svg`,
        srcWap: `${PREFIX}/capacity-3.svg`,
        style: { width: '680px', height: '518px', top: '100px', right: '0' },
        className: ['animate__fadeInRight'],
      },
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
    @media (max-width: 768px) {
      font-size: 24px;
      font-weight: 500;
      line-height: 40px;
      padding: 34px 15px 0;
    }
  }
  .placeholderDom{
    padding-top: 84px;
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
          width: 95px;
          height: 2px;
          left: 15px;
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
          font-weight: 600;
          transform: scale(0.8);
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
          display: none;
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
        top: 0;
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
      &:nth-child(3) {
        img{
          width: 343px;
          height: 261px;
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
  const navRefvoice = useRef(null);
  const navRefversion = useRef(null);
  const navRefdigit = useRef(null);

  useEffect(() => {
    // const fixedTop = navRef.current.offsetTop;
    // window.onscroll = () => {
    //   let scrollTop = document.documentElement.scrollTop;
    //   const isFixed = scrollTop >= fixedTop - 110;
    //   set_is_fixed(isFixed);
    //   if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent)) {
    //     if (scrollTop >= navRefvoice.current.offsetTop - 130) {
    //       setCurrIndex(0)
    //     }
    //     if (scrollTop >= navRefversion.current.offsetTop - 130) {
    //       setCurrIndex(1)
    //     }
    //     if (scrollTop >= navRefdigit.current.offsetTop - 130) {
    //       setCurrIndex(2)
    //     }

    //     if (scrollTop >= navRefvoice.current.offsetTop - 140 && scrollTop < navRefversion.current.offsetTop - 140) {
    //       setCurrIndex(0)
    //     }
    //     if (scrollTop >= navRefversion.current.offsetTop - 140 && scrollTop < navRefdigit.current.offsetTop - 140) {
    //       setCurrIndex(1)
    //     }
    //     if (scrollTop >= navRefdigit.current.offsetTop - 140) {
    //       setCurrIndex(2)
    //     }
    //     if (scrollTop >= navRefdigit.current.offsetTop + navRefdigit.current.offsetHeight - 118) {
    //       set_is_fixed(false);
    //     }
    //   }

    // };
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
                onCancel();
                setCurrIndex(i);
              }}>
              <img src={i == currIndex ? item.iconnormal : item.iconactive} />
              <img src={item.iconnormal} />
              <div className="title-tab">{item.title}</div>
              <div className="subtitle">{item.subtitle}</div>
            </div>
          ))}
        </div>
        <div className="FeatureIntroduceWrap">
          {FEATURE_INFO.map((item, i) => (
            <FeatureIntroduce
              {...item}
              key={i}
              id={item.id}
              imgFirst={i % 2 === 1}
              background={i == 1 ? 'rgba(244, 248, 254, 1)' : '#FFFFFF'}
              height={item.boxheight}
              padding="0 0"
              className={'relative-position ' + item.id}
            />
          ))}
        </div>
      </Visible>
      <Visible xs sm>
        {/* <div className={`capacity-tab ${is_fixed ? 'fixedTop' : ''}`} ref={navRef}>
          {FEATURE_TITLE.map((item, i) => (
            <div
              className={i == currIndex ? 'capacity-item active' : 'capacity-item'}
              onClick={() => {
                const node = document.querySelector(`.FeatureIntroduceWrap > .relative-position > .${item.id}`);
                if (node) {
                  node.scrollIntoView({ behavior: 'smooth' });
                }
                onCancel();
                setCurrIndex(i);
              }}>
              <img src={i == currIndex ? item.iconnormal : item.iconactive} />
              <img src={item.iconnormal} />
              <div className="title-tab">{item.title}</div>
              <div className="subtitle">{item.subtitle}</div>
            </div>
          ))}
        </div> */}
        <div className={is_fixed ? 'FeatureIntroduceWrap FeatureWap placeholderDom' : 'FeatureIntroduceWrap FeatureWap'}>
          {FEATURE_INFO.map((item, i) => (
            <div className="relative-position" ref={i == 0 ? navRefvoice : i == 1 ? navRefversion : navRefdigit}>
              {/*占位div,吸定后脱离文档流，dom高度发生变化了*/}
              <div className={`relative-position-wap${i} ${item.id}`}></div>
              <img src={item.pcImgs[0].srcWap} />
              <div className="title1">{item.title}</div>
              <div className="title2">{item.textOne}</div>
              <div className="title3">{item.textTwo}</div>
            </div>
          ))}
        </div>
      </Visible>
    </FeatureWrap>
  );
};

export type IFeaturesProps = IProps;
const Features = styled(RawFeatures) < IFeaturesProps > ``;
export default Features;
