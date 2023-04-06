import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';

const Wrap = styled.div<{ bgc: string }>`
  background: ${props =>
    props.bgc ? props.bgc : 'linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(248,249,251,0.6) 100%)'};
  .ai-open-wrap {
    margin: 0 auto;
    width: 1120px;
    padding-bottom: 100px;
    ${media.phone`
            width: 100vw;
            padding-bottom: 0px;
        `};
    .ai-title {
      text-align: center;
      font-weight: 500;
      color: rgba(13, 25, 36, 1);
      font-size: 36px;
      margin-top: 100px;
      margin-bottom: 80px;
      ${media.phone`
                margin-top: 60px;
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
            `};
    }
    .ai-ability {
      display: flex;
      margin: 0 auto;
      ${media.phone`
                flex-direction: column;
                align-items: center;
                margin-bottom: 0px;
            `};
      .ability-item-wrap {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 320px;
        margin-right: 80px;
        padding: 0 10px;
        &:last-child {
          margin-right: 0;
        }
        ${media.phone`
                    width: 100%;
                    padding: 0 55px;
                    box-sizing: border-box;
                `}
        .icon {
          width: 80px;
          height: 80px;
          margin-bottom: 40px;
          ${media.phone`
                        width: 40px;
                        height: 40px;
                        margin-bottom: 20px;
                    `};
        }
        .title {
          font-weight: 500;
          color: rgba(13, 25, 36, 1);
          font-size: 22px;
          ${media.phone`
                        font-size:17px;
                    `};
        }
        .desc {
          font-size: 18px;
          font-weight: 300;
          color: rgba(102, 102, 102, 1);
          margin-top: 10px;
          min-width: 320px;
          font-size: 16px;
          ${media.phone`
                        margin-top: 12px;
                        font-size:12px;
                        letter-spacing:1px;
                        min-width: 0px;
                        font-weight:400;
                    `};
        }
        ${media.phone`
                    margin-right: 0;
                    margin-bottom: 50px;
                `};
      }
    }
  }
`;

const ThreeCol = props => (
  <Wrap bgc={props.bgc}>
    <div className="ai-open-wrap">
      <div className="ai-title">{props.title}</div>
      <div className="ai-ability">
        {props.ability.map(item => (
          <div className="ability-item-wrap">
            <img src={item.logo} alt="" className="icon" />
            <div className="title">{item.title}</div>
            <div className="desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </Wrap>
);

export default ThreeCol;
