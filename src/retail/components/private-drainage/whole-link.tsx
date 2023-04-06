import { FC } from 'react';
import CountUp from 'react-countup';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { calWidthAndHeight, retailUrl } from '../../../lib/utils';

const WholeLinkWrapper = styled.div`
  position: relative;
  height: ${calWidthAndHeight(1246)};
  background: #ffecde;
  font-family: PingFangSC-Medium, PingFang SC;
  .title {
    font-size: ${calWidthAndHeight(40)};
    font-weight: 500;
    color: #2b2b2b;
    line-height: ${calWidthAndHeight(68)};
    text-align: center;
    padding: ${calWidthAndHeight(100)} 0 ${calWidthAndHeight(16)};
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .content-img {
      width: ${calWidthAndHeight(1200)};
      height: ${calWidthAndHeight(474)};
      background-image: url('https://cdn.byai.com/by-fe-cdn/static/pmp/e5307dea-2772-44e6-80e1-76db7651614b.png');
      background-repeat: round;
      position: relative;
    }
    .section-wrapper {
      width: ${calWidthAndHeight(1200)};
      height: ${calWidthAndHeight(200)};
      background: #fef3eb;
      box-shadow: 0px 14px 55px 9px rgba(246, 102, 0, 0.08);
      border-radius: ${calWidthAndHeight(100)};
      margin: ${calWidthAndHeight(24)} 0 ${calWidthAndHeight(54)};
      display: flex;
      justify-content: center;
      align-items: center;
      .section {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .section-data {
        width: ${calWidthAndHeight(344)};
        padding-left: ${calWidthAndHeight(110)};
      }
      .section-underline {
        width: ${calWidthAndHeight(24)};
        height: ${calWidthAndHeight(4)};
        background: #00c8bd;
        border-radius: ${calWidthAndHeight(7)};
        margin: ${calWidthAndHeight(8)} 0 ${calWidthAndHeight(18)};
      }
      .section-title {
        height: ${calWidthAndHeight(32)};
        font-size: ${calWidthAndHeight(20)};
        font-weight: 500;
        color: #2b2b2b;
        line-height: ${calWidthAndHeight(32)};
      }
      .section-number {
        height: ${calWidthAndHeight(32)};
        font-size: ${calWidthAndHeight(32)};
        font-weight: 500;
        color: #f66600;
        line-height: ${calWidthAndHeight(32)};
      }
      .section-desc {
        height: ${calWidthAndHeight(32)};
        font-size: ${calWidthAndHeight(16)};
        font-weight: 400;
        color: #2b2b2b;
        line-height: ${calWidthAndHeight(32)};
      }
      .section-divider {
        width: ${calWidthAndHeight(1)};
        height: ${calWidthAndHeight(127)};
        background-color: #ffffff;
      }
    }
    .content-btn {
      display: flex;
      justify-content: center;
      align-items: center
      width: ${calWidthAndHeight(240)};
      height: ${calWidthAndHeight(48)};
      border-radius: ${calWidthAndHeight(4)};
      font-size: ${calWidthAndHeight(16)};
      line-height: ${calWidthAndHeight(24)};
      white-space: nowrap;
      position: relative;
      background: #f66600;
      color: #ffffff;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    display: block;
    height: ${calWidthAndHeight(712)};
    text-align: center;
    padding: ${calWidthAndHeight(40)} 0;

    .title {
      font-size: ${calWidthAndHeight(20)};
      line-height: ${calWidthAndHeight(28)};
      padding: 0;
    }

    .content {
      .content-img {
        width: ${calWidthAndHeight(375)};
        height: ${calWidthAndHeight(370)};
        background-image: url('https://cdn.byai.com/by-fe-cdn/static/pmp/6a805486-02ff-4c69-8db9-6ed76991b4d7.png');
        background-size: 100%;
        position: relative;
      }

      .section-wrapper {
        width: ${calWidthAndHeight(375)};
        height: ${calWidthAndHeight(108)};
        background: #ffecde;
        box-shadow: 0px 14px 55px 9px rgba(246, 102, 0, 0.08);
        border-radius: ${calWidthAndHeight(0)};
        margin: ${calWidthAndHeight(24)} 0 ${calWidthAndHeight(54)};
        text-align: left;
        justify-content: space-evenly;

        .section {
          width: ${calWidthAndHeight(108)};
          padding: ${calWidthAndHeight(12)};
          background: #FFFFFF;
          box-shadow: 0px 2px 10px 0px rgba(246,102,0,0.08);
          border-radius: 4px;
          border: 0px solid #F66600;
        }

        .section-data {
          padding-left: 0;
        }
        
        .section-title {
          height: ${calWidthAndHeight(18)};
          font-size: ${calWidthAndHeight(12)};
          font-weight: 500;
          color: #2b2b2b;
          line-height: ${calWidthAndHeight(18)};
        }

        .section-underline {
          width: ${calWidthAndHeight(16)};
          height: ${calWidthAndHeight(4)};
          background: #00c8bd;
          border-radius: ${calWidthAndHeight(5)};
          margin: ${calWidthAndHeight(8)} 0 ${calWidthAndHeight(14)};
        }

        .section-number {
          height: ${calWidthAndHeight(24)};
          font-size: ${calWidthAndHeight(20)};
          line-height: ${calWidthAndHeight(24)};
        }

        .section-desc {
          height: ${calWidthAndHeight(18)};
          line-height: ${calWidthAndHeight(18)};
          font-size: ${calWidthAndHeight(10)};
          font-family: PingFangSC-Regular, PingFang SC;
        }
      }

      .content-btn {
        width: ${calWidthAndHeight(280)};
        background: #F66600;
      }
    }

  }
`;

