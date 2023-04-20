import classNames from 'classnames';
import { CSSProperties, FC, ReactNode, useEffect, useRef, useState } from 'react';
import SwiperCore, { Navigation, Scrollbar, Mousewheel } from 'swiper';
import styled from 'styled-components';
import { renderCss, screenHeightRules } from '../lib/utils';
import { AngleRight } from './accordion/AngleRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';
SwiperCore.use([Navigation, Scrollbar, Mousewheel]);


interface Info {
  tabName: string;
  btnStr: string;
  content: { title: string[]; content: ReactNode; specialBtnStr?: string; hiddenBtn?: boolean }[];
}
const AslideWrap = styled.aside`
.head_title{
  width:1200px;
  margin:0 auto;
  margin-bottom:80px;
  .head_title_one{
    margin-top:76px;
    text-align: center;
    font-size: 40px;
    font-family: PingFangSC-Medium, "PingFang SC";
    font-weight: 500;
    color: rgb(26, 26, 26);
    line-height: 44px;

  }
  .head_title_two{
    margin-top:16px;
    text-align: center;
    font-size: 22px;
    font-weight: 400;
    letter-spacing: 0px;
    line-height: 32px;
    color: rgb(51, 51, 51);
    font-family: PingFangSC-Medium, "PingFang SC";
  }
}
  nav{
    width:100%;
    box-sizing:border-box;
    border-bottom:4px solid #f5f5f5;
    margin-bottom:40px;
    ul{
        width:1200px;
        margin:0 auto;
        display:flex;
        position:relative;
        top:4px;
      li{
         height:80px;
         line-height:80px;
         text-align:center;
        flex:1;
        list-style:none;
        margin:0;
        cursor: pointer;
        color: rgb(51, 51, 51);
        font-size: 20px;
        font-family: PingFangSC-Semibold, "PingFang SC";
        font-weight: 600;
        letter-spacing: 1px;
        &:hover{
          // border-bottom:4px solid rgb(43, 88, 249);
          color:rgb(43, 88, 249);
        }
        &.activeNav{
          border-bottom:4px solid rgb(43, 88, 249);
          color:rgb(43, 88, 249);
        }
      }
    }
  }
`
const ContentListWrapper = styled.div`
width:100%;
background:rgb(43,88,249);
transform: translateY(50%);
transition: all 0.4s;
opacity: 0;
&.appear{
  transform: translateY(0);
  opacity: 1;
}
.content_mainVideo{
  width:1200px;
  margin:0 auto;
  height:552px;
  display:flex;
  align-items:center;
  section{
    height:374px;
    width: 100%;
    display: flex;
  } 
  .videobg{
    margin-right:65px;
    position: relative;
    width:640px;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius:8px;
    background:url(https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/retail/video-bg.jpg) center center / auto 120% no-repeat;
    video{
        width:614px;
        height:345px;

    }
    img{
      width:100%;
    }
    .poster{
      width:614px;
      height:345px;
        background:#000;
        position: absolute;
        z-index:222;
        display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    }
    .hidePoster{
      display:none;
    }
    .poster-title {
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 36px;
      letter-spacing: 1px;
      margin-bottom: 40px;
    }
    .poster-player {
      width:160px;
      cursor: pointer;
      background: #2b58f9;
      border-radius: 38px;
      padding: 0 24px;
      display: flex;
      align-items: center;
      font-size: 18px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 48px;
      > img {
        margin: 0 8px 0 0;
        width:32px;
      }
    }
  }
  .nobg{
    background:unset;
  }
  
  .right_section{
    flex:1;
    position: relative;
    .swiper-container{
        width:100%;
        height:100%;
    }
  }

 
}
`
const ContentWrapper = styled.div`
  position: relative;
  width:100%;
  height:100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
`;
const ContentHeader = styled.div`
  font-size: 38px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 56px;
`;
const Content = styled.div`
  position: relative;
  width: 100%;
  height:100%;
`;
const JumpBtn = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0;
  display: inline-block;
  line-height: 44px;
  background: #000000;
  color: #fff;
  border-radius: 4px;
  padding: 0px 18px 0px 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    svg {
      animation: lrmove 3s infinite both;
    }
  }
  svg {
    padding-left: 8px;
    display: inline-block;
    position: relative;
    top: -1px;
    height: 12px;
  }
`;
const DotWrapper = styled.div`
  position: absolute;
  top: 50%;
  right:0;
  transform: translate(-100%, -50%);
  pointer-events: all;
  display: flex;
  flex-direction: column;
  gap: 24px;
  z-index:2;
`;
const Dot = styled.div`
  position: relative;
  width: 16px;
  height: 16px;
  cursor: pointer;
  /* background: #FFFFFF; */
  border-radius: 50%;
  transition: 0.2s all ease-in;
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 10px;
    height: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    transition: 0.2s all ease-in;

    background: rgba(255, 255, 255, 0.35);
  }
  &.active {
    background: rgba(255, 255, 255, 0.35);
    &::after {
      background: white;
    }
  }
