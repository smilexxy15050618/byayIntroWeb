import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';
import { RightArrow, LefttArrow } from '@indata/icon-byai';
import Pane from './Pane';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import ByProgressSwiper from '../../common/ByProgressSwiper';
import imgurl from '../../../../img.url.js';

export type ICustomerWordsProps = {};

interface ICarouselProps {
  dataList: { bg: string; content: string; avatarSrc: string; personName: string; tagName: string }[];
  style?: CSSProperties;
}

const CardContent = styled.div`
  flex: 1;
  padding: 17px 24px 0;
  @media (max-width: 768px) {
    padding: 12px 18px 0;
  }
  position: relative;

  .customer-words-icon {
    margin-bottom: 16px;
    img {
      height: 40px;
      margin-bottom: 0;
    }
    background: #ffffff;
    @media (max-width: 768px) {
      margin-bottom: 20px;
      width: 92px;
      height: 30px;
    }
  }
  .customer-words-desc {
    height: 80px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(10, 15, 44, 0.55);
    line-height: 28px;
    text-align: justify;
    @media (max-width: 768px) {
      font-size: 13px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      line-height: 20px;
    }
  }
  .customer-words-name {
    border-top: 0.5px solid rgba(90, 90, 90, 0.2);
    padding-top: 24px;
    /* font-size: 18px; */
    font-family: PingFangSC-Regular, PingFang SC;
    color: #000000;
    display: flex;
    margin-bottom: 32px;
    .leftPskjak {
      width: 50%;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .line_sks {
        position: absolute;
        width: 0;
        height: 23px;
        right: 0;
        opacity: 1;
        border-left: 0.5px solid rgba(90, 90, 90, 0.3);
      }
    }
    .rightPskjak {
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    .tiels {
      font-size: 24px;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 32px;
      color: rgba(51, 51, 51, 1);
    }
    .yiksdp {
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 24px;
      color: rgba(90, 90, 90, 1);
      margin-bottom: unset;
    }
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
  min-height: 357px;
  background: #ffffff;
  box-shadow: 0px 0px 32px 1px rgba(101, 115, 133, 0.1);
  border-radius: 8px;
  margin-left: 32px;
  transition: all 0.2s ease;
  .customerbner {
    width: 100%;
    position: relative;
    img {
      margin-bottom: unset;
    }
    .icon23 {
      width: 100px;
      position: absolute;
      left: 0;
      top: 0;
      border-radius:0 0 8px 0;
      z-index: 2;
    }
    .mengbanm {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      background: rgba(20, 20, 20, 0.39);
    }
  }
  &:hover {
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
    position: absolute;
    top: 0;
    left: 0;
    width: 385px;
    height: 220px;
    background: rgba(43, 88, 249, 0.39);
  }
  .customer-words-tag {
    display: flex;
    align-items: center;
    z-index: 22;
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
  .swiper-wrapper {
    // transition-duration: 3000ms !important;
    transition-timing-function: linear !important;
  }
  .swiper-container {
    overflow: scroll !important;
  }
  .hoer_bg_more {
    transition: all 0.3s;
    &:hover {
      transform: translateY(-19px);
    }
  }
`;
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
let imglegt = `https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/%E5%B7%A6.png`;
let imgright = `https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E6%A1%88%E4%BE%8B/%E5%8F%B3.png`;

