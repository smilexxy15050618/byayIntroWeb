import React, { ReactNode } from 'react';
import { Container, Hidden, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import Box from '../../src/components/Box';
import { Layout } from '../../src/components/Layout';
import FunctionalItem from '../../src/components/product/FunctionalItem';
import MobileFunctionalItem from '../../src/components/product/MobileFunctionalItem';
import SolutionMobile from '../../src/components/product/SolutionMobile';
import { BannerImg } from '../../src/components/service';
import { DataVisualWrapper } from '../../src/components/smart-marketing';
import { DescCol, DescImgCol } from '../../src/components/smart-marketing/desc';
import SmartMarketingFooter from '../../src/components/smart-marketing/footer';
import FourColNew from '../../src/components/smart-marketing/four-col-new';
import HoverChange from '../../src/components/smart-marketing/hover-change';
import { Education, Finance, Logistics } from '../../src/components/smart-marketing/svg';
import { media } from '../../src/constants/style';

const functionItemData = [
  {
    desktopIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/PC-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/PC-%E9%A2%84%E6%B5%8B%E5%BC%8F%E5%A4%96%E5%91%BC.png',
    mobileIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/APP-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/APP-%E9%A2%84%E6%B5%8B%E5%BC%8F%E5%A4%96%E5%91%BC.png',
    description:
      '系统内置预测算法，根据空闲坐席数量、平均通话时长、号码接通率等参数，实时控制外呼电话的数量，最大化坐席利用率。',
    name: '预测式外呼',
  },
  {
    desktopIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/PC-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/PC-%E7%A7%BB%E5%8A%A8APP%E7%AB%AF.png',
    mobileIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/APP-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/APP-%E7%A7%BB%E5%8A%A8APP%E7%AB%AF.png',
    description: '公海私池数据与CRM实时同步，销售出门在外也能随时联系客户。',
    name: '移动APP端',
  },
  {
    desktopIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/PC-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/PC-%E8%87%AA%E5%8A%A8%E6%8E%A5%E5%90%AC.png',
    mobileIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/APP-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/APP-%E8%87%AA%E5%8A%A8%E6%8E%A5%E5%90%AC.png',
    description: '系统外呼接通的电话自动分配给坐席，提升坐席接听效率。',
    name: '自动接听',
  },
  {
    desktopIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/PC-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/PC-%E8%AF%9D%E5%90%8E%E5%A4%84%E7%90%86.png',
    mobileIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/APP-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/APP-%E8%AF%9D%E5%90%8E%E5%A4%84%E7%90%86.png',
    description: '坐席结束通话后，余留出一段时间给坐席整理上一通通话内容。',
    name: '话后处理',
  },
  {
    desktopIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/PC-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/PC-%E6%9D%A5%E7%94%B5%E5%BC%B9%E5%B1%8F.png',
    mobileIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/APP-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/APP-%E6%9D%A5%E7%94%B5%E5%BC%B9%E5%B1%8F.png',
    description: '有通话来电，坐席侧有弹屏提示。',
    name: '来电弹屏',
  },
  {
    desktopIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/PC-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/PC-%E5%AE%A2%E6%88%B7%E6%A0%87%E7%AD%BE.png',
    mobileIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/APP-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/APP-%E5%AE%A2%E6%88%B7%E6%A0%87%E7%AD%BE.png',
    description: '自定义客户标签，信息留存更高效，以便后续提供针对性的服务。',
    name: '客户标签',
  },
  {
    desktopIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/PC-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/PC-%E9%80%9A%E8%AF%9D%E5%BD%95%E9%9F%B3.png',
    mobileIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/APP-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/APP-%E9%80%9A%E8%AF%9D%E5%BD%95%E9%9F%B3.png',
    description: '支持导出每一条已完成的客户记录，包括客户基本属性、通话录音文件、通话录音文字。',
    name: '通话录音',
  },
  {
    desktopIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/PC-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/PC-%E8%87%AA%E5%8A%A8%E9%87%8D%E6%8B%A8.png',
    mobileIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/APP-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/APP-%E8%87%AA%E5%8A%A8%E9%87%8D%E6%8B%A8.png',
    description: '针对有必要再次拨打跟进的客户，设置自动重拨规则，省去后续手动筛选拨打的麻烦。',
    name: '自动重拨',
  },
  {
    desktopIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/PC-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/PC-%E6%95%B0%E6%8D%AE%E6%8A%A5%E8%A1%A8.png',
    mobileIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/APP-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/APP-%E6%95%B0%E6%8D%AE%E6%8A%A5%E8%A1%A8.png',
    description: '通过强大的数据分析能力，将客户数据灵活运用，助力企业营销。',
    name: '数据报表',
  },
  {
    desktopIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/PC-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/PC-%E5%9D%90%E5%B8%AD%E7%9B%91%E6%8E%A7.png',
    mobileIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/APP-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/APP-%E5%9D%90%E5%B8%AD%E7%9B%91%E6%8E%A7.png',
    description: '坐席组负责人可监控坐席。实时呈现坐席工作情况，为合理分配坐席任务提供数据参考。',
    name: '坐席监控',
  },
  {
    desktopIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/PC-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/PC-%E6%95%B0%E6%8D%AE%E6%9D%83%E9%99%90.png',
    mobileIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/APP-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/APP-%E6%95%B0%E6%8D%AE%E6%9D%83%E9%99%90.png',
    description:
      '企业可根据自身情况设置不同角色，如销售、开发、设计师等，各角色具有不同操作权限，支持新增、编辑、删除角色。',
    name: '数据权限',
  },
  {
    desktopIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/PC-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/PC-%E8%AE%BE%E5%A4%87%E6%A3%80%E6%B5%8B.png',
    mobileIconUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/PC-%E6%9B%B4%E5%A4%9A%E5%85%B8%E5%9E%8B%E5%8A%9F%E8%83%BDicon/PC-%E8%AE%BE%E5%A4%87%E6%A3%80%E6%B5%8B.png',
    description: '外呼前可进行设备检测，保障外呼过程的稳定性。',
    name: '设备检测',
  },
];

const SmartMarketingWrapper = styled.div`
  font-size: 18px;
  ${media.phone`
    font-size: 14px;
  `}
  h1 {
    font-size: 56px;
    ${media.phone`
      font-size: 38px;
    `}
  }
  h2 {
    font-size: 42px;
    ${media.phone`
      font-size: 28px;
    `}
  }
  h3 {
    font-size: 36px;
    ${media.phone`
      font-size: 23px;
    `}
  }
  h4 {
    font-size: 30px;
    ${media.phone`
      font-size: 20px;
    `}
  }
  h5 {
    font-size: 17px;
  }
  h1,
  h2 {
    border: none;
    /* margin: 0;
    padding: 0; */
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.4;
  }
  img {
    margin: 0;
  }
  .carousel-indicators {
    bottom: -80px;
  }
  .carousel-indicators li {
    background-color: #3154d4;
  }
`;

const ability = [
  {
    logo: 'https://cdn.byai.com/static/intro/img/smart-marketing/icon1.png',
    desc: (
      <p>
        提供优质线路规划与落地
        <br />
        解决手机卡封号问题
      </p>
    ),
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/smart-marketing/icon2.png',
    desc: (
      <p>
        丰富的功能模块
        <br />
        专注人工外呼效率提升
      </p>
    ),
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/smart-marketing/icon3.png',
    desc: (
      <p>
        AI赋能电销场景
        <br />
        人机协同高效促转化
      </p>
    ),
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/smart-marketing/icon4.png',
    desc: (
      <p>
        无缝衔接CRM
        <br />
        API与SDK标准且丰富
      </p>
    ),
  },
];

const visualDataSource = [
  {
    title1: '批量任务外呼',
    title2: '拨号效率指数级提升',
    descList: ['批量数据一键导入，支持多倍并发。', '通话自动接听，有效缩短坐席等待时间。'],
    imgurl: 'https://cdn.byai.com/static/intro/img/smart-marketing/%E9%85%8D%E5%9B%BE1.png',
    mobileImgUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/%E7%A7%BB%E5%8A%A8%E7%AB%AF-%E9%85%8D%E5%9B%BE1.png',
  },
  {
    title1: '过滤无效号码',
    title2: '帮助企业降本增效',
    descList: ['天盾防护策略，自动过滤一些异常号码（空号、停机等）。', '自定义通话黑名单，精准外呼意向客户。'],
    imgurl: 'https://cdn.byai.com/static/intro/img/smart-marketing/%E9%85%8D%E5%9B%BE2.png',
    mobileImgUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/%E7%A7%BB%E5%8A%A8%E7%AB%AF-%E9%85%8D%E5%9B%BE2.png',
  },
  {
    title1: 'AI赋能电销场景',
    title2: '人机协同高效促转化',
    descList: [
      'AI 机器人前置接待，高意向客户人工无缝切入通话，坐席有效利用率可提升6-8倍。',
      'AI 话术辅助，实时转译的客户问题，精准推荐业务知识，秒变“销售专家”。',
    ],
    imgurl: 'https://cdn.byai.com/static/intro/img/smart-marketing/%E9%85%8D%E5%9B%BE3.png',
    mobileImgUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/%E7%A7%BB%E5%8A%A8%E7%AB%AF-%E9%85%8D%E5%9B%BE3.png',
  },
  {
    title1: '班长席在线监控',
    title2: '实时掌握坐席工作情况',
    descList: [
      '实时呈现坐席工作情况，为合理分配坐席任务提供数据参考。',
      '开放坐席、坐席组、全公司数据报表维度，目标达成过程可监控。',
    ],
    imgurl: 'https://cdn.byai.com/static/intro/img/smart-marketing/%E9%85%8D%E5%9B%BE4.png',
    mobileImgUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/%E7%A7%BB%E5%8A%A8%E7%AB%AF-%E9%85%8D%E5%9B%BE4.png',
  },
  {
    title1: '轻量级CRM',
    title2: '轻松管理名下客户',
    descList: [
      '销售私池：客户信息多维度筛选，精细化管理意向客户，加速销售进程。',
      '公司公海：线索可分配给指定销售跟进，派发任务更高效。',
    ],
    imgurl: 'https://cdn.byai.com/static/intro/img/smart-marketing/%E9%85%8D%E5%9B%BE5.png',
    mobileImgUrl:
      'https://cdn.byai.com/static/intro/img/smart-marketing/%E7%A7%BB%E5%8A%A8%E7%AB%AF-%E9%85%8D%E5%9B%BE5.png',
  },
];

interface ISceneItem {
  title: string;
  imgUrl: ReactNode;
  label: string[];
  content: ReactNode;
}

const sceneDataSource: ISceneItem[] = [
  {
    title: '教育',
    imgUrl: <Education />,
    label: ['新客邀约体验', '老客户回访', '满意度调研', '教师招聘'],
    content: (
      <p>
        行业内很多教培机构大部分业绩都是来自于电话邀约，每个线索资源都来之不易，如何高效开发资源是关键。
        <br />
        <br />
        通过AI机器人智能外呼+销售同步监听模式，重复且标准的邀约话术交由机器人完成，销售可同步实时监听通话过程，高价值客户无缝切入通话促转化。通话结束后，销售可以一键为客户打标签，客户信息同步回传至CRM，以便企业后续提供针对性的服务或转化。
      </p>
    ),
  },
  {
    title: '金融',
    imgUrl: <Finance />,
    label: ['贷前主动营销', '保险续保提醒', '售后回访', '消金业务催收'],
    content: (
      <p>
        金融业务同质化、金融脱媒等一系列趋势下，客户对于金融产品和服务的选择越来越多，如何在多方竞争中挖掘客户需求、发展客户资源是消费金融机构的当务之急。
        <br />
        <br />
        在营销获客方面，针对积累了大量交易样本数据，通过人工智能和大数据分析技术，对潜在意向客户进行二次跟进，高效筛选合格借款人，自动转接给人工坐席处理，大幅提高获客的成本效益。
      </p>
    ),
  },
  {
    title: '物流',
    imgUrl: <Logistics />,
    label: ['邀约司机', '售后回访'],
    content: (
      <p>
        线上营销作为互联网时代物流行业一种常见的手段，不同渠道获取线索质量高低不一，如何将这些线索高效转化是关键。
        <br />
        <br />
        通过使用AI可视化监听功能提升潜在客户筛查效率，当AI机器人前置挖掘客户需求，人工可同步监听多路通话，高价值客户无缝切入通话。人工工作效率预计提升5倍以上。
      </p>
    ),
  },
];

const Slogan = styled.div`
  height: 266px;
  line-height: 266px;
  font-size: 36px;
  text-align: center;
  box-sizing: border-box;
  ${media.phone`
      height: 125px;
      line-height: 125px;
      font-size: 36px;;
      background-color: #F8F9FB;
  `}
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1136px;
  margin: 0 auto;
  ${media.phone`
    padding: 58px 18px 26px;
    width: auto;
    justify-content: space-around;
  `}
`;

const SmartMarketing = () => {
  return (
    <Layout>
      {(visible, setVisible) => (
        <SmartMarketingWrapper>
          <BannerImg
            title="智能电销 "
            desc="专注电销场景，让销售效率指数级提升。"
            desc2=""
            text="立即体验"
            backgroundImage="https://cdn.byai.com/static/intro/img/smart-marketing/%E6%99%BA%E8%83%BD%E7%94%B5%E9%94%80-PC-banner.png"
            mobileBackgroundImage="https://cdn.byai.com/static/intro/img/smart-marketing/%E6%99%BA%E8%83%BD%E7%94%B5%E9%94%80-APP-banner.png"
            onBtnClick={() => setVisible(true)}
          />
          <FourColNew title1="从销售到管理" title2="一站式解决方案" ability={ability} bac="#fff" titleBreak />
          {visualDataSource.map(({ title1, title2, descList, imgurl, mobileImgUrl }, index) => (
            <DataVisualWrapper key={index} odd={index % 2 === 1}>
              <Container>
                <Row className="data-visual-wrapper translate-x">
                  <DescCol lg={10} md={10} sm={24} className="desc-col-title">
                    <Visible md lg xl xxl xxxl>
                      <h3>
                        {title1}
                        <span>，</span>
                      </h3>
                      <h3>{title2}</h3>
                    </Visible>
                    <Hidden md lg xl xxl xxxl>
                      <Box as="section" mt="40px" mb="20px">
                        <h3>{title1}</h3>
                        <h3>{title2}</h3>
                      </Box>
                    </Hidden>
                    <Visible md lg xl xxl xxxl>
                      <div className="p-wrapper">
                        {descList.map(descItem => (
                          <p key={descItem}>{descItem}</p>
                        ))}
                      </div>
                    </Visible>
                  </DescCol>
                  <DescImgCol lg={14} md={14} sm={24}>
                    <Visible md lg xl xxl xxxl>
                      <img src={imgurl} alt="" />
                    </Visible>
                    <Hidden md lg xl xxl xxxl>
                      <img src={mobileImgUrl} alt="" />
                    </Hidden>
                  </DescImgCol>
                </Row>
              </Container>
            </DataVisualWrapper>
          ))}
          <Slogan>更多典型功能</Slogan>
          <Hidden xs sm>
            <ContentWrap>
              {functionItemData.map(item => (
                <FunctionalItem {...item} />
              ))}
            </ContentWrap>
          </Hidden>
          <Visible xs sm>
            <ContentWrap>
              {functionItemData.map(item => (
                <MobileFunctionalItem {...item} />
              ))}
            </ContentWrap>
          </Visible>
          <Slogan>行业解决方案</Slogan>
          <Visible md lg xl xxl xxxl>
            <HoverChange dataSource={sceneDataSource} />
            <Box textAlign="center" py={5}>
              <a href="https://www.byai.com/solutions" style={{ color: '#3153D4' }}>
                更多行业案例&emsp;→
              </a>
            </Box>
          </Visible>
          <Hidden md lg xl xxl xxxl>
            <SolutionMobile data={sceneDataSource} />
          </Hidden>
          <Box pb={['20px', '20px', '40px']} width={['100%', '100%', '1140px']} mx="auto">
            <Slogan>他们都在用</Slogan>
            <Visible md lg xl xxl xxxl>
              <img src="https://cdn.byai.com/static/intro/img/smart-marketing/PC-logo.png" />
            </Visible>
            <Hidden md lg xl xxl xxxl>
              <img src="https://cdn.byai.com/static/intro/img/smart-marketing/APP-logo.png" />
            </Hidden>
          </Box>
          <SmartMarketingFooter
            title="百应智能电销，助力企业实现营销破局"
            btn="立即体验"
            mTitle1="百应智能电销"
            mTitle2="助力企业实现营销破局"
            img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
            onBtnClick={() => setVisible(true)}
          />
        </SmartMarketingWrapper>
      )}
    </Layout>
  );
};

export default SmartMarketing;
