import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
interface IProps {
  className?: string;
  children?: ReactNode;
  title: string;
  desc: string;
  isActive: boolean;
  onMouseEnter: () => void;
  onClick: () => void;
}

const RawPartnerSystemCard: FC<IProps> = ({ className, title, desc, onMouseEnter, isActive = false, onClick }) => {
  return (
    <div onMouseEnter={onMouseEnter} className={`${className} ${isActive ? 'is-active' : ''}`}>
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
      <div className="btn" onClick={onClick}>
        加入我们
      </div>
    </div>
  );
};

export type IPartnerSystemCardProps = IProps;
const PartnerSystemCard = styled(RawPartnerSystemCard)<IPartnerSystemCardProps>`
  @media (min-width: 768px) {
    &.is-active {
      width: 292px;
      height: 508px;
      background: linear-gradient(220deg, #0e86fe 0%, #174cff 100%);
      box-shadow: 0px 8px 72px 0px rgba(50, 93, 224, 0.24);
      border-radius: 8px;
      padding-top: 80px;
      .title {
        color: #ffffff;
        letter-spacing: 1px;
      }
      .desc {
        color: rgba(255, 255, 255, 0.85);
      }
      .btn {
        opacity: 1;
      }
    }
  }
  width: 250px;
  height: 420px;
  background: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 56px;
  transition: 0.2s;
  .title {
    font-size: 24px;
    font-weight: 600;
    color: #000000;
    line-height: 33px;
    text-align: center;
    margin-bottom: 32px;
  }
  .desc {
    font-size: 16px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 32px;
    text-align: justify;
    width: 186px;
  }
  position: relative;
  .btn {
    font-size: 16px;
    color: #ffffff;
    line-height: 32px;
    text-align: center;
    opacity: 0;
    position: absolute;
    padding: 0 !important;
    bottom: 50px;
    left: 50%;
    width: 100px;
    height: 32px;
    border-radius: 2px;
    border: 1px solid #ffffff;
    transform: translateX(-50%);
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 327px;
    height: 180px;
    border-radius: 8px;
    padding-top: 16px;
    .title {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 8px;
    }
    .desc {
      width: 279px;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
    }
    position: relative;
    .btn {
      font-size: 12px;
      color: #385ff5;
      line-height: 26px;
      text-align: center;
      opacity: 1 !important;
      position: absolute;
      padding: 0 !important;
      bottom: 16px;
      left: 50%;
      width: 72px;
      height: 26px;
      border-radius: 2px;
      border: 1px solid #385ff5;
      transform: translateX(-50%);
      cursor: pointer;
    }
  }
`;
export default PartnerSystemCard;
