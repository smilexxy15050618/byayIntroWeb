import React, { CSSProperties, FC, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import { Swiper, SwiperSlide} from 'swiper/react';
import imgurl from '../../../img.url.js'

const SocietyDutyContainer = styled.div`
  padding-bottom: 100px;
  background: rgba(246, 252, 255, 1);
`;

const SocietyDutyContainerWrap = styled.div`
  transform: translateY(50%);
  transition: all 0.4s;
  opacity: 0;
  &.appear{
    transform: translateY(0);
    opacity: 1;
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
    content: '400+公安机构通过百应Al解决电信网络诈骗问题，为超1亿+民众提供了反欺诈知识，预警诈骗电话超5000万次，成功劝阻100余万名民众受骗。助力基层派出所全年警情下降26.5%。诈骗案发数下降67.7%，案损金额下降 86.5%。',
    title: '用AI宣防反诈知识，助力电诈“双降”',
  },
  {
    imgSrc:'/responsibility-2.png',
    content: '2020-2022年，百应在疫情爆发的第一时间上线了「智能疫情通知回访系统」，助力公安高效开展疫情流调和排查工作，减轻民警工作负荷。帮助了湖北、浙江、北京、辽宁、新疆等全国12个省市地区，回访了数千万人次，筛查了5万多隔离人员，覆盖200多个政府部门、医院、学校和社区。',
    title: '智能AI系统，助力疫情高效流调和排查',
  },
  {
    imgSrc:'/responsibility-3.png',
    content: '百应易窗虚拟政务服务大厅，加速推进社保经办向数字化转型，全面落实社保办理“一次也不用跑”、“一网通办”。助力上百家社保、医保服务机构通过百应Al提升数字化服务能力，在线解答71%重复性咨询问题，累计服务量达1000万余次。',
    title: '全面落实社保办理“一网通办”',
  },
  {
    imgSrc:'/responsibility-4.png',
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
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
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

const SocietyDuty: React.SFC<SocietyDutyProps> = () => {
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
  <SocietyDutyContainer id="SocietyDuty" maxWidthPc="1200px">
    <Title>社会责任</Title>
    <SocietyDutyContainerWrap ref={myRef}>
      <Hidden xs sm>
        <Carousel dataList={carouselDataList}></Carousel>
      </Hidden>
      <Visible xs sm>
        <CarouselMobile dataList={carouselDataList}></CarouselMobile>
      </Visible>
    </SocietyDutyContainerWrap>
  </SocietyDutyContainer>
  )
};

export default SocietyDuty;
