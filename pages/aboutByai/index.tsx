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
  SocietyDuty,
  FlairVoucher,
  CustomerWords,
  JoinUs,
} from '../../src/components/about';
import AboutOld, { AboutContent } from '../about';
import ByVoiceFooter from '../../src/components/common/ByVoiceFooter';
import imgurl from '../../img.url.js';
import { HOST_ENUM } from '../../src/lib/utils';

const BANNER_BG = `${imgurl}/about_banner_bg.png`;
const BANNER_WAP_BG = `${imgurl}/about-wap-bg.svg`;
const JOIN_US_IMG = `${imgurl}/about_banner_img.png`;
const JOIN_US_WAP_IMG = `${imgurl}/about-wap-banner.svg`;
const ABOUT_INTRO = `${imgurl}/about-intro.jpg`;
const Mission_BG = `${imgurl}/mission-bg.png`;
const Vision_BG = `${imgurl}/vision-bg.png`;
const DEVELOPHIS_BG = `${imgurl}/develophis_bg.png`;
const JOINUS_BG = `${imgurl}/web-com.png`;
const FOOTER_BG = `${imgurl}/kqaizl.png`;

const Wrapper = styled.div``;

const BigTitle = styled.div`
  margin-top: 20px;
  font-size: 48px;
  line-height: 80px;
  color: rgba(26, 26, 26, 1);
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    font-size: 32px;
    line-height: 47px;
    padding: 0 12px;
    margin-bottom: 8px !important;
  }
`;

const Desc = styled.div`
  margin-top: 10px;
  font-size: 20px;
  line-height: 32px;
  color: rgba(51, 51, 51, 1);
  @media (max-width: 768px) {
    padding-top: 8px;
    text-align: centet;
    font-size: 16px;
    line-height: 26px;
    margin: 0 12px 46px !important;
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

const About: FC<{ hostType?: HOST_ENUM }> = ({ hostType = HOST_ENUM.HOST }) => {
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
            mobileStyle={{width: '319px',height:'245px',paddingTop: '0', }}
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
          <Hidden xs sm>
            <EnIntroductionWrap>
              <TabNav
                bannerList={[
                  {
                    name: '企业介绍',
                    jumpTarget: '#qiyejieshao',
                  },
                  {
                    name: '使命愿景',
                    jumpTarget: '#MissionVision',
                  },
                  {
                    name: '发展历程',
                    jumpTarget: '#DevelopHistory',
                  },
                  {
                    name: '社会责任',
                    jumpTarget: '#SocietyDuty',
                  },
                  {
                    name: '荣誉证书',
                    jumpTarget: '#CreditMedal',
                  },
                  {
                    name: '加入我们',
                    jumpTarget: '#JoinUs',
                  },
                ]}
                onCancel={hadnleNav}
              />
              <EnterpriseIntroduction cover={ABOUT_INTRO} />
            </EnIntroductionWrap>
            <MissionVision MissionBG={Mission_BG} VisionBG={Vision_BG} />
            <DevelopHistory backgroundImage={DEVELOPHIS_BG} />
            <SocietyDuty />
            <FlairVoucher />
            <CustomerWords />
            <JoinUs backgroundImage={JOINUS_BG} />
          </Hidden>
          <Visible xs sm>
            {AboutContent}
            {/* <TabNav
              bannerList={[
                {
                  name: '企业介绍',
                  jumpTarget: '#qiyejieshao',
                },
                {
                  name: '使命愿景',
                  jumpTarget: '#MissionVision',
                },
                {
                  name: '发展历程',
                  jumpTarget: '#DevelopHistory',
                },
                {
                  name: '社会责任',
                  jumpTarget: '#SocietyDuty',
                },
                {
                  name: '荣誉证书',
                  jumpTarget: '#CreditMedal',
                },
                {
                  name: '加入我们',
                  jumpTarget: '#JoinUs',
                },
              ]}
              onCancel={hadnleNav}
            /> */}
          </Visible>
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
