import React, { FC, ReactNode, useState, useEffect } from 'react';
import styled from 'styled-components';
import Number from '../../../src/components/homepage/version2023/Number'

const PREFIX = '/static/img2023';

const list = [
  {
    bgImg: `${PREFIX}/CapacityOver-1.svg`,
    title: '标准化',
  },
  {
    bgImg: `${PREFIX}/CapacityOver-2.svg`,
    title: '统一化',
  },
  {
    bgImg: `${PREFIX}/CapacityOver-3.svg`,
    title: '可追溯',
  },
  {
    bgImg: `${PREFIX}/CapacityOver-4.svg`,
    title: '可复用',
  }
]


const CapacityOverWrap = styled.div`
  height: 468px;
  background: #ffffff;
  .title{
    padding-top: 60px;
    display: flex;
    justify-content: center;
    font-size: 40px;
    font-weight: 500;
    color: rgba(26, 26, 26, 1);
  }
  .subtitle{
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    color: rgba(0, 0, 0, 1);
  }
  .CapacityOve-tab{
    width: 1200px;
    margin: 0 auto;
    padding-top: 40px;
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

const CapacityOverItem = styled.div`
  width: 288px;
  height: 180px;
  margin-right: 16px;
  text-align: center;
  cursor: pointer;
  &:nth-child(4){
    margin-right: 0;
  }
  &:hover{
    div{
      color: rgba(43, 88, 249, 1);
    }
  }
  img{
    width: 60px;
    height: 60px;
    margin-top: 36px;
  }
  div{
    margin-top: 10px;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(0, 0, 0, 1);
  }
`

interface IProps {
  className?: string;
  children?: ReactNode;
}

const AISOLUTION = 'ai_jiejue_3008'

const RawOpenPlatform: FC<IProps> = ({ className }) => {

  const [showNumber,setShowNumber] = useState(false);

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
      <div className="title">百应开放平台</div>
      <div className="subtitle">丰富的可拓展和企业级能力，帮助企业快速搭建起智能化应用</div>
      <div className="CapacityOve-tab" id={AISOLUTION}>
        {list.map((item, index) => {
            return (
              <CapacityOverItem>
                <img src={item.bgImg} />
                <div>{item.title}</div>
            </CapacityOverItem>
            )
        })}
      </div>
    </CapacityOverWrap>
  );
};

export type IFeaturesProps = IProps;
const OpenPlatform = styled(RawOpenPlatform)<IFeaturesProps>``;
export default OpenPlatform;