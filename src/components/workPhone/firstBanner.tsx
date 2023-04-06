import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import { Col, Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../../constants/style';

const FIRST_BANNER_BG =
  'https://cdn.byai.com/node_front/1572493660138/%E6%8A%95%E6%94%BE%E9%A1%B5-%E6%99%BA%E8%83%BD%E5%B7%A5%E4%BD%9C%E6%89%8B%E6%9C%BA.svg';
const FIRST_BANNER_BG_XS = 'https://cdn.byai.com/static/official-website/product/workPhone/p-mobile-workPhone.jpeg';

const FINANCING_BG = 'https://cdn.byai.com/static/intro/img/matrix-1230.png';
const FINANCING_BG_XS = 'https://cdn.byai.com/static/intro/img/matrix-mobile-1230.png';
const CONTENT_3 = 'https://cdn.byai.com/static/intro/img/matrix-second-1230.png';

const PARTNER_MOBILE = 'https://cdn.byai.com/static/intro/img/partner-mobile-1222-42000.png';
const TIMELINE_SECOND = 'https://cdn.byai.com/static/intro/img/timeline-second-0310.png';
const INVESTMENT = 'https://cdn.byai.com/static/intro/img/investment-0310.png';
const PARTNER = 'https://cdn.byai.com/static/intro/img/partner-1230.png';
const TIMELINE = 'https://cdn.byai.com/static/intro/img/timeline-1230.png';
const PARTNER_SECOND = 'https://cdn.byai.com/static/intro/img/partner-second-1222-1.png';

const HUNDSUN = 'https://cdn.byai.com/static/intro/img/hundsun-1230.png';
const GX = 'https://cdn.byai.com/static/intro/img/gx-1230.png';
const SUN_YARD = 'https://cdn.byai.com/static/intro/img/sun-yard-1230.png';

const FirstBannerWrapper = styled.div<{
  backgroundImage: string;
  mobileBackgroundImage: string;
  secondBackgroundImage?: string;
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
  }
  background-position: center -40px;
  background-repeat: no-repeat;
  background-size: cover;
  box-sizing: border-box;
  margin-top: 86px;
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
      height: 100vh;
    }
    &::after {
      background-size: 600px;
      background-position: 85% 50%;
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
    .hengsheng-content {
      color: #fff;
      margin-top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .line1 {
        margin-top: -10vh;
        margin-bottom: 6vh;
        img {
          width: 88px;
          height: 36px;
        }
        img,
        h1 {
          margin: 0;
        }
        h1 {
          letter-spacing: 1px;
          font-size: 28px;
          font-weight: 400;
          margin-left: 10px;
          line-height: 1;
          padding-bottom: 0;
        }
      }
      .line2 {
        width: 800px;
        h1 {
          font-weight: 400;
          font-size: 48px;
          margin: 0;
          line-height: 1;
        }
      }
      .banner {
        line-height: 1.1;
        margin: 3vh 0 4vh;
        font-weight: 400;
        font-size: 48px;
        width: 700px;
        height: 10vh;
        background: linear-gradient(
          to right,
          rgba(104, 170, 255, 0),
          rgba(104, 170, 255, 0.74),
          rgba(104, 170, 255, 0)
        );
        .remarkable {
          color: #24eaec;
        }
      }
      .logo-board {
        width: 340px;
        img {
          height: 40px;
        }
      }
      .time-line {
        margin-top: 6vh;
        background-position: center;
        background-repeat: no-repeat;
        width: 95%;
        height: 30px;
        background-image: url('https://cdn.byai.com/static/intro/img/timeLine.png');
        background-size: contain;
        position: relative;
        > div {
          position: absolute;
          .point {
            border-style: solid;
            border-radius: 100%;
            background-color: #184ccb;
            border-color: #64decd;
          }
          .title {
            font-size: 18px;
            opacity: 0.5;
          }
          .desc {
            min-width: 100px;
            color: #a4eeef;
          }
        }
        .dot1 {
          top: 11px;
          left: 10%;
          .point {
            margin-bottom: 10px;
            border-width: 2px;
            width: 10px;
            height: 10px;
          }
        }
        .dot2 {
          top: 9px;
          left: 42%;
          .point {
            margin-bottom: 8px;
            border-width: 3px;
            width: 14px;
            height: 14px;
          }
        }
        .dot3 {
          top: 5px;
          left: 74%;
          .point {
            margin-bottom: 6px;
            border-width: 4px;
            width: 20px;
            height: 20px;
          }
        }
        .dot4 {
          top: -60px;
          left: 83%;
          .point {
            margin-top: 15px;
            border-width: 4px;
            width: 20px;
            height: 20px;
          }
          .title {
            opacity: 1;
          }
        }
      }
    }
    @media (max-width: 768px) {
      .hengsheng-content {
        display: none;
      }
    }
    h2 {
      color: #fff !important;
      margin-bottom: 30px;
    }
    .partner-item {
      color: #fff;
      font-size: 24px;
      line-height: 33px;
      font-weight: 400;
      margin: 0;
      img {
        margin-bottom: 24px;
      }
    }
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
    @media (max-width: 768px) {
      display: block;
      .btn,
      .tel {
        width: 100% !important;
        margin-top: 15px;
      }
    }
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
    .btn,
    .tel {
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 160px;
      height: 50px;
      border-radius: 40px;
      font-size: 16px;
      color: #fff;
      line-height: 22px;
      background-color: #3153d4;
    }
    .btn {
      &:hover {
        background-color: #3d5afe;
      }
    }
    .tel {
      width: 264px;
      color: #999;
      border: 1px solid rgba(49, 83, 212, 1);
      background: #fff;
      margin-right: 16px;
      text-align: left;
      display: block;
      padding: 0 30px;
      line-height: 48px;
      ${media.phone`
        text-align: center;
      `}
    }
  }
