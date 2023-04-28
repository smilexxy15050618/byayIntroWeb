import React, { FC, ReactNode, useEffect } from 'react';
import styled from 'styled-components';
import { IFeatureIntroduceProps } from '../../../src/components/voice-robot/FeatureIntroduceNew';

const PREFIX = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023';
const PREFIXBG = `${PREFIX}/intel-nl-bg.svg`
const FEATURE_TITLE: IFeatureIntroduceProps[] = [
  {
    img1: `${PREFIX}/intel-nl-1.png`,
    tag: [
      {
        name: '体系化标签管理',
      },
      {
        name: '个性化用户分群',
      },
      {
        name: '360°深度洞察',
      },
      {
        name: '行业算法模型标签',
      }
    ],
    title: '增强型用户画像洞察',
    subtitle: '综合客户数据建立多维标签，构建全景客户画像，获得深入洞察，为精细化运营提供策略基础。',
  },
  {
    img1: `${PREFIX}/intel-nl-2.png`,
    tag: [
      {
        name: '智能化生成运营策略',
      },
      {
        name: '自动化完成策略触达',
      },
      {
        name: '科学性验证效果数据',
      },
      {
        name: '实时性增强客户洞察',
      }
    ],
    title: '策略智能与自动化',
    subtitle: '充分收集并洞察客户行为、属性、标签，并针对性制定触达与沟通策略，实现目标人群精准自动化触达，提升关键指标和运营效率。',
  },
  {
    img1: `${PREFIX}/intel-nl-3.png`,
    tag: [
      {
        name: '文本交互',
      },
      {
        name: '语音交互',
      },
      {
        name: '视觉交互',
      },
      {
        name: '虚拟数字人',
      },
      {
        name: '情感化',
      },
      {
        name: '拟人化',
      },
      {
        name: '全双工',
      },
      {
        name: '主动式',
      }
    ],
    title: '多模态情感化AI',
    subtitle: '在不同的渠道和场景中使用多模态Al形式沟通，情感化沟通感知，跨端能力共享，为用户提供个性化服务和推荐，提高用户体验。',
  },
  {
    img1: `${PREFIX}/intel-nl-4.png`,
    tag: [
      {
        name: '通信：AI智能电话｜短信｜5G消息',
      },
      {
        name: '在线：音视频｜直播交互',
      },
      {
        name: '微信：加微｜单聊｜群聊｜视频号｜公众号',
      },
      {
        name: '线下：智能终端',
      },
    ],
    title: '全场景用户连接与对话',
    subtitle: '充分洞察用户，并针对性制定触达与沟通策略，使用合适的内容，在合适的时间触达合适的客户。',
  },
  {
    img1: `${PREFIX}/intel-nl-5.png`,
    tag: [
      {
        name: '非结构化数据感知',
      },
      {
        name: '文本智能（NLP）',
      },
      {
        name: '语音识别（ASR）',
      },
      {
        name: '智能对话技术',
      },
      {
        name: '人机互动'
      },
      {
        name: '多模态情绪识别'
      },
      {
        name: '可信策略生成'
      }
    ],
    title: '认知智能能力平台',
    subtitle: '通过A辅助，提供敏捷智能的科学运营，实现运营的数字化转型',
  },
  {
    img1: `${PREFIX}/intel-nl-6.png`,
    tag: [
      {
        name: '结构化数据感知',
      },
      {
        name: '大规模模型训练',
      },
      {
        name: '特征提取和选择',
      },
      {
        name: '多方安全计算',
      },
      {
        name: '联邦学习'
      },
      {
        name: '安全计算引擎'
      },
    ],
    title: '数据智能能力平台',
    subtitle: '连接全局客户数据，构建第一方用户池，专为保障企业在数据共享和流通过程中的隐私安全性而设计',
  },
];


