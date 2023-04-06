import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { ArrowSolidDown } from '@indata/icon-byai';
interface IProps {
  className?: string;
  children?: ReactNode;
  hoverImgUrl: string;
  hoverTitle: string;
}

const ByHoverIcon: FC<IProps> = ({ className, hoverImgUrl, children, hoverTitle }) => {
  return (
    <div className={className}>
      <div className="hover-img-wrapper">
        <div>
          <div className="hover-title">{hoverTitle}</div>
          <img src={hoverImgUrl} />
        </div>
        <ArrowSolidDown />
      </div>
      <div className="icon">{children}</div>
    </div>
  );
};

export interface IByHoverIconProps extends IProps {
  size: number;
  hoverImgSize: number;
}
const StyledByHoverIcon = styled(ByHoverIcon)<IByHoverIconProps>`
  font-size: ${props => props.size}px;
  position: relative;
  .hover-img-wrapper {
    position: absolute;
    top: 0;
    left: 50%;
    width: ${props => props.hoverImgSize}px;
    img {
      width: 100%;
      margin: 0;
    }
    .hover-title {
      font-size: 14px;
      color: rgba(0, 0, 0, 0.45);
      line-height: 20px;
    }
    transform: translate(-50%, calc(-100% + 6px));
    display: none;
  }
  :hover > .hover-img-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
  :hover > .hover-img-wrapper > div {
    border-radius: 15px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding: 16px 7px 7px;
  }
  :hover .icon {
    color: #fff;
  }
  .byicon-svg-arrow-solid-down {
    transform: translateY(-6px);
    display: flex;
    color: white;
    font-size: 20px;
  }
  .icon > span {
    display: flex;
  }
`;
export default StyledByHoverIcon;
