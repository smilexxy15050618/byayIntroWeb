import * as React from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../constants/style';

interface DescWrapperProps {
  id?: string;
  children: React.ReactNode;
  title: string | React.ReactNode;
  subTitle?: string | React.ReactNode;
  desc?: string | React.ReactNode;
  background?: string;
  backgroundColor?: string;
  className?: string;
  style?: object;
}

const DescDiv = styled.div<{ background?: string; backgroundColor?: string }>`
  padding-top: 60px;
  padding-bottom: 60px;
  ${media.phone`
    padding-top: 32px !important;
    padding-bottom: 32px !important;
    background-image: none!important;
  `}
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : 'unset')};
  background-size: cover;
  h3.desc-title {
    padding: 0 30px;
    font-size: 36px;
    font-weight: 500;
    color: rgba(13, 25, 36, 1);
    line-height: 50px;
    text-align: center;
    ${media.phone`
      padding: 0 24px;
      font-size: 26px;
      line-height: 1.4;
      margin-bottom: 30px;
    `}
  }
  p.desc-content {
    padding: 0 30px;
    font-size: 16px;
    color: rgba(102, 102, 102, 1);
    line-height: 24px;
    text-align: center;
    margin-bottom: 60px;
    ${media.phone`
      display: none;
      padding: 0 24px;
      line-height: 1.6;
    `}
  }
  .carousel-indicators {
    margin-bottom: 0;

    li {
      background-color: #000;
      width: 15px;
      height: 4px;
      opacity: 0.1;
      border-radius: 2px;
    }

    .active {
      opacity: 0.4;
    }
  }
`;

export const BaiduDescWrapper: React.SFC<DescWrapperProps> = ({
  id,
  children,
  title,
  subTitle,
  desc,
  background,
  backgroundColor,
  className,
  style,
}) => (
  <DescDiv id={id} style={style} background={background} backgroundColor={backgroundColor} className={className}>
    <Container>
      <Row>
        <Col lg={24}>
          <Visible md lg xl xxl xxxl>
            <h3 className="desc-title">
              {title}，{subTitle}
            </h3>
          </Visible>
          <Visible xs sm>
            <h3 className="desc-title">
              {title}
              <br />
              {subTitle}
            </h3>
          </Visible>
        </Col>
        <Col lg={24}>{desc && <p className="desc-content">{desc}</p>}</Col>
        {children}
      </Row>
    </Container>
  </DescDiv>
);
