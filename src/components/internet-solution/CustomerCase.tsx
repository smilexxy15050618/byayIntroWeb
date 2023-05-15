import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import { Swiper, SwiperSlide } from 'swiper/react';
import imgurl from '../../../img.url.js';

const SocietyDutyContainer = styled.div`
  padding-bottom: 88px;
  background: rgba(246, 252, 255, 1);
  @media (max-width: 768px) {
    padding-bottom: 36px;
  }
`;

const SocietyDutyContainerWrap = styled.div`
  transform: translateY(50%);
  transition: all 0.4s;
  opacity: 0;
  &.appear {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Title = styled.div`
  padding-top: 80px;
  padding-bottom: 44px;
  font-size: 40px;
  line-height: 48px;
  color: rgba(26, 26, 26, 1);
  text-align: center;
  font-weight: 500;
  @media (max-width: 768px) {
    padding: 0;
    font-size: 24px;
    font-weight: 500;
    height: 112px;
    line-height: 112px;
    color: rgba(0, 0, 0, 1);
  }
`;

const HoveUp = styled.div`
  position: relative;
  width: 100%;
  z-index: 1;
  border-radius: 8px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
  .hoer_bg_more {
    transition: all 0.3s ease-in-out;
  }
`;
const CardContent = styled.aside`
  position: relative;
  .text_area {
    display: flex;
    width: 967px;
    height: 584px;
    padding: 0 56px;
    margin: 0 auto;
    .logo_area {
      width: 1080px;
      height: 584px;
      margin: 0 auto;
    }
  }
`;
const ArrowClickL = styled.div<{ normalBg?: string; activeBg?: string }>`
  position: absolute;
  z-index: 2;
  width: 18px;
  height: 40px;
  left: -60px;
  top: 50%;
  margin-top: -20px;
  background-image: ${props => `url(${props.normalBg})`};
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  &:hover {
    background-image: ${props => `url(${props.activeBg})`};
  }
