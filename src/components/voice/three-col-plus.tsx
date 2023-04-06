import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';
import Link from 'next/link';

const Wrap = styled.div`
  .three-col-plus-wrap {
    padding: 100px 0;
    ${media.phone`
            padding-top: 60px;
            padding-bottom: 40px;
        `}
    .col-title {
      font-size: 36px;
      font-weight: 500;
      color: rgba(13, 25, 36, 1);
      margin-bottom: 80px;
      text-align: center;
      ${media.phone`
                font-weight:400;
                margin-bottom: 40px;
                &::after {
                    content: '';
                    width:40px;
                    display:block;
                    height:2px;
                    background:rgba(49,83,212,1);
                    border-radius:3px;
                    margin: 0 auto;
                    margin-top: 5px;
                }
            `}
    }
    .col-item-wrap {
      display: flex;
      justify-content: center;
      ${media.phone`
                flex-direction: column;
                align-items: center;
            `}
      .col-item {
        background: rgba(248, 249, 251, 1);
        margin-right: 31px;
        width: 376px;
        cursor: pointer;
        ${media.phone`
                    width: 325px;
                    margin-right: 0px;
                    margin-bottom: 30px;
                    background:rgba(255,255,255,1);
                    box-shadow: rgba(49, 83, 212, .1) 0 10px 30px;
                `}
        &:last-child {
          margin-right: 0;
          .learn-more {
            margin-top: 56px;
          }
        }
        .img-wrap {
          overflow: hidden;
          .img {
            width: 100%;
            height: 212px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            transition: all 0.3s ease-in-out;
            &:hover {
              transform: scale(1.1);
            }
          }
        }
        .title {
          margin-top: 40px;
          margin-left: 40px;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          font-size: 32px;
          ${media.phone`
                        font-size: 24px;
                        color:rgba(13,25,36,1);
                        margin-top: 30px;
                        margin-left: 25px;
                    `}
        }
        .desc {
          margin-top: 20px;
          margin-left: 40px;
          padding-right: 40px;
          font-weight: 300;
          color: rgba(102, 102, 102, 1);
          font-size: 14px;
          ${media.phone`
                        font-size: 13px;
                        margin: 0;
                        padding: 0;
                        box-sizing: content-box;
                        padding: 15px 25px 30px 25px;
                        font-weight:400;
                    `}
        }
        .learn-more {
          margin-top: 40px;
          margin-left: 40px;
          margin-bottom: 40px;
          display: flex;
          align-items: center;
          cursor: pointer;
          span {
            margin-left: 20px;
          }
          ${media.phone`
                        display: none;
                    `}
          .iconfont {
            font-size: 17px;
            margin-left: 10px;
            transition: all 0.3s ease-in-out;
          }
          &:hover {
            color: #3153d4;
            .iconfont {
              transform: translateX(5px);
            }
          }
        }
      }
    }
  }
`;

const openNewPage = link => {
  if (!link.includes('http')) {
    location = link;
  }
  window.open(link);
};
const ThreeColPlus = props => (
  <Wrap>
    <div className="three-col-plus-wrap">
      <div className="col-title">{props.title}</div>
      <div className="col-item-wrap">
        {props.colItem.map(item => (
          <div className="col-item" onClick={() => openNewPage(item.link)}>
            <div className="img-wrap">
              <div className="img" style={{ backgroundImage: `url(${item.img})` }}></div>
            </div>
            <div className="title">{item.title}</div>
            <div className="desc">{item.desc}</div>
            <div className="learn-more" onClick={() => window.open(item.link)}>
              了解更多<i className="iconfont iconchakangengduojiantou"></i>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Wrap>
);

export default ThreeColPlus;
