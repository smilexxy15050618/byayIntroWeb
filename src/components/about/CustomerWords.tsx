import React, { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Pane from './Pane';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import imgurl from '../../../img.url.js'

export type ICustomerWordsProps = {};

interface ICarouselProps {
  dataList: { bg: string; content: string; avatarSrc: string; personName: string; tagName: string }[];
  style?: CSSProperties;
}

const CardContent = styled.div`
  flex: 1;
  position: relative;
  background: #ffffff;
  .customer-words-icon {
    height: 164px;
    img{
      height: 164px;
      margin-bottom:0;
    }
  }
  .customer-words-desc {
    padding: 40px 24px;
    font-size: 20px;
    line-height: 32px;
    color: rgba(26, 26, 26, 1);
  }
  .customer-words-name {
    padding-left: 24px;
    font-size: 16px;
    letter-spacing: 0px;
    line-height: 0px;
    color: rgba(43, 88, 249, 1);
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
`;
const ArrowClickL = styled.div<{ normalBg?: string, activeBg?: string }>`

  width: 48px;
  height: 48px;

  background-image: ${props => `url(${props.normalBg})`};
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  &:hover{
    background-image: ${props => `url(${props.activeBg})`};
  }
`
const ArrowClickR = styled.div<{ normalBg?: string, activeBg?: string }>`

  width: 48px;
  height: 48px;

  background-image: ${props => `url(${props.normalBg})`};
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  &:hover{
    background-image: ${props => `url(${props.activeBg})`};
  }
`

const Carousel: React.FC<ICarouselProps> = ({ dataList, style }) => {
  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [currIndex, setCurrIndex] = useState(0);
  return (
    <div style={style}>
      <HoveUp >
      <Swiper
        autoplay={{
          delay: 5000,
        }}
        loop={true}
        slidesPerView="auto"
        onSwiper={swiper => setControlledSwiper(swiper)}
        onSlideChange={swiper => {
          setCurrIndex(swiper.activeIndex);
        }}
        style={{ paddingRight: 32, overflow: 'hidden', paddingBottom: 30, marginBottom: -30, paddingTop:20 }}>
        {dataList.map(({ avatarSrc, content, linkUrl }, i) => (
          <SwiperSlide style={{ width: 'auto' }} className='hoer_bg_more'>
            <Card >
              <CardContent>
                <div className="customer-words-icon">
                  <img src={avatarSrc} />
                </div>
                <div className="customer-words-desc">{content}</div>
                <a className="customer-words-name" href={linkUrl}>查看详情 →</a>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      </HoveUp>
      <ArrowGroup>
        <ArrowClickL 
          onClick={e => {
            const res = controlledSwiper.navigation.onPrevClick(e);
          }}
          normalBg={`${imgurl}/slide-left-normal.png`}
          activeBg={`${imgurl}/slide-left-active.png`}
        >
        </ArrowClickL>
        <ArrowClickR 
          onClick={e => {
            controlledSwiper.navigation.onNextClick(e);
          }}
          normalBg={`${imgurl}/slide-right-normal.png`}
          activeBg={`${imgurl}/slide-right-active.png`}
        >
        </ArrowClickR>
      </ArrowGroup>  
    </div>
  );
};

const carouselDataList = [
  {
    avatarSrc:`${imgurl}/honor-1.jpeg`,
    content:'“创新引领｜百应科技荣登《2023中国未来独角兽TOP100榜单》',
    linkUrl: 'https://mp.weixin.qq.com/s/1yppgDXsWYBGhyeC14-sKg',
  },
  {
    avatarSrc:`${imgurl}/honor-2.jpg`,
    content:'“引领对话式AI，百应科技入选艾瑞《2022中国人工智能产业研究报告》',
    linkUrl: 'https://mp.weixin.qq.com/s/B5PsNbhgrzjIfoZyIFel6A',
  },
  {
    avatarSrc:`${imgurl}/honor-3.jpg`,
    content:'“百应科技入选「AI中国」 2022 最佳人工智能企业TOP30',
    linkUrl: 'https://mp.weixin.qq.com/s/sszrNGf_PgyrDjEnrJRTUw',
  },
  {
    avatarSrc:`${imgurl}/honor-4.jpg`,
    content:'百应科技实力入选「2022中国企业数智化创新TOP50」榜单',
    linkUrl: 'https://mp.weixin.qq.com/s/irAz2DFmGIZAenwn_YR4ug',
  },
  {
    avatarSrc:`${imgurl}/honor-5.jpeg`,
    content:'领航数智创新｜百应科技荣获亿邦未来零售“2022数字化突出贡献奖”',
    linkUrl: 'https://mp.weixin.qq.com/s/69l7_d5Cyfv-rclQp7aHgg',
  },
  {
    avatarSrc:`${imgurl}/honor-6.jpg`,
    content:'百应科技项目入选2022年杭州市第三批重点建设人工智能应用场景',
    linkUrl: 'https://mp.weixin.qq.com/s/R4FrsYO3tu8qaQlxYhfeJQ',
  },
  {
    avatarSrc:`${imgurl}/honor-7.jpeg`,
    content:'工信部公示“智赋百景”，百应科技荣誉入选',
    linkUrl: 'https://mp.weixin.qq.com/s/igc5Z-Lu8AeoSoqJ3ZZDYw',
  },
  {
    avatarSrc:`${imgurl}/honor-8.jpeg`,
    content:'参编《2022浙江省人工智能产业发展报告》，百应硬核展现“再上分”',
    linkUrl: 'https://mp.weixin.qq.com/s/ZIO9FaodpCTOaEV3-Akkyg',
  },
  {
    avatarSrc:`${imgurl}/honor-9.jpeg`,
    content:'百应获得CMMI 5级国际权威认证，跻身全球软件业开发能力最高水平！',
    linkUrl: 'https://mp.weixin.qq.com/s/MSDRE6jemrK3kYIsH9xHWA',
  },
  {
    avatarSrc:`${imgurl}/honor-10.jpeg`,
    content:'百应科技获评腾讯智慧零售“千域计划年度认证合作伙伴”',
    linkUrl: 'https://mp.weixin.qq.com/s/Lgb0LkS_jQ9Zs85hiMdAmA',
  },
  {
    avatarSrc:`${imgurl}/honor-11.jpg`,
    content:'百应科技获评机器之心「最具商业价值解决方案」',
    linkUrl: 'https://mp.weixin.qq.com/s/rak-d_8n-r3MhijE7-jeuA',
  },
  {
    avatarSrc:`${imgurl}/honor-12.jpeg`,
    content:'再获认可！百应获评省高新技术企业研发中心',
    linkUrl: 'https://mp.weixin.qq.com/s/2hkDciDqLt-MUj5rDWTKdw',
  },
  {
    avatarSrc:`${imgurl}/honor-13.jpg`,
    content:'百应科技荣获2021年浙江软件核心竞争力企业',
    linkUrl: 'https://mp.weixin.qq.com/s/BKdLbKibu4iA5MHZZqc-fg',
  },
  {
    avatarSrc:`${imgurl}/honor-14.jpeg`,
    content:'致创新 见未来 | 百应获评「2021全球人工智能创新应用企业」',
    linkUrl: 'https://mp.weixin.qq.com/s/A-RNY56pT6mg7fWrEFHkNA',
  },
  {
    avatarSrc:`${imgurl}/honor-15.jpeg`,
    content:'百应实力获评WISE 2021新经济之王“年度硬核企业”',
    linkUrl: 'https://mp.weixin.qq.com/s/jvj5cIfo90HHlfbqxVGt-Q',
  },
  {
    avatarSrc:`${imgurl}/honor-16.jpeg`,
    content:'百应科技连续2年荣登杭州准独角兽榜单，AI SaaS「未来独角兽」蓄势待发',
    linkUrl: 'https://mp.weixin.qq.com/s/o8ZUSoftKHjagcfWP7f2Bw',
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
          {dataList.map(({ avatarSrc, content, linkUrl }, i) => (
            <SwiperSlide style={{ width: '295px' }}>
              <Card>
                <CardContent>
                  <div className="customer-words-icon">
                    <img src={avatarSrc} />
                  </div>
                  <div className="customer-words-desc">{content}</div>
                  <a className="customer-words-name" href={linkUrl}>查看详情 →</a>
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
  
    <Pane id={CustomerId} title="荣誉奖项"
    titleStyle={{marginBottom:'53px'}}
     paneBgColor="white" style={{ paddingBottom: 80 }} mobileStyle={{ paddingBottom: 40 }}>
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
