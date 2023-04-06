import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  desc?: string;
}

const WrapperHeadDesc = styled.div`
  background: #f9fbfc;
  text-align: center;
  .title {
    padding: 100px 0 48px;
    font-size: 40px;
    font-weight: 500;
    color: #2b2b2b;
  }
`;

const HeadDesc: FC<IProps> = ({ title, desc }) => {
  return (
    <WrapperHeadDesc>
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
    </WrapperHeadDesc>
  );
};

export default HeadDesc;
