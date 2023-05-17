import React, { Children, CSSProperties, FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

interface IProps {
  className?: string;
  children?: ReactNode;
  setActiveIndex?: (index: number) => void;
  noProgress?: boolean;
  initialSlide?: number;
  loop?: boolean;
  newProgress?: boolean;
  style?: CSSProperties;
  renderCustomerProgress?: (info: { currIndex: number; totalIndex: number; progressNode: ReactNode }) => ReactNode;
  setControlledSwiper?: (s: any) => void;
  autoplayDelay?: number;
  slidesOffsetBefore?: number,
  spaceBetween?: number,
  slidesOffsetAfter?: number,
  centeredSlides?: boolean,
}

const RawByProgressSwiper: FC<IProps> = ({
  initialSlide = 0,
  newProgress = false,
  className,
  children,
  noProgress = false,
  style,
  setActiveIndex,
  renderCustomerProgress,
  setControlledSwiper,
  loop = false,
  autoplayDelay = 5000,
  slidesOffsetBefore = 0,
  slidesPerView = 0,
  spaceBetween = 0,
  slidesOffsetAfter = 0,
  centeredSlides = true
}) => {
  const [actIndex, setActIndex] = useState(initialSlide + 1);
  const total = Children.toArray(children).length;
  const onSlideChange = swiper => {
    setActIndex(swiper.activeIndex + 1);
    setActiveIndex && setActiveIndex(swiper.activeIndex);
  };
  const defaultProgressFlag = !noProgress && !newProgress;
  const customProgressFlag = !noProgress && newProgress;
  const scrollTemp = defaultProgressFlag ? { scrollbar: { draggable: true } } : {};
  const counterNode = (
    <div className="swiper-counter">
      {actIndex}/{total}
    </div>
  );
  return (
    <div className={className} style={style}>
      <Swiper
        initialSlide={initialSlide}
        onSwiper={swiper => {
          setControlledSwiper && setControlledSwiper(swiper);
        }}
        loop={loop}
        {...scrollTemp}
        autoplay={
          autoplayDelay
            ? {
                delay: autoplayDelay,
              }
            : undefined
        }
        slidesOffsetBefore={slidesOffsetBefore}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        slidesOffsetAfter={slidesOffsetAfter}
        centeredSlides={centeredSlides}
        onSlideChange={swiper => onSlideChange(swiper)}>
        {Children.map(children, (child, i) => (
          <SwiperSlide className="one-slide" key={i}>
            {child}
          </SwiperSlide>
        ))}
        {renderCustomerProgress &&
          renderCustomerProgress({ progressNode: counterNode, currIndex: actIndex - 1, totalIndex: total })}
        {customProgressFlag && (
          <>
            <div className="custom-bar-wrapper">
              <div className="custom-bar-content" style={{ width: `${(actIndex * 100) / total}%` }}></div>
            </div>{' '}
            {counterNode}
          </>
        )}
      </Swiper>
      {defaultProgressFlag && counterNode}
    </div>
  );
};

export interface IByProgressSwiperProps extends IProps {
  width?: string;
  contentPadding: string;
  progressPadding: string;
  previewWidth: string;
}
/**
 * 若使用百分比 则为(单个边距或露出长度)/swiper总宽度
 * @param noProgress?: boolean; 是否需要进度条
 * @param contentPadding: string; 内容与swiper边框距离
 * @param progressPadding: string; 滚动条与边框距离
 * @param previewWidth: string; 露出的宽度
 */
const ByProgressSwiper = styled(RawByProgressSwiper)<IByProgressSwiperProps>`
  width: ${props => props.width || '100%'};
  .swiper-container {
    width: ${props => props.width || '100%'};
  }
  .one-slide {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .swiper-container-horizontal > .swiper-scrollbar {
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - ${props => props.progressPadding} - ${props => props.progressPadding});
  }
  .swiper-slide {
    padding-bottom: ${props => (props.noProgress ? '0px' : '24px')} !important;
    width: calc(100% - ${props => props.contentPadding} - ${props => props.contentPadding}) !important;
    margin: 0 ${props => props.contentPadding};
  }
  .swiper-slide-prev {
    right: calc(0px - ${props => props.progressPadding} - ${props => props.previewWidth});
  }
  .swiper-slide-next {
    left: calc(0px - ${props => props.progressPadding} - ${props => props.previewWidth});
  }
  .swiper-counter {
    text-align: center;
    margin-top: 7px;
    font-size: 13px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    line-height: 18px;
  }
  .swiper-container-horizontal > .swiper-scrollbar {
    height: 3px !important;
    background-color: #e7e7fb !important;
  }
  .swiper-scrollbar-drag {
    background-color: #2b58f9 !important;
    border-radius: 0;
  }
  .custom-bar-wrapper {
    position: relative;
    margin: -8px auto 0;
    width: 30px;
    height: 3px;
    background: #f2f2f2;
    border-radius: 0px 0px 4px 4px;
  }
  .custom-bar-content {
    transition: width 0.3s ease-in-out;
    width: 0px;
    height: 3px;
    background: #2b58f9;
    border-radius: 0px 0px 4px 4px;
  }
`;
export default ByProgressSwiper;
