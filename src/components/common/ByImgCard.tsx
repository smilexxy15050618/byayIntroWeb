import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  desc: string;
  imageUrl: string;
  btnText?: string;
  onLinkClick?: () => void;
  className?: string;
}
const ByImgCard: FC<IProps> = ({ title, desc, btnText, imageUrl, onLinkClick, className }) => (
  <div className={className}>
    <div className="img-warp">
      <img src={imageUrl} />
    </div>
    <div className="title">{title}</div>
    <div className="desc">{desc}</div>
    {btnText && (
      <span className="btn" onClick={onLinkClick}>
        {btnText}
      </span>
    )}
  </div>
);
export type IByImgCard = IProps;

const StyledByImgCard = styled(ByImgCard)<IByImgCard>`
  width: 356px;
  height: 500px;
  background: #ffffff;
  border-radius: 13px;
  box-shadow: 0px 20px 39px rgba(12, 36, 169, 0.08);
  overflow: hidden;
  position: relative;
  .img-warp {
    width: 100%;
    height: 200px;
    background: rgba(43, 88, 249, 0.02);
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 160px;
      width: auto;
      margin: 0;
    }
  }
  .title {
    font-size: 20px;
    font-weight: 600;
    color: #000000;
    line-height: 28px;
    letter-spacing: 1px;
    text-align: center;
    margin-top: 32px;
  }
  .desc {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 32px;
    text-align: justify;
    margin: 16px 28px 0px;
  }
  .btn {
    cursor: pointer;
    padding: 0px;
    position: absolute;
    left: 28px;
    bottom: 20px;
    font-size: 20px;
    font-weight: 400;
    color: #2b58f9;
    line-height: 32px;
  }
`;

export default StyledByImgCard;