const FeatureValueWrap = styled.div<{ backImg?: string }>`
    height: 1312px;
    background-image: url(${props => props.backImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  .title{
    display: flex;
    justify-content: center;
    height: 180px;
    line-height: 220px;
    font-size: 40px;
    font-weight: 500;
    color: rgba(26, 26, 26, 1);
  }
  .FeatureValue-tab{
    width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    
    transform: translateY(50%);
    transition: all 0.3s;
    opacity: 0;
    &.appear{
      transform: translateY(0);
      opacity: 1;
    }
    .FeatureValue-item{
      position: relative;
      width: 588px;
      height: 310px;
      padding: 36px 0 36px 40px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
      box-sizing: border-box;
      margin-bottom: 20px;
      overflow: hidden;
      border: 1px solid #fff;
      cursor: pointer;
      &:hover{
        border: 1px solid #2b58F9;
        .item-title{
          color: rgba(43, 88, 249, 1);
        }
      }
      &:nth-child(1),&:nth-child(3){
        margin-right: 20px;
      }  
      .item-title{
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 0px;
        line-height: 24px;
        color: rgba(26, 26, 26, 1);
      }
      .item-subtitle{
        padding: 14px 30px 0 0;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 24px;
        color: rgba(51, 51, 51, 1);
      }
      .item-tag{
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        padding-right: 166px;
        span{
          display: inline-block;
          margin-right: 8px;
          margin-bottom: 8px;
          padding: 0 5px;
          height: 22px;
          line-height:22px;
          border-radius: 2px;
          background: rgba(250, 251, 253, 1);
          border: 1px solid rgba(219, 219, 224, 1);    
        }
      }
      .item-btn{
        position: absolute;
        left: 40px;
        bottom: 40px;
        width: 120px;
        height: 36px;
        font-size: 16px;
        font-weight: 400;
        line-height: 36px;
        color: rgba(255, 255, 255, 1);
        text-align: center;
        border-radius: 4px;
        background: rgba(43, 88, 249, 1);
      }
      img{
        position: absolute;
        right: 0;
        top: 136px;
      }
      &:nth-child(1){
        img{
          width:200px;
          height:196px;
        }
      } 
      &:nth-child(2){
        img{
          width:195px;
          height:187px;
        }
      } 
      &:nth-child(3){
        img{
          width:200px;
          height:202px;
        }
      } 
      &:nth-child(4){
        img{
          width:200px;
          height:210px;
        }
      }  
    }
    .FeatureValue-item-two{
      width: 1200px;
      position: relative;
      height: 182px;
      padding: 36px 0 36px 40px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
      box-sizing: border-box;
      margin-bottom: 20px;
      overflow: hidden;
      .item-title{
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 0px;
        line-height: 24px;
        color: rgba(26, 26, 26, 1);
      }
      .item-subtitle{
        padding: 14px 30px 0 0;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 24px;
        color: rgba(51, 51, 51, 1);
      }
      .item-tag{
        margin-top: 10px;
        display: flex;
        flex-wrap: wrap;
        padding-right: 166px;
        span{
          display: inline-block;
          margin-right: 8px;
          margin-bottom: 8px;
          padding: 0 5px;
          height: 22px;
          line-height:22px;
          border-radius: 2px;
          background: rgba(250, 251, 253, 1);
          border: 1px solid rgba(219, 219, 224, 1);    
        }
      }
      .item-btn{
        display: none;
      }
      img{
        position: absolute;
        right: 0;
        top: 0;
        width: 240px;
        height: 240px;
      }
    }
    
    
  }
`;

interface IProps {
  className?: string;
  children?: ReactNode;
}

const AISOLUTION = 'ai_jiejue_2948'

const RawFabricValue: FC<IProps> = ({ className }) => {

  useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const videoContent = document.getElementById(AISOLUTION);
    new ScrollMagic.Scene({
      triggerElement: videoContent, //触发元素
      triggerHook: 'onEnter', //触发元素开始离开视口时触发
      offset: -100, //从开始点滚动多少px触发（施法前摇）
      duration: 100, //效果持续的距离（法术持续时间/距离）
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
    <FeatureValueWrap backImg={PREFIXBG}>
      <div className="title">产品能力体系全景</div>
      <div className="FeatureValue-tab" id={AISOLUTION}>
        {FEATURE_TITLE.map((item, index) => (
          <div className={index == 4 || index == 5 ? 'FeatureValue-item-two' : 'FeatureValue-item'}>
            <div className='item-title'>{item.title}</div>
            <div className='item-subtitle'>{item.subtitle}</div>
            <div className="item-tag">
              {item.tag.map((items, i) => (
                <span>{items.name}</span>
              ))}
            </div>
            <div className="item-btn" onClick={() => window.open('/form?formType=1')}>了解更多</div>
            <img src={item.img1} />
          </div>
        ))}
      </div>
    </FeatureValueWrap>
  );
};

export type IFeaturesProps = IProps;
const FabricValue = styled(RawFabricValue) <IFeaturesProps>``;
export default FabricValue;