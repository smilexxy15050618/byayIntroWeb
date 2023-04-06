import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';

export type ICardForProductProps = {};
// 2.45
const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`;

const ContentLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (max-width: 768px) {
    flex-direction: row;
    gap: 13px;
    > * {
      flex: 1;
    }
  }
`;

const LeftCard = styled.div<{ bgColor: string }>`
  padding: 32px;
  flex: 1;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-position: top right;
  background-size: 80px;

  .big-number {
    height: 40px;
    font-size: 48px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #2b58f9;
    line-height: 40px;
    background-image: ${props => props.bgColor};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .left-card-title {
    font-size: 24px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(10, 15, 44, 0.65);
    line-height: 32px;
    white-space: nowrap;
  }
  .left-card-desc {
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(10, 15, 44, 0.4);
    line-height: 32px;
  }
  @media (max-width: 768px) {
    padding: 16px;
    box-sizing: border-box;
    height: 82px;
    background-size: 37px;
    .l-content-card-wrapper {
      transform: scale(0.5);
      transform-origin: 0 0;
      overflow: hidden;
      position: absolute;
    }
  }
`;

const ContentRight = styled.div`
  flex: 2.45;
  background: no-repeat left / cover
    url(https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E4%BC%98%E5%8A%BF/%E4%BC%98%E5%8A%BF2-3.png)
    #eaeffe;
  border-radius: 8px;
  padding: 32px 24px;
  @media (max-width: 768px) {
    padding: 20px 24px;
    background: no-repeat left -47px top 0px / auto 50% url(https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E4%BC%98%E5%8A%BF/%E4%BC%98%E5%8A%BF2-3.png)
      #eaeffe;
  }

  .content-right-title {
    text-align: center;
    height: 40px;
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2b58f9;
    line-height: 40px;
    margin-bottom: 24px;
    @media (max-width: 768px) {
      height: 24px;
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      margin-bottom: 20px;
      line-height: 24px;
    }
  }
`;

const RightContentCard = styled.div`
  flex: 1;
  height: 232px;
  background: rgba(43, 88, 249, 0.06);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    height: 140px;
    background: rgba(43, 88, 249, 0.06);
    border-radius: 10px;
  }
  .r-content-card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .r-content-card-tag {
    margin-top: 32px;
    margin-bottom: 16px;
    text-align: center;
    width: 100px;
    background: #333333;
    border-radius: 31px;
    border: 1px solid #2b58f9;
    line-height: 32px;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    @media (max-width: 768px) {
      margin-top: 16px;
      margin-bottom: 6px;
      width: 60px;
      line-height: 20px;
      height: 20px;
      font-size: 14px;
      background: #333333;
      border-radius: 19px;
      border: 1px solid #2b58f9;
    }
  }
  .r-content-card-desc {
    height: 24px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(10, 15, 44, 0.6);
    line-height: 24px;
    margin-bottom: 8px;
    @media (max-width: 768px) {
      height: 20px;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(10, 15, 44, 0.6);
      line-height: 20px;
      margin-bottom: 0px;
    }
  }
  .r-content-data-wrapper {
    display: flex;
    justify-content: center;
    @media (max-width: 768px) {
      gap: 24px;
    }
  }
  .r-content-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 104px;
    height: 104px;
    border-radius: 8px;
    text-align: center;
    padding-top: 12px;
    @media (max-width: 768px) {
      width: 62px;
      padding-top: 8px;
      height: 62px;
      white-space: nowrap;
      padding-top: 0px;
      margin-bottom: 10px;
    }
  }

  .r-content-data--top {
    margin-bottom: 2px;
    font-size: 32px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    line-height: 40px;
    background-image: linear-gradient(180deg, #2b58f9 0%, rgba(43, 88, 249, 0) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 768px) {
      line-height: 24px;
      font-size: 24px;
      .special-font {
        line-height: 24px !important;
      }
    }
  }
  .r-content-data--bottom {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #2b58f9;
    line-height: 24px;
    @media (max-width: 768px) {
      line-height: 12px;
      font-size: 12px;
    }
  }
`;

const RightContentCardWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const cardLeftInfo = [
  {
    name: '全国权威安全认证',
    bgColor: 'rgba(232, 251, 255, 1)',
    digitColor: 'linear-gradient(180deg, #00A3FF 0%, rgba(0,163,255,0) 100%)',
    desc: '可信云、CMMI5等',
    digit: (
      <>
        6<span style={{ fontSize: 32 }}>大</span>
      </>
    ),
    img: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E4%BC%98%E5%8A%BF/%E4%BC%98%E5%8A%BF2-1.png',
  },
  {
    name: '人工智能核心技术专利',
    bgColor: 'rgba(232, 250, 243, 1)',
    desc: '授权及在申',
    digitColor: 'linear-gradient(180deg, #26C474 0%, rgba(38,196,116,0) 100%)',
    digit: '100+',
    img: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E4%BC%98%E5%8A%BF/%E4%BC%98%E5%8A%BF2-2%E4%B8%93%E5%88%A9.png',
  },
];

const cardRightInfo = [
  {
    tag: 'TTS',
    desc: '百万级电话锤炼 打造高度拟人AI',
    paneInfo: [
      ['4.8', 'MOS评分'],
      [
        <span className="special-font" style={{ fontSize: 24, lineHeight: '32px' }}>
          定制音色
        </span>,
        '自训练',
      ],
    ],
  },
  {
    tag: 'ASR',
    desc: '每日百万次数据 训练语言模型',
    paneInfo: [
      ['97%', '字准率'],
      ['90%', '句准率'],
    ],
  },
  {
    tag: 'NLP',
    desc: '亿级行业知识库 全行业真实场景模型',
    paneInfo: [
      ['95%', '意图准确率'],
      ['92%', '问答准确率'],
    ],
  },
];

const CardForTechnology: FC = ({}) => {
  return (
    <Wrapper className="">
      <ContentLeft>
        {cardLeftInfo.map(({ digitColor, name, bgColor, desc, digit, img }) => {
          return (
            <LeftCard bgColor={digitColor} style={{ backgroundColor: bgColor, backgroundImage: `url(${img})` }}>
              <div className="l-content-card-wrapper">
                <div className="big-number">{digit}</div>
                <div className="left-card-title">{name}</div>
                <div className="left-card-desc">{desc}</div>
              </div>
            </LeftCard>
          );
        })}
      </ContentLeft>
      <ContentRight>
        <div className="content-right-title">AI三大关键指标 业内领先水平</div>
        <RightContentCardWrapper>
          {cardRightInfo.map(({ tag, desc, paneInfo }) => {
            return (
              <RightContentCard>
                <div className="r-content-card-wrapper">
                  <div className="r-content-card-tag">{tag}</div>
                  <div className="r-content-card-desc">{desc}</div>
                  <div className="r-content-data-wrapper">
                    {paneInfo.map(([topText, bottomText]) => {
                      return (
                        <div className="r-content-data">
                          <span className="r-content-data--top">{topText}</span>
                          <span className="r-content-data--bottom">{bottomText}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </RightContentCard>
            );
          })}
        </RightContentCardWrapper>
      </ContentRight>
    </Wrapper>
  );
};

export default CardForTechnology;
