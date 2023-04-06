import React, { FC, ReactNode } from 'react';
import { Hidden, Visible } from 'react-grid-system';
import styled from 'styled-components';
interface IProps {
  className?: string;
  children?: ReactNode;
  title: string;
  desc: string;
  imgUrl: string;
  onMouseEnter?: () => void;
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
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    margin: 7px 0px 8px;
  }
  > img {
    height: 40px;
    width: auto;
  }
  .desc {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 22px;
    text-align: center;
  }
`;

const RawHoverBigBlueCard: FC<IProps> = ({ className, title, desc, imgUrl, onMouseEnter }) => {
  return (
    <>
      <Hidden xs sm>
        <div className={className} onMouseEnter={onMouseEnter}>
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

export interface IHoverBigBlueCardProps extends IProps {
  isActive: boolean;
}
const HoverBigBlueCard = styled(RawHoverBigBlueCard)<IHoverBigBlueCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 205px;
  height: 205px;
  padding: 0 16px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.08);
  transition: 0.2s;
  .title {
    font-size: 16px;
    font-weight: 500;
    color: #000000;
    margin: 7px 0px 8px;
  }
  > img {
    height: 54px;
    width: auto;
  }
  .desc {
    opacity: 0;
    height: 0;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 22px;
    text-align: center;
    width: 269px;
  }
  ${props =>
    props.isActive
      ? `
    width: 377px;
    height: 308px;
    background: linear-gradient(180deg, #5691FD 0%, #2450EF 100%);
    border-radius: 14px;
    border: none;
    padding: 0px 54px;
    .title {
      margin: 30px 0px 16px;
      font-size: 24px;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 24px;
    }
    >img {
      height: 65px;
    }
    .desc {
      opacity: 1;
      height: auto;
      text-align: center;
      font-size: 16px;
      color: #FFFFFF;
      line-height: 22px;
    }
    `
      : ''}
`;
export default HoverBigBlueCard;
