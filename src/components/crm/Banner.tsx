import * as React from 'react';
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../../constants/style';

const circleSrc =
  '//cdn.byai.com/static/official-website/crm/%E6%98%93%E5%AE%A2%E5%A4%B4%E5%9B%BE%E8%BE%85%E5%8A%A9%E5%9B%BE%E5%BD%A2.png';

const Wrap = styled.div<{
  backgroundImage?: string;
  mobileBackgroundImage?: string;
}>`
  > div {
    max-width: 1200px !important;
  }
  ${media.desktop`
    margin-top: 50px;
  `}
  position: relative;
  width: 100%;
  padding-top: 20px;
  @media (min-width: 768px) {
    padding-bottom: 170px;
    &::before {
      content: '';
      position: absolute;
      width: 228px;
      height: 228px;
      left: -63px;
      bottom: 22px;
      background: url(${circleSrc}) no-repeat center center/ contain;
    }
  }
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #f9faff;
  height: 420px;
  h1 {
    margin-bottom: 20px;
    padding-bottom: 0;
    color: rgba(13, 25, 36, 1);
    font-size: 40px;
    font-weight: 500;
    border-bottom: none;
    line-height: 56px;
    margin-top: 69px;
    @media (max-width: 768px) {
      margin-top: 30px;
      font-size: 32px;
      font-weight: 500;
      color: rgba(13, 25, 36, 1);
      line-height: 40px;
    }
    > span {
      @media (max-width: 768px) {
        display: inline-block;
        font-size: 16px !important;
        color: rgba(13, 25, 36, 1);
        line-height: 23px;
        margin-bottom: 2vh;
      }
    }
    ${media.desktop`padding: 0 30px; text-align: center;`};
  }
  h5 {
    margin-top: 30px;
    height: 33px;
    font-size: 24px;
    font-weight: 300;
    text-align: right;
    color: rgba(13, 25, 36, 1);
    line-height: 33px;
  }
  h6 {
    margin-bottom: 0;
    margin-top: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    ${media.desktop`text-align: center;`};
  }
  .btn {
    cursor: pointer;
    margin-top: 48px;
    display: inline-flex;
    width: 128px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    background: #2b58f9;
    text-align: center;
    font-size: 16px;
    color: #fff;
    line-height: 22px;
    @media (min-width: 768px) {
      &:hover {
        background: #1742de;
      }
    }
  }

  @media (max-width: 768px) {
    height: 551px;
    // height: 80vh;
    background-origin: content-box;
    background-image: url(${props => props.mobileBackgroundImage}) !important;
    background-position: center bottom;
    background-color: #f9faff;
    padding-bottom: 46px;

    .banner-desc {
      font-size: 16px;
      line-height: 24px;
      padding: 0 36px;
    }

    .btn {
      margin: 24px auto 0;
      height: 44px;
    }
  }
`;

const BannerImgWrap = styled.div`
  position: absolute;
  width: 588px;
  right: 0;
  top: -20px;
`;

const Inner = styled.div`
  position: absolute;
  top: 186px;
  left: 126px;
`;

interface IBannerProps {
  backgroundImage: string;
  mobileBackgroundImage: string;
  title: React.ReactNode;
  desc?: React.ReactNode;
  desc2?: React.ReactNode;
  desc3?: React.ReactNode;
  text?: string;
  quote?: string;
  className?: string;
  mobileShowTitle?: boolean;
  onBtnClick?: () => void;
  style?: React.CSSProperties;
}

const Banner: React.SFC<IBannerProps> = ({
  mobileBackgroundImage,
  backgroundImage,
  title,
  desc,
  desc2,
  desc3,
  text,
  quote,
  className,
  mobileShowTitle = false,
  onBtnClick,
  style,
}) => (
  <Wrap backgroundImage={backgroundImage} mobileBackgroundImage={mobileBackgroundImage} style={style}>
    <Container className={className} style={{ maxWidth: '1200px !important' }}>
      <Visible md lg xl xxl xxxl>
        <BannerImgWrap className="animate__animated animate__slow animate__fadeInRight">
          <img src={backgroundImage} />
        </BannerImgWrap>
      </Visible>
      <Visible md lg xl xxl xxxl>
        <Row className="animate__animated animate__slow animate__fadeInLeft">
          <Col lg={20}>
            <h1 className="banner-title">{title}</h1>
          </Col>
        </Row>
      </Visible>
      {mobileShowTitle && (
        <Visible sm xs>
          <Row>
            <Col lg={20}>
              <h1 className="banner-title">{title}</h1>
            </Col>
          </Row>
        </Visible>
      )}
      {/* <Hidden sm xs> */}
      <Row className="animate__animated animate__slow animate__fadeInLeft">
        <Col lg={12}>
          <h6 className="banner-desc">{desc}</h6>
        </Col>
      </Row>
      {/* </Hidden> */}
      {desc2 && (
        <Row className="animate__animated animate__slow animate__fadeInLeft">
          <Col lg={12}>
            <h6 className="banner-desc">{desc2}</h6>
          </Col>
        </Row>
      )}
      {desc3 && (
        <Hidden sm xs>
          <Row>
            <Col lg={12}>
              <h6 style={{ marginTop: '-0.8125rem', marginBottom: '0.8125rem' }} className="banner-desc">
                {desc3}
              </h6>
            </Col>
          </Row>
        </Hidden>
      )}
      <Hidden sm xs>
        <Row>
          {quote && (
            <Col lg={16}>
              <h5>{quote}</h5>
            </Col>
          )}
        </Row>
      </Hidden>
      {text && (
        <Row className="animate__animated animate__slow animate__fadeInLeft">
          <span className="btn" onClick={onBtnClick}>
            {text}
          </span>
        </Row>
      )}
    </Container>
  </Wrap>
);

export default Banner;
