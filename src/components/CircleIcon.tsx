import * as React from 'react';
import styled from 'styled-components';

interface CircleIconProps {
  icon: string;
  desc: string;
  miniIcon?: string;
}

const CircleIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 80px;
    height: 80px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);
    color: #0d1924;
    font-size: 34px;
    border-radius: 50%;
  }
  span {
    font-size: 14px;
    color: #666;
    margin-top: 16px;
    .iconfont {
      margin-left: 3px;
    }
  }
`;

export const CircleIcon: React.SFC<CircleIconProps> = ({ icon, desc, miniIcon }) => (
  <CircleIconWrapper>
    <div className={'iconfont ' + icon} />
    <span>
      {desc}
      {miniIcon && <i className={`iconfont ${miniIcon}`}></i>}
    </span>
  </CircleIconWrapper>
);
