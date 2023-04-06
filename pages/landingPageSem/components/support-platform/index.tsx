import React from 'react';
import ByScrollLine from '../../../../src/components/common/ByScrollLine';
import {
  douyin,
  jd,
  kuaishou,
  Model,
  pinduoduo,
  RoundContainer,
  suning,
  SupportPlatformContainer,
  taobao,
  TMall,
  vip,
  Wrapper,
  xiaohongshu,
} from './styled';

const SupportPlatform = () => {
  const platformList = [taobao, TMall, xiaohongshu, douyin, kuaishou, jd, vip, pinduoduo, suning];
  return (
    <SupportPlatformContainer>
      <div className="content">
        <div className="title">支持平台</div>
        <Wrapper>
          <Model />
          <ByScrollLine width="100%" time="20s" delay="0s">
            <div className="customer-icon-row">
              {platformList.map((imgUrl, i) => (
                <RoundContainer
                  key={`${i}`}
                  className={i % 2 === 1 ? 'customer-icon border-i' : 'customer-icon shadow-i'}>
                  <img src={imgUrl} />
                </RoundContainer>
              ))}
            </div>
          </ByScrollLine>
        </Wrapper>
      </div>
    </SupportPlatformContainer>
  );
};

export default SupportPlatform;
