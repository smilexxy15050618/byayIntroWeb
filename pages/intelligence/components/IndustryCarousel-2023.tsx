import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'

const Wrapper = styled.div`
padding-top: 60px;
padding-bottom: 100px;
background: linear-gradient(180deg, rgba(226, 243, 255, 1) 0%, rgba(215, 221, 255, 1) 100%);
  .title {
    margin-top: 100px;
    font-size: 48px;
    line-height: 60px;
    font-weight: 600;
    color: rgba(26,26,26,1);
    text-align: center;
    margin-bottom: 16px;
  }
  .desc {
    margin-top: 10px;
    font-size: 20px;
    line-height: 32px;
    font-weight: 400;
    color: rgba(51,51,51,1);
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
    margin: 0 auto;
  }
`

export const IndustryCarousel = () => {
    useEffect(()=> {
      setTimeout(() => {
        var video = document.querySelector('video');
        video.play();
      }, 5000);
    })
    return (
        <Wrapper>
            <div className='title'>
            策略智能与自动化
            </div>
            <div className='desc'>策略自动生成、数据验证、自动化运行,实现目标人群的精准触达,提升关键指标和运营效率</div>
            <div className="jumpbtn" onClick={() => window.open('/form?formType=1')}>
                预约体验
            </div>
            <video
            muted
            controls
            src={imgurl+'/20230427-103948.mp4'}
            poster={imgurl+'/intelligence_banner.png'}
          />
        </Wrapper>
    )
}