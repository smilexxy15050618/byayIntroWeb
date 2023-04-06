import * as React from 'react';
import { Col, Align } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../../constants/style';

interface TradeCardProps {
  coverImage: string;
  title: string;
  desc: string;
  company: string;
  trade: string;
  info: string;
  align: 'flex-end' | 'center' | 'flex-start';
  style?: object;
}

const TradeCardCol = styled<{ cardAlign: 'flex-end' | 'center' | 'flex-start' }>(Col)`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
  .card-wrapper {
    width: 94%;
    ${media.phone`
      width: 85%;
      margin-bottom: 16px;
      box-shadow:0px 20px 60px 0px rgba(49,83,212,0.1);
    `}
    box-shadow: 5px 10px 30px 0px rgba(49, 83, 212, 0.1);
    display: flex;
    flex-direction: column;
    transition: all .3s ease-in-out;
    &:hover {
      .cover {
        img {
          transform: scale(1.08);
        }
      }
        background: rgba(49, 83, 212, 1);
        box-shadow: 5px 10px 30px 0px rgba(49, 83, 212, 0.1);
        .card-content {
          .trade,
          .title {
            color: #fff;
          }
          .info {
            color: #fff;
            border-top: 1px solid rgba(245, 246, 251, .3);
          }
          .desc {
            color: rgba(255, 255, 255, 0.8);
          }
        }
    }
    .cover {
      width: 100%;
      overflow: hidden;
      img {
        transition: all .3s ease-in-out;
        width: 100%;
        height: 100%;
      }
    }

    .card-content {
      box-sizing: border-box;
      min-height: 255px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 20px 30px 0 30px;
      }
      .trade {
        font-weight: 300;
        margin-bottom: 20px;
        color: rgba(49, 83, 212, 1);
        span {
          font-size: 14px;
          line-height: 24px;
          &:nth-child(2) {
            display: inline-block;
            margin: 0 8px;
          }
        }
      }
      .title {
        font-size: 26px;
        color: rgba(13, 25, 36, 1);
        line-height: 37px;
        margin-bottom: 10px;
        font-weight: 400;
        font-family: PingFangSC-Light;
      }
      .desc {
        font-size: 14px;
        color: rgba(102, 102, 102, 1);
        line-height: 21px;
        flex: 1;
        font-weight: 300;
      }
      .info {
        width: 100%;
        padding: 20px 0;
        border-top: 1px solid rgba(245, 246, 251, 1);
        font-size: 14px;
        color: rgba(13, 25, 36, 1);
        line-height: 17px;
        font-weight: 300;
        transition: all .3s ease-in-out;
      }
    }
  }
`;

export const TradeCard: React.SFC<TradeCardProps> = ({
  coverImage,
  title,
  desc,
  company,
  trade,
  info,
  align,
  style,
}) => {
  return (
    <TradeCardCol style={style} cardAlign={align} lg={8}>
      <div className="card-wrapper">
        <div className="cover">
          <img src={coverImage} alt="" />
        </div>
        <div className="card-content">
          <div className="trade">
            <span>{trade}</span>
            <span>|</span>
            <span>{company}</span>
          </div>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
          <div className="info">{info}</div>
        </div>
      </div>
    </TradeCardCol>
  );
};
