import classNames from 'classnames';
import { FC, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import imgurl from '../../img.url.js';

import { calWidthAndHeight, scrollIntoOffset } from '../lib/utils';
import { AngleRight } from './accordion/AngleRight';
import ByProgressSwiper from './common/ByProgressSwiper';
import { VIDEO_LIST_ID } from '../../src/components/videoList-2023';
import { SOLUTION_ID } from './homepage/version2023/Solution';
import { CustomerId } from './homepage/version2023/CustomerWords2023';

export interface ICarousel {
  onChange?: (index) => void;
  hadnleNav?: (v: any) => void;
}

const BASE_URL = [
  'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/bg/bg-1.png',
  'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/bg/bg-2.png',
  'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/bg/bg-3.png',
  'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/bg/bg-5.png',
  'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/bg/n-bg.png',
];
const BG = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/bg/n-bg.png';
const BG_BALL = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/bg/ball.png';
const BG_BALL_PHONE = imgurl + '/banner背景图.png';
const BG_BALL2_PHONE = imgurl + '/背景色.png';
const BG_BOTTLE = imgurl + '/ban1.png';

const BASE_URL_MOBILE = [
  'https://cdn.byai.com/static/intro/img/retail/mobile_old_banner.png',
  'https://cdn.byai.com/static/intro/img/retail/mobile_banner_1.png',
];

const CarouselWrapper = styled.div`
  width: 100%;
  .m-bg-arror {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    animation: jump 2s infinite;
  }
  @keyframes jump {
    0% {
      transform: translate(-50%, 0px);
    }
    50% {
      transform: translate(-50%, 10px);
    }
    100% {
      transform: translate(-50%, 0px);
    }
  }
  .carousel-body {
    height: 680px;
    min-height: 480px;
    background: #f6fcff;
    position: relative;
    // overflow:hidden;
    .carousel-bg-ball {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-17%, -44%);
      width: 798px;
      opacity: 1;

      @media (max-width: 768px) {

      }
    }
    .carousel-bg-right {
      position: absolute;
      top: 0;
      right: 0;
      width: 582px;
      height: 435px;
      opacity: 1;
      background: url(${imgurl}/carousel_right_new.png) no-repeat;
    }
  }
  .carouselbg2 {
    // background: url(${imgurl}/sybanner2.png) no-repeat;
    // background-size:cover;
    // background-position:left bottom;
    // height:521px;
  }
  .carousel-control-prev {
    display: none;
  }
  .carousel-control-next {
    display: none;
  }
  .no_duration {
  }

  .main-container {
    width: 1200px;
    display: flex;
    flex-direction: column;
    padding-top: 174px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .bg-img-blue {
    position: absolute;
    right: 0px;
    top: 117px;
    img {
      height: 434px;
    }
  }
  .carousel,
  .carousel-inner,
  .carousel-item {
    height: 100%;
    &.active {
      transition: all 0.5s;
    }
  }

  .carousel-indicators {
    width: 1200px;
    margin: 0 auto;
    bottom: ${calWidthAndHeight(134)};
    @media (max-width: 768px) {
      margin-bottom: 20px!important;
    }
  }
  @keyframes mywidth {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  .carousel-indicators {
    justify-content: flex-start;
    > li {
      width: 57px;
      height: 4px;
      background: rgba(65, 70, 79, 0.15);
      border: none;
      &::after {
        border-radius: 2px;
      }
    }
    .active {
      position: relative;
    }
  }
  .carousel-indicators > .active::after {
    widht: 100%;
    content: '';
    position: absolute;
    top: 0%;
    height: 100%;
    left: 0;
    background-color: rgba(43, 88, 249, 1);
    animation-name: mywidth;
    animation-duration: 4s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards;
  }
  .main-title {
    color: #333;
    margin-bottom: 16px;
    font-size: 48px;
    font-weight: 600;
    letter-spacing: 0px;
    line-height: 60px;
    color: rgba(26, 26, 26, 1);
  }
  .main-title1 {
    font-size: 28px;
    font-weight: 600;
    line-height: 40px; 
  }
  .sec-title {
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.91px;
    line-height: 32px;
    color: rgba(51, 51, 51, 1);
    margin-top: 20px;
    margin-bottom: 24px;
  }
  .third-title {
    font-size: 20px;
    font-weight: 400;
    line-height: 32px;
    color: rgba(51, 51, 51, 1);
    margin-bottom: 56px;
  }
  .third-group {
    display: flex;
    margin-bottom: 56px;
    
div {
  width: 128px;
  height: 56px;
  opacity: 1;
  border-radius: 4px;
  background: rgba(43, 88, 249, 0.06);
  
  border: 0.5px solid rgba(43, 88, 249, 1);
  margin-right: 8px;
  font-size: 14px;
font-weight: 400;
letter-spacing: 0.64px;
line-height: 20px;
color: rgba(43, 88, 249, 1);
text-align: center;
padding-top: 9px;
}
  }
  .jump-group {
    display: flex;
    gap: 16px;
    margin-bottom: 56px;
  }
  .jump-group-item {
    cursor: pointer;
    width: 160px;
    box-sizing: border-box;
    background: #e7f9fc;
    padding: 16px;
    // border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 8px;
    border: 1px solid #e7f9fc;
    box-sizing: border-box;
    &.hover {
      border: 1px solid #00c8bd;
    }
    @media (max-width: 768px) {
      border-color: transparent;
    }
  }
  .carousel-body-mobile {
    height: calc(100vh - 52px);
    .carousel-btn.carousel-btn.carousel-btn {
      margin: 0;
      margin-top: 24px;
      font-family: PingFangSC-Medium, PingFang SC;
      width: 132px;
      height: 40px;
      line-height: 40px;
      border-radius: 5px;
      font-size: 16px;
      > svg {
        top: -2px;
        height: 14px;
      }
    }
  }
  .main-top-wrapper {
    width: 100%;
    padding: 0 48px;
    margin-bottom: 24px;
  }
  .main-title-m {
    font-size: 36px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #333333;
    line-height: 47px;
  }
  .carousel-btn-m {
    width: 132px;
    height: 40px;
    background: #2b58f9;
    border-radius: 5px;
  }
  .carousel-m-wrapper {
    padding-top: 124px;
    height: 100%;
    width: 100%;
    background: no-repeat center / cover
        url(https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/mobile/bg/%E9%A6%96%E5%9B%BE%E8%83%8C%E6%99%AF.png),
      no-repeat bottom / 100% auto
        url(https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/mobile/bg/%E9%A6%96%E5%9B%BE.png);
    .jump-group-item {
      width: 100%;
      height: 104px;
      background: #e7f9fc;
      border-radius: 8px;
      padding: 16px;
      boder: 1px solide #e7f9fc;
    }
    .jump-group-item-title {
      font-family: PingFangSC-Regular, PingFang SC;
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 0px;
      line-height: 20px;
      color: #333333;
    }
    .jump-group-item-desc {
      height: 22px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      line-height: 22px;
    }
  }

  .jump-group-item-title {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 20px;
    // margin-bottom: 8px;
  }

  .jump-group-item-desc {
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    line-height: 22px;
  }

  .sub-title {
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 1px;
    color: #ffffff;
    font-family: PingFangSC-Light, PingFang SC;
  }

  .carousel-btn {
    font-family: PingFangSC-Medium, PingFang SC;

    text-align: center;
    cursor: pointer;
    width: 132px;
    height: 48px;
    line-height: 48px;
    opacity: 1;
    border-radius: 5.33px;
    background: rgba(43, 88, 249, 1);
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0px;
    color: rgba(255, 255, 255, 1);
    &:hover {
      svg {
        animation: lrmove 3s infinite both;
      }
    }
    svg {
      display: inline-block;
      position: relative;
      top: -2px;
      height: 14px;
    }

    @keyframes lrmove {
      0% {
        transform: translate(0);
      }
      10% {
        transform: translate(4px);
      }
      20% {
        transform: translate(-2px);
      }
      30% {
        transform: translate(4px);
      }
      40% {
        transform: translate(-2px);
      }
      50% {
        transform: translate(0);
      }
    }
  }

  @media (max-width: 768px) {
    .sec-title {
      margin-bottom: 24px;
    }

    .third-group {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 24px;
      div {
        font-size: 11px;
        font-weight: 400;
        letter-spacing: 0.5px;
        height: 39px;
        line-height: 20px;
        color: rgba(43, 88, 249, 1);
        width: 48%;
        margin-bottom: 5px;
      }
      div:nth-child(2), div:nth-child(4) {
        margin-right: 0;
      }
      div:nth-child(3), div:nth-child(4) {
        line-height: 18px;
        margin-bottom: 0;
      }
    }

    .main-title1 {
      font-size: 28px;
      font-weight: 600;
      line-height: 30px; 
    }

    .third-title {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0px;
    }

    .sec-title {
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 20.27px;
      margin-bottom: 24px;
    }

    .carousel-indicators {
      width: 100%;
      margin: 0 auto;
      bottom: 0;
      justify-content: center;
    }

    .bg-img-blue-phone {
      // position: relative;
      img {
        // height: 279px;
      }
    }

    .carousel-body {
      height: 710px;
      min-height: 480px;
      background: #f6fcff;
      position: relative;
      // overflow:hidden;
      .carousel-bg-ball {
        transform: none;
        width: 100%;
        height: 710px;
      }
    }

    .main-container {
      width: 100%;
      padding-left: 24px;
      padding-right: 24px;
      padding-top: 94px;
      color: 'rgba(51, 51, 51, 1)'
    }

    .carousel-body {
      // height: ${calWidthAndHeight(580)};
      height: 711px;
      // text-align: center;
    }

    .carousel-item {
      // padding: ${calWidthAndHeight(96)} 0 0 0 !important;
    }

    .main-title {
      // font-size: ${calWidthAndHeight(48)};
      font-size: 36px;
      font-family: PingFangSC-Medium,PingFang SC;
      font-weight: 500;
      color: #333333;
      // line-height: ${calWidthAndHeight(60)};
    }

    .sub-title {
      font-size: ${calWidthAndHeight(20)};
      line-height: ${calWidthAndHeight(32)};
      margin: ${calWidthAndHeight(8)} 0 ${calWidthAndHeight(20)};
    }

    .carousel-btn {
      // margin: ${calWidthAndHeight(32)} auto;
      margin-bottom: 86px;
      height: 40px;
      line-height: 40px;
    }
  }
`;

const QuickArea = styled.div`
  width: 1200px;
  height: 128px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: -64px;
  position: relative;
  z-index: 1;
  > div {
    display: flex;
    cursor: pointer;
    justify-content: center;
    &:hover {
      img {
        margin-top: -14px;
      }
    }
    img {
      margin-top: -6px;
      width: 60px;
      height: 60px;
      transition: all 0.3s;
    }
    .content {
      margin-left: 8px;
      width: 170px;
      div:first-child {
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 24px;
        color: #333333;
        text-align: left;
        vertical-align: top;
      }
      div:last-child {
        margin-top: 4px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 16px;
        color: #5a5a5a;
        text-align: left;
        vertical-align: top;
      }
    }
  }
`;

const QuickAreaPhone = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 1;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 14.4px;
  // width: 96%;
  flex-wrap: wrap;
  margin: 0 8px;
  padding: 16px 0;
  background: #ffffff;
  border-radius: 10px;
  position: absolute;


  > div {
    display: flex;
    cursor: pointer;
    justify-content: center;
    width: 45%;

    img {
      margin-top: -6px;
      width: 36px;
      height: 36px;
    }
    .content {
      margin-left: 8px;
      div:first-child {
        font-size: 12px;
        font-weight: 500;
        letter-spacing: 0px;
        line-height: 14.4px;
        color: #333333;
        text-align: left;
        vertical-align: top;
      }
      div:last-child {
        margin-top: 4px;
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 12px;
        color: #5a5a5a;
        text-align: left;
        vertical-align: top;
      }
    }
  }
  div:nth-child(3) {
    margin-top: 23px;
  }
  div:nth-child(4) {
    margin-top: 23px;
  }
`;

const jumpData = [
  { title: '数据智能赋能用户运营策略', desc: 'ROI导向', jumpTarget: '#' + VIDEO_LIST_ID },
  { title: '以构建长期信任关系为运营导向', desc: '最佳应用实践', jumpTarget: '#' + SOLUTION_ID },
  { title: '长期服务企业和政府头部品牌和机构', desc: '定义先进AI', jumpTarget: '#' + CustomerId },
];

const bannerList = [
  { img: `${imgurl}/banner1_icon1.png`, title: 'AI驱动用户运营', desc: '国内领先的数智化用户运营解决方案服务商' },
  { img: `${imgurl}/banner1_icon2.png`, title: '助力构建用户信任关系', desc: '赋能企业业务增长及政府基层服务治理' },
  { img: `${imgurl}/banner1_icon3.png`, title: '政府认定准独角兽企业', desc: '连续获评杭州市准独角兽、未来独角兽企业' },
  { img: `${imgurl}/banner1_icon4.png`, title: '各行业头部机构服务商', desc: '七年深耕，帮助全行业头部机构数智化转型' },
];

export const IndustryCarousel: FC<ICarousel> = ({ onChange, hadnleNav }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [index, setIndex] = useState(0);
  const handleSelect = selectedIndex => {
    setIndex(selectedIndex);
    hadnleNav(selectedIndex);
  };
  return (
    <CarouselWrapper style={{ zIndex: 3, position: 'relative' }}>
      <Visible md lg xl xxl xxxl>
        <div
          className={classNames('carousel-body', {
            carouselbg2: index == 1,
          })}>
          {<img className="carousel-bg-ball" src={BG_BALL} />}
          <div className="carousel-bg-right"></div>
          <Carousel style={{ width: '100%' }} interval={333000} fade activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="no_duration" key={1}>
              <div className="main-container">
                <div className="main-title">智能用户运营领域创领者</div>
                <div style={{ marginBottom: '56px' }} className="sec-title">
                  用AI助力构建用户长期信任关系
                </div>
                <div style={{ width: '644px', height: '496px' }} className="bg-img-blue">
                  <img style={{ height: '100%' }} src={imgurl + '/sy-banner1.png'} alt="" />
                </div>

                <div
                  className="carousel-btn"
                  onClick={() => {
                    window.open(`/form?formType=1`);
                  }}>
                  立即体验
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item className="no_duration" key={2}>
              <div className="main-container">
                <div className="main-title1">百应科技荣获</div>
                <div style={{lineHeight: '48px', marginTop: '8px'}} className="main-title">浙江省“专精特新”中小企业称号</div>
                <div style={{ marginBottom: '16px', lineHeight: '48px' }}  className="third-title" style={{ marginBottom: '16px' }}>
                浙江省经济和信息化厅公示｜2023年度第一批企业名单
                </div>

                <div className="carousel-btn" onClick={() => window.open('https://mp.weixin.qq.com/s/Ebu43ZcMV6ted0f55efIRg')}>
                  点击查看
                </div>
                <div className="bg-img-blue">
                  <img style={{width: '644px', height: '496px'}} src={imgurl + '/sy-banner3.png'} alt="" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item
              className="no_duration "
              key={3}
              onClick={() => {
                // window.open(`https://mp.weixin.qq.com/s/igc5Z-Lu8AeoSoqJ3ZZDYw`);
              }}>
              <div className="main-container">
                <div className="main-title1">百应科技荣誉入选</div>
                <div style={{lineHeight: '48px', marginTop: '8px'}} className="main-title">
                   国家人工智能
                </div>
                <div style={{ marginBottom: '16px', lineHeight: '48px' }} className="main-title">创新应用先导区“智赋百景”</div>
                <div className="third-title">工信部公示｜「城市管理」领域应用场景的优秀技术提供单位</div>

                <div
                  className="carousel-btn"
                  onClick={() => {
                    window.open(`https://mp.weixin.qq.com/s/igc5Z-Lu8AeoSoqJ3ZZDYw`);
                  }}>
                  点击查看
                </div>
                <div className="bg-img-blue">
                  <img style={{ width: '610px' }} src={imgurl + '/sy-banner2.png'} alt="" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="no_duration " key={3}>
              <div className="main-container">
                <div className="main-title">四大人工智能<br></br>关键技术标准编写单位</div>
               <div className='third-group'>
                <div>大规模训练技术模型开发</div>
                <div>大规模训练技术模型能力</div>
                <div>智能对话平台<br></br>开发及服务能力</div>
                <div>智能客服<br />系统服务</div>
               </div>

                <div
                  className="carousel-btn"
                  onClick={() => {
                    window.open(`/form?formType=1`);
                  }}>
                  点击查看
                </div>
                <div className="bg-img-blue">
                  <img style={{width: '644px', height: '496px'}} src={imgurl + '/sy-banner4.png'} alt="" />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
          <QuickArea>
            {bannerList.map((item, index) => {
              return (
                <div>
                  <img src={item.img} alt="" />
                  <div className="content">
                    <div>{item.title}</div>
                    <div>{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </QuickArea>
        </div>
      </Visible>
      <Visible xs sm>
        <div
          className={classNames('carousel-body')}>
          {<img className="carousel-bg-ball" src={BG_BALL_PHONE} />}
          <div className="carousel-bg-right"></div>
          <Carousel style={{ width: '100%' }} interval={333000} fade activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className="no_duration" key={1}>
              <div className="main-container">
                <div className="main-title-m">智能用户</div>
                <div className="main-title-m">运营领域创领者</div>
                <div className="sec-title"
                  style={{ marginBottom : '14px' }}
                >
                  用AI助力构建用户长期信任关系
                </div>
                <div
                  className="carousel-btn"
                  onClick={() => {
                    window.open(`/form?formType=1`);
                  }}>
                  预约体验
                </div>
                <div style={{ width: '375px',height: '279px' }} className="bg-img-blue-phone">
                  <img style={{ height: '100%' }} src={imgurl + '/sy-banner1.png'} alt="" />
                </div>
              </div>
            </Carousel.Item>

            <Carousel.Item className="no_duration" key={2}>
              <div className="main-container">
                <div className="main-title1" style={{fontSize: '16px', fontWeight: '500', letterSpacing: '0px',lineHeight: '24px'}}>百应科技荣获</div>
                <div style={{fontSize: '36px', fontWeight: '500', letterSpacing: '0px',lineHeight: '47px', marginBottom: '14px'}} className="main-title">浙江省“专精特新”中小企业称号</div>
                <div  style={{fontSize: '14px', fontWeight: '400', letterSpacing: '0px',lineHeight: '24px', marginBottom: '24px', lineHeight: '20.27px' }}  className="third-title">
                浙江省经济和信息化厅公示｜2023年度第一批企业名单
                </div>
                <div style={{marginBottom: '33px',}} className="carousel-btn" onClick={() => window.open('https://mp.weixin.qq.com/s/Ebu43ZcMV6ted0f55efIRg')}>
                  点击查看
                </div>
                <div style={{ width: '100%',height: '279px' }} className="bg-img-blue-phone">
                  <img style={{ height: '100%' }} src={imgurl + '/sy-banner3.png'} alt="" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item
              className="no_duration "
              key={3}
              onClick={() => {
                // window.open(`https://mp.weixin.qq.com/s/igc5Z-Lu8AeoSoqJ3ZZDYw`);
              }}>
              <div className="main-container">
                <div className="main-title1" style={{fontSize: '16px', fontWeight: '500', letterSpacing: '0px',lineHeight: '24px'}}>百应科技荣誉入选</div>
                <div style={{fontSize: '36px', fontWeight: '500', letterSpacing: '0px',lineHeight: '47px', marginTop: '8px', marginBottom: '14px'}} className="main-title">
                  国家人工智能创新应用先导区“智赋百景”
                </div>
                <div style={{ fontSize: '14px', fontWeight: '400', letterSpacing: '0px',marginBottom: '24px', lineHeight: '20.27px' }} className="third-title">工信部公示｜「城市管理」领域应用场景的优秀技术提供单位</div>
                <div
                  className="carousel-btn"
                  style={{ marginBottom: '33px' }}
                  onClick={() => {
                    window.open(`https://mp.weixin.qq.com/s/igc5Z-Lu8AeoSoqJ3ZZDYw`);
                  }}>
                  点击查看
                </div>
                <div className="bg-img-blue-phone">
                  <img style={{ width: '610px' }} src={imgurl + '/sy-banner2.png'} alt="" />
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item className="no_duration " key={3}>
              <div className="main-container">
                <div style={{ marginBottom: '14px', lineHeight: '38px'}} className="main-title-m">四大人工智能关键技术标准编写单位</div>
                <div className='third-group'>
                    <div style={{ padding: '0', lineHeight: '36px' }}>大规模训练技术模型开发</div>
                    <div style={{ padding: '0', lineHeight: '36px' }}>大规模训练技术模型能力</div>
                    <div style={{ padding: '0' ,lineHeight: '36px' }}>智能对话平台开发及服务能力</div>
                    <div style={{ padding: '0', lineHeight: '36px' }}>智能客服系统服务</div>
                </div>

                <div
                  style={{ marginBottom: '22px' }}
                  className="carousel-btn"
                  onClick={() => {
                    window.open(`/form?formType=1`);
                  }}>
                  点击查看
                </div>
                <div className="bg-img-blue-phone">
                  <img src={imgurl + '/sy-banner4.png'} alt="" />
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
          {/* {<img style={{ position: 'absolute' }} src={BG_BALL2_PHONE} />} */}
          <QuickAreaPhone>
            {bannerList.map((item, index) => {
              return (
                <div>
                  <img src={item.img} alt="" />
                  <div className="content">
                    <div>{item.title}</div>
                    <div>{item.desc}</div>
                  </div>
                </div>
              );
            })}
          </QuickAreaPhone>
        {/* <div className="carousel-body-mobile">
          <div className="carousel-m-wrapper">
            <div className="main-top-wrapper">
              <div className="main-title-m">百应AI</div>
              <div className="main-title-m">让增长持续发生</div>
              <div
                className="carousel-btn"
                onClick={() => {
                  window.open(`/form?formType=1`);
                }}>
                免费体验 <AngleRight />
              </div>
            </div>
            <ByProgressSwiper
              newProgress={true}
              initialSlide={1}
              contentPadding="50px"
              progressPadding="0px"
              previewWidth="84px">
              {jumpData.map(({ title, desc, jumpTarget }, i) => (
                // 算垂直百分比时应该用对应(margin或padding)/父元素width，得到其占比
                <div onClick={() => {}} className={classNames('jump-group-item')}>
                  <div className="jump-group-item-title">{title}</div>
                  <div className="jump-group-item-desc">{desc}</div>
                </div>
              ))}
            </ByProgressSwiper>
            <img
              onClick={() => {
                scrollIntoOffset(jumpData[0].jumpTarget, 50);
              }}
              src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/mobile/bg/arror.png"
              className="m-bg-arror"
            />
          </div>
        </div> */}
      </Visible>
    </CarouselWrapper>
  );
};