`;

const SubTitle = styled.p`
  font-size: 26px;
  color: #0d1924;
  text-align: center;
  margin-bottom: 20px;
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

export const FirstBanner: React.SFC<{ onBtnClick: () => void }> = ({ onBtnClick }) => (
  <Carousel controls={false} interval={3000} pauseOnHover={false}>
    <CarouselItem>
      <FirstBannerWrapper backgroundImage={FIRST_BANNER_BG} mobileBackgroundImage={FIRST_BANNER_BG_XS}>
        <Container>
          <Row>
            <div className="content">
              <Visible sm xs>
                <SubTitle>智能呼叫中心</SubTitle>
              </Visible>
              <Visible md lg xl xxl xxxl>
                <h2>智能工作手机</h2>
              </Visible>
              <Visible sm xs>
                <h2 style={{ marginBottom: 0 }}>AI赋能的智能手机</h2>
                <h2 style={{ marginTop: 0 }}>工作手机</h2>
              </Visible>
              <Visible md lg xl xxl xxxl>
                <p className="first-desc">
                  专为销售人员定制的手机，帮助企业管控销售过程，提升团队执行力，提高业绩；自
                  <br />
                  动化收集客户跟进数据，加速企业数据沉淀；保证企业数据安全，规范员工行为
                </p>
              </Visible>
              <div className="control-wrapper">
                <div className="tel" onClick={() => onBtnClick()}>
                  请输入你的手机号
                </div>
                <div className="btn" onClick={() => onBtnClick()}>
                  免费体验
                </div>
              </div>
            </div>
          </Row>
        </Container>
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
    <CarouselItem>
      <FirstBannerWrapper
        backgroundImage={FINANCING_BG}
        secondBackgroundImage={CONTENT_3}
        mobileBackgroundImage={FINANCING_BG_XS}
        className="banner-wrapper-partner">
        <Visible md lg xl xxl xxxl>
          <Container>
            <Row>
              <Col className="financing-content" lg={14}>
                <h2>
                  百应为你
                  <br />
                  构建全生态产品矩阵
                </h2>
                <p className="desc">用AI连接您的每一位客户</p>
              </Col>
            </Row>
          </Container>
        </Visible>
      </FirstBannerWrapper>
    </CarouselItem>
  </Carousel>
);
