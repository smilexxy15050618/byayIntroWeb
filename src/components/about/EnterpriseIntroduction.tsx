import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
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
    flex-grow: 0; 
    flex-shrink: 0; 
    align-items: normal; 
    justify-content: center; 
    flex-flow: row wrap;
    

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
  flex: 1;
  z-index:11;
  &::before {
    position: absolute;
    left: 0;
    top: 57px;
    display: block;
    content: '';
    width: 640px;
    height: 374px;
    background-image: ${props => `url(${props.backgroundImage})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  &::after {
    position: absolute;
    left: 16px;
    top: 73px;
    display: block;
    content: '';
    width: 608px;
    height: 342px;
    background-image: ${props => `url(${props.cover})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

const BriefIntro = styled.div`
  position: relative;
  z-index: 10;
  margin-left: -420px;
  word-break: break-all;
  width: 981px;
  height: 541px;
  padding: 50px 60px 65px 467px;
  border-radius: 8px;
  background: rgba(246, 252, 255, 1);
  overflow-y: hide;
  box-sizing: border-box;
  &::before {
    position: absolute;
    left: 440px;
    top: 50px;
    display: block;
    content: '';
    width: 506px;
    height: 89px;
    background: linear-gradient(0, rgba(255, 255, 255, 0) 0%, rgba(246, 252, 255, 1) 100%);
  }
  &::after {
    position: absolute;
    left: 440px;
    bottom: 65px;
    display: block;
    content: '';
    width: 506px;
    height: 89px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(246, 252, 255, 1) 100%);
  }
  p {
    font-size: 18px;
    font-weight: 400;
    color: rgba(43, 43, 43, 1);
    line-height: 35px;

    &.inscribed {
      position: absolute;
      bottom: -20px;
    }
  }
  .content{
    height: 426px;
    padding: 20px 0;
    overflow-y: auto;
  }
`;

interface IBriefProps {
  backgroundImage: string;
  cover?: string;
  minWidthPC?: string;
}
const AiTSXID = 'aitsx';

const EnterpriseIntroduction: FC<IBriefProps> = ({ minWidthPC,backgroundImage, cover }) => {

  useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const videoContent = document.getElementById(AiTSXID);
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
  <BriefContainer id={AiTSXID} maxWidthPc="1200px" minWidthPC={minWidthPC}>
    <Title>百应科技：智能用户运营平台和解决方案</Title>
    <div className="BriefContainerWrap">  
      <BriefCover cover={cover} backgroundImage={backgroundImage} />
      <BriefIntro>
        <div className='content'>
          <p>百应科技是对话式AI应用领域创领者，致力于为政府机构及头部企业提供智能用户运营平台与解决方案，助力拥有大量C端用户的政府机构及头部企业更有效地连接C端用户，通过数智化连接与沟通形成长期信任、创造价值。</p>
          <p>基于多模态情感AI（Multimodal & Emotional AI） 、用户标签画像（CDP+）、全场景连接与触达（AICC+）、策略智能与自动化（OSA ）等系列产品矩阵，百应科技为企业客户提供存量时代的精准营销平台，打造核心客户价值；同时为政务客户打造数字化连接平台，实现高效连接群众，高效解决企业增长及政企服务难题。</p>
          <p>自成立以来，百应科技连续六年保持增长，复合增长率（CAGR）超100%。连续三年被认证为杭州准独角兽企业，拥有中美双AI研究院，百余项AI及大数据领域相关专利和软件著作。</p>
        </div>
      </BriefIntro>
    </div>  
  </BriefContainer>
 );
};

export default EnterpriseIntroduction;
