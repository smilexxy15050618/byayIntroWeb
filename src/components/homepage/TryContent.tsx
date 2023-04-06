import * as React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { media } from '../../constants/style';

interface TryContentProps {
  lightText: string;
  boldText: string;
  onBtnClick: () => void;
}

const TryContentWrapper = styled.div`
  height: 292px;
  ${media.phone`
    height: auto;
  `}

  background: rgba(248, 249, 251, 1);
  > div {
    height: 100%;
    > div {
      height: 100%;
    }
  }
  .content,
  .btn-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${media.phone`
      align-items: center;
    `}

    .light {
      font-size: 36px;
      font-weight: 200;
      color: rgba(102, 102, 102, 1);
      line-height: 50px;
      ${media.phone`
        display: none;
      `}
    }
    .bold {
      font-size: 36px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 50px;
      ${media.phone`
        text-align: center;
        font-size: 23px;
        line-height: 1.5;
        margin-top: 30px;
      `}
    }
    .btn {
      cursor: pointer;
      width: 200px;
      height: 50px;
      ${media.phone`
        height: 40px;
        border-radius: 20px;
        margin-top: 20px;
        margin-bottom: 30px;
      `}
      background: rgba(49, 83, 212, 1);
      border-radius: 40px;
      display: inline-flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      line-height: 22px;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: #3d5afe;
      }
    }
  }
`;

export const TryContent: React.SFC<TryContentProps> = ({ lightText, boldText, onBtnClick }) => (
  <TryContentWrapper>
    <Container>
      <Row>
        <Col className="content" lg={18} md={18} xs={24}>
          <div className="bold">{boldText}</div>
          <div className="light">{lightText}</div>
        </Col>
        <Col className="btn-wrapper" lg={6} md={6} xs={24}>
          <div className="btn" onClick={onBtnClick}>
            免费体验
          </div>
        </Col>
      </Row>
    </Container>
  </TryContentWrapper>
);
