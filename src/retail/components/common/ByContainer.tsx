import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { Theme } from '../../../constants/style';
import { cssSwitch, splitCssValue } from '../../../lib/utils';
interface IProps {
  className?: string;
  children?: ReactNode;
  maxWidthPc?: string;
  minWidthPC?: string;
}

const Content = styled.div<{ maxWidthPc?: string; minWidthPC?: string }>`
  @media (min-width: 768px) {
    max-width: ${props => props.maxWidthPc || Theme.ContentWidth};
    min-width: ${props => props.minWidthPC || 'unset'};
    width: calc(
      100vw / ${splitCssValue(Theme.DesignDraftWidth).num} *
        ${props => splitCssValue(props.maxWidthPc || Theme.ContentWidth).num}
    );
  }
  height: 100%;
  @media (max-width: 768px) {
    width: 100% !important;
  }
`;

const RawByContainer: FC<IProps> = ({ className, children, maxWidthPc, minWidthPC }) => {
  return (
    <div className={className}>
      <Content maxWidthPc={maxWidthPc} minWidthPC={minWidthPC}>
        {children}
      </Content>
    </div>
  );
};
export interface IByContainerProps extends IProps {
  height?: string | string[];
  background?: string | string[];
  padding?: string | string[];
}
/**
 * css属性支持 ['PC样式','移动端样式'] 赋值
 * @param padding? 内边距, PC端应用maxWidthPc控制左右边距
 * @param height? container的高度 string 'auto'
 * @param background? 背景颜色/图片 string '#FFFFFF'
 * @param maxWidthPc? PC端最大宽度 string Theme.ContentWidth
 * @param minWidthPC? PC端最小宽度
 * @param children? 展示内容
 */
const ByContainer = styled(RawByContainer)<IByContainerProps>`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  ${props => cssSwitch(props.height, 'height', ['auto', 'auto'], true)}
  ${props => cssSwitch(props.background, 'background', ['#FFFFFF', '#FFFFFF'], true)}
  ${props => cssSwitch(props.padding, 'padding', ['0 0', '40px 20px'], true)}
  background-repeat: round;
  background-size: cover;
`;
export default ByContainer;
