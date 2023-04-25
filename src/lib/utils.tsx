import { HOST_NAME } from '../constants/env';
import { MOBILE_STANDARD_WIDTH, PC_STANDARD_WIDTH } from '../retail/constants';

/*----------   sytled-component样式props处理函数   -------*/
type IHandleStyleProps = (
  propName: string,
  customValue: ICustomValue,
  defalutValue?: string,
  defaultNoneValue?: string,
) => IReturnFunc;

type ICustomValue = (value: string | number) => string;

// 暂时无法确定props的类型
type IReturnFunc = (props: any) => string;

// 根据样式属性名是 string | true | undefined 分别返回对应的默认值或自定义值
export const handleStyleProp: IHandleStyleProps =
  (propName, customValue, defalutValue = 'none', defaultNoneValue = 'none') =>
  props => {
    if (props[propName] === true) return defalutValue;
    if (props[propName]) return customValue(props[propName]);
    return defaultNoneValue;
  };
/*----------     分解css中如'1px' 中的值和单位    ----------*/
type ISplitCssValue = (cssValue: string) => { num: number; unit: string };
/**
 * @param cssValue string css样式值字符串
 */
export const splitCssValue: ISplitCssValue = cssValue => {
  const regexp = /([^(a-zA-Z)]+)([a-zA-Z]+)$/g;
  const result = regexp.exec(cssValue);
  const [, num, unit] = result;
  return { num: Number(num), unit };
};

/*---------- 基于requesAnimationFrame的js动画 ---------- */
type IAnimLoop = (render, times, totalTimeSpan) => void;

export const animLoop = (render, times, totalTimeSpan) => {
  const nowTime = Date.now();
  // 当前时间-上次执行时间如果大于diffTime，那么执行动画，并更新上次执行时间
  // if (nowTime - lastTime > diffTime) {
  //   lastTime = nowTime;
  //   render();
  // }
  // requestAnimationFrame(animloop);
};
/**
 * 获取长度为len的从0自增数组
 * @param len: 获取
 */
export const getIncArr = (len: number): number[] => [...new Array(len).keys()];

export const getPaddingLeftRight = (padding: string) => {
  const values = padding.split(' ');
  let leftRight = ['20px', '20px'];
  switch (values.length) {
    case 1:
      leftRight = [values[0], values[0]];
      break;
    case 2:
      leftRight = [values[1], values[1]];
      break;
    case 3:
      leftRight = [values[1], values[1]];
      break;
    case 4:
      leftRight = [values[3], values[1]];
      break;
    default:
      break;
  }
  return leftRight;
};

enum Screen {
  PC = 0,
  Mobile = 1,
}
const isString = (prop: string | string[]): prop is string => typeof prop == 'string';
/**
 * @param value 接收样式string|string[]
 * @param name 样式名称
 * @param defaultStyle 默认样式 string|string[]
 * @param mobileInheritPC? 在值为字符串时移动端是否继承样式，不继承则移动端使用defaultStyle true
 */
export const cssSwitch = (value: string | string[], name: string, defaultStyle: string[], mobileInheritPC = true) => {
  return `
      ${name}: ${
    // null或者css数组第一项为空 则使用默认样式
    !value || (!isString(value) && !value[Screen.PC])
      ? defaultStyle[Screen.PC]
      : isString(value) // 如果是字符串直接使用, 否则使用数组第一项作为PC端样式
      ? value
      : value[Screen.PC]
  };
      @media (max-width: 768px) {
        ${name}: ${
    // null使用默认值
    !value
      ? defaultStyle[Screen.Mobile]
      : !isString(value) // 非string使用数组第二项，
      ? value[Screen.Mobile]
      : mobileInheritPC // 是string且 需要继承PC样式 则直接使用，是string且 无需继承PC样式 则使用默认值
      ? value
      : defaultStyle[Screen.Mobile]
  }
      }
  `;
};

export const isPc = () => {
  if (process && process.browser) {
    const userAgentInfo = navigator.userAgent;
    let flag = isPcUseragent(userAgentInfo);
    if (window.screen.width >= 768) {
      flag = true;
    }
    return flag;
  }
  return false;
};

export const isPcUseragent = (userAgent: string) => {
  const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPod'];
  for (let i = 0; i < Agents.length; i++) {
    if (userAgent.indexOf(Agents[i]) > 0) {
      return false;
    }
  }
  return true;
};

export const isMobile = (ua: string) => {
  return /mobile|android|iphone|ipod|phone|ipad/i.test(ua);
};

export const calWidthAndHeight = (origin: number) => {
  return `${(origin / (isPc() ? PC_STANDARD_WIDTH : MOBILE_STANDARD_WIDTH)) * 100}vw`;
};

export const retailUrl = (url: string) => {
  if (process && process.browser) {
    // console.log('browser 环境',)
    if (window.location.hostname === 'localhost' || window.location.hostname.startsWith('192.168.')) {
      // 本地开发
      return 'http://' + window.location.host + `/retail${url === '/' ? '' : url}`;
    } else {
      // 线上环境
      if (url === '/') {
        url = '';
      }
      return 'https://' + window.location.host + '/retail' + url;
    }
  } else {
    console.log('node 环境');
    return 'https://' + HOST_NAME.DS_HOST + url;
  }
  return url;
};

export enum HOST_ENUM {
  HOST,
  DS_HOST,
  PF_HOST,
}

export const mapper: Record<HOST_ENUM, any> = {
  [HOST_ENUM.HOST]: {
    localSrc: '',
    predSrc: HOST_NAME.HOST,
  },
  [HOST_ENUM.DS_HOST]: {
    localSrc: '/retail',
    predSrc: HOST_NAME.DS_HOST,
  },
  [HOST_ENUM.PF_HOST]: {
    localSrc: '/plat',
    predSrc: HOST_NAME.DS_HOST,
  },
};
const localSrcList = Object.entries(mapper).map(([key, value]) => value.localSrc);

export const isLocal = () =>
  window.location.hostname === 'localhost' || window.location.hostname.startsWith('192.168.');

export const jumpUrl = (url: string, type: HOST_ENUM) => {
  if (process && process.browser) {
    // console.log('browser 环境',)
    if (window.location.hostname === 'localhost' || window.location.hostname.startsWith('192.168.')) {
      // 本地开发
      const mapLocalSrc = mapper[type].localSrc;
      console.log(localSrcList, 'localSrcList.includes(url)');
      return (
        'http://' + window.location.host + `${localSrcList.includes(url) ? '' : mapLocalSrc}${url === '/' ? '' : url}`
      );
    } else {
      // 线上环境
      return 'https://' + window.location.host + url;
    }
  } else {
    console.log('node 环境');
    return 'https://' + mapper[type].predSrc + url;
  }
  return url;
};

export const renderNextLineText = (strList: string[]) => {
  return strList
    .flatMap((str, index) => {
      if (index === 0) {
        return str;
      }
      return ['<br />', str];
    })
    .join('');
};

export type ScreenSize = 'xl' | 'lg' | 'md' | 'xs';
export const map2RenderCssRule = <T,>(
  rule: Partial<Record<ScreenSize, T>>,
  mapper: (value: T, screen: ScreenSize) => string,
) => {
  return Object.entries(rule).reduce<Partial<Record<ScreenSize, string>>>((prev, [key, value]) => {
    return {
      ...prev,
      [key]: mapper(value, key as ScreenSize),
    };
  }, {});
};
export const screenHeightRules: Array<[ScreenSize, string]> = [
  ['xl', ``],
  ['lg', `@media screen and (min-height: 731px) and (max-height: 956px)`],
  ['md', `@media screen and (min-height: 563px) and (max-height: 730px)`],
  ['xs', `@media screen and (max-height: 562px)`],
];
export const screenWidthRules: Array<[ScreenSize, string]> = [
  ['xl', ``],
  ['lg', `@media screen and (min-width: 1300px) and (max-width: 1699px)`],
  ['md', `@media screen and (min-width: 1000px) and (max-width: 1299px)`],
  ['xs', `@media screen and (max-width: 999px)`],
];
export type ScreenRule = ((value: string) => string) | string;
export const renderCss = <T,>(
  rule: Partial<Record<ScreenSize, T>>,
  screenRules: Array<[ScreenSize, string]>,
  mapper: (value: T, screen: ScreenSize) => string,
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

export const mergeObj = <T extends string>(objList: Array<{ keyName: T; obj: any }>) => {
  const keyList = ['xl', 'lg', 'md', 'xs'];
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
  }, {} as Record<ScreenSize, Record<T, string>>);
};

export const scrollIntoOffset = (selector: string, offset: number) => {
  const node = document.querySelector(selector);
  if (node) {
    const originPosition = node.style.position;
    node.style.position = 'relative';
    const scrollNode = document.createElement('div');
    scrollNode.style.position = 'absolute';
    scrollNode.style.left = '0px';
    scrollNode.style.top = `-${offset}px`;
    node.appendChild(scrollNode);
    scrollNode.scrollIntoView({ behavior: 'smooth' });
    node.removeChild(scrollNode);
    node.style.position = originPosition;
  }
};
