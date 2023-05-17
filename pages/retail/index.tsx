import axios from 'axios';
import { NextFunctionComponent } from 'next';
import { Visible, Hidden } from 'react-grid-system';
import styled from 'styled-components';
import { Layout } from '../../src/components/Layout';
import { FormType } from '../../src/components/TryForm';
import CustomerIconsBlock from '../../src/components/common/CustomerIconsBlock';
import Advantage from '../../src/components/homepage/version2023/advantage';
import AiSolution from '../../src/components/ai-solution/index2023';
import CustomerSolution from '../../src/components/ai-solution/customerTips';
import VPane from '../../src/components/scene-solution/VPane';
import { Wrapper } from '../../src/components/voice-robot/style';
import { FOOTER_BG } from '../../src/constants/img-urls';
import { NEW_BANNER, BANNER_LIST, MOBILE_SCENE_SOLUTION_LIST, STRATEGY_LIST } from '../../src/constants/retail';
import { HOST_ENUM, scrollIntoOffset } from '../../src/lib/utils';
import { IndustryCarouselMobile as IndustryCarouselOld } from '../../src/retail/components/IndustryCarouselMobile';
import StrategyMobile from '../../src/retail/components/StrategyMobile';
import SceneSolution from '../../src/components/scene-solution-2023';
import Play from './play';
import ByVoiceFooter from '../../src/components/common/ByVoiceFooter';
import AI from '../../src/retail/components/ai';
import Strategy from './strategy-2023';
import BannerWhite from '../../src/components/common/BannerWhite';
import { TextArea } from '../../src/components/common/BannerTextElements';
import imgurl from '../../img.url.js';
import SceneSolutionMobile from '../../src/retail/components/scene-solution';
const BANNER_BG = `${imgurl}/about_banner_bg.png`;
const JOIN_US_IMG = `${imgurl}/retail_carousel.png`;

const BigTitle = styled.div`
  margin-top: 17px;
  font-size: 48px;
  line-height: 60px;
  color: rgba(26, 26, 26, 1);
  font-weight: 600;
  @media (max-width: 768px) {
    font-size: 32px;
font-weight: 500;
letter-spacing: 0px;
line-height: 47px;
margin-top: 47px !important;
width: 100%;
  }
`;
const Desc = styled.div`
  margin-top: 16px;
  font-size: 20px;
  line-height: 34px;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
  @media (max-width: 768px) {
    font-size: 16px;
font-weight: 400;
letter-spacing: 0px;
line-height: 26px;
  }
  
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
    width: 112px;
height: 40px;
opacity: 1;
border-radius: 5.33px;
background: rgba(43, 88, 249, 1);
font-size: 16px;
font-weight: 500;
line-height: 40px;
margin-top: 20px;
  }
`;
const SmallLabel = styled.div`
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  line-height: 26px;
  margin-top: 8px;
`;
const BagLabel = styled.div`
  font-size: 18px;
  font-family: PingFangSC-Semibold, PingFang SC;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  line-height: 26px;
  margin-top: 8px;
  & + & {
    margin-top: 0;
  }
`;
const Down = styled.div`
.m-bg-arror {
  position: absolute;
  top: 656px;
  left: 50%;
  transform: translate(-50%, 0);
  animation: jump 2s infinite;
  z-index: 10;
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
`

