import { url } from 'inspector';
import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  height: 360px;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const CardWrapper = styled.div`
  @media (max-width: 768px) {
    height: 184px;
    text-align: left;
    padding-left: 16px;
    flex: auto;
    padding-top: 20px;
    border-radius: 5px;
    box-sizing: border-box;
    background-position: top -28px right -8px;
    background-size: auto 100%;
  }
  flex: 1;
  text-align: center;
  padding-top: 34px;
  background: #eaeffe;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  border-radius: 8px;
  .t-service-title {
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2b58f9;
    line-height: 40px;
    margin-bottom: 16px;
    @media (max-width: 768px) {
      margin-bottom: 12x;
      font-size: 16px;
      line-height: 24px;
    }
    @media (max-width: 768px) {
    }
  }
  .t-service-desc {
    font-size: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(10, 15, 44, 0.65);
    line-height: 28px;
    @media (max-width: 768px) {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(10, 15, 44, 0.65);
      line-height: 20px;
      width: 119px;
    }
  }
  .t-service-sub-desc {
    margin-top: 8px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(10, 15, 44, 0.45);
    line-height: 24px;
    @media (max-width: 768px) {
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(10, 15, 44, 0.45);
      width: 120px;
      line-clamp: 2;
      -webkit-line-clamp: 2;
      line-height: 20px;
      text-overflow: clip;
    }
  }
`;

const Title = styled.div`
  height: 40px;
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  line-height: 40px;
  margin-bottom: 8px;
`;

const LabelWrapper = styled.div`
  display: flex;
`;

const Label = styled.div`
  height: 24px;
  line-height: 24px;
  border-radius: 12px;
  border: 1px solid;
  padding: 0 8px;
  font-size: 14px;
  & + & {
    margin-left: 8px;
  }
`;

const cardInfo = [
  {
    name: '团队',
    bgColor: 'rgba(234, 239, 254, 1)',
    desc: '5大角色全方位服务的专业团队',
    color: 'rgba(43, 88, 249, 1)',
    img: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E4%BC%98%E5%8A%BF/%E4%BC%98%E5%8A%BF3-%E5%9B%A2%E9%98%9F.png',
  },
  {
    name: '业务',
    bgColor: 'rgba(232, 252, 241, 1)',
    desc: '深刻理解客户业务 定制策略方案',
    subDesc: (
      <>
        <div>理解行业和客户特征</div>
        <div style={{ whiteSpace: 'nowrap' }}>贴合业务的定制化解决方案</div>
      </>
    ),
    subDescForMobile: ['理解行业和客户特征', '贴合业务的定制化解决方案'],
    color: 'rgba(38, 196, 116, 1)',
    img: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E4%BC%98%E5%8A%BF/%E4%BC%98%E5%8A%BF3-%E4%B8%9A%E5%8A%A1.png',
  },
  {
    name: '专业',
    bgColor: 'rgba(232, 251, 255, 1)',
    desc: '基于AI电话方法论的科学服务',
    subDesc: '7年专注AI领域，全行业经验沉淀',
    color: 'rgba(0, 163, 255, 1)',
    img: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E4%BC%98%E5%8A%BF/%E4%BC%98%E5%8A%BF3-%E4%B8%93%E4%B8%9A.png',
  },
];

const CardForService: FC = ({}) => {
  return (
    <Wrapper className="">
      {cardInfo.map(({ name, bgColor, color, desc, subDesc, subDescForMobile, img }) => {
        return (
          <CardWrapper style={{ backgroundColor: bgColor, backgroundImage: `url(${img})` }}>
            <div className="t-service-title" style={{ color }}>
              {name}
            </div>
            <div className="t-service-desc">{desc}</div>
            {subDesc && <div className="t-service-sub-desc">{subDesc}</div>}
          </CardWrapper>
        );
      })}
    </Wrapper>
  );
};

export default CardForService;
