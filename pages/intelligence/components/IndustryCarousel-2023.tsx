import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import imgurl from '../../../img.url.js'
import { Visible } from 'react-grid-system';
import BannerWhite from './BannerWhite';
import { TextArea } from '../../../src/components/common/BannerTextElements';

const Wrapper = styled.div`
padding-top: 60px;
padding-bottom: 100px;
@media (max-width: 768px) {
  padding-bottom: 40px;
 background: linear-gradient(180deg, rgba(226, 243, 255, 1) 0%, rgba(215, 221, 255, 1) 100%); 

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
      width:337px;
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
  video {
    display: block;
    width: 1200px;
    // height: 651px;
    margin: 0 auto;
   margin-top: 50px;
    @media (max-width: 768px) {
      width: calc(100vw - 16px);
    }
  }
`
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
const PREFIX = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023';
const BANNER_BG = `${PREFIX}/multimodal-banner-bg.svg`;
export const IndustryCarousel = () => {
  useEffect(() => {
    try {
      let img =  document.querySelector('.bannerImg').querySelector('img');
    const video = document.createElement('video');
    video.src = imgurl + '/20230427-103948.mp4'
    video.controls = true;
    video.muted = true;
    video.poster =  `${imgurl}/intelligence_banner.png`
    // img.parentElement.replaceChild(video,img)
    setTimeout(() => {
      img.parentElement.replaceChild(video,img)
    },2000);

    // document.querySelector('.bannerImg').querySelector('img').parentElement('div')
    setTimeout(() => {
      
      try {
        video.play();
      }
      catch(e) {
        console.log(e)
      }
    }, 5000);
    } catch (error) {
      
    }

    try {
      const video = document.querySelector('video');
      // img.parentElement.replaceChild(video,img)
     
      setTimeout(() => {
        
        try {
          video.play();
        }
        catch(e) {
          console.log(e)
        }
      }, 5000);
    } catch (error) {
      
    }
  })
  return (
    <Wrapper>
      <Visible md lg xl xxl xxxl>

       <BannerWhite 
            className='bannerImg'
            background={[
              `url(${BANNER_BG}) center, linear-gradient(180deg, rgba(226, 243, 255, 1) 0%, rgba(215, 221, 255, 1) 100%);`,
              'linear-gradient(180deg, rgba(226, 243, 255, 1) 0%, rgba(215, 221, 255, 1) 100%);',
            ]}
            pcImgs={[
              {
                src: `${imgurl}/intelligence_banner.png`,
                style: { width: '1200px', left: 0, top: 50 },
                className: ['animate__fadeInUp', 'animate__ahead_300ms'],
              },
            ]}
            mobileImg={imgurl + '/intelligence_banner.png'}>
            <TextArea spaces={['', '']}>
              <BigTitle>策略智能与自动化</BigTitle>
              <Desc>
              策略自动生成、数据验证、自动化运行，实现目标人群的精准触达，提升关键指标和运营效率
              </Desc>
              <BlueBtn onClick={() => window.open('/form?formType=1')}>立即体验</BlueBtn>
            </TextArea>
          </BannerWhite>
      </Visible>
      {/* <div className='title'>
        策略智能与自动化
      </div>
      <Visible md lg xl xxl xxxl>
        <div className='desc'>策略自动生成、数据验证、自动化运行，实现目标人群的精准触达，提升关键指标和运营效率</div>
        <div className="jumpbtn" onClick={() => window.open('/form?formType=1')}>
          立即体验
        </div>
        <video
          muted
          controls
          src={imgurl + '/20230427-103948.mp4'}
          poster={imgurl + '/intelligence_banner.png'}
        />
      </Visible> */}
      <Visible xs sm>
      <div className='title'>
        策略智能与自动化
      </div>
      <div className='desc'>策略自动生成、数据验证、自动化运行，实现目标人群的精准触达，提升关键指标和运营效率</div>
        <div className="jumpbtn" onClick={() => window.open('/form?formType=1')}>
          立即体验
        </div>
        <video
          muted
          controls
          src={imgurl + '/20230427-103948.mp4'}
          poster={imgurl + '/intelligence_banner.png'}
        />
      </Visible>
    </Wrapper>
  )
}