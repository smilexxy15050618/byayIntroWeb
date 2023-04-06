import * as React from 'react';
import styled from 'styled-components';

const TitleWrap = styled.div`
  padding: 60px 38px;
  text-align: center;
`;

const ServiceTitle = styled.h3<{ showUnderline?: boolean }>`
  font-size: 36px;
  font-weight: 500;
  color: rgba(13, 25, 36, 1);
  line-height: 50px;
  position: relative;
  ${props => {
    if (props.showUnderline) {
      return `
            ::after{
                content:'';
                position: absolute;
                height:0;
                width:40px;
                background:red;
                bottom:-10px;
                left:calc(50% - 20px);
                background:#3153D4;
                @media screen and (max-width: 768px){
                    height:2px;
                }
            }
            `;
    }
    return null;
  }}
`;

const Desc = styled.span`
  margin-top: 24px;
  height: 24px;
  font-size: 16px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
  font-family: PingFangSC-Regular;
`;

interface ITitleProps {
  title: string | React.ReactNode;
  desc?: string;
  showUnderline?: boolean;
  style?: React.CSSProperties;
}

const Title: React.SFC<ITitleProps> = ({ title, desc, showUnderline, style }) => (
  <TitleWrap style={style}>
    <ServiceTitle showUnderline={showUnderline}>{title}</ServiceTitle>
    {desc && <Desc>{desc}</Desc>}
  </TitleWrap>
);

export default Title;
