import axios from 'axios';
import { NextFunctionComponent } from 'next';
import { Visible } from 'react-grid-system';
import { Layout } from '../../src/components/Layout';
import { FormType } from '../../src/components/TryForm';
import CustomerIconsBlock from '../../src/components/common/CustomerIconsBlock';
import Advantage from '../../src/components/homepage/version2023/advantage';
import SceneSolution from '../../src/components/scene-solution';
import { Wrapper } from '../../src/components/voice-robot/style';
import { FOOTER_BG } from '../../src/constants/img-urls';
import { BANNER_LIST, MOBILE_SCENE_SOLUTION_LIST } from '../../src/constants/plat';
import { HOST_ENUM } from '../../src/lib/utils';
import { IndustryCarousel } from '../../src/retail/components/IndustryCarousel';
import { IndustryCarouselMobile } from '../../src/retail/components/IndustryCarouselMobile';
import SceneSolutionMobile from '../../src/retail/components/scene-solution';
import ByVoiceFooter from '../../src/components/common/ByVoiceFooter';

const HomePage: NextFunctionComponent<{ data: any }> = ({ data }) => {
  return (
    <>
      <Layout hostType={HOST_ENUM.PF_HOST} headPlaceholder={[false, false]} headFontStyle={['light', 'light']}>
        {(visible, setFormVisible) => (
          <Wrapper>
            <Visible md lg xl xxl xxxl>
              <IndustryCarousel dataList={BANNER_LIST} />
              {/* <AIEmployee /> */}
              <SceneSolution
                onJumpClick={() => {
                  setFormVisible(true, FormType.CUSTOMER);
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
                title="场景解决方案"></SceneSolution>
            </Visible>
            <Visible xs sm>
              <IndustryCarouselMobile dataList={BANNER_LIST} />
              <SceneSolutionMobile
                dataList={MOBILE_SCENE_SOLUTION_LIST}
                onJumpClick={() => {
                  setFormVisible(true, FormType.CUSTOMER);
                }}
              />
            </Visible>

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
