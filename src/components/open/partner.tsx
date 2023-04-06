import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';

const Wrap = styled.div`
  .partner-wrap {
    padding: 100px 0;
    background-color: rgba(248, 249, 251, 1);
    ${media.phone`
            padding: 60px 0;
        `};
    .part-title {
      font-weight: 500;
      color: rgba(13, 25, 36, 1);
      font-size: 36px;
      text-align: center;
      ${media.phone`
                font-weight: 400;
                margin-bottom: 23px;
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
            `};
    }
    .part-item-wrap {
      display: flex;
      justify-content: center;
      ${media.phone`
                width: 267px;
            `}
      width: 1110px;
      flex-wrap: wrap;
      margin: 0 auto;
      margin-top: 35px;
      .part-item {
        width: 255px;
        height: 100px;
        ${media.phone`
                    width:123px;
                    height:50px;
                    margin-right: 15px;
                    margin-top: 7px;
                    margin-bottom: 8px;
                    &:nth-child(2n) {
                        margin-right: 0;
                    }
                `}
        background:rgba(255,255,255,1);
        margin-right: 30px;
        margin-top: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }
  }
`;

const Partner = props => (
  <Wrap>
    <div className="partner-wrap">
      <div className="part-title">{props.title}</div>
      <div className="part-item-wrap">
        {props.partner.map(item => (
          <img className="part-item" src={item} />
        ))}
      </div>
    </div>
  </Wrap>
);

export default Partner;
