import { Callfor, Consultt, Cooperates, Fork, PhoneNumber } from '@indata/icon-byai';
import * as React from 'react';
import { CALL_NUMBER_400, QR_CODE } from '../../constants';
import {
  CodeCard,
  ContactCard,
  FreeCard,
  PhoneCard,
  SuspensionAvatar,
  SuspensionItem,
  SuspensionList,
  SuspensionWrapper,
} from './styled';
const SuspensionListMap = [
  {
    title: '电话咨询',
    icon: Callfor,
  },
  {
    title: '售前咨询',
    icon: Consultt,
  },
  {
    title: '渠道合作',
    icon: Cooperates,
  },
  // {
  //   title: '免费领取',
  //   icon: DataData,
  // },
];

export const AVATAR = 'https://cdn.byai.com/static/intro/img/retail/head.png';
export const QUEEN_AVATAR = 'https://cdn.byai.com/static/intro/img/retail/head-1.png';
export const AVATAR_FRAME = 'https://cdn.byai.com/by-fe-cdn/static/pmp/8f2b9215-34d3-49f7-af3c-114c29b29122.png';
export const QR_CODE_2 =
  'https://cdn.byai.com/static/intro/img/retail/qr_code/%E9%A6%96%E9%A1%B5-%E8%81%94%E7%B3%BB%E9%A1%BE%E9%97%AE-%E4%BE%A7%E8%BE%B9%E6%A0%8F.png';
export const QR_CODE_1 = 'https://cdn.byai.com/static/intro/img/retail/code-2.png';

interface ISuspensionState {
  welcomeVisible: boolean;
  activeIndex: number;
}

class Suspension extends React.Component<ISuspensionState> {
  state = {
    welcomeVisible: false,
    activeIndex: -1,
    visible: true,
  };

  render() {
    const { activeIndex, visible } = this.state;
    return (
      <SuspensionWrapper>
        <SuspensionAvatar
          onMouseEnter={() => this.setState({ welcomeVisible: true })}
          onMouseLeave={() => this.setState({ welcomeVisible: false })}>
          <div className="suspension-avatar-frame"></div>
          <img className="suspension-avatar" src={AVATAR} alt="" />
        </SuspensionAvatar>
        <SuspensionList>
          {SuspensionListMap.map((item, index) => (
            <SuspensionItem
              key={item.title}
              onMouseEnter={e => {
                this.setState({
                  activeIndex: index,
                });
              }}
              onMouseLeave={() =>
                this.setState({
                  activeIndex: -1,
                  visible: false,
                })
              }>
              <div className="suspension-icon">{item.icon && <item.icon />}</div>
              {item.title && <div className="suspension-desc">{item.title}</div>}
            </SuspensionItem>
          ))}
          {activeIndex === 0 && (
            <PhoneCard>
              <div className="hover-head">致电专属客服 咨询解决方案</div>
              <div className="hover-content">{CALL_NUMBER_400}</div>
            </PhoneCard>
          )}
          {activeIndex === 1 && (
            <CodeCard>
              <div className="hover-head">
                <img src={QUEEN_AVATAR} />
                <div>
                  <div className="hover-head-title">我是小应，您的专属增长顾问</div>
                  <div className="hover-head-desc">免费1v1服务 AI助力商家轻松营销</div>
                </div>
              </div>
              <div className="hover-content">
                <img src={QR_CODE_2} alt="" className="hover-content-code" />
              </div>
              <div className="hover-content-tips">
                <div>扫码添加 | 了解新鲜私域动态</div>
              </div>
              <div className="hover-footer">
                <PhoneNumber style={{ fontSize: 24 }} />
                <span>联系电话 {CALL_NUMBER_400}</span>
              </div>
            </CodeCard>
          )}
          {activeIndex === 2 && (
            <CodeCard>
              <div className="hover-head-1">
                <div>咨询百应市场/渠道合作</div>
              </div>
              <div className="hover-content">
                <img src={QR_CODE_1} alt="" className="hover-content-code" />
              </div>
              <div className="hover-content-tips">
                <div>扫码添加</div>
              </div>
            </CodeCard>
          )}
          {activeIndex === 3 && (
            <FreeCard>
              <div className="hover-head">
                <div>免费领取私域运营资料包</div>
                <div>抢先开启私域增长</div>
              </div>
              <div className="hover-content">
                <img src={QR_CODE_2} alt="" className="hover-content-code" />
              </div>
              <div className="hover-content-tips">
                <div>扫码添加 | 免费领取</div>
              </div>
              <div className="hover-divider">
                <span>您可以获得</span>
                <div className="divider"></div>
              </div>
              <div className="hover-footer">
                <div>
                  <span>私域加粉白皮书</span>
                  <span>细分行业私域打法</span>
                </div>
                <div>
                  <span>私域标杆案例</span>
                  <span>1v1私域顾问服务</span>
                </div>
              </div>
            </FreeCard>
          )}
          {activeIndex === -1 && (
            <ContactCard>
              {visible && (
                <>
                  <div
                    className="card-close"
                    onClick={() => {
                      this.setState({ visible: false });
                    }}>
                    <Fork />
                  </div>
                  <div className="card-content">
                    <div className="card-title">直聊百应增长顾问</div>
                    <div className="card-desc">免费领私域提效方案</div>
                    <div className="card-tag"></div>
                    <img className="card-code" src={QR_CODE.CONTACT_QR_CODE} />
                  </div>
                </>
              )}
            </ContactCard>
          )}
        </SuspensionList>
        <div
          className="card-button"
          onClick={() => {
            this.setState({ visible: true });
          }}>
          企业微信
        </div>
      </SuspensionWrapper>
    );
  }
}

export default Suspension;
