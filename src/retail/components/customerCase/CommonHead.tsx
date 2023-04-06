import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  bgImg: string;
  title: string[];
}

const WrapperCommonHead = styled.div<{ bgImg: string }>`
  margin-top: 60px;
  text-align: center;
  font-size: 40px;
  height: 317px;
  font-weight: 600;
  color: #ffffff;
  line-height: 60px;
  padding-top: 80px;
  background: url(${props => props.bgImg}) no-repeat 50%;
  background-size: cover;
`;
const CommonHead: FC<IProps> = ({ bgImg, title }) => {
  return (
    <WrapperCommonHead bgImg={bgImg}>
      {title.map(item => (
        <div>{item}</div>
      ))}
    </WrapperCommonHead>
  );
};

export default CommonHead;
