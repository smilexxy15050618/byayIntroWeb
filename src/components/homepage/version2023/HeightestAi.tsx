import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { RightArrow, LefttArrow } from '@indata/icon-byai';
import Pane from './Pane';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import ByProgressSwiper from '../../common/ByProgressSwiper';
import imgurl from '../../../../img.url.js'
import { NavItem } from 'react-bootstrap';
export type ICustomerWordsProps = {};

interface ICarouselProps {
  dataList: { bg: string; content: string; avatarSrc: string; personName: string; tagName: string }[];
  style?: CSSProperties;
}



const HoveUp = styled.div`
           width: 100%;
    .hoer_bg_more{
        opacity: 1;
        border-radius: 8px;
      
        // box-shadow: 0px 0px 12px 1px rgba(36, 91, 219, 0.06);
    }
    .swiper-container {
      width: 1072px;
      height: 376px;
      background: white;
      margin: 0 auto;
      .swiper-slide {
        padding-top: 0px !important;
        width: 100%;
        .text_area {
          width: 621px;
          height: 176px;
          .info_area,.name_area {
            padding: 0px 0px 0 56px;
          }
          .name_area {
            padding-bottom: 20px;
          }
        }
      }
    }
`
const CardContent = styled.aside`
    background:#fff;
    /* display:flex;
    position:relative;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
    /* height:496px; */
    .logo {
      width: 200px;
      height: 50px;
      margin: 42px 0 42px 56px;
    }
    .bigLogo {
      width: 374px;
      height: 376px;
      position: absolute;
      right: 0;
      top: 0;
    }
    .diwen {
      width: 160px;
      height: 160px;
      position: absolute;
      top: 92px;
      left: 42px;
    }
    .img_area{
        right:0;
       
        img{
          
            margin:0;
            transform: scale(1.03)
        }
    }
    .text_area{
        
       
        // margin-top:65px;
        // margin-left:80px;
        // margin-right:86px;
    }
    .info_area{
      font-size: 16px;
font-weight: 400;
letter-spacing: 0px;
line-height: 40px;
color: rgba(90, 90, 90, 1);
text-align: left;
    }
    .name_area{
      font-size: 14px;
font-weight: 400;
letter-spacing: 0px;
line-height: 20px;
color: rgba(90, 90, 90, 1);
      text-align:left;
      margin-top:16px;
      padding-bottom:16px;
      // border-bottom: 1px solid rgba(0, 0, 0, 0.08);     
      span{
        font-size: 20px;
font-weight: 500;
letter-spacing: 0px;
line-height: 24px;
color: rgba(90, 90, 90, 1);
      }
    }
    .introduce_area{
      font-size: 14px;
      font-weight: 400;
      line-height: 24px;
      color: rgba(90, 90, 90, 1);
    }
`
const ArrowClick = styled.div`
    width: 40px;
    height: 40px;
    opacity: 1;
    align-self:center;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    img{
      width:100%;
    cursor:pointer;
    }
`

const Arrow = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #979797;
  text-align: center;
  line-height: 42px;
  font-size: 20px;
  cursor: pointer;
