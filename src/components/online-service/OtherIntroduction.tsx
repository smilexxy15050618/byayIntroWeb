import React, { FC } from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';

const OtherIntroductionWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 6.5vw 0;

  .introduction-card {
    width: 37.5vw;
    height: 11.8vw;
    margin: 1vw;
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.07);
    border-radius: 2px;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 1.74vw 3.9vw;
    cursor: pointer;

    .introduction-left {
      margin-right: 2.4vw;
    }

    img {
      width: 4.87vw;
      margin: 0;
    }

    h4 {
      margin: 0;
      font-size: 2vw;
      line-height: 3.5vw;
      color: #0d1924;
    }

    p {
      color: #666666;
      font-size: 1.25vw;
      line-height: 2.5vw;
      margin: 0;
    }
  }

  @media screen and (min-width: 1440px) {
    padding: 94px calc(50vw - 580px);

    .introduction-card {
      width: 541px;
      height: 171px;
      margin: 13px;
      padding: 26px 52px;

      img {
        width: 70px;
      }

      h4 {
        font-size: 28px;
        line-height: 50px;
      }

      p {
        font-size: 18px;
        line-height: 36px;
      }
    }
  }

  ${media.phone`
    padding: 8.5vw 0;

    .introduction-card {
      width: 84vw;
      height: 26.7vw;
      margin: 3vw;
      padding: 3vw 6vw;

      img {
        width: 10vw;
        margin-right: 5.87vw;
      }

      h4 {
        font-size: 4.53vw;
        line-height: 6.67vw;
      }

      p {
        font-size: 3.2vw;
        line-height: 4.8vw;
      }
    }
  `}
`;

export interface OtherIntroductionProps {
  dataList: {
    icon: string;
    title: string;
    desc: string;
    link?: string;
  }[];
  style?: React.CSSProperties;
}

export const OtherIntroduction: FC<OtherIntroductionProps> = ({ dataList, style }) => (
  <OtherIntroductionWrapper style={style}>
    {dataList.map(data => (
      <div className="introduction-card" onClick={() => data.link && (location.href = data.link)}>
        <div className="introduction-left">
          <img src={data.icon} title={data.title} />
        </div>
        <div className="introduction-right">
          <h4>{data.title}</h4>
          <p>{data.desc}</p>
        </div>
      </div>
    ))}
  </OtherIntroductionWrapper>
);
