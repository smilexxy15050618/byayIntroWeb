import * as React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { media } from '../../constants/style';
import { Visible } from 'react-grid-system';
import { LinkButton } from '../Button';

const Wrap = styled.div`
  ${media.phone`
        display: none;
    `}
  .hidden {
    display: none;
  }
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

    .w-50 {
      width: 50%;
    }

    .w-33 {
      width: 33.3333%;
    }

    .swiper-wrap {
      display: flex;
      width: 1190px;
      margin: 0 auto;
      padding: 5px;
      .left-nav {
        text-align: center;
        .left-item {
          width: 240px;
          height: 75px;
          background: rgba(237, 240, 245, 1);
          font-size: 22px;
          font-weight: 500;
          color: rgba(13, 25, 36, 1);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease-in-out;
          cursor: default;
          line-height: 20px;
          .vice-item {
            font-size: 14px;
            display: contents;
            text-align: center;
          }
        }
        .active {
          height: 120px;
          color: #fff;
          background: rgba(49, 83, 212, 1);
          box-shadow: 5px 10px 30px 0px rgba(49, 83, 212, 0.1);
        }
      }
      .hover-right-desc {
        width: 920px;
        height: 415px;
        margin-left: 30px;
        background-color: #fff;
        overflow: hidden;
        top: -8px;
        position: relative;
        .right-item {
          position: relative;
          padding-left: 60px;
          padding-right: 60px;
          padding-top: 50px;
          height: 390px;
          box-shadow: 0px 1px 8px 4px rgba(0, 0, 0, 0.1);
          margin: 10px;
          overflow: hidden;
          h4 {
            font-weight: 400;
            margin-top: 0;
            line-height: 40px;
            font-size: 22px !important;
          }
          .label-list {
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            flex: 1 1;
            .right-list {
              width: 50%;
              .item-title {
                img {
                  width: 30px;
                  position: relative;
                  top: 3px;
                }
              }
            }
            .left-list {
              border-right: 1px solid rgba(216, 216, 216, 1);
            }
            .left-list,
            .right-list {
              overflow: hidden;
              margin-top: 10px;
              float: left;
              .item-box {
                float: left;
                display: flex;
                flex-direction: column;
                text-align: center;
                .item-title {
                  font-size: 18px;
                  font-family: PingFangSC-Medium, PingFang SC;
                  font-weight: 500;
                  color: rgba(49, 83, 212, 1);
                  line-height: 50px;
                }
                .item-text {
                  font-size: 16px;
                  font-family: PingFangSC-Regular, PingFang SC;
                  font-weight: 400;
                  color: rgba(102, 102, 102, 1);
                  line-height: 22px;
                  margin-bottom: 20px;
                }
              }
            }
          }
          .t1 {
            font-size: 22px;
            font-weight: 400;
            color: rgba(13, 25, 36, 1);
            margin-bottom: 10px;
          }
          overflow: hidden;
          .label-wrap {
            float: left;
            display: flex;
            width: 246px;
            flex-wrap: wrap;
            margin-top: 10px;
            .label.block {
              display: block;
            }
            .label {
              width: 100%;
              display: flex;
              align-items: center;
              margin-right: 69px;
              margin-bottom: 30px;
              .f-b {
                font-weight: bold;
              }
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
            .text {
              padding-left: 20px;
              font-size: 14px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              line-height: 26px;
              margin-top: 5px;
            }
            .mr {
              margin-right: 0;
            }
          }
          .label-image {
            float: left;
            display: flex;
            position: relative;
            left: -130px;
            top: 10px;
            .image-box {
              margin-right: 18px;
              img {
                width: 136px;
                height: 205px;
                position: relative;
              }
              h5 {
                width: 136px;
                height: 34px;
                background: rgba(49, 83, 212, 1);
                line-height: 34px;
                text-align: center;
                font-size: 16px;
                color: white;
                top: -39px;
                position: relative;
                font-weight: 400;
              }
            }
          }
          .right-bg {
            position: absolute;
            width: 440px;
            right: 0;
            top: 0;
          }
        }
      }
    }
  }
`;

