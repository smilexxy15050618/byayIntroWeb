import React, { FC } from 'react';
import styled from 'styled-components';
import { calWidthAndHeight } from '../../../lib/utils';

const WrapperCommonHead = styled.div<{ bgColor: string; pt: number; pb: number }>`
  background: ${props => props.bgColor || '#ffffff'};
  text-align: center;
  color: #2b2b2b;
  padding: ${props => (props.pt !== undefined ? calWidthAndHeight(+props.pt) : calWidthAndHeight(100))} 0
    ${props => (props.pb !== undefined ? calWidthAndHeight(+props.pb) : calWidthAndHeight(48))};
  .title {
    font-size: ${calWidthAndHeight(40)};
    line-height: ${calWidthAndHeight(64)};
    font-weight: 500;
    @media screen and (max-width: 768px) {
      font-size: 20px;
      line-height: 32px;
    }
  }
  .sub-title {
    padding: ${calWidthAndHeight(8)} 0 0;
    font-size: ${calWidthAndHeight(28)};
    font-weight: 300;
    color: #2b2b2b;
    line-height: ${calWidthAndHeight(46)};
    letter-spacing: ${calWidthAndHeight(4)};
  }

  @media (max-width: 768px) {
    padding: ${calWidthAndHeight(40)} 0
      ${props => (props.pb !== undefined ? calWidthAndHeight(+props.pb) : calWidthAndHeight(32))};
    .title {
      font-size: ${calWidthAndHeight(20)};
      line-height: ${calWidthAndHeight(28)};
    }
    .sub-title {
      padding: ${calWidthAndHeight(8)} 0 0;
      font-size: ${calWidthAndHeight(14)};
      line-height: ${calWidthAndHeight(20)};
      letter-spacing: ${calWidthAndHeight(1)};
    }
  }
`;

interface ICommonHeadProps {
  title: string | React.ReactElement;
  subTitle?: string | React.ReactElement;
  bgColor?: string;
  pt?: number;
  pb?: number;
}
const CommonHead: FC<ICommonHeadProps> = ({ title, subTitle, bgColor, pt, pb }) => {
  return (
    <WrapperCommonHead bgColor={bgColor} pt={pt} pb={pb}>
      <div className="title">{title}</div>
      {subTitle && <div className="sub-title">{subTitle}</div>}
    </WrapperCommonHead>
  );
};

export default CommonHead;
