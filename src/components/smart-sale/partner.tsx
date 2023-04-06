import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';

const Wrap = styled.div`
  .partner-wrap {
    padding: 100px 0;
    background-color: #ffffff;
    ${media.phone`
            padding: 60px 0;
        `};
    .part-title {
      font-size: 36px;
      text-align: center;
      font-weight: 600;
      ${media.phone`
                margin-bottom: 23px;
                /* padding: 0px 32px; */
                font-size: 26px;
                /* &::after {
                    content: '';
                    width:40px;
                    display:block;
                    height:2px;
                    background:rgba(49,83,212,1);
                    border-radius:3px;
                    margin: 0 auto;
                    margin-top: 5px;
                } */
            `};
    }
    .part-item-wrap {
      display: flex;
      justify-content: center;
      ${media.phone`
                width: 340px;
            `}
      width: 1192px;
      flex-wrap: wrap;
      margin: 0 auto;
      margin-top: 35px;
      .part-item {
        width: 200px;
        background: rgba(255, 255, 255, 1);
        height: 80px;
        margin-right: 47px;
        margin-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:nth-child(5n) {
          margin-right: 0;
        }
        ${media.phone`
                    width:100px;
                    height:40px;
                    margin-right: 20px;
                    margin-top: 7px;
                    margin-bottom: 8px;
                    &:nth-child(3n) {
                        margin-right: 0;
                    }
                    &:nth-child(5n) {
                        margin-right: 20px;
                    }
                    &:nth-child(15n) {
                        margin-right: 0;
                    }
                `}
      }
      .part-item-mobile {
        display: none;
        ${media.phone`
                    display: flex;
                `}
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
        {props.mobileExtraPartner.map(item => (
          <img className="part-item part-item-mobile" src={item} />
        ))}
      </div>
    </div>
  </Wrap>
);

export default Partner;