const MobileWarp = styled.div`
  .solution-wrap {
    width: 100%;
    background: rgba(248, 249, 251, 1);
    .title {
      font-size: 36px;
      font-weight: 500;
      color: rgba(13, 25, 36, 1);
      text-align: center;
      margin-bottom: 80px;
    }

    .w-50 {
      width: 50%;
    }

    .w-33 {
      width: 33.3333%;
    }

    .swiper-wrap {
      display: flex;
      width: 100%;
      margin: 0 auto;
      .hover-right-desc {
        background-color: #fff;
        overflow: hidden;
        .right-item {
          padding: 20px;
          text-align: center;
          width: 100%;
          h4 {
            font-weight: 400;
            font-size: 22px !important;
          }
          .item-box {
            float: left;
            .item-title {
              font-size: 18px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: rgba(49, 83, 212, 1);
              line-height: 55px;
              img {
                width: 50px;
              }
            }
            .item-text {
              margin-bottom: 10px;
              font-size: 14px;
            }
          }
          .label-list {
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            flex: 1 1;
            .item-text {
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: rgba(102, 102, 102, 1);
              line-height: 22px;
            }
            .right-list {
              .item-title {
                img {
                  width: 30px;
                  position: relative;
                  top: 3px;
                }
              }
            }
            .left-list,
            .right-list {
              overflow: hidden;
              margin-top: 40px;
              float: left;
              .item-box {
                float: left;
                display: flex;
                flex-direction: column;
                text-align: center;
                .item-title {
                  font-size: 18px;
                  font-family: PingFangSC-Medium, PingFang SC;
                  font-weight: 500;
                  color: rgba(49, 83, 212, 1);
                  line-height: 55px;
                  img {
                    width: 50px;
                  }
                }
              }
            }
          }
          .t1 {
            font-size: 22px;
            font-weight: 400;
            color: rgba(13, 25, 36, 1);
            margin-bottom: 10px;
          }
          .label-wrap {
            margin-top: 10px;
            .label.block {
              display: block;
            }
            .label {
              width: 100%;
              display: flex;
              align-items: center;
              margin-right: 69px;
              margin-top: 30px;
              text-align: center;
              span {
                font-weight: bold;
                text-align: center;
                font-size: 16px;
              }
              &:nth-child(2n) {
                margin-right: 0;
                font-size: 12px;
                line-height: 22px;
              }
              .icon {
                width: 18px;
                height: 18px;
                margin-right: 9px;
                margin-bottom: 0;
              }
            }
            .text {
              padding-left: 20px;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              margin-top: 10px;
              color: rgba(102, 102, 102, 1);
              line-height: 24px;
            }
            .mr {
              margin-right: 0;
            }
          }
          .right-bg {
            width: 440px;
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
    <>
      <Wrap>
        <div className="hover-change-wrap">
          <div className="solution-wrap" style={{ background: props.bg ? props.bg : 'inherit' }}>
            <div className="title">{props.title}</div>
            <div className="swiper-wrap">
              <div className="left-nav">
                {props.leftItem.map((item, index) => {
                  const [main, voice] = item.split('&&');
                  return (
                    <div
                      className={`left-item ${active === index + 1 && 'active'}`}
                      onMouseEnter={() => changeActiveSolution(index + 1)}>
                      {main}
                      {voice && (
                        <>
                          <br />
                          <div className="vice-item">{voice}</div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="hover-right-desc">
                <div className={`right-item ${active !== 1 && 'hidden'}`}>
                  <div className="label-wrap" style={{ width: '60%' }}>
                    <div className="label block">
                      <img
                        src="https://cdn.byai.com/node_front/1571810432422/Rectangle%2010%402x.png"
                        alt=""
                        className="icon"
                      />
                      <span className="f-b">新沟通</span>
                      <div className="text">“零距离”沟通，扩展远程服务边界，让群众足不出户就能解决困难</div>
                    </div>
                    <div className="label block">
                      <img
                        src="https://cdn.byai.com/node_front/1571810432422/Rectangle%2010%402x.png"
                        alt=""
                        className="icon"
                      />
                      <span className="f-b">心服务</span>
                      <div className="text">以群众体验为核心的“线上线下”融合，让群众享受最贴心的服务</div>
                    </div>
                    <div className="label block">
                      <img
                        src="https://cdn.byai.com/node_front/1571810432422/Rectangle%2010%402x.png"
                        alt=""
                        className="icon"
                      />
                      <span className="f-b">新技术</span>
                      <div className="text">智能化、移动化、远程化 ，让信息多在网上跑，让群众少在路上跑</div>
                    </div>
                  </div>
                  <img
                    style={{ width: 170, right: 160, top: 43 }}
                    src="https://cdn.byai.com/static/intro/img/video-customer-services/scenes-1.png"
                    alt=""
                    className="right-bg"
                  />
                </div>
                <div className={`right-item ${active !== 2 && 'hidden'}`}>
                  <div className="label-wrap" style={{ width: '60%' }}>
                    <div className="label block">
                      <img
                        src="https://cdn.byai.com/node_front/1571810432422/Rectangle%2010%402x.png"
                        alt=""
                        className="icon"
                      />
                      <span>满足监管身份验证需求</span>
                    </div>
                    <div className="label block">
                      <img
                        src="https://cdn.byai.com/node_front/1571810432422/Rectangle%2010%402x.png"
                        alt=""
                        className="icon"
                      />
                      <span>降低服务成本投入</span>
                    </div>
                    <div className="label block">
                      <img
                        src="https://cdn.byai.com/node_front/1571810432422/Rectangle%2010%402x.png"
                        alt=""
                        className="icon"
                      />
                      <span>提升服务效率</span>
                    </div>
                    <div className="label block">
                      <img
                        src="https://cdn.byai.com/node_front/1571810432422/Rectangle%2010%402x.png"
                        alt=""
                        className="icon"
                      />
                      <span>改善客户体验</span>
                    </div>
                  </div>
                  <img
                    style={{ width: 500, right: 90, top: 43 }}
                    src="https://cdn.byai.com/static/intro/img/video-customer-services/scenes-2.png"
                    alt=""
                    className="right-bg"
                  />
                </div>
                <div className={`right-item ${active !== 3 && 'hidden'}`}>
                  <div className="label-wrap w-50">
                    <div className="label block">
                      <img
                        src="https://cdn.byai.com/node_front/1571810432422/Rectangle%2010%402x.png"
                        alt=""
                        className="icon"
                      />
                      <span>
                        远程医疗服务，优质医疗资源
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;共享
                      </span>
                    </div>
                    <div className="label block">
                      <img
                        src="https://cdn.byai.com/node_front/1571810432422/Rectangle%2010%402x.png"
                        alt=""
                        className="icon"
                      />
                      <span>
                        避免“医生动动嘴，患者跑断
                        <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;腿” ，让患者及时就医
                      </span>
                    </div>
                    <div className="label block">
                      <img
                        src="https://cdn.byai.com/node_front/1571810432422/Rectangle%2010%402x.png"
                        alt=""
                        className="icon"
                      />
                      <span>高清录制存证，减少医患纠纷</span>
                    </div>
                  </div>
                  <div className="label-image w-50">
                    <div className="image-box">
                      <img
                        src="https://cdn.byai.com/static/intro/img/video-customer-services/treatment-1.png"
                        alt=""
                        className="right-bg"
                      />
                      <h5>远程问诊</h5>
                    </div>
                    <div className="image-box">
                      <img
                        src="https://cdn.byai.com/static/intro/img/video-customer-services/treatment-2.png"
                        alt=""
                        className="right-bg"
                      />
                      <h5>远程就诊</h5>
                    </div>
                    <div className="image-box">
                      <img
                        src="https://cdn.byai.com/static/intro/img/video-customer-services/treatment-3.png"
                        alt=""
                        className="right-bg"
                      />
                      <h5>收拾直播</h5>
                    </div>
                  </div>
                </div>
                <div className={`right-item ${active !== 4 && 'hidden'}`}>
                  <h4>
                    打破优质教育资源分配不均，传统授课教学方式单一，录频点播模式师生互动性差等问题，把课堂搬到“云”端。
                  </h4>
                  <div className="label-list">
                    <div className="left-list w-50">
                      <div className="item-box w-50">
                        <div className="item-title">定制班课</div>
                        <div className="item-text">高质量音视频互动</div>
                      </div>
                      <div className="item-box w-50">
                        <div className="item-title">1对1教学</div>
                        <div className="item-text">视频面对面高质量教学</div>
                      </div>
                      <div className="item-box w-50">
                        <div className="item-title">名师课堂</div>
                        <div className="item-text">优质师资资源共享</div>
                      </div>
                      <div className="item-box w-50">
                        <div className="item-title">直播课堂</div>
                        <div className="item-text">万人直播课知识共享</div>
                      </div>
                    </div>
                    <div className="right-list">
                      <div className="item-box w-33">
                        <div className="item-title">
                          <img src="https://cdn.byai.com/static/intro/img/video-customer-services/icon-1.png" />
                        </div>
                        <div className="item-text">音视频沟通</div>
                      </div>
                      <div className="item-box w-33">
                        <div className="item-title">
                          <img src="https://cdn.byai.com/static/intro/img/video-customer-services/icon-2.png" />
                        </div>
                        <div className="item-text">智能白板</div>
                      </div>
                      <div className="item-box w-33">
                        <div className="item-title">
                          <img src="https://cdn.byai.com/static/intro/img/video-customer-services/icon-3.png" />
                        </div>
                        <div className="item-text">实时直播</div>
                      </div>
                      <div className="item-box w-33">
                        <div className="item-title">
                          <img src="https://cdn.byai.com/static/intro/img/video-customer-services/icon-4.png" />
                        </div>
                        <div className="item-text">课程录制</div>
                      </div>
                      <div className="item-box w-33">
                        <div className="item-title">
                          <img src="https://cdn.byai.com/static/intro/img/video-customer-services/icon-5.png" />
                        </div>
                        <div className="item-text">课件共享</div>
                      </div>
                      <div className="item-box w-33">
                        <div className="item-title">
                          <img src="https://cdn.byai.com/static/intro/img/video-customer-services/icon-6.png" />
                        </div>
                        <div className="item-text">文字聊天</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrap>
      {/* 手机端 */}
      <Visible sm xs>
        <MobileWarp>
          <div className="hover-change-wrap">
            <div className="solution-wrap" style={{ background: props.bg ? props.bg : 'inherit' }}>
              <div className="swiper-wrap">
                <div className="hover-right-desc">
                  <div className="right-item">
                    <LinkButton style={{ width: 120, height: 37, lineHeight: '37px', fontSize: 16, marginRight: 0 }}>
                      智慧远程政务
                    </LinkButton>
                    <div className="label-wrap">
                      <div className="label block">
                        <span>新沟通</span>
                        <div className="text">
                          “零距离”沟通，扩展远程服务边界，
                          <br />
                          让群众足不出户就能解决困难
                        </div>
                      </div>
                      <div className="label block">
                        <span>心服务</span>
                        <div className="text">
                          以群众体验为核心的“线上线下”融合，
                          <br />
                          让群众享受最贴心的服务
                        </div>
                      </div>
                      <div className="label block">
                        <span>新技术</span>
                        <div className="text">
                          智能化、移动化、远程化 ，让信息多在
                          <br />
                          网上跑，让群众少在路上跑
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="right-item" style={{ backgroundColor: '#f8f9fb' }}>
                    <LinkButton style={{ width: 120, height: 37, lineHeight: '37px', fontSize: 16, marginRight: 0 }}>
                      远程金融双录
                    </LinkButton>
                    <div className="label-wrap">
                      <div className="label block">
                        <img
                          src="https://cdn.byai.com/static/intro/img/video-customer-services/yes.png"
                          alt=""
                          className="icon"
                        />
                        <span>满足监管身份验证需求</span>
                      </div>
                      <div className="label block">
                        <img
                          src="https://cdn.byai.com/static/intro/img/video-customer-services/yes.png"
                          alt=""
                          className="icon"
                        />
                        <span>降低服务成本投入</span>
                      </div>
                      <div className="label block">
                        <img
                          src="https://cdn.byai.com/static/intro/img/video-customer-services/yes.png"
                          alt=""
                          className="icon"
                        />
                        <span>提升服务效率</span>
                      </div>
                      <div className="label block">
                        <img
                          src="https://cdn.byai.com/static/intro/img/video-customer-services/yes.png"
                          alt=""
                          className="icon"
                        />
                        <span>改善客户体验</span>
                      </div>
                    </div>
                    <img
                      style={{ width: '80%', right: 160, marginTop: 40 }}
                      src="https://cdn.byai.com/static/intro/img/video-customer-services/scenes-2-mobile.png"
                      alt=""
                      className="right-bg"
                    />
                  </div>
                  <div className="right-item">
                    <div className="label-wrap">
                      <LinkButton style={{ width: 120, height: 37, lineHeight: '37px', fontSize: 16, marginRight: 0 }}>
                        远程医疗
                      </LinkButton>
                      <div className="label block" style={{ margin: '30px 0' }}>
                        <img
                          src="https://cdn.byai.com/static/intro/img/video-customer-services/yes.png"
                          alt=""
                          className="icon"
                        />
                        <span>远程医疗服务，优质医疗资源共享</span>
                      </div>
                      <div className="label block" style={{ margin: '30px 0' }}>
                        <img
                          src="https://cdn.byai.com/static/intro/img/video-customer-services/yes.png"
                          alt=""
                          className="icon"
                        />
                        <span>
                          避免“医生动动嘴，患者跑断腿” ，让
                          <br />
                          患者及时就医
                        </span>
                      </div>
                      <div className="label block" style={{ margin: '30px 0' }}>
                        <img
                          src="https://cdn.byai.com/static/intro/img/video-customer-services/yes.png"
                          alt=""
                          className="icon"
                        />
                        <span>高清录制存证，减少医患纠纷</span>
                      </div>
                    </div>
                    <img
                      style={{ width: '80%', right: 30, top: 43 }}
                      src="https://cdn.byai.com/static/intro/img/video-customer-services/scenes-3.png"
                      alt=""
                      className="right-bg"
                    />
                  </div>
                  <div className="right-item" style={{ backgroundColor: '#f8f9fb' }}>
                    <LinkButton style={{ width: 120, height: 37, lineHeight: '37px', fontSize: 16, marginRight: 0 }}>
                      在线教育
                    </LinkButton>
                    <p style={{ color: '#666666', fontSize: '12px', margin: '40px 0 0 0' }}>
                      打破优质教育资源分配不均，传统授课教学方式单一，录频点播模式师生互动性差等问题，把课堂搬到“云”端。
                    </p>
                    <div className="label-list">
                      <div className="left-list">
                        <div className="item-box w-50">
                          <div className="item-title">定制班课</div>
                          <div className="item-text">高质量音视频互动</div>
                        </div>
                        <div className="item-box w-50">
                          <div className="item-title">1对1教学</div>
                          <div className="item-text">视频面对面高质量教学</div>
                        </div>
                        <div className="item-box w-50">
                          <div className="item-title">名师课堂</div>
                          <div className="item-text">优质师资资源共享</div>
                        </div>
                        <div className="item-box w-50">
                          <div className="item-title">直播课堂</div>
                          <div className="item-text">万人直播课知识共享</div>
                        </div>
                      </div>
                      <div className="right-item" style={{ backgroundColor: '#f8f9fb', marginTop: 20 }}>
                        <div className="item-box w-33">
                          <div className="item-title">
                            <img src="https://cdn.byai.com/static/intro/img/video-customer-services/icon-1.png" />
                          </div>
                          <div className="item-text">音视频沟通</div>
                        </div>
                        <div className="item-box w-33">
                          <div className="item-title">
                            <img src="https://cdn.byai.com/static/intro/img/video-customer-services/icon-2.png" />
                          </div>
                          <div className="item-text">智能白板</div>
                        </div>
                        <div className="item-box w-33">
                          <div className="item-title">
                            <img src="https://cdn.byai.com/static/intro/img/video-customer-services/icon-3.png" />
                          </div>
                          <div className="item-text">实时直播</div>
                        </div>
                        <div className="item-box w-33">
                          <div className="item-title">
                            <img src="https://cdn.byai.com/static/intro/img/video-customer-services/icon-4.png" />
                          </div>
                          <div className="item-text">课程录制</div>
                        </div>
                        <div className="item-box w-33">
                          <div className="item-title">
                            <img src="https://cdn.byai.com/static/intro/img/video-customer-services/icon-5.png" />
                          </div>
                          <div className="item-text">课件共享</div>
                        </div>
                        <div className="item-box w-33">
                          <div className="item-title">
                            <img src="https://cdn.byai.com/static/intro/img/video-customer-services/icon-6.png" />
                          </div>
                          <div className="item-text">文字聊天</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MobileWarp>
      </Visible>
    </>
  );
};

export default HoverChange;
