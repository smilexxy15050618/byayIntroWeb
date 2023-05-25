import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '../../src/components/Layout';
import {  Hidden, Visible } from 'react-grid-system';
import { TextArea } from '../../src/components/common/BannerTextElements';
import BannerWhite from '../../src/components/common/BannerWhiteNew';
import AI from '../../src/components/consumer-finance/ai';
import SceneSolution from '../../src/components/consumer-finance/SceneSolution';
import AiSolution from '../../src/components/consumer-finance/AiSolution';
import CustomerCase from '../../src/components/consumer-finance/CustomerCase';
import ByVoiceFooter from '../../src/components/common/ByVoiceFooter';
import imgurl from '../../img.url.js'
import { HOST_ENUM, scrollIntoOffset } from '../../src/lib/utils';
const BANNER_BG = `${imgurl}/about_banner_bg.png`;
const JOIN_US_IMG = `${imgurl}/consumer-finance-banner.png`;
const JOIN_US_IMG_WAP = `${imgurl}/consumer-finance-banner-wap.png`;
const FOOTER_BG = `${imgurl}/by-voice-bg.png`;


const Wrapper = styled.div`
  background: #ffffff;
  .m-bg-arror {
    display: none;
    position: absolute;
    top: 656px;
    left: 50%;
    transform: translate(-50%, 0);
    animation: jump 2s infinite;
  }
  @keyframes jump {
    0% {
      transform: translate(-50%, 0px);
    }
    50% {
      transform: translate(-50%, 10px);
    }
    100% {
      transform: translate(-50%, 0px);
    }
  }
`;

const BigTitle = styled.div`
  margin-top: 17px;
  font-size:48px;
  line-height:60px;
  color:rgba(26, 26, 26, 1);
  font-weight: 600;
  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    font-size: 32px;
    line-height: 47px;
    padding: 0 28px;
    margin-bottom: 8px !important;
  }
`;

const Desc = styled.div`
  margin-top: 16px;
  font-size: 20px;
  line-height:34px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  @media (max-width: 768px) {
    padding-top: 8px;
    text-align: left;
    font-size: 16px;
    line-height: 26px;
    margin: 0 24px 26px 28px !important;
  }
`;

const BlueBtnWrap = styled.div`
  width: 100%;
  padding: 0 28px;
  align-items: flex-start;
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
  @media (max-width: 768px) {
    margin-top: 0;
    width: 112px;
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    line-height: 40px;
    color: rgba(255, 255, 255, 1);
    text-align: center;
  }
`;



const About: React.SFC<{ hostType?: HOST_ENUM }> = ({ hostType = HOST_ENUM.HOST }) => {
  
  return (
  <Layout hostType={hostType} headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
    {(visible, setVisible) => (
      <>
        <Wrapper>
          <BannerWhite
            height={['560px', '667px']}
            LinearHeight={['500px', '100%']}
            background={[`url(${BANNER_BG}) right top ,rgba(246, 252, 255, 1)`, 'rgba(246, 252, 255, 1)']}
            pcImgs={[
              {
                src: JOIN_US_IMG,
                style: { width: 644, height:496, top: 0, right: 0 },
                className: ['animate__fadeInRight', 'animate__ahead_300ms'],
              },
            ]}
            mobileImg={JOIN_US_IMG_WAP}
            mobileStyle={{height:'288px',marginTop: '21px'}}>
            <TextArea spaces={['', '']}>
              <Hidden xs sm>
                <BigTitle>
                  消费金融行业<br/>智能用户运营解决方案
                </BigTitle>
                <Desc>针对消费金融业务全链路提供智能化运营方案，用数据<br/>驱动精细化运营策略升级，用AI助力消费金融机构业务<br/>增长</Desc>
                <BlueBtn
                  onClick={() =>
                    window.open('/form?formType=1')
                  }>
                  立即体验
                </BlueBtn>
              </Hidden>
              <Visible xs sm>
                <BigTitle>
                消费金融行业<br/>智能用户运营解决方案
                </BigTitle>
                <Desc>针对消费金融业务全链路提供智能化运营方案，用数据驱动精细化运营策略升级，用AI助力消费金融机构业务增长</Desc>
                <BlueBtnWrap>
                  <BlueBtn
                    onClick={() =>
                      window.open('/form?formType=1')
                    }>
                    立即体验
                  </BlueBtn>
                </BlueBtnWrap>
              </Visible>
            </TextArea>
          </BannerWhite>
          <Visible xs sm>
              <img
                onClick={() => {
                  scrollIntoOffset('#aitsx', 50);
                }}
                src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/mobile/bg/arror.png"
                className="m-bg-arror"
              />
            </Visible> 
          <AI></AI>
          <SceneSolution></SceneSolution>
          <AiSolution></AiSolution>
          <CustomerCase></CustomerCase>
          <ByVoiceFooter
            title="立即体验AI时代的新一代用户运营平台"
            desc="用“AI”构建你和用户的“亲密关系”；共建存量时代的增长引擎。"
            btnText="与我联系"
            background={`url(${FOOTER_BG})`}
            onClick={() =>
              window.open('/form?formType=1')
            }
          />
        </Wrapper>
      </>  
    )}
  </Layout>
  );
};

export default About;