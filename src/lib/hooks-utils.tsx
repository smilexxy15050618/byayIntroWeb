import { useState, useEffect, useRef } from 'react';
import { throttle, pick } from 'loadsh';
/**
 * @param interval 节流时间
 * @return windowWidth 窗口宽度
 */
export const useWindowWidth = (interval: number): number => {
  const [windowWidth, setWindowWidth] = useState(undefined);
  const resizeHandler = throttle(() => setWindowWidth(window.innerWidth), interval, { leading: true });
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', resizeHandler);
    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);
  return windowWidth;
};

interface IOffset {
  left: number;
  right: number;
  top: number;
  bottom: number;
}
export const useBodyOffset = (interval: number): IOffset => {
  const [bodyOffset, setBodyOffset] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
  const rawHandler = () =>
    setBodyOffset(pick(document.body.getBoundingClientRect(), ['left', 'right', 'top', 'bottom']));
  const wheelHandler = throttle(rawHandler, interval, { leading: true });
  useEffect(() => {
    rawHandler(); // 挂载时直接调用一次
    window.addEventListener('wheel', wheelHandler);
    return () => {
      window.removeEventListener('wheel', wheelHandler);
    };
  }, []);
  return bodyOffset;
};

/**
 * @param {number} fontSize 字体大小
 * @param {number} draftWidth 设计稿宽度
 * @param {[number,number]} scaleRange 需要缩放的屏幕区间
 * @returns 字体大小
 */
export const useFontSize = (fontSize: number, draftWidth = 1440, scaleRange: [number, number]): string => {
  const [min, max] = scaleRange;
  const windowWidth = useWindowWidth(200);
  return windowWidth && windowWidth > min && windowWidth <= max
    ? `${(fontSize / draftWidth) * windowWidth}px`
    : fontSize + 'px';
};

/**
 * @param draftWith 设计稿宽度
 * @param scaleRange 需要缩放的屏幕区间
 * @param mobileInheritPc? 设计稿宽是否仍然使用PC端的宽度，默认false，使用375px作为移动端默认设计稿
 * @returns 缩放的比例
 */
export const useScaleRate = (draftWith: number, scaleRange: [number, number], mobileInheritPc = false): number => {
  const [min, max] = scaleRange;
  const windowWidth = useWindowWidth(16);
  // 不存在宽度 或者宽度不在区间内则返回1
  if (!windowWidth || windowWidth <= min || windowWidth >= max) {
    return 1;
  }
  // 存在但小于768px 并且不使用PC端设计稿作为参照比例，则使用默认375px作为移动端设计稿
  if (windowWidth < 768 && !mobileInheritPc) {
    return windowWidth / 375;
  }
  // 按 当前视口宽度/设计稿宽度的比例 来缩放
  return windowWidth / draftWith;
};

function getScroll() {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  return scrollTop;
}

export const useScroll = (interval = 17) => {
  const [scrollTop, setScrollTop] = useState(0);
  const rawHandler = () => setScrollTop(getScroll());
  const wheelHandler = throttle(rawHandler, interval, { leading: true });
  useEffect(() => {
    rawHandler(); // 挂载时直接调用一次
    window.addEventListener('scroll', wheelHandler);
    return () => {
      window.removeEventListener('scroll', wheelHandler);
    };
  }, []);
  return scrollTop;
};

export const useTime = (cb: () => void, interval = 5000) => {
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);
  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    timerRef.current = setInterval(() => {
      cb();
    }, interval);
  };
  const endTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };
  return {
    startTimer,
    endTimer,
    timerRef,
  };
};
