import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
import { RightArrow, LefttArrow } from '@indata/icon-byai';
import Pane from './Pane';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import ByProgressSwiper from '../../common/ByProgressSwiper';
import imgurl from '../../../../img.url.js'
export type ICustomerWordsProps = {};

interface ICarouselProps {
  dataList: {  content: string;img:string;span:string;p1:string;p2:string }[];
  style?: CSSProperties;
}



const HoveUp = styled.div`
           width: 1012px;
           margin-left:46px;
           margin-right:46px;
    .hoer_bg_more{
     
    }
`
const CardContent = styled.aside`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position:relative;
    .title_xxx{
      text-align: center;
      p{
          span{
             font-size: 20px;
          font-weight: 500;
          line-height: 24px;
color: rgba(43, 88, 249, 1);
          }
        &:nth-child(1){
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 8px;
          line-height: 24px;
color: rgba(51, 51, 51, 1);

        }
        &:nth-child(2){
          font-size: 16px;
          font-weight: 400;
          line-height: 24px;
color: rgba(51, 51, 51, 1);
margin-bottom: 35px;
        }
      }
    }
    .img_area{
        right:0;
       
        img{
          
            margin:0;
            transform: scale(1.03)
        }
    }
    .text_area{
        width:100%;
        img{
          margin-bottom: unset;
        }
    }
    .info_area{
      font-size: 20px;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 40px;
      color: rgba(90, 90, 90, 1);
    }
    .name_area{
      font-size: 14px;
      font-weight: 400;
      line-height: 20px;
      color: rgba(90, 90, 90, 1);
      text-align:right;
      margin-top:16px;
      margin-bottom:16px;
      padding-bottom:16px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.08);     
      span{
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
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
    width: 48px;
    height: 48px;
    opacity: 1;
    align-self:center;
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    
    img{
      width:100%;
    cursor:pointer;
    &.nodrop{
      cursor:no-drop;
    }
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
let imglegt =`https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/%E5%B7%A6.png`
let imgright =`https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/%E5%8F%B3.png`

const Carousel: React.FC<ICarouselProps> = ({ dataList, style }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [currIndex, setCurrIndex] = useState(0);
  const [arrowbg, setArrowbg] = useState(imglegt);
  const [arrowbg2, setArrowbg2] = useState(imgright);

  return (
    <div style={{width:'1200px',margin:'0 auto',display:'flex',justifyContent:'center'}}>
        <ArrowClick onClick={e => {
            const res = controlledSwiper.navigation.onPrevClick(e);
          }}
          onMouseEnter={()=>{
            // if(currIndex != 0){
              setArrowbg(`${imgurl}/xzleft.png`)
            // }
          }}
            onMouseLeave={()=>{
            setArrowbg(imglegt)
          }}
          
          >
           <img src={arrowbg}  
          //  className={currIndex == 0? 'nodrop': ''}
           />
        </ArrowClick>
      <HoveUp >
      <Swiper
        effect="slide"
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        slidesPerView={1}
        onSwiper={swiper => setControlledSwiper(swiper)}
        onSlideChange={swiper => {
          setCurrIndex(swiper.activeIndex);
          // if( swiper.activeIndex == 0){
          //   setArrowbg(imglegt)
          // }else if(swiper.activeIndex == 1){
          //   setArrowbg2(imgright)

          // }
        }}
        style={{  }}>
        {dataList.map(({ content, img,span,p1,p2 }, i) => (
          <SwiperSlide style={{ width: 'auto',paddingTop:10 }} key={i} className='hoer_bg_more'>
            <CardContent>
                <div className='title_xxx'>
                      <p><span> {span}</span>{p1}</p>
                      <p>  {p2}</p>
                </div>
                <div className='text_area' >
                   <img
                    src={img} />
                    
                </div>
              
            </CardContent>
          </SwiperSlide>
        ))}
      </Swiper>
      </HoveUp>
      <ArrowClick onClick={e => {
            controlledSwiper.navigation.onNextClick(e);
          }} style={{}}
           onMouseEnter={()=>{
            // if(currIndex !=1){
              setArrowbg2(`${imgurl}/xzright.png`)
            // }
          }}
            onMouseLeave={()=>{
            setArrowbg2(imgright)
          }}>
         <img src={arrowbg2} 
          //  className={currIndex == 1? 'nodrop': ''}
          />
      </ArrowClick >
       
    </div>
  );
};

const carouselDataList = [
  {
    span:'企业',
    p1:'B2C数智化用户运营解决方案',
    p2:'助力品牌高效连接消费者，打造存量时代的会员运营服务，拉升会员LTV',
    img:imgurl+'/cjjjfa1.png'
  },
  {
     span:'政务',
    p1:'G2C基层服务和治理自动化解决方案',
    p2:'打造数字化连接平台，助力政府高效服务及治理，提升平安建设三率',
   img:imgurl+'/cjjjfa2.png'
  },

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
width: 300px;
height: 56px;
display: flex;
justify-content: center;
width: 100%;
border-bottom: 2px solid rgba(0, 0, 0, 0.04);
`
const LabelWrapper = styled.div`
width: 300px;
height: 56px;
line-height: 54px;
text-align: center;
font-size: 18px;
font-weight: 400;
letter-spacing: 0px;
color: rgba(51, 51, 51, 1);
cursor: pointer;
&.active {
    color: rgba(43, 88, 249, 1);
    font-weight: 600;
    border-bottom: 2px solid rgba(43, 88, 249, 1);  
} 
`
const ContentWrapper = styled.div`
div:first-child {
    font-family: PingFangSC;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    margin-top: 39.95px;
}
div:nth-child(2) {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.73px;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    margin-top: 8px;
}
img {
  width: 1057px;
  height: 497px;
  display: block;
  margin: 35px auto 0;
}
`

