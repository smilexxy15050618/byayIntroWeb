import * as React from 'react';
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../../../src/constants/style';

const Wrap = styled.div<{
  backgroundImage?: string;
  mobileBackgroundImage?: string;
}>`
  margin-top: 86px;
  ${media.desktop`
    margin-top: 50px;
  `}
  position: relative;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 170px;
  background-image: ${props => `url(${props.backgroundImage})`};
  @media (max-width: 768px) {
    height: 80vh;
    background-image: url(${props => props.mobileBackgroundImage}) !important;
    background-color: #fff;
  }
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #f8f9fb;
  height: 474px;
  h1 {
    margin-bottom: 10px;
    color: rgba(13, 25, 36, 1);
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
    color: rgba(13, 25, 36, 1);
    font-size: 18px;
    font-weight: 300;
    line-height: 30px;
    ${media.desktop`text-align: center;`};
  }
  .btn {
    cursor: pointer;
    margin-top: 20px;
    display: inline-flex;
    width: 184px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    border-width: 1px;
    border-style: solid;
    border-color: rgba(49, 83, 212, 1);
    text-align: center;
    font-size: 14px;
    color: rgba(49, 83, 212, 1);
    ${media.phone`background: rgba(49, 83, 212, 1); border-style: none;color: rgba(255, 255, 255, 1);`};
    ${media.tablet`background: rgba(49, 83, 212, 1); border-style: none; color: rgba(255, 255, 255, 1);`};
    &:hover {
      background: rgba(49, 83, 212, 1);
      border-style: none;
      color: rgba(255, 255, 255, 1);
    }
  }
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
  onBtnClick?: () => void;
}

export const Banner: React.SFC<IBannerProps> = ({
  mobileBackgroundImage,
  backgroundImage,
  title,
  desc,
  desc2,
  desc3,
  text,
  quote,
  className,
  onBtnClick,
}) => (
  <Wrap backgroundImage={backgroundImage} mobileBackgroundImage={mobileBackgroundImage}>
    <Container className={className}>
      <Visible md lg xl xxl xxxl>
        <Row>
          <Col lg={20}>
            <h1 className="banner-title">{title}</h1>
          </Col>
        </Row>
      </Visible>
      <Hidden sm xs>
        <Row>
          <Col lg={12}>
            <h6 className="banner-desc">{desc}</h6>
          </Col>
        </Row>
      </Hidden>
      {desc2 && (
        <Hidden sm xs>
          <Row>
            <Col lg={12}>
              <h6 style={{ marginBottom: '0.8125rem' }} className="banner-desc">
                {desc2}
              </h6>
            </Col>
          </Row>
        </Hidden>
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
      <Visible md lg xl xxl xxxl>
        {text && (
          <Row>
            <span className="btn" onClick={onBtnClick}>
              {text}
            </span>
          </Row>
        )}
      </Visible>
    </Container>
  </Wrap>
);

export default Banner;
