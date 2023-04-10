import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../../constants/style';

const Wrap = styled.div<{ backgroundImage?: string }>`
  padding: 150px 125px;
  display: flex;
  justify-content: space-between;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Title = styled.h2<{ backgroundImage?: string }>`
  font-size: 48px;
  color:rgba(43, 43, 43, 1);
  text-align: center;
`;

const BriefContainer = styled(Container)<{ backgroundImage?: string }>`
  
`;

const BriefContainerWrap = styled.div`
  display: flex; 
  flex-grow: 0; 
  flex-shrink: 0; 
  align-items: normal; 
  justify-content: center; 
  flex-flow: row wrap;
`; 

const BriefCover = styled.div<{ backgroundImage?: string }>`
  position: relative;
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
  padding-left: 467px;
  border-radius: 8px;
  background: rgba(246, 252, 255, 1);
    h4 {
    margin-top: 10px;
    margin-bottom: 30px;
    font-size: 36px;
    font-weight: 500;
    color: #0d1924;
  }
  p {
    margin-top: 25px;
    font-size: 14px;
    font-weight: 400;
    color: #0d1924;
    line-height: 24px;
    &.inscribed {
      position: absolute;
      bottom: -20px;
    }
  }
  &::before {
    position: absolute;
    left: 440px;
    top: 0;
    width: 506px;
    height: 89px;
    opacity: 1;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(246, 252, 255, 1) 100%);
  }
  &::after {
    position: absolute;
    left: 440px;
    bottom: 0;
    width: 506px;
    height: 89px;
    opacity: 1;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(246, 252, 255, 1) 100%);
  }
`;

interface IBriefProps {
  backgroundImage: string;
  cover?: string;
}

const EnterpriseIntroduction: React.SFC<IBriefProps> = ({ backgroundImage, cover }) => (
  <BriefContainer>
    <Title>百应科技：智能用户运营平台和解决方案</Title>
    <BriefContainerWrap>  
      <BriefCover cover={cover} backgroundImage={backgroundImage} />
      <BriefIntro>
        <p>百应科技是对话式AI应用领域创领者，致力于为政府机构及头部企业提供智能用户运营平台与解决方案，助力拥有大量C端用户的政府机构及头部企业更有效地连接C端用户，通过数智化连接与沟通形成长期信任、创造价值。</p>
        <p>基于多模态情感AI（Multimodal & Emotional AI） 、用户标签画像（CDP+）、全场景连接与触达（AICC+）、策略智能与自动化（OSA ）等系列产品矩阵，百应科技为企业客户提供存量时代的精准营销平台，打造核心客户价值；同时为政务客户打造数字化连接平台，实现高效连接群众，高效解决企业增长及政企服务难题。</p>
        <p>自成立以来，百应科技连续六年保持增长，复合增长率（CAGR）超100%。连续三年被认证为杭州准独角兽企业，拥有中美双AI研究院，百余项AI及大数据领域相关专利和软件著作。</p>
      </BriefIntro>
    </BriefContainerWrap>  
  </BriefContainer>
);

export default EnterpriseIntroduction;