`;
let imglegt =`${imgurl}/arowl1.png`;
let imgright =`${imgurl}/arowl2.png`;


const Carousel: React.FC<ICarouselProps> = ({ dataList, style }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [currIndex, setCurrIndex] = useState(0);
  const [arrowbg, setArrowbg] = useState(imglegt);
  const [arrowbg2, setArrowbg2] = useState(imgright);
  return (
    <div style={{width:'1200px',margin:'0 auto',display:'flex',justifyContent:'center'}}>
        {/* <ArrowClick onClick={e => {
            const res = controlledSwiper.navigation.onPrevClick(e);
          }} style={{marginRight:30}}
          onMouseEnter={()=>{
            // if(currIndex != 0){
              setArrowbg(`${imgurl}/arowl1hover.png`)
            // }
          }}
            onMouseLeave={()=>{
            setArrowbg(imglegt)
          }}>
           <img src={arrowbg}  />
        </ArrowClick> */}
      <HoveUp >
      <Swiper
        effect="slide"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        onSwiper={swiper => setControlledSwiper(swiper)}
        onSlideChange={swiper => {
          setCurrIndex(swiper.activeIndex);
        }}
        style={{  }}>
        {dataList.map(({ bg, avatarSrc, logoSrc, bigSrc, content, personName, tagName }, i) => (
          <SwiperSlide style={{ width: 'auto',paddingTop:10 }} key={i} className='hoer_bg_more'>
            <CardContent>
              <img className='logo' src={logoSrc} alt="" />
              <img className='bigLogo' src={bigSrc} alt="" />
              <img className='diwen' src={imgurl+'/tzdwen.png'} alt="" />
                <div className='text_area' style={{}}>
                    <div className='info_area'>
                     {content}
                    </div>
                    <p className='name_area'>{tagName} &nbsp;&nbsp;&nbsp;&nbsp;
                    <span>{personName}</span>
                    </p>
                    {/* <div className='introduce_area'>
                    我们已经合作有一段时间了，百应给我们提供了专业且全面的解决方案，整体跑下来结果一直都不错。
                    </div> */}
                </div>
              
            </CardContent>
          </SwiperSlide>
        ))}
      </Swiper>
      <LabelList>
             {carouselDataList.map(({avatarSrc},index)=> {
              return (
                <div className={index==currIndex?'active':''} onClick={()=> {setCurrIndex(index);controlledSwiper.slideTo(index)}}>
                  <img src={avatarSrc} alt="" />
                </div>
              )
             })}
        </LabelList>
      </HoveUp>
      {/* <ArrowClick onClick={e => {
            controlledSwiper.navigation.onNextClick(e);
          }} style={{marginLeft:30}}
          onMouseEnter={()=>{
            // if(currIndex != 0){
              setArrowbg2(`${imgurl}/arowl2hover.png`)
            // }
          }}
            onMouseLeave={()=>{
            setArrowbg2(imgright)
          }}>
         <img src={arrowbg2}  />
      </ArrowClick> */}
       
    </div>
  );
};

const carouselDataList = [
  {
    avatarSrc:`${imgurl}/sxydkj1.png`,
    logoSrc: `${imgurl}/xyd3.png`,
    bigSrc: `${imgurl}/xyd2.png`,
    content:
      '百应是一个技术能力和产品能力都极强的一家人工智能公司，很难见到一家AI公司产品在金融等多个行业实现高度产品化，并能同时实现合作方开箱即用的极致用户体验和合作方用户的极致应用体验。',
    personName: '耿俊岭',
    tagName: '信雅达科技股份有限公司（600571）董事长',
  },
  {
    avatarSrc:`${imgurl}/hengsheng1.png`,
    logoSrc: `${imgurl}/hengsheng3.png`,
    bigSrc: `${imgurl}/hengsheng2.png`,
    content:
      '恒生电子作为百应科技的合作伙伴和股东，我非常欣赏和赞赏这家公司。百应科技在AI和大数据领域具有先进的技术和专业的人才，同时拥有高效的管理团队和科学的管理体系，为客户提供优质的产品和服务。百应科技不断探索和创新，是一家优秀的科技企业，值得信赖与合作。',
    personName: '刘曙峰',
    tagName: '恒生电子股份有限公司（600570）董事长',
  },
  {
    avatarSrc:`${imgurl}/amiba1.png`,
    logoSrc: `${imgurl}/amiba3.png`,
    bigSrc: `${imgurl}/amiba2.png`,
    content:
      '作为公司最早的股东，我们看到公司从成立到不断发展壮大，客户数量和合作伙伴都在不断增长，产品线也在不断扩充，领域涉及面也在逐渐拓展。很高兴能够见证公司的成长历程，同时也为公司在发展路上持续推进而感到鼓舞。我相信百应科技将继续发扬所长，在行业内发挥更大的作用。',
    personName: 'Kevin Wang',
    tagName: '阿米巴资本 创始及执行合伙人',
  },
  {
    avatarSrc:`${imgurl}/gxin1.png`,
    logoSrc: `${imgurl}/gxin3.png`,
    bigSrc: `${imgurl}/gxin2.png`,
    content:
      '百应科技是一家高素质的AI和大数据技术公司，拥有强大的技术能力和专业的团队，一直秉持以客户需求为导向的理念，不断创新和改善服务，赢得了客户的信任和支持。作为股东，我对百应科技充满信心，相信公司将会在未来的发展中迎来更加辉煌的成绩。',
    personName: '叶雨明',
    tagName: '光信资本合伙人',
  }
];

const MaxContent = styled.div<{ jumpStrColor: string }>`
  position: absolute;
  transform: translateX(-110px);
  opacity: 0;
  top: 0;
  transition: all 0.3s ease;
  z-index: 2;
  .content-title {
    margin-top: 26px;
    margin-bottom: 7px;

    height: 28px;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 28px;
  }
  .content-desc {
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 20px;
    margin-bottom: 6px;
  }
  .content-tag-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 200px;
    .content-tag {
      margin-right: 4px;
      margin-bottom: 6px;
    }
  }

  .content-tag {
    width: 68px;
    height: 20px;
    border-radius: 11px;
    border: 1px solid #ffb6fe;
    text-align: center;
    font-size: 13px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 20px;
  }

  .content-go-next {
    margin-top: 11px;
    padding-left: 8px;
    width: 142px;
    line-height: 20px;
    background: #000000;
    border-radius: 2px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    > svg {
      font-size: 10px;
      height: 8px;
      margin: 0 0 0 5px;
    }
    /* background-color: white;
    color: ${props => props.jumpStrColor};
    .arrow {
    } */
  }
