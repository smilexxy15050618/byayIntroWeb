import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Pane from '../Pane';
import CardForProduct from './CardForProduct';
import CardForService from './CardForService';
import CardForTechnology from './CardForTechnology';
import CardAnimation from './CardAnimation';
import { Hidden, Visible } from 'react-grid-system';
import ByProgressSwiper from '../../../common/ByProgressSwiper';

export type IAdvantageProps = {};
const MENU_HEIGHT = '20px';
const Menu = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 84px;
  border-radius: 8px;
  opacity: 0.45;
  transition: all 0.3s ease;
  padding: 8px 0;
  pointer-events: auto;
  &.active {
    background: rgba(235, 235, 235, 0.45);
    opacity: 1;
  }
  line-height: ${MENU_HEIGHT};
  font-size: 13px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;

  > img {
    height: 24px;
    margin-bottom: 6px;
  }
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 24px;
`;
const LabelWrapper = styled.div`
  height: 64px;
  cursor: pointer;
  &.active {
    background: rgba(43, 88, 249, 0.08);
  }
  border-radius: 32px;
  padding: 0 31px;

  font-size: 22px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 64px;
  img {
    height: 30px;
    margin: 0 7px 3px 0;
  }
  & + & {
    margin-left: 40px;
  }
`;
const LabelList = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 56px;
`;

const Title = styled.div`
  text-align: center;
  font-size: 30px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 48px;
  margin-bottom: 32px;
  @media (max-width: 768px) {
    font-size: 18px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #000000;
    margin-bottom: 24px;
    line-height: 36px;
  }
`;
export const ADVANTAGE_ID = 'advantage-wrapper';

const ContentWrapper = styled.div`
  position: relative;
  width: 1200px;
  margin: 0 auto;
  transform: translateY(100%);
  min-height: 440px;
  opacity: 0;
  transition: all 0.4s;
  &.appear {
    transform: translateY(0);
    opacity: 1;
  }
`;

const labelInfo = [
  {
    name: '产品优势',
    icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E4%BC%98%E5%8A%BF/a-1.png',
  },
  {
    name: '技术优势',
    icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E4%BC%98%E5%8A%BF/a-2.png',
  },
  {
    name: '服务优势',
    icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E4%BC%98%E5%8A%BF/a-3.png',
  },
];

const groupNodeList = [
  <>
    <Title>AI电话营销的第一选择</Title>
    <CardForProduct></CardForProduct>
  </>,
  <>
    <Title>持续深耕高度拟人的"聪明AI"</Title>
    <CardForTechnology></CardForTechnology>
  </>,
  <>
    <Title>为客户业务持续增长负责</Title>
    <CardForService></CardForService>
  </>,
];

const WRAPPER_ID = 'advantage-card-wrapper';

const AdvantagePC = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const currIndexRef = useRef(currIndex);
  useEffect(() => {
    currIndexRef.current = currIndex;
  }, [currIndex]);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);
  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    timerRef.current = setInterval(() => {
      setCurrIndex((currIndexRef.current + 1) % labelInfo.length);
    }, 5000);
  };
  const endTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const node = document.getElementById(WRAPPER_ID);
    new ScrollMagic.Scene({
      triggerElement: node, //触发元素
      triggerHook: 'onEnter',
      offset: -100,
    })
      .setClassToggle('#' + WRAPPER_ID, 'appear')
      .addTo(controller)
      .on('enter', () => {
        console.log('enter');
        startTimer();
      })
      .on('leave', () => {
        console.log('leave');
        endTimer();
      });
    return () => {
      endTimer();
    };
  }, []);
  return (
    <>
      <LabelList>
        {labelInfo.map(({ name, icon }, i) => {
          return (
            <LabelWrapper
              onMouseLeave={startTimer}
              onMouseEnter={() => {
                endTimer();
                setCurrIndex(i);
              }}
              className={i === currIndex ? 'active' : ''}>
              <img src={icon} />
              {name}
            </LabelWrapper>
          );
        })}
      </LabelList>
      <ContentWrapper id={WRAPPER_ID}>
        {groupNodeList.map((node, i) => {
          return <CardAnimation active={i === currIndex}>{node}</CardAnimation>;
        })}
      </ContentWrapper>
    </>
  );
};

export const MobileWrapper = styled.div`
  .swiper-slide {
    display: block;
  }
`;
const AdvantageMobile = () => {
  const [currIndex, setCurrIndex] = useState(0);
  const [ser, setSer] = useState(null);
  const [delay, setDelay] = useState(0);
  console.log(ser);
  useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const node = document.getElementById(WRAPPER_ID);
    new ScrollMagic.Scene({
      triggerElement: node, //触发元素
      triggerHook: 'onEnter',
      offset: -100,
    })
      .addTo(controller)
      .on('enter', () => {
        setDelay(5000);
        if (ser) {
          ser.autoplay.start();
        }
      });
  }, []);
  return (
    <MobileWrapper id={WRAPPER_ID}>
      <MenuBox>
        {labelInfo.map(({ name, icon }, index) => {
          const isActive = index === currIndex;
          return (
            <Menu
              className={isActive ? 'active' : ''}
              onClick={() => {
                setCurrIndex(index);
                ser.slideTo(index);
                if (isActive) {
                  return;
                }
              }}>
              <img src={icon} alt={name} />
              {name}
            </Menu>
          );
        })}
      </MenuBox>
      <ByProgressSwiper
        setControlledSwiper={setSer}
        noProgress={true}
        style={{ flex: 1 }}
        initialSlide={0}
        autoplayDelay={delay}
        contentPadding="20px"
        progressPadding="0px"
        setActiveIndex={index => {
          setCurrIndex(index);
        }}
        previewWidth="0px">
        {groupNodeList.map((node, i) => {
          return node;
        })}
      </ByProgressSwiper>
    </MobileWrapper>
  );
};

const Advantage: FC<IAdvantageProps> = ({}) => {
  return (
    <Pane id={ADVANTAGE_ID} title="百应三大优势" titleMarginBottom={48} style={{ overflow: 'hidden' }}>
      <Hidden xs sm>
        <AdvantagePC></AdvantagePC>
      </Hidden>
      <Visible xs sm>
        <AdvantageMobile></AdvantageMobile>
      </Visible>
    </Pane>
  );
};

export default Advantage;
