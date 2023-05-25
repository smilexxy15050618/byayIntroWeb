import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js';
import { Visible } from 'react-grid-system';
import BannerWhite from './BannerWhite';
import { TextArea } from '../../../src/components/common/BannerTextElements';
const Wrapper = styled.div`


`
const PREFIX = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023';
const BANNER_BG = `${PREFIX}/multimodal-banner-bg.svg`;
const BigTitle = styled.div`
  margin-top: 100px;
  font-size: 48px;
  line-height: 60px;
  font-weight: 600;
  color: rgba(26, 26, 26, 1);
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 32px;
    line-height: 60px;
    margin-bottom: 8px !important;
  }
`;

const Desc = styled.div`
  margin-top: 6px;
  font-size: 20px;
  line-height: 32px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  @media (max-width: 768px) {
    padding-top: 8px;
    text-align: center;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 24px !important;
  }
`;

const BlueBtn = styled.div`
  margin: 48px auto 0;
  width: 132px;
  height: 48px;
  border-radius: 5.33px;
  background: rgba(43, 88, 249, 1);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 48px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  cursor: pointer;
`;
export const IndustryCarousel = () => {
  return (
    <Wrapper>
      
  
      <Visible md lg xl xxl xxxl>
        <BannerWhite
            background={[
              `url(${BANNER_BG}) center, linear-gradient(180deg, rgba(226, 243, 255, 1) 0%, rgba(215, 221, 255, 1) 100%);`,
              'linear-gradient(180deg, rgba(226, 243, 255, 1) 0%, rgba(215, 221, 255, 1) 100%);',
            ]}
            pcImgs={[
              {
                src: `${PREFIX}/enhance_banner.svg`,
                style: { width: '1200px', left: 0, top: 50 },
                className: ['animate__fadeInUp', 'animate__ahead_300ms'],
              },
            ]}
            mobileImg={`${PREFIX}/enhance_banner.svg`}>
            <TextArea spaces={['', '']}>
              <BigTitle>增强型用户画像洞察</BigTitle>
              <Desc>
              利用人工智能和自然语言处理，感知客户意向及情绪，构建完善、动态、非结构化数据感知生成的用户标签体系
              </Desc>
              <BlueBtn onClick={() => window.open('/form?formType=1')}>立即体验</BlueBtn>
            </TextArea>
          </BannerWhite>
      </Visible>
      <Visible xs sm>
      <BannerWhite
            background={[
              `url(${BANNER_BG}) center, linear-gradient(180deg, rgba(226, 243, 255, 1) 0%, rgba(215, 221, 255, 1) 100%);`,
              'linear-gradient(180deg, rgba(226, 243, 255, 1) 0%, rgba(215, 221, 255, 1) 100%);',
            ]}
            pcImgs={[
              {
                src: `${PREFIX}/enhance_banner.svg`,
                style: { width: '1200px', left: 0, top: 50 },
                className: ['animate__fadeInUp', 'animate__ahead_300ms'],
              },
            ]}
            mobileImg={`${PREFIX}/enhance_banner.svg`}>
            <TextArea spaces={['', '']}>
              <BigTitle>增强型用户画像洞察</BigTitle>
              <Desc>
              利用人工智能和自然语言处理，感知客户意向及情绪，构建完善、动态、非结构化数据感知生成的用户标签体系
              </Desc>
              <BlueBtn onClick={() => window.open('/form?formType=1')}>立即体验</BlueBtn>
            </TextArea>
          </BannerWhite>
      </Visible>

    </Wrapper>
  )
}