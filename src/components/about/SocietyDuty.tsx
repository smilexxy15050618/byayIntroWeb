import React, { CSSProperties, FC, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import { Swiper, SwiperSlide} from 'swiper/react';
import ByProgressSwiper from '../../../src/components/common/ByProgressSwiper';
import imgurl from '../../../img.url.js'

const SocietyDutyContainer = styled.div`
  padding-bottom: 100px;
  background: rgba(246, 252, 255, 1);
  
  @media(max-width: 768px) {
      padding-bottom: 40px;
  }
`;

const SocietyDutyContainerWrap = styled.div`
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
      height: 378px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 12px 1px rgba(36, 91, 219, 0.06);
   }

   .card{
      width:100%;
      border:none;
      height: 378px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 12px 1px rgba(36, 91, 219, 0.06);
      box-sizing:border-box;
      img{
          width:100%;
          height: 177px;
      }
      .title{
        padding-top: 12px;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        color: rgba(26, 26, 26, 1);
        text-align: center;
      }
      .subtitle{
        padding: 6px 28px 0;
        font-size: 12px;
        font-weight: 400;
        line-height: 24px;
        color: rgba(43, 43, 43, 1);
        text-align: justify;
      }
   }

`;

const Title = styled.div`
  padding-top: 80px;
  padding-bottom:44px;
  font-size: 40px;
  line-height: 48px;
  color:rgba(26,26,26,1);
  text-align: center;
  font-weight: 500;
  @media(max-width: 768px) {
    font-size: 24px;
    font-weight: 500;
    line-height: 40px;
    color: rgba(0, 0, 0, 1);
    padding-top: 40px;
    padding-bottom:40px;
  }

`;

const HoveUp = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  z-index: 1;
  .hoer_bg_more{
    transition: all 0.3s ease-in-out;
  }
`
const CardContent = styled.aside`
  background:#fff;
  position:relative;
  .text_area{
    display:flex;
    width:100%;
    border-radius: 16px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 12px 1px rgba(36, 91, 219, 0.06);
    .introduce_slide{
      width:640px;
      padding: 56px;
      .title{
        font-size: 24px;
        line-height: 40px;
        color: rgba(26, 26, 26, 1);
      }
      .content{
        padding-top: 18px;
        font-size: 18px;
        line-height: 40px;
        color: rgba(43, 43, 43, 1);
      }
    }
    .logo_area{
      width:560px;
      height:400px;
      margin: 0;
    }
  }
`
const ArrowClickL = styled.div<{ normalBg?: string, activeBg?: string }>`
  position: absolute;
  z-index: 2;
  width: 48px;
  height: 48px;
  left: 56px;
  bottom: 26px;
  background-image: ${props => `url(${props.normalBg})`};
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  &:hover{
    background-image: ${props => `url(${props.activeBg})`};
  }
`
const ArrowClickR = styled.div<{ normalBg?: string, activeBg?: string }>`
  position: absolute;
  z-index: 2;
  width: 48px;
  height: 48px;
  left: 116px;
  bottom: 26px;
  background-image: ${props => `url(${props.normalBg})`};
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  &:hover{
    background-image: ${props => `url(${props.activeBg})`};
  }
`

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  margin: 0 auto;
`;

const carouselDataList = [
  {
    imgSrc:'/responsibility-1.png',
    imgSrcWap:'/responsibility-1.svg.png',
    content: '400+公安机构通过百应Al解决电信网络诈骗问题，为超1亿+民众提供了反欺诈知识，预警诈骗电话超5000万次，成功劝阻100余万名民众受骗。助力基层派出所全年警情下降26.5%。诈骗案发数下降67.7%，案损金额下降 86.5%。',
    title: '用AI宣防反诈知识，助力电诈“双降”',
  },
  {
    imgSrc:'/responsibility-2.png',
    imgSrcWap:'/responsibility-2.svg.png',
    content: '2020-2022年，百应在疫情爆发的第一时间上线了「智能疫情通知回访系统」，助力公安高效开展疫情流调和排查工作，减轻民警工作负荷。帮助了湖北、浙江、北京、辽宁、新疆等全国12个省市地区，回访了数千万人次，筛查了5万多隔离人员，覆盖200多个政府部门、医院、学校和社区。',
    title: '智能AI系统，助力疫情高效流调和排查',
  },
  {
    imgSrc:'/responsibility-3.png',
    imgSrcWap:'/responsibility-3.svg.png',
    content: '百应易窗虚拟政务服务大厅，加速推进社保经办向数字化转型，全面落实社保办理“一次也不用跑”、“一网通办”。助力上百家社保、医保服务机构通过百应Al提升数字化服务能力，在线解答71%重复性咨询问题，累计服务量达1000万余次。',
    title: '全面落实社保办理“一网通办”',
  },
  {
    imgSrc:'/responsibility-4.png',
    imgSrcWap:'/responsibility-4.svg.png',
    content: '百应积极践行企业社会公益责任，持续推出「翻书越岭」、「公益助农」等公益活动，帮助山区的小朋友们透过阅读感受外面的世界，通过助农项目帮扶贫困地区。收到公益组织的多封感谢信，并获得数央公益颁发的「2022年度科技责任先锋奖」。',
    title: '「翻书越岭」、「公益助农」',
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
    <div style={{width:'1200px',margin:'0 auto',display:'flex',justifyContent:'center',position: 'relative'}}>
        <ArrowClickL 
          onClick={e => {
            const res = controlledSwiper.navigation.onPrevClick(e);
          }}
          normalBg={`${imgurl}/slide-left-normal.png`}
          activeBg={`${imgurl}/slide-left-active.png`}
        >
        </ArrowClickL>
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
          style={{  }}>
          {dataList.map(({ imgSrc, content, title }, i) => (
            <SwiperSlide style={{ width: 'auto' }} className='hoer_bg_more'>
              <CardContent>
                  <div className='text_area'>
                      <div className='introduce_slide'>
                        <div className='title'>{title}</div>
                        <div className='content'>{content}</div>
                      </div>
                      <img className='logo_area' src={imgurl+imgSrc}/>
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
        normalBg={`${imgurl}/slide-right-normal.png`}
        activeBg={`${imgurl}/slide-right-active.png`}
      >
      </ArrowClickR>
    </div>
  );
};


const SocietyDuty: React.SFC<SocietyDutyProps> = ({}) => {
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
  <SocietyDutyContainer id="SocietyDuty">
    <Title>社会责任</Title>
    <SocietyDutyContainerWrap ref={myRef}>
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
                            <img src={`${imgurl}${imgSrcWap}`} />
                            <div className='title'>{title}</div>
                            <div className='subtitle'>{content}</div>
                        </div>
                    </div>
                ))}
            </ByProgressSwiper>
          </div>
        </div>
      </Visible>
    </SocietyDutyContainerWrap>
  </SocietyDutyContainer>
  )
};
export default SocietyDuty;