const Carousel: React.FC<ICarouselProps> = ({ dataList, style }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [currIndex, setCurrIndex] = useState(0);
  const [arrowbg, setArrowbg] = useState(imglegt);
  const [arrowbg2, setArrowbg2] = useState(imgright);
  return (
    <div style={style}>
      {/* <RightArrow className="next-btn swiper-nav-btn" onClick={e => controlledSwiper.navigation.onNextClick(e)} /> */}
      {/* <LefttArrow className="prev-btn swiper-nav-btn" onClick={e => controlledSwiper.navigation.onPrevClick(e)} /> */}
      <HoveUp>
        <Swiper
          effect="slide"
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          mousewheel="true"
          slidesPerView="auto"
          speed={7000}
          centeredSlides={false}
          onSwiper={swiper => setControlledSwiper(swiper)}
          onSlideChange={swiper => {
            setCurrIndex(swiper.activeIndex);
          }}
          style={{ paddingRight: 32, paddingBottom: 30, marginBottom: -30, paddingTop: 20 }}>
          {dataList.map(
            (
              { bg, avatarSrc, content,avatHeight, personName, tagName, icon, left_title, left_title2, right_title, right_title2 },
              i,
            ) => (
              <SwiperSlide style={{ width: 'auto' }} className="hoer_bg_more" key={i}>
                <Card bg={bg}>
                  {/* <div className="customer-words-tag">
                <img src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/earth.png" />
                {tagName}
              </div> */}
                  {/* <div className="customer-words-bg"></div> */}
                  {/* <div className="customer-words-bg-blue"></div> */}
                  <div className="customerbner">
                    <img src={bg} alt="" />
                    <img src={icon} className="icon23" />
                    <div className="mengbanm"></div>
                  </div>
                  <CardContent>
                    <div className="customer-words-icon">
                      {/* {avatHeight? <img src={avatarSrc} style={{height:avatHeight+'px'}}/>: <img src={avatarSrc} />} */}
                      <img src={avatarSrc} style={{height:avatHeight+'px'}}/>
                    </div>
                    <div className="customer-words-desc">{content}</div>
                    <div className="customer-words-name">
                      <div className="leftPskjak">
                        <div className="tiels">{left_title2}</div>
                        <p className="yiksdp">{left_title}</p>
                        <div className="line_sks"></div>
                      </div>
                      <div className="rightPskjak">
                        <div className="tiels">{right_title2}</div>
                        <p className="yiksdp">{right_title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ),
          )}
        </Swiper>
      </HoveUp>
      {/* <ArrowGroup>
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
      </ArrowGroup> */}
    </div>
  );
};

const carouselDataList = [
  {
    bg: `${imgurl}/新希望-图.png`,
    avatarSrc: `${imgurl}/新希望logo.png`,
    content: '百应给我们提供了专业且全面的解决方案，一起创造更好的用户体验',
    personName: '单场活动触达用户百万级；会员召回率提升15%；',
    left_title: '单场活动触达用户',
    left_title2: '百万级',
    right_title: '会员召回率提升',
    right_title2: '15%',
    tagName: '新希望集团',
    icon: `${imgurl}/lscion11.png`,
  },
  {
    bg: `${imgurl}/可优比-图.png`,
    avatarSrc: `${imgurl}/可优比logo.png`,
    content: 'AI外呼已具备真实的交互感和温度感，能实现快速触达和高效转化',
    personName: '会员关怀度提升10%，接通意向率超40%',
    tagName: '可优比',
    icon: `${imgurl}/lscion11.png`,
    left_title: '会员关怀度提升',
    left_title2: '10%',
    right_title: '接通意向率',
    right_title2: '超40%',
  },
  {
    bg: `${imgurl}/特步-图.png`,
    avatarSrc: `${imgurl}/特步logo.png`,
    content: '百应科技真的做到了把客户的业务当做自己的业务来做',
    personName: '线下到店率增量40%，ROI100+',
    tagName: '特步',
    icon: `${imgurl}/lscion11.png`,
    left_title: '线下到店率增量',
    left_title2: '40%',
    right_title: 'ROI',
    right_title2: '100+',
  },
  {
    bg: `${imgurl}/樊登读书-图.png`,
    avatarSrc: `${imgurl}/樊登读书logo.png`,

    content: '百应AI降低了人工投入的成本项，带来了很好的用户体验',
    personName: '触达成本降低35%；会员续费转化增长2倍 ',
    tagName: '樊登读书',
    icon: `${imgurl}/lscion12.png`,
    left_title: '触达成本降低',
    left_title2: '35%',
    right_title: '会员续费转化增长',
    right_title2: '2倍',
  },
  {
    bg: `${imgurl}/转转-图.png`,
    avatarSrc: `${imgurl}/转转logo.png`,

    content: '百应的产品和团队都很给力，推荐有相应需求的伙伴来体验',
    personName: '回收率提升至40%+，用户黏性有效提升',
    tagName: '转转',
    icon: `${imgurl}/lscion12.png`,
    left_title: '回收率提升至',
    left_title2: '40%+',
    right_title: '用户黏性',
    right_title2: '有效提升',
  },

  {
    bg: `${imgurl}/腾讯1.png`,
    avatarSrc: `${imgurl}/腾讯2.png`,

    content: '百应AI解决方案非常专业，是真正的行业创新引领者',
    personName: 'AI标记准确率97%；触达人效提升3倍',
    tagName: '腾讯',
    icon: `${imgurl}/lscion12.png`,
    left_title: '触达成功率',
    left_title2: '70%+',
    right_title: '有效沟通时长超',
    right_title2: '60s',
  },
  {
    bg: `${imgurl}/农行-图.png`,
    avatarSrc: `${imgurl}/农行logo.png`,

    content: '用AI和数据赋能银行业务，实现了效率效能双增长',
    personName: '有效沟通时长>60s ，客户转化率提高了5%',
    tagName: '中国农业银行',
    icon: `${imgurl}/lscion13.png`,
    left_title: '有效沟通时长',
    left_title2: '>60s',
    right_title: '客户转化率提高了',
    right_title2: '5%',
  },
  ,
  {
    bg: `${imgurl}/天津公安-图.png`,
    avatarSrc: `${imgurl}/天津公安logo.png`,

    content: '用AI的力量助力政府数字化转型',
    personName: '立案率下降27.8%，案损率下降14.8%',
    tagName: '天津市公安局',
    icon: `${imgurl}/lscion14.png`,
    left_title: '立案率下降',
    left_title2: '27.8%',
    right_title: '案损率下降',
    right_title2: '14.8%',
  },
  {
    bg: `${imgurl}/临平公安-图.png`,
    avatarSrc: `${imgurl}/临平logo.png`,
    avatHeight:'45',
    content: '24小时在线的警察朋友',
    personName: '累计加民人数106w+，有效解答咨询次数4w+',
    tagName: '临平区公安局',
    icon: `${imgurl}/lscion14.png`,
    left_title: '累计加民人数',
    left_title2: '106w+',
    right_title: '有效解答咨询次数',
    right_title2: '4w+',
  },
  {
    bg: `${imgurl}/杭州舍保-图.png`,
    avatarSrc: `${imgurl}/杭州社保logo.png`,

    content: '让数字化服务走到群众身边',
    personName: '日均服务人次800+；综合满意度90%',
    tagName: '杭州市人社局',
    icon: `${imgurl}/lscion15.png`,
    left_title: '日均服务人次',
    left_title2: '800+',
    right_title: '综合满意度',
    right_title2: '90%',
  },
  {
    bg: `${imgurl}/联通1.png`,
    avatarSrc: `${imgurl}/联通2.png`,

    content: '百应科技是一家值得信赖的企业，我们的合作非常愉快',
    personName: 'AI标记准确率97%；触达人效提升3倍',
    tagName: '中国联通',
    icon: `${imgurl}/lscion28.png`,
    right_title: '触达效果提升',
    right_title2: '82%',
    left_title: '日均触达用户超',
    left_title2: '百万',
  },
  {
    bg: `${imgurl}/人寿-图.png`,
    avatarSrc: `${imgurl}/人寿logo.png`,

    content: '用科技赋能，百应AI助力加快实施数字化战略',
    personName: '线索转化率提升200%；赠险转化率15%+',
    tagName: '中国人寿',
    icon: `${imgurl}/lscion16.png`,
    left_title: '线索转化率提升',
    left_title2: '200%',
    right_title: '赠险转化率',
    right_title2: '15%+',
  },
  {
    bg: `${imgurl}/招联-图.png`,
    avatarSrc: `${imgurl}/招联logo.png`,

    content: '百应助力我们私域业务人效提升，期待更深入的合作',
    personName: '业务人效提升100%；转化效果提升60%',
    tagName: '招联金融',
    icon: `${imgurl}/lscion17.png`,
    left_title: '业务人效提升',
    left_title2: '100%',
    right_title: '转化效果提升',
    right_title2: '60%',
  },

  {
    bg: `${imgurl}/瓜子-图.png`,
    avatarSrc: `${imgurl}/瓜子logo.png`,

    content: '用户运营效果很好，为后续增长找到了抓手',
    personName: 'AI标记准确率97%；触达人效提升3倍',
    tagName: '瓜子二手车',
    icon: `${imgurl}/lscion18.png`,
    left_title: 'AI标记准确率',
    left_title2: '97%',
    right_title: '触达人效提升',
    right_title2: '3倍',
  },

  {
    bg: `${imgurl}/移动1.png`,
    avatarSrc: `${imgurl}/移动2.png`,

    content: '百应AI的真实交互感和温度感，为我们带来了高效的用户触达和卓越的转化效果',
    personName: 'AI标记准确率97%；触达人效提升3倍',
    tagName: '中国移动',
    icon: `${imgurl}/lscion28.png`,
    left_title: '用户转化率提高',
    left_title2: '10%',
    right_title: '综合人效显著',
    right_title2: '提升',
  },
 
  {
    bg: `${imgurl}/百度1.png`,
    avatarSrc: `${imgurl}/百度2.png`,

    content: '百应的产品和团队非常给力，期待后续的深入合作',
    personName: 'AI标记准确率97%；触达人效提升3倍',
    tagName: '百度',
    icon: `${imgurl}/lscion12.png`,
    left_title: '用户活跃度增长',
    left_title2: '10%',
    right_title: '客户满意度提高',
    right_title2: '25%',
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
  &.appear {
    transform: translateY(0);
    opacity: 1;
  }
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
            delay: 0, //自动切换的时间间隔
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          mousewheel="true"
          slidesPerView="auto"
          centeredSlides={false}
          spaceBetween={24}
          // onSwiper={swiper => setControlledSwiper(swiper)}
          onSlideChange={swiper => {
            setCurrIndex(swiper.activeIndex);
          }}>
          {dataList.map(({ bg, avatarSrc, content, personName, tagName,avatHeight }, i) => (
            <SwiperSlide style={{ width: '295px' }} key={i}>
              <Card bg={bg}>
                <div className="customer-words-tag">
                  <img src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/earth.png" />
                  {tagName}
                </div>
                <div className="customer-words-bg"></div>
                <CardContent>
                  <div className="customer-words-icon">
                    <img src={avatarSrc} style={{height:avatHeight-10+'px'}}/>

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
export const CustomerId = 'customer_id';
const CustomerIdwrap = 'customer_id_wrap';

const CustomerWords: FC<ICustomerWordsProps> = ({}) => {
  const myRef = useRef(null);
  useEffect(() => {
    const timer = setInterval(() => {
      // console.log(myRef.current,'myRef.current');

      if (myRef.current) {
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
          // .setClassToggle('.video-wrapper-sticky', 'appear')
          .addTo(controller)
          .on('enter', () => {
            videoContent.classList.add('appear');
            controller.destroy();
          });
      }
    });
  }, [myRef]);
  return (
    <Pane
      id={CustomerId}
      title="众多政府机构及头部企业的信赖之选"
      titleStyle={{ marginBottom: '53px' }}
      paneBgColor="grey"
      style={{ paddingBottom: 70,background:'rgba(246, 252, 255, 1)' }}
      mobileStyle={{ paddingBottom: 40 }}>
      <Hidden xs sm>
        <MainWrap id={CustomerIdwrap} ref={myRef}>
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
