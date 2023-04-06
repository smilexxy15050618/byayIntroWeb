import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';

const Wrap = styled.div`
  background-color: #f8f9fb;
  background-image: url(//cdn.byai.com/static/official-website/solution/bg2.png);
  ${media.phone`
     background-image:url();
    `}
  background-repeat: no-repeat;
  background-size: 100%;
  .method-wrap {
    padding-top: 100px;
    width: 1170px;
    margin: 0 auto;
    ${media.phone`
            padding-top: 50px;
            width: 100vw;
            padding-bottom: 50px;
        `}
    .title {
      text-align: center;
      font-weight: 500;
      color: rgba(13, 25, 36, 1);
      font-size: 36px;
      margin-bottom: 80px;
      ${media.phone`
                font-weight:400;
                margin-bottom: 43px;
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
    .method-desc {
      display: flex;
      ${media.phone`
                flex-direction: column;
                align-items: center;
            `}
      .left, .right {
        width: 360px;
        ${media.phone`
                    width: 250px;
                    height: 366px;
                `}
        .item-wrap {
          display: flex;
          margin-bottom: 135px;
          &:last-child {
            margin-bottom: 100px;
          }
          ${media.phone`
                        margin-bottom: 50px;
                        flex-direction: column;
                    `}
          .icon {
            min-width: 34px;
            margin-right: 23px;
            height: 34px;
            ${media.phone`
                            min-width:40px;
                            margin-right: 0px;
                            height: 40px;
                            margin-bottom: 20px;
                        `}
          }
          .right-desc {
            .right-title {
              font-size: 22px;
              font-weight: 500;
              color: rgba(13, 25, 36, 1);
              margin-bottom: 10px;
              ${media.phone`
                                text-align: center;
                                font-size:17px;
                                margin-bottom: 12px;
                            `}
            }
            .info {
              font-weight: 300;
              color: rgba(102, 102, 102, 1);
              font-size: 16px;
              ${media.phone`
                                text-align: center;
                                font-size:12px;
                                font-weight:400;
                            `}
            }
          }
        }
      }
      .right {
        ${media.phone`
                    height: 331px;
                `}
      }
      .mid {
        width: 448px;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        ${media.phone`
                    display: none;
                `}
        .mid-bg {
          width: 230px;
          height: 230px;
          border-radius: 50%;
          box-shadow: rgba(49, 83, 212, 0.1) 0 10px 30px;
        }
      }
    }
  }
`;

const Method = props => (
  <Wrap>
    <div className="method-wrap">
      <div className="title">{props.title}</div>
      <div className="method-desc">
        <div className="left">
          {props.descLeft.map(item => (
            <div className="item-wrap">
              <img src={item.icon} className="icon" />
              <div className="right-desc">
                <div className="right-title">{item.title}</div>
                <div className="info">{item.info}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mid">
          <img src={props.img} alt="" className="mid-bg" />
        </div>
        <div className="right">
          {props.descRight.map(item => (
            <div className="item-wrap">
              <img src={item.icon} className="icon" />
              <div className="right-desc">
                <div className="right-title">{item.title}</div>
                <div className="info">{item.info}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Wrap>
);

export default Method;
