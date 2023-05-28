import React, { CSSProperties, FC, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import { Swiper, SwiperSlide} from 'swiper/react';
import ByProgressSwiper from '../../../src/components/common/ByProgressSwiper';
import imgurl from '../../../img.url.js'

const Title = styled.div`
  padding-top: 80px;
  padding-bottom: 16px;
  font-size: 40px;
  line-height: 44px;
  color:rgba(255, 255, 255, 1);
  text-align: center;
  @media(max-width: 768px) {
    font-size: 24px;
    font-weight: 500;
    line-height: 40px;
    color:rgba(255, 255, 255, 1);
    padding-top: 40px;
    padding-bottom: 16px;
  }
`;

const SubTitle = styled.div`
  padding-bottom: 48px;
  font-size: 22px;
  line-height: 44x;
  color:rgba(255, 255, 255, 1);
  text-align: center;
  @media(max-width: 768px) {
    font-size: 12px;
    font-weight: 400;
    line-height: 17.38px;
    color: rgba(255, 255, 255, 1);
  }
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
    @media(max-width: 768px) {
    height: 240px;
  }
  }
`;

const FlairVoucherContainer = styled.div`
  width: 1200px;
   margin: 0 auto;
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
  @media(max-width: 768px) {
    transition: none;
    transform: translateY(0);
    opacity: 1;
  }
  &.appear{
    transform: translateY(0);
    opacity: 1;
  }

  .wrap_hovres{
    width: 100vw;
    // transition-timing-function: linear !important;
    .custom-bar-wrapper{
        display: none;
    }
    .swiper-counter{
      display: none;
    }
    .swiper-slide {
      width: 128px !important;
      &:nth-child(5){
        width: 127px !important;
        .card{
          box-shadow: none;
        }
      }
      &:nth-child(6){
        .card{
          box-shadow: none;
        }
      }
      &:nth-child(7){
        width: 218px !important;
        .card{
          box-shadow: none;
        }
      }
    }
  }
   .card{
      width:100%;
      height: 182px;
      border: none;
      background: transparent;
      box-sizing:border-box;
      border-radius: 8px;
      box-shadow: 0px 0px 16px 0px rgba(0, 6,24, 0.15);
      img{
          width:100%;
          height: 182px;
          margin: 0;
      }
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
  .logo_area{
    width: 100%;
    height: 480px;
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
    wapImgSrc: '/flair-vouche-wap-1.png',
  },
  {
    imgSrc:'/flair-voucher-2.png',
    wapImgSrc: '/flair-vouche-wap-2.png',
  }
];

const carouselDataListWap = [
  {
    wapImgSrc: '/flair-vouche-wap-1.png',
  },
  {
    wapImgSrc: '/flair-vouche-wap-2.png',
  },
  {
    wapImgSrc: '/flair-vouche-wap-3.png',
  },
  {
    wapImgSrc: '/flair-vouche-wap-4.png',
  },
  {
    wapImgSrc: '/flair-vouche-wap-5.png',
  },
  {
    wapImgSrc: '/flair-vouche-wap-6.png',
  },
  {
    wapImgSrc: '/flair-vouche-wap-7.png',
  }
];

interface SocietyDutyProps {
  indexTab: string;
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
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView={1}
          loop={true}
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

const FlairVoucher: FC<SocietyDutyProps> = ({indexTab}) => {

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
  <WrapperContent id="CreditMedal">
    <FlairVoucherContainer>
      <Title>资质认证</Title>
      <SubTitle>从自身产品安全性到对外数据服务，为数据安全保驾护航</SubTitle>
      <FlairVoucherSlide ref={myRef}>
        <Hidden xs sm>
          <Carousel dataList={carouselDataList}></Carousel>
        </Hidden>
        <Visible xs sm>
          <div style={{ width: 'calc(100vw)', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
            <div className='wrap_hovres'>
                <ByProgressSwiper
                  newProgress={true}
                  initialSlide={0}
                  slidesPerView="auto"
                  autoplayDelay={1000}
                  spaceBetween={16}
                  centeredSlides={true}
                >
                  {carouselDataListWap.map(({ wapImgSrc }) => (
                      <div style={{width: '100vw'}}>
                          <div className='card'>
                              <img src={`${imgurl}${wapImgSrc}`} />
                          </div>
                      </div>
                  ))}
              </ByProgressSwiper>
            </div>
          </div>
        </Visible>
      </FlairVoucherSlide>
    </FlairVoucherContainer>
  </WrapperContent>
)
};

export default FlairVoucher;
