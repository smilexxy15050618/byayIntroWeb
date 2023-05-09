import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';
import { RightArrow, LefttArrow } from '@indata/icon-byai';
import Pane from './Pane';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import ByProgressSwiper from '../../common/ByProgressSwiper';
import imgurl from '../../../../img.url.js'

export type ICustomerWordsProps = {};

interface ICarouselProps {
  dataList: { bg: string; content: string; avatarSrc: string; personName: string; tagName: string }[];
  style?: CSSProperties;
}

const CardContent = styled.div`
  flex: 1;
  padding: 40px 24px 0;
  @media (max-width: 768px) {
    padding: 30px 18px 0;
  }
  position: relative;
  .customer-words-icon {
    margin-bottom: 24px;
    img{
    height: 64px;
      margin-bottom:0;
    }
    background: #ffffff;
    @media (max-width: 768px) {
      margin-bottom: 20px;
      width: 92px;
      height: 30px;
    }
  }
  .customer-words-desc {
    height: 112px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(10, 15, 44, 0.55);
    line-height: 28px;
    text-align:justify;
    @media (max-width: 768px) {
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      line-height: 20px;
    }
  }
  .customer-words-name {
    position: absolute;
    bottom: 48px;
    left: 24px;
    height: 24px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #000000;
    line-height: 24px;
    @media (max-width: 768px) {
      bottom: 32px;
      left: 18px;
      font-size: 14px;
      line-height: 22px;
    }
  }
`;
const Card = styled.div<{ bg: string }>`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 385px;
  height: 357px;
  background: #ffffff;
  box-shadow: 0px 0px 32px 1px rgba(101, 115, 133, 0.1);
  border-radius: 8px;
  margin-left: 32px;
  transition: all 0.2s ease;
  &:hover{
      box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12) !important;
  }
  @media (max-width: 768px) {
    width: 295px;
    height: 414px;
    background: #ffffff;
    border-radius: 6px;
    margin-left: 0px;
  }
  @media (max-width: 768px) {
  }
  .customer-words-bg {
    width: 385px;
    height: 220px;
    @media (max-width: 768px) {
      width: 295px;
      height: 168px;
    }
    background-position: top;
    background-image: url(${props => props.bg});
    background-size: auto 100%;
  }
  .customer-words-bg-blue {
    position:absolute;
    top:0;
    left:0;
    width: 385px;
    height: 220px;
    background: rgba(43, 88, 249, 0.39);
  }
  .customer-words-tag {
    display: flex;
    align-items: center;
    z-index:22;
    img {
      height: 16px;
      line-height: 30px;
      margin: 0 4px 0 0;
    }
    position: absolute;
    padding-left: 13px;
    top: 0;
    left: 0;
    width: 80px;
    height: 30px;
    background: #2b58f9;
    border-radius: 8px 0px 9px 0px;
    border: 0px solid #ffffff;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    line-height: 30px;
    @media (max-width: 768px) {
      padding-left: 10px;
      height: 24px;
      line-height: 24px;
      font-size: 12px;
      width: 53px;
      border-radius: 6px 0px 7px 0px;
      img {
        height: 12px;
        line-height: 30px;
        margin: 0 4px 0 0;
      }
    }
  }
 
  .customer-words-bg {
    transition: all 1.5s ease;
  }
  &:hover {
    box-shadow: 0px 0px 32px 1px rgba(101, 115, 133, 0.2);
    @media (max-width: 768px) {
      box-shadow: 0px 0px 24px 1px rgba(101, 115, 133, 0.1);
    }

    .customer-words-bg {
      background-size: auto 110%;
    }
  }
`;
const HoveUp = styled.div`
  .hoer_bg_more{
    transition:all 0.3s;
    &:hover{
      transform:translateY(-19px);
    }
  }
`
const ArrowGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 62px;
  > * {
    height: 48px;
  }
  cursor: pointer;
