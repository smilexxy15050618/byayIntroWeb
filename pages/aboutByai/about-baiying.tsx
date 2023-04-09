import * as React from 'react';
import styled from 'styled-components';
import { Layout } from '../../src/components/Layout';
import { Hidden, Visible } from 'react-grid-system';
import {
  BigTitle,
  Desc,
  TextArea,
} from '../../src/components/common/BannerTextElements';
import BannerWhite from '../../src/components/common/BannerWhite';
import imgurl from '../../img.url.js'
import { HOST_ENUM } from '../../src/lib/utils';
const BANNER_BG = `${imgurl}/about_banner_bg.png`;
export const JOIN_US_IMG = `${imgurl}/about_banner_img.png`;

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

const About: React.SFC<{ hostType?: HOST_ENUM }> = ({ hostType = HOST_ENUM.HOST }) => (
  <Layout hostType={hostType} headPlaceholder={[false, '#F9FAFF']} headFontStyle={['dark', 'dark']}>
    {(visible, setVisible) => (
      <>
        <Wrapper>
          <BannerWhite
            minWidthPC="1183px"
            background={[`url(${BANNER_BG}) right top ,#F6FCFF`, '#F6FCFF']}
            pcImgs={[
              {
                src: JOIN_US_IMG,
                style: { width: 639, height:608, top: 0, right: 0 },
                className: ['animate__fadeInRight', 'animate__ahead_300ms'],
              },
            ]}
            mobileImg={JOIN_US_IMG}>
            <TextArea margin="-50px 0 0" spaces={['20px 48px', '8px 32px']}>
              <Hidden xs sm>
                <BigTitle>
                  关于百应
                </BigTitle>
                <Desc width="548px">智能用户运营领域创领者</Desc>
                <Desc width="548px">致力于通过前沿对话式AI能力<br />助力政府和</Desc>
              </Hidden>
            </TextArea>
          </BannerWhite>
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
          dsfds<br />

        </Wrapper>
      </>
    )}
  </Layout>
);

export default About;