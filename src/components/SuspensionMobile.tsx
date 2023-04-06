import * as React from 'react';
import styled from 'styled-components';
import { media } from '../constants/style';
import { SvgPhone } from './SvgPhone';
import { CALL_NUMBER_400 } from '../constants';
import { QR_CODE } from './Suspension';
import { FormType } from './TryForm';

const qrClassName = 'qr-code';
const isQrCodeWrapperClick = e => {
  const { target } = e;
  const checkClass = className => {
    if (!className || typeof className !== 'string') {
      return false;
    }
    return className.indexOf(qrClassName) > -1 || className.indexOf(`${qrClassName}-trigger`) > -1;
  };
  if (checkClass(target.className)) {
    return true;
  }
  let parent = target.parentNode;
  while (parent) {
    if (checkClass(parent.className)) {
      return true;
    }
    parent = parent.parentNode;
  }
  return false;
};

const SuspensionListMap = [
  {
    title: '一对一咨询',
    icon: 'iconweixin',
    qrCode: true,
  },
  {
    title: '电话咨询',
    icon: 'icondianhuazixun1',
    phone: CALL_NUMBER_400,
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
  {
    title: '回到顶部',
    icon: 'iconfanhuidingceng',
    toTop: true,
  },
];

const SuspensionMobileWrapper = styled.div`
  z-index: 50;
  width: 100vw;
  height: 60px;
  bottom: 0;
  position: fixed;
  display: none;
  box-shadow: 0px -1px 0px 0px rgba(238, 238, 238, 1);
  ${media.phone`
      display: block;
    `}
  .qr-code {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    padding-bottom: 20px;
    box-shadow: 0px 18px 52px 0px rgba(49, 83, 212, 0.1);
    position: absolute;
    border-radius: 18px;
    bottom: 152px;
    width: 320px;
    background: #fff;
    left: -20px;
    img {
      width: 260px;
      height: 260px;
      margin: 0;
    }
    span {
      text-align: center;
      font-size: 24px;
      font-weight: 400;
      color: rgba(13, 25, 36, 1);
      line-height: 33px;
      opacity: 0.66;
    }
    &:after {
      content: '';
      border: 10px solid transparent;
      border-top-color: #fff;
      width: 0;
      height: 0;
      position: absolute;
      bottom: -5px;
      bottom: -20px;
      left: 50px;
    }
  }
`;

const SuspensionMobileList = styled.ul`
  list-style: none;
  box-shadow: 0px 10px 26px 0px rgba(49, 83, 212, 0.15);
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  margin: 0;
  background: #fff;
  transform: scale(0.5);
  position: fixed;
  width: 200vw;
  height: 120px;
  bottom: -30px;
  left: -50vw;
  #phone {
    &:active,
    :hover {
      text-decoration: none;
    }
  }
`;

const SuspensionMobileItem = styled.li`
  display: flex;
  margin: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(46, 46, 46, 1);
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  padding: 14px 0;
  width: 92px;
  .st0 {
    fill: #3153d4;
  }
  svg {
    width: 64px;
  }
  .st1 {
    fill: #ff0000;
  }
  .suspension-icon {
    .iconfont {
      transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
      font-size: 64px;
      line-height: 1;
      color: rgba(50, 83, 212, 1);
    }
    .iconweixin {
      color: #1bb723;
    }
  }
  .suspension-desc {
    margin-top: 4px;
    span {
      font-size: 18px;
      font-weight: 400;
      color: #0d1924;
      opacity: 0.66;
    }
  }
`;

interface ISuspensionMobileProps {
  setForm: (visible: boolean, type?: FormType) => void;
}

class SuspensionMobile extends React.Component<
  ISuspensionMobileProps,
  {
    qrCodeVisible: boolean;
  }
> {
  timer: number = null;

  state = {
    qrCodeVisible: false,
  };

  componentDidMount() {
    document.addEventListener('click', e => {
      e.stopPropagation();
      if (!isQrCodeWrapperClick(e)) {
        this.setState({
          qrCodeVisible: false,
        });
      }
    });
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
    } else if (item.partner) {
      setForm(true, FormType.PARTNER);
    } else if (item.qrCode) {
      const { qrCodeVisible } = this.state;
      this.setState({
        qrCodeVisible: !qrCodeVisible,
      });
    }
  };

  render() {
    const { qrCodeVisible } = this.state;
    return (
      <SuspensionMobileWrapper>
        <SuspensionMobileList>
          {SuspensionListMap.map(item => {
            const Item = (
              <SuspensionMobileItem
                key={item.icon}
                onClick={() => this.handleItemClick(item)}
                style={item.qrCode ? { position: 'relative' } : null}
                className={item.qrCode ? `${qrClassName}-trigger` : ''}>
                <div className="suspension-icon" onClick={() => this.scrollTop(item.toTop)}>
                  {item.svg ? <SvgPhone /> : <i className={`iconfont ${item.icon}`}></i>}
                </div>
                {item.title && (
                  <div className="suspension-desc" style={item.phone && { marginTop: 2 }}>
                    <span>{item.title}</span>
                  </div>
                )}
                {item.qrCode && qrCodeVisible && (
                  <div className={qrClassName}>
                    <img src={QR_CODE} alt="" />
                    <span>长按保存</span>
                    <span>微信扫码立即关注</span>
                  </div>
                )}
              </SuspensionMobileItem>
            );
            return item.phone ? (
              <a key={item.icon} href={`tel:${item.phone}`} id="phone">
                {Item}
              </a>
            ) : (
              Item
            );
          })}
        </SuspensionMobileList>
      </SuspensionMobileWrapper>
    );
  }
}

export default SuspensionMobile;