`;

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
    <div style={style}>
      {/* <RightArrow className="next-btn swiper-nav-btn" onClick={e => controlledSwiper.navigation.onNextClick(e)} /> */}
      {/* <LefttArrow className="prev-btn swiper-nav-btn" onClick={e => controlledSwiper.navigation.onPrevClick(e)} /> */}
      <HoveUp >
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        slidesPerView="auto"
        onSwiper={swiper => setControlledSwiper(swiper)}
        onSlideChange={swiper => {
          setCurrIndex(swiper.activeIndex);
        }}
        loop={true}
        style={{ paddingRight: 32, overflow: 'hidden', paddingBottom: 30, marginBottom: -30, paddingTop:20 }}>
        {dataList.map(({ bg, avatarSrc, content, personName, tagName }, i) => (
          <SwiperSlide style={{ width: 'auto' }} className='hoer_bg_more' key={i}>
            <Card bg={bg} >
              {/* <div className="customer-words-tag">
                <img src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/earth.png" />
                {tagName}
              </div> */}
              {/* <div className="customer-words-bg"></div> */}
              {/* <div className="customer-words-bg-blue"></div> */}

              <CardContent>
                <div className="customer-words-icon">
                  <img src={avatarSrc} />
                </div>
                <div className="customer-words-desc">{content}</div>
                <div className="customer-words-name">{personName}</div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      </HoveUp>
      <ArrowGroup>
        <img
          src={arrowbg}
          onClick={e => {
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
        />
        <img
          src={arrowbg2}
          onMouseEnter={()=>{
            // if(currIndex !=1){
              setArrowbg2(`${imgurl}/xzright.png`)
            // }
          }}
            onMouseLeave={()=>{
            setArrowbg2(imgright)
          }}
          onClick={e => {
            controlledSwiper.navigation.onNextClick(e);
          }}
        />
      </ArrowGroup>
    </div>
  );
};

const carouselDataList = [
  {
    bg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/%E5%9B%BE1.png',
    avatarSrc:`${imgurl}/logoxxw.png`,
    content:
      '“我们已经合作有一段时间了，百应给我们提供了专业且全面的解决方案，整体跑下来结果一直都不错。密切的合作让我们成为并肩前行的伙伴，期待未来我们一起创造更好的用户体验。”',
    personName: '新希望华西乳业数字增长负责人',
    tagName: '食品',
  },
  {
    bg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/%E5%9B%BE2.png',
    avatarSrc:`${imgurl}/logozz.png`,
    content:
      '百应的产品和团队都很给力，能够快速响应需求，通过百应的私域加粉模型，我们为后续增长找到了抓手，同时避免了过度打扰用户，推荐有相应需求的伙伴来体验“百应AI外呼”。',
    personName: '运营负责人',
    tagName: '平台',
  },
  {
    bg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/%E5%9B%BE3.png',
    avatarSrc:`${imgurl}/logoryytn.png`,
    content:
      '百应一直服务于我们的私域加粉业务，不仅AI产品很成熟，服务态度也好。每版新话术都认真配合我们做迭代优化，数据也越来越好。希望23年合作更愉快，更好地达成我们的指标。',
    personName: '流量运营部负责人',
    tagName: '食品',
  },
  {
    bg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/%E5%9B%BE4.png',
    avatarSrc:`${imgurl}/logohtbc.png`,

    content:
      '百应基于行业痛点构建的「AI智能辅助系统」帮我们降低了人工投入的成本项，也为我们的老师和学员带来了很好的使用体验。希望在未来百应可以在这个领域有更多的创新。',
    personName: '运营负责人 ',
    tagName: '教育',
  },
  {
    bg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/%E5%9B%BE5.png',
    avatarSrc:`${imgurl}/logodn.png`,

    content:
      '从2021年合作至今，百应科技真正的做到了把客户的业务当作自己的业务来做，专业程度很高，并且还在持续不断的去创新运营的方法和思路，也希望在未来有更多更加深度的合作。',
    personName: '运营负责人',
    tagName: '教育',
  },
  {
    bg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/%E5%9B%BE6.png',
    avatarSrc:`${imgurl}/logokyb.png`,

    content:
      '和百应的合作中，我们发现AI外呼的四点优势：能实现快速触达和高效转化；综合成本相对较低；已具备真实交互感和温度感；可智能识别精准客户，减少不必要打扰。',
    personName: '副总裁&CMO',
    tagName: '平台',
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
const MainWrap = styled.div`
transform: translateY(50%);
transition: all 0.4s;
opacity: 0;
&.appear{
  transform: translateY(0);
  opacity: 1;
}`

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
              <Card bg={bg}>
                <div className="customer-words-tag">
                  <img src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/earth.png" />
                  {tagName}
                </div>
                <div className="customer-words-bg"></div>
                <CardContent>
                  <div className="customer-words-icon">
                    <img src={avatarSrc} />
                  </div>
                  <div className="customer-words-desc">{content}</div>
                  <div className="customer-words-name">{personName}</div>
                </CardContent>
              </Card>
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
export const CustomerId = 'customer_id'
 const CustomerIdwrap = 'customer_id_wrap'

const CustomerWords: FC<ICustomerWordsProps> = ({}) => {
  const myRef = useRef(null);
  useEffect(() => {
    const timer = setInterval(()=>{
  // console.log(myRef.current,'myRef.current');

      if(myRef.current){
        clearInterval(timer)
        const ScrollMagic = require('scrollmagic');
        var controller = new ScrollMagic.Controller();
        const videoContent = myRef.current;
          new ScrollMagic.Scene({
            triggerElement: videoContent, //触发元素
            triggerHook: 'onEnter', //触发元素开始离开视口时触发
            offset: 0, //从开始点滚动多少px触发（施法前摇）
            duration: 400, //效果持续的距离（法术持续时间/距离）
          })
            // .setClassToggle('.video-wrapper-sticky', 'appear')
            .addTo(controller)
            .on('enter', () => {
                videoContent.classList.add('appear')
                controller.destroy();
            });
      }
    })
    
    
  }, [myRef]);
  return (
  
    <Pane id={CustomerId} title="众多政府机构及头部企业的信赖之选"
    titleStyle={{marginBottom:'53px'}}
     paneBgColor="white" style={{ paddingBottom: 70 }} mobileStyle={{ paddingBottom: 40 }}>
      <Hidden xs sm>
      <MainWrap
    id={CustomerIdwrap}
    ref={myRef}
    >
        <Carousel dataList={carouselDataList}></Carousel>
    </MainWrap>

      </Hidden>
      <Visible xs sm>
        <CarouselMobile dataList={carouselDataList}></CarouselMobile>
      </Visible>
    </Pane>
  );
};

export default CustomerWords;
