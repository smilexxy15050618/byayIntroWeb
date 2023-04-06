import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';

const Wrap = styled.div`
  .voice-footer-wrap {
    padding: 80px 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    ${media.phone`
            padding-top: 50px;
            padding-bottom: 45px;
        `};
    .footer-title {
      font-weight: 400;
      color: rgba(13, 25, 36, 1);
      font-size: 36px;
      text-align: center;
      letter-spacing: 0px;
      ${media.phone`
                font-weight: 400;
                margin-bottom: 23px;
                font-weight:300;
                font-size:23px;
                letter-spacing:0px;
                display: none;
                text-align: center;
            `};
    }
    .footer-t1 {
      display: none;
      ${media.phone`
                display: block;
                font-weight: 400;
                font-size: 22px;
                display: flex;
                padding: 0 10%;
                text-align: center;
            `}
    }
    .btn-wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      ${media.phone`
                flex-direction: column;
            `}
      .btn {
        width: 190px;
        height: 50px;
        background: rgba(49, 83, 212, 1);
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        margin-top: 30px;
        cursor: pointer;
        ${media.phone`
                    width:311px;
                    height:40px;
                    font-size:14px;
                    border-radius:20px;
                    margin-top: 15px;
                `}
        &:hover {
          background-color: #3d5afe;
        }
      }
      .input-num {
        margin-top: 30px;
        width: 264px;
        height: 50px;
        background: rgba(255, 255, 255, 1);
        border-radius: 25px;
        border: 1px solid rgba(49, 83, 212, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 16px;
        cursor: pointer;
        ${media.phone`
                    width:311px;
                    height:40px;
                    background:rgba(255,255,255,1);
                    border-radius:36px;
                    border:1px solid rgba(49,83,212,1);
                    margin-top: 23px;
                    margin-right: 0;
                `}
      }
    }
  }
`;

const VoiceFooter = props => (
  <Wrap>
    <div className="voice-footer-wrap" style={{ backgroundImage: `url(${props.img})` }}>
      <div className="footer-title">{props.title}</div>
      <div className="footer-t1">{props.mTitle1}</div>
      <div className="footer-t1">{props.mTitle2}</div>
      <div className="btn-wrap">
        <div className="input-num" onClick={() => props.onBtnClick()}>
          请输入手机号
        </div>
        <div className="btn" onClick={() => props.onBtnClick()}>
          {props.btn}
        </div>
      </div>
    </div>
  </Wrap>
);

export default VoiceFooter;
