import React from 'react';
import { LogoListContainer, SupportPlatformContainer } from './styled';

const SupportPlatformMobile = () => {
  return (
    <SupportPlatformContainer>
      <div className="title">支持平台</div>
      <LogoListContainer>
        <div className="taobao" />
        <div className="TMall" />
        <div className="jd" />
        <div className="kuaishou" />
        <div className="pinduoduo" />
        <div className="xiaohongshu" />
        <div className="douyin" />
      </LogoListContainer>
    </SupportPlatformContainer>
  );
};

export default SupportPlatformMobile;
