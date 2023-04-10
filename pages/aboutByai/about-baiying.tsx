import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '../../src/components/Layout';
import { Hidden, Visible } from 'react-grid-system';
import { TextArea } from '../../src/components/common/BannerTextElements';
import BannerWhite from '../../src/components/common/BannerWhite';
import { TabNav, EnterpriseIntroduction } from '../../src/components/about';

import imgurl from '../../img.url.js'
import { HOST_ENUM } from '../../src/lib/utils';
const BANNER_BG = `${imgurl}/about_banner_bg.png`;
const JOIN_US_IMG = `${imgurl}/about_banner_img.png`;
const INTRODUCE_BG = `${imgurl}/about_introduce_bg.png`;


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
  color:rgb(51,51,51);
`;

const SubTitle = styled.div`
  margin-top: 20px;
  width: 685px;
  font-size:58px;
  line-height:54px;
  color:rgb(51,51,51);
`;

const Desc = styled.div`
  margin-top: 40px;
  font-size:22px;
  line-height:34px;
  color:rgb(51,51,51);
`;

const EnIntroductionWrap = styled.div`
  padding-bottom: 35px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 20px -20px 110px 0px rgba(24, 63, 171, 0.12);
  border-radius: 20px 20px 0 0;
`


const About: React.SFC<{ hostType?: HOST_ENUM }> = ({ hostType = HOST_ENUM.HOST }) => (
  <Layout hostType={hostType} headPlaceholder={[false, '#F9FAFF']} headFontStyle={['dark', 'dark']}>
    {(visible, setVisible) => (
      <>
        <Wrapper>
          <BannerWhite
            background={[`url(${BANNER_BG}) right top ,#F6FCFF`, '#F6FCFF']}
            pcImgs={[
              {
                src: JOIN_US_IMG,
                style: { width: 639, height:608, top: -50, right: 0 },
                className: ['animate__fadeInRight', 'animate__ahead_300ms'],
              },
            ]}
            mobileImg={JOIN_US_IMG}>
            <TextArea spaces={['', '']}>
              <Hidden xs sm>
                <BigTitle>
                  关于百应
                </BigTitle>
                <SubTitle>智能用户运营领域创领者</SubTitle>
                <Desc>致力于通过前沿对话式AI能力<br />助力政府和企业高效连接C端用户</Desc>
              </Hidden>
            </TextArea>
          </BannerWhite>
          <EnIntroductionWrap>
            <TabNav 
              bannerList={[
                {
                  name: '企业介绍',
                },
                {
                  name: '使命愿景',
                },
                {
                  name: '发展历程',
                },
                {
                  name: '社会责任',
                },
                {
                  name: '荣誉证书',
                },
                {
                  name: '加入我们',
                },
              ]} 
            />
            <EnterpriseIntroduction
              backgroundImage={INTRODUCE_BG}
              cover="//cdn.byai.com/static/official-website/about/baiying-1222.png"
            />
          </EnIntroductionWrap>
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />
          dsfds<br />

        </Wrapper>
      </>
    )}
  </Layout>
);

export default About;