import React, { CSSProperties, FC, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Theme } from '../../constants/style';
import { splitCssValue } from '../../lib/utils';
import { Hidden, Visible } from 'react-grid-system';
import { Swiper, SwiperSlide} from 'swiper/react';
import imgurl from '../../../img.url.js'

const Title = styled.div`
  padding-top: 80px;
  padding-bottom: 16px;
  font-size: 40px;
  line-height: 44px;
  color:rgba(255, 255, 255, 1);
  text-align: center;
`;

const SubTitle = styled.div`
padding-bottom: 48px;
font-size: 22px;
line-height: 44x;
color:rgba(255, 255, 255, 1);
text-align: center;
`;

const WrapperContent = styled.div`
  position: relative;
  margin-top: 34px;
  &::before {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    content: '';
    width: 100%;
    height: 287px;
    background: rgba(43, 88, 249, 1);
  }
`;

const FlairVoucherContainer = styled.div<{ maxWidthPc?: string; minWidthPC?: string }>`
  @media (min-width: 768px) {
    max-width: ${props => props.maxWidthPc || Theme.ContentWidth};
    min-width: ${props => props.minWidthPC || 'unset'};
    width: calc(
      100vw / ${splitCssValue(Theme.DesignDraftWidth).num} *
        ${props => splitCssValue(props.maxWidthPc || Theme.ContentWidth).num}
    );
    margin: 0 auto;
  }
  position: relative;
  height: 100%;
  @media (max-width: 768px) {
    width: 100% !important;
  }
`;

const FlairVoucherSlide = styled.div`
  display: flex;
  justify-content: center;

  transform: translateY(50%);
  transition: all 0.4s;
  opacity: 0;
  &.appear{
    transform: translateY(0);
    opacity: 1;
  }
`;

const HoveUp = styled.div`
  position: relative;
  width: 100%;
  border-radius: 16px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
  z-index: 1;
  .hoer_bg_more{
    transition: all 0.3s ease-in-out;
  }
`
const CardContent = styled.aside`
  position:relative;
  padding: 46px 71px;
  .logo_area{
    width: 100%;
    height: 358px;
  }
`
const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
`;

const carouselDataList = [
  {
    imgSrc:'/flair-voucher-1.png',
  },
  {
    imgSrc:'/flair-voucher-2.png',
  }
];

interface SocietyDutyProps {
  dataList: { content: string; imgSrc: string; title: string }[];
  style?: CSSProperties;
}

const Carousel: React.FC<SocietyDutyProps> = ({ dataList, style }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [currIndex, setCurrIndex] = useState(0);
  return (
    <div style={{width:'1200px',margin:'0 auto',display:'flex',justifyContent:'center',position: 'relative'}}>
      <HoveUp>
        <Swiper
          effect="slide"
          autoplay={{
            delay: 5000,
          }}
          slidesPerView={1}
          onSwiper={swiper => setControlledSwiper(swiper)}
          onSlideChange={swiper => {
            setCurrIndex(swiper.activeIndex);
          }}
          style={{  }}>
          {dataList.map(({ imgSrc, content, title }, i) => (
            <SwiperSlide style={{ width: 'auto' }} className='hoer_bg_more'>
              <CardContent>
                <img className='logo_area' src={imgurl+imgSrc}/>
              </CardContent>
            </SwiperSlide>
          ))}
        </Swiper>
      </HoveUp>
    </div>
  );
};

const CarouselMobile: React.FC<SocietyDutyProps> = ({ dataList, style }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [controlledSwiper, setControlledSwiper] = useState(null);
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
  return (
    <>
      <Wrapper>
        <Swiper
          autoplay={{
            delay: 5000,
          }}
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={24}
          onSlideChange={swiper => {
            setCurrIndex(swiper.activeIndex);
          }}>
          {dataList.map(({ imgSrc, content, title }, i) => (
            <SwiperSlide style={{ width: '295px' }}>
           
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </>
  );
};

const FlairVoucher: FC<SocietyDutyProps> = () => {

  const myRef = useRef(null);
  useEffect(() => {
    const timer =  setInterval(()=>{
      if(myRef.current){
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
                videoContent.classList.add('appear')
                controller.destroy();
            });
      }
    })
  }, [myRef]);
  
  return (
  <WrapperContent id="FlairVoucher">
    <FlairVoucherContainer maxWidthPc="1200px">
      <Title>资质认证</Title>
      <SubTitle>从自身产品安全性到对外数据服务，为数据安全保驾护航</SubTitle>
      <FlairVoucherSlide ref={myRef}>
        <Hidden xs sm>
          <Carousel dataList={carouselDataList}></Carousel>
        </Hidden>
        <Visible xs sm>
          <CarouselMobile dataList={carouselDataList}></CarouselMobile>
        </Visible>
      </FlairVoucherSlide>
    </FlairVoucherContainer>
  </WrapperContent>
)
};

export default FlairVoucher;
