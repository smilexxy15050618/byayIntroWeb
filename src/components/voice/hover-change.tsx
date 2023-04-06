import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { media } from '../../constants/style';

const Wrap = styled.div`
  ${media.phone`
        display: none;
    `}
  .solution-wrap {
    width: 100%;
    height: 754px;
    background: rgba(248, 249, 251, 1);
    padding-top: 100px;
    .title {
      font-size: 36px;
      font-weight: 500;
      color: rgba(13, 25, 36, 1);
      text-align: center;
      margin-bottom: 80px;
    }
    .swiper-wrap {
      display: flex;
      width: 1190px;
      margin: 0 auto;
      .left-nav {
        .left-item {
          width: 240px;
          height: 160px;
          background: rgba(237, 240, 245, 1);
          font-size: 22px;
          font-weight: 500;
          color: rgba(13, 25, 36, 1);
          margin-bottom: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease-in-out;
          cursor: default;
        }
        .active {
          height: 194px;
          color: #fff;
          background: rgba(49, 83, 212, 1);
          box-shadow: 5px 10px 30px 0px rgba(49, 83, 212, 0.1);
        }
      }
      .hover-right-desc {
        width: 920px;
        height: 384px;
        margin-left: 30px;
        background-color: #fff;
        overflow: hidden;
        .right-item {
          position: relative;
          padding-left: 60px;
          padding-top: 60px;
          height: 384px;
          .t1 {
            font-size: 22px;
            font-weight: 400;
            color: rgba(13, 25, 36, 1);
            margin-bottom: 10px;
          }
          .label-wrap {
            display: flex;
            width: 246px;
            flex-wrap: wrap;
            margin-top: 90px;
            .label {
              width: 85px;
              display: flex;
              align-items: center;
              margin-right: 69px;
              margin-bottom: 30px;
              justify-content: center;
              &:nth-child(2n) {
                margin-right: 0;
              }
              .icon {
                width: 8px;
                height: 8px;
                margin-right: 9px;
                margin-bottom: 0;
              }
            }
            .mr {
              margin-right: 0;
            }
          }
          .right-bg {
            position: absolute;
            width: 440px;
            margin-bottom: 0;
            right: 0;
            top: 0;
          }
        }
      }
    }
  }
`;
const HoverChange = props => {
  const [active, setActive] = useState(1);

  const changeActiveSolution = index => {
    const scroll = document.querySelector('.hover-right-desc');
    setActive(index);
    scroll.scrollTop = (index - 1) * 384;
  };
  return (
    <Wrap>
      <div className="hover-change-wrap">
        <div className="solution-wrap">
          <div className="title">{props.title}</div>
          <div className="swiper-wrap">
            <div className="left-nav">
              {props.leftItem.map((item, index) => (
                <div
                  className={`left-item ${active === index + 1 && 'active'}`}
                  onMouseEnter={() => changeActiveSolution(index + 1)}>
                  {item}
                </div>
              ))}
            </div>
            <div className="hover-right-desc">
              {props.rightItem.map(item => (
                <div className="right-item">
                  <div className="t1">{item.ftitle}</div>
                  <div className="t1">{item.stitle}</div>
                  <div className="label-wrap">
                    {item.label.map(label => (
                      <div className="label">
                        <img
                          src="https://cdn.byai.com/node_front/1571810432422/Rectangle%2010%402x.png"
                          alt=""
                          className="icon"
                        />
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>
                  <img src={item.img} alt="" className="right-bg" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Wrap>
  );
};

export default HoverChange;
