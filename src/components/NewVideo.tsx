import React, { useEffect, useState } from 'react';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';

const Title = styled.div`
font-size: 40px;
font-weight: 500;
letter-spacing: 0px;
line-height: 48px;
color: rgba(26, 26, 26, 1);
text-align: center;
margin-top: 143px;
`
const SubTitle = styled.div`
font-size: 16px;
font-weight: 400;
letter-spacing: 0.73px;
line-height: 24px;
color: rgba(51, 51, 51, 1);
text-align: center;
margin-top: 24px;
`
export const NewVideo = () => {
    return (<>
      <Title>AI时代的新一代智能用户运营平台</Title>
      <SubTitle>以“数据、智能、互动式内容、连接通道、运营策略”为核心运营要素，打造智能用户运营平台</SubTitle>
    </>)
}