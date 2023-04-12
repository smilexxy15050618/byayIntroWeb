import { FC, ReactNode, useEffect, useState, useRef} from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Title, TITLE_HEIGHT } from '../homepage/version2023/styled';
import { Tick } from './Tick';
import imgurl from '../../../img.url.js'

export type IVideoListProps = {
  contentList?: { color: string; tag: string; icon?: any; infoList: { title: ReactNode; desc: string[] }[] }[];
};
const VIDEO_SIZE_MAPPER = {
  VIDEO_WIDTH: {
    xxl: '720px',
    xl: '720px',
    lg: '640px',
    md: '538px',
    // xs: '453px',
    xs: '538px',
  },
  VIDEO_HEIGHT: {
    xxl: '540px',
    xl: '540px',
    lg: '480px',
    md: '403.5px',
    xs: '403.5px',
  },
};

const map2RenderCssRule = <T,>(rule: Partial<Record<Screen, T>>, mapper: (value: T, screen: Screen) => string) => {
  return Object.entries(rule).reduce<Partial<Record<Screen, string>>>((prev, [key, value]) => {
    return {
      ...prev,
      [key]: mapper(value, key as Screen),
    };
  }, {});
};
const screenHeightRules: Array<[Screen, string]> = [
  ['xxl', ``],
  ['xl', `@media screen and (min-height: 957px) and (max-height: 1280px)`],
  ['lg', `@media screen and (min-height: 731px) and (max-height: 956px)`],
  ['md', `@media screen and (min-height: 563px) and (max-height: 730px)`],
  ['xs', `@media screen and (max-height: 562px)`],
];

type Screen = 'xxl' | 'xl' | 'lg' | 'md' | 'xs';
const renderCss = <T,>(
  rule: Partial<Record<Screen, T>>,
  screenRules: Array<[Screen, string]>,
  mapper: (value: T, screen: Screen) => string,
) => {
  const obj = map2RenderCssRule(rule, mapper);
  const cssHelper = (mediaRule: string, rule: string) =>
    mediaRule
      ? `
    ${mediaRule} {
      ${rule}
    }
  `
      : rule;

  return screenRules.map(([size, media]) => cssHelper(media, obj[size] ? obj[size] : '')).join('');
};



export const VIDEO_LIST_ID = 'video-list';
const TITLE_MARGIN_TOP = '77px';
const TITLE_MARGIN_BOTTOM = '21px';
const MENU_MARGIN_BOTTOM = '32px';


const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .title {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.73px;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
    text-align: center;
  }
 
`;

const VideoWrapperStatic = styled.div`
  height: 100%;
  width: 100%;
  z-index: 2;
  .title {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.73px;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
    text-align: center;
  }
`;

const VideoWrapper = styled.div`
  position: sticky;
  left: 0;
  width: 100%;

  border-top: 1px solid transparent;
  display: flex;
  flex-direction: column;
  
  .card {
    width: 956px;
    height: 547px;
    background: url(${imgurl}/yypt1.png) no-repeat;
    background-size: 511px 361px;
    background-position: 235px 25px;
    border: none;
    margin: 62px auto 0;
    position: relative;
    perspective: 150;
    perspective-origin: 50% 35%;
    transform-style: preserve-3d;
    transform: translateY(50%);
    transition: all 0.4s;
    opacity: 0;
    &.appear{
      transform: translateY(0);
      opacity: 1;
    }
    video {
      width: 971px;
      height: 560px;
      position: absolute;
      top: 0;
      left: 0;
      transform: translateZ(-4px);
    }
    img:first-child {
      width: 120px;
      position: absolute;
      top: 120px;
      left: 234px;
      z-index: 1;
      transform: translateZ(1px);
      &:hover {
        content: url(${imgurl}/hxcard1_active.png);
      }
    }
    img:nth-child(2) {
      width: 158px;
      position: absolute;
      top: 135px;
      left: 337px;
      z-index: 1;
      transform: translateZ(1px);
      &:hover {
        content: url(${imgurl}/hxcard2_active.png);
      }
    }
    img:nth-child(3) {
      width: 252px;
      position: absolute;
      top: 104px;
      left: 505px;
      z-index: 1;
      transform: translateZ(1px);
      &:hover {
        content: url(${imgurl}/hxcard3_active.png);
      }
    }
    img:nth-child(4) {
      width: 142px;
      position: absolute;
      top: -20px;
      left: 278px;
      z-index: 2;
      transform: translateZ(-1px);
      &:hover {
        content: url(${imgurl}/hxcard4_active.png);
      }
    }
    img:nth-child(5) {
      width: 177px;
      height: 163px;
      position: absolute;
      top: -20px;
      left: 540px;
      z-index: 2;
      transform: translateZ(-1px);
      &:hover {
        content: url(${imgurl}/hxcard5_active.png);
      }
    }
  }
