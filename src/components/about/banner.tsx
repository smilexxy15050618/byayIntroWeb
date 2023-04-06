import * as React from 'react';
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../../constants/style';

const Wrap = styled.div<{
  backgroundImage?: string;
  mobileBackgroundImage?: string;
}>`
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
    margin-top: 0;
    color: rgba(13, 25, 36, 1);
    font-size: 18px;
    font-weight: 400;
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
  .other {
    margin-left: 20px;
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
  text1?: string;
  text2?: string;
  api?: string;
  quote?: string;
  onBtn1Click?: () => void;
  onBtn2Click?: () => void;
}

const Banner: React.SFC<IBannerProps> = ({
  mobileBackgroundImage,
  backgroundImage,
  title,
  desc,
  text1,
  text2,
  api,
  quote,
  onBtn1Click,
  onBtn2Click,
}) => (
  <Wrap backgroundImage={backgroundImage} mobileBackgroundImage={mobileBackgroundImage}>
    <Container>
      <Row>
        <Col lg={20}>
          <h1>{title}</h1>
        </Col>
      </Row>
      <Hidden sm xs>
        <Row>
          <Col lg={16}>
            <h6>{desc}</h6>
          </Col>
        </Row>
      </Hidden>
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
        {text1 && (
          <Row>
            <span className="btn" onClick={onBtn1Click}>
              {text1}
            </span>
            {api && (
              <span className="btn other" onClick={onBtn1Click}>
                {api}
              </span>
            )}
          </Row>
        )}
      </Visible>
      <Visible xs sm>
        {text1 && (
          <Row justify="center" align="center">
            <span className="btn" onClick={onBtn1Click}>
              {text1}
            </span>
          </Row>
        )}
      </Visible>
      <Visible md lg xl xxl xxxl>
        {text2 && (
          <Row>
            <span className="btn" onClick={onBtn2Click}>
              {text2}
            </span>
            {api && (
              <span className="btn other" onClick={onBtn2Click}>
                {api}
              </span>
            )}
          </Row>
        )}
      </Visible>
      <Visible xs sm>
        {text2 && (
          <Row justify="center" align="center">
            <span className="btn" onClick={onBtn2Click}>
              {text2}
            </span>
          </Row>
        )}
      </Visible>
    </Container>
  </Wrap>
);

export default Banner;
