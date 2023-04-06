import * as React from 'react';
import styled from 'styled-components';
import { WeChatSolid, TiltTelephone, Cooperation, Conversation, ArrowSolidDown } from '@indata/icon-byai';
import { CALL_NUMBER_400 } from '../../../src/constants';
import { FormType } from '../../newPatternForm';

const SuspensionListMap = [
  {
    title: '1对1 咨询',
    icon: WeChatSolid,
    tips: 'qrCode',
  },
  {
    tips: '400',
    icon: TiltTelephone,
    phone: true,
  },
  {
    icon: Cooperation,
    tips: 'partner',
    partner: true,
  },
];

export const QR_CODE = '//cdn.byai.com/static/intro/img/custom-qr-0119.png';

const SuspensionWrapper = styled.div`
  z-index: 10;
  top: 0;
  width: 80px;
  right: 20px;
  height: 100vh;
  position: fixed;
  .__react_component_tooltip {
    padding: 0;
    box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);
    background: #fff;
    opacity: 1 !important;
  }
  .qr-code {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 30px;
    img {
      width: 186px;
      height: 186px;
      margin: 0;
    }
    span {
      text-align: center;
      font-size: 16px;
      line-height: 22px;
    }
  }
`;

const SuspensionList = styled.ul`
  position: fixed;
  /* height: 100%; */
  top: calc(100vh - 360px);
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
  list-style: none;
  box-shadow: 0px 14px 22px 0px rgba(3, 43, 183, 0.08);
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  width: 80px;
  padding: 20px 20px 8px;
  background: #fff;
  border-radius: 8px;
  .down-triangle {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, calc(100% - 11px));
    color: white;
  }
`;

const SuspensionItem = styled.li`
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(46, 46, 46, 1);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  width: 100%;
  svg {
    width: 40px;
  }
  :hover {
    color: #2b58f9 !important;
    .suspension-icon {
      background: rgba(43, 88, 249, 0.1);
      color: #2b58f9 !important;
      > .byicon {
        color: #2b58f9 !important;
      }
    }
  }
  .suspension-icon {
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f1f2f6ff;
    border-radius: 50%;
    font-size: 23px;
    > .byicon {
      display: flex;
      color: #000000a6;
    }
  }
  &:first-child {
    .suspension-icon {
      border-top: none;
    }
  }
  .suspension-desc {
    width: 100%;
    text-align: center;
    margin-bottom: 8px;
    span {
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
      line-height: 22px;
    }
  }
`;

const WelcomeWrapper = styled.div`
  position: absolute;
  bottom: 40px;
  width: 214px;
  height: 247px;
  right: 106px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0px 2px 40px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
  .spokesman {
    width: 118px;
    height: 124px;
    position: absolute;
    top: -65px;
    margin-bottom: 0;
  }
  > .qrcode {
    width: 154px;
    margin-top: 39px;
    margin-bottom: 0;
  }
  > .iconchuangkou-guanbi {
    position: absolute;
    padding: 8px 12px;
    font-size: 20px;
    top: 0;
    right: 0;
    color: #3153d4;
    cursor: pointer;
    opacity: 0.6;
  }
  .acticons {
    margin-top: 7px;
    span {
      font-size: 14px;
      font-weight: 500;
      color: rgba(153, 153, 153, 1);
    }
    .help-onebyone {
      margin-right: 8px;
      color: rgba(49, 83, 212, 1);
    }
  }
  .angle {
    position: absolute;
    right: -6px;
    bottom: 15px;
    width: 6px;
  }
`;

const HoverCode = styled.div`
  position: absolute;
  right: 94px;
  top: 0px;
  width: 180px;
  height: 204px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);
  border-radius: 6px;
  padding: 16px 20px 20px 20px;
  img {
    margin: 0px;
  }
  div {
    text-align: center;
    font-size: 14px !important;
    color: rgba(0, 0, 0, 0.45) !important;
    line-height: 20px !important;
  }
  .angle {
    position: absolute;
    right: -6px;
    top: 25px;
    width: 6px;
  }
`;

const HoverPhone = styled.div`
  width: 180px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);
  border-radius: 6px;
  right: 94px;
  position: absolute;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
  .tooltip-title {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.45);
    line-height: 20px;
  }
  .tooltip-content {
    margin-top: 8px;
    font-size: 17px;
    font-weight: 500;
    line-height: 22px;
  }
  .angle {
    position: absolute;
    top: 50%;
    right: -6px;
    transform: translateY(-50%);
  }
`;

interface ISuspensionProps {
  setForm: (visible: boolean, type?: FormType) => void;
}

