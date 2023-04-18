import React, { FC, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Theme } from '../../constants/style';
import { splitCssValue } from '../../lib/utils';

const Title = styled.div`
  padding-top: 80px;
  padding-bottom:44px;
  font-size: 40px;
  line-height: 48px;
  color:rgba(43, 43, 43, 1);
  text-align: center;
`;

const BriefContainer = styled.div<{ maxWidthPc?: string; minWidthPC?: string }>`
  @media (min-width: 768px) {
    max-width: ${props => props.maxWidthPc || Theme.ContentWidth};
    min-width: ${props => props.minWidthPC || 'unset'};
    width: calc(
      100vw / ${splitCssValue(Theme.DesignDraftWidth).num} *
        ${props => splitCssValue(props.maxWidthPc || Theme.ContentWidth).num}
    );
    margin: 0 auto;
  }
  height: 100%;
  @media (max-width: 768px) {
    width: 100% !important;
  }
  .BriefContainerWrap{
    display: flex; 
    justify-content: space-between; 
    flex-flow: row wrap;
    padding: 80px 0;
    transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    &.appear{
      transform: translateY(0);
      opacity: 1;
    }
    
  }
`;

const BriefCover = styled.div<{ backgroundImage?: string }>`
  position: relative;
  width: 488px;
  height: 376px;
  border-radius: 4px;
  padding: 8px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 13px 0px rgba(0, 6, 24, 0.15);
  box-sizing: border-box;
  img{
    width: 472px;
    height: 360px;
  }
`;

const BriefIntro = styled.div`
  position: relative;
  z-index: 10;
  word-break: break-all;
  width: 664px;
  box-sizing: border-box;
  div{
    font-weight: normal;
    font-size: 24px;
    color: rgba(26, 26, 26, 1);
    line-height: 40px;
    margin-top: -2px;
    padding-bottom: 24px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    color: rgba(43, 43, 43, 1);
    line-height: 28px;
  }
`;

interface IBriefProps {
  backgroundImage: string;
  cover?: string;
  minWidthPC?: string;
}
const AiTSXID = 'aitsx';

const EnterpriseIntroduction: FC<IBriefProps> = ({ minWidthPC,backgroundImage, cover }) => {

  const myRef = useRef(null);

  useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const videoContent = myRef.current;
      new ScrollMagic.Scene({
        triggerElement: videoContent, //触发元素
        triggerHook: 'onEnter', //触发元素开始离开视口时触发
        offset: 10, //从开始点滚动多少px触发（施法前摇）
        duration: 400, //效果持续的距离（法术持续时间/距离）
      })
        .setClassToggle('.BriefContainerWrap', 'appear')
        .addTo(controller)
        .on('enter', () => {
            controller.destroy();
        });
  }, []);
  return (
  <BriefContainer id={AiTSXID} ref={myRef} maxWidthPc="1200px" minWidthPC={minWidthPC}>
    <div className="BriefContainerWrap">  
      <BriefCover>
        <img src={cover} />
      </BriefCover>
      <BriefIntro>
        <div>百应科技-智能用户运营领域创领者</div>
        <p>百应科技是对话式 &nbsp;AI &nbsp;应用领域创领者，致力于为政府机构及头部企业提供智能用户运营平台与解决方案，助力拥有大量 &nbsp;C &nbsp;端用户的政府机构及头部企业更有效地连接 &nbsp;C &nbsp;端用户，通过数智化连接与沟通形成长期信任、创造价值。</p>
        <p>基于多模态情感 &nbsp;AI（Multimodal & Emotional AI） 、用户标签画像（CDP+）、全场景连接与触达（AICC+）、策略智能与自动化（OSA ）等系列产品矩阵，百应科技为企业客户提供存量时代的精准营销平台，打造核心客户价值；同时为政务客户打造数字化连接平台，实现高效连接群众，高效解决企业增长及政企服务难题。</p>
        <p>自成立以来，百应科技连续六年保持增长，复合增长率（CAGR）超 &nbsp;100%。连续四年被认证为杭州准独角兽企业，拥有中美双AI研究院，百余项AI及大数据领域相关专利和软件著作。</p>
      </BriefIntro>
    </div>  
  </BriefContainer>
 );
};

export default EnterpriseIntroduction;
