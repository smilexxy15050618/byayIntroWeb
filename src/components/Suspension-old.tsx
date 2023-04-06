import * as React from 'react';
import styled from 'styled-components';
import { media } from '../constants/style';
import { SvgPhone } from './SvgPhone';
import { SolidWeChat } from '@indata/icon-byai';
import { CALL_NUMBER_400 } from '../constants';
import { FormType } from './TryForm';

const SuspensionListMap = [
  {
    title: '一对一咨询',
    icon: 'iconweixin',
    tips: 'qrCode',
  },
  {
    title: '电话咨询',
    tips: '400',
    icon: 'icondianhuazixun1',
    // consult: true,
    // src: '//cdn.byai.com/static/official-website/home/consult_red.svg',
  },
  {
    title: '渠道合作',
    icon: 'iconjiamenghezu',
    partner: true,
  },
  {
    title: '免费体验',
    icon: 'iconmianfeishiyong',
    customer: true,
  },
  // {
  //   title: '线路合作',
  //   icon: 'iconxianluhezuo',
  //   line: true,
  // },
  {
    icon: 'iconfanhuidingceng',
    toTop: true,
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
  ${media.phone`
      display: none;
    `}
  .__react_component_tooltip {
    padding: 0;
    box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);
    background: #fff;
    opacity: 1 !important;
  }
  .tip400 {
    height: 80px;
    line-height: 80px;
    padding: 0 40px;
    color: #2e2e2e;
    font-size: 20px;
    font-weight: 500;
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
  .qimo-toggler {
    position: absolute;
    bottom: -120px;
    background: #fff;
    border-radius: 40px;
    box-shadow: 0px 10px 20px 0px rgba(49, 83, 212, 0.2);
    .suspension-icon {
      border-top: none;
    }
  }
`;

const SuspensionList = styled.ul`
  position: fixed;
  /* height: 100%; */
  top: calc(100vh - 640px);
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 0;
  list-style: none;
  box-shadow: 0px 10px 26px 0px rgba(49, 83, 212, 0.15);
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const SuspensionItem = styled.li`
  background: rgba(255, 255, 255, 1);
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(46, 46, 46, 1);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  width: 80px;
  height: 80px;
  .st0 {
    fill: #3153d4;
  }
  svg {
    width: 40px;
  }
  .st1 {
    fill: #ff0000;
  }
  &:hover {
    background: rgba(49, 83, 212, 1);
    color: rgba(255, 255, 255, 1);
    .suspension-icon {
      .iconfont {
        color: rgba(255, 255, 255, 1);
      }
    }
    .st0,
    .st1 {
      fill: #ffffff;
    }
    .suspension-desc span {
      color: #fff;
    }
  }
  .suspension-icon {
    flex: 1;
    width: 40px;
    border-top: 1px solid rgba(49, 83, 212, 0.2);
    display: flex;
    align-items: flex-end;
    &:only-child {
      align-items: center;
    }
    .iconfont {
      transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
      font-size: 40px;
      line-height: 1;
      color: rgba(50, 83, 212, 1);
    }
    .iconweixin {
      color: #1bb723;
    }
  }
  &.qimo-toggler {
    background: rgba(49, 83, 212, 1);
    color: rgba(255, 255, 255, 1);
    .suspension-icon {
      .iconfont {
        color: rgba(255, 255, 255, 1);
      }
      .iconweixin {
        color: '#1BB723';
      }
    }
    &:hover {
      background: #fff;
      .suspension-icon {
        .iconfont {
          color: rgba(50, 83, 212, 1);
        }
      }
    }
  }
  &:first-child {
    .suspension-icon {
      border-top: none;
    }
  }
  .suspension-desc {
    margin-bottom: 8px;
    span {
      font-size: 12px;
      font-weight: 400;
      color: #0d1924;
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
  right: 106px;
  top: 0px;
  width: 214px;
  height: 216px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);
  border-radius: 6px;
  padding: 30px;
  .angle {
    position: absolute;
    right: -6px;
    top: 25px;
    width: 6px;
  }
`;

const HoverPhone = styled.div`
  width: 225px;
  height: 80px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);
  border-radius: 6px;
  right: 106px;
  position: absolute;
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
    if (item.partner) {
      setForm(true, FormType.PARTNER);
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
              key={item.icon}
              onClick={() => this.handleItemClick(item)}
              data-tip
              data-for={item.tips}
              onMouseEnter={() => this.setState({ activeIndex: index })}
              onMouseLeave={() => this.setState({ activeIndex: -1 })}>
              <div className="suspension-icon" onClick={() => this.scrollTop(item.toTop)}>
                {item.consult ? <SvgPhone /> : <i className={`iconfont ${item.icon}`}></i>}
              </div>
              {item.title && (
                <div className="suspension-desc">
                  <span>{item.title}</span>
                </div>
              )}
              {item.tips === 'qrCode' && activeIndex === 0 && (
                <HoverCode>
                  <img src={QR_CODE} alt="" />
                  <img src="https://cdn.byai.com/node_front/1575636569037/%E8%A7%92.png" alt="" className="angle" />
                </HoverCode>
              )}
              {item.tips === '400' && activeIndex === 1 && (
                <HoverPhone>
                  <div className="tip400">{CALL_NUMBER_400}</div>
                  <img src="https://cdn.byai.com/node_front/1575636569037/%E8%A7%92.png" alt="" className="angle" />
                </HoverPhone>
              )}
            </SuspensionItem>
          ))}
          <SuspensionItem className="qimo-toggler" onClick={() => this.setState({ welcomeVisible: !welcomeVisible })}>
            <div className="suspension-icon">
              <i className="iconfont iconhuihua"></i>
            </div>
          </SuspensionItem>
        </SuspensionList>
        <div style={{ width: 0, height: 0, overflow: 'hidden' }}>
          {/* <ReactTooltip id="400" place="left" type="light" effect="solid">
            <div className="tip400">{CALL_NUMBER_400}</div>
          </ReactTooltip> */}
        </div>
        {welcomeVisible && (
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
        )}
      </SuspensionWrapper>
    );
  }
}

export default Suspension;