interface ISuspensionState {
  welcomeVisible: boolean;
  activeIndex: number;
}

class Suspension extends React.Component<ISuspensionProps, ISuspensionState> {
  timer: number = null;

  state = {
    welcomeVisible: true,
    activeIndex: -1,
  };
  // 处理svg颜色不能变化
  componentDidMount() {
    const span = document.getElementsByClassName('byicon-svg-we-chat-solid')[0];
    if (!span) return;
    span.children[0].children[0].setAttribute('fill', '');
  }

  scrollTop = toTop => {
    if (!toTop) {
      return;
    }
    if (this.timer) {
      cancelAnimationFrame(this.timer);
    }
    const self = this;
    this.timer = requestAnimationFrame(function scroll() {
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      if (scrollTop > 0) {
        document.body.scrollTop = document.documentElement.scrollTop = scrollTop - 80;
        self.timer = requestAnimationFrame(scroll);
      } else {
        cancelAnimationFrame(self.timer);
      }
    });
  };

  handleItemClick = item => {
    const { setForm } = this.props;
    if (item.customer) {
      setForm(true);
    }
    if (item.line) {
      setForm(true, FormType.LINE);
    }
    if (item.phone) {
      let elA = document.createElement('a');
      elA.setAttribute('href', `tel:${CALL_NUMBER_400}`);
      document.body.appendChild(elA);
      elA.click();
      elA.remove();
    }
    if (item.partner) {
      setForm(true, FormType.CUSTOMER);
    }
  };

  handleWelcomeClose = () => {
    this.setState({ welcomeVisible: false });
  };

  render() {
    const { setForm } = this.props;
    const { welcomeVisible, activeIndex } = this.state;
    return (
      <SuspensionWrapper>
        <SuspensionList>
          {SuspensionListMap.map((item, index) => (
            <SuspensionItem
              key={index}
              onClick={() => this.handleItemClick(item)}
              data-tip
              data-for={item.tips}
              onMouseEnter={() => this.setState({ activeIndex: index })}
              onMouseLeave={() => this.setState({ activeIndex: -1 })}>
              {item.title && (
                <div className="suspension-desc">
                  <span>{item.title}</span>
                </div>
              )}
              <div className="suspension-icon" onClick={() => this.scrollTop(item.toTop)}>
                {item.icon && <item.icon />}
              </div>
              {item.tips === 'qrCode' && activeIndex === 0 && (
                <HoverCode>
                  <div>
                    直聊百应增长专家
                    <br />
                    免费一对一指导
                  </div>
                  <img src={'https://cdn.byai.com/static/oss-script/e7d2efbc1e5c5c3f724b7a6ee5e713bf.png'} />
                  <img src="https://cdn.byai.com/node_front/1575636569037/%E8%A7%92.png" className="angle" />
                </HoverCode>
              )}
              {item.tips === '400' && activeIndex === 1 && (
                <HoverPhone>
                  <div className="tooltip-title">咨询热线</div>
                  <div className="tooltip-content">{CALL_NUMBER_400}</div>
                  <img src="https://cdn.byai.com/node_front/1575636569037/%E8%A7%92.png" className="angle" />
                </HoverPhone>
              )}
              {item.tips === 'partner' && activeIndex === 2 && (
                <HoverPhone>
                  <div className="tooltip-title">免费体验</div>
                  <img src="https://cdn.byai.com/node_front/1575636569037/%E8%A7%92.png" className="angle" />
                </HoverPhone>
              )}
            </SuspensionItem>
          ))}
          {/* <ArrowSolidDown className="down-triangle" /> */}
        </SuspensionList>
        <div style={{ width: 0, height: 0, overflow: 'hidden' }}>
          {/* <ReactTooltip id="400" place="left" type="light" effect="solid">
            <div className="tip400">{CALL_NUMBER_400}</div>
          </ReactTooltip> */}
        </div>
        {
          // 暂时去除一对一扫码咨询
          welcomeVisible && false && (
            <WelcomeWrapper>
              <img src="//cdn.byai.com/static/intro/img/spokesman-1222.png" alt="" className="spokesman" />
              <img src={QR_CODE} alt="" className="qrcode" />
              <i className="iconfont iconchuangkou-guanbi" onClick={this.handleWelcomeClose} />
              <div className="acticons">
                <span className="help-onebyone">一对一指导</span>
                <span style={{ fontWeight: 400 }}>扫码咨询</span>
              </div>
              <img src="https://cdn.byai.com/node_front/1575636569037/%E8%A7%92.png" alt="" className="angle" />
            </WelcomeWrapper>
          )
        }
      </SuspensionWrapper>
    );
  }
}

export default Suspension;
