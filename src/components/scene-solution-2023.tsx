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

type VideoInfo = Info & { videoSrc: string; videoTitle: string };
type ImgInfo = Info & { imgSrcList: { style?: CSSProperties; src: string; clsNames?: string[] }[] };

export type ISceneSolutionProps = {
  infoList: (VideoInfo | ImgInfo)[];
  onJumpClick?: () => void;
  title: string;
  desc: string;
};

const isVideoInfo = (info: any): info is VideoInfo => {
  return typeof info['videoSrc'] !== 'undefined';
};

const StickyTopMap = {
  xl: '60px',
  lg: '60px',
  md: '60px',
  xs: '60px',
};
const Wrapper = styled.div`
  position: relative;
  overflow:hidden;
  border-top: 1px solid transparent;
  margin-top: -1px;
  pointer-events: none;
`;
// ${renderCss(
//   mergeObj([
//     { keyName: 'OFFSET_MAPPER', obj: OFFSET_MAPPER },
//     { keyName: 'DISAPPEAR_OFFSET', obj: DISAPPEAR_OFFSET_MAPPER },
//   ]),
//   screenHeightRules,
//   v => `top: calc(-1 * (${getContentPaddingTopCalcStr(v.OFFSET_MAPPER, v.DISAPPEAR_OFFSET)}));`,
// )}

const VIDEO_SIZE_MAPPER = {
  VIDEO_WIDTH: {
    xl: '700px',
    lg: '608px',
    md: '608px',
    // xs: '453px',
    xs: '608px',
  },
  VIDEO_HEIGHT: {
    xl: '393.75px',
    lg: '342px',
    md: '342px',
    xs: '342px',
  },
};

const ScrollWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;
const StickyWrapper = styled.div`
  ${renderCss(StickyTopMap, screenHeightRules, v => `top: ${v};`)}
  ${renderCss(StickyTopMap, screenHeightRules, v => `height:  calc(100vh - ${v});`)}
  position: sticky;
  display: flex;
  flex-direction: column;
`;

const HeaderPaddingTop = '80px';
const HeaderPaddingBottom = '40px';
const HeaderHeight = '44px';
const Header = styled.div`
  text-align: center;
  font-size: 40px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: rgba(26, 26, 26, 1);
  line-height: ${HeaderHeight};
  background-color: white;
  padding: 76px 0 16px;
`;
const Desc = styled.div`
  text-align: center;
  font-size: 22px;
font-weight: 400;
letter-spacing: 0px;
line-height: 32px;
color: rgba(51, 51, 51, 1);
  font-family: PingFangSC-Medium, PingFang SC;
  background-color: white;
  padding: 0 0 32px 0;
`;
const TabWrapperHeight = '80px';
const TabGapHeight = '40px';
const TabWrapper = styled.div`
  height: 80px;
  position: relative;
  background: white;
  &::after {
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    position: absolute;
    height: 4px;
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const TabItem = styled.div`
  text-align: center;
  line-height: 80px;
  height: 80px;
  border-bottom: 4px solid transparent;
  cursor: pointer;
  &.active {
    border-bottom-color: #2b58f9;
    color: #2b58f9;
  }
  &:hover {
    color: #2b58f9;
  }
  color: #333333;
  font-size: 20px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  letter-spacing: 1px;
`;

const TabContent = styled.div`
  pointer-events: all;
  width: 1200px;
  margin: 0 auto;
  display: flex;
  > * {
    flex: 1;
  }
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
  ${renderCss(VIDEO_SIZE_MAPPER.VIDEO_HEIGHT, screenHeightRules, v => `height: calc(${v} + 32px);`)}
  width: 100%;
  ${ContentHeader}:first-child {
    margin-top: 4px;
  }
  ${ContentHeader}:last-child {
    margin-bottom: 32px;
  }
`;

const ScrollIntoNode = styled.div`
  position: absolute;
  left: 0px;
  ${renderCss(StickyTopMap, screenHeightRules, v => `top: calc(-1 * (${TabWrapperHeight} + ${TabGapHeight} + ${v}));`)}
  height: 1px;
  width: 1px;
`;
const ContentWrapper = styled.div`
  position: relative;
  ${renderCss(
    StickyTopMap,
    screenHeightRules,
    v => `height: calc(100vh - (${TabWrapperHeight} + ${TabGapHeight} + ${v}));`,
  )}
  width: calc(100% - 20px);
  display: flex;
  align-items: center;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  line-height: 28px;
`;

const ContentListWrapper = styled.div`
  z-index: -1;
  pointer-events: all;
  position: relative;
  background-color: #2b58f9;
  border-top: 1px solid transparent;
  width: 1200px;
  margin: 0 auto;
  margin-top: calc(${TabWrapperHeight} + ${TabGapHeight});
  ${renderCss(VIDEO_SIZE_MAPPER.VIDEO_WIDTH, screenHeightRules, v => `padding-left: calc(${v} + 32px + 63px);`)}
  .swiper-container {
    height: 608px;
  }
