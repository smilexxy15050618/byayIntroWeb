import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
padding-top: 100px;
padding-bottom: 100px;
background: linear-gradient(180deg, rgba(226, 243, 255, 1) 0%, rgba(215, 221, 255, 1) 100%);
  .title {
    font-family: 'PingFangSC';
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 60px;
    color: rgba(26, 26, 26, 1);
    text-align: center;
    margin-bottom: 16px;
  }
  .desc {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.91px;
    line-height: 32px;
    color: rgba(51, 51, 51, 1);
    text-align: center;
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
  }
  video {
    display: block;
    width: 1200px;
    height: 651px;
  }
`

export const IndustryCarousel = () => {
    const setForm = () => {
        const url = retailUrl(`/form`);
        window.open(url);
      };
    return (
        <Wrapper>
            <div className='title'>
            策略智能与自动化
            </div>
            <div className='desc'>策略自动生成、数据验证、自动化运行,实现目标人群的精准触达,提升关键指标和运营效率</div>
            <div className="jumpbtn" onClick={() => setForm()}>
                预约体验
            </div>
            <video></video>
        </Wrapper>
    )
}