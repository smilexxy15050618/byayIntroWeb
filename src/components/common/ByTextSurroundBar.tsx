import React, { Children, FC, ReactNode } from 'react';
import styled from 'styled-components';
import { splitCssValue } from '../../lib/utils';
interface IProps {
  className?: string;
  children?: ReactNode;
}

const ByTestSurroundBar: FC<IProps> = ({ className, children }) => {
  return (
    <div className={className}>
      {Children.map(children, (child, i) => (
        <div className={`surround-item surround-item${i}`}>
          <div>{child}</div>
        </div>
      ))}
    </div>
  );
};

export interface IByTestSurroundBarProps extends IProps {
  imgUrl: string;
  sideLength: string;
  times?: number;
}
// 让环绕字比图片宽
const getRadius = (sideLength, times = 1.25) => {
  const { num, unit } = splitCssValue(sideLength);
  return (num * times) / 2 + unit;
};
const getLength = (sideLength, times = 1.25) => {
  const { num, unit } = splitCssValue(sideLength);
  return num * times + unit;
};
const StyledByTestSurroundBar = styled(ByTestSurroundBar)<IByTestSurroundBarProps>`
  width: ${props => getLength(props.sideLength, props.times)};
  height: ${props => getLength(props.sideLength, props.times)};
  background: url(${props => props.imgUrl}) no-repeat center;
  background-size: ${props => (props.times ? (1 / props.times) * 100 : 80)}%;
  position: relative;
  border-radius: 50%;
  .surround-item {
    width: 2px;
    height: 2px;
    position: absolute;
    > div {
      height: 100%;
      display: flex;
      align-items: center;
    }
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    transform-origin: 50% ${props => getRadius(props.sideLength, props.times)};
  }
  ${props => {
    let surroundItems = '';
    const childNum = Children.count(props.children);
    for (let i = 0; i < childNum; i++) {
      const rotateDeg = (360 / childNum) * i;
      const itemStyle = `
        .surround-item${i} {
          transform: translateX(-50%) rotate(${rotateDeg}deg);
          >div {
            transform: rotate(-${rotateDeg}deg);
            justify-content: ${i < childNum / 2 ? 'flex-start' : 'flex-end'};
          }
        }
      `;
      surroundItems += itemStyle;
    }
    return surroundItems;
  }}
`;
export default StyledByTestSurroundBar;
