import React, { CSSProperties, FC, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Theme } from '../../constants/style';
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
    padding-bottom: 9px;
  }
`;

const SubTitle = styled.div`
  padding-bottom: 48px;
  font-size: 22px;
  line-height: 44x;
  color:rgba(255, 255, 255, 1);
  text-align: center;
  @media(max-width: 768px) {
    font-size: 18px;
    line-height: 28px;
    padding:0 40px 40px;
    
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
      opacity: 1;
  }
  &.appear{
    transform: translateY(0);
    opacity: 1;
  }

  .wrap_hovres{
    width: 100vw;
    .custom-bar-wrapper{
        width: 300px;
    }
    .swiper-slide {
        width: 343px !important;
        padding-bottom: 32px !important;
        border-radius: 10px;
        overflow: hidden;
    }
  }
   .swiperwrap{
      width: 343px !important;
      height: 130px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 12px 1px rgba(36, 91, 219, 0.06);
   }

   .card{
      width:100%;
      height: 130px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 12px 1px rgba(36, 91, 219, 0.06);
      box-sizing:border-box;
      img{
          width:100%;
          height: 130px;
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
    imgSrcWap:'/responsibility-1.svg',
  },
  {
    imgSrc:'/flair-voucher-2.png',
    imgSrcWap:'/responsibility-1.svg',
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
                  autoplayDelay={5000}
                  spaceBetween={16}
                  centeredSlides={true}
                >
                  {carouselDataList.map(({ imgSrcWap, content, title }) => (
                      <div style={{width: '100vw',background: '#fff' }}>
                          <div className='card'>
                              <img src={`/static/img2023${imgSrcWap}`} />
                              <div className='title'>{title}</div>
                              <div className='subtitle'>{content}</div>
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
