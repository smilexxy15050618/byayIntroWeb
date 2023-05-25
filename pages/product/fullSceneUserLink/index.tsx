import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TextArea } from '../../../src/components/common/BannerTextElements';
import ByVoiceFooter from '../../../src/components/common/ByVoiceFooter';
import { Layout } from '../../../src/components/Layout';
// import { Wrapper } from '../../../src/components/voice-robot/style';
import { FOOTER_BG } from '../../../src/constants/img-urls';
import { HOST_ENUM } from '../../../src/lib/utils';
import BannerWhite from './BannerWhite';
import FabricValue from './FabricValue';
import Features from './Features';

const PREFIX = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023';
const BANNER_BG = `${PREFIX}/multimodal-banner-bg.svg`;
const WAP_BANNER_IMGS = `${PREFIX}/fullSceneUserLink-banner-wap.png`;

const Wrapper = styled.div``;
const BigTitle = styled.div`
  margin-top: 100px;
  font-size: 48px;
  line-height: 60px;
  font-weight: 600;
  color: rgba(26, 26, 26, 1);
  text-align: center;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 32px;
    line-height: 60px;
    margin-bottom: 8px !important;
  }
`;

const Desc = styled.div`
  margin-top: 6px;
  font-size: 20px;
  line-height: 32px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  text-align: center;
  @media (max-width: 768px) {
    padding-top: 8px;
    text-align: center;
    font-size: 16px;
    line-height: 26px;
    margin-bottom: 24px !important;
  }
`;

const BlueBtn = styled.div`
  margin: 48px auto 0;
  width: 132px;
  height: 48px;
  border-radius: 5.33px;
  background: rgba(43, 88, 249, 1);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0px;
  line-height: 48px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  cursor: pointer;
`;

export default ({ hostType = HOST_ENUM.HOST }) => {
  const [initial, setInitial] = useState(true);

  const handleHeaderOpacity = () => {
    document.body.getBoundingClientRect().top > -10 ? setInitial(true) : setInitial(false);
  };

  const hadnleNav = () => {
    setInitial(false);
  };

  useEffect(() => {
    document.addEventListener('wheel', handleHeaderOpacity);
  }, []);

  return (
    <Layout initialOpacity={initial} headPlaceholder={[false, false]} headFontStyle={['light', 'light']}>
      {(visible, setVisible) => (
        <Wrapper>
          <BannerWhite
            background={[
              `url(${BANNER_BG}) center, linear-gradient(180deg, rgba(226, 243, 255, 1) 0%, rgba(215, 221, 255, 1) 100%);`,
              'linear-gradient(180deg, rgba(226, 243, 255, 1) 0%, rgba(215, 221, 255, 1) 100%);',
            ]}
            pcImgs={[
              {
                src: `${PREFIX}/fullSceneUserLink-banner.svg`,
                style: { width: '1200px', left: 0, top: 50 },
                className: ['animate__fadeInUp', 'animate__ahead_300ms'],
              },
            ]}
            mobileImg={WAP_BANNER_IMGS}>
            <TextArea spaces={['', '']}>
              <BigTitle>全场景用户互动触达</BigTitle>
              <Desc>
                提供跨平台，多形式交互的客户沟通解决方案，与客户建立稳固联系
              </Desc>
              <BlueBtn onClick={() => window.open('/form?formType=1')}>立即体验</BlueBtn>
            </TextArea>
          </BannerWhite>

          <Features onCancel={hadnleNav} />
          <FabricValue />
          <ByVoiceFooter
            title="立即体验AI时代的新一代用户运营平台"
            desc="用“AI”构建你和用户的“亲密关系”；共建存量时代的增长引擎。"
            btnText="与我联系"
            background={`url(${FOOTER_BG})`}
            onClick={() => window.open('/form?formType=1')}
          />
        </Wrapper>
      )}
    </Layout>
  );
};
