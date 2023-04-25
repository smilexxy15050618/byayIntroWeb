import React, { FC, useEffect, useState } from 'react';
import { Layout } from '../../../src/components/Layout';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import { FormType } from '../../../src/components/TryForm';
import { TextArea } from '../../../src/components/common/BannerTextElements';
import ByVoiceFooter from '../../../src/components/common/ByVoiceFooter';
import BannerWhite from './BannerWhite';
import Features from './Features';



import { Wrapper } from '../../../src/components/voice-robot/style';
import { FOOTER_BG } from '../../../src/constants/img-urls';
import { HOST_ENUM } from '../../../src/lib/utils';
const PREFIX = '/static/img2023';
const BANNER_BG = `${PREFIX}/multimodal-banner-bg.svg`;
const PC_BANNER_IMGS = [
  {
    src: `${PREFIX}/multimodal-banner-content.png`,
    style: { width: '1200px', top: 70, left: 0 },
    className: [],
  },
  {
    src: `${PREFIX}/multimodal-banner-left.png`,
    style: { width: '260px', top: 70, left: 32 },
    className: ['animate__fadeInLeft','animate__delay_700ms'],
  },
  {
    src: `${PREFIX}/multimodal-banner-right.png`,
    style: { width: '260px', top: 70, right: 32 },
    className: ['animate__fadeInRight','animate__delay_700ms'],
  },
  {
    src: `${PREFIX}/multimodal-banner-bottom.png`,
    style: { width: '1130px', left: 32, top: 723 },
    className: ['animate__fadeInUp', 'animate__delay_700ms'],
  },
];


const BigTitle = styled.div`
  margin-top: 100px;
  font-size: 48px;
  line-height: 80px;
  color: rgba(26, 26, 26, 1);
  text-align: center;
`;

const Desc = styled.div`
  margin-top: 10px;
  font-size: 20px;
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

  return (
    <Layout initialOpacity={initial} headPlaceholder={[false, false]} headFontStyle={['light', 'light']}>
      {(visible, setVisible) => (
      <Wrapper>  
      <Visible md lg xl xxl xxxl>
        
          {/*<Banner
            title="电话机器人"
            subTitle="充分释放传统呼叫中心效能"
            desc="支持智能化语音交互，利用语义识别及合成、自然语言处理、大数据分析等AI技术代替人工进行呼入呼出全自动化处理。"
            btnText="免费体验"
            pcImgs={PC_BANNER_IMGS}
            mobileImg={BANNER}
            minWidthPC="1127px"
            background={[
              `url(${BANNER_BG}) no-repeat center left/cover,#2B58F9`,
            ]}
          />*/}
          <BannerWhite
            background={[`url(${BANNER_BG}) center, linear-gradient(180deg, rgba(226, 243, 255, 1) 0%, rgba(215, 221, 255, 1) 100%);`, 'linear-gradient(180deg, rgba(226, 243, 255, 1) 0%, rgba(215, 221, 255, 1) 100%);']}
            pcImgs={PC_BANNER_IMGS}
          >
            <TextArea spaces={['', '']}>
              <BigTitle>多模态情感化对话式AI</BigTitle>
              <Desc>将AI交互的深度推进到多模态交互领域，丰富交互场景与内容</Desc>
              <BlueBtn onClick={() => window.open('/form?formType=1')}>预约体验</BlueBtn>
            </TextArea>
          </BannerWhite>
          
          <Features />
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
