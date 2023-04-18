import React, { FC, useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../constants/style';

export interface ICarousel {
  dataList: {
    title: string;
    icon: string;
    pcSrc: string;
    mobileSrc: string;
    descContent: {
      title: string;
      textList: string[];
    }[];
  }[];
  interval?: number;
  style?: React.CSSProperties;
}

const CarouselWrapper = styled.div<{ interval: number }>`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;

  ${media.phone`
    background: #F8F9FB;
    padding-bottom: 50px;
  `}

  .carousel-header {
    width: 78vw;
    margin-bottom: calc(4.6vw - 30px);

    ul {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 0;

      li {
        width: 11vw;
        height: 4.1vw;
        list-style: none;
        border-radius: 4px;
        position: relative;
        margin: 0 2.8vw;
        font-size: 1.8vw;
        color: #646a73;
        cursor: pointer;

        div {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;

          .icon {
            color: #646a73;
            display: inline-block;
            margin-right: 3px;
            font-size: 1.8vw;
            width: 1.8vw;
            height: 1.8vw;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        i.line {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 5px;
          background: #2f82f8;
          display: inline-block;
          /* opacity: 0; */

          &.active {
            width: 100%;
            opacity: 1;
            transition: ${props => (props.interval ? `width ${props.interval}ms linear` : 'width 8s linear')};
          }
        }

        &.active {
          background: #e6f0ff;
          color: #2f82f8;
          .icon {
            color: #2f82f8;
          }
        }
      }
    }
  }

  .carousel-body {
    width: 100%;

    .carousel-item {
      padding: 30px 0 60px;
    }

    .carousel-card {
      width: 78vw;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 0px 30px 0px rgba(47, 130, 248, 0.15);

      img {
        width: 67%;
        height: 30vw;
        margin: 0;
      }

      .carousel-desc {
        width: 33%;
        padding-left: 2vw;
        padding-right: 3.3vw;
        margin: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;

        li {
          list-style: none;

          p {
            margin: 0;
          }

          .desc-title {
            color: #0d1924;
            font-size: 1.18vw;
            line-height: 1.73vw;
          }

          .desc-text {
            color: #666;
            font-size: 0.97vw;
            line-height: 1.73vw;
          }
        }
      }
    }
  }

  .industry-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > h3 {
      margin: 40px 0;
    }
    .industry-content {
      box-shadow: 0px 0px 30px 0px rgba(47, 130, 248, 0.15);
      width: 85.3%;
      img {
        width: 100%;
      }
      .industry-desc {
        width: 100%;
        height: 51.8vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .desc-content {
          width: 87.5%;
          margin: 8px;

          .desc-title {
            font-size: 12px;
            font-weight: 600;
          }
          .desc-text {
            font-size: 9px;
            p {
              margin: 0;
              line-height: 15px;
            }
          }
        }
      }
    }
  }

  @media screen and (min-width: 1440px) {
    .carousel-header {
      width: 1120px;
      margin-bottom: 66px;

      ul {
        li {
          width: 160px;
          height: 60px;
          margin: 0 40px;
          font-size: 26px;

          div {
            .icon {
              font-size: 26px;
              width: 26px;
              height: 26px;
            }
          }
        }
      }
    }

    .carousel-body {
      .carousel-card {
        width: 1123px;

        img {
          width: 67%;
          height: 434px;
          margin: 0;
        }

        .carousel-desc {
          width: 33%;
          padding-left: 28px;
          padding-right: 48px;

          li {
            .desc-title {
              font-size: 17px;
              line-height: 25px;
            }

            .desc-text {
              font-size: 14px;
              line-height: 25px;
            }
          }
        }
      }
    }
  }
`;

export const IndustryCarousel: FC<ICarousel> = ({ dataList, interval, style }) => {
  const [activeKey, setActiveKey] = useState(-1);
  const carouselInterval = interval || 8000;
  let timer = null;

  useEffect(() => {
    setTimeout(() => {
      setActiveKey(0);
    }, 50);
  }, []);

  useEffect(() => {
    timer = setTimeout(() => {
      setActiveKey(activeKey + 1 < dataList.length ? activeKey + 1 : 0);
    }, carouselInterval);
  }, [activeKey]);

  const switchCarousel = (index: number) => {
    if (index !== activeKey) {
      clearTimeout(timer);
      setActiveKey(index);
    }
  };

  return (
    <CarouselWrapper style={style} interval={carouselInterval}>
      <Visible md lg xl xxl xxxl>
        <div className="carousel-header">
          <ul>
            {dataList.map((data, index) => (
              <li key={index} className={activeKey === index && 'active'} onClick={() => switchCarousel(index)}>
                <div>
                  {/* <span className="icon">{data.icon}</span> */}
                  <i className={`iconfont ${data.icon} icon`} />
                  {data.title}
                </div>
                <i className={`line ${activeKey === index && 'active'}`} />
              </li>
            ))}
          </ul>
        </div>
        <div className="carousel-body">
          <Carousel style={{ width: '100%' }} indicators={false} controls={false} activeIndex={activeKey}>
            {dataList.map((data,i) => (
              <CarouselItem key={i}>
                <div className="carousel-card">
                  <img src={data.pcSrc} title={data.title} />
                  <ul className="carousel-desc">
                    {data.descContent.map((desc,s) => (
                      <li key={s}>
                        <p className="desc-title">{desc.title}</p>
                        {desc.textList.map((text,is) => (
                          <p className="desc-text" key={is}>{text}</p>
                        ))}
                      </li>
                    ))}
                  </ul>
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </Visible>
      <Visible sm xs>
        {dataList.map((item,i) => (
          <div key={i} className="industry-card">
            <h3>{item.title}</h3>
            <div className="industry-content">
              <img src={item.mobileSrc} alt={item.title} />
              <div className="industry-desc">
                {item.descContent.map((desc,is) => (
                  <div key={is} className="desc-content">
                    <div className="desc-title">{desc.title}</div>
                    <div className="desc-text">
                      {desc.textList.map((text,l) => (
                        <p  key={l}>{text}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Visible>
    </CarouselWrapper>
  );
};