`;
const ArrowClickR = styled.div<{ normalBg?: string; activeBg?: string }>`
  position: absolute;
  z-index: 2;
  width: 18px;
  height: 40px;
  right: -60px;
  top: 50%;
  margin-top: -20px;
  background-image: ${props => `url(${props.normalBg})`};
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  &:hover {
    background-image: ${props => `url(${props.activeBg})`};
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
  .logo_area-wap{
    padding: 14px 20px;
    border-radius: 2.65px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 8px 0px rgba(36, 91, 219, 0.12);
    img{
      width: 100%;
      height: 164px;
    }
  }
  .swiper-counter {
    text-align: center;
    margin-top: 7px;
    font-size: 13px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    line-height: 18px;
  }
  .swiper-slide {
    padding-bottom: 30px !important;
  }
  .swiper-container-horizontal > .swiper-scrollbar {
    height: 3px !important;
    background-color: #e7e7fb !important;
  }
  .swiper-scrollbar-drag {
    background-color: #2b58f9 !important;
    border-radius: 0;
  }

  .custom-bar-wrapper {
    position: relative;
    margin: -25px auto 0;
    width: 300px;
    height: 3px;
    background: #f2f2f2;
    border-radius: 0px 0px 4px 4px;
  }
  .custom-bar-content {
    transition: width 0.3s ease-in-out;
    width: 0px;
    height: 3px;
    background: #2b58f9;
    border-radius: 0px 0px 4px 4px;
  }
`;

const carouselDataList = [
  {
    imgSrc: '/internet-al-1.svg',
  },
  {
    imgSrc: '/internet-al-2.svg',
  },
  {
    imgSrc: '/internet-al-3.svg',
  },
];

const carouselDataListWap = [
  {
    imgSrc: '/internet-case-wap-1.png',
  },
  {
    imgSrc: '/internet-case-wap-2.png',
  },
  {
    imgSrc: '/internet-case-wap-3.png',
  },
];

interface SocietyDutyProps {
  dataList: { content: string; imgSrc: string; title: string }[];
  style?: CSSProperties;
}

const Carousel: React.FC<SocietyDutyProps> = ({ dataList, style }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [currIndex, setCurrIndex] = useState(0);
  return (
    <div style={{ width: '1080px', margin: '0 auto', display: 'flex', justifyContent: 'center', position: 'relative' }}>
      <ArrowClickL
        onClick={e => {
          const res = controlledSwiper.navigation.onPrevClick(e);
        }}
        normalBg={`${imgurl}/internet-left-normal.png`}
        activeBg={`${imgurl}/internet-left-active.png`}></ArrowClickL>
      <HoveUp>
        <Swiper
          effect="slide"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          loop={true}
          onSwiper={swiper => setControlledSwiper(swiper)}
          onSlideChange={swiper => {
            setCurrIndex(swiper.activeIndex);
          }}
          style={{}}>
          {dataList.map(({ imgSrc, content, title }, i) => (
            <SwiperSlide style={{ width: 'auto' }} className="hoer_bg_more">
              <CardContent>
                <div className="text_area">
                  <img className="logo_area" src={imgurl + imgSrc} />
                </div>
              </CardContent>
            </SwiperSlide>
          ))}
        </Swiper>
      </HoveUp>
      <ArrowClickR
        onClick={e => {
          controlledSwiper.navigation.onNextClick(e);
        }}
        normalBg={`${imgurl}/internet-right-normal.png`}
        activeBg={`${imgurl}/internet-right-active.png`}></ArrowClickR>
    </div>
  );
};

const CarouselMobile: React.FC<SocietyDutyProps> = ({ dataList, style }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const length = dataList.length;
  const currAnimateNumber = useRef(0);
  const taskList = useRef<Array<() => void>>([]);
  const taskFn = (index: number) => {
    if (currAnimateNumber.current >= 1) {
      taskList.current.push(() => taskFn(index));
      return;
    }
    setCurrIndex(index);
    currAnimateNumber.current++;
    setTimeout(() => {
      currAnimateNumber.current--;
      if (taskList.current.length) {
        const t = taskList.current.shift();
        t();
      }
    }, 250);
  };
  const counterNode = (
    <div className="swiper-counter">
      {currIndex+1}/{length}
    </div>
  );

  return (
    <>
      <Wrapper>
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={0}
          onSlideChange={swiper => {
            setCurrIndex(swiper.activeIndex);
          }}>
          {dataList.map(({ imgSrc, content, title }, i) => (
            <SwiperSlide style={{ width: '100%', padding: '0 8px', boxSizing: 'border-box'}}>
              <div className="logo_area-wap"><img src={imgurl + imgSrc} /></div>
            </SwiperSlide>
          ))}
            <div className="custom-bar-wrapper">
              <div className="custom-bar-content" style={{ width: `${((currIndex + 1) * 100) / length}%` }}></div>
            </div>
            {counterNode}
        </Swiper>
      </Wrapper>
    </>
  );
};

const CustomerCase: React.SFC<SocietyDutyProps> = () => {
  const myRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (myRef.current) {
        clearInterval(timer);
        const ScrollMagic = require('scrollmagic');
        var controller = new ScrollMagic.Controller();
        const videoContent = myRef.current;
        new ScrollMagic.Scene({
          triggerElement: videoContent, //触发元素
          triggerHook: 'onEnter', //触发元素开始离开视口时触发
          offset: 0, //从开始点滚动多少px触发（施法前摇）
          duration: 400, //效果持续的距离（法术持续时间/距离）
        })
          .addTo(controller)
          .on('enter', () => {
            videoContent.classList.add('appear');
            controller.destroy();
          });
      }
    });
  }, [myRef]);

  return (
    <SocietyDutyContainer id="SocietyDuty" maxWidthPc="1200px">
      <Title>客户案例</Title>
      <SocietyDutyContainerWrap ref={myRef}>
        <Hidden xs sm>
          <Carousel dataList={carouselDataList}></Carousel>
        </Hidden>
        <Visible xs sm>
          <CarouselMobile dataList={carouselDataListWap}></CarouselMobile>
        </Visible>
      </SocietyDutyContainerWrap>
    </SocietyDutyContainer>
  );
};

export default CustomerCase;