const labelInfo = [
  {
      name: '企业'
  },
  {
      name: '政务'
  }
]
const CarouselMobile: React.FC<ICarouselProps> = ({ dataList, style }) => {
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
          // onSwiper={swiper => setControlledSwiper(swiper)}
          onSlideChange={swiper => {
            setCurrIndex(swiper.activeIndex);
          }}>
          {dataList.map(({ bg, avatarSrc, content, personName, tagName }, i) => (
            <SwiperSlide style={{ width: '295px' }} key={i}>
           
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
      <div>
        <ProgressWrapper>
          <ProgressContent style={{ width: `${((currIndex + 1) * 100) / dataList.length}%` }}></ProgressContent>
        </ProgressWrapper>
        <SwiperCounter>
          {currIndex + 1}/{dataList.length}
        </SwiperCounter>
      </div>
    </>
  );
};

const Solution: FC<ICustomerWordsProps> = ({}) => {
  const [currIndex,setCurrIndex] = useState(0);
  return (
    <Pane title="场景解决方案" paneBgColor="grey" 
    style={{ paddingBottom: 80,background:'rgba(246, 252, 255, 1)'}} 
    titleStyle={{marginBottom:'24px'}}
    mobileStyle={{ paddingBottom: 40 }}>
      <Hidden xs sm>
      <LabelList>
            {labelInfo.map(({name},i)=> {
                return (
                    <LabelWrapper onClick={()=>{setCurrIndex(i)}} className={i==currIndex?'active':''}>
                        {name}
                    </LabelWrapper>
                    
                )
            })}
        </LabelList>
        <ContentWrapper>
                    <div>{carouselDataList[currIndex].p1}</div>
                    <div>{carouselDataList[currIndex].p2}</div>
                    <img src={carouselDataList[currIndex].img} alt="" />
                  </ContentWrapper>
      </Hidden>
      <Visible xs sm>
        {/* <CarouselMobile dataList={carouselDataList}></CarouselMobile> */}
      </Visible>
    </Pane>
  );
};

export default Solution;
