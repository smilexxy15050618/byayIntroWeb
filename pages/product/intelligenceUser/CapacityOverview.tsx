import React, { FC, ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import Number from '../../../src/components/homepage/version2023/Number';

const PREFIX = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023';
const PREFIXBG = `${PREFIX}/CapOver-bg5.svg`

const list = [
  {
    bgImg: `${PREFIX}/CapOver-bg1.png`,
    sub: '增强型用户画像洞察',
    content: '构建全景客户画像',
    tag: [
      {
        title: '标签体系',
        number: 4,
        unit: '级',
      },
      {
        title: '行业标签模型',
        number: 10,
        unit: '+',
      },
      {
        title: '业务标签',
        number: 300,
        unit: '+',
      }
    ]
  },
  {
    bgImg: `${PREFIX}/CapOver-bg2.png`,
    sub: '策略智能与自动化',
    content: '实现目标人群精准自动化触达',
    tag: [
      {
        title: '自动化运营场景',
        number: 30,
        unit: '+',
      },
      {
        title: '自动化策略流程',
        number: 2000,
        unit: '+',
      },
      {
        title: '日均用户触达',
        number: 5000,
        unit: 'W+',
      }
    ]
  },
  {
    bgImg: `${PREFIX}/CapOver-bg3.png`,
    sub: '多模态情感化AI',
    content: '多模态Al形情感化沟通感知',
    tag: [
      {
        title: 'AI情感模态',
        number: 3,
        unit: '种',
      },
      {
        title: '行业对话场景包模型',
        number: 30,
        unit: '+',
      },
      {
        title: '各行业优质的对话话术库',
        number: 20,
        unit: 'W',
      }
    ]
  },
  {
    bgImg: `${PREFIX}/CapOver-bg4.png`,
    sub: '全场景用户连接与对话',
    content: '个性化触达与沟通策略',
    tag: [
      {
        title: '全场景覆盖',
        number: 4,
        unit: '端',
      },
      {
        title: '不间断用户洞察',
        number: 24,
        unit: '小时',
      },
      {
        title: '实时并发量支持',
        number: 10,
        unit: 'W+',
      }
    ]
  }
]


const CapacityOverWrap = styled.div`
  height: 872px;
  background: rgba(244, 248, 254, 1);
  .title{
    display: flex;
    justify-content: center;
    height: 160px;
    line-height: 160px;
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
    
  }
`;

const FeatureValueItem = styled.div<{ backImg?: string, activeImg?: string }>`
  position: relative;
  width: 590px;
  height: 294px;
  padding: 40px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
  box-sizing: border-box;
  margin-bottom: 20px;
  background-image: url(${props => props.backImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  &:nth-child(1),&:nth-child(3){
    margin-right: 20px;
  }
  &:hover{
    background-image: url(${props => props.activeImg});
    .item-title,.item-subtitle,.tag-item-t,.tag-item-sub .tag-item-sub,.tag-item-sub .number-font,.tag-item-sub .number-tips span{
      color: #fff;
    }
  }
  .item-title{
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(26, 26, 26, 1);
  }
  .item-subtitle{
    padding-top: 10px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
  }
  .item-tag{
    display: flex;
    flex-wrap: wrap;
    padding-top: 60px;
  }
`

const TagItem = styled.div`
  flex: 1;
  .tag-item-t{
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 28px;
    color: rgba(43, 43, 43, 1);
  }
  .tag-item-sub{
    display:flex;
    align-items: baseline;
    .number-font{
      font-size: 32px;
      font-weight: 600;
      letter-spacing: 0px;
      line-height: 56.25px;
      color: rgba(43, 43, 43, 1);
    }
    .number-tips{
      font-size: 48px;
      font-weight: 700;
      letter-spacing: 0px;
      line-height: NaNpx;
      color: rgba(43, 43, 43, 1);
      span{
        font-family: 'DINAlternate';
      }
    }
  }
`

interface IProps {
  className?: string;
  children?: ReactNode;
}

const AISOLUTION = 'ai_jiejue_3000'

const RawCapacityOverview: FC<IProps> = ({ className }) => {

  const [showNumber, setShowNumber] = useState(false);

  useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const videoContent = document.getElementById(AISOLUTION);
    new ScrollMagic.Scene({
      triggerElement: videoContent, //触发元素
      triggerHook: 'onEnter', //触发元素开始离开视口时触发
      offset: -100, //从开始点滚动多少px触发（施法前摇）
      duration: 400, //效果持续的距离（法术持续时间/距离）
    })
      // .setClassToggle('.aitxs', 'appear')
      .addTo(controller)
      .on('enter', () => {
        videoContent.classList.add('appear')
        setShowNumber(true);
        controller.destroy();
      });
  }, []);

  return (
    <CapacityOverWrap>
      <div className="title">能力总览</div>
      <div className="FeatureValue-tab" id={AISOLUTION}>
        {list.map((item, index) => {
          return (
            <FeatureValueItem backImg={item.bgImg} activeImg={PREFIXBG}>
              <div className='item-title'>{item.sub}</div>
              <div className='item-subtitle'>{item.content}</div>
              <div className='item-tag'>
                {item.tag.map((items, indexs) => {
                  return (
                    <TagItem>
                      <div className='tag-item-t'>{items.title}</div>
                      <div className='tag-item-sub'><span className='number-tips'>{showNumber && <Number number={items.number} />}</span><span className='number-font'>{items.unit}</span></div>
                    </TagItem>
                  )
                })}
              </div>
            </FeatureValueItem>
          )
        })}
      </div>
    </CapacityOverWrap>
  );
};

export type IFeaturesProps = IProps;
const CapacityOverview = styled(RawCapacityOverview) <IFeaturesProps>``;
export default CapacityOverview;