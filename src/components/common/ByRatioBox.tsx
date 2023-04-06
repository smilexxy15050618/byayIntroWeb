import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
interface IProps {
  className?: string;
  children?: ReactNode;
  padding?: string;
}

const Content = styled.div<{ padding: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: ${props => props.padding || 'unset'};
  box-sizing: border-box;
`;

const RawByRatioBox: FC<IProps> = ({ className, children, padding }) => {
  return (
    <div className={className}>
      <Content padding={padding}>{children}</Content>
    </div>
  );
};

export interface IByRatioBoxProps extends IProps {
  width: string;
  height?: string;
  ratio?: number;
  background?: string;
  calcHeight?: (width: string) => string;
}
const ByRatioBox = styled(RawByRatioBox)<IByRatioBoxProps>`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height || 'unset'};
  background: ${props => props.background || 'unset'};
  // 靠伪元素调整比例撑开高度
  &:before {
    content: '';
    display: block;
    width: 100%;
    padding-bottom: ${props =>
      props.height ? 'unset' : props.calcHeight ? `${props.calcHeight(props.width)}` : `${(props.ratio || 0) * 100}%`};
  }
`;
export default ByRatioBox;
