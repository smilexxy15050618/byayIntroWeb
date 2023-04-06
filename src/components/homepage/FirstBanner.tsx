import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import { Col, Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../../constants/style';
import Box from '../Box';

const BANNER_COOP_HUAWEI = 'https://cdn.byai.com/static/intro/img/huawei-coop.jpg';
const BANNER_COOP_HUAWEI_XS = 'https://cdn.byai.com/static/intro/img/huawei-coop-xs.png';

const FIRST_BANNER_BG = 'https://cdn.byai.com/static/official-website/animation/banner_bg.svg';
const FIRST_BANNER_BG_XS = 'https://cdn.byai.com/static/official-website/home/shoujiduan-1.png';
const CONTENT_1 = 'https://cdn.byai.com/static/official-website/animation/content_1.svg';
const FINANCING_BG = 'https://cdn.byai.com/static/intro/img/matrix-1230.png';
const FINANCING_BG_XS = 'https://cdn.byai.com/static/intro/img/matrix-mobile-1230.png';
const CONTENT_3 = 'https://cdn.byai.com/static/intro/img/matrix-second-1230.png';

const PARTNER_MOBILE = 'https://cdn.byai.com/static/intro/img/partner-mobile-1222-42000.png';
const TIMELINE_SECOND = 'https://cdn.byai.com/static/intro/img/timeline-second-0310.png';
const INVESTMENT = 'https://cdn.byai.com/static/intro/img/investment-0310.png';
const PARTNER = 'https://cdn.byai.com/static/intro/img/partner-1230.png';
const TIMELINE = 'https://cdn.byai.com/static/intro/img/timeline-1230.png';
const PARTNER_SECOND = 'https://cdn.byai.com/static/intro/img/partner-second-1222-1.png';

const UNICORN_BANNER_BG = 'https://cdn.byai.com/static/official-website/home/unicorn/PC.jpg';
const UNICORN_BANNER_BG_XS = 'https://cdn.byai.com/static/official-website/home/unicorn/APP-v3.jpg';

const HUNDSUN = 'https://cdn.byai.com/static/intro/img/hundsun-1230.png';
const GX = 'https://cdn.byai.com/static/intro/img/gx-1230.png';
const SUN_YARD = 'https://cdn.byai.com/static/intro/img/sun-yard-1230.png';

const IconWrapper = styled.div`
  display: flex;
  text-align: center;
  height: 40px !important;
  > img {
    height: 40px;
    line-height: 40px;
  }
  > i {
    line-height: 40px;
    height: 40px !important;
    color: white;
    font-size: 30px;
    font-weight: lighter;
    margin: 0 30px;
    font-style: normal;
  }
`;

const GradientTextWrapper = styled.div`
  font-size: 66px;
  height: 66px !important;
  font-weight: bold;
  line-height: 66px;
  margin-bottom: 35px;
  margin-top: 50px;
  background-image: linear-gradient(to top, #5fa5fb, white);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const BarTextWrapper = styled.div`
  padding: 0 56px;
  margin-top: 12px;
  margin-bottom: 58px;
  line-height: 52px;
  height: 52px !important;
  border-radius: 28px;
  background-color: white;
  color: #0a19a6;
  font-size: 32px;
  font-weight: 400;
`;

const DetailInfo = styled.div`
  color: rgba(255, 255, 255, 0.5);
  line-height: 16px;
  height: 16px !important;
  font-weight: 400;
`;

const FirstBannerWrapper = styled.div<{
  backgroundImage: string;
  mobileBackgroundImage: string;
  secondBackgroundImage?: string;
  isFullSecondBackgroundImage?: boolean;
  mobileBackgroundSize?: string;
}>`
  height: calc(100vh - 100px - 86px);
  min-height: 700px;
  ${media.tablet`height: auto;`}
  ${media.phone`
    height: calc(100vh - 86px);
    padding: 0 5vw;
    background-position: center;
    .content {
      width: 100vw !important;
      max-width: 100vw !important;
      h3 {
        text-align: center;
        font-size: 22px !important;
      }

      h2 {
        margin-top: 16px;
        text-align: center;
        font-size: 32px !important;
        line-height: 1.5 !important;
      }
      p.desc {
        display: none;
      }
      .control-wrapper {
        justify-content: center;
      }
    }
    .financing-content{
      display: flex;
      align-items: center;
      flex-direction: column;
      margin-left: auto;
      margin-right: auto;
      margin-top: 6vh !important;
      h3 {
        text-align: center;
        font-size: 22px !important;
        margin-bottom: 0;
      }
      h2 {
        margin-top: 16px;
        text-align: center;
        font-size: 32px !important;
        line-height: 1.5 !important;
        b {
          display: block;
          font-size: 52px;
          line-height: 1;
        }
      }
      p.desc {
        overflow: hidden;
        background: #fff;
        font-size: 14px;
        padding: 0 8px;
      }
    }
  `}
  width: 100%;
  background-image: url(${props => props.backgroundImage});
  @media (max-width: 768px) {
    background-image: url(${props => props.mobileBackgroundImage}) !important;
    margin-top: 0px !important;
    background-size: ${props => (props.mobileBackgroundSize ? props.mobileBackgroundSize : undefined)};
  }
  background-position: ${props => (props.secondBackgroundImage ? `center center` : `center top`)};
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  // margin-top: 86px;
  user-select: none;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    pointer-events: none;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: url(${props => props.secondBackgroundImage});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &.banner-wrapper-partner {
    @media (max-width: 768px) {
      margin-top: 0;
      background-size: cover;
    }
    &::after {
      background-size: ${props => (props.isFullSecondBackgroundImage ? 'cover' : '800px')};
      background-position: ${props => (props.isFullSecondBackgroundImage ? 'right center' : '85% 50%')};
      @media (max-width: 768px) {
        background-image: none;
      }
    }
    .financing-content {
      margin-top: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    h2 {
      color: #fff !important;
      margin-bottom: 30px;
    }
    .partner-item {
      color: #fff;
      font-size: 32px;
      line-height: 45px;
      font-weight: 400;
      margin: 0;
      img {
        margin-bottom: 24px;
      }
    }
  }
  &.investment-partner::after {
    background-size: 600px;
  }
  > div {
    height: 100%;
    > div {
      height: 100%;
    }
  }
  .financing-content {
    margin-top: 15vh;
    h3 {
      font-size: 32px;
      font-weight: 400;
      color: #fff;
      line-height: 45px;
      margin-bottom: 16px;
    }
    h2 {
      user-select: none;
      font-size: 50px;
      font-weight: 500;
      color: rgba(13, 25, 36, 1);
      line-height: 84px;
      border-bottom: none;
      margin-top: 0;
      margin-bottom: 24px;
      b {
        font-size: 72px;
        font-weight: 500;
        color: #ff0000;
        line-height: 70px;
      }
    }
    .desc {
      color: #fff;
      font-weight: 400;
      font-size: 32px;
      line-height: 45px;
    }
  }
  .content {
    margin-top: 10vh;
    ${media.phone`
      margin-top: 6vh;
    `}
    h3 {
      font-size: 32px;
      font-weight: 400;
      color: rgba(13, 25, 36, 1);
      line-height: 45px;
      margin-bottom: 0px;
    }
    h2 {
      font-size: 50px;
      font-weight: 500;
      color: rgba(13, 25, 36, 1);
      line-height: 70px;
      border-bottom: none;
      margin-bottom: 20px;
    }
    .desc {
      font-size: 12px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 21px;
    }
  }
  .img-content {
    margin-top: 18vh;
    height: 80vh;
    flex: 1;
    &.img-financing {
      margin-top: 6vh;
    }
    ${media.phone`
      display: none;
    `}
  }
  .control-wrapper {
    display: flex;
    margin-top: 5vh;
    .iconfont {
      margin-right: 20px;
      display: inline-flex;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      width: 50px;
      height: 50px;
      background: rgba(49, 83, 212, 1);
      box-shadow: 0px 10px 20px 0px rgba(31, 49, 175, 0.2);
      font-size: 14px;
      color: #fff;
      cursor: pointer;
    }
    .btn {
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 160px;
      height: 50px;
      border-radius: 40px;
      border: 2px solid rgba(49, 83, 212, 1);
      font-size: 16px;
      font-weight: 500;
      color: rgba(49, 83, 212, 1);
      line-height: 22px;
      &:hover {
        background-color: rgba(49, 83, 212, 1);
        color: white;
      }
      &.btn-green {
        border-color: #37f5a2;
        color: #37f5a2;
        &:hover {
          background-color: #37f5a2;
          color: white;
        }
      }
    }
  }
`;

const HeighLightH1 = styled.span`
  display: inline-block;
  color: #23eeeb;
  font-size: 64px;
  line-height: 90px;
  margin: 0 16px 8px;
`;

const InvestmentImg = styled.img`
  width: 140px;
  margin-right: 24px;
`;

const HoldWrapper = styled.div`
  text-align: center;
  div:first-child {
    margin-top: 120px;
    font-size: 32px;
    line-height: 45px;
    padding: 10px 40px;
    background-image: url(//cdn.byai.com/static/intro/img/Products/telecommuting/light.png);
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block;
    color: #fff;
  }
  img {
    margin-top: 10px;
    margin-bottom: 0;
    width: 870px;
  }
  h1 {
    font-size: 32px;
    line-height: 45px;
    text-shadow: 0px 3px 1px rgba(0, 16, 66, 0.4);
    color: #fff;
    margin: 0;
    padding: 0;
    margin-top: -30px;
    font-weight: 400;
    border: none;
  }
  h2 {
    padding: 63px 0 20px;
    margin: 0 !important;
    font-size: 20px;
    line-height: 28px;
    color: #fff;
    text-shadow: 0px 2px 4px rgba(0, 16, 66, 0.4);
    font-weight: 400;
    border: none;
  }
  a:last-child {
    height: 50px;
    border-radius: 25px;
    width: 186px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin: 0 auto;
    border: 1px solid #fff;
    font-size: 16px;
    text-decoration: none;
    i {
      margin-left: 8px;
      font-size: 18px;
    }
  }
`;

export const FirstBanner: React.SFC<{
  onBtnClick: () => void;
  onAttendMeeting: () => void;
}> = ({ onBtnClick, onAttendMeeting }) => (
  <Carousel controls={false} interval={10000} pauseOnHover={false}>
    <CarouselItem>
      <FirstBannerWrapper backgroundImage={FIRST_BANNER_BG} mobileBackgroundImage={FIRST_BANNER_BG_XS}>
        <Container>
          <Row>
            <div className="content">
              <h3>融合人工智能+大数据</h3>
              <h2>数智化客户关系管理平台（AICRM）</h2>
              <p className="desc">
                6大云产品矩阵，赋能企业营销获客、销售管理、服务运营、经营决策等关键环节，
                <br />
                构建一体化智能解决方案，让企业增长变得简单、高效。
              </p>
              <div className="control-wrapper">
                {/* <div className="iconfont iconplay" /> */}
                <div className="btn" onClick={onBtnClick}>
                  立即体验
                </div>
              </div>
            </div>
            <div className="img-content">
              <img src={CONTENT_1} alt="" />
            </div>
          </Row>
        </Container>
      </FirstBannerWrapper>
    </CarouselItem>
    <CarouselItem>
      <FirstBannerWrapper
        backgroundImage={BANNER_COOP_HUAWEI}
        mobileBackgroundImage={BANNER_COOP_HUAWEI_XS}
        className="banner-wrapper-partner"></FirstBannerWrapper>
    </CarouselItem>
    <CarouselItem>
      <FirstBannerWrapper
        backgroundImage="https://cdn.byai.com/static/intro/img/Banner/%E5%85%A8%E7%90%8340%E5%BC%BApc%E8%83%8C%E6%99%AF.jpg"
        mobileBackgroundImage="https://cdn.byai.com/static/intro/img/Banner/%E5%85%A8%E7%90%8340%E5%BC%BA%E6%89%8B%E6%9C%BA-1222.png">
        <Visible md lg xl xxl xxxl>
          <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            {/* <img src="https://cdn.byai.com/static/intro/img/Banner/%E5%AE%98%E7%BD%91banner%20PC%E5%A4%A7%E6%A0%87%E9%A2%98.png" /> */}
            <IconWrapper>
              <img src="https://cdn.byai.com/static/intro/img/Banner/%E7%99%BE%E5%BA%94logo-1222.png" />
              <i>X</i>
              <img src="https://cdn.byai.com/static/intro/img/Banner/%E8%85%BE%E8%AE%AFSaaSlogo.png" />
            </IconWrapper>
            <GradientTextWrapper>入选腾讯SaaS加速器二期全球40强</GradientTextWrapper>
            <BarTextWrapper>从全球1500+报名项目脱颖而出</BarTextWrapper>
            <DetailInfo>相关数据来源：腾讯SaaS加速器 Tecent SaaS Accelerator</DetailInfo>
          </Box>
        </Visible>
      </FirstBannerWrapper>
    </CarouselItem>
    <CarouselItem>
      <FirstBannerWrapper
        backgroundImage="https://cdn.byai.com/static/intro/img/Banner/%E5%AE%98%E7%BD%91banner%20PC%E8%83%8C%E6%99%AF.png"
        mobileBackgroundImage="https://cdn.byai.com/static/intro/img/Banner/%E5%AE%98%E7%BD%91banner%20H5.png">
        <Visible md lg xl xxl xxxl>
          <Box display="flex" alignItems="center">
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              width="56vw"
              color="#fff"
              pl="10vw">
              <img src="https://cdn.byai.com/static/intro/img/Banner/%E5%AE%98%E7%BD%91banner%20PC%E5%A4%A7%E6%A0%87%E9%A2%98.png" />
              <Box as="section" textAlign="center" fontSize={18}>
                同期获得认证的还有：阿里云旗下钉钉智能移动办公平台、
                <br />
                腾讯云旗下腾讯会议、腾讯医疗云直播等产品
              </Box>
              <Box as="section" textAlign="center" mt={4} fontSize={20} fontWeight={500}>
                发布单位：中国信息通信研究院
              </Box>
            </Box>
            <Box width="23vw" ml="auto" mr="14.5vw" display="flex" alignItems="center" mt="0.8125rem">
              <img src="https://cdn.byai.com/static/intro/img/Banner/%E5%AE%98%E7%BD%91banner%20PC%E8%AF%81%E4%B9%A6.png" />
            </Box>
          </Box>
        </Visible>
      </FirstBannerWrapper>
    </CarouselItem>
    <CarouselItem>
      <FirstBannerWrapper backgroundImage={UNICORN_BANNER_BG} mobileBackgroundImage={UNICORN_BANNER_BG_XS}>
        <Visible md lg xl xxl xxxl>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width="52vw"
            color="#fff"
            pl="10vw">
            <img src="https://cdn.byai.com/static/official-website/home/unicorn/PC-%E6%A0%87%E9%A2%98.png" />
            <Box as="section" px={4} bgcolor="#1e2790" fontSize={[14, 14, 16, 18]} lineHeight="48px" borderRadius={8}>
              深耕人工智能+大数据领域
            </Box>
            <Box as="section" textAlign="center" mt={5}>
              主办单位：杭州市人民政府、中国投资发展促进会
            </Box>
            <Box as="section" textAlign="center" mt={2}>
              发布单位：杭州市创业投资协会、微链
            </Box>
          </Box>
        </Visible>
      </FirstBannerWrapper>
    </CarouselItem>
    <CarouselItem>
      <FirstBannerWrapper
        backgroundImage={TIMELINE}
        secondBackgroundImage={TIMELINE_SECOND}
        mobileBackgroundImage={INVESTMENT}
        className="banner-wrapper-partner investment-partner">
        <Visible md lg xl xxl xxxl>
          <Container>
            <Row>
              <Col className="financing-content" lg={24}>
                <h3>由恒生电子、信雅达、光信资本战略投资</h3>
                <h2>
                  百应2019再获<HeighLightH1>3亿</HeighLightH1>融资
                  <br />
                  历史累计融资<HeighLightH1>4亿</HeighLightH1>
                </h2>
                <div>
                  <InvestmentImg src={HUNDSUN} />
                  <InvestmentImg src={SUN_YARD} />
                  <InvestmentImg src={GX} />
                </div>
              </Col>
            </Row>
          </Container>
        </Visible>
      </FirstBannerWrapper>
    </CarouselItem>
    <CarouselItem>
      <FirstBannerWrapper
        backgroundImage={PARTNER}
        secondBackgroundImage={PARTNER_SECOND}
        mobileBackgroundImage={PARTNER_MOBILE}
        className="banner-wrapper-partner">
        <Visible md lg xl xxl xxxl>
          <Container>
            <Row>
              <Col className="financing-content" lg={14}>
                <h2>百应是</h2>
                <p className="partner-item">
                  <img src="https://cdn.byai.com/static/intro/img/42000-v3.svg" />
                </p>
                <p className="partner-item">企业/机构的共同选择</p>
              </Col>
            </Row>
          </Container>
        </Visible>
      </FirstBannerWrapper>
    </CarouselItem>
  </Carousel>
);
