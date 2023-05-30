import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '../../src/components/Layout';
import { Col, ColProps, Container, Hidden, Row, Visible, ScreenClassRender } from 'react-grid-system';
import { TextArea } from '../../src/components/common/BannerTextElements';
import BannerWhite from '../../src/components/common/BannerWhite';
import AI from './components/ai';
import SceneSolution from './components/SceneSolution';
import AiSolution from './components/AiSolution';
import CustomerCase from './components/CustomerCase';
import ByVoiceFooter from '../../src/components/common/ByVoiceFooter';
import ByProgressSwiper from '../../src/components/common/ByProgressSwiper';

import imgurl from '../../img.url.js';
import { HOST_ENUM, scrollIntoOffset } from '../../src/lib/utils';
const BANNER_BG = `${imgurl}/about_banner_bg.png`;
const JOIN_US_IMG = `${imgurl}/cartopbanner.png`;
const FOOTER_BG = `https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/kqaizl.png`;

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
  font-size: 48px;
  line-height: 60px;
  color: rgba(26, 26, 26, 1);
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 32px;
font-weight: 500;
letter-spacing: 0px;
line-height: 47px;
margin-top: 0px !important;
width: 100%;
  }
`;

const Desc = styled.div`
  margin-top: 16px;
  font-size: 20px;
  line-height: 34px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  @media (max-width: 768px) {
    font-size: 16px;
font-weight: 400;
letter-spacing: 0px;
line-height: 26px;
  }
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
    width: 112px;
height: 40px;
opacity: 1;
border-radius: 5.33px;
background: rgba(43, 88, 249, 1);
font-size: 16px;
font-weight: 500;
line-height: 40px;
margin-top: 20px;
  }
`;
const Down = styled.div`
.m-bg-arror {
  position: absolute;
  top: 656px;
  left: 50%;
  transform: translate(-50%, 0);
  animation: jump 2s infinite;
  z-index: 10;
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
`

const About: React.SFC<{ hostType?: HOST_ENUM }> = ({ hostType = HOST_ENUM.HOST }) => {
  return (
    <Layout hostType={hostType} headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
      {(visible, setVisible) => (
        <>
          <Wrapper>
            <Visible md lg xl xxl xxxl>
              <BannerWhite
                 
                background={[`url(${BANNER_BG}) right top ,rgba(246, 252, 255, 1)`, 'rgba(246, 252, 255, 1)']}
                pcImgs={[
                  {
                    src: JOIN_US_IMG,
                    style: { width: 644, height: 496, top: 0, right: 0 },
                    className: ['animate__fadeInRight', 'animate__ahead_300ms'],
                  },
                ]}
                mobileImg={JOIN_US_IMG}>
                <TextArea spaces={['', '']}>
                  <Hidden xs sm >
                    <div style={{width:'480px'}}>

                    <BigTitle>
                      汽车行业
                      <br />
                      数智化解决方案
                    </BigTitle>
                    <Desc>
                      通过AI智能外呼机器人帮助车企建立用户营销触达策略和完善的用户画像体系，实现企业升级和营销转型，驱动业务持续增长
                    </Desc>
                    <BlueBtn onClick={() => window.open('/form?formType=1')}>立即体验</BlueBtn>
                    </div>

                  </Hidden>

                </TextArea>
              </BannerWhite>
              <AI></AI>
              <SceneSolution></SceneSolution>
              <AiSolution></AiSolution>
              <CustomerCase></CustomerCase>
              <ByVoiceFooter
                title="立即体验AI时代的新一代用户运营平台"
                desc="用“AI”构建你和用户的“亲密关系”；共建存量时代的增长引擎。"
                btnText="与我联系"
                background={`url(${FOOTER_BG})`}
                onClick={() => window.open('/form?formType=1')}
              />
            </Visible >


            <Visible xs sm>
              {/* <Down>
            <img
              onClick={() => {
                scrollIntoOffset('#STRATEGY_WRAP', 180);
              }}
              src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/mobile/bg/arror.png"
              className="m-bg-arror"
            />
            </Down> */}
              <BannerWhite
                background={[`url(${BANNER_BG}) right top ,rgba(246, 252, 255, 1)`, 'rgba(246, 252, 255, 1)']}
                pcImgs={[
                  {
                    src: JOIN_US_IMG,
                    style: { width: 644, height: 496, top: 0, right: 0 },
                    className: ['animate__fadeInRight', 'animate__ahead_300ms'],
                  },
                ]}
                mobileImg={JOIN_US_IMG}>
                <div style={{padding: '0 8px'}}>
                  <BigTitle>
                    汽车行业
                    <br />
                    数智化解决方案
                  </BigTitle>
                  <Desc>
                    通过AI智能外呼机器人帮助车企建立用户营销触达策略和完善的用户画像体系，实现企业升级和营销转型，驱动业务持续增长
                  </Desc>
                  <BlueBtn onClick={() => window.open('/form?formType=1')}>立即体验</BlueBtn>
                </div>
              </BannerWhite>

              <AI></AI>
              <SceneSolution></SceneSolution>
              <AiSolution></AiSolution>
              <CustomerCase></CustomerCase>
              {/* <ByVoiceFooter
              title="立即体验AI时代的新一代用户运营平台"
              desc="用“AI”构建你和用户的“亲密关系”；共建存量时代的增长引擎。"
              btnText="与我联系"
              background={`url(${FOOTER_BG})`}
              onClick={() => window.open('/form?formType=1')}
            /> */}
            </Visible>

          </Wrapper>
        </>
      )}
    </Layout>
  );
};

export default About;
