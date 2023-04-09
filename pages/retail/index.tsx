import axios from 'axios';
import { NextFunctionComponent } from 'next';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { Layout } from '../../src/components/Layout';
import { FormType } from '../../src/components/TryForm';
import CustomerIconsBlock from '../../src/components/common/CustomerIconsBlock';
import Advantage from '../../src/components/homepage/version2023/advantage';
import SceneSolution from '../../src/components/scene-solution/index2023';
import AiSolution from '../../src/components/ai-solution/index2023';
import VPane from '../../src/components/scene-solution/VPane';
import { Wrapper } from '../../src/components/voice-robot/style';
import { FOOTER_BG } from '../../src/constants/img-urls';
import { NEW_BANNER, MOBILE_SCENE_SOLUTION_LIST, STRATEGY_LIST } from '../../src/constants/retail';
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
              <IndustryCarousel dataList={NEW_BANNER} />
              <SceneSolution
              />
              <AiSolution></AiSolution>
              <Strategy />
              <Play />
            </Visible>
            <Visible xs sm>
              <IndustryCarouselMobile dataList={NEW_BANNER} />
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
