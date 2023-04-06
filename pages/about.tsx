import * as React from 'react';
import { ScreenClassRender, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { Brief, Certificate, Course, CourseXS } from '../src/components/about';
import { DescContent } from '../src/components/about/DescContent';
import Vision from '../src/components/about/vision';
import { NewsBanner } from '../src/components/homepage/NewsBanner';
import { Layout } from '../src/components/Layout';
import VoiceFooter from '../src/components/order/footer';
import { Intro, Title } from '../src/components/service';
import TeamIntro from '../src/components/TeamIntro';
import { HOST_ENUM } from '../src/lib/utils';
import { NEWS_LIST } from './index-old';

const BACKGOURND_XS = 'https://cdn.byai.com/static/official-website/home/guanyuwomen.png';

const SERVICE_DEPLOY = [
  {
    icon: '//cdn.byai.com/static/official-website/about/tubiao1.png',
    title: '使命',
    desc: '通过创新让这个世界变得更好',
  },
  {
    icon: '//cdn.byai.com/static/official-website/about/tubiao2.png',
    title: '愿景',
    desc: '成为全球最具创新力，最以客户为中心的品牌',
    descSecond: '成为最能让员工实现个人价值和获得幸福的公司',
  },
  {
    icon: '//cdn.byai.com/static/official-website/about/tubiao3.png',
    title: '价值观',
    desc: '客户第一 团队协作 诚实正直',
    descSecond: '创新 激情 敬业',
  },
];

const COURSE_TIME = [
  {
    time: '2016.10.01',
    desc: '百应（杭州数心网络科技有限公司）成立',
  },
  {
    time: '2016.10.15',
    desc: '入驻浙江省梦想小镇',
  },
  {
    time: '2016.12.31',
    desc: '荣获浙江省政府天使梦想基金',
  },
  {
    time: '2017.01.06',
    desc: '成为阿里云金牌合作伙伴',
  },
  {
    time: '2017.01.15',
    desc: '阿米巴数千万天使轮融资',
  },
  {
    time: '2017.06.01',
    desc: '成为阿里云ET城市大脑战略合作伙伴',
  },
  {
    time: '2017.09.19',
    desc: '入选2017年杭州市科技型初创企业培育工程名单（雏鹰计划）',
  },
  {
    time: '2017.09.22',
    desc: '荣获阿里巴巴诸神之战全球创客大赛优秀项目奖',
  },
  {
    time: '2017.12.25',
    desc: '获政府扶植入选为“杭州市高新技术企业”',
  },
  {
    time: '2018.04',
    desc: '阿里云生态科技先锋ITP',
  },
  {
    time: '2018.05.01',
    desc: '阿米巴资本6000万Pre-A轮融资',
  },
  {
    time: '2018.08',
    desc: '新四板挂牌上市',
  },
  {
    time: '2019.05.05',
    desc: '获光信资本领投1.2亿元A轮融资',
  },
  {
    time: '2019.06.25',
    desc: '获恒生电子、信雅达亿元级战略投资',
  },
  {
    time: '2019.07',
    desc: '成为UCloud战略合作伙伴',
  },
  {
    time: '2019.08',
    desc: '成为华为云生态战略合作伙伴',
  },
  {
    time: '2020.02',
    desc: '智能疫情通知回访系统助力全民战“疫”',
  },
  {
    time: '2020.06',
    desc: '入选2020杭州准独角兽企业',
  },
  {
    time: '2020.07',
    desc: '获中国信通院  企业级SaaS可信云认证',
  },
  {
    time: '2020.10',
    desc: '入选腾讯SaaS加速器 共创数智未来生态',
  },
  {
    time: '2020.10',
    desc: '斩获2020数字中国数字政务赛道亚军',
  },
  {
    time: '2021.04',
    desc: '连续2年荣登杭州准独角兽榜单',
  },
  {
    time: '2021.06',
    desc: '入选杭州市重点建设人工智能应用场景',
  },
  {
    time: '2021.12',
    desc: '获评浙江省高新技术企业研究开发中心',
  },
  {
    time: '2021.12',
    desc: '荣获 2021 年浙江省软件核心竞争力企业',
  },
  {
    time: '2022.03',
    desc: '入选浙江省2021年度人工智能典型应用场景',
  },
  {
    time: '2022.04',
    desc: '通过全球软件领域最高级别 CMMI5 认证',
  },
  {
    time: '2022.06',
    desc: '获评腾讯千域计划年度优秀合作伙伴',
  },
];

const Wrapper = styled.div`
  background: #ffffff;
`;

const About: React.SFC<{ hostType?: HOST_ENUM }> = ({ hostType = HOST_ENUM.HOST }) => (
  <Layout hostType={hostType}>
    {(visible, setVisible) => (
      <>
        <Wrapper>
          {/* <Banner
            title="Build Your dreams with us"
            desc="极致工作 快乐生活"
            text="成为我们一员"
            backgroundImage="//cdn.byai.com/static/official-website/about/about_banner.svg"
            mobileBackgroundImage={BACKGOURND_XS}
            onBtnClick={() =>
              window.open('https://www.lagou.com/gongsi/154789.html')
            }
          /> */}
          <div style={{ marginTop: 85 }}></div>
          <Brief
            backgroundImage="//cdn.byai.com/static/official-website/about/bg1.png"
            cover="//cdn.byai.com/static/official-website/about/baiying-1222.png"
          />
          <NewsBanner title="百应头条" newsList={NEWS_LIST} />
          {/* <Intro>
            <Title title="百应文化" desc="BYAI CULTURE" />
            <Container>
              <Row justify="center">
                {SERVICE_DEPLOY.map((item, index) => (
                  <Col lg={8} md={12} xs={24}>
                    <Deploy
                      icon={item.icon}
                      title={item.title}
                      desc={item.desc}
                      descSecond={item.descSecond}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </Intro> */}
          <Vision />
          <Intro backgroundImage="//cdn.byai.com/static/official-website/about/bg2.png">
            <Title title="百应历程" desc="BYAI HISTORY" />
            <Visible md lg xl xxl xxxl>
              <Course courseList={COURSE_TIME.reverse()} />
            </Visible>
            <Visible xs sm>
              <CourseXS courseList={COURSE_TIME} />
            </Visible>
          </Intro>
          <TeamIntro title="百应团队" desc="BYAI TEAM" />
          <Intro>
            <Title title="证书及奖项" desc="THE CERTIFICATES AND AWARDS" />
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
                return <Certificate limit={limit} />;
              }}
            />
          </Intro>
          <DescContent
            title={<Title style={{ paddingTop: 0, paddingBottom: 48 }} title="联系我们" desc="CONTACT US" />}
            bannerList={[
              {
                name: '杭州',
                title: '总部',
                address: '浙江省杭州市余杭区梦想小镇天使村8幢、11幢',
                imageUrl: 'https://cdn.byai.com/static/official-website/about/hangzhou.png',
                openUrl: 'https://surl.amap.com/uEIZUw50rg',
              },
              {
                name: '北京',
                title: '分公司',
                address: '北京市朝阳区望京SOHO T3B座2105',
                imageUrl: 'https://cdn.byai.com/static/official-website/about/beijing-v2.png',
                openUrl: 'https://surl.amap.com/2MvfXG1b7cT',
              },
              {
                name: '上海',
                title: '分公司',
                address: '上海市闵行区申长路518号 虹桥绿谷广场C幢4楼411室',
                imageUrl: 'https://cdn.byai.com/static/official-website/about/shanghai.png',
                openUrl: 'https://surl.amap.com/4mOaeSz1menc',
              },
              {
                name: '广州',
                title: '分公司',
                address: '广州天河区体育东路116号 财富广场西塔1301（1号线体育中心B出口）',
                imageUrl: 'https://cdn.byai.com/static/official-website/about/guangzhou.png',
                openUrl: 'https://surl.amap.com/v6WgE4A5fb',
              },
              {
                name: '深圳',
                title: '分公司',
                address: '深圳市福田区滨河大道9289号 京基滨河时代大厦A座1206',
                imageUrl: 'https://cdn.byai.com/static/official-website/about/shenzhen.png',
                openUrl: 'https://surl.amap.com/rdkZis1jaxM',
              },
              {
                name: '成都',
                title: '分公司',
                address: '四川省成都市高新区天府二街东方希望天祥广场B栋601室',
                imageUrl: 'https://cdn.byai.com/static/official-website/about/chengdu.png',
                openUrl: 'https://surl.amap.com/XiYQeMr4kc',
              },
            ]}
          />
          <VoiceFooter
            title="百应科技，值得信赖"
            mTitle1="百应科技，值得信赖"
            btn="免费体验"
            img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
            onBtnClick={() => setVisible(true)}
          />
        </Wrapper>
      </>
    )}
  </Layout>
);

export default About;
