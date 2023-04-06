import React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';

interface Props {
  title?: string;
  dataList: {
    src: string;
    title: string;
    desc: string;
  }[];
}

const UsedScenesWrapper = styled.div`
  .used-scenes-header {
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0d1924;
    font-size: 36px;
    ${media.phone`
      height: 164px;
      font-size: 36px;
    `}
  }
  .scenes-content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 75px;
    ${media.phone`
      padding-bottom: 0;
    `}
    &>div {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      ${media.phone`
        width: 86vw;
        justify-content: space-between;
      `}
      .scenes-box {
        width: 273px;
        height: 311px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 5px 10px 30px 0px rgba(49, 83, 212, 0.1);
        margin-right: 32px;
        margin-bottom: 30px;
        img {
          margin: 0;
        }
        .box-footer {
          padding: 24px 30px;
          .scenes-title {
            color: #0d1924;
            font-size: 26px;
            margin-bottom: 10px;
          }
          .scenes-desc {
            color: #666666;
            font-size: 14px;
          }
        }
        ${media.phone`
          width:41.3vw;
          height:auto;
          box-shadow:3px 5px 17px 0px rgba(49,83,212,0.1);
          margin-right: 8px;
          margin-left: 8px;
          margin: 0;
          margin-bottom: 5.3vw;
          .box-footer {
            padding: 12px 15px;
            .scenes-title {
              color: #0D1924;
              font-size: 13px;
              margin-bottom: 5px;
              white-space: nowrap;
            }
            .scenes-desc {
              color: #666666;
              font-size: 7px;
              margin: 0;
            }
          }
        `}
      }
    }
  }
`;

const UsedScenes = ({ title, dataList }: Props) => (
  <UsedScenesWrapper>
    <div className="used-scenes-header">
      <span>{title ? title : '使用场景'}</span>
    </div>
    <div className="scenes-content">
      <div>
        {dataList.map(data => (
          <div className="scenes-box">
            <img src={data.src} />
            <div className="box-footer">
              <p className="scenes-title">{data.title}</p>
              <p className="scenes-desc">{data.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </UsedScenesWrapper>
);

export default UsedScenes;
