import axios from 'axios';
import { NextFunctionComponent } from 'next';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { Layout } from '../../src/components/Layout';
import { FormType } from '../../src/components/TryForm';
import CustomerIconsBlock from '../../src/components/common/CustomerIconsBlock';
import Advantage from '../../src/components/homepage/version2023/advantage';
import SceneSolution from '../../src/components/scene-solution';
import VPane from '../../src/components/scene-solution/VPane';
import { Wrapper } from '../../src/components/voice-robot/style';
import { FOOTER_BG } from '../../src/constants/img-urls';
import { BANNER_LIST, MOBILE_SCENE_SOLUTION_LIST, STRATEGY_LIST } from '../../src/constants/retail';
import { HOST_ENUM } from '../../src/lib/utils';
import { IndustryCarousel } from '../../src/retail/components/IndustryCarousel-2023';
import { IndustryCarouselMobile } from '../../src/retail/components/IndustryCarouselMobile';
import StrategyMobile from '../../src/retail/components/StrategyMobile';
import SceneSolutionMobile from '../../src/retail/components/scene-solution';
import Play from './play';
import Strategy from './strategy';
import ByVoiceFooter from '../../src/components/common/ByVoiceFooter';

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

const HomePage: NextFunctionComponent<{ data: any }> = ({ data }) => {
  return (
    <>
      <Layout hostType={HOST_ENUM.DS_HOST} headPlaceholder={[false, false]} headFontStyle={['light', 'light']}>
        {(visible, setFormVisible) => (
          <Wrapper>
            <Visible md lg xl xxl xxxl>
              <IndustryCarousel dataList={BANNER_LIST} />
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
                        content: <div>从不出席用户需要品牌的重要时刻</div>,
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
                title="场景解决方案"
              />
              <Strategy />
              <Play />
            </Visible>
            <Visible xs sm>
              <IndustryCarouselMobile dataList={BANNER_LIST} />
              <SceneSolutionMobile
                dataList={MOBILE_SCENE_SOLUTION_LIST}
                onJumpClick={() => {
                  setFormVisible(true, FormType.CUSTOMER);
                }}
              />
              {STRATEGY_LIST.map(item => (
                <StrategyMobile key={item.title} {...item} />
              ))}
            </Visible>
            {/* <AIEmployee /> */}

            <Advantage></Advantage>
            <CustomerIconsBlock padding="73px 0 83px" />
            <ByVoiceFooter
              title="就现在，开启AI电话增长之旅"
              desc="留下联系方式，将有AI行业专家为您提供专属服务"
              btnText="与我联系"
              background={`url(${FOOTER_BG})`}
              onClick={() => {
                setFormVisible(true, FormType.CUSTOMER);
              }}
            />
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
