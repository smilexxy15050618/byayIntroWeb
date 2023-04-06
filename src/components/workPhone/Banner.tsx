import React from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../../constants/style';

const Wrap = styled.div<{
  backgroundImage?: string;
  mobileBackgroundImage?: string;
  height?: string;
}>`
  overflow: ${props => (props.height ? 'unset' : 'hidden')};
  ${media.desktop`
    margin-top: 50px;
  `}
  position: relative;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 170px;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #f8f9fb;
  height: ${props => (props.height ? props.height : '474px')};
  @media (max-width: 768px) {
    background-image: url(${props =>
    props.mobileBackgroundImage
      ? props.mobileBackgroundImage
      : 'https://cdn.byai.com/static/intro/img/workphone/H5/bg.png'}) !important;
    height: 617px !important;
    h1 {
      color: #fff !important;
      padding: 0 !important;
      margin: 12px 0 !important;
      font-size: 36px;
    }
    .desc1 {
      margin-top: 40px !important;
      font-size: 16px;
      ${media.desktop` margin-top: 30px !important;`};
    }
    .desc2 {
      width: 90vw !important;
      margin: 0 auto !important;
      font-size: 14px !important;
      text-align: center !important;
    }
  }
  i {
    width: 32px;
    height: 32px;
    display: inline-block;
    position: absolute;
    left: 0;
    bottom: 90px;
    border-radius: 50%;
    overflow: hidden;
    background: url('https://cdn.byai.com/static/intro/img/workphone/WorkPhone.svg') no-repeat center center;
    background-size: cover;
  }
  h1 {
    margin: 10px 0;
    color: #fff;
    font-size: 50px;
    font-weight: 400;
    border-bottom: none;
    line-height: 70px;
    @media (max-width: 768px) {
      margin-top: 8vh;
      font-size: 38px;
      font-weight: 500;
      color: rgba(13, 25, 36, 1);
      line-height: 54px;
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
  .desc1 {
    margin-bottom: 0;
    margin-top: 177px;
    color: #fff;
    font-size: 24px;
    font-weight: 400;
    ${media.desktop`text-align: center;`};
  }
  .desc2 {
    color: #afbde2;
    font-size: 18px;
    font-weight: 400;
  }
  .btn {
    cursor: pointer;
    margin-top: 60px;
    display: inline-flex;
    width: 184px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    border-width: 1px;
    border-style: solid;
    border-color: #fff;
    text-align: center;
    font-size: 16px;
    color: #fff;
    ${media.phone`background: rgba(49, 83, 212, 1); border-style: none;color: rgba(255, 255, 255, 1);`};
    ${media.tablet`background: rgba(49, 83, 212, 1); border-style: none; color: rgba(255, 255, 255, 1);`};
    transition: all 0.3s;
    &:hover {
      color: #fff;
      background: #3153d4;
      border-color: #3153d4;
    }
  }
  .right-image {
    height: ${props => (props.height ? props.height : '474px')};
    text-align: ${props => (props.height ? 'center' : 'unset')};
    line-height: ${props => (props.height ? '474px' : 'unset')};

    img {
      margin-top: ${props => (props.height ? '80px' : '60px')};
      width: auto;
      height: ${props => (props.height ? '90%' : '85%')};
    }
  }
  .mobile-image {
    width: 100%;
    text-align: ${props => (props.height ? 'center' : 'right')};
    img {
      width: 80%;
      margin-top: ${props => (props.height ? '26px' : '50px')};
    }
  }
`;

const Inner = styled.div`
  position: absolute;
  top: 186px;
  left: 126px;
`;

interface IBannerProps {
  backgroundImage?: string;
  mobileBackgroundImage?: string;
  rightImage?: string;
  mobileImage?: string;
  title: string;
  desc1?: string;
  desc2?: string;
  text?: string;
  quote?: string;
  height?: string;
  onBtnClick?: () => void;
}

const Banner: React.SFC<IBannerProps> = ({
  mobileBackgroundImage,
  backgroundImage,
  mobileImage,
  rightImage,
  title,
  desc1,
  desc2,
  text,
  height,
  onBtnClick,
}) => (
  <Wrap backgroundImage={backgroundImage} mobileBackgroundImage={mobileBackgroundImage} height={height}>
    <Container>
      <Row>
        <Col lg={12} xl={12} sm={24} md={12}>
          <Row>
            <Col lg={24}>
              {!text && (
                <Visible md lg xl xxl xxxl>
                  <i></i>
                </Visible>
              )}
              <p className="desc1">{desc1}</p>
            </Col>
          </Row>
          <Row>
            <Col lg={24}>
              <h1>{title}</h1>
            </Col>
          </Row>
          <Row>
            <Col lg={24}>
              <p className="desc2">{desc2}</p>
            </Col>
          </Row>
          <Visible md lg xl xxl xxxl>
            {text && (
              <Row>
                <span className="btn" onClick={onBtnClick}>
                  {text}
                </span>
              </Row>
            )}
          </Visible>
        </Col>
        <Visible md lg xl xxl xxxl>
          <Col md={12} xl={12} lg={12}>
            <div className="right-image">
              <img src={rightImage}></img>
            </div>
          </Col>
        </Visible>
        <Visible sm xs>
          <div className="mobile-image">
            <img src={mobileImage}></img>
          </div>
        </Visible>
      </Row>
    </Container>
  </Wrap>
);

export default Banner;
