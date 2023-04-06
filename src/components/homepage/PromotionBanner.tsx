import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import { Col, Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../../constants/style';

const FIRST_BANNER_BG = 'https://cdn.byai.com/static/official-website/product/aicc/banner.svg';
const FIRST_BANNER_BG_XS = 'https://cdn.byai.com/static/official-website/promotion/banner.png';

const BY_COLOURFUL_LOGO = 'https://cdn.byai.com/static/intro/img/by-colourful-logo.png';
const HENGSHENG_LOGO = 'https://cdn.byai.com/static/intro/img/hengsheng-logo.png';
const MAYI_LOGO = 'https://cdn.byai.com/static/intro/img/mayi-logo.png';
const XINYADA_LOGO = 'https://cdn.byai.com/static/intro/img/xinyada-logo.png';

const PARTNER_MOBILE =
  'https://cdn.byai.com/node_front/1575268984156/%E5%90%88%E4%BD%9C%E4%BC%99%E4%BC%B4%E7%A7%BB%E5%8A%A8%E7%AB%AF%202.png';
const PARTNER = 'https://cdn.byai.com/static/intro/img/partner-0621.png';
const PARTNER0627 = 'https://cdn.byai.com/static/intro/img/partner-0627.png';
const PARTNER_SECOND = 'https://cdn.byai.com/node_front/1575268550600/tu%202.png';

const BannerWrapper = styled.div`
  .carousel-indicators {
    margin-bottom: 30px;

    li {
      background-color: #fff;
      width: 15px;
      height: 4px;
      opacity: 0.4;
      border-radius: 2px;
    }

    .active {
      opacity: 1;
    }
  }
`;

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
      width: 100%;
      max-width: 100%;
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
      p.first-desc {
        color: #0D1924;
        font-size: 18px;
      }
      p.first-desc-tel {
        font-size: 14px;
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
    margin-top: 50px !important;
  }
  background-position: ${props => (props.secondBackgroundImage ? `center center` : `center top`)};
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
      font-size: 18px;
      line-height: 40px;
      font-weight: 300;
      letter-spacing: 2px;
      margin: 0;
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
      margin-top: -20px;
      ${media.phone`
        margin-top: 0px;
        margin-bottom: 0px;
      `}
      font-size: 32px;
      font-weight: 400;
      color: rgba(13, 25, 36, 1);
      line-height: 45px;
      margin-bottom: 25px;
    }
    h2 {
      user-select: none;
      font-size: 50px;
      font-weight: 500;
      color: rgba(13, 25, 36, 1);
      line-height: 60px;
      border-bottom: none;
      margin-top: 0;
      b {
        font-size: 72px;
        font-weight: 500;
        color: #ff0000;
        line-height: 70px;
      }
    }
    .desc {
      margin-top: 20px;
      display: inline-block;
      border: 1px solid rgba(202, 202, 202, 1);
      padding: 0 24px;
      height: 50px;
      line-height: 50px;
      letter-spacing: 5px;
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
const FirstDesc = styled.p`
  font-size: 1.8rem;
`;
export const PromotionBanner: React.SFC<{ onBtnClick: () => void }> = ({ onBtnClick }) => (
  <BannerWrapper>
    <Carousel controls={false} interval={3000} pauseOnHover={false}>
      <CarouselItem>
        <FirstBannerWrapper backgroundImage={FIRST_BANNER_BG} mobileBackgroundImage={FIRST_BANNER_BG_XS}>
          <Container>
            <Row>
              <div className="content">
                <h2>百应电话机器人</h2>
                <Visible md lg xl xxl xxxl>
                  <FirstDesc>赋能电话呼叫业务，实现高效率低成本转化。</FirstDesc>
                </Visible>
                <Visible xs sm>
                  <p className="first-desc-tel">
                    赋能电话呼叫业务，
                    <br />
                    实现高效率低成本转化。
                  </p>
                </Visible>
                <div className="control-wrapper">
                  <div className="tel" onClick={onBtnClick}>
                    请输入你的手机号
                  </div>
                  <div className="btn" onClick={onBtnClick}>
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
          backgroundImage={PARTNER0627}
          mobileBackgroundImage={
            'https://cdn.byai.com/static/official-website/promotion/%E6%96%B0%E8%9E%8D%E8%B5%84banner%E6%89%8B%E6%9C%BA%E7%AB%AF.png'
          }
          className="banner-wrapper-partner">
          <Visible md lg xl xxl xxxl>
            <Container>
              <Row>
                <Col className="hengsheng-content" lg={24}>
                  <Row align="end" className="line1">
                    <img src={BY_COLOURFUL_LOGO} alt="logo" />
                    <h1>于2019.6获得</h1>
                  </Row>
                  <Row className="line2">
                    <Col>
                      <Row justify="center">
                        <h1>恒生电子</h1>
                      </Row>
                      <Row justify="center">(A股代码：600570) 蚂蚁金服全资子公司</Row>
                    </Col>
                    <Col>
                      <Row justify="center">
                        <h1>信雅达</h1>
                      </Row>
                      <Row justify="center">(A股代码：600571)</Row>
                    </Col>
                  </Row>
                  <Row className="banner" align="center" justify="center">
                    <span className="remarkable">亿级</span>
                    战略投资
                  </Row>
                  <Row className="logo-board" justify="between">
                    <img src={HENGSHENG_LOGO} alt="" />
                    <img src={MAYI_LOGO} alt="" />
                    <img src={XINYADA_LOGO} alt="" />
                  </Row>
                  <Row className="time-line">
                    <div className="dot1">
                      <div className="point" />
                      <div className="title">2017.1</div>
                      <div className="desc">数千万 天使轮融资</div>
                    </div>
                    <div className="dot2">
                      <div className="point" />
                      <div className="title">2018.5</div>
                      <div className="desc">6000万 pre-A轮融资</div>
                    </div>
                    <div className="dot3">
                      <div className="point" />
                      <div className="title">2019.5</div>
                      <div className="desc">1.2亿 A轮融资</div>
                    </div>
                    <div className="dot4">
                      <div className="title">2019.6</div>
                      <div className="desc">亿级战略融资</div>
                      <div className="point" />
                    </div>
                  </Row>
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
                  <h2>百应是...</h2>
                  <p className="partner-item">- 百应是，今日头条独家AI语音供应商</p>
                  <p className="partner-item">- 百应是，腾讯新闻AI语音供应商</p>
                  <p className="partner-item">- 百应是，阿里巴巴商家服务市场AI语音独家供应商</p>
                  <p className="partner-item">- 百应是，阿里云ITP生态技术先锋</p>
                  <p className="partner-item">- 百应是，阿里巴巴人工智能研究院（达摩院）合作伙伴</p>
                  <p className="partner-item">- 百应是，30000+企业/机构的共同选择</p>
                </Col>
              </Row>
            </Container>
          </Visible>
        </FirstBannerWrapper>
      </CarouselItem>
    </Carousel>
  </BannerWrapper>
);