const ADVANTAGE_LIST = [
  {
    title: '触达效率更高',
    desc: '接通率',
    start: 60,
    end: 75,
    content: countUpRef => (
      <span>
        <span>
          60-
          <span ref={countUpRef} />
        </span>
        %
      </span>
    ),
  },
  {
    title: '转化率更高',
    desc: '加粉率',
    start: 18,
    end: 35,
    content: countUpRef => (
      <span>
        <span>
          18-
          <span ref={countUpRef} />
        </span>
        %
      </span>
    ),
  },
  {
    title: '营销成本更低',
    desc: '加粉成本',
    start: 2,
    end: 5,
    content: countUpRef => (
      <span>
        <span>
          2-
          <span ref={countUpRef} />
        </span>
        元
      </span>
    ),
  },
];
const WholeLink: FC = () => {
  return (
    <WholeLinkWrapper>
      <Visible md lg xl xxl xxxl>
        <div className="title">一张图看懂AI私域引流全链路</div>
        <div className="content">
          <div className="content-img"></div>
          <div className="section-wrapper">
            {ADVANTAGE_LIST.map((item, index) => (
              <CountUp delay={0} start={item.start} end={item.end} duration={0.5} redraw key={index}>
                {({ countUpRef, start }) => (
                  <div className="section">
                    <div className="section-data" key={item.title} onMouseEnter={start}>
                      <div className="section-title">{item.title}</div>
                      <div className="section-underline"></div>
                      <div className="section-number">{item.content(countUpRef)}</div>
                      <div className="section-desc">{item.desc}</div>
                    </div>
                    {index !== 2 && <div className="section-divider"></div>}
                  </div>
                )}
              </CountUp>
            ))}
          </div>
          <div
            className="content-btn"
            onClick={() => {
              window.open(retailUrl('/form?formType=1'));
            }}>
            获取私域引流方案 ››
          </div>
        </div>
      </Visible>
      <Visible xs sm>
        <div className="title">AI私域引流全链路</div>
        <div className="content">
          <div className="content-img"></div>
          <div className="section-wrapper">
            {ADVANTAGE_LIST.map((item, index) => (
              <CountUp delay={0} start={item.start} end={item.end} duration={0.5} redraw key={index}>
                {({ countUpRef, start }) => (
                  <div className="section">
                    <div className="section-data" key={item.title} onMouseEnter={start}>
                      <div className="section-title">{item.title}</div>
                      <div className="section-underline"></div>
                      <div className="section-number">{item.content(countUpRef)}</div>
                      <div className="section-desc">{item.desc}</div>
                    </div>
                  </div>
                )}
              </CountUp>
            ))}
          </div>
          <div
            className="content-btn"
            onClick={() => {
              window.open(retailUrl('/form?formType=1'));
            }}>
            获取私域引流方案 ››
          </div>
        </div>
      </Visible>
    </WholeLinkWrapper>
  );
};

export default WholeLink;
