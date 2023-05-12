import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js';
import { Visible } from 'react-grid-system';

const Wrapper = styled.div`
padding-top: 60px;
padding-bottom: 100px;
background: linear-gradient(180deg, rgba(226, 243, 255, 1) 0%, rgba(215, 221, 255, 1) 100%);
@media (max-width: 768px) {
  padding-bottom: 40px;
}
.title {
    margin-top: 100px;
    font-size: 48px;
    line-height: 60px;
    font-weight: 600;
    color: rgba(26,26,26,1);
    text-align: center;
    margin-bottom: 16px;
    @media (max-width: 768px) {
      font-size: 32px;
      font-weight: 500;
      margin-top: 71px;
    }
  }
  .desc {
    margin: 10px auto 0;
    font-size: 20px;
    line-height: 32px;
    font-weight: 400;
    color: rgba(51,51,51,1);
    text-align: center;
    @media (max-width: 768px) {
      width:87%;
      font-size: 16px;
      font-weight: 400;
      line-height: 26px;
    }
  }
  .jumpbtn {
    display: block;
    background: #2B58F9;
    width: 132px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    color: #ffffff;
    border-radius: 5.33px;
    cursor: pointer;
    margin: 16px auto 32px;
    &:hover {
      background: rgba(84, 127, 255, 1);
    }
    &:active {
      background: rgba(25, 60, 212, 1);
    }
    @media (max-width: 768px) {
      width: 122px;
      height: 40px;
      line-height: 40px;
      margin: 24px auto 40px;
    }
  }
  .banner {
    display: block;
    width: 83.33%;
    height: 651px;
    margin: 0 auto;
    background: url(${imgurl}/enhance_banner.svg);
    background-size: 100% 100%;
    @media (max-width: 768px) {
      width: calc(100vw - 18px);
      height: 201px;
    }
  }
`

export const IndustryCarousel = () => {
  return (
    <Wrapper>
      <div className='title'>
        增强型用户画像洞察
      </div>
      <Visible md lg xl xxl xxxl>
        <div className='desc'>利用人工智能和自然语言处理，感知客户意向及情绪，构建完善、动态、非结构化数据感知生成的用户标签体系</div>
        <div className="jumpbtn" onClick={() => window.open('/form?formType=1')}>
          预约体验
        </div>
        <div className='banner'></div>
      </Visible>
      <Visible xs sm>
      <div className='desc'>利用人工智能和自然语言处理，感知客户意向及情绪，构建完善、动态、非结构化数据感知生成的用户标签体系</div>
        <div className="jumpbtn" onClick={() => window.open('/form?formType=1')}>
          预约体验
        </div>
        <div className='banner'></div>
      </Visible>

    </Wrapper>
  )
}