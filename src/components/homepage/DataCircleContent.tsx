import * as React from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../../constants/style';

interface DataCircleContentProps {
  title: string;
  dataList: {
    color: string;
    value: string;
    unit: string;
    name: string;
    action: string;
  }[];
}

const DATA_BG = 'https://cdn.byai.com/static/official-website/home/bg5.png';
const DATA_BG_XS = 'https://cdn.byai.com/static/official-website/home/shoujiduan-5.png';

const DataCircleContentWrapper = styled.div`
  background-image: url(${DATA_BG});
  @media (max-width: 768px) {
    background-image: url(${DATA_BG_XS});
  }
  background-size: cover;
  min-height: 625px;
  display: flex;
  align-items: center;
  ${media.phone`
    height: auto;
    padding-bottom: 24px;
  `}
  > div {
    height: 40%;
    > div {
      height: 100%;
    }
  }
  h3 {
    font-size: 36px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 50px;
    margin-top: 0;
    margin-bottom: 88px;
    ${media.phone`
      font-size: 28px;
      width: 80%;
      height: auto;
      margin-top: 60px;
      margin-bottom: 50px;
      text-align: center;
    `}
  }
  .data-circle {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    ${media.phone`
      margin-bottom: 24px;
    `}
    .circle {
      width: 140px;
      height: 140px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid;
      .value {
        font-size: 46px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 65px;
      }
      .unit {
        font-size: 16px;
        font-weight: 300;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
        padding-top: 16px;
      }
    }
    .name {
      font-size: 20px;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      line-height: 28px;
      margin-top: 34px;
      ${media.phone`
        margin-top: 16px;
      `}
    }
    .desc {
      font-size: 14px;
      font-weight: 300;
      color: rgba(255, 255, 255, 1);
      line-height: 20px;
      b {
        display: inline-block;
        margin: 0 5px;
      }
    }
  }
  .data-list {
    display: flex;
    justify-content: center !important;
  }
  .title {
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const DataCircleContent: React.SFC<DataCircleContentProps> = ({ title, dataList }) => (
  <Visible sm xs md lg xl xxl xxxl>
    <DataCircleContentWrapper>
      <Container style={{ width: '100%' }}>
        <Row className="title">
          <Col lg={24}>
            <h3>{title}</h3>
          </Col>
        </Row>
        <Row className="data-list">
          {dataList.map(item => (
            <Col lg={4} xs={24} className="data-circle">
              <div className="circle" style={{ borderColor: item.color }}>
                <span className="value">{item.value}</span>
                <span className="unit">{item.unit}</span>
              </div>
              <div className="name">{item.name}</div>
              <div className="desc">
                <span>{item.action}</span>
                <b>
                  {item.value}
                  {item.unit}
                </b>
                <span>以上</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </DataCircleContentWrapper>
  </Visible>
);