`;

const MinContent = styled.div`
  transform: translateX(0px);
  opacity: 1;
  transition: all 0.3s ease;
  user-select: none;
  .content-title {
    margin-top: 26px;
    margin-bottom: 21px;
    height: 24px;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #f7b500;
    line-height: 24px;
  }
  .content-desc {
    font-size: 28px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #ffffff;
    line-height: 40px;
  }
`;
const ProgressWrapper = styled.div`
  width: 300px;
  max-width: calc(100vw - 37px);
  margin: 32px auto 8px;
  height: 3px;
  background: #f2f2f2;
`;
const ProgressContent = styled.div`
  height: 100%;
  transition: width 0.3s ease-in-out;
  background: #2b58f9;
`;

const Content = styled.div<{ bgSrc: string; currWidth: number; gap: number; color: string }>`
  position: relative;
  overflow: hidden;
  width: 100%;
  background: no-repeat bottom -18px right -19px / auto 75% url(${props => props.bgSrc});
  > * {
    position: absolute;
    top: 0;
    left: 16px;
  }
  height: 210px;
  transition: all 0.25s ease-in-out;
  & + & {
    margin-left: ${props => (props.gap ? props.gap : 0)}px;
  }
  background-color: ${props => props.color};
  border-radius: 16px;
  padding: 0 16px;
  background-position: bottom -18px right -19px;

  /* -110px; */
  ${MaxContent} {
    transform: translateX(0);
    opacity: 1;
  }
  ${MinContent} {
    transform: translateX(-110px);
    opacity: 0;
  }
`;
const SwiperCounter = styled.div`
  text-align: center;
  margin-top: 7px;
  font-size: 13px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  line-height: 18px;
`;
const Wrapper = styled.div<{ wrapperWidth?: number }>`
  display: flex;
  width: 100vw;
  margin: 0 auto;
`;

const LabelList = styled.div`
  width: 1072px;
  display: flex;
  justify-content: space-between;
  margin: 16px auto 0;
  div {
    width: 256px;
    height: 64px;
    border-radius: 4px;
background: rgba(255, 255, 255, 1);
box-shadow: 0px 0px 12px 1px rgba(36, 91, 219, 0.06);
    &.active {
      border-bottom: 2px solid #2B58F9;
      border-shadow: 0px 0px 12px 1px #245BDB;
    }
  }
  img {
    width: 256px;
    height: 64px;
    margin-bottom: 0;
  }
`
// const CarouselMobile: React.FC<ICarouselProps> = ({ dataList, style }) => {
//   const [currIndex, setCurrIndex] = useState(0);
//   const [controlledSwiper, setControlledSwiper] = useState(null);
//   const length = dataList.length;
//   const currAnimateNumber = useRef(0);
//   const taskList = useRef<Array<() => void>>([]);
//   const taskFn = (index: number) => {
//     if (currAnimateNumber.current >= 1) {
//       taskList.current.push(() => taskFn(index));
//       return;
//     }
//     setCurrIndex(index);
//     currAnimateNumber.current++;
//     setTimeout(() => {
//       currAnimateNumber.current--;
//       if (taskList.current.length) {
//         const t = taskList.current.shift();
//         t();
//       }
//     }, 250);
//   };
//   return (
//     <>
//       <Wrapper>
//         <Swiper
//           autoplay={{
//             delay: 1000000,
//           disableOnInteraction: false,
//           pauseOnMouseEnter: true
//           }}
//           slidesPerView="auto"
//           centeredSlides={true}
//           spaceBetween={24}
//           // onSwiper={swiper => setControlledSwiper(swiper)}
//           onSlideChange={swiper => {
//             setCurrIndex(swiper.activeIndex);
//           }}>
//           {dataList.map(({ bg, avatarSrc, content, personName, tagName }, i) => (
//             <SwiperSlide style={{ width: '295px' }} key={i}>
           
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </Wrapper>
//       <div>
//         <ProgressWrapper>
//           <ProgressContent style={{ width: `${((currIndex + 1) * 100) / dataList.length}%` }}></ProgressContent>
//         </ProgressWrapper>
//         <SwiperCounter>
//           {currIndex + 1}/{dataList.length}
//         </SwiperCounter>
//       </div>
//     </>
//   );
// };

const CustomerWords: FC<ICustomerWordsProps> = ({}) => {
  return (
    <Pane title="顶尖资本支持，智领未来AI沟通新方式" paneBgColor="grey" 
    style={{ paddingBottom: '90px',background:`url(${imgurl}/zbbg.png)`}} 
    titleStyle={{marginBottom:'48px'}}
    mobileStyle={{ paddingBottom: 40 }}>
      <Hidden xs sm>
        <Carousel dataList={carouselDataList}></Carousel>
      </Hidden>
      <Visible xs sm>
        {/* <CarouselMobile dataList={carouselDataList}></CarouselMobile> */}
      </Visible>
    </Pane>
  );
};

export default CustomerWords;
