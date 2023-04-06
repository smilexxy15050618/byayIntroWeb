import React from 'react';
import { CallMeContainer, QRCodeContainer } from './style';

const CallMeMobile = () => {
  return (
    <CallMeContainer>
      <div className="title">联系百应，开启颠覆性的私域增长</div>
      <QRCodeContainer />
      <div className="desc">
        <span>扫码获取私域加粉白皮书</span>
        <span>定制专属私域方案</span>
      </div>
    </CallMeContainer>
  );
};

export default CallMeMobile;
