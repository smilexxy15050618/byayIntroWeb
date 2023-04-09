import classNames from 'classnames';
import { FC, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { calWidthAndHeight, scrollIntoOffset } from '../lib/utils';
import { AngleRight } from './accordion/AngleRight';
import ByProgressSwiper from './common/ByProgressSwiper';
import { ADVANTAGE_ID } from './homepage/version2023/advantage';
import { SOLUTION_ID } from './homepage/version2023/Solution';
import { CustomerId  } from './homepage/version2023/CustomerWords2023';

export interface ICarousel {
  onChange?: (index) => void;
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
const BG_BOTTLE = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/bg/bottle.png';


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
    height: 660px;
    min-height: 480px;
    // max-height: calc(100vh - 144px);
    // background: center / cover no-repeat url(${BG}) !important;
    background:#F6FCFF;
    position: relative;
    overflow:hidden;
    .carousel-bg-ball {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(-17%,-44%);
      width: 798px;
      opacity: 1;
    }
    .carousel-bg-right{
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(47%,-74%);
      width: 977px;
      height: 977px;
      opacity: 1;
      background: radial-gradient(50% 50%, rgba(43, 88, 249, 0.3) 0%, rgba(43, 88, 249, 0) 100%);
      filter: blur(100px);
    }
  }
  .main-container {
    max-width: 1200px;
    margin: 0 auto ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // padding-top:174px;
    background: right -80px bottom 30px / auto 540px no-repeat url(${BG_BOTTLE});
  }

  .carousel,
  .carousel-inner,
  .carousel-item {
    height: 100%;
  }

  .carousel-item {
    float: none;
  }

  .carousel-indicators {
    bottom: ${calWidthAndHeight(35)};
  }
  @keyframes mywidth{
    from{
      width:0;
    }
    to{
      width:100%;
    }
  }
  .carousel-indicators{
    > li{
      width:90px;
      height:1px;
      background:rgba(65,70,79,.15);
      border:none;
    }
    .active{
    position:relative;
    }
  }
  .carousel-indicators>.active::after{
    widht:100%;
    content:'';
    position:absolute;
    top:-100%;
    height:200%;
    left:0;
    background-color: rgba(43, 88, 249, 1);
    animation-name: mywidth;
    animation-duration: 4s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode:forwards;
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
  .sec-title{
    font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.91px;
  line-height: 32px;
  color: rgba(51, 51, 51, 1);
  margin-bottom:24px;
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
    background: #E7F9FC;
    padding: 16px;
    // border: 1px solid rgba(255, 255, 255, 1);
    border-radius: 8px;
    border:1px solid #E7F9FC;
    box-sizing:border-box;
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
    font-size: 40px;
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
      background: #E7F9FC;
      border-radius: 8px;
      padding: 16px;
      boder:1px solide #E7F9FC;
    }
    .jump-group-item-title {
      font-family: PingFangSC-Regular, PingFang SC;
      font-size: 14px;
      font-weight: 300;
      letter-spacing: 0px;
      line-height: 20px;
      color: rgba(51, 51, 51, 1);
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
    line-height:48px;
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
    .carousel-body {
      height: ${calWidthAndHeight(638)};
      text-align: center;
    }

    .carousel-item {
      padding: ${calWidthAndHeight(96)} 0 0 0 !important;
    }

    .main-title {
      font-size: ${calWidthAndHeight(48)};
      line-height: ${calWidthAndHeight(60)};
    }

    .sub-title {
      font-size: ${calWidthAndHeight(20)};
      line-height: ${calWidthAndHeight(32)};
      margin: ${calWidthAndHeight(8)} 0 ${calWidthAndHeight(20)};
    }

    .carousel-btn {
      margin: ${calWidthAndHeight(32)} auto;
    }
  }
`;

const jumpData = [
  { title: '数据智能赋能用户运营策略', desc: 'ROI导向', jumpTarget: '#' + CustomerId },
  { title: '以构建2C长期信任关系为运营导向', desc: '最佳应用实践', jumpTarget: '#' + SOLUTION_ID },
  { title: '长期服务企业和政府头部品牌和机构', desc: '定义先进AI', jumpTarget: '#' + CustomerId },
];

export const IndustryCarousel: FC<ICarousel> = ({ onChange }) => {
  const [currIndex, setCurrIndex] = useState(0);
  return (
    <CarouselWrapper style={{ zIndex: 3, position: 'relative' }}>
      <Visible md lg xl xxl xxxl>
        <div className="carousel-body">
          <img className="carousel-bg-ball" src={BG_BALL} />
          <div className="carousel-bg-right"  ></div>

          <Carousel fade style={{ width: '100%' }} 
          interval={4000}
          >
            <Carousel.Item className="main-container">
              <div className="main-title">百应智能用户运营平台</div>
              <div className='sec-title'>用AI助力构建ToC长期信任关系</div>
              <div className="jump-group">
                {jumpData.map(({ title, desc, jumpTarget }, i) => {
                  return (
                    <div
                      onMouseEnter={() => {
                        setCurrIndex(i);
                      }}
                      className={classNames('jump-group-item', {
                        hover: i === currIndex,
                      })}
                      onClick={() => {
                        const node = document.querySelector(jumpTarget);
                        if (node) {
                          node.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}>
                      <div className="jump-group-item-title">{title}</div>
                      {/* <div className="jump-group-item-desc">{desc}</div> */}
                    </div>
                  );
                })}
              </div>
              <div
                className="carousel-btn"
                onClick={() => {
                  window.open(`/form?formType=1`);
                }}>
                预约体验
              </div>
            </Carousel.Item>

{/* 
            <Carousel.Item >
                123123
            </Carousel.Item> */}
          </Carousel>
        </div>
      </Visible>
      <Visible xs sm>
        <div className="carousel-body-mobile">
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
                <div
                  onClick={() => {
                    setCurrIndex(i);
                    scrollIntoOffset(jumpTarget, 50);
                    // const node = document.querySelector(jumpTarget);
                    // if (node) {
                    //   node.scrollIntoView({ behavior: 'smooth' });
                    // }
                  }}
                  className={classNames('jump-group-item')}>
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
        </div>
      </Visible>
    </CarouselWrapper>
  );
};
