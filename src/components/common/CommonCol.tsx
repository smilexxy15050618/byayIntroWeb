import * as React from 'react';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import { media } from '../../constants/style';

const Wrap = styled.div<{ bgc: string; mr?: string }>`
    background: ${props =>
      props.bgc ? props.bgc : 'linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(248,249,251,0.6) 100%)'};
    background-size: cover;
    ${media.phone`
      background-image: none; 
    `}
     .ai-open-wrap {
        padding-bottom: 100px;
        padding-top: 100px;
        ${media.phone`
            width: 100vw;
            padding-bottom: 0px;
            padding-top: 0px;
        `};
        .ai-title {
            text-align: center;
            font-weight:500;
            color:rgba(13,25,36,1);
            font-size:36px;
            margin-bottom: 80px;
            /* padding: 0 10px; */
            ${media.phone`
                padding-top: 60px;
                font-weight:400;
                margin-bottom: 0;
                font-size: 23px;
            `};

        }
        .ai-ability {
            display: flex;
            justify-content: center;
            ${media.phone`
                flex-wrap: wrap;
                align-items: center;
                margin-bottom: 0px;
                margin-top: 100px;
            `};
            .ability-item-wrap {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 242px;
                margin-right: ${props => (props.mr ? props.mr : '60px')};
                padding: 0 10px;
                &:last-child {
                    margin-right: 0;
                }
                ${media.phone`
                    width: 100%;
                    padding: 0;
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
                    font-weight:500;
                    color:rgba(13,25,36,1);
                    font-size: 18px;
                    ${media.phone`
                        font-size:17px;
                    `};
                }
                .desc {
                    font-size: 14px;
                    font-weight:300;
                    color:rgba(102,102,102,1);
                    margin-top: 10px;
                    width: 242px;
                    text-align: center;
                    ${media.phone`
                        margin-top: 12px;
                        font-size:14px;
                        letter-spacing:1px;
                        min-width: 0px;
                        width: auto;
                        font-weight:300;
                    `};
                }
                ${media.phone`
                    margin-right: 0;
                    margin-bottom: 30px;
                `};
            }
        }
`;

const CommonCol = props => (
  <Wrap bgc={props.bgc} mr={props.mr}>
    <div className="ai-open-wrap">
      <div className="ai-title">
        <span>{props.title1}</span>
        <Hidden sm xs>
          {props.title2 && props.hasQ && '，'}
        </Hidden>
        <Visible sm xs>
          <br />
        </Visible>
        {props.title2 && <span>{props.title2}</span>}
      </div>
      <div className="ai-ability">
        {props.ability.map(item => (
          <div className="ability-item-wrap">
            <img src={item.logo} alt="" className="icon" />
            {item.title && <div className="title">{item.title}</div>}
            <div className="desc">{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  </Wrap>
);

export default CommonCol;
