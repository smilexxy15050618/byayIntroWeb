import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';

const Wrap = styled.div`
  display: none;
  ${media.phone`
        display: block;
        .env-wrap {
            padding-top: 60px;
            padding-bottom: 40px;
            background:rgba(248,249,251,1);
            .env-title {
                text-align: center;
                font-weight:400;
                color:rgba(13,25,36,1);
                font-size:36px;
                margin-bottom: 43px;
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
            .env-item-wrap {
                margin-bottom: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;
                &:last-child {
                    margin-bottom: 0;
                }
                .env-item-title {
                    font-weight:600;
                    color:rgba(13,25,36,1);
                    font-size:20px;
                    text-align: center;
                }
                .env-item-img {
                    width: 300px;
                    margin-top: 20px;
                    margin-bottom: 0px;
                }
            }
        }
    `}
`;

const Env = props => (
  <Wrap>
    <div className="env-wrap">
      <div className="env-title">{props.title}</div>
      {props.envItem.map(item => (
        <div className="env-item-wrap">
          <div className="env-item-title">{item.title1}</div>
          <div className="env-item-title">{item.title2}</div>
          <img src={item.img} alt="" className="env-item-img" />
        </div>
      ))}
    </div>
  </Wrap>
);

export default Env;
