import { FC } from 'react';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { calWidthAndHeight, retailUrl } from '../../../lib/utils';

const ByaiAdvantageWrapper = styled.div`
  height: ${calWidthAndHeight(904)};
  background: #ffecde;
  font-family: PingFangSC-Medium, PingFang SC;
  .title {
    font-size: ${calWidthAndHeight(40)};
    font-weight: 500;
    color: #2b2b2b;
    line-height: ${calWidthAndHeight(68)};
    text-align: center;
    padding: ${calWidthAndHeight(100)} 0 ${calWidthAndHeight(24)};
  }
  .content {
    display: flex;
    justify-content: center;
    .left-content {
      padding-right: ${calWidthAndHeight(184)};
      .img {
        width: ${calWidthAndHeight(356)};
        height: ${calWidthAndHeight(164)};
        background-image: url('https://cdn.byai.com/by-fe-cdn/static/pmp/ad0adba4-ec64-4225-82cf-7bd79fc7bc43.png');
        background-repeat: round;
      }
      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calWidthAndHeight(240)};
        height: ${calWidthAndHeight(48)};
        border: 1px solid #f66600;
        font-size: ${calWidthAndHeight(20)};
        margin: ${calWidthAndHeight(48)} ${calWidthAndHeight(18)} ${calWidthAndHeight(120)};
        position: relative;
        background: #ffffff;
        color: #f66600;
        cursor: pointer;
      }
    }
    .right-content {
      padding-top: ${calWidthAndHeight(34)};
      .advantage-list {
        .advantage-group {
          display: flex;
        }
        .advantage-title {
          width: max-content;
          font-size: ${calWidthAndHeight(22)};
          font-weight: 500;
          color: #2b2b2b;
          line-height: ${calWidthAndHeight(28)};
          cursor: pointer;
          border-radius: 7px;
          border-bottom: 6px solid #ffecde;
          :hover {
            border-image-source: linear-gradient(90deg, #00e6e0 0%, rgba(0, 200, 189, 0) 100%);
            border-image-slice: 1;
            border-image-outset: 0;
            border-image-repeat: stretch;
            border-bottom: 6px solid #ffffff;
          }
        }
        .advantage-desc {
          font-size: ${calWidthAndHeight(20)};
          font-weight: 400;
          color: #2b2a35;
          line-height: ${calWidthAndHeight(24)};
          margin-top: ${calWidthAndHeight(6)};
        }
        .advantage-item {
          width: ${calWidthAndHeight(320)};
          height: ${calWidthAndHeight(120)};
        }
        .advantage-item-first {
          border-right: 1px solid rgba(246, 102, 0, 0.2);
          border-bottom: 1px solid rgba(246, 102, 0, 0.2);
          padding: ${calWidthAndHeight(20)} 0 ${calWidthAndHeight(28)};
        }
        .advantage-item-second {
          border-bottom: 1px solid rgba(246, 102, 0, 0.2);
          padding: ${calWidthAndHeight(20)} ${calWidthAndHeight(40)} ${calWidthAndHeight(28)};
        }
        .advantage-item-three {
          border-right: 1px solid rgba(246, 102, 0, 0.2);
          padding: ${calWidthAndHeight(48)} 0 ${calWidthAndHeight(10)};
        }
        .advantage-item-last {
          padding: ${calWidthAndHeight(48)} ${calWidthAndHeight(40)} ${calWidthAndHeight(10)};
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: ${calWidthAndHeight(40)} ${calWidthAndHeight(22)};
    height: ${calWidthAndHeight(570)};

    .title {
      height: ${calWidthAndHeight(56)};
      font-size: ${calWidthAndHeight(20)};
      line-height: ${calWidthAndHeight(28)};
      padding: 0;
      margin: 0 auto ${calWidthAndHeight(24)};
    }

    .content {
      flex-direction: column;

      .left-content {
        padding: 0;

        .img {
          width: ${calWidthAndHeight(234)};
          height: ${calWidthAndHeight(128)};
        }
      }

      .right-content {
        padding-top: ${calWidthAndHeight(26)};

        .advantage-list {
          .advantage-group {
            .advantage-item {
              width: ${calWidthAndHeight(166)};
              height: ${calWidthAndHeight(84)};
            }

            .advantage-title {
              font-size: ${calWidthAndHeight(18)};
              line-height: ${calWidthAndHeight(20)};
              border-radius: ${calWidthAndHeight(5)};
              border-bottom: ${calWidthAndHeight(4)} solid #ffecde;
              :hover {
                border-image-source: linear-gradient(90deg, #00e6e0 0%, rgba(0, 200, 189, 0) 100%);
                border-image-slice: 1;
                border-image-outset: 0;
                border-image-repeat: stretch;
                border-bottom: ${calWidthAndHeight(4)} solid #ffffff;
              }
            }

            .advantage-desc {
              font-size: ${calWidthAndHeight(14)};
              line-height: ${calWidthAndHeight(17)};
              font-family: PingFangSC-Regular, PingFang SC;
            }

            .advantage-item-first {
              padding-top: ${calWidthAndHeight(12)};
            }

            .advantage-item-second {
              padding: ${calWidthAndHeight(12)} ${calWidthAndHeight(24)};
            }

            .advantage-item-three {
              padding-top: ${calWidthAndHeight(32)};
            }

            .advantage-item-last {
              padding: ${calWidthAndHeight(32)} ${calWidthAndHeight(24)};
            }
          }
        }
      }

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: ${calWidthAndHeight(224)};
        height: ${calWidthAndHeight(48)};
        border: 1px solid #f66600;
        font-size: ${calWidthAndHeight(16)};
        border-radius: ${calWidthAndHeight(4)};
        margin: ${calWidthAndHeight(40)} auto;
        position: relative;
        background: #ffffff;
        color: #f66600;
      }
    }
  }
`;

