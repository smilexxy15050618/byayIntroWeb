import classNames from 'classnames';
import { FC, useEffect, useRef, useState } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import JumpBtn from '../../components/JumpBtn';
import { useTime } from '../../lib/hooks-utils';
import { calWidthAndHeight, isPc, retailUrl } from '../../lib/utils';

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
  font-size: 48px;
  font-family: PingFangSC-Regular, PingFang SC;
  color: #ffffff;
  font-weight: 400;
  line-height: 64px;
  letter-spacing: 1px;
`;

const Title = styled.div`
  font-size: 24px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: #ffffff;
  line-height: 36px;
  letter-spacing: 1px;
  margin-bottom: 8px;
`;

const BgContent = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;
const BgWrapper = styled.div<{ bg: string }>`
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  /* background: no-repeat center / cover url(${props => props.bg}); */
  transition: opacity 0.3s ease-in;
  padding: 161px 0 0 0px;
  pointer-events: none;
  &::after {
    z-index: -1;
    pointer-events: none;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: no-repeat center / cover url(${props => props.bg});
    filter: brightness(50%);
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
  height: 652px;
  position: relative;
  background: rgba(0, 0, 0, 0.7);
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
      {dataList.map(({ bg, title, subTitle }, i) => {
        return (
          <BgWrapper className={classNames({ active: i === currIndex })} bg={bg}>
            <BgContent>
              <Title>{title}</Title>
              {subTitle.map(str => {
                return <SubTitle>{str}</SubTitle>;
              })}
              <JumpBtn scale={0.8} onClick={() => setForm()} style={{ marginTop: 64, transform: 'scale(0.8)' }}>
                立即了解增长案例1
              </JumpBtn>
            </BgContent>
          </BgWrapper>
        );
      })}
      <BottomMain>
        <BottomWrapper length={dataList.length}>
          {dataList.map(({ tabName }, i) => {
            return (
              <BottomContent
                onMouseEnter={() => {
                  setCurrIndex(i);
                }}
                className={classNames({ active: i === currIndex })}>
                {tabName}
              </BottomContent>
            );
          })}
        </BottomWrapper>
      </BottomMain>
    </Wrapper>
  );
};
