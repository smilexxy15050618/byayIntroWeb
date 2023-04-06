import { NextFunctionComponent } from 'next';
import { Hidden, Visible } from 'react-grid-system';
import styled from 'styled-components';
import {
  AboutUsBtnWrap,
  BASE_URL,
  BigTitle,
  BlueBtn,
  Desc,
  SmallSubTitle,
  TextArea,
  WhiteBtn,
} from '../../src/components/common/BannerTextElements';
import BannerWhite from '../../src/components/common/BannerWhite';
import { Layout } from '../../src/retail/components/Layout';
import { JOIN_US_IMG } from '../about/join';

const BANNER = `${BASE_URL}join-recruit.png`;
const BANNER_XS = `${BASE_URL}join-recruit-xs.png`;
const BANNER_BG = `${BASE_URL}join-recruit-bg.png`;

const BACKGOURND_XS = 'https://cdn.byai.com/static/official-website/home/guanyuwomen.png';

const Wrapper = styled.div`
  background: #ffffff;
  .origin-hight {
    color: #f66600;
  }
  @media (min-with: 769px) {
    #big-title {
      margin-top: -50px !important;
    }
  }
`;

const Join: NextFunctionComponent = ({}) => (
  <Layout headPlaceholder={[false, '#F9FAFF']} headFontStyle={['dark', 'dark']}>
    {(visible, setVisible) => (
      <>
        <Wrapper>
          {/* <Banner
            title="Build Your dreams with us"
            desc="极致工作 快乐生活"
            backgroundImage="//cdn.byai.com/static/official-website/about/about_banner.svg"
            mobileBackgroundImage={BACKGOURND_XS}
            text1="社会招聘"
            text2="校园招聘"
            onBtn1Click={ () => window.open('https://app.mokahr.com/apply/hzbaiying/5279')}
            onBtn2Click={ () => window.open('https://campus.byai.com')}
          /> */}
          <BannerWhite
            minWidthPC="1075px"
            background={[`url(${BANNER_BG}) left 7px top 85px / 210px ,#F9FAFFFF`, '#F9FAFFFF']}
            pcImgs={[
              {
                src: JOIN_US_IMG,
                style: { width: 600, top: 0, right: 0 },
                className: ['animate__fadeInRight', 'animate__ahead_300ms'],
              },
            ]}
            mobileImg={JOIN_US_IMG}>
            <TextArea margin="-50px 0 0" spaces={['20px 48px', '8px 32px']}>
              <Hidden xs sm>
                <BigTitle>
                  <span className="origin-hight">B</span>uild <span className="origin-hight">Y</span>our dreams with us
                </BigTitle>
                <Desc width="548px">极致工作 快乐生活</Desc>
              </Hidden>
              <Visible xs sm>
                <SmallSubTitle>
                  <span className="origin-hight">B</span>uild <span className="origin-hight">Y</span>our dreams with us
                </SmallSubTitle>
                <BigTitle>极致工作 快乐生活</BigTitle>
              </Visible>
              <AboutUsBtnWrap>
                <BlueBtn
                  onClick={() =>
                    window.open('https://www.zhipin.com/gongsir/1f1899216bf70b801HV53tu1FA~~.html?ka=company-jobs')
                  }>
                  社会招聘
                </BlueBtn>
                <WhiteBtn
                  onClick={() =>
                    window.open('https://www.zhipin.com/gongsir/1f1899216bf70b801HV53tu1FA~~.html?ka=company-jobs')
                  }>
                  校园招聘
                </WhiteBtn>
              </AboutUsBtnWrap>
            </TextArea>
          </BannerWhite>
        </Wrapper>
      </>
    )}
  </Layout>
);

export default Join;
