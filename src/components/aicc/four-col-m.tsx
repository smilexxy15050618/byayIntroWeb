import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';

const Wrap = styled.div`
  .manage-intro-wrap {
    padding: 100px 0;
    background-color: #ffffff;
    ${media.phone`
            padding-bottom: 0;
            padding-top: 60px;
        `}
    background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(248,249,251,0.6) 100%);
    .manage-title {
      font-weight: 500;
      color: rgba(13, 25, 36, 1);
      font-size: 36px;
      text-align: center;
      margin-bottom: 80px;
      ${media.phone`
                display: none;
            `}
    }
    .manage-mtitle {
      display: none;
      ${media.phone`
                display: block;
                font-weight:400;
                color:rgba(13,25,36,1);
                font-size: 36px;
                text-align: center;
                margin-bottom: 31px;
            `}
    }
    .manage-group {
      display: flex;
      justify-content: center;
      ${media.phone`
                flex-direction: column;
                align-items: center;
            `}
      .manage-item {
        margin-right: 20px;
        width: 282px;
        &:hover {
          .manage-img {
            img {
              transform: scale(1.2);
            }
          }
          .intro-wrap {
            border-color: rgb(49, 83, 212);
            background: rgb(49, 83, 212);
            .intro-title {
              color: white;
            }
            .intro-desc {
              color: white;
            }
          }
        }
        ${media.phone`
                    margin-right: 0;
                    margin-top: 29px;
                    width: 325px;
                    box-shadow: rgba(49, 83, 212, .1) 0 10px 30px;
                `}
        &:last-child {
          margin-right: 0;
        }
        .manage-img {
          width: 100%;
          height: 159px;
          display: block;
          margin-bottom: 0;
          overflow: hidden;
          img {
            transition: all 0.3s ease-in-out 0s;
          }
          ${media.phone`
                        height: 183px;
                    `}
        }
        .intro-wrap {
          height: 189px;
          background: rgba(248, 249, 251, 1);
          padding: 29px 20px 0px 20px;
          transition: all 0.3s ease-in-out 0s;
          ${media.phone`
                        padding: 30px 25px 0px 25px;
                        background-color: #fff;
                    `}
          .intro-title {
            font-weight: 400;
            color: rgba(0, 0, 0, 1);
            font-size: 22px;
            margin-bottom: 16px;
            transition: all 0.3s ease-in-out 0s;
            ${media.phone`
                            font-size:24px;
                            margin-bottom: 15px;
                        `}
          }
          .intro-desc {
            font-weight: 300;
            color: rgba(102, 102, 102, 1);
            transition: all 0.3s ease-in-out 0s;
            font-size: 14px;
            ${media.phone`
                            font-size:13px;
                            letter-spacing:2px;
                        `}
          }
        }
      }
    }
  }
`;

const FourColM = props => (
  <Wrap>
    <div className="manage-intro-wrap">
      <div className="manage-title">{props.title}</div>
      <div className="manage-mtitle">{props.mtitle}</div>
      <div className="manage-group">
        {props.manage.map(item => (
          <div className="manage-item">
            <div className="manage-img">
              <img src={item.img} alt="" />
            </div>
            <div className="intro-wrap">
              <div className="intro-title">{item.title}</div>
              <div className="intro-desc">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Wrap>
);

export default FourColM;
