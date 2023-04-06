import React from 'react';
import { CallMeContainer, QRCodeContainer, RoundContainer } from './style';

const CallMe = () => {
  return (
    <CallMeContainer>
      <div className="content">
        <div className="left">
          <div className="title">立即联系百应，开启颠覆性的私域增长</div>
          <div className="desc">
            联系我们可获取:<RoundContainer></RoundContainer>业务场景梳理<RoundContainer></RoundContainer>
            专属引流方案定制
            <RoundContainer></RoundContainer>外呼效果测试
          </div>
          <div className="call-me">
            <a className="button" href="/form?formType=1&origin=ecommerce">
              立即免费体验
            </a>
          </div>
        </div>
        <div className="right">
          <QRCodeContainer />
          <div className="desc">扫码获取私域加粉白皮书</div>
        </div>
      </div>
    </CallMeContainer>
  );
};

export default CallMe;
