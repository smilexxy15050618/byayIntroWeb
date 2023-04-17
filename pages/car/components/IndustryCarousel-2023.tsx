import { FC, useEffect, useRef, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import JumpBtn from '../../../src/components/JumpBtn';;
import { useTime } from '../../../src/lib/hooks-utils';
import { calWidthAndHeight, isPc, retailUrl } from '../../../src/lib/utils';
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
`;

const Title = styled.div`
width: 480px;
height: 120px;
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
    width: 132px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    background: #2B58F9;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0px;
    color: rgba(255, 255, 255, 1);
    border-radius: 5.33px;
    &:hover {
      background: rgba(84, 127, 255, 1);
    }
    &:active {
      background: rgba(25, 60, 212, 1);
    }
  }
  img {
    width: 611px;
    height: 510px;
    position: absolute;
    top: -72px;
    right: 0px;
  }
`;
const BgWrapper = styled.div<{ bg: string }>`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  pointer-events: all;
  padding: 152px 0 0 0px;
  background: rgba(246, 252, 255, 1);
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

export const IndustryCarousel: FC<ICarousel> = ({ dataList = [] }) => {
    const [phone, setPhone] = useState<string>('');
    const [valid, setValid] = useState<string>('');
  
    const setFormByPhone = () => {
      if (isPc()) {
        if (!phone) {
          setValid('请输入您的手机号');
          return;
        }
        if (!/^(?:(?:\+|00)86)?1\d{10}$/.test(phone)) {
          setValid('请输入正确的手机号');
          return;
        }
      }
      const url = retailUrl(!isPc() ? `/form` : `/form?phone=${phone}`);
      window.open(url);
    };
  
    const setForm = () => {
      const url = retailUrl(`/form`);
      window.open(url);
    };
  return (
    <Wrapper>
       <div className="carousel-bg-right"></div>
          <BgWrapper>
            <BgContent>
              <Title>汽车行业<br></br>数智化解决方案</Title>
              <SubTitle>通过AI智能外呼机器人帮助车企建立用户营销触达策略和完善的用户画像体系，实现企业升级和营销转型，驱动业务持续增长</SubTitle>
              <img src={imgurl+'/car_banner.png'}></img>
              <div className="jumpbtn" onClick={() => setForm()}>
                预约体验
              </div>
            </BgContent>
          </BgWrapper>
    </Wrapper>
  );
};