`;
const handleScroll = (event) => {
  console.log('滚动事件：', event);
};

export type ISceneSolutionProps = {
  infoList: (any)[];
  onJumpClick?: () => void;
  title: string;
  desc: string;
};
const navTitle = ['会员召回',
  '私域引流',
  '用户服务',
  '私域运营']
const SceneSolution: FC<ISceneSolutionProps> = ({ title, infoList, desc, onJumpClick }) => {
  const [navIndex, setNavIndex] = useState(0);
  const [hidePoster ,setHidePoster] = useState(false)
  const [currSubIndex, setCurrSubIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currInfo = infoList[navIndex];
  const SCENESOLUTION = 'SCENESOLUTION'
  console.log(currInfo, 'currInfo');
  useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const videoContent = document.getElementById(SCENESOLUTION);
    new ScrollMagic.Scene({
      triggerElement: videoContent, //触发元素
      triggerHook: 'onEnter', //触发元素开始离开视口时触发
      offset: 10, //从开始点滚动多少px触发（施法前摇）
      duration: 400, //效果持续的距离（法术持续时间/距离）
    })
      // .setClassToggle('.aitxs', 'appear')
      .addTo(controller)
      .on('enter', () => {
        videoContent.classList.add('appear')
        // console.log('进入');

        controller.destroy();
      });
  }, []);
  // const jumpTargetNode = (i: number) => {
  //   const node = document.querySelector(`[data-index="${i}"] > .${SOLUTION_SCROLL_INTO_NODE_CLASS}`);
  //   if (node) {
  //     node.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };
  const [controlledSwiper, setControlledSwiper] = useState(null);
  return (
    <AslideWrap>
      <div className='head_title'>
          <div className='head_title_one'>AI赋能零售品牌全域增长，打造核心用户价值</div>
          <div className='head_title_two'>助力品牌高效引流获客、营销增长、精细化运营，提升会员体验和业绩增量</div>

      </div>
      <nav>
        <ul>
          {
            infoList.map(({ tabName }, i) => {
              return <li onClick={() => {
                setNavIndex(i)
                setHidePoster(false)
              }} className={navIndex == i ? 'activeNav' : ''}>{tabName}</li>
            })
          }

        </ul>
      </nav>
      <ContentListWrapper id='SCENESOLUTION'>

        <div className='content_mainVideo'>
          <section>
            <div className={classNames('videobg', {
              'nobg': currInfo.imgSrcList
            })}>
              <div
              className={classNames('poster', {
                'hidePoster': hidePoster || currInfo.imgSrcList
              })}>
                <div className="poster-title">{currInfo.videoTitle}</div>
                <div
                  onClick={() => {
                    setHidePoster(true)
                    if (videoRef.current) {
                      videoRef.current.play();
                    }
                  }}
                  className="poster-player">
                  <img src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/retail/%E6%92%AD%E6%94%BE.svg" />
                  立即播放
                </div>
              </div>
              {
                currInfo.videoSrc ? (<video src={currInfo.videoSrc} controls={true} ref={videoRef}></video>) : (<img src={currInfo.imgSrcList[0].src} alt="" />)
              }
            </div>
            <div className='right_section'>
              
            <DotWrapper>
                  {infoList[navIndex].content.map((_, i) => {
                    return (
                      <Dot
                        onClick={() => {
                            controlledSwiper.slideTo(i);
                        }}
                        key={`${navIndex}${i}`}
                        className={classNames({ active: i === currSubIndex })}></Dot>
                    );
                  })}
                </DotWrapper>
            <Swiper
              autoplay={false}
              //  allowTouchMove={false}
              // scrollbar={{ draggable: true }}
              mousewheel={{ forceToAxis: true }}
              onScroll={handleScroll}
              onSwiper={swiper => {
                setControlledSwiper(swiper)
              }} onSlideChange={e => setCurrSubIndex(e.activeIndex)} direction='vertical'>
              {infoList[navIndex].content.map(({ title, content, specialBtnStr, hiddenBtn }, i) => {
                return (
                  <SwiperSlide>
                    <ContentWrapper data-index={`${i}`}>
                      <Content>
                        <div>
                          {title.map(str => {
                            return <ContentHeader>{str}</ContentHeader>;
                          })}
                        </div>
                        {content}
                        {!hiddenBtn && (
                          <JumpBtn onClick={onJumpClick} >
                            {specialBtnStr || infoList[navIndex].btnStr}
                            <AngleRight />
                          </JumpBtn>
                        )}
                      </Content>
                    </ContentWrapper>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            </div>

          </section>

        </div>

      </ContentListWrapper>
    </AslideWrap>
  );
};

export default SceneSolution;