`;

const Gap = styled.div`
  height: ${TabGapHeight};
  background-color: white;
`;

const MiddleWrapper = styled.div`
  flex: 1;
  display: flex;
`;

const VideoInfoContent = styled.div`
  background: #2b58f9;
  ${renderCss(VIDEO_SIZE_MAPPER.VIDEO_WIDTH, screenHeightRules, v => `width: calc(${v} + 32px + 63px);`)}
`;

const InfoLeft = styled.div`
  background: #2b58f9;
  width: fit-content;
`;

const InfoWrapper = styled.div`
  display: flex;
  width: 1200px;
  flex-direction: column;
`;
const VideoHorizontalGap = styled.div`
  background: #2b58f9;
  flex: 1;
`;
const VideoVerticalGap = styled.div`
  flex: 1;
  /* background: #2b58f9; */
  display: flex;
`;

const JumpBtn = styled.div`
  position: absolute;
  bottom: 7px;
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
const SOLUTION_SCROLL_INTO_NODE_CLASS = 'solution-scroll-into-node';
const commonClassName = ['animate__animated', 'wow', 'animate__ahead_500ms'];

const VideoWrapper = styled.div<{ desc?: string }>`
  pointer-events: all;
  padding: 16px;
  display: flex;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 0px 16px 0px rgba(0, 6, 24, 0.15);
  border-radius: 8px;
  background-color: #2b58f9;
  background: url(https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/retail/video-bg.jpg) center / auto
    110% no-repeat;
  position: relative;
  .poster {
    z-index: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: black;
    ${renderCss(VIDEO_SIZE_MAPPER.VIDEO_WIDTH, screenHeightRules, v => `width:${v};`)}
    ${renderCss(VIDEO_SIZE_MAPPER.VIDEO_HEIGHT, screenHeightRules, v => `height:${v};`)}
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    transition: 0.2s all ease-in-out;
    &.playing {
      z-index: -1;
      opacity: 0;
    }
    &.show-bg {
      pointer-events: none;
      background-color: transparent;
      .poster-player {
        opacity: 0;
        pointer-events: none;
      }
      & + video {
        background: black;
        position: relative;
        &::after {
          content: '${props => props.desc}';
        }
      }
    }
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
    }
  }
  > video {
    ${renderCss(VIDEO_SIZE_MAPPER.VIDEO_WIDTH, screenHeightRules, v => `width:${v};`)}
    ${renderCss(VIDEO_SIZE_MAPPER.VIDEO_HEIGHT, screenHeightRules, v => `height:${v};`)}
  }
`;
// url(https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng6bfe43fc14c9a18be9a6e7eb7965a334acc8850cf3cfb8d1b4b8ab2f294fe9d5) -16px -17px no-repeat
const ImageWrapper = styled.div`
  ${renderCss(VIDEO_SIZE_MAPPER.VIDEO_WIDTH, screenHeightRules, v => `width:calc(${v});`)}
  ${renderCss(VIDEO_SIZE_MAPPER.VIDEO_HEIGHT, screenHeightRules, v => `height:calc(${v});`)}
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  > img {
    position: absolute;
    width: 100%;
  }
  margin-bottom: 0;
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
const BgFade = styled.div<{ position: 'top' | 'bottom' }>`
  flex: 1;
  position: relative;
  &::after {
    content: '';
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background: linear-gradient(
      ${props =>
        props.position === 'top'
          ? 'to top, rgba(43, 88, 249, 0), rgba(43, 88, 249, 1) 80px'
          : 'to bottom, rgba(43, 88, 249, 0), rgba(43, 88, 249, 1)  80px'}
    );
    z-index: 2;
  }
`;

const VideoWidthGap = styled.div`
  // ${renderCss(VIDEO_SIZE_MAPPER.VIDEO_WIDTH, screenHeightRules, v => `width:calc(${v} + 32px);`)}
