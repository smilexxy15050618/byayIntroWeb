import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';

const Wrap = styled.div`
  .partner-wrap {
    padding: 100px 0 120px 0;
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
                font-weight: 400;
                flex-direction: column;
                align-items: center;
            `};
      .part-item {
        width: 255px;
        height: 100px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 5px 10px 30px 0px rgba(49, 83, 212, 0.1);
        margin-right: 70px;
        margin-top: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          margin-bottom: 0;
        }
        &:last-child {
          margin-right: 0;
        }
        ${media.phone`
                    margin-right: 0px;
                    margin-top: 23px;
                    width: 200px;
                    height: 78px;
            `};
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
          <div className="part-item">
            <img src={item} alt="" />
          </div>
        ))}
      </div>
    </div>
  </Wrap>
);

export default Partner;
