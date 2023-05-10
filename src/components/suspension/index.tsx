import { ChannelCooperation, Consult, FreeFile, PhoneCall, PhoneNumber } from '@indata/icon-byai';
import * as React from 'react';
import { CALL_NUMBER_400 } from '../../constants';
import imgurl from '../../../img.url.js'

import {
  CodeCard,
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
    icon: PhoneCall,
  },
  {
    title: '售前咨询',
    icon: Consult,
  },
  {
    title: '渠道合作',
    icon: ChannelCooperation,
  },
  {
    title: '免费领取',
    icon: FreeFile,
  },
];

export const AVATAR =imgurl+'/弹弹头.svg';
export const AVATAR_FRAME = 'https://cdn.byai.com/by-fe-cdn/static/pmp/8f2b9215-34d3-49f7-af3c-114c29b29122.png';
export const QR_CODE_1 = imgurl+'/我是小应.svg';
export const QR_CODE_2 = imgurl+'/免费领取.svg';

interface ISuspensionState {
  welcomeVisible: boolean;
  activeIndex: number;
}

class Suspension extends React.Component<ISuspensionState> {
  state = {
    welcomeVisible: false,
    activeIndex: -1,
  };

  render() {
    const { activeIndex } = this.state;
    return (
      <SuspensionWrapper>
        <SuspensionAvatar
          onMouseEnter={() => this.setState({ welcomeVisible: true })}
          onMouseLeave={() => this.setState({ welcomeVisible: false })}>
          <img className="suspension-avatar-frame" src={AVATAR_FRAME} alt="" />
          <img className="suspension-avatar" src={AVATAR} alt="" />
          {this.state.welcomeVisible === true && (
            <CodeCard isMove={true}>
              <div className="hover-head">
                <img src={AVATAR} />
                <div>
                  <div className="hover-head-title">我是小应，您的专属运营顾问</div>
                  <div className="hover-head-desc">免费1v1服务 AI开启用户运营新体验</div>
                </div>
              </div>
              <div className="hover-content">
                <img src={QR_CODE_1} alt="" className="hover-content-code" />
              </div>
              <div className="hover-content-tips">
                <div>扫码添加 | 了解头部客户案例</div>
              </div>
              <div className="hover-footer">
                <PhoneNumber style={{ fontSize: 24 }} />
                <span>联系电话 {CALL_NUMBER_400}</span>
              </div>
            </CodeCard>
          )}
        </SuspensionAvatar>
        <SuspensionList>
          {SuspensionListMap.map((item, index) => (
            <SuspensionItem
              key={item.title}
              onMouseEnter={() => this.setState({ activeIndex: index })}
              onMouseLeave={() => this.setState({ activeIndex: -1 })}>
              <div className="suspension-icon">{item.icon && <item.icon />}</div>
              {item.title && <div className="suspension-desc">{item.title}</div>}
              {activeIndex === 0 && (
                <PhoneCard>
                  <div className="hover-head">致电专属客服 咨询解决方案</div>
                  <div className="hover-content">{CALL_NUMBER_400}</div>
                </PhoneCard>
              )}
              {activeIndex === 1 && (
                <CodeCard>
                  <div className="hover-head">
                    <img src={AVATAR} />
                    <div>
                      <div className="hover-head-title">我是小应，您的专属运营顾问</div>
                      <div className="hover-head-desc">免费1v1服务 AI开启用户运营新体验</div>
                    </div>
                  </div>
                  <div className="hover-content">
                    <img src={QR_CODE_1} alt="" className="hover-content-code" />
                  </div>
                  <div className="hover-content-tips">
                    <div>扫码添加 | 了解头部客户案例</div>
                  </div>
                  <div className="hover-footer">
                    <PhoneNumber style={{ fontSize: 24 }} />
                    <span>联系电话 {CALL_NUMBER_400}</span>
                  </div>
                </CodeCard>
              )}
              {activeIndex === 2 && (
                <PhoneCard isMove={true}>
                  <div className="hover-head">咨询渠道合作 共建增长引擎</div>
                  <div className="hover-content">131 8508 3001</div>
                </PhoneCard>
              )}
              {activeIndex === 3 && (
                <FreeCard>
                  <div className="hover-head">
                    <div>免费领取用户运营资料包</div>
                    <div>抢先开启业务增长</div>
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
                      <span>会员运营白皮书</span>
                      <span>细分行业运营打法</span>
                    </div>
                    <div>
                      <span>行业标杆案例</span>
                      <span>1v1专属顾问服务</span>
                    </div>
                  </div>
                </FreeCard>
              )}
            </SuspensionItem>
          ))}
        </SuspensionList>
      </SuspensionWrapper>
    );
  }
}

export default Suspension;
