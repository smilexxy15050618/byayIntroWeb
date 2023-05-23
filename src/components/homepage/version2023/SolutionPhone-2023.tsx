import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RightArrow, LefttArrow } from '@indata/icon-byai';
import Pane from './Pane';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import ByProgressSwiper from '../../common/ByProgressSwiper';
import imgurl from '../../../../img.url.js';
export type ICustomerWordsProps = {};

interface ICarouselProps {
  dataList: { content: string; img: string; span: string; p1: string; p2: string }[];
  style?: CSSProperties;
}

const HoveUp = styled.div`
  width: 1012px;
  margin-left: 46px;
  margin-right: 46px;
  .hoer_bg_more {
  }
`;
const CardContent = styled.aside`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  .title_xxx {
    text-align: center;
    p {
      span {
        font-size: 20px;
        font-weight: 500;
        line-height: 24px;
        color: rgba(43, 88, 249, 1);
      }
      &:nth-child(1) {
        font-size: 20px;
        font-weight: 500;
        margin-bottom: 8px;
        line-height: 24px;
        color: rgba(51, 51, 51, 1);
      }
      &:nth-child(2) {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        color: rgba(51, 51, 51, 1);
        margin-bottom: 35px;
      }
    }
  }
  .img_area {
    right: 0;

    img {
      margin: 0;
      transform: scale(1.03);
    }
  }
  .text_area {
    width: 100%;
    img {
      margin-bottom: unset;
    }
  }
  .info_area {
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 40px;
    color: rgba(90, 90, 90, 1);
  }
  .name_area {
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    color: rgba(90, 90, 90, 1);
    text-align: right;
    margin-top: 16px;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    span {
      font-size: 20px;
      font-weight: 500;
      line-height: 24px;
    }
  }
  .introduce_area {
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(90, 90, 90, 1);
  }
`;
const ArrowClick = styled.div`
  width: 48px;
  height: 48px;
  opacity: 1;
  align-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;

  img {
    width: 100%;
    cursor: pointer;
    &.nodrop {
      cursor: no-drop;
    }
  }
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
    <div style={{ width: '100%', margin: '0 auto', display: 'flex', justifyContent: 'center' }}>
      <ArrowClick
        onClick={e => {
          const res = controlledSwiper.navigation.onPrevClick(e);
        }}
        onMouseEnter={() => {
          // if(currIndex != 0){
          setArrowbg(`${imgurl}/xzleft.png`);
          // }
        }}
        onMouseLeave={() => {
          setArrowbg(imglegt);
        }}>
        <img
          src={arrowbg}
          //  className={currIndex == 0? 'nodrop': ''}
        />
      </ArrowClick>
      <HoveUp>
        <Swiper
          effect="slide"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
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
          style={{}}>
          {dataList.map(({ content, img, span, p1, p2 }, i) => (
            <SwiperSlide style={{ width: 'auto', paddingTop: 10 }} key={i} className="hoer_bg_more">
              <CardContent>
                <div className="title_xxx">
                  <p>
                    <span> {span}</span>
                    {p1}
                  </p>
                  <p> {p2}</p>
                </div>
                <div className="text_area">
                  <img src={img} />
                </div>
              </CardContent>
            </SwiperSlide>
          ))}
        </Swiper>
      </HoveUp>
      <ArrowClick
        onClick={e => {
          controlledSwiper.navigation.onNextClick(e);
        }}
        style={{}}
        onMouseEnter={() => {
          // if(currIndex !=1){
          setArrowbg2(`${imgurl}/xzright.png`);
          // }
        }}
        onMouseLeave={() => {
          setArrowbg2(imgright);
        }}>
        <img
          src={arrowbg2}
          //  className={currIndex == 1? 'nodrop': ''}
        />
      </ArrowClick>
    </div>
  );
};

const carouselDataList = [
  {
    span: '企业',
    p1: 'B2C数智化用户运营解决方案',
    p2: '助力品牌高效连接消费者，打造存量时代的会员运营服务，拉升会员LTV',
    img: imgurl + '/cjjjfa1.png',
  },
  {
    span: '政务',
    p1: 'G2C基层服务和治理自动化解决方案',
    p2: '打造数字化连接平台，助力政府高效服务及治理，提升平安建设三率',
    img: imgurl + '/cjjjfa2.png',
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
  width: 600px;
  height: 56px;
  display: flex;
  justify-content: center;
  width: 100%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.04);
`;
const LabelWrapper = styled.div`
font-size: 14px;
font-weight: 400;
letter-spacing: 0px;
line-height: 56px;
color: rgba(90, 90, 90, 1);


  width: 50%;
  height: 56px;
  text-align: center;
  cursor: pointer;
  &.active {
    color: rgba(43, 88, 249, 1);
    font-weight: 600;
    border-bottom: 2px solid rgba(43, 88, 249, 1);
  }
`;
const ContentWrapper = styled.div`
  width: 100%;
  // height: 432px;
  margin: 0 auto;
  margin-top: 30px;
  padding: 0 16px;
  // display: flex;
  // flex-direction: column;
  img {
    margin-bottom: 0;
  }
  .left {
    padding: 0 4px;
    width: 100%;
    height: 60px;
    overflow-x: scroll;
    display: flex;
    border-radius: 4px;
    color: #5a5a5a;
    margin-right: 4px;
    margin-bottom: 24px;

    &::-webkit-scrollbar {
      // height: 0.5em;
      display:none;
    }
    
    &::-webkit-scrollbar-track {
      background-color: #fff;
    }
    
    &::-webkit-scrollbar-thumb {
      background-color: #000;
    } 

    .active {
      background: rgba(43, 88, 249, 1);
      color: #fff;
    }
    div {
      min-width: 72px;
      max-width: 72px;
      height: 60px;
      background: rgba(246, 252, 255, 1);
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;
      padding: 12px 18px;
      margin-right: 10px;
      border-radius: 4px;
      text-align: center;
      span {
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 14px;
        white-space: nowrap;
      }
      img {
        width: 24px;
        height: 24px;
      }
    }
  }
  .right {
    position: relative;
    flex: 1;
    background: linear-gradient(154.05deg, rgba(43, 88, 249, 0) 0%, rgba(43, 88, 249, 0.13) 100%),
      rgba(246, 252, 255, 1);
    background-blend-mode: normal;
    padding: 24px 16px;
    border-radius: 4px;
    .labels {
      display: flex;
      justify-content: space-evenly;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 0px;
      line-height: 28px;
      color: rgba(43, 88, 249, 1);
      padding-bottom: 14px;
      div {
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 0px;
        line-height: 16px;
        color: rgba(43, 88, 249, 1);
        display: flex;
        white-space: nowrap;
        align-items: center;
        margin-right: 6px;
      }
      img {
        width: 16px;
        height: 16px;
        margin-left: 2px;
        margin-bottom: 0;
      }
    }
    img {
      margin-bottom: 0;
    }
    .posationbg {
      width: 110px;
      position: absolute;
      right: 0;

      bottom: 0;
    }
    .title {
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0px;
      line-height: 24px;
      color: rgba(26, 26, 26, 1);
      margin-bottom: 10px;
    }
    .desc {
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 22px;
      color: rgba(90, 90, 90, 1);
      margin-bottom: 18px;
      width: 100%;
    }
    .log_arrow {
      height: 32px;
      margin-bottom: 24px;
    }
    .bottomLogo {
      border-top: 1px solid rgba(0, 0, 0, 0.08);
      padding-top: 15px;
      padding-right: 70px;
      display: flex;
      flex-wrap: wrap;
      // justify-content: space-between;
      div {
        margin-bottom: 7px;
      }
    }
    .logo_bottom {
      width: 70px;
      height: 24px;
      margin-bottom: 0;
      margin-right: 8px;
    }
    .btnGroup {
      display: flex;
      margin-top: 24px;
    }
    .btnGroup > div {
      width: 60px;
      height: 22px;
      border-radius: 4px;
      text-align: center;
      cursor: pointer;
      font-size: 10px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 20px;
    }
    .ljzx {
        color: #fff;
        background: rgba(43, 88, 249, 1);
    }
    .ljgd {
      color: rgba(43, 88, 249, 1);
      border: 1px solid rgba(43, 88, 249, 1);
      box-sizing: border-box;
      margin-left: 16px;
    }
  }
`;

