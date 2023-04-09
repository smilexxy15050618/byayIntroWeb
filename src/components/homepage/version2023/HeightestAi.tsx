import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide} from 'swiper/react';
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



const HoveUp = styled.div`
           width: 1080px;
           height: 440px;
    .hoer_bg_more{
        opacity: 1;
        border-radius: 8px;
      
        box-shadow: 0px 0px 12px 1px rgba(36, 91, 219, 0.06);
    }
`
const CardContent = styled.aside`
    background:#fff;
    display:flex;
    position:relative;
    .img_area{
        right:0;
       
        img{
          
            margin:0;
            transform: scale(1.03)
        }
    }
    .text_area{
        width:520px;
        margin-top:65px;
        margin-left:80px;
        margin-right:86px;
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

const Carousel: React.FC<ICarouselProps> = ({ dataList, style }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [currIndex, setCurrIndex] = useState(0);
  return (
    <div style={{width:'1200px',margin:'0 auto',display:'flex',justifyContent:'center'}}>
        <ArrowClick onClick={e => {
            const res = controlledSwiper.navigation.onPrevClick(e);
          }} style={{marginRight:30}}>
           <img src={`${imgurl}/arowl1.png`}  />
        </ArrowClick>
      <HoveUp >
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
        {dataList.map(({ bg, avatarSrc, content, personName, tagName }, i) => (
          <SwiperSlide style={{ width: 'auto',paddingTop:10 }} className='hoer_bg_more'>
            <CardContent>
                <div className='text_area'>
                   <img
                   style={{marginBottom:45}}
                    src="https://img.js.design/assets/img/642e7f5da6320a9cbd726401.png" width={127} className='logo_area'/>
                    <div className='info_area'>
                     我们已经合作有一段时间了，百应给我们提供了专业且全面的解决方案，整体跑下来结果一直都不错。密切的合作一直都不错。密切的合作一直都不错。密切的合作。
                    </div>
                    <p className='name_area'>XXX创始人 &nbsp;&nbsp;&nbsp;&nbsp;
                    <span>代用名</span>
                    </p>
                    <div className='introduce_area'>
                    我们已经合作有一段时间了，百应给我们提供了专业且全面的解决方案，整体跑下来结果一直都不错。
                    </div>
                </div>
                <div className='img_area'>
                    <img src="https://img.js.design/assets/img/642e7f5ed23919d9e828ea29.png" width={330} />
                </div>
            </CardContent>
          </SwiperSlide>
        ))}
      </Swiper>
      </HoveUp>
      <ArrowClick onClick={e => {
            controlledSwiper.navigation.onNextClick(e);
          }} style={{marginLeft:30}}>
         <img src={`${imgurl}/arowr1.png`}  />
      </ArrowClick>
       
    </div>
  );
};

const carouselDataList = [
  {
    bg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/%E5%9B%BE1.png',
    avatarSrc:
      'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/20230323-140507.jpeg',
    content:
      '“我们已经合作有一段时间了，百应给我们提供了专业且全面的解决方案，整体跑下来结果一直都不错。密切的合作让我们成为并肩前行的伙伴，期待未来我们一起创造更好的用户体验。”',
    personName: '新希望华西乳业数字增长负责人',
    tagName: '食品',
  },
  {
    bg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/%E5%9B%BE2.png',
    avatarSrc: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/logo2.png',
    content:
      '百应的产品和团队都很给力，能够快速响应需求，通过百应的私域加粉模型，我们为后续增长找到了抓手，同时避免了过度打扰用户，推荐有相应需求的伙伴来体验“百应AI外呼”。',
    personName: '运营负责人',
    tagName: '平台',
  },
  {
    bg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/%E5%9B%BE3.png',
    avatarSrc: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/logo3.png',
    content:
      '百应一直服务于我们的私域加粉业务，不仅AI产品很成熟，服务态度也好。每版新话术都认真配合我们做迭代优化，数据也越来越好。希望23年合作更愉快，更好地达成我们的指标。',
    personName: '流量运营部负责人',
    tagName: '食品',
  },
  {
    bg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/%E5%9B%BE4.png',
    avatarSrc: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/logo4.png',
    content:
      '百应基于行业痛点构建的「AI智能辅助系统」帮我们降低了人工投入的成本项，也为我们的老师和学员带来了很好的使用体验。希望在未来百应可以在这个领域有更多的创新。',
    personName: '运营负责人 ',
    tagName: '教育',
  },
  {
    bg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/%E5%9B%BE5.png',
    avatarSrc: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/logo5.png',
    content:
      '从2021年合作至今，百应科技真正的做到了把客户的业务当作自己的业务来做，专业程度很高，并且还在持续不断的去创新运营的方法和思路，也希望在未来有更多更加深度的合作。',
    personName: '运营负责人',
    tagName: '教育',
  },
  {
    bg: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/%E5%9B%BE6.png',
    avatarSrc: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/logo6.png',
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
            <SwiperSlide style={{ width: '295px' }}>
           
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

const CustomerWords: FC<ICustomerWordsProps> = ({}) => {
  return (
    <Pane title="顶尖资本支持，智领未来AI沟通新方式" paneBgColor="grey" 
    style={{ paddingBottom: 152}} 
    titleStyle={{marginBottom:'40px'}}
    mobileStyle={{ paddingBottom: 40 }}>
      <Hidden xs sm>
        <Carousel dataList={carouselDataList}></Carousel>
      </Hidden>
      <Visible xs sm>
        <CarouselMobile dataList={carouselDataList}></CarouselMobile>
      </Visible>
    </Pane>
  );
};

export default CustomerWords;
