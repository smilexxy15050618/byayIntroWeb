import classNames from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import JumpBtn from '../../components/JumpBtn';
import { useTime } from '../../lib/hooks-utils';
import { calWidthAndHeight, isPc, retailUrl } from '../../lib/utils';
import imgurl from '../../../img.url.js'

export interface ICarousel {
  onChange?: (index) => void;
  dataList: any[];
}

const BASE_URL = [
  'https://cdn.byai.com/static/intro/img/retail/banner.png',
  'https://cdn.byai.com/static/intro/img/retail/banner_2.png',
  'https://cdn.byai.com/static/intro/img/retail/banner_3.png',
  'https://cdn.byai.com/static/intro/img/retail/pc_618.png',
  'https://cdn.byai.com/static/intro/img/retail/%E5%8D%83%E5%9F%9F%E9%9B%B6%E5%94%AEbanner.png',
  // 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/banner_4.png',
  'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mall/banner.png',
];

const BASE_URL_MOBILE = [
  'https://cdn.byai.com/static/intro/img/retail/mobile_banner_1.png',
  'https://cdn.byai.com/static/intro/img/retail/mobile_banner_2.png',
  'https://cdn.byai.com/static/intro/img/retail/mobile_banner_3.png',
  'https://cdn.byai.com/static/intro/img/retail/mobile_618.png',
  'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/intro/img/retail/mobile_banner_4.png',
];

const SubTitle = styled.div`
width: 504px;
height: 96px;
opacity: 1;
/** 文本1 */
font-size: 20px;
font-weight: 400;
letter-spacing: 0.91px;
line-height: 32px;
color: rgba(51, 51, 51, 1);
margin-bottom: 40px;
text-align: justify;
`;

const Title = styled.div`
font-size: 48px;
font-weight: 600;
letter-spacing: 0px;
line-height: 60px;
color: rgba(26, 26, 26, 1);
margin-bottom: 16px;
`;

const BgContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  .jumpbtn {
    display: inline-block;
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
    &:hover {
      background: rgba(84, 127, 255, 1);
    }
    &:active {
      background: rgba(25, 60, 212, 1);
    }
  }
  img {
    width: 534px;
    height: 525px;
    position: absolute;
    top: -100px;
    right: -120px;
  }
`;
const BgWrapper = styled.div<{ bg: string }>`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: opacity 0.3s ease-in;
  /* padding: 152px 0 0 0px; */
  pointer-events: none;
  .flexwrap{
    display: flex;
    width: 1200px;
    height: 500px;
    justify-content: center;
    align-items: center;
    margin:0 auto;
    margin-top: 60px;
  }
  .bgimg22{
    height: 496px;
    margin-bottom: 0;
  }
  &::after {
    z-index: -1;
    pointer-events: none;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(246, 252, 255, 1);
  }
  &.active {
    pointer-events: all;
    opacity: 1;
  }
`;

const BottomContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-size: 20px;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 600;
  cursor: default;
  &.active {
    background: rgba(0, 0, 0, 0.12);
    color: white;
  }
`;
const BottomWrapper = styled.div<{ length: number }>`
  width: 1200px;
  max-width: 100%;
  margin: 0 auto;
  grid-template-columns: repeat(${props => props.length}, 1fr);
  display: grid;
  height: 80px;
`;
const BottomMain = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled.div`
width: 100%;
  height: 576px;
  position: relative;
  background: rgba(0, 0, 0, 0.7);
  overflow: hidden;
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
`;
export const CarouselWrapper = styled.div`
  width: 100%;
  .carousel-body {
    height: 680px;
  }

  .carousel,
  .carousel-inner,
  .carousel-item {
    height: 100%;
  }

  .carousel-item {
    padding: 152px 0 0 176px !important;
  }

  .main-title {
    font-size: 64px;
    line-height: 80px;
    font-weight: 600;
    color: #ffffff;
    letter-spacing: 2px;
    margin-bottom: 16px;
  }

  .sub-title {
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 1px;
    color: #ffffff;
    font-family: PingFangSC-Light, PingFang SC;
  }

  .input-group {
    width: 400px;
    height: 48px;
    font-size: 20px;
    margin: 48px 0 120px;
    position: relative;

    input {
      height: 48px;
      padding: 0 24px;
      font-size: 18px;
    }

    .form-control::-webkit-input-placeholder {
      color: rgba(43, 43, 43, 0.25);
    }

    input.warn {
      border: 1px solid #f66600;
    }

    .input-group-text {
      background: #f66600;
      color: #ffffff;
      padding: 0 24px;
      border: none;
      cursor: pointer;
      font-size: 18px;
    }
    .warn_message {
      position: absolute;
      font-family: PingFangSC-Regular, PingFang SC;
      top: 48px;
      font-size: 16px;
      color: #f5222d;
      line-height: 24px;
    }
  }

  @media (max-width: 768px) {
    .carousel-body {
      height: 638px;
      text-align: center;
    }

    .carousel-item {
      padding: 96px 0 0 0 !important;
    }

    .main-title {
      font-size: 40px;
      line-height: 48px;
    }

    .sub-title {
      font-size: 20px;
      line-height: 32px;
      margin: 8px 0 20px;
    }

    .carousel-button {
      width: 216px;
      height: 48px;
      line-height: 48px;
      margin: 32px auto 0;
      background: #f66600;
      text-align: center;
      border-radius: 4px;
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
    }
  }
`;

export const IndustryCarousel: FC<ICarousel> = ({ dataList = [] }) => {

  const setForm = () => {
    window.open('/form?formType=1')
  };

  const [currIndex, setCurrIndex] = useState(0);
  const currIndexRef = useRef(currIndex);
  useEffect(() => {
    currIndexRef.current = currIndex;
  }, [currIndex]);
  const { startTimer, endTimer } = useTime(() => {
    setCurrIndex((currIndexRef.current + 1) % dataList.length);
  }, 3000);
  useEffect(() => {
    startTimer();
    return () => {
      endTimer();
    };
  }, []);
  return (
    <Wrapper onMouseEnter={endTimer} onMouseLeave={startTimer}>
       <div className="carousel-bg-right"></div>
      {dataList.map(({ bg, title, subTitle }, i) => {
        return (
          <BgWrapper className={classNames({ active: i === currIndex })} bg={bg}>
            
            <div className='flexwrap'>
            <BgContent>
              <Title>品牌零售<br></br>智能用户运营解决方案</Title>
              {subTitle.map(str => {
                return <SubTitle>{str}</SubTitle>;
              })}
              <div className="jumpbtn" onClick={() => setForm()}>
                立即体验
              </div>

             
            </BgContent>
            <img src={imgurl+'/retail_carousel.png'} className='bgimg22'/>  
             
            </div>
          </BgWrapper>
        );
      })}
    </Wrapper>
  );
};
