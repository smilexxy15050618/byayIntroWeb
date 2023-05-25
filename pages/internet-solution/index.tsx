import axios from 'axios';
import styled from 'styled-components';
import { NextFunctionComponent } from 'next';
import { Layout } from '../../src/components/Layout';
import {  Hidden, Visible } from 'react-grid-system';
import { TextArea } from '../../src/components/common/BannerTextElements';

import BannerWhite from '../../src/components/common/BannerWhiteNew';
import AI from '../../src/components/internet-solution/ai';
import SceneSolution from '../../src/components/internet-solution/SceneSolution';
import AiSolution from '../../src/components/internet-solution/AiSolution';
import CustomerCase from '../../src/components/internet-solution/CustomerCase';
import SceneSolutionMobile from '../../src/retail/components/scene-solution';
import ByVoiceFooter from '../../src/components/common/ByVoiceFooter';

import { BANNER_LIST, MOBILE_SCENE_SOLUTION_LIST } from '../../src/constants/plat';

import { HOST_ENUM, scrollIntoOffset } from '../../src/lib/utils';
import imgurl from '../../img.url.js';
const JOIN_US_IMG = `${imgurl}/internet-banner.svg`;
const FOOTER_BG = `${imgurl}/by-voice-bg.png`;

const Wrapper = styled.div`
  .m-bg-arror {
    display: none;
    position: absolute;
    top: 626px;
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
    padding: 0 28px;
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
    margin: 0 24px 26px 28px !important;
  }
`;

