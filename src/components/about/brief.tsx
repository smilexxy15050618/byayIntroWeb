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

const BriefContainer = styled(Container)<{ backgroundImage?: string }>`
  padding: 150px 0;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media (max-width: 768px) {
    padding: 50px 0;
  }
`;

const BriefCover = styled.div<{ backgroundImage?: string }>`
  padding-top: 122.22%;
  position: relative;
  ${media.tablet`
        margin: 0 auto;
        width: 85%;
    `}
  ${media.phone`
        margin: 0 auto;
        width: 85%;
    `}
    &::before {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    content: '';
    transform: translate(20px, 20px);
    width: 100%;
    height: 100%;
    background: rgba(49, 83, 212, 0.1);
    ${media.tablet`
            transform: none;
        `}
    ${media.phone`
            transform: none;
        `}
  }

  &::after {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background-image: ${props => `url(${props.backgroundImage})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

const BriefIntro = styled.div`
  position: relative;
  height: 100%;
  padding: 0 10px;
  word-break: break-all;
  ${media.tablet`
        padding: 0 30px;
        margin-top: 50px;
    `}
  ${media.phone`
        padding: 0 30px;
        transform: 50px;
    `}
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
`;

interface IBriefProps {
  backgroundImage: string;
  cover?: string;
}

const Brief: React.SFC<IBriefProps> = ({ backgroundImage, cover }) => (
  <BriefContainer backgroundImage={backgroundImage}>
    <Row justify="center">
      <Col lg={8} md={18}>
        <BriefCover backgroundImage={cover} />
      </Col>
      <Col lg={14} md={18} offset={{ lg: 2, md: 0 }}>
        <BriefIntro>
          <h4>百应科技</h4>
          {/* <p>作为全球领先的人工智能创新企业，百应科技以人工智能、大数据为核心技术，致力于提供全场景数智化营销解决方案，依托“AI中台、数据中台、通讯中台” 三大底层数智化能力，打造了AICC智能联络中心、AICRM数智化客户关系管理平台，赋能企业数智化升级。</p>
                        <p>百应旗下全能型智能联络中心（AICC），面向企业级客户提供“全渠道接入、全场景服务，全媒体融合”为一体的智能联络中心整体解决方案，从市场营销，销售、服务三大业务场景出发，快速、敏捷建立企业用户联络体系，致力让企业与用户智能连接，让每一次沟通具备增长价值。</p>
                        <p>百应旗下AICRM数智化客户关系管理平台，为企业打造一站式业务增长引擎。赋能企业营销获客、客户管理、经营决策等环节，打通全流程一体化运营闭环。</p>
                        <p>百应深耕行业，精耕客户，已布局金融、政务、教育、电商、医美、家居等20+行业领域，为全球42000+企业提供产品服务，其中包括阿里巴巴、今日头条等行业巨头，以及中国银行、中国农业银行、平安普惠等众多世界500强企业。</p>
                        <p>2019年5月，百应科技完成1.2亿元A轮融资，由光信资本领投，同年6月获恒生电子旗下产业基金和信雅达旗下产业基金亿元战略投资，累积融资4亿元，估值达30亿。</p> */}
          <p>
            百应科技是国内首批将人工智能和大数据技术商用的企业之一，依托在AI（人工智能）、CC（通信联络与互动）、BI（数据与业务智能）等领域的核心技术能力，为政府及企业客户打造数字化劳动力。
          </p>
          <p>
            百应拥有电话机器人、文本机器人、3D虚拟数字人、分析机器人、智能工作手机等系列AI产品矩阵，致力于通过全栈式AI数字员工解决方案，赋能政企客户与用户进行三维、实时多模态地智能互动，打造未来式更智能的沟通体验，让每一次沟通具备增长价值。
          </p>
          <p>
            百应深耕行业，精耕客户，已布局金融、政务、教育、电商、医美、家居等20+行业领域，为全球42000+企业提供产品服务，其中包括阿里巴巴、今日头条等行业巨头，以及中国银行、中国农业银行、平安普惠等众多世界500强企业。
          </p>
          <p>
            2019年5月，百应科技完成1.2亿元A轮融资，由光信资本领投，同年6月获恒生电子旗下产业基金和信雅达旗下产业基金亿元战略投资，成立四年累积融资近4亿元，估值达30亿。
          </p>
        </BriefIntro>
      </Col>
    </Row>
  </BriefContainer>
);

export default Brief;
