import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '../../src/components/Layout';
import { Col, ColProps, Container, Hidden, Row, Visible, ScreenClassRender } from 'react-grid-system';
import { TextArea } from '../../src/components/common/BannerTextElements';
import BannerWhite from '../../src/components/common/BannerWhite';
import AI from '../../src/components/consumer-finance/ai';
import SceneSolution from '../../src/components/consumer-finance/SceneSolution';
import AiSolution from '../../src/components/consumer-finance/AiSolution';
import CustomerCase from '../../src/components/consumer-finance/CustomerCase';
import ByVoiceFooterNew from '../../src/components/common/ByVoiceFooterNew';

import imgurl from '../../img.url.js'
import { HOST_ENUM } from '../../src/lib/utils';
const BANNER_BG = `${imgurl}/about_banner_bg.png`;
const JOIN_US_IMG = `${imgurl}/consumer-finance-banner.png`;
const FOOTER_BG = `${imgurl}/by-voice-bg.png`;


const Wrapper = styled.div`
  background: #ffffff;
  .blue-hight {
    color: rgb(43, 88, 249);
  }
  @media (min-with: 769px) {
    #big-title {
      margin-top: -50px !important;
    }
  }
`;

const BigTitle = styled.div`
  margin-top: 17px;
  font-size:48px;
  line-height:60px;
  color:rgba(26, 26, 26, 1);
  font-weight: 600;
`;

const Desc = styled.div`
  margin-top: 16px;
  font-size: 20px;
  line-height:34px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
`;

const BlueBtn = styled.div`
  margin-top: 40px;
  width: 132px;
  height: 48px;
  border-radius: 5.33px;
  background: rgba(43, 88, 249, 1);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 48px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  cursor: pointer;
`;



const About: React.SFC<{ hostType?: HOST_ENUM }> = ({ hostType = HOST_ENUM.HOST }) => {
  
  return (
  <Layout hostType={hostType} headPlaceholder={[false, '#F9FAFF']} headFontStyle={['dark', 'dark']}>
    {(visible, setVisible) => (
      <>
        <Wrapper>
          <BannerWhite
            background={[`url(${BANNER_BG}) right top ,rgba(246, 252, 255, 1)`, 'rgba(246, 252, 255, 1)']}
            pcImgs={[
              {
                src: JOIN_US_IMG,
                style: { width: 644, height:496, top: 0, right: 0 },
                className: ['animate__fadeInRight', 'animate__ahead_300ms'],
              },
            ]}
            mobileImg={JOIN_US_IMG}>
            <TextArea spaces={['', '']}>
              <Hidden xs sm>
                <BigTitle>
                  消费金融<br/>智能用户运营解决方案
                </BigTitle>
                <Desc>针对消费金融业务全链路提供智能化运营方案，用数据<br/>驱动精细化运营策略升级，用AI助力消费金融机构业务<br/>增长</Desc>
                <BlueBtn
                  onClick={() =>
                    window.open('/form?formType=1')
                  }>
                  预约体验
                </BlueBtn>
              </Hidden>
            </TextArea>
          </BannerWhite>
          <AI></AI>
          <SceneSolution></SceneSolution>
          <AiSolution></AiSolution>
          <CustomerCase></CustomerCase>
          <ByVoiceFooterNew
            title="用AI助力构建To C长期信关系，一起创造未来"
            desc="留下联系方式，将有AI行业专家为您提供专属服务"
            btnText="预约演练"
            background={`url(${FOOTER_BG})`}
            onClick={() => {
              window.open('/form?formType=1')
            }}
          />
        </Wrapper>
      </>  
    )}
  </Layout>
  );
};

export default About;