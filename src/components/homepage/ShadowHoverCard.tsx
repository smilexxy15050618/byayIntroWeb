import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
interface IProps {
  className?: string;
  children?: ReactNode;
  title: string;
  desc: string;
  smallActive?: boolean;
}

const RawShadowHoverCard: FC<IProps> = ({ className, title, desc, smallActive }) => {
  return (
    <div className={smallActive ? `${className} small-active` : className}>
      <div className="title">
        <div>{title}</div>
        <div className="block"></div>
      </div>
      <div className="blue-layer">{desc}</div>
    </div>
  );
};

export interface IShadowHoverCardProps extends IProps {
  width: string;
  background: string;
}
/**
 * @param title:标题
 * @param desc:描述
 * @param wdith:card宽度 string
 * @param background:card背景 string
 */
const ShadowHoverCard = styled(RawShadowHoverCard)<IShadowHoverCardProps>`
  width: ${props => props.width};
  background: ${props => props.background};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 280px;

  border-radius: 14px;
  position: relative;
  .title {
    font-size: 28px;
    font-weight: 400;
    color: #ffffff;
    line-height: 40px;
    position: absolute;
    z-index: 2;
    display: flex;
    align-items: center;
    flex-direction: column;
    left: 50%;
    bottom: 41px;
    transform: translateX(-50%);
    transition: 0.3s ease;
  }
  .block {
    margin-top: 10px;
    width: 28px;
    height: 8px;
    background: #2b58f9;
    border-radius: 8px;
    transition: 0.3s;
  }
  .blue-layer {
    box-sizing: border-box;
    position: absolute;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 14px;
    background: #2b58f9;
    border-radius: 14px;
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 180px 32px 0px;
    text-align: justify;
    font-size: 16px;
    color: #ffffff;
    line-height: 22px;
    transition: all 0.1s linear 0.2s;
  }
  :hover {
    .title {
      color: white;
      bottom: 148px;
      .block {
        background: white;
      }
    }
    .blue-layer {
      opacity: 0.85;
    }
  }
  @media (max-width: 768px) {
    height: 210px;
    .blue-layer {
      padding: 110px 32px 0px;
    }
    &.small-active {
      .title {
        color: white;
        bottom: 123px;
        .block {
          background: white;
        }
      }
      .blue-layer {
        opacity: 0.85;
      }
    }
  }
`;
export default ShadowHoverCard;