const ByaiAdvantage: FC = () => {
  return (
    <ByaiAdvantageWrapper>
      <Visible md lg xl xxl xxxl>
        <div className="title">为什么头部品牌都开始用AI做老客召回？</div>
        <div className="content">
          <div className="left-content">
            <div className="img"></div>
            <div
              className="btn"
              onClick={() => {
                window.open(retailUrl('/form?formType=1'));
              }}>
              立即开启GMV增长 ››
            </div>
          </div>
          <div className="right-content">
            <div className="advantage-list">
              <div className="advantage-group">
                <div className="advantage-item advantage-item-first">
                  <div className="advantage-title">转化率更高</div>
                  <div className="advantage-desc">下单转化率3%-5%</div>
                </div>
                <div className="advantage-item advantage-item-second">
                  <div className="advantage-title">客单价更高</div>
                  <div className="advantage-desc">提升20%-50%</div>
                </div>
              </div>
              <div className="advantage-group">
                <div className="advantage-item advantage-item-three">
                  <div className="advantage-title">数据利用率更高</div>
                  <div className="advantage-desc">是短信触达的5-10倍</div>
                </div>
                <div className="advantage-item advantage-item-last">
                  <div className="advantage-title">创造更多的GMV</div>
                  <div className="advantage-desc">ROI 8-100</div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </Visible>
      <Visible xs sm>
        <div className="title">
          <div>为什么头部品牌都开始</div>
          <div>用AI做老客召回？</div>
        </div>
        <div className="content">
          <div className="left-content">
            <div className="img"></div>
          </div>
          <div className="right-content">
            <div className="advantage-list">
              <div className="advantage-group">
                <div className="advantage-item advantage-item-first">
                  <div className="advantage-title">转化率更高</div>
                  <div className="advantage-desc">下单转化率3%-5%</div>
                </div>
                <div className="advantage-item advantage-item-second">
                  <div className="advantage-title">客单价更高</div>
                  <div className="advantage-desc">提升20%-50%</div>
                </div>
              </div>
              <div className="advantage-group">
                <div className="advantage-item advantage-item-three">
                  <div className="advantage-title">数据利用率更高</div>
                  <div className="advantage-desc">是短信触达的5-10倍</div>
                </div>
                <div className="advantage-item advantage-item-last">
                  <div className="advantage-title">创造更多的GMV</div>
                  <div className="advantage-desc">ROI 8-100</div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="btn"
            onClick={() => {
              window.open(retailUrl('/form?formType=1'));
            }}>
            立即开启GMV增长 ››
          </div>
        </div>
      </Visible>
    </ByaiAdvantageWrapper>
  );
};

export default ByaiAdvantage;
