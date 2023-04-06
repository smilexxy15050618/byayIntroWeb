import React, { Children, FC, ReactElement, ReactNode, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';
import { handleStyleProp } from '../../lib/utils';
import { IBySwiperItemProps } from './BySwiperItem';
interface IProps {
  className?: string;
  children?: ReactNode;
}
const BySwiper: FC<IProps> = ({ className, children }) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: number): void => {
    setIndex(selectedIndex);
  };
  return (
    <div className={className}>
      <div className="swiper-nav-bar">
        {Children.map(children, (child, i) => (
          <div className={index === i ? 'active-swiper-nav' : ''} onClick={() => handleSelect(i)}>
            {(child as ReactElement<IBySwiperItemProps>).props.tabName}
          </div>
        ))}
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} controls={false} indicators={false} interval={3000}>
        {Children.map(children, (child, index) => (
          <Carousel.Item key={index}>{child}</Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export interface IBySwiperProps extends IProps {
  bottomLineColor?: string | boolean;
}
const StyledBySwiper = styled(BySwiper)<IBySwiperProps>`
  width: 100%;
  .swiper-nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border-bottom: ${handleStyleProp('bottomLineColor', value => `1px solid ${value}`, `1px solid rgb(230,239,230)`)};
    > div {
      cursor: pointer;
    }
  }
  .active-swiper-nav {
    color: blue;
  }
`;
export default StyledBySwiper;
