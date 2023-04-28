import React, { useEffect, useState } from 'react';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { TextArea } from '../../../src/components/common/BannerTextElements';
import ByVoiceFooter from '../../../src/components/common/ByVoiceFooter';
import { Layout } from '../../../src/components/Layout';
import { Wrapper } from '../../../src/components/voice-robot/style';
import { FOOTER_BG } from '../../../src/constants/img-urls';
import { HOST_ENUM } from '../../../src/lib/utils';
import BannerWhite from './BannerWhite';
import FabricValue from './FabricValue';
import Features from './Features';

const PREFIX = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023';
const BANNER_BG = `${PREFIX}/multimodal-banner-bg.svg`;

const BigTitle = styled.div`
  margin-top: 100px;
  font-size: 48px;
  line-height: 60px;
  font-weight: 600;
  color: rgba(26, 26, 26, 1);
  text-align: center;
  margin-bottom: 16px;
`;

const Desc = styled.div`
  margin-top: 10px;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  color: rgba(51, 51, 51, 1);
  text-align: center;
`;

const BlueBtn = styled.div`
  margin: 46px auto 0;
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
          <Visible md lg xl xxl xxxl>

            <BannerWhite
              background={[`url(${BANNER_BG}) center, linear-gradient(180deg, rgba(226, 243, 255, 1) 0%, rgba(215, 221, 255, 1) 100%);`, 'linear-gradient(180deg, rgba(226, 243, 255, 1) 0%, rgba(215, 221, 255, 1) 100%);']}
              pcImgs={[
                {
                  src: `${PREFIX}/fullSceneUserLink-banner.svg`,
                  style: { width: '1200px', left: 0, top: 50 },
                  className: ['animate__fadeInUp', 'animate__ahead_300ms'],
                },
              ]}
            >
              <TextArea spaces={['', '']}>
                <BigTitle>全场景用户互动触达</BigTitle>
                <Desc>从文字、语音、数字人表情动作的多模态角度，用对话和与语境相关的动作完成跨渠道交互<br />再通过“语义+语音+视觉”，构建支持多种场景的数字机器人形象</Desc>
                <BlueBtn onClick={() => window.open('/form?formType=1')}>预约体验</BlueBtn>
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
          </Visible>

          <Visible xs sm>
            移动端
      </Visible>
        </Wrapper>
      )}
    </Layout>
  );
};
