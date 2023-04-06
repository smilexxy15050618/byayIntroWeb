import * as React from 'react';
import styled from 'styled-components';

const PREFIX = 'https://cdn.byai.com/static/official-website/cooperation';
const BlueLinesUrl = `${PREFIX}/blue-lines.png`;
const Wrap = styled.div`
  width: 265px;
  height: 447px;
  background: #ffffff;
  border-radius: 13px;
  box-shadow: 0px 20px 39px rgba(12, 36, 169, 0.08);
  overflow: hidden;
  position: relative;
  .img-warp {
    width: 100%;
    img {
      width: 100%;
      margin: 0;
    }
    height: 160px;
    overflow: hidden;
    background: rgba(43, 88, 249, 0.02);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title {
    font-size: 20px;
    font-weight: 600;
    color: #000000;
    line-height: 28px;
    letter-spacing: 1px;
    text-align: center;
    margin-top: 30px;
  }
  .desc {
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
    line-height: 32px;
    text-align: justify;
    margin: 16px 25px 0px 24px;
  }
  .xs-blue-btn {
    display: none;
  }
  .hover-title {
    font-size: 24px;
    font-weight: 600;
    color: #ffffff;
    line-height: 32px;
    letter-spacing: 1px;
  }
  .hover-desc {
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    line-height: 32px;
    margin: 24px 0px 76px;
  }
  .hover-btn {
    position: absolute;
    bottom: 65px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 40px;
    background: #ffffff;
    border-radius: 20px;
    font-size: 16px;
    font-weight: 400;
    color: #2b58f9;
    line-height: 40px;
    text-align: center;
    cursor: pointer;
  }

  .hover-block {
    padding: 75px 25px 0px 24px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(${BlueLinesUrl}) no-repeat center;
    background-size: cover;
    background-color: #2b58f9;
    display: none;
    opacity: 0;
    transition: 1.2s;
    z-index: 5;
  }
  .normal-block {
    height: 100%;
    transition: 0.8s;
  }
  @media (min-width: 768px) {
    :hover {
      .normal-block {
        opacity: 0;
      }
      .hover-block {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
    .hover-block:hover {
      opacity: 1;
    }
  }
  @media (max-width: 674px) {
    width: 327px;
    height: auto;
    border-radius: 8px;
    .img-warp {
      height: 174px;
      overflow: hidden;
      background: rgba(43, 88, 249, 0.02);
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .title {
      font-size: 16px;
      font-weight: 500;
      line-height: 22px;
      margin-top: 16px;
    }
    .desc {
      font-size: 14px;
      line-height: 24px;
      text-align: center;
      margin: 16px 21px 16px 20px;
    }
    .xs-blue-btn {
      margin: 0 auto 16px;
      width: 84px;
      height: 32px;
      border-radius: 2px;
      border: 1px solid #385ff5;
      display: block;
      font-size: 14px;
      color: #385ff5;
      line-height: 32px;
      text-align: center;
      cursor: pointer;
    }
  }
`;

interface IEcologyServiceCardProps {
  title: string;
  desc: string;
  btnText?: string;
  imageUrl: string;
  onLinkClick?: () => void;
}
const ServiceCard: React.SFC<IEcologyServiceCardProps> = ({ title, desc, btnText, imageUrl, onLinkClick }) => (
  <Wrap>
    <div className="hover-block">
      <div className="hover-title">{title}</div>
      <div className="hover-desc">{desc}</div>
      <span className="hover-btn" onClick={onLinkClick}>
        申请加入
      </span>
    </div>
    <div className="normal-block">
      <div className="img-warp">
        <img src={imageUrl} />
      </div>
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
      <div className="xs-blue-btn" onClick={onLinkClick}>
        申请加入
      </div>
    </div>
  </Wrap>
);
export default ServiceCard;