const BlueBtnWrap = styled.div`
  width: 100%;
  padding: 0 28px;
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
      <Layout hostType={HOST_ENUM.HOST} headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
        {(visible, setFormVisible) => (
          <Wrapper>
            <BannerWhite
              height={['560px', '657px']}
              LinearHeight={['500px', '100%']}
              background={[`rgba(246, 252, 255, 1);`, 'rgba(246, 252, 255, 1)']}
              pcImgs={[
                {
                  src: JOIN_US_IMG,
                  style: { width: 644, height: 496, top: 0, right: 0 },
                  className: ['animate__fadeInRight', 'animate__ahead_300ms'],
                },
              ]}
              mobileStyle={{height:'270px',paddingTop: '21px'}}
              mobileImg={JOIN_US_IMG}>
              <TextArea spaces={['', '']}>
                <Hidden xs sm>
                  <BigTitle>
                    互联网行业
                    <br />
                    数智化运营解决方案
                  </BigTitle>
                  <Desc>
                    构建高转化用户触达模型，深度挖掘会员用户价值，打
                    <br />
                    造更优的沟通服务体验
                  </Desc>
                  <BlueBtn onClick={() => window.open('/form?formType=1')}>立即体验</BlueBtn>
                </Hidden>
                <Visible xs sm>
                  <BigTitle>
                  互联网行业<br/>数智化运营解决方案
                  </BigTitle>
                  <Desc>构建高转化用户触达模型，深度挖掘会员用户价值，打造更优的沟通服务体验</Desc>
                  <BlueBtnWrap>
                    <BlueBtn
                      onClick={() =>
                        window.open('/form?formType=1')
                      }>
                      立即体验
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

            <Visible md lg xl xxl xxxl>    
              <SceneSolution
                onJumpClick={() => {
                  window.open('/form?formType=1');
                }}
                infoList={[
                  {
                    tabName: '用户激活',
                    btnStr: '免费领取激活方案',
                    imgSrcList: [
                      {
                        src: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/platform/%E7%94%A8%E6%88%B7%E6%BF%80%E6%B4%BB1.png',
                      },
                      {
                        src: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/platform/%E7%94%A8%E6%88%B7%E6%BF%80%E6%B4%BB2.png',
                        clsNames: ['animate__fadeInRight'],
                        style: { left: 0 },
                      },
                      {
                        style: { right: 0 },
                        src: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/platform/%E7%94%A8%E6%88%B7%E6%BF%80%E6%B4%BB3.png',
                        clsNames: ['animate__fadeInLeft'],
                      },
                    ],
                    content: [
                      {
                        title: ['当平台上用户活跃度', '持续降低怎么办？'],
                        hiddenBtn: true,
                        content: (
                          <>
                            <div>拉新成本高</div>
                            <div>沉睡用户多</div>
                            <div>用户流失不断</div>
                          </>
                        ),
                      },
                      {
                        title: ['沉睡用户激活', '提升平台MAU'],

                        content: <div>对非活跃用户进行高效触达，拉升用户LTV</div>,
                      },
                      {
                        title: ['流失用户召回', '降低用户流失率'],
                        specialBtnStr: '免费领取召回方案',
                        content: <div>对已流失用户进行召回转化，降低拉新成本</div>,
                      },
                    ],
                  },
                  {
                    tabName: '会员订阅',
                    btnStr: '免费领取续费增长方案',
                    imgSrcList: [
                      {
                        src: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/platform/会员订阅1.png',
                      },
                      {
                        src: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/platform/会员订阅2.png',
                        clsNames: ['animate__fadeInLeft'],
                        style: { left: 0 },
                      },
                      {
                        style: { right: 0 },
                        src: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/platform/会员订阅3.png',
                        clsNames: ['animate__fadeInRight'],
                      },
                    ],
                    content: [
                      {
                        title: ['订阅类平台如何提升', '会员付费转化？'],
                        hiddenBtn: true,
                        content: (
                          <>
                            <div>会员续费率低</div>
                            <div>非会员用户转化难</div>
                            <div>用户体验后流失高</div>
                          </>
                        ),
                      },
                      {
                        title: ['通过AI促进', '过期/到期会员续费转化'],
                        content: <div>对人群包进行精细化分层，定制化外呼策略</div>,
                      },
                      {
                        title: ['精细化策略实现', '非会员用户付费转化'],
                        content: <div>针对不同用户巧妙设置利益点，提升会员吸引力度</div>,
                        specialBtnStr: '免费领取下单转化增长方案',
                      },
                    ],
                  },
                  {
                    tabName: '活动通知',
                    btnStr: '免费领取大促增长方案',
                    imgSrcList: [
                      {
                        src: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/platform/活动通知1.png',
                      },
                      {
                        src: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/platform/活动通知2.png',
                        clsNames: ['animate__fadeInRight'],
                        style: { left: 0 },
                      },
                      {
                        style: { right: 0 },
                        src: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/platform/活动通知3.png',
                        clsNames: ['animate__fadeInLeft'],
                      },
                    ],
                    content: [
                      {
                        title: ['购物类平台业绩提升难', '用户下单率低怎么办？'],
                        hiddenBtn: true,
                        content: (
                          <>
                            <div>消费欲望下降</div>
                            <div>平台竞争压力大</div>
                            <div>触达手段低效</div>
                          </>
                        ),
                      },
                      {
                        title: ['大促期全量活动触达', '提升GMV转化'],
                        content: <div>实现短时间对用户的全量覆盖及个性化触达</div>,
                      },
                      {
                        title: ['平销期活动通知及用户关怀', '双管齐下，拉升LTV'],
                        content: <div>通过AI进行专属活动通知、新品体验及会员关怀</div>,
                        specialBtnStr: '免费领取GMV增长方案',
                      },
                    ],
                  },
                  {
                    tabName: '私域加粉',
                    btnStr: '免费领取私域加微解决方案',
                    imgSrcList: [
                      {
                        src: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/platform/私域加粉1.png',
                      },
                      {
                        src: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/platform/私域加粉2.png',
                        clsNames: ['animate__fadeInRight'],
                        style: { left: 0 },
                      },
                      {
                        style: { right: 0 },
                        src: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/platform/私域加粉3.png',
                        clsNames: ['animate__fadeInLeft'],
                      },
                    ],
                    content: [
                      {
                        title: ['私域引流效率低、成本高', '如何实现高效加粉？'],
                        hiddenBtn: true,
                        content: (
                          <>
                            <div>加粉效率低</div>
                            <div>运营效果不佳</div>
                            <div>粉产难以覆盖加粉成本</div>
                          </>
                        ),
                      },
                      {
                        title: ['AI高效引流，将站内非活跃', '用户引入企微运营'],
                        content: <div>打通私域引流全链路，打造最优转化模型</div>,
                      },
                      {
                        title: ['加粉+销售转化同步进行', '实现“0成本加粉”'],
                        content: <div>通过AI话术及运营策略设计，提升加粉首单转化</div>,
                      },
                    ],
                  },
                ]}
                title="场景解决方案">
              </SceneSolution>
            </Visible>
            <Visible xs sm>
              <SceneSolutionMobile
                dataList={MOBILE_SCENE_SOLUTION_LIST}
                onJumpClick={() => {
                  window.open('/form?formType=1');
                }}
              />
            </Visible>
            <AiSolution />
            <CustomerCase />
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
  // then(({ data }) => data.articleTree.childrenArticles[0].childrenArticles);
  return { data: newsItems.slice(0, 4) };
};
export default HomePage;
