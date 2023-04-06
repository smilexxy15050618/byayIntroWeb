import * as React from 'react';
import styled, { css } from 'styled-components';

type Size = 'sm' | 'lg' | 'xs' | 'xsEc';
const lgStyle = css`
  width: 265px;
  height: 376px;
  padding: 64px 20px 0px;
  .title {
    font-size: 22px;
    margin-bottom: 32px;
  }
  .underline-box {
    width: 28px;
    margin-bottom: 20px;
  }
`;
const smStyle = css`
  width: 290px;
  height: 224px;
  padding: 16px 24px 0px;
  .title {
    font-size: 20px;
    margin-bottom: 16px;
  }
  .underline-box {
    width: 24px;
    margin-bottom: 16px;
  }
`;
// 移动端样式
const xsStyle = css`
  width: 163px;
  height: 246px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 16px;

  .title {
    font-size: 16px;
    margin-bottom: 8px;
  }
  .underline-box {
    width: 24px;
    margin-bottom: 16px;
  }
  .desc {
    font-size: 14px;
    line-height: 26px;
  }
`;

const xsEcologyStyle = css`
  width: 279px;
  .title {
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 12px;
  }
  .underline-box {
    height: 3px;
    width: 16px;
    margin-bottom: 12px;
  }
  .desc {
    font-size: 14px;
    line-height: 20px;
  }
`;

const styleMap = {
  sm: smStyle,
  xs: xsStyle,
  lg: lgStyle,
  xsEc: xsEcologyStyle,
};
const Wrap = styled.div<{ size?: Size }>`
  border-radius: 20px;
  @media (min-width: 768px) {
    :hover {
      background: #f9faff;
      .title {
        color: #2b58f9;
      }
    }
  }
  .title {
    font-weight: 500;
    color: #000000;
    line-height: 28px;
  }
  .underline-box {
    height: 4px;
    background: #2b58f9;
  }
  .desc {
    text-align: justify;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
    line-height: 32px;
  }

  ${props => styleMap[props.size]}
`;

export interface IReasonCardProps {
  title: string;
  desc: string | React.ReactNode;
  size?: Size;
  style?: React.CSSProperties;
}
const ReasonCard: React.SFC<IReasonCardProps> = ({ title, desc, size = 'lg', style }) => (
  <Wrap size={size} style={style}>
    <div className="title">{title}</div>
    <div className="underline-box"></div>
    <div className="desc">{desc}</div>
  </Wrap>
);
export default ReasonCard;