const labelInfo = [
  {
    name: '企业数字化',
    fontTitle: [
      '品牌零售行业解决方案',
      '互联网行业解决方案',
      '汽车行业解决方案',
      '保险行业解决方案',
      '消费金融行业解决方案',
      '银行行业解决方案',
    ],
    fontSubTitle: [
      '通过对话式AI实现对用户全生命周期的多触点精细化管理，助力品牌实现「极致用户体验+极致ROI」的全域增长服务',
      '通过AI技术和大数据分析，助力互联网企业提高用户运营的效率和质量，降低成本，提高用户留存率和转化率，实现用户增长和商业价值的提升',
      '建立用户运营触达策略、完善用户画像体系，以数智化提升车企用户服务能力及转化效果，达成客户体验闭环，驱动业务持续增长',
      '基于“大数据+AI+人”三驱模式，制定精准AI触达策略，深度挖掘客户意向，为保险行业提供智能化的营销和服务方案，提升服务效率和客户粘性',
      '针对消费金融业务全链路提供智能化用户运营方案，以转化效果为导向，驱动AI精细化触达策略升级，赋能机构转化效率提升',
      '全场景智能用户触达，助力银行实现数字化营销及服务转型，提高客户满意度和转化率，增强银行业务增长核心竞争力',
    ],
    labels: [
      ['会员召回', '复购转化', '会员关怀', '私域引流'],
      ['用户激活', '会员订阅', '活动通知', '用户分析'],
      ['线索筛选', '运营转化', '私域引流', '售后服务'],
      ['赠险营销', '赠险转短险', '合规质检', '意向筛选'],
      ['用户分层', '贷款营销', '客户服务', '催收管理'],
      ['信用卡贷款', '个性化营销', '客户服务', '风险控制'],
    ],
    urls: ['/retail', '/internet-solution', '', '/insure', '/customer-finance', ''],
    imgs: [
      ['lslogo1.png', 'lslogo2.png', '新希望logo.png', 'lslogo4.png', 'lslogo5.png'],
      ['hlwlogo1.png', 'hlwlogo2.png', 'hlwlogo3.png', 'hlwlogo4.png', 'hlwlogo5.png'],
      ['qclogo1.png', 'qclogo2.png', 'qclogo3.png', 'qclogo4.png', 'qclogo5.png'],
      ['bxlogo1.png', 'bxlogo2.png', 'bxlogo3.png', 'bxlogo4.png', 'bxlogo5.png'],
      ['xjlogo1.png', 'xjlogo2.png', 'xjlogo3.png', 'xjlogo4.png', 'xjlogo5.png'],
      ['yhlogo1.jpg', 'yhlogo2.jpg', 'yhlogo3.jpg', 'yhlogo4.jpg', 'yhlogo5.jpg'],
    ],
    banner: ['/001ls.png', '/002hlw.png', '/003qc.png', '/004bx.png', '/005xj.png', '/006yh.png'],
  },
  {
    name: '政务数字化',
    fontTitle: ['百应安盾电信网络诈骗预防平台', '易窗通办政务创新服务解决方案', '公安综治智能化解决方案'],
    fontSubTitle: [
      '以AI能力为核心，全链条贯通反诈的宣传劝阻业务流程，助力电诈“双降”，打造具备“点面结合，长短并行”能力的AI虚拟民警',
      '创新性打造以AI客服为核心的智慧型、一体化、可持续政务服务窗口，实现专业、智能、即时地响应居民业务办理需求，提升居民办事满意度',
      '率先推出具备咨询、服务、宣传、分享功能的虚拟IP民警，帮助公安树立统一对外的“警察朋友”形象，开辟基层治理服务新路径',
    ],
    labels: [
      ['高效劝阻', '有效宣传', '智能交互', '分类管理'],
      ['线上服务大厅', '智能AI客服', '社保帮办', '医保服务'],
      ['咨询服务', '业务导办', '工作宣传', '民意回访'],
    ],
    urls: ['/unfraud', '', ''],
    banner: ['/007fz.png', '/zwfw008.png', '/zz009.png'],
    imgs: [
      ['fzlogo1.png', 'fzlogo2.png', 'fzlogo3.png', 'fzlogo4.png', 'fzlogo5.png'],
      ['zwlogo1.png', 'zwlogo2.png', 'zwlogo3.png', 'zwlogo4.png', 'zwlogo5.png'],
      ['zzlogo1.png', 'zzlogo2.png', 'zzlogo3.png', 'zzlogo4.png', 'zzlogo5.png'],
    ],
  },
];
const leftMenuList = [
  [
    {
      icon: '/ppls_icon1.svg',
      icon2: '/ppls_icon1lght.png',
      label: '品牌零售',
    },
    {
      icon2: '/ppls_icon2lght.png',

      icon: '/internet_icon1.svg',
      label: '互联网',
    },
    {
      icon2: '/ppls_icon3lght.png',

      icon: '/car_icon1.svg',
      label: '汽车',
    },
    {
      icon2: '/ppls_icon4lght.png',

      icon: '/insure_icon1.svg',
      label: '保险',
    },
    {
      icon2: '/ppls_icon5lght.png',

      icon: '/xj_icon1.svg',
      label: '消费金融',
    },
    {
      icon2: '/ppls_icon6lght.png',

      icon: '/bank_icon1.svg',
      label: '银行',
    },
  ],
  [
    {
      icon: '/gafz_icon1.svg',
      icon2: '/gafz_icon1lght.svg',
      label: '公安反诈',
    },
    {
      icon2: '/zwfw_icon1lght.svg',
      icon: '/zwfw_icon1.svg',
      label: '政务服务',
    },
    {
      icon2: '/zz_icon1lght.svg',
      icon: '/zz_icon1.svg',
      label: '公安综治',
    },
  ],
];
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
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={24}
          // onSwiper={swiper => setControlledSwiper(swiper)}
          onSlideChange={swiper => {
            setCurrIndex(swiper.activeIndex);
          }}>
          {dataList.map(({ bg, avatarSrc, content, personName, tagName }, i) => (
            <SwiperSlide style={{ width: '295px' }} key={i}></SwiperSlide>
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

const SolutionPhone: FC<ICustomerWordsProps> = ({}) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [currIndexicon, setCurrIndexicon] = useState(0);
  return (
    <Pane
      style={{ paddingBottom: 40, padding: 0 }}>
      <div style={{ textAlign: 'center', fontSize: '24px',fontWeight: '500',letterSpacing: '0px',lineHeight: '32px',color: 'rgba(0, 0, 0, 1)' }}>定制化行业解决方案</div>
      <div style={{ marginBottom: '20px', textAlign: 'center', fontSize: '24px',fontWeight: '500',letterSpacing: '0px',lineHeight: '32px',color: 'rgba(0, 0, 0, 1)' }}>卓越的用户运营体验</div>
      <LabelList>
        {labelInfo.map(({ name }, i) => {
          return (
            <LabelWrapper
              onClick={() => {
                setCurrIndex(i);
                if (i != currIndex) {
                  setCurrIndexicon(0);
                }
              }}
              className={i == currIndex ? 'active' : ''}>
              {name}
            </LabelWrapper>
          );
        })}
      </LabelList>
      <ContentWrapper>
        <div className="left">
          {leftMenuList[currIndex].map((item, i) => {
            return (
              <div
                onClick={() => {
                  setCurrIndexicon(i);
                }}
                className={i == currIndexicon ? 'active' : ''}>
                <img src={i == currIndexicon ? imgurl + item.icon2 : imgurl + item.icon} alt="" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
        <div className="right">
          <img className="posationbg" src={imgurl + labelInfo[currIndex].banner[currIndexicon]} />
          <div className="title">{labelInfo[currIndex].fontTitle[currIndexicon]}</div>
          <div className="desc">{labelInfo[currIndex].fontSubTitle[currIndexicon]}</div>
          <div className="labels">
            {labelInfo[currIndex].labels &&
              labelInfo[currIndex].labels[currIndexicon].map((items, index) => {
                return (
                  <div>
                    <img src={imgurl + '/solu_icon.png'} alt="" />
                    {items}
                  </div>
                );
              })}
          </div>
          <div className="bottomLogo">
            {labelInfo[currIndex].imgs &&
              labelInfo[currIndex].imgs[currIndexicon].map((item, index) => {
                return <div><img src={imgurl + '/' + item} className="logo_bottom" alt="" /></div>;
              })}
          </div>
          <div className="btnGroup">
            <div onClick={() => window.open('/form?formType=1')} className="ljzx">
              立即咨询
            </div>
            <div
              onClick={() => {
                if (labelInfo[currIndex].urls[currIndexicon]) {
                  window.open(labelInfo[currIndex].urls[currIndexicon]);
                }
              }}
              className="ljgd">
              了解更多
            </div>
          </div>
        </div>
      </ContentWrapper>
      <Visible xs sm>
        {/* <CarouselMobile dataList={carouselDataList}></CarouselMobile> */}
      </Visible>
    </Pane>
  );
};

export default SolutionPhone;