`;



const MENU_BOX_PADDING_LEFT = {
  xl: '67px',
  lg: '20px',
  md: '0px',
  xs: '0px',
};

const MenuBox = styled.div`
  display: flex;
  ${renderCss(MENU_BOX_PADDING_LEFT, screenHeightRules, v => `padding-left: ${v}`)}
  margin-bottom: ${MENU_MARGIN_BOTTOM};
`;
const SHADOW_BOTTOM_HEIGHT = 78;

const VIDEO_WIDTH = '720px';
const VIDEO_HEIGHT = '540px';
const Video = styled.div`
  width: ${VIDEO_SIZE_MAPPER.VIDEO_WIDTH.xl};
  height: ${VIDEO_SIZE_MAPPER.VIDEO_HEIGHT.xl};
  background: #2b58f9;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: -${SHADOW_BOTTOM_HEIGHT}px;
  ${renderCss(VIDEO_SIZE_MAPPER.VIDEO_WIDTH, screenHeightRules, v => `width: ${v}`)}
  ${renderCss(VIDEO_SIZE_MAPPER.VIDEO_HEIGHT, screenHeightRules, v => `height: ${v}`)}
  > video {
    height: 100%;
    width: 100%;
    border-radius: 16px;
  }
`;





const SHADOW_TOP_HEIGHT_MAP = {
  xxl: '628px',
  xl: '328px',
  lg: '328px',
  md: '328px',
  xs: '328px',
};

const SHADOW_TOP_HEIGHT = 328;
const ShadowTop = styled.div`
  ${renderCss(SHADOW_TOP_HEIGHT_MAP, screenHeightRules, v => `height: ${v}`)}
  width: 100%;
  ${renderCss(SHADOW_TOP_HEIGHT_MAP, screenHeightRules, v => `margin-bottom: -${v}`)}
  background-color: white;
  ${renderCss(SHADOW_TOP_HEIGHT_MAP, screenHeightRules, v => `transform: translateY(calc(248px - ${v}));`)}
  ${renderCss(
  SHADOW_TOP_HEIGHT_MAP,
  screenHeightRules,
  v => `background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 0,
    rgba(255, 255, 255, 1) ${parseInt(v) - 76}px,
    rgba(255, 255, 255, 0) 100%
  );`,
)}
`;

const ShadowBottom = styled.div`
  width: 100%;
  background-color: white;
  padding-left: ${VIDEO_WIDTH};
  height: 76px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
`;

const VideoContent = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  /* justify-content: space-between; */
  position: relative;
  transition: all 0.3s;
  /* align-items: center; */
`;

const prefix =
  'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E5%AE%98%E7%BD%91%E8%A7%86%E9%A2%91%E6%96%87%E4%BB%B6/';
const VideoList: FC<IVideoListProps> = ({ contentList = [] }) => {
  const [currIndex, setCurrIndex] = useState(0);
  const [showImg, setShowImg] = useState(imgurl + '/hxcard5.png');
  const myRef = useRef(null);
  useEffect(() => {
    const ScrollMagic = require('scrollmagic');
    var controller = new ScrollMagic.Controller();
    const videoContent = myRef.current;
      new ScrollMagic.Scene({
        triggerElement: videoContent, //触发元素
        triggerHook: 'onEnter', //触发元素开始离开视口时触发
        offset: 0, //从开始点滚动多少px触发（施法前摇）
        duration: 400, //效果持续的距离（法术持续时间/距离）
      })
        .setClassToggle('.card', 'appear')
        .addTo(controller)
        .on('enter', () => {
          // videoContent.classList.add('appear')
            controller.destroy();
        });
  }, []);

  return (
    <Wrapper id={VIDEO_LIST_ID} ref={myRef}>
      <VideoWrapperStatic>
        {/* <div style={{ position: 'sticky', top: 0, height: 200, left: 0, width: '100%', background: 'white' }}></div> */}
        <VideoWrapper className="video-wrapper-sticky">
          <Title style={{ marginTop: TITLE_MARGIN_TOP, marginBottom: TITLE_MARGIN_BOTTOM, position: 'relative' }}>
            百应智能用户运营平台
          </Title>
          <div style={{  background: 'white', minHeight: 56 }}>
            <div class="title">基于百应用户运营方法论，百应以“数据、智能、互动式内容、连接通道、运营策略”为核心运营要素，打造智能用户运营平台致力于优化企业和政务的2C沟通环节，建立起与C端用户之间的稳固连接关系，持续创造企业增长和美好社会</div>
          </div>
          <div class="card">
            <img src={imgurl + '/hxcard1.png'} alt="" />
            <img src={imgurl + '/hxcard2.png'} alt="" />
            <img src={imgurl + '/hxcard3.png'} alt="" />
            <img src={imgurl + '/hxcard4.png'} alt="" />
            <img src={imgurl + '/hxcard5.png'} alt="" />
            <video muted autoplay="autoplay" loop="loop">
              <source src={imgurl + '/pan.mp4'} type="video/mp4"></source>
            </video>
          </div>
        </VideoWrapper>
      </VideoWrapperStatic>
    </Wrapper>
  );
};

export default VideoList;
