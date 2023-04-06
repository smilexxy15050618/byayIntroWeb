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
      font-weight: 500;
      color: rgba(13, 25, 36, 1);
      font-size: 36px;
      text-align: center;
      letter-spacing: 10px;
      ${media.phone`
                font-weight: 400;
                margin-bottom: 23px;
                font-weight:300;
                font-size:23px;
                letter-spacing:0px;
            `};
    }
    .btn {
      width: 190px;
      height: 50px;
      background: rgba(49, 83, 212, 1);
      border-radius: 25px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      margin-top: 30px;
      cursor: pointer;
      ${media.phone`
                width:200px;
                height:40px;
                font-size:14px;
                border-radius:20px;
                margin-top: 19px;
            `}
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: #3d5afe;
      }
    }
  }
`;

const VoiceFooter = props => (
  <Wrap>
    <div className="voice-footer-wrap" style={{ backgroundImage: `url(${props.img})` }}>
      <div className="footer-title">{props.title}</div>
      <div className="btn" onClick={() => props.onBtnClick()}>
        {props.btn}
      </div>
    </div>
  </Wrap>
);

export default VoiceFooter;
