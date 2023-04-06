import React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';
import { TitleLayout } from './TitleLayout';

const DIYCardWrapper = styled.div`
  background: #f8f9fb;
  padding-bottom: 100px;
  ${media.phone`
    padding-bottom: 13.3vw;
  `}
  .content {
    width: 1190px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    transform: scale(0.9);
    .DIY-card {
      width: 560px;
      height: 368px;
      border-radius: 4px;
      border: 1px dashed rgba(49, 83, 212, 1);
      box-sizing: border-box;
      border-left-width: 1.5px;
      .card-header {
        width: 561px;
        transform: translate(-2px, -2px);
        padding: 0;
        height: 68px;
        background: rgba(49, 83, 212, 1);
        border-radius: 4px 4px 0px 0px;
        color: #fff;
        text-align: center;
        line-height: 68px;
        font-size: 18px;
      }
      .desc-card {
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: center;
        & > div {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          width: 500px;
          height: 220px;

          .desc-item {
            width: 235px;
            height: 90px;
            background: #fff;
            box-shadow: 5px 10px 30px 0px rgba(49, 83, 212, 0.1);
            display: flex;
            align-items: center;
            margin-bottom: 40px;
            img {
              width: 34px;
              height: 34px;
              margin: 0 20px 0 30px;
            }
            span {
              color: #0d1924;
              font-size: 16px;
            }
          }
        }
      }
      &.card-single {
        .desc-item {
          width: 500px;
          height: 220px;
          background: #fff;
          box-shadow: 5px 10px 30px 0px rgba(49, 83, 212, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 34px;
            height: 34px;
            margin-right: 20px;
            margin-bottom: 46px;
          }
          p {
            width: 201px;
            font-size: 16px;
            color: #0d1924;
            margin: 0;
          }
        }
      }
    }
    ${media.phone`
      transform: none;
      width: 86.7vw;
      flex-wrap: wrap;
      .DIY-card {
        width: 100%;
        margin-bottom: 4.8vw;
        height: 57vw;
        border-left-width: 1px;
        .card-header {
          width: 86.8vw;
          height: 10.5vw;
          line-height: 10.5vw;
          font-size: 2.8vw;
          transform: translate(-1px, -1px);
        }
        .desc-card {
          width: 100%;
          height: 46.5vw;
          &>div {
            width: 77.3vw;
            height: 34.1vw;
            .desc-item {
              width: 36.4vw;
              height: 14vw;
              margin-bottom: 6.27vw;
              img {
                width: 5.27vw;
                height: 5.27vw;
                margin: 0 3.1vw 0 4.7vw;
              }
              span {
                font-size: 2.5vw;
              }
            }
          }
        }
        &.card-single {
          .desc-item {
            width: 77.3vw;
            height: 34vw;
            img {
              width: 5.3vw;
              height: 5.3vw;
              margin-right: 2.7vw;
              margin-bottom: 7.5vw;
            }
            p {
              width: 31vw;
              font-size: 2.5vw;
            }
          }
        }
      }
    `}
  }
`;

export const DIYCard = () => {
  return (
    <DIYCardWrapper>
      <TitleLayout title="个性化定制">
        <div className="content">
          <div className="DIY-card">
            <div className="card-header">业务定制平台</div>
            <div className="desc-card">
              <div>
                <div className="desc-item">
                  <img src="https://cdn.byai.com/static/intro/img/smart-sale/DIY-card-2.png" />
                  <span>自定义字段</span>
                </div>
                <div className="desc-item">
                  <img src="https://cdn.byai.com/static/intro/img/smart-sale/DIY-card-3.png" />
                  <span>自定义业务参数</span>
                </div>
                <div className="desc-item">
                  <img src="https://cdn.byai.com/static/intro/img/smart-sale/DIY-card-4.png" />
                  <span>自定义业务对象</span>
                </div>
                <div className="desc-item">
                  <img src="https://cdn.byai.com/static/intro/img/smart-sale/DIY-card-5.png" />
                  <span>自定义审批流程</span>
                </div>
              </div>
            </div>
          </div>
          <div className="DIY-card card-single">
            <div className="card-header">百应开放平台</div>
            <div className="desc-card">
              <div className="desc-item">
                <img src="https://cdn.byai.com/static/intro/img/smart-sale/DIY-card-1.png" />
                <p>自行开发应用并集成到CRM中，打造符合业务需求的专属CRM系统</p>
              </div>
            </div>
          </div>
        </div>
      </TitleLayout>
    </DIYCardWrapper>
  );
};
