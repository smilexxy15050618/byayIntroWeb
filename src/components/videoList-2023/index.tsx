import { FC, ReactNode, useEffect, useState } from 'react';
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
const SCROLL_TOP = {
    xxl: '120px',
    xl: '0px',
    lg: '0px',
    md: '0px',
    xs: '0px',
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
const screenWidthRules: Array<[Screen, string]> = [
    ['xl', ``],
    ['lg', `@media screen and (min-width: 1300px) and (max-width: 1699px)`],
    ['md', `@media screen and (min-width: 1000px) and (max-width: 1299px)`],
    ['xs', `@media screen and (max-width: 999px)`],
];
type Screen = 'xxl' | 'xl' | 'lg' | 'md' | 'xs';
type ScreenRule = ((value: string) => string) | string;
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

const OFFSET_MAPPER = {
    xxl: '10vh',
    xl: '8vh',
    lg: '0px',
    md: '0px',
    xs: '0px',
};
const mergeObj = <T extends string>(objList: Array<{ keyName: T; obj: any }>) => {
    const keyList = ['xxl', 'xl', 'lg', 'md', 'xs'];
    return keyList.reduce((prev, curr) => {
        return {
            [curr]: objList.reduce((prevObj, currObj) => {
                return {
                    ...prevObj,
                    [currObj.keyName]: currObj.obj[curr],
                };
            }, {}),
            ...prev,
        };
    }, {} as Record<Screen, Record<T, string>>);
};
export const VIDEO_LIST_ID = 'video-list';
const TITLE_MARGIN_TOP = '77px';
const TITLE_MARGIN_BOTTOM = '21px';
const MENU_HEIGHT = '44px';
const MENU_MARGIN_BOTTOM = '32px';
const DISAPPEAR_OFFSET = '80px';
const DISAPPEAR_OFFSET_MAPPER = {
    xxl: DISAPPEAR_OFFSET,
    xl: DISAPPEAR_OFFSET,
    lg: DISAPPEAR_OFFSET,
    md: '40px',
    xs: '40px',
};
const getContentPaddingTopCalcStr = (OFFSET: string, DISAPPEAR_OFFSET: string) =>
    `${OFFSET} + ${TITLE_MARGIN_TOP} + ${TITLE_HEIGHT} + ${TITLE_MARGIN_BOTTOM} + ${MENU_HEIGHT} + ${MENU_MARGIN_BOTTOM} + ${DISAPPEAR_OFFSET}`;

const getJumpStrTopCalcStr = (videoHeight: string, offset: string, disappearOffset: string) =>
    `${getContentPaddingTopCalcStr(offset, disappearOffset)} + ${videoHeight} - 80px - ${disappearOffset}`;
const JumpStr = styled.div`
  height: 28px;
  font-size: 20px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #2b58f9;
  line-height: 28px;
  position: absolute;
  cursor: pointer;
  transform: translateY(-100%);
  ${renderCss(
    mergeObj([
        { keyName: 'VIDEO_HEIGHT', obj: VIDEO_SIZE_MAPPER.VIDEO_HEIGHT },
        { keyName: 'OFFSET', obj: OFFSET_MAPPER },
        { keyName: 'DISAPPEAR_OFFSET', obj: DISAPPEAR_OFFSET_MAPPER },
    ]),
    screenHeightRules,
    v => `top: calc(${getJumpStrTopCalcStr(v.VIDEO_HEIGHT, v.OFFSET, v.DISAPPEAR_OFFSET)});`,
)}

  .jump-str-arrow {
    display: inline-block;
    transition: all 0.3s ease-in;
  }

  &:hover {
    .jump-str-arrow {
      transform: translateX(8px);
    }
  }
`;
const ScrollNode = styled.div`
  position: absolute;
  opacity: 0;
  width: 1px;
  height: 1px;
  ${renderCss(
    mergeObj([
        { keyName: 'SCROLL_TOP', obj: SCROLL_TOP },
        { keyName: 'OFFSET_MAPPER', obj: OFFSET_MAPPER },
        { keyName: 'DISAPPEAR_OFFSET', obj: DISAPPEAR_OFFSET_MAPPER },
    ]),
    screenHeightRules,
    v => `top: calc(-1 * (${getContentPaddingTopCalcStr(v.OFFSET_MAPPER, v.DISAPPEAR_OFFSET)}) - ${v.SCROLL_TOP});`,
)}
`;
const CONTENT_MB_MAP = {
    xxl: '96px',
    xl: '76px',
    lg: '76px',
    md: '76px',
    xs: '76px',
};
const Content = styled.div`
  /* min-height: 100vh; */
  /* DISAPPEAR_OFFSET_MAPPER */
  ${renderCss(
    mergeObj([
        { keyName: 'VIDEO_HEIGHT', obj: VIDEO_SIZE_MAPPER.VIDEO_HEIGHT },
        { keyName: 'DISAPPEAR_OFFSET', obj: DISAPPEAR_OFFSET_MAPPER },
    ]),
    screenHeightRules,
    v => `height: calc(${v.VIDEO_HEIGHT} - ${v.DISAPPEAR_OFFSET});`,
)}
  ${renderCss(VIDEO_SIZE_MAPPER.VIDEO_WIDTH, screenHeightRules, v => `padding-left: calc(${v} + 60px);`)}
  position: relative;
  /* ${renderCss(VIDEO_SIZE_MAPPER.VIDEO_HEIGHT, screenHeightRules, v => `min-height: ${v};`)} */
  box-sizing: content-box;
  ${renderCss(CONTENT_MB_MAP, screenHeightRules, v => `margin-bottom: ${v}`)}
`;
const Wrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  .title {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.73px;
    line-height: 24px;
    color: rgba(51, 51, 51, 1);
    text-align: center;
  }
  ${renderCss(OFFSET_MAPPER, screenHeightRules, v => `margin-top: -${v}`)}
  > :nth-child(2) {
    ${renderCss(
    mergeObj([
        { keyName: 'OFFSET_MAPPER', obj: OFFSET_MAPPER },
        { keyName: 'DISAPPEAR_OFFSET', obj: DISAPPEAR_OFFSET_MAPPER },
    ]),
    screenHeightRules,
    v => `padding-top: calc(${getContentPaddingTopCalcStr(v.OFFSET_MAPPER, v.DISAPPEAR_OFFSET)});`,
)}
    ${ScrollNode} {
      top: 0;
      @media screen and (min-height: 1281px) {
        top: -120px;
      }
    }
  }
  > :nth-child(n + 3) ${JumpStr} {
    top: auto;
    bottom: 80px;
    transform: none;
  }
  > :last-child {
    ${renderCss(
    mergeObj([
        { keyName: 'VIDEO_HEIGHT', obj: VIDEO_SIZE_MAPPER.VIDEO_HEIGHT },
        { keyName: 'OFFSET_MAPPER', obj: OFFSET_MAPPER },
        { keyName: 'DISAPPEAR_OFFSET', obj: DISAPPEAR_OFFSET_MAPPER },
    ]),
    screenHeightRules,
    v =>
        `margin-bottom: calc(100vh - (${getContentPaddingTopCalcStr(v.OFFSET_MAPPER, v.DISAPPEAR_OFFSET)}) - ${v.VIDEO_HEIGHT
        } + ${v.DISAPPEAR_OFFSET});`,
)}
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
  ${renderCss(SCROLL_TOP, screenHeightRules, v => `top: ${v}`)}
  ${renderCss(SCROLL_TOP, screenHeightRules, v => `min-height: calc(100vh - ${v});`)}
  ${renderCss(OFFSET_MAPPER, screenHeightRules, v => `padding-top: ${v}`)}
  border-top: 1px solid transparent;
  display: flex;
  flex-direction: column;
  .card {
    width: 956px;
    height: 451px;
    background: url(${imgurl}/yypt2.png) no-repeat,url(${imgurl}/yypt1.png) no-repeat;
    background-size: 100% 100%,511px 360px;
    background-position: 0% 0%,center -20px;
    border: none;
    margin: 62px auto 0;
    position: relative;
    perspective: 150;
    perspective-origin: 50% 35%;
    transform-style: preserve-3d;
    img:first-child {
      width: 120px;
      position: absolute;
      top: 160px;
      left: 234px;
      &:hover {
        content: url(${imgurl}/hxcard1_active.png);
      }
    }
    img:nth-child(2) {
      width: 158px;
      position: absolute;
      top: 175px;
      left: 337px;
      &:hover {
        content: url(${imgurl}/hxcard2_active.png);
      }
    }
    img:nth-child(3) {
      width: 252px;
      position: absolute;
      top: 144px;
      left: 505px;
      &:hover {
        content: url(${imgurl}/hxcard3_active.png);
      }
    }
    img:nth-child(4) {
      width: 142px;
      position: absolute;
      top: 30px;
      left: 278px;
      transform: translateZ(-50px);
      &:hover {
        content: url(${imgurl}/hxcard4_active.png);
      }
    }
    img:nth-child(5) {
      width: 177px;
      position: absolute;
      top: 0;
      left: 540px;
      &:hover {
        content: url(${imgurl}/hxcard5_active.png);
      }
    }
  }
`;

const Menu = styled.div`
  cursor: pointer;
  height: ${MENU_HEIGHT};
  border-radius: 22px;
  margin-right: 17px;
  padding: 0 24px;
  opacity: 0.5;
  transition: all 0.3s ease;
  pointer-events: auto;
  &.active {
    background: rgba(235, 235, 235, 0.45);
    opacity: 1;
  }
  line-height: ${MENU_HEIGHT};
  font-size: 20px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;

  > img {
    height: 28px;
    margin-bottom: 2px;
    margin-right: 8px;
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

const VideoTitle = styled.div`
  width: 420px;
  font-size: 32px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 54px;
  margin-bottom: 25px;
`;

const VideoDesc = styled.div`
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: rgba(10, 15, 44, 0.45);
  line-height: 28px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
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

const PANE_CLASS_NAME = 'video-content';
const prefix =
    'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E5%AE%98%E7%BD%91%E8%A7%86%E9%A2%91%E6%96%87%E4%BB%B6/';
const videoSrc = ['高用户接听.mp4', '高意向转化.mp4', '优营销模型.mp4'].map(str => `${prefix}${str}`);
const VideoList: FC<IVideoListProps> = ({ contentList = [] }) => {
    const [currIndex, setCurrIndex] = useState(0);
    useEffect(() => {
        const ScrollMagic = require('scrollmagic');
        var controller = new ScrollMagic.Controller();
        const videoContentList = document.getElementsByClassName('video-content');
        const nodeList = [...videoContentList];
        // if (index === videoContentList.length - 1) {
        nodeList.forEach(ele => {
            new ScrollMagic.Scene({
                triggerElement: ele, //触发元素
                triggerHook: 'onLeave', //触发元素开始离开视口时触发
                offset: -630, //从开始点滚动多少px触发（施法前摇）
                duration: 400, //效果持续的距离（法术持续时间/距离）
            })
                .addTo(controller)
                .on('enter', () => {
                    const index = +ele.getAttribute('data-index');
                    if (Number.isNaN(index)) {
                        return;
                    }
                    setCurrIndex(index);
                });
        });
    }, []);

    return (
        <Wrapper id={VIDEO_LIST_ID}>
            <VideoWrapperStatic>
                {/* <div style={{ position: 'sticky', top: 0, height: 200, left: 0, width: '100%', background: 'white' }}></div> */}
                <VideoWrapper className="video-wrapper-sticky">
                    <Title style={{ marginTop: TITLE_MARGIN_TOP, marginBottom: TITLE_MARGIN_BOTTOM, position: 'relative' }}>
                        百应智能用户运营平台
                    </Title>
                    <div style={{ flex: '1', background: 'white', minHeight: 56 }}>
                        <div class="title">基于百应用户运营方法论，百应以“数据、智能、互动式内容、连接通道、运营策略”为核心运营要素，打造智能用户运营平台致力于优化企业和政务的2C沟通环节，建立起与C端用户之间的稳固连接关系，持续创造企业增长和美好社会</div>
                    </div>
                    <div class="card">
                      <img src={imgurl+'/hxcard1.png'} alt="" />
                      <img src={imgurl+'/hxcard2.png'} alt="" />
                      <img src={imgurl+'/hxcard3.png'} alt="" />
                      <img src={imgurl+'/hxcard4.png'} alt="" />
                      <img src={imgurl+'/hxcard5.png'} alt="" />
                    </div>
                </VideoWrapper>
            </VideoWrapperStatic>
        </Wrapper>
    );
};

export default VideoList;
