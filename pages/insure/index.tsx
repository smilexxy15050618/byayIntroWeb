import { Visible, Hidden } from 'react-grid-system';
import styled from 'styled-components';
import { Layout } from '../../src/components/Layout';
import { NextFunctionComponent } from 'next';
import { IndustryCarousel } from './components/IndustryCarousel-2023';
import { Ai } from './components/Ai';
// import {ApplicationIndustry} from './components/ApplicationIndustry'
// import {CoreValues} from './components/CoreValues'
import { WhySelect } from './components/WhySelect'
import { CustomerCase } from './components/CustomerCase'
import { HOST_ENUM,scrollIntoOffset } from '../../src/lib/utils';
import { Wrapper } from '../../src/components/voice-robot/style';
import ByVoiceFooter from '../../src/components/common/ByVoiceFooter';
import imgurl from '../../img.url.js'

import BannerWhite from '../../src/components/common/BannerWhite';
import { TextArea } from '../../src/components/common/BannerTextElements';
const BANNER_BG = `${imgurl}/about_banner_bg.png`;
const JOIN_US_IMG = `${imgurl}/bxjfbanner.png`;
const BigTitle = styled.div`
  margin-top: 17px;
  font-size:48px;
  line-height:60px;
  color:rgba(26, 26, 26, 1);
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 32px;
font-weight: 500;
letter-spacing: 0px;
line-height: 47px;
margin-top: 47px !important;
width: 100%;
  }
`;
const Desc = styled.div`
  margin-top: 16px;
  font-size: 20px;
  line-height:34px;
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

const FOOTER_BG = `${imgurl}/kqaizl.png`;
interface IGameProps {

}

// const FOOTER_BG = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/bg/bottom.png';
const Game: NextFunctionComponent<IGameProps> = () => {
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
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
                  <Hidden xs sm>
                    <BigTitle>
                      保险行业<br />BPO解决方案
                    </BigTitle>
                    <Desc>“大数据+AI+人”三驱模式，为保险客户提供从赠险<br />到长险的全业务链条服务</Desc>
                    <BlueBtn
                      onClick={() =>
                        window.open('/form?formType=1')
                      }>
                      预约体验
                    </BlueBtn>
                  </Hidden>
                </TextArea>
              </BannerWhite>
              <Ai></Ai>
              {/* <ApplicationIndustry></ApplicationIndustry> */}
              {/* <CoreValues></CoreValues> */}
              <WhySelect></WhySelect>
              <CustomerCase></CustomerCase>
              <ByVoiceFooter
                title="就现在，开启AI电话增长之旅"
                desc="留下联系方式，将有AI行业专家为您提供专属服务"
                btnText="与我联系"
                background={`url(${FOOTER_BG})`}
                onClick={() => {
                  window.open('/form?formType=1')
                }}
              />
            </Visible>


            <Visible xs sm>
            <Down>
            <img
              onClick={() => {
                scrollIntoOffset('#AI', 390);
              }}
              src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/mobile/bg/arror.png"
              className="m-bg-arror"
            />
            </Down>
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
                    <BigTitle>
                    保险行业<br />BPO解决方案
                    </BigTitle>
                    <Desc>“大数据+AI+人”三驱模式，为保险客户提供从赠险<br />到长险的全业务链条服务</Desc>
                    <BlueBtn
                      onClick={() =>
                        window.open('/form?formType=1')
                      }>
                      预约体验
                    </BlueBtn>
              </BannerWhite>
              <Ai></Ai>
              <WhySelect></WhySelect>
              <CustomerCase></CustomerCase>

            </Visible>

          </Wrapper>
        </>
      )}
    </Layout>
  )
}

export default Game;