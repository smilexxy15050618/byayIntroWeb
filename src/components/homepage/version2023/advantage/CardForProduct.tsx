import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';

export type ICardForProductProps = {};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 24px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 17px;
  }
`;

const CardWrapper = styled.div`
  height: 168px;
  border-radius: 8px;
  padding: 48px 55px 0;
  background-repeat: no-repeat;
  background-position: right;
  background-size: 168px;
  @media (max-width: 768px) {
    height: 116px;
    border-radius: 4px;
    padding: 20px 24px 0;
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: auto 62%;
  }
`;

const Title = styled.div`
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  line-height: 40px;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    line-height: 24px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    margin-bottom: 16px;
  }
`;

const LabelWrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    width: 160px;
    flex-wrap: wrap;
  }
`;

const Label = styled.div`
  line-height: 24px;
  border-radius: 12px;
  border: 1px solid;
  padding: 0 8px;
  font-size: 14px;
  margin-right: 8px;
  @media (max-width: 768px) {
    line-height: 20px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    margin-bottom: 8px;
    margin-right: 4px;
  }
`;

const cardInfo = [
  {
    name: '贴合实际业务，功能快速迭代',
    bgColor: 'rgba(232, 251, 255, 1)',
    color: 'rgba(0, 163, 255, 1)',
    label: ['全自动化', '一键外呼', '策略配置', '客户画像'],
    img: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E4%BC%98%E5%8A%BF/%E4%BC%98%E5%8A%BF1-1.png',
  },
  {
    name: '覆盖全国的稳健线路资源',
    bgColor: 'rgba(234, 239, 254, 1)',
    label: ['低投诉率', '高接通率', '专线专用'],
    color: 'rgba(43, 88, 249, 1)',
    img: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E4%BC%98%E5%8A%BF/%E4%BC%98%E5%8A%BF1-2.png',
  },
  {
    name: '百应「天盾」护航业务安全',
    label: ['黑灰名单', '大数据模型'],
    bgColor: 'rgba(255, 239, 248, 1)',
    color: 'rgba(255, 91, 184, 1)',
    img: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E4%BC%98%E5%8A%BF/%E4%BC%98%E5%8A%BF1-3.png',
  },
  {
    name: '银行级产品，保障数据安全',
    label: ['全自动化', '一键外呼', '策略配置', '客户画像'],
    bgColor: 'rgba(232, 250, 243, 1)',
    color: 'rgba(38, 196, 116, 1)',
    img: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E4%BC%98%E5%8A%BF/%E4%BC%98%E5%8A%BF1-4.png',
  },
];

const CardForProduct: FC<ICardForProductProps> = ({}) => {
  return (
    <Wrapper className="">
      {cardInfo.map(({ name, bgColor, color, label, img }) => {
        return (
          <CardWrapper style={{ backgroundColor: bgColor, color, backgroundImage: `url(${img})` }}>
            <Title>{name}</Title>
            <LabelWrapper>
              {label.map(l => {
                return <Label style={{ borderColor: color }}>{l}</Label>;
              })}
            </LabelWrapper>
          </CardWrapper>
        );
      })}
    </Wrapper>
  );
};

export default CardForProduct;