const HomePage: NextFunctionComponent<{ data: any }> = ({ data }) => {
  return (
    <>
      <Layout hostType={HOST_ENUM.DS_HOST} headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
        {(visible, setFormVisible) => (
          <Wrapper>
            <Visible md lg xl xxl xxxl>
              <BannerWhite
                background={[`url(${BANNER_BG}) right top ,rgba(246, 252, 255, 1)`, 'rgba(246, 252, 255, 1)']}
                pcImgs={[
                  {
                    src: JOIN_US_IMG,
                    style: { width: 644, height: 496, top: 0, right: 0 },
                    className: ['animate__fadeInRight', 'animate__ahead_300ms'],
                  },
                ]}
                mobileImg={JOIN_US_IMG}>
                <TextArea spaces={['', '']}>
                  <Hidden xs sm>
                    <BigTitle>
                      品牌零售
                      <br />
                      智能用户运营解决方案
                    </BigTitle>
                    <Desc>
                      通过对话式AI助力品牌实现「极致用户体验+极致
                      <br />
                      ROI」的全域营销服务
                    </Desc>
                    <BlueBtn onClick={() => window.open('/form?formType=1')}>预约体验</BlueBtn>
                  </Hidden>
                </TextArea>
              </BannerWhite>
              <Strategy />
              <SceneSolution
                onJumpClick={() => {
                  setFormVisible(true, FormType.CUSTOMER);
                }}
                infoList={[
                  {
                    tabName: '会员召回',
                    videoSrc:
                      'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/retail/%E4%BC%9A%E5%91%98%E5%8F%AC%E5%9B%9E.mp4',
                    btnStr: '免费领取AI会员增长解决方案',
                    videoTitle: '百应「AI电话会员交互」案例demo',
                    content: [
                      {
                        title: ['高效激活沉睡会员', '实现老客批量召回'],
                        content: <div>全域触点管理，提升会员召回率和活跃度。</div>,
                      },
                      {
                        title: ['一年前下单的消费者', '还是你的用户吗?'],
                        hiddenBtn: true,
                        content: (
                          <VPane
                            infoList={[
                              ['品牌忠诚度低', '难留存'],
                              ['渠道触达效果差', '难激活'],
                              ['过度营销成骚扰', '难转化'],
                            ]}></VPane>
                        ),
                      },
                      {
                        title: ['AI做老客召回的', '应用实践效果'],
                        specialBtnStr: '立即开启GMV增长',
                        content: (
                          <VPane
                            infoList={[
                              ['下单转化率', '3%-5%'],
                              ['客单价：高出其他渠道', '20%-50%'],
                              ['数据利用率：短信触达的', '5-10倍'],
                              ['ROI', '8-100'],
                            ]}></VPane>
                        ),
                      },
                    ],
                  },
                  {
                    tabName: '私域引流',
                    videoSrc:
                      'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/retail/%E7%A7%81%E5%9F%9F%E5%BC%95%E6%B5%81.mp4',
                    videoTitle: '百应「AI语音私域落粉」案例demo',
                    btnStr: '免费领取私域加微解决方案',
                    content: [
                      {
                        title: ['从0-1搭建私域流量池', '实现规模化落粉'],
                        content: <div>精细化、自动化打造高价值用户场域 </div>,
                      },
                      {
                        title: ['为什么我们说', '所有品牌都需要私域？'],
                        hiddenBtn: true,
                        content: (
                          <>
                            <div>公域获客成本高，用户触达难度大</div>
                            <div>平台用户易流失，粉丝挽留无抓手</div>
                            <div>品类竞争压力大，品牌心智难建立</div>
                          </>
                        ),
                      },
                      {
                        title: ['相比传统加粉', '用AI做私域的优势'],
                        specialBtnStr: '立即开启私域增长',
                        content: (
                          <VPane
                            infoList={[
                              ['接通率', '60%-75%', <SmallLabel>触达效率更高 </SmallLabel>],
                              ['加粉率', '18%-35%', <SmallLabel>转化率更高 </SmallLabel>],
                              ['加粉成本', '2-5元', <SmallLabel>转化率更高 </SmallLabel>],
                            ]}></VPane>
                        ),
                      },
                    ],
                  },
                  {
                    tabName: '用户服务',
                    videoSrc:
                      'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/retail/%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E8%A7%86%E9%A2%91.mp4',
                    btnStr: '免费领取数智化提升方案',
                    videoTitle: '百应「用户调研」录音demo',
                    content: [
                      {
                        title: ['每个用户都满意的', '品牌AI管家'],
                        content: <div>从不缺席用户需要品牌的重要时刻</div>,
                      },
                      {
                        title: ['90%品牌都会遇到的', '用户服务痛点'],
                        hiddenBtn: true,
                        content: (
                          <>
                            <div>人工服务成本高，员工行为难管理</div>
                            <div>服务通知打开率低，用户体验差</div>
                            <div>传统渠道触达，即时体验难满足</div>
                          </>
                        ),
                      },
                      {
                        title: ['AI语音赋能营销服务', '降本增效?'],
                        specialBtnStr: '立即开启数智化服务提升',
                        content: (
                          <VPane
                            infoList={[
                              ['人力成本节约', '85%', <SmallLabel>大幅降低成本</SmallLabel>],
                              ['客服效率提升', '100%', <SmallLabel>提升服务效率</SmallLabel>],
                              ['满意度提升', '30%', <SmallLabel>提升客户满意度</SmallLabel>],
                            ]}></VPane>
                        ),
                      },
                    ],
                  },
                  {
                    tabName: '私域运营',
                    btnStr: '免费领取私域运营解决方案',
                    imgSrcList: [
                      {
                        src: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/retail/%E5%9B%BE3.png',
                      },
                    ],
                    content: [
                      {
                        title: ['用户生命周期运营', '打造最佳私域转化模型'],
                        content: <div>无时无刻的关注，恰到好处的链接</div>,
                      },
                      {
                        title: ['你是否还在对用户进行', '无序的重复触达？'],
                        hiddenBtn: true,
                        content: (
                          <>
                            <div>多渠道无序管理，骚扰客户体验差</div>
                            <div>内容未精准触达，打扰用户掉粉多</div>
                            <div>TOP导购难复制，转化模型难沉淀</div>
                          </>
                        ),
                      },
                      {
                        title: ['AI助力品牌实现', '“0成本加粉”'],
                        specialBtnStr: '立即开启私域增长',
                        content: (
                          <VPane
                            contentWidth="123px"
                            contentML="24px"
                            infoList={[
                              [
                                '多维度标签管理',
                                '',
                                <>
                                  <BagLabel>跨渠道用户</BagLabel>
                                  <BagLabel>数据360</BagLabel>
                                </>,
                              ],
                              [
                                '精准营销策略',
                                '',
                                <>
                                  <BagLabel>用户触达</BagLabel>
                                  <BagLabel>千人千面</BagLabel>
                                </>,
                              ],
                              [
                                '数据分析和管理',
                                '',
                                <>
                                  <BagLabel>沉淀私域</BagLabel>
                                  <BagLabel>最佳转化模型</BagLabel>
                                </>,
                              ],
                            ]}></VPane>
                        ),
                      },
                    ],
                  },
                ]}
                title="AI赋能零售品牌全域增长，打造核心用户价值"
                desc="助力品牌高效引流获客、营销增长、精细化运营，提升会员体验和业绩增量"
              />
              <AiSolution></AiSolution>
              <CustomerSolution></CustomerSolution>
              <ByVoiceFooter
                title="立即体验AI时代的新一代用户运营平台"
                desc="用“AI”构建你和用户的“亲密关系”；共建存量时代的增长引擎。"
                btnText="与我联系"
                background={`url(${FOOTER_BG})`}
                onClick={() => {
                  window.open('/form?formType=1');
                }}
              />
              {/* <Play /> */}
            </Visible>
            <Visible xs sm>
              {/* <Down>
            <img
              onClick={() => {
                scrollIntoOffset('#STRAGETYMOBILE', 50);
              }}
              src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/mobile/bg/arror.png"
              className="m-bg-arror"
            />
            </Down> */}
              <BannerWhite
                background={[`url(${BANNER_BG}) right top ,rgba(246, 252, 255, 1)`, 'rgba(246, 252, 255, 1)']}
                pcImgs={[
                  {
                    src: JOIN_US_IMG,
                    style: { width: 644, height: 496, top: 0, right: 0 },
                    className: ['animate__fadeInRight', 'animate__ahead_300ms'],
                  },
                ]}
                mobileImg={JOIN_US_IMG}>
                <div style={{ padding: '0 8px' }}>
                  <BigTitle>
                    品牌零售
                    <br />
                    智能用户运营解决方案
                  </BigTitle>
                  <Desc>
                    针对零售行业会员增长需求，设计用户运营策略，通过对话式AI助力品牌实现「极致用户体验+极致ROI」的全域营销服务
                  </Desc>
                  <BlueBtn onClick={() => window.open('/form?formType=1')}>预约体验</BlueBtn>
                </div>
              </BannerWhite>
              {/* {STRATEGY_LIST.map(item => (
                <StrategyMobile key={item.desc} {...item} />
              ))} */}
              <Strategy></Strategy>
              <SceneSolutionMobile
                dataList={MOBILE_SCENE_SOLUTION_LIST}
                onJumpClick={() => {
                  setFormVisible(true, FormType.CUSTOMER);
                }}
              />
              <AiSolution></AiSolution>
              <CustomerSolution></CustomerSolution>
              <ByVoiceFooter
                title="立即体验AI时代的新一代用户运营平台"
                desc="用“AI”构建你和用户的“亲密关系”；共建存量时代的增长引擎。"
                btnText="与我联系"
                background={`url(${FOOTER_BG})`}
                onClick={() => {
                  window.open('/form?formType=1');
                }}
              />
            </Visible>
            {/* <AIEmployee /> */}

            {/* <Advantage></Advantage> */}
            {/* <CustomerIconsBlock padding="73px 0 83px" /> */}

            {/* <ByVoiceFooter
              title={
                <>
                  <Visible md lg xl xxl xxxl>
                    <span>点击获取专属品牌增长解决方案</span>
                  </Visible>
                  <Visible xs sm>
                    <span>
                      点击获取
                      <br />
                      专属品牌增长解决方案
                    </span>
                  </Visible>
                </>
              }
              desc="百应零售行业专家免费诊断"
              btnText="与我联系"
              background={`url(${FOOTER_BG})`}
              onClick={() => {
                let url = retailUrl(`/form?formType=1`);
                window.open(url);
              }}
            /> */}
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
