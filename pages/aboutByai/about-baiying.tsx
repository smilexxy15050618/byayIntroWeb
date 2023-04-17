import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '../../src/components/Layout';
import { Theme } from '../../src/constants/style';
import { splitCssValue } from '../../src/lib/utils';
import { Col, ColProps, Container, Hidden, Row, Visible, ScreenClassRender } from 'react-grid-system';
import { TextArea } from '../../src/components/common/BannerTextElements';
import BannerWhite from '../../src/components/common/BannerWhite';
import { TabNav, EnterpriseIntroduction, MissionVision, DevelopHistory, SocietyDuty, FlairVoucher, InterCertificate, CertificateNew, JoinUs } from '../../src/components/about';
import ByVoiceFooterNew from '../../src/components/common/ByVoiceFooterNew';


import imgurl from '../../img.url.js'
import { HOST_ENUM } from '../../src/lib/utils';
const BANNER_BG = `${imgurl}/about_banner_bg.png`;
const JOIN_US_IMG = `${imgurl}/about_banner_img.png`;
const ABOUT_INTRO = `${imgurl}/about-intro.jpg`;
const Mission_BG = `${imgurl}/mission-bg.png`;
const Vision_BG = `${imgurl}/vision-bg.png`;
const DEVELOPHIS_BG = `${imgurl}/develophis_bg.png`;
const SOCIETYDUTY_BG = `${imgurl}/society-duty.png`;
const SOCIETYDUTY_IMG1 = `${imgurl}/society-duty_1.png`;
const SOCIETYDUTY_IMG2 = `${imgurl}/society-duty_2.png`;
const INTERCERTIFICATE_BG = `${imgurl}/inter-cert_bg.png`;
const CRDITMEDAL_BG = `${imgurl}/credit-medal-bg.png`;
const JOINUS_BG = `${imgurl}/web-com.png`;
const FOOTER_BG = `${imgurl}/by-voice-bg.png`;

const Wrapper = styled.div`
  background: #ffffff;
  .blue-hight {
    color: rgb(43, 88, 249);
  }
  @media (min-with: 769px) {
    #big-title {
      margin-top: -50px !important;
    }
  }
`;

const BigTitle = styled.div`
  margin-top: 20px;
  font-size:48px;
  line-height:80px;
  color:rgba(26, 26, 26, 1);
`;

const Desc = styled.div`
  margin-top: 10px;
  font-size: 20px;
  line-height:32px;
  color: rgba(51, 51, 51, 1);
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
`

const TitleCredit = styled.div`
  padding-top: 80px;
  padding-bottom:44px;
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


const About: React.SFC<{ hostType?: HOST_ENUM }> = ({ hostType = HOST_ENUM.HOST }) => {
  
  return (
  <Layout hostType={hostType} headPlaceholder={[false, '#F9FAFF']} headFontStyle={['dark', 'dark']}>
    {(visible, setVisible) => (
        <Wrapper>
          <BannerWhite
            background={[`url(${BANNER_BG}) right top ,#F6FCFF`, '#F6FCFF']}
            pcImgs={[
              {
                src: JOIN_US_IMG,
                style: { width: 644, height:496, top: 0, right: 0 },
                className: ['animate__fadeInRight', 'animate__ahead_300ms'],
              },
            ]}
            mobileImg={JOIN_US_IMG}>
            <TextArea spaces={['', '']}>
              <Hidden xs sm>
                <BigTitle>
                  关于百应
                </BigTitle>
                <Desc>致力于通过前沿对话式AI能力<br />助力政府和企业高效连接C端用户</Desc>
                <BlueBtn
                  onClick={() =>
                    window.open('/form?formType=1')
                  }>
                  社会招聘
                </BlueBtn>
              </Hidden>
            </TextArea>
          </BannerWhite>
          <EnIntroductionWrap>
            <TabNav 
              bannerList={[
                {
                  name: '企业介绍',
                  jumpTarget: '#qiyejieshao'
                },
                {
                  name: '使命愿景',
                  jumpTarget: '#MissionVision'
                },
                {
                  name: '发展历程',
                  jumpTarget: '#DevelopHistory'
                },
                {
                  name: '社会责任',
                  jumpTarget: '#SocietyDuty'
                },
                {
                  name: '荣誉证书',
                  jumpTarget: '#CreditMedal'
                },
                {
                  name: '加入我们',
                  jumpTarget: '#JoinUs'
                }
              ]} 
            />
            <EnterpriseIntroduction
              cover={ABOUT_INTRO}
            />
          </EnIntroductionWrap>
          <MissionVision
            MissionBG={Mission_BG}
            VisionBG={Vision_BG}
          />
          <DevelopHistory
            backgroundImage={DEVELOPHIS_BG}
          />
          <SocietyDuty
            backgroundImage={SOCIETYDUTY_BG}
            societyDuty1={SOCIETYDUTY_IMG1}
            societyDuty2={SOCIETYDUTY_IMG2}
          />
          <FlairVoucher />
          <InterCertificate backgroundImage={INTERCERTIFICATE_BG} />
          <CreditMedal backgroundImage={CRDITMEDAL_BG} id="CreditMedal">
            <TitleCredit>荣誉奖项</TitleCredit>
            <ScreenClassRender
              render={screenClass => {
                let limit;
                switch (screenClass) {
                  case 'lg':
                    limit = 4;
                    break;
                  case 'md':
                    limit = 3;
                    break;
                  case 'sm':
                    limit = 2;
                    break;
                  case 'xs':
                    limit = 1;
                    break;
                  default:
                    limit = 5;
                }
                return <CertificateNew limit={limit} />;
              }}
            />
          </CreditMedal>
          <JoinUs backgroundImage={JOINUS_BG} />
          <ByVoiceFooterNew
            title="用AI助力构建To C长期信关系，一起创造未来"
            desc="留下联系方式，将有AI行业专家为您提供专属服务"
            btnText="预约演练"
            background={`url(${FOOTER_BG})`}
            onClick={() => {
              window.open('/form?formType=1')
            }}
          />
        </Wrapper>
    )}
  </Layout>
  );
};

export default About;