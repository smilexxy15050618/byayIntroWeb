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
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
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
width: 600px;
height: 56px;
display: flex;
justify-content: center;
width: 100%;
border-bottom: 2px solid rgba(0, 0, 0, 0.04);
`
const LabelWrapper = styled.div`
width: 600px;
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
width: 1200px;
margin: 0 auto;
margin-top: 30px;
display: flex;
img {
  margin-bottom: 0;
}
.left {
  width: 200px;
  /* height: 361px; */
  background: #F6FCFF;
  border-radius: 4px;
  color: #5A5A5A;
  .active{
    background: rgba(43, 88, 249, 1);
    color: #fff;
  }
  div {
    display: flex;
    align-items: center;
    width: 200px;
    height: 72px;
    cursor: pointer;
    padding-left: 24px;
    span {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      
    }
    img {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
  }
}
.right{
  position: relative;
  flex: 1;
  background: linear-gradient(154.05deg, rgba(43, 88, 249, 0) 0%, rgba(43, 88, 249, 0.13) 100%), rgba(246, 252, 255, 1);
background-blend-mode: normalnormal;
padding:40px 64px ;
.labels {
  display: flex;
  font-size: 22px;
font-weight: 600;
letter-spacing: 0px;
line-height: 28px;
color: rgba(43, 88, 249, 1);
padding-bottom: 24px;
div {
  display: flex;
  align-items: center;
  margin-right: 16px;
}
  img {
    width: 32px;
    height: 32px;
    margin-left: 4px;
    margin-bottom: 0;
  }
}
img{
  margin-bottom: 0;
}
.posationbg{
  width: 288px;
  position: absolute;
  right: 0;
  
  bottom: 0;
}
.title{
  font-size: 28px;
font-weight: 500;
line-height: 32px;
color: rgba(26, 26, 26, 1);
margin-bottom: 16px;
}
.desc{
  font-size: 16px;
font-weight: 400;
line-height: 24px;
color: rgba(90, 90, 90, 1);
margin-bottom: 18px;
width: 700px;
}
.log_arrow{
  height: 32px;
  margin-bottom: 24px;
}
.bottomLogo{
  border-top: 1px solid rgba(0, 0, 0, 0.08);
  padding-top: 30px;
  width: 604px;
  display: flex;
  justify-content: space-between;
}
.logo_bottom{
  height: 29px;
  margin-bottom: 0;
}
.btnGroup{
  display: flex;
}
.btnGroup>div{
  width: 120px;
  margin-top: 60px;
height: 36px;
border-radius: 4px;
text-align: center;
line-height: 36px;
cursor: pointer;
}
.ljzx{
  color: #fff;
  background: rgba(43, 88, 249, 1);
}
.ljgd{
  color: rgba(43, 88, 249, 1);
  border: 1px solid rgba(43, 88, 249, 1);
  box-sizing: border-box;
  margin-left: 16px;
}
}
`

const labelInfo = [
  {
      name: '企业数智化用户运营解决方案',
      labels: [
        ['会员召回','复购转化', '会员关怀','私域引流'],
        ['用户激活','会员订阅', '活动通知',  '用户分析'],
        ['线索筛选',  '运营转化',  '私域引流',  '售后服务'],
        ['赠险营销', '赠险转短险', '合规质检',  '意向筛选'],
        ['用户分层', '贷款营销', '客户服务', '催收管理'],
        ['信用卡贷款',  '个性化营销',  '客户服务', '风险控制'],
      
      ],
      urls: ['/retail','/internet-solution','/newcar','/insure','/customer-finance',''],
      imgs: [
        ['lslogo1.png','lslogo2.png','lslogo3.png','lslogo4.png','lslogo5.png'],
        ['hlwlogo1.png','hlwlogo2.png','hlwlogo3.png','hlwlogo4.png','hlwlogo5.png'],
        ['qclogo1.png','qclogo2.png','qclogo3.png','qclogo4.png','qclogo5.png'],
        ['bxlogo1.png','bxlogo2.png','bxlogo3.png','bxlogo4.png','bxlogo5.png'],
        ['xjlogo1.png','xjlogo2.png','xjlogo3.png','xjlogo4.png','xjlogo5.png'],
        ['yhlogo1.jpg','yhlogo2.jpg','yhlogo3.jpg','yhlogo4.jpg','yhlogo5.jpg'],
      ],
      banner: ['/001ls.png','/002hlw.png','/003qc.png','/004bx.png','/005xj.png','/005xj.png']
  },
  {
      name: '政府基层服务和治理自动化解决方案',
      labels: [
        ['高效劝阻', '有效宣传', '智能交互', '分类管理'],
      ['线上服务大厅',  '智能AI客服', '社保帮办', '医保服务'],
      ['居民咨询服务', '群众业务导办', '工作宣传', '民意回访']
    ],
    urls: ['/unfraud','',''],
    banner: ['/007fz.png','/007fz.png','/007fz.png'],
      imgs: [
        ['fzlogo1.png','fzlogo2.png','fzlogo3.png','fzlogo4.png','fzlogo5.png'],
        ['zwlogo1.png','zwlogo2.png','zwlogo3.png','zwlogo4.png','zwlogo5.png'],
        ['zzlogo1.png','zzlogo2.png','zzlogo3.png','zzlogo4.png','zzlogo5.png']
      ]
  }
]
const leftMenuList = [
  [
    {
      icon: '/ppls_icon1.svg',
      icon2:'/ppls_icon1lght.png',
      label: '品牌零售'
    },
    {
  
      icon2:'/ppls_icon2lght.png',
  
      icon: '/internet_icon1.svg',
      label: '互联网'
      
    },
    {
      icon2:'/ppls_icon3lght.png',
  
      icon: '/car_icon1.svg',
      label: '汽车'
    },
    {
      icon2:'/ppls_icon4lght.png',
  
      icon: '/insure_icon1.svg',
      label: '保险'
    },
    {
      icon2:'/ppls_icon5lght.png',
  
      icon: '/xj_icon1.svg',
      label: '消费金融'
    },
    {
      icon2:'/ppls_icon6lght.png',
  
      icon: '/bank_icon1.svg',
      label: '银行'
    },
  ],
  [
  {
    icon: '/gafz_icon1.svg',
    icon2:'/gafz_icon1lght.svg',
    label: '公安反诈'
  },
  {

    icon2:'/zwfw_icon1lght.svg',
    icon: '/zwfw_icon1.svg',
    label: '政务服务'
    
  },
  {
    icon2:'/zz_icon1lght.svg',
    icon: '/zz_icon1.svg',
    label: '公安综治'
  },
  ]
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
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
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
  const [currIndexicon,setCurrIndexicon] = useState(0);
  return (
    <Pane title="全场景解决方案"
    style={{ paddingBottom: 80}} 
    titleStyle={{marginBottom:'24px'}}
    mobileStyle={{ paddingBottom: 40 }}>
      <Hidden xs sm>
      <LabelList>
            {labelInfo.map(({name},i)=> {
                return (
                    <LabelWrapper onClick={()=>{setCurrIndex(i);if(i==1){setCurrIndexicon(0)}}} className={i==currIndex?'active':''}>
                        {name}
                    </LabelWrapper>
                    
                )
            })}
        </LabelList>
        <ContentWrapper>
                   <div className='left'>
                     {leftMenuList[currIndex].map((item,i)=> {
                      return(<div onClick={()=>{
                        setCurrIndexicon(i)
                      }} className={i == currIndexicon?'active':''}>
                        <img src={i == currIndexicon?imgurl+item.icon2 : imgurl+item.icon} alt="" />
                        <span>{item.label}</span>
                      </div>)
                     })}
                   </div>
                   <div className='right'>
                    <img className='posationbg' src={imgurl+labelInfo[currIndex].banner[currIndexicon]} />
                      <div className='title'>品牌零售解决方案</div>
                      <div className='desc'>通过对话式AI实现对用户全生命周期的多触点精细化管理，助力品牌实现「极致用户体验+极致ROI」的全域增长服务</div>
                      <div className='labels'>
                        {labelInfo[currIndex].labels&&labelInfo[currIndex].labels[currIndexicon].map((items,index)=> {
                          return (<div>
                            <img src={imgurl+'/solu_icon.png'} alt="" />
                            {items}
                          </div>)
                        })}
                      </div>
                      <div className='bottomLogo'>
                            {labelInfo[currIndex].imgs&&labelInfo[currIndex].imgs[currIndexicon].map((item,index)=> {
                              return <img src={imgurl+'/'+item} className='logo_bottom' alt="" />
                            })}
                      </div>
                      <div className='btnGroup'>
                          <div onClick={() =>
                        window.open('/form?formType=1')
                      } className='ljzx'>立即咨询</div>
                          <div onClick={()=> window.open(labelInfo[currIndex].urls[currIndexicon])} className='ljgd'>了解更多</div>
                      </div>
                   </div>

                 
                   
        </ContentWrapper>
      </Hidden>
      <Visible xs sm>
        {/* <CarouselMobile dataList={carouselDataList}></CarouselMobile> */}
      </Visible>
    </Pane>
  );
};

export default Solution;
