import axios from 'axios';
import styled from 'styled-components';
import { NextFunctionComponent } from 'next';
import { Layout } from '../../src/components/Layout';
import {  Hidden, Visible } from 'react-grid-system';
import { TextArea } from '../../src/components/common/BannerTextElements';
import BannerWhite from '../../src/components/common/BannerWhiteNew';
import AI from '../../src/components/gongAn-synthetical/ai';
import SceneSolution from '../../src/components/gongAn-synthetical/SceneSolution';
import AiSolution from '../../src/components/gongAn-synthetical/AiSolution';
import {CustomerStories} from './components/CustomerStories'
import ByVoiceFooter from '../../src/components/common/ByVoiceFooter';

import { HOST_ENUM, scrollIntoOffset } from '../../src/lib/utils';
import imgurl from '../../img.url.js';
const JOIN_US_IMG = `${imgurl}/gongan-zh-banner.png`;
const FOOTER_BG = `${imgurl}/by-voice-bg.png`;

const Wrapper = styled.div`
  .m-bg-arror {
    position: absolute;
    top: 570px;
    left: 50%;
    transform: translate(-50%, 0);
    animation: jump 2s infinite;
  }
  @keyframes jump {
    0% {
      transform: translate(-50%, 0px);
    }
    50% {
      transform: translate(-50%, 10px);
    }
    100% {
      transform: translate(-50%, 0px);
    }
  }
`;

const BigTitle = styled.div`
  margin-top: 17px;
  font-size: 48px;
  line-height: 60px;
  color: rgba(26, 26, 26, 1);
  font-weight: 600;
  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    font-size: 32px;
    line-height: 47px;
    padding: 0 12px;
    margin-bottom: 8px !important;
  }
`;

const Desc = styled.div`
  margin-top: 16px;
  font-size: 20px;
  line-height: 34px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  @media (max-width: 768px) {
    padding-top: 8px;
    text-align: left;
    font-size: 16px;
    line-height: 26px;
    margin: 0 12px 46px !important;
  }
`;

const BlueBtnWrap = styled.div`
  width: 100%;
  padding: 0 12px;
  align-items: flex-start;
`;

const BlueBtn = styled.div`
  margin-top: 40px;
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
  @media (max-width: 768px) {
    margin-top: 0;
    width: 112px;
    height: 40px;
    font-size: 16px;
    font-weight: 500;
    line-height: 40px;
    color: rgba(255, 255, 255, 1);
    text-align: center;
  }
`;

const HomePage: NextFunctionComponent<{ data: any }> = ({ data }) => {
  return (
    <>
      <Layout hostType={HOST_ENUM.HOST} headPlaceholder={[false, '#F9FAFF']} headFontStyle={['dark', 'dark']}>
        {(visible, setFormVisible) => (
          <Wrapper>
            <BannerWhite
              height={['576px', '657px']}
              LinearHeight={['516px', '100%']}
              background={[`rgba(246, 252, 255, 1)`, 'rgba(246, 252, 255, 1)']}
              pcImgs={[
                {
                  src: JOIN_US_IMG,
                  style: { width: 643, height: 496, top: 10, right: 0 },
                  className: ['animate__fadeInRight', 'animate__ahead_300ms'],
                },
              ]}
              mobileStyle={{height:'270px',paddingTop: '21px'}}
              mobileImg={JOIN_US_IMG}>
              <TextArea spaces={['', '']}>
                <Hidden xs sm>
                  <BigTitle>
                    公安综治
                    <br />
                    智能化解决方案
                  </BigTitle>
                  <Desc>
                    依托人工智能、大数据等先进手段，创新性推出具备咨
                    <br />
                    询、服务、宣传、分享功能的虚拟IP民警
                  </Desc>
                  <BlueBtn onClick={() => window.open('/form?formType=1')}>预约体验</BlueBtn>
                </Hidden>
                <Visible xs sm>
                  <BigTitle>
                  公安综治<br/>智能化解决方案
                  </BigTitle>
                  <Desc>依托人工智能、大数据等先进手段，创新性推出具备咨询、服务、宣传、分享功能的虚拟IP民警</Desc>
                  <BlueBtnWrap>
                    <BlueBtn
                      onClick={() =>
                        window.open('/form?formType=1')
                      }>
                      预约体验
                    </BlueBtn>
                  </BlueBtnWrap>
                </Visible>
              </TextArea>
            </BannerWhite>
            <Visible xs sm>
              <img
                onClick={() => {
                  scrollIntoOffset('#aitsx', 50);
                }}
                src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/mobile/bg/arror.png"
                className="m-bg-arror"
              />
            </Visible> 
            <AI></AI>
            <SceneSolution></SceneSolution>
            <AiSolution />
            <CustomerStories></CustomerStories>
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
    </>
  );
};
// https://document.byai.com/hcapi/wiki?domain=news
HomePage.getInitialProps = async ctx => {
  let newsItems = [];
  try {
    const host = ctx.req.headers.host.startsWith('localhost')
      ? 'http://' + ctx.req.headers.host
      : 'https://' + ctx.req.headers.host;
    console.log('host' + host);
    const res = await axios.get(`${host}/hcapi/wiki?domain=news`);
    // 私域
    let socialNews = res.data.articleTree.childrenArticles.find(item => item.title == '私域');
    // console.log(socialNews, 'socialNews');
    if (socialNews.childrenArticles) {
      socialNews.childrenArticles.forEach(article =>
        newsItems.push({
          title: article.title,
          link:
            (ctx.req.headers.host.startsWith('localhost') ? host + '/retail/anews?id=' : host + '/anews?id=') +
            article._id,
          description: article.textContent,
        }),
      );
    }
  } catch (error) {
    console.log(error);
    newsItems = [];
  }
  return { data: newsItems.slice(0, 4) };
};
export default HomePage;
