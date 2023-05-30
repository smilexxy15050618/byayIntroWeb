import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../../src/components/Layout';
import { FormType } from '../../src/components/TryForm';
import { Hidden, Visible } from 'react-grid-system';
import { TextArea } from '../../src/components/common/BannerTextElements';
import BannerWhite from '../../src/components/common/BannerWhiteNew';
import {
  TabNav,
  EnterpriseIntroduction,
  MissionVision,
  DevelopHistory,
  DevelopHistoryWap,
  SocietyDuty,
  FlairVoucher,
  CustomerWords,
  JoinUs,
} from '../../src/components/about';
import ByVoiceFooter from '../../src/components/common/ByVoiceFooter';
import imgurl from '../../img.url.js';
import { HOST_ENUM, isPc } from '../../src/lib/utils';

const BANNER_BG = `${imgurl}/about_banner_bg.png`;
const BANNER_WAP_BG = `${imgurl}/about-wap-bg.png`;
const JOIN_US_IMG = `${imgurl}/about_banner_img.png`;
const JOIN_US_WAP_IMG = `${imgurl}/about-wap-banner.png`;
const ABOUT_INTRO = `${imgurl}/about-intro.jpg`;

const DEVELOPHIS_BG = `${imgurl}/develophis_bg.png`;
const JOINUS_BG = `${imgurl}/web-com.png`;
const FOOTER_BG = `https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/by-voice-bg.png`;

const Wrapper = styled.div``;

const BigTitle = styled.div`
    margin-bottom: 16px;
    font-size: 48px;
    font-weight: 600;
    line-height: 60px;
    color: rgba(26,26,26,1);
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    font-size: 32px;
    font-weight: 500;
    line-height: 40px;
    color: rgba(0, 0, 0, 1);
    padding: 0 12px;
    margin-bottom: 8px !important;
  }
`;

const Desc = styled.div`
    font-size: 20px;
    font-weight: 400;
    letter-spacing: 0.91px;
    line-height: 32px;
    color: rgba(51,51,51,1);
    padding-top: 20px;
    margin-bottom: 56px;
  @media (max-width: 768px) {
    padding-top: 8px;
    text-align: center;
    font-size: 16px;
    line-height: 26px;
    margin: 0 12px 24px !important;
  }
`;

const BlueBtn = styled.div`
  margin-top: 46px;
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

const EnIntroductionWrap = styled.div`
  padding-bottom: 35px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 20px -20px 110px 0px rgba(24, 63, 171, 0.12);
  border-radius: 20px 20px 0 0;
  @media (max-width: 768px) {
    padding-bottom: 35px;
    background: rgba(255, 255, 255, 1);
    border-radius: 0;
    box-shadow: none;
  }
`;

const TitleCredit = styled.div`
  padding-top: 80px;
  padding-bottom: 44px;
  font-size: 40px;
  line-height: 48px;
  color: #fff;
  text-align: center;
`;

const CreditMedal = styled.div<{ backgroundImage?: string }>`
  position: relative;
  margin-top: 100px;
  background-color: rgba(43, 88, 249, 1);
  background-image: ${props => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: 764px 506px;
  background-position: center;
`;

const PleactBg = styled.div`
  height: 80px;
  background: #fff;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
}
`

const About: FC<{ hostType?: HOST_ENUM }> = ({ hostType = HOST_ENUM.HOST }) => {
  const [initialOpacity, setInitialOpacity] = useState(false);

  const handleHeaderOpacity = () => {
    document.body.getBoundingClientRect().top > -10 ? setInitialOpacity(false) : setInitialOpacity(true);
  };

  const hadnleNav = (e) => {
    if(isPc()){
      setInitialOpacity(true)
    }
    
  };

  useEffect(() => {
    document.addEventListener('wheel', handleHeaderOpacity);
  }, []);


  return (
    <Layout initialOpacity={true} headPlaceholder={[false, false]} headFontStyle={['light', 'light']}>
      {(visible, setVisible) => (
        <Wrapper>
            <PleactBg style={{display: initialOpacity ? 'block' : 'none'}}></PleactBg>
            <BannerWhite
              height={['560px', '584px']}
              LinearHeight={['500px', '100%']}
              background={[`url(${BANNER_BG}) right top ,#F6FCFF`, `url(${BANNER_WAP_BG}) center,#F6FCFF`]}
              pcImgs={[
                {
                  src: JOIN_US_IMG,
                  style: { width: 644, height: 496, top: 0, right: 0 },
                  className: ['animate__fadeInRight', 'animate__ahead_300ms'],
                },
              ]}
              mobileImg={JOIN_US_WAP_IMG}
              mobileStyle={{display:'block', width: '319px',height:'245px', margin: '0 auto', paddingTop: '0', }}
              >
              <TextArea spaces={['', '']}>
                <BigTitle>关于百应</BigTitle>
                <Desc>
                  致力于通过前沿对话式AI能力
                  <br />
                  助力政府和企业高效连接C端用户
                </Desc>
                <BlueBtn onClick={() => window.open('/form?formType=1')}>立即体验</BlueBtn>
              </TextArea>
            </BannerWhite>
            <EnIntroductionWrap>
              <TabNav
                bannerList={[
                  {
                    name: '企业介绍',
                    jumpTarget: 'qiyejieshao',
                  },
                  {
                    name: '使命愿景',
                    jumpTarget: 'MissionVision',
                  },
                  {
                    name: '发展历程',
                    jumpTarget: 'DevelopHistory',
                  },
                  {
                    name: '社会责任',
                    jumpTarget: 'SocietyDuty',
                  },
                  {
                    name: '荣誉证书',
                    jumpTarget: 'CreditMedal',
                  },
                  {
                    name: '加入我们',
                    jumpTarget: 'JoinUs',
                  },
                ]}
                onCancel={hadnleNav}
              />
              <EnterpriseIntroduction cover={ABOUT_INTRO} />
            </EnIntroductionWrap>
            <MissionVision />
            <Visible md lg xl xxl xxxl>
              <DevelopHistory backgroundImage={DEVELOPHIS_BG} />
            </Visible>
            <Visible xs sm>
              <DevelopHistoryWap />
            </Visible>
            <SocietyDuty />
            <FlairVoucher />
            <CustomerWords />
            <JoinUs backgroundImage={JOINUS_BG} />
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

export default About;
