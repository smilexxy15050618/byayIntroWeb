import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
interface IProps {
  className?: string;
  children?: ReactNode;
}

const RawByScrollLine: FC<IProps> = ({ className, children }) => {
  return (
    <div className={className}>
      <div className="scroll-content">
        <div className="scroll-item">{children}</div>
        <div className="scroll-item">{children}</div>
        <div className="scroll-item">{children}</div>
        <div className="scroll-item">{children}</div>
      </div>
    </div>
  );
};

export interface IByScrollLineProps extends IProps {
  width?: string;
  maxWidth?: string;
  time?: string;
  delay?: string;
}
/**
 * @param width?: 跑马灯宽度(最好小于滚动内容) string
 * @param maxWidth?: 最大宽度 string
 * @param children: 传入的滚动内容
 * @param time?: 跑一遍要的时间 string
 * @param delay?: 动效延迟可以为负数，实现动效果交错 string
 */
const ByScrollLine = styled(RawByScrollLine)<IByScrollLineProps>`
  width: ${props => props.width};
  max-width: ${props => props.maxWidth};
  overflow-x: hidden;
  overflow-y: visible;
  display: flex;
  align-items: center;
  .scroll-content {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    animation: scrollit ${props => props.time} infinite ${props => props.delay} linear;
    @keyframes scrollit {
      0% {
        transform: translateX(0px);
      }
      100% {
        transform: translateX(-50%);
      }
    }
  }
  .scroll-item {
    flex-shrink: 0;
  }
`;
export default ByScrollLine;
