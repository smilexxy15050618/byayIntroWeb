import * as React from 'react';
import styled from 'styled-components';
import TwoCol from './two-col';
import { useState } from 'react';
import { media } from '../../constants/style';

const Wrap = styled.div`
  ${media.phone`display: none;`}
  .easy-col-wrap {
    background-color: #f8f9fb;
    padding-top: 100px;
    padding-bottom: 80px;
    .easy-title {
      text-align: center;
      font-size: 36px;
      font-weight: 500;
      color: rgba(13, 25, 36, 1);
    }
    .item-wrap {
      display: flex;
      margin-top: 80px;
      justify-content: center;
      .easy-item {
        width: 132px;
        margin-right: 126px;
        position: relative;
        &:last-child {
          margin-right: 0;
        }
        .bottom-logo {
          content: '';
          background-image: url(https://cdn.byai.com/node_front/1572872120885/%E7%AE%AD%E5%A4%B4.svg);
          background-size: cover;
          width: 48px;
          height: 48px;
          position: absolute;
          top: 220px;
          left: 35px;
        }
        .desc {
          text-align: center;
          font-weight: 500;
          color: rgba(13, 25, 36, 1);
          margin-top: 20px;
        }
        .icon {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: rgba(49, 83, 212, 0.03);
          display: flex;
          align-items: center;
          justify-content: center;
          .icon-img {
            width: 67px;
            height: 67px;
            margin-bottom: 0;
          }
        }
        .item-active {
          background-color: #3153d4;
        }
      }
      .easy-active {
        animation: tranColor 0.3s ease-in-out;
      }
      @keyframes tranColor {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
  }
  .left-scroll {
    height: 541px;
    overflow: hidden;
  }
`;

const EasyCol = props => {
  const [active, setActive] = useState(0);

  const scroll = index => {
    const scrollView = document.querySelector('.left-scroll');
    setActive(index);
    scrollView.scrollTop = index * 541;
  };
  return (
    <Wrap>
      <div className="easy-col-wrap">
        <div className="easy-title">{props.title}</div>
        <div className="item-wrap">
          {props.easyCol.map((easyItem, index) => (
            <div className={`easy-item ${active === index && 'easy-active'}`} onMouseEnter={() => scroll(index)}>
              <div className={`icon ${active === index && 'item-active'}`}>
                <div className={`${active === index && 'bottom-logo'}`}></div>
                <img className="icon-img" src={active === index ? easyItem.hoverIcon : easyItem.icon} />
              </div>
              <div className="desc">{easyItem.desc}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="left-scroll">
        {props.easyCol.map(easyItem => (
          <TwoCol
            title={easyItem.title}
            desc={easyItem.colDesc}
            btn="免费体验"
            img={easyItem.img}
            onBtnClick={props.onBtnClick}
          />
        ))}
      </div>
    </Wrap>
  );
};

export default EasyCol;
