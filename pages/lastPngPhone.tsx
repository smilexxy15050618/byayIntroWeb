import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import imgurl from '../img.url.js';

export interface IAiProps {}
const Pane = styled.div`
  padding: 40px 24px;
  overflow: hidden;
  background: #ffffff;
  .title {
    margin-top: 40px;
    margin-bottom: 32px;
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0px;
    line-height: 32px;
    color: rgba(26, 26, 26, 1);
  }
  .left {
    margin-bottom: 22px;
    .text {
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0px;
      line-height: 28px;
      color: rgba(51, 51, 51, 1);
      text-align: center;
      margin-bottom: 22px;
    }
  }
  .hengtiao {
    margin-left: calc(50% - 20px);
    width: 40px;
    height: 2px;
    opacity: 1;
    background: rgba(0, 200, 189, 1);
  }
  .hengtiaoxiafang {
    margin-top: 56px;
    display: flex;
    flex-wrap: wrap;
    .hengtiaoxiafang_list {
      height: 72px;
      width: 50%;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .iconself {
        width: 40px;
        height: 40px;
        margin-right: 8px;
        img {
          width: 100%;
        }
      }
      .text_self {
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0px;
        line-height: 24px;
        color: rgba(90, 90, 90, 1);
      }
    }
  }
  .content {
    display: flex;
    flex-direction: column;
  }
  .right {
    .right_box {
      display: flex;
      justify-content: space-between;
      width: 100%;
      flex-wrap: wrap;
      .list {
        width: 30%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 24px;
        cursor: pointer;
        img {
          margin-bottom: 12px;
          width: 47px;
          height: 47px;
          background: rgba(255, 255, 255, 1);
          box-shadow: 0px 0px 15px 1px rgba(36, 91, 219, 0.06);
          border-radius: 50%;
        }
        P {
          font-size: 10.09px;
          font-weight: 400;
          letter-spacing: 0px;
          line-height: 13.45px;
          color: rgba(90, 90, 90, 1);
          transform: scale(.8);
        }
        &:hover img {
          box-shadow: 0px 0px 24px 1px rgba(36, 91, 219, 0.12);
        }
        p {
          width: 140px;
          text-align: center;
          font-size: 14px;
          font-weight: 400;
          color: rgba(90, 90, 90, 1);
          margin-bottom: 0;
        }
      }
    }
    img {
      height: 288px;
    }
  }
  img {
    margin-bottom: 0;
  }
`;

const MainWrap = styled.div`
  width: 100%;
  background: rgba(246, 252, 255, 1);
`;
const database = [
  {
    img: '/img_localiocn1.png',
    title: 'ISO27001',
  },
  {
    img: '/img_localiocn2.png',
    title: 'CMMI 5 认证',
  },
  {
    img: '/img_localiocn3.png',
    title: '等保三级',
  },
  {
    img: '/img_localiocn4.png',
    title: 'CS等级证书',
  },
  {
    img: '/img_localiocn5.png',
    title: 'ITSS 三级',
  },
  {
    img: '/img_localiocn6.png',
    title: '信用等级三A',
  },
  {
    img: '/img_localiocn7.png',
    title: 'CSEE+CSIA双证',
  },
  {
    img: '/img_localiocn8.png',
    title: '信息安全管理体系认证',
  },
  {
    img: '/img_localiocn9.png',
    title: '信息技术服务体系认证',
  },
];
export const LastPngPhone: FC<IAiProps> = ({}) => {
  return (
    <MainWrap>
      <Pane>
        <div className="title">安全合规 精益服务</div>
        <div className="content">
          <div className="left">
            <div className="text">
              以完成客户目标为价值导向
              <br />
              制定以助力客户成功为目标的服务体系
            </div>
            <div className="hengtiao"></div>
            <div className="hengtiaoxiafang">
              <div className="hengtiaoxiafang_list">
                <div className="iconself">
                  <img src={imgurl + '/aqhg1.png'} alt="" />
                </div>
                <div className="text_self">4v1专属团队服务</div>
              </div>
              <div className="hengtiaoxiafang_list">
                <div className="iconself">
                  <img src={imgurl + '/aqhg2.png'} alt="" />
                </div>
                <div className="text_self">7*24小时应急响应</div>
              </div>
              <div className="hengtiaoxiafang_list">
                <div className="iconself">
                  <img src={imgurl + '/aqhg3.png'} alt="" />
                </div>
                <div className="text_self">服务中断赔偿机制</div>
              </div>
              <div className="hengtiaoxiafang_list">
                <div className="iconself">
                  <img src={imgurl + '/aqhg4.png'} alt="" />
                </div>
                <div className="text_self">全员联动追踪落地</div>
              </div>
            </div>
            {/* <img src={imgurl+'/botlas82.png'}  /> */}
          </div>
          <div className="right">
            <div className="right_box">
              {database.map(ele => {
                return (
                  <div className="list">
                    <img src={imgurl + ele.img} />
                    <p>{ele.title}</p>
                  </div>
                );
              })}
            </div>
            {/* <img src={imgurl+'/botlsjka2.png'} alt="" /> */}
          </div>
        </div>
      </Pane>
    </MainWrap>
  );
};