`;
const DotWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-100%, -50%);
  pointer-events: all;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const handleScroll = (event) => {
  console.log('滚动事件：', event);
};


const SceneSolution: FC<ISceneSolutionProps> = ({ title, infoList, desc,onJumpClick }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [currSubIndex, setCurrSubIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currInfo = infoList[currIndex];
  console.log(currInfo, 'currInfo');
  useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const videoContentList = document.getElementsByClassName(ContentWrapper.styledComponentId);
    const nodeList = [...videoContentList];
    // if (index === videoContentList.length - 1) {
    nodeList.forEach(ele => {
    //   new ScrollMagic.Scene({
    //     triggerElement: ele, //触发元素
    //     triggerHook: 'onLeave', //触发元素开始离开视口时触发
    //     offset: -500, //从开始点滚动多少px触发（施法前摇）
    //     duration: 300, //效果持续的距离（法术持续时间/距离）
    //   })
    //     .addTo(controller)
    //     .on('enter', () => {
    //       const index = ele.getAttribute('data-index');
    //       setCurrSubIndex(+index);
    //     });
    });
  }, []);
  const jumpTargetNode = (i: number) => {
    const node = document.querySelector(`[data-index="${i}"] > .${SOLUTION_SCROLL_INTO_NODE_CLASS}`);
    if (node) {
      node.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [videoStatus, setVideoStatus] = useState(0);
  const [controlledSwiper, setControlledSwiper] = useState(null);
  return (
    <>
      <Header>{title}</Header>
      <Desc>{desc}</Desc>
      <Wrapper className="">
        <ScrollWrapper>
          <StickyWrapper>
            <TabWrapper>
              <TabContent>
                {infoList.map(({ tabName }, i) => {
                  return (
                    <TabItem
                      onClick={() => {
                        if (currIndex !== i) {
                          if (videoRef.current) {
                            videoRef.current.pause();
                            videoRef.current.currentTime = 0;
                          }
                          setCurrIndex(i);
                          jumpTargetNode(0);
                          setVideoStatus(0);
                        }
                      }}
                      className={classNames({ active: i === currIndex })}>
                      {tabName}
                    </TabItem>
                  );
                })}
              </TabContent>
            </TabWrapper>
            <Gap></Gap>
            <MiddleWrapper>
              <VideoHorizontalGap></VideoHorizontalGap>

              <InfoWrapper>
                <VideoVerticalGap>
                  <VideoWidthGap></VideoWidthGap>
                  <BgFade position="top"></BgFade>
                </VideoVerticalGap>
                <VideoInfoContent>
                  <InfoLeft>
                    {isVideoInfo(currInfo) ? (
                      <VideoWrapper desc={currInfo.videoTitle}>
                        <div
                          className={classNames('poster', {
                            playing: videoStatus === 1,
                            ['show-bg']: videoStatus === 2,
                          })}>
                          <div className="poster-title">{currInfo.videoTitle}</div>
                          <div
                            onClick={() => {
                              setVideoStatus(currInfo.videoSrc.endsWith('mp3') ? 2 : 1);
                              if (videoRef.current) {
                                videoRef.current.play();
                              }
                            }}
                            className="poster-player">
                            <img src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/retail/%E6%92%AD%E6%94%BE.svg" />
                            立即播放
                          </div>
                        </div>
                        <video src={currInfo.videoSrc} controls={true} ref={videoRef}>
                          <source />
                        </video>
                      </VideoWrapper>
                    ) : (
                      <ImageWrapper key={`imageWrapper` + currIndex}>
                        {currInfo.imgSrcList.map(({ src, style, clsNames = [] }) => {
                          return (
                            <img src={src} style={style} className={classNames([...commonClassName, ...clsNames])} />
                          );
                        })}
                        {/* <img src={currInfo.imgSrc} /> */}
                      </ImageWrapper>
                    )}
                  </InfoLeft>
                </VideoInfoContent>
                <VideoVerticalGap>
                  <VideoWidthGap></VideoWidthGap>
                  <BgFade position="bottom"></BgFade>
                </VideoVerticalGap>
              </InfoWrapper>

              <VideoHorizontalGap style={{ position: 'relative' }}>
                <DotWrapper>
                  {infoList[currIndex].content.map((_, i) => {
                    return (
                      <Dot
                        onClick={() => {
                            controlledSwiper.slideTo(i);
                        }}
                        key={`${currIndex}${i}`}
                        className={classNames({ active: i === currSubIndex })}></Dot>
                    );
                  })}
                </DotWrapper>
              </VideoHorizontalGap>
            </MiddleWrapper>
          </StickyWrapper>
        </ScrollWrapper>

        <ContentListWrapper>
          <Swiper  
          autoplay={false}
          //  allowTouchMove={false}
          // scrollbar={{ draggable: true }}
          mousewheel={{ forceToAxis: true }}
          onScroll={handleScroll}
          onSwiper={swiper => {
            setControlledSwiper(swiper)
            }} onSlideChange={e=> setCurrSubIndex(e.activeIndex)}  direction='vertical'>
            {infoList[currIndex].content.map(({ title, content, specialBtnStr, hiddenBtn }, i) => {
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
                    <JumpBtn onClick={onJumpClick} style={{ marginTop: 64 }}>
                      {specialBtnStr || infoList[currIndex].btnStr}
                      <AngleRight />
                    </JumpBtn>
                  )}
                </Content>
              </ContentWrapper>
              </SwiperSlide>
            );
          })}
          {/* {
            infoList[currIndex].map(({ content: detail, btnStr }, i) => {
              return <div>{detail.map(({ title, content }, j) => {
                return (

                );
              })}</div>;
            })
          } */}
          </Swiper>
        </ContentListWrapper>
      </Wrapper>
    </>
  );
};

export default SceneSolution;
