import * as React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
  &:last-child {
    .right-col {
      padding-top: 0px !important;
      transform: translateY(-20px);
      #col-img {
        height: 500px;
        margin-left: 43px;
        width: 500px;
        box-shadow: none;
      }
    }
  }
  .two-col-wrap {
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 43px 0;
    .left-col {
      width: 480px;
      margin-left: 40px;
      margin-right: 100px;
      .title {
        font-weight: 600;
        color: rgba(13, 25, 36, 1);
        font-size: 22px;
        margin-bottom: 24px;
      }
      .desc {
        font-weight: 300;
        color: rgba(102, 102, 102, 1);
        font-size: 16px;
        margin-bottom: 40px;
        min-height: 90px;
        line-height: 30px;
      }
      .btn {
        width: 184px;
        height: 50px;
        background: rgba(49, 83, 212, 1);
        border-radius: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        &:hover {
          background-color: #3d5afe;
        }
      }
    }
    .right-col {
      width: 606px;
      height: 455px;
      padding-top: 40px;
      img {
        width: 606px;
        height: 341px;
        box-shadow: rgba(49, 83, 212, 0.1) 0 10px 30px;
      }
    }
  }
`;
const TwoCol = props => (
  <Wrap>
    <div className="two-col-wrap">
      <div className="left-col">
        <div className="title">{props.title}</div>
        <div className="desc">{props.desc}</div>
        <div className="btn" onClick={() => props.onBtnClick()}>
          {props.btn}
        </div>
      </div>
      <div className="right-col">
        <img src={props.img} alt="" id="col-img" />
      </div>
    </div>
  </Wrap>
);

export default TwoCol;
