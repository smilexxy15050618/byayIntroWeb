import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';

const Wrap = styled.div`
  display: none;
  ${media.phone`
        display: block;
        .system-wrap {
            background: linear-gradient(#F8F9FB, #FFFFFF);
            padding-top: 60px;
            padding-bottom: 50px;
            .system-title {
                margin-bottom: 43px;
                text-align: center;
                font-weight:400;
                color:rgba(13,25,36,1);
                font-size: 36px;
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
            }
            .system-item-wrap {
                margin-top: 50px;
                &:last-child {
                    .system-img {
                        box-shadow: none;
                    }
                }
                .system-btn {
                    width:200px;
                    height:40px;
                    background:rgba(49,83,212,1);
                    margin: 0 auto;
                    font-weight:500;
                    color:rgba(255,255,255,1);
                    font-size: 16px;
                    align-items: center;
                    justify-content: center;
                    display: flex;
                    margin-bottom: 30px;
                }
                .system-img {
                    width: 303px;
                    margin: 0 auto;
                    display: block;
                    box-shadow: rgba(49, 83, 212, .1) 0 10px 30px;
                }
            }
        }
    `}
`;

const System = props => (
  <Wrap>
    <div className="system-wrap">
      <div className="system-title">{props.title}</div>
      {props.system.map(item => (
        <div className="system-item-wrap">
          <div className="system-btn">{item.btn}</div>
          <img src={item.img} alt="" className="system-img" />
        </div>
      ))}
    </div>
  </Wrap>
);

export default System;
