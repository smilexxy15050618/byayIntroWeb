import * as React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { media } from '../../constants/style';

interface MarketingContentProps {
  title: React.ReactNode;
  list: { title: string; desc: string }[];
  onBtnClick: () => void;
  showTaste?: boolean;
}

const MARKETING_BG = 'https://cdn.byai.com/static/official-website/home/bg3.png';
const MARKETING_BG_XS = 'https://cdn.byai.com/node_front/1572273787064/bg3%20copy.png';
const MARKETING_CARD_BG = 'https://cdn.byai.com/static/official-website/home/yuanquan.png';

const MarketingContentWrapper = styled.div`
  width: 100%;
  height: 566px;
  ${media.phone`
    height:416px;
    margin-bottom: 0px;
    `}
  margin-bottom: 37px;
  background: url(${MARKETING_BG});
  @media (max-width: 768px) {
    background: url(${MARKETING_BG_XS});
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
    `}
    h3 {
      font-size: 36px;
      color: rgba(255, 255, 255, 1);
      line-height: 50px;
      text-shadow: 0px 0px 50px rgba(13, 37, 62, 1);
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
      height: 50px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 20px 0px rgba(61, 90, 254, 0.2);
      border-radius: 25px;
      font-size: 16px;
      font-weight: 500;
      color: rgba(49, 83, 212, 1);
      line-height: 22px;
      margin-top: 37px;
      ${media.phone`
        display: none;
        transform: translateY(0px);
      `}
      &:hover {
        border: 1px solid #fff;
        color: #fff;
        background-color: #2a4ecc;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 640px;
    ${media.phone`
      height:400px;
    `}
    margin-top: -37px;
    ${media.phone`
      margin-top: 0;
    `}
    .marketing-card {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding-left: 50px;
      box-shadow: 0px 0px 60px 10px rgba(49, 83, 212, 0.1);
      border-radius: 4px;
      height: 200px;
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
      background-color: #fff;
      background-image: url(${MARKETING_CARD_BG});
      background-size: cover;
      box-sizing: border-box;
      .title {
        font-size: 32px;
        font-weight: 500;
        color: rgba(13, 25, 36, 1);
        letter-spacing: 1px;
        ${media.phone`
            font-size: 20px;
        `}
      }
      .desc {
        margin-top: 8px;
        font-size: 18px;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        line-height: 25px;
        ${media.phone`
            margin-top: 5px;
            font-size: 16x;
        `}
      }
    }
  }
`;

export const MarketingContent: React.SFC<MarketingContentProps> = ({ title, list, onBtnClick }) => (
  <MarketingContentWrapper>
    <Container style={{ paddingBottom: 40 }}>
      <Row>
        <Col className="left" lg={12} md={12} sm={24}>
          <h3>{title}</h3>
          <div className="btn" onClick={onBtnClick}>
            立即体验
          </div>
        </Col>
        <Col className="right" lg={12} md={12} sm={24}>
          {list.map(item => (
            <div className="marketing-card" key={item.title}>
              <div className="title">{item.title}</div>
              <div className="desc">{item.desc}</div>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  </MarketingContentWrapper>
);
