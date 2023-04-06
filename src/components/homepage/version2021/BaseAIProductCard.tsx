import React, { FC, ReactNode } from 'react';
import { Hidden, Visible } from 'react-grid-system';
import styled, { css } from 'styled-components';
interface IProps {
  className?: string;
  children?: ReactNode;
  title: string;
  desc: string;
  imgUrl: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const XsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 15%;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: 0.6s;
  .title {
    margin: 7px 0px 8px;
    font-size: 18px;
    font-weight: 400;
    color: #000000;
    line-height: 29px;
  }
  > img {
    height: 56px;
    width: auto;
  }
  .desc {
    height: 44px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    line-height: 22px;
    text-align: center;
  }
`;

const RawBaseAIProductCard: FC<IProps> = ({ className, title, desc, imgUrl, onMouseEnter, onMouseLeave }) => {
  return (
    <>
      <Hidden xs sm>
        <div className={className} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <img src={imgUrl} />
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </div>
      </Hidden>
      <Visible xs sm>
        <XsWrapper>
          <img src={imgUrl} />
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </XsWrapper>
      </Visible>
    </>
  );
};

export interface IBaseAIProductCardProps extends IProps {
  isActive: boolean;
}
const BaseAIProductCard = styled(RawBaseAIProductCard)<IBaseAIProductCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 224px;
  height: 244px;
  background: #ffffff;
  transition: 0.2s;
  padding-bottom: 47px;
  border-radius: 14px;
  .title {
    margin-top: 25px;

    font-size: 20px;
    color: #000000;
    line-height: 32px;
  }
  > img {
    height: 60px;
    width: auto;
    transition: 0.2s;
  }
  .desc {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    line-height: 22px;
    text-align: center;
    width: 269px;
  }
  ${props =>
    props.isActive
      ? css`
          transform: scale(1.09);
          box-shadow: 1px -1px 40px #032bb713;
          > img {
            transform: scale(1.3);
          }
        `
      : ''}
`;
export default BaseAIProductCard;
