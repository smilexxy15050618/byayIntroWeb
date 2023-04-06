import * as React from 'react';
import styled from 'styled-components';

const SupportWrap = styled.div<{ backgroundImage: string }>`
    padding: 40px 60px;
    width: 402px;
    height: 245px;
    background-image: ${props => `url(${props.backgroundImage});`}
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    &:nth-child(2),
    &:nth-child(4) {
        padding-left: 80px;
    }
`;

const SupportTitle = styled.h3`
  font-size: 24px;
  color: #ffffff;
  line-height: 33px;
  font-weight: 400;
  margin-top: 10px;
`;

const SupportDescList = styled.ul`
  list-style: none;
  margin-left: 0;
  margin-top: 30px;
`;

const SupportDescItem = styled.li`
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  line-height: 20px;
  margin-bottom: 15px;
  .iconfont {
    font-size: 16px;
    margin-right: 15px;
    color: #54c4c5;
  }
`;

interface ISupportProps {
  backgroundImage?: string;
  title: string;
  descList: string[];
}

const Support: React.SFC<ISupportProps> = ({ backgroundImage, title, descList }) => (
  <SupportWrap backgroundImage={backgroundImage}>
    <SupportTitle>{title}</SupportTitle>
    <SupportDescList>
      {descList.map(item => (
        <SupportDescItem key={item}>
          <i className="iconfont iconyuanquan"></i>
          <span>{item}</span>
        </SupportDescItem>
      ))}
    </SupportDescList>
  </SupportWrap>
);

export default Support;
