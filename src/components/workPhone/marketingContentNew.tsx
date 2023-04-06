import * as React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { media } from '../../constants/style';
import { url } from 'inspector';

interface MarketingContentProps {
  title: React.ReactNode;
  list: { title: string; desc: string; icon: string }[];
  onBtnClick: () => void;
  showTaste?: boolean;
  reverse?: boolean;
  bg?: string;
  hasBtn?: boolean;
}

const MarketingContentWrapper = styled.div<{ bg?: string; hasBtn?: boolean }>`
  width: 100%;
  height: 540px;
  ${media.phone`
    height:416px;
    margin-bottom: 0px;
    `}
  background: ${props => props.bg && props.bg};
  @media (max-width: 768px) {
    background: ${props => props.bg && props.bg};
    background-size: cover;
  }
  background-size: cover;
  ${media.phone`
    height: auto;
  `}
  > div {
    height: 100%;
    > div {
      height: 100%;
    }
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    ${media.phone`
      align-items: center;
      margin-bottom: 35px;
      padding-top: 60px;
      padding-left: 0 !important;
    `}
    i {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      overflow: hidden;
      background: url('https://cdn.byai.com/static/intro/img/workphone/WorkPhone.svg') no-repeat center center;
      background-size: cover;
      margin-bottom: 40px;
      ${media.phone`
        display: none;
      `}
    }
    h3 {
      font-size: 36px;
      color: ${props => (props.hasBtn ? '#0D1924' : '#fff')};
      line-height: 50px;
      font-weight: 400;
      margin-top: -20px;
      ${media.phone`
        text-shadow: 0px 0px 50px rgba(13, 37, 62, 0);
        text-align: center;
        margin-top: 0px;
      `}
    }
    .btn {
      cursor: pointer;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      transform: translateY(-20px);
      width: 184px;
      height: 40px;
      color: #666;
      border: 1px solid #666;
      font-size: 16px;
      border-radius: 20px;
      margin-top: 24px;
      transition: all 0.3s;
      &:hover {
        color: #3153d4;
        border-color: #3153d4;
      }
      ${media.phone`
        display: none;
        transform: translateY(0px);
      `}
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 474px;
    margin-top: 98px;
    ${media.phone`
      margin-top: 0;
    `}
    ${media.phone`
      height: 420px;
    `}
    .marketing-card {
      background: url('https://cdn.byai.com/static/intro/img/workphone/marketingContentNew/BgTop.png') no-repeat center
        center;
      background-size: 100% 100%;
      box-shadow: 0px 0px 60px 10px rgba(49, 83, 212, 0.1);
      ${media.phone`
        box-shadow： none;
        width: 90%;
        margin: 0 auto;
      `}

      &:nth-of-type(2) {
        background-image: url('https://cdn.byai.com/static/intro/img/workphone/marketingContentNew/BgMiddle.png');
      }

      &:nth-of-type(3) {
        background-image: url('https://cdn.byai.com/static/intro/img/workphone/marketingContentNew/Bgdown.png');
      }
      > div {
        display: flex;
        align-items: center;
        padding-left: 30px;
        border-radius: 4px;
        height: 158px;
        ${media.phone`
          height: 113px;
      `}
        width: 100%;
        ${media.phone`
          width: 90%;
          margin: 0 auto 16px auto;
          padding: 30px;
          background-size: contain;
        `}
        .icon {
          width: 56px;
          height: 56px;
          display: inline-block;
          margin-right: 20px;
          background-size: cover;
        }
        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;

          .title {
            font-size: 22px;
            color: #0d1924;
            letter-spacing: 1px;
            ${media.phone`
                font-size: 20px;
            `}
          }
          .desc {
            margin-top: 8px;
            font-size: 16px;
            font-weight: 400;
            color: #666666;
            line-height: 25px;
            ${media.phone`
                margin-top: 5px;
                font-size: 16x;
            `}
          }
        }
      }
    }
  }
`;

export const MarketingContentNew: React.SFC<MarketingContentProps> = ({
  title,
  list,
  onBtnClick,
  reverse,
  bg,
  hasBtn,
}) => (
  <MarketingContentWrapper bg={bg} hasBtn={hasBtn}>
    <Container style={{ paddingBottom: 40 }}>
      <Row
        style={{
          flexDirection: reverse ? 'row-reverse' : 'row',
        }}>
        <Col
          className="left"
          lg={12}
          md={12}
          sm={24}
          style={{
            paddingLeft: reverse ? '116px' : '0',
          }}>
          {!hasBtn && <i></i>}
          <h3>{title}</h3>
          {hasBtn && (
            <div className="btn" onClick={onBtnClick}>
              立即体验
            </div>
          )}
        </Col>
        <Col className="right" lg={12} md={12} sm={24}>
          {list.map(item => (
            <div className="marketing-card" key={item.title}>
              <div>
                <div
                  className="icon"
                  style={{
                    background: `url(${item.icon}) no-repeat center center`,
                  }}></div>
                <div className="content">
                  <div className="title">{item.title}</div>
                  <div className="desc">{item.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  </MarketingContentWrapper>
);
