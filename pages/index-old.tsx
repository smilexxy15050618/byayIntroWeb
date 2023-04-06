import Link from 'next/link';
import * as React from 'react';
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import Partner from '../src/components/aicc/partner';
import Box from '../src/components/Box';
import { CommentBanner } from '../src/components/CommentBanner';
import { DescWrapper } from '../src/components/DescWrapper';
import { AdvantageCard } from '../src/components/homepage/AdvantageCard';
import { DataCircleContent } from '../src/components/homepage/DataCircleContent';
import { DescCol, DescContent, DescImgCol, IconWrpaaer } from '../src/components/homepage/DescContent';
import { FirstBanner } from '../src/components/homepage/FirstBanner';
import { MarketingContent } from '../src/components/homepage/MarketingContent';
import { NewsBanner } from '../src/components/homepage/NewsBanner';
import { TradeCard } from '../src/components/homepage/TradeCard';
import { TryContent } from '../src/components/homepage/TryContent';
import { Layout } from '../src/components/Layout';
import VoiceFooter from '../src/components/order/footer';
import { media } from '../src/constants/style';

const VISIT_AUDIO = '//cdn.byai.com/static/official-website/audio/visit.wav';
const CONSULT_AUDIO = '//cdn.byai.com/static/official-website/audio/consult.mp3';
const SWITCH_AUDIO = '//cdn.byai.com/static/official-website/audio/switch.mp3';

const MARKET_IMG = '//cdn.byai.com/static/official-website/animation/marketing.svg';
const SALES_IMG = '//cdn.byai.com/static/official-website/animation/sales.svg';
const SERVICE_IMG = '//cdn.byai.com/static/official-website/animation/services.svg';

const TRADE1_IMG = '//cdn.byai.com/static/official-website/home/tu1.png';
const TRADE2_IMG = '//cdn.byai.com/static/official-website/home/tu2.png';
const TRADE3_IMG = '//cdn.byai.com/static/official-website/home/tu3.png';
const ADVANTAGE_BG = '//cdn.byai.com/static/official-website/home/xian2.png';
const ADVANTAGE_1 = '//cdn.byai.com/static/official-website/home/tubiao1.png';
const ADVANTAGE_2 = '//cdn.byai.com/static/official-website/home/tubiao2.png';
const ADVANTAGE_3 = '//cdn.byai.com/static/official-website/home/tubiao3.png';
const TRY_BG_1 = '//cdn.byai.com/static/official-website/home/bg1.png';
const DATA_VISUAL_BG = '//cdn.byai.com/static/official-website/animation/data_visual_bg.svg';
const DATA_VISUAL_BG_XS = '//cdn.byai.com/static/official-website/home/shoujiduan-3.png';
const DATA_VISUAL = '//cdn.byai.com/static/official-website/animation/data_visual.svg';
export const STSTEM_BG = '//cdn.byai.com/static/official-website/home/bg-chanpintixi.png';
export const PRODUCT_BG1 = '//cdn.byai.com/static/official-website/home/zhineng1.png';
export const PRODUCT_BG2 = '//cdn.byai.com/static/official-website/home/zhineng2.png';
export const PRODUCT_BG3 = '//cdn.byai.com/static/official-website/home/zhineng3.png';
const PRODUCT_BG4 = '//cdn.byai.com/static/official-website/home/bg-chanpintixi.png';
const DATA_BG = '//cdn.byai.com/static/official-website/home/bg5.png';

export const NEWS_LIST = [
  {
    title: '百应“易窗”远程政务服务平台入选《2020中国智慧城市厂商全景报告》',
    href: 'https://mp.weixin.qq.com/s/KQ4iaMVzQDrIYLmafQljIA',
  },
  {
    title: '上海市政协委员团参访人工智能体验中心，百应“易窗”数字窗口获认可',
    href: 'https://mp.weixin.qq.com/s/j3rozfuKhn7_-1t6ug4UKw',
  },
  {
    title: '百应荣获GMTIC 2020年度最佳MarTech领军者和优秀人工智能技术平台两项大奖',
    href: 'https://mp.weixin.qq.com/s/xEXNO9nRkvVXgkW81Lyq7Q',
  },
  {
    title: '百应科技王磊：群星尽头 一呼百应 | 解码数字新浙商',
    href: 'https://mp.weixin.qq.com/s/WLavVkEnMZAoqJvi1FnSzA',
  },
  {
    title: '百应与阿里云、腾讯云同获中国信通院可信云企业级SaaS服务认证',
    href: 'https://mp.weixin.qq.com/s/hHY-TdMvmY4We0mxOa4MoQ',
  },
];

const BANNER_COMMOM_PRE_URL = '//cdn.byai.com/static/official-website/animation/2020-07-27/%E7%94%BB%E6%9D%BF%20';

const bannerList = [
  {
    name: '营销云',
    firstLineText: '数智化营销闭环',
    firstDescText: '搭建全渠道、全场景触点，建立营销获客矩阵，帮助企业建设全生命周期营销体系。',
    contentImage: `${BANNER_COMMOM_PRE_URL}11.svg`,
    iconList: [
      { url: `${BANNER_COMMOM_PRE_URL}53@4x.png`, desc: '智能搜客' },
      { url: `${BANNER_COMMOM_PRE_URL}73@4x.png`, desc: '集客营销' },
      { url: `${BANNER_COMMOM_PRE_URL}74@4x.png`, desc: '智能投放' },
      { url: `${BANNER_COMMOM_PRE_URL}83@4x.png`, desc: '短信拓客' },
    ],
  },
  {
    name: '销售云',
    firstLineText: '全流程自动化管理',
    firstDescText: '销售流程自动化，数据支撑销售过程精细化管理，全面赋能销售团队业绩增长。',
    contentImage: `${BANNER_COMMOM_PRE_URL}15.svg`,
    iconList: [
      { url: `${BANNER_COMMOM_PRE_URL}86@4x.png`, desc: '客户管理' },
      { url: `${BANNER_COMMOM_PRE_URL}82@4x.png`, desc: '销售名片' },
      { url: `${BANNER_COMMOM_PRE_URL}75@4x.png`, desc: '工作手机' },
      { url: `${BANNER_COMMOM_PRE_URL}72@4x.png`, desc: '智能电销' },
    ],
  },
  {
    name: '联络云',
    firstLineText: '全链路智能客服',
    firstDescText: '多渠道、多模态、人机融合、打造全链路服务，增强客户体验和提升转化率。',
    contentImage: `${BANNER_COMMOM_PRE_URL}16.svg`,
    iconList: [
      { url: `${BANNER_COMMOM_PRE_URL}71@4x.png`, desc: '云呼叫中心' },
      { url: `${BANNER_COMMOM_PRE_URL}88@4x.png`, desc: '在线客服' },
      { url: `${BANNER_COMMOM_PRE_URL}80@4x.png`, desc: '视频客服' },
      { url: `${BANNER_COMMOM_PRE_URL}78@4x.png`, desc: '协同工单' },
    ],
  },
  {
    name: '分析云',
    firstLineText: '全渠道分析与洞察',
    firstDescText: '基于数据中台，全链路数据挖掘和精准分析，助力企业决策更智慧。',
    contentImage: `${BANNER_COMMOM_PRE_URL}19.svg`,
    iconList: [
      { url: `${BANNER_COMMOM_PRE_URL}85@4x.png`, desc: '线索转化分析' },
      { url: `${BANNER_COMMOM_PRE_URL}70@4x.png`, desc: '销售过程分析' },
      { url: `${BANNER_COMMOM_PRE_URL}69@4x.png`, desc: '客户/销售画像' },
      { url: `${BANNER_COMMOM_PRE_URL}68@4x.png`, desc: '自定义报表' },
    ],
  },
  {
    name: '智能云',
    firstLineText: '一站式AI赋能',
    firstDescText: '共享AI中台底层能力，多模态AI机器人赋能业务各个环节，提供一站式智能沟通解决方案。',
    contentImage: `${BANNER_COMMOM_PRE_URL}18.svg`,
    iconList: [
      { url: `${BANNER_COMMOM_PRE_URL}67@4x.png`, desc: 'AI引擎' },
      { url: `${BANNER_COMMOM_PRE_URL}63@4x.png`, desc: '统一训练平台' },
      { url: `${BANNER_COMMOM_PRE_URL}64@4x.png`, desc: '智能机器人' },
      { url: `${BANNER_COMMOM_PRE_URL}65@4x.png`, desc: '智能质检' },
    ],
  },
  {
    name: '协同云',
    firstLineText: '敏捷智能办公',
    firstDescText: '建立以目标为核心的工作执行体系，将审批、管理、协作融于一体，开启数智化办公。',
    contentImage: `${BANNER_COMMOM_PRE_URL}17.svg`,
    iconList: [
      { url: `${BANNER_COMMOM_PRE_URL}87@4x.png`, desc: '智能审批' },
      { url: `${BANNER_COMMOM_PRE_URL}81@4x.png`, desc: '任务和日程' },
      { url: `${BANNER_COMMOM_PRE_URL}76@4x.png`, desc: '智能汇报' },
    ],
  },
];

const TradeMoreCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: rgba(13, 25, 36, 1);
  line-height: 22px;
  margin-top: 60px;
  span {
    cursor: pointer;
  }
  .iconfont {
    display: inline-block;
    margin-left: 10px;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    color: #3153d4;
    .iconfont {
      font-size: 20px;
      transform: translateX(5px);
    }
  }
`;
const TryWrapper = styled(Col)`
  background: url(${TRY_BG_1});
  background-size: cover;
  height: 290px;
  ${media.phone`
    height: auto;
  `}
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  h3 {
    font-size: 36px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 50px;
    margin-top: 80px;
    margin-bottom: 30px;
    ${media.phone`
      width: 85vw;
      margin-top: 50px;
      text-align: center;
      font-size: 23px;
      line-height: 1.5;
      font-weight: 300;
    `}
  }
  .btn {
    width: 190px;
    height: 50px;
    box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 1);
    border-radius: 25px;
    border: 2px solid rgba(255, 255, 255, 1);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    color: #fff;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #fff;
      color: #3054d4;
    }
    ${media.phone`
      height: 40px;
      border-width: 1px;
      margin-bottom: 40px;
    `}
  }
`;
const DataVisualWrapper = styled.div`
  > div {
    height: 100%;
    > div {
      height: 100%;
    }
  }
  .data-visual-wrapper {
    height: 100%;
    align-items: center !important;
    ${media.phone`
      > div {
        justify-content: flex-start;
        padding-top: 5vh;
      }
      flex-direction: column-reverse;
      padding: 0 16px;
    `}
    > div {
      height: 100%;
      ${media.phone`
        height: auto;
        margin-top: 50px;
      `}
    }
  }
  /* background-image: url(${DATA_VISUAL_BG}); */
  @media (max-width: 768px) {
    background-image: url(${`${BANNER_COMMOM_PRE_URL}23-bg.png`});
    /* background-size: cover; */
  }
  background: #f8f9fb no-repeat bottom center/contain;
  height: 820px;
`;
export const PRODUCT_WRAPPER = styled.div`
  width: 100%;
  .product-list-wrapper {
    width: 100%;
    box-sizing: border-box;
    padding: 40px 70px;
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    border: 1px dashed rgba(49, 83, 212, 1);
    ${media.phone`
      width: 100%;
      margin: 0 auto;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 0 16px;
      border: none;
    `}/* background-position: top, right, bottom, left; */
    /* background-repeat: repeat-x, repeat-y; */
    /* background-size: 10px 1px, 1px 10px; */
  }
  .transform {
    display: flex;
    height: 74px;
    color: #3153d4;
    justify-content: center;
    align-items: center;
    .iconfont {
      font-size: 48px;
    }
  }
`;
export const partner = [
  'https://cdn.byai.com/node_front/1572610685731/%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8.png',
  'https://cdn.byai.com/node_front/1572610710237/%E4%B8%AD%E5%9B%BD%E8%81%94%E9%80%9A.png',
  'https://cdn.byai.com/node_front/1572610728974/%E4%B8%AD%E5%9B%BD%E7%94%B5%E4%BF%A1.png',
  'https://cdn.byai.com/node_front/1571811865505/360.png',
  'https://cdn.byai.com/node_front/1572610779650/%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4.png',
  'https://cdn.byai.com/node_front/1572610794829/%E8%85%BE%E8%AE%AF.png',
  'https://cdn.byai.com/node_front/1575273096165/%E5%8C%97%E4%BA%AC%E7%A4%BE%E4%BF%9D%E5%B1%80.png',
  'https://cdn.byai.com/node_front/1572610833802/%E5%9B%BD%E5%AE%B6%E7%94%B5%E7%BD%91.png',
  ,
  'https://cdn.byai.com/node_front/1572610848839/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E6%B3%95%E9%99%A2.png',
  'https://cdn.byai.com/node_front/1572610872751/%E4%B8%AD%E5%9B%BD%E7%A4%BE%E4%BC%9A%E4%BF%9D%E9%99%A9.png',
  'https://cdn.byai.com/static/intro/img/part/58tongcheng.png',
  'https://cdn.byai.com/node_front/1572611056312/%E5%B9%B3%E5%AE%89%E9%93%B6%E8%A1%8C.png',
  'https://cdn.byai.com/node_front/1572611090842/%E4%B8%AD%E5%9B%BD%E9%93%B6%E8%A1%8C.png',
  'https://cdn.byai.com/node_front/1572611108617/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%AF%BF.png',
  'https://cdn.byai.com/node_front/1572611126075/%E6%99%BA%E8%81%94%E6%8B%9B%E8%81%98.png',
  'https://cdn.byai.com/node_front/1572611142485/%E5%AD%A6%E8%80%8C%E6%80%9D.png',
  'https://cdn.byai.com/node_front/1572611158756/%E6%96%B0%E4%B8%9C%E6%96%B9.png',
  'https://cdn.byai.com/node_front/1572611174619/%E5%A4%A7%E6%90%9C%E8%BD%A6.png',
  'https://cdn.byai.com/node_front/1572611196495/%E6%B1%BD%E8%BD%A6%E4%B9%8B%E5%AE%B6.png',
  'https://cdn.byai.com/node_front/1572611213607/%E4%BB%8A%E6%97%A5%E5%A4%B4%E6%9D%A1.png',
];
export default props => {
  const handleAttendMeeting = () => {
    window.open('https://www.huodongxing.com/go/3559666436300');
  };
  return (
    <Layout>
      {(formVisible, setFormVisible) => (
        <>
          <FirstBanner onBtnClick={() => setFormVisible(true)} onAttendMeeting={handleAttendMeeting} />
          <NewsBanner title="百应头条" newsList={NEWS_LIST} />
          <DescContent
            title={
              <>
                数智化客户关系管理平台
                <br />
                构建企业营销、销售、服务的一体化智能增长引擎
              </>
            }
            bannerList={bannerList}
          />
          <DataVisualWrapper>
            <Container>
              <Row className="data-visual-wrapper">
                <Visible md lg xl xxl xxxl>
                  <DescImgCol lg={12} md={12} sm={24}>
                    <img src={`${BANNER_COMMOM_PRE_URL}23.svg`} alt="" style={{ width: '32vw' }} />
                  </DescImgCol>
                </Visible>
                <DescCol lg={12} md={12} sm={24}>
                  <Hidden xs sm>
                    <h3>
                      “双中台”数智引擎
                      <br />
                      构建更全面的客户关系管理平台
                    </h3>
                  </Hidden>
                  <Visible xs sm>
                    <Box fontSize="24px" textAlign="center" fontWeight={500}>
                      “双中台”数智引擎
                      <br />
                      构建更全面的客户关系管理平台
                    </Box>
                  </Visible>
                  <Box
                    mt="10px"
                    maxWidth={['83vw', '83vw', '430px', '430px']}
                    textAlign={['center', 'center', 'left', 'left']}
                    color={'#666'}
                    fontSize={[14, 14, 16, 16]}>
                    基于人工智能+大数据，百应搭建“中台化”底层数智能力，全面赋能6大云产品。帮助企业实现全渠道数据融通，实现精准营销，搭建更高效的人机协同解决方案，让业务持续增长。
                  </Box>
                  <IconWrpaaer pt={[2, 2, 4, 4]} fontSize={[14, 14, 16, 16]}>
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <img src={`${BANNER_COMMOM_PRE_URL}66@4x.png`} />
                      <Box as="span">AI中台</Box>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <img src={`${BANNER_COMMOM_PRE_URL}60@4x.png`} />
                      <Box as="span">数据中台</Box>
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center">
                      <img src={`${BANNER_COMMOM_PRE_URL}61@4x.png`} />
                      <Box as="span">云通信</Box>
                    </Box>
                  </IconWrpaaer>
                </DescCol>
              </Row>
            </Container>
          </DataVisualWrapper>
          <DescWrapper id="record-list" title="百应大数据+AI，让营销从此简单、智能、高效" background={ADVANTAGE_BG}>
            <AdvantageCard
              image={ADVANTAGE_1}
              title="Communication"
              desc="高情商，高智商的人性化智能沟通，99%真人互动感，全自动运行，更高的效率"
              advantage="智能沟通"
            />
            <AdvantageCard
              image={ADVANTAGE_2}
              title="Experience"
              desc="媲美真人沟通的人工智能语音通话，给客户营造真实的互动体验"
              audioList={[
                {
                  title: '接待客户咨询',
                  src: CONSULT_AUDIO,
                },

                {
                  title: '无感人机切换',
                  src: SWITCH_AUDIO,
                },
                {
                  title: '外呼拜访客户',
                  src: VISIT_AUDIO,
                },
              ]}
            />
            <AdvantageCard
              image={ADVANTAGE_3}
              title="Guidance"
              desc="专业客服全程指导，简单易用，资源加持无后顾之忧"
              advantage="全程指导"
            />
          </DescWrapper>
          <MarketingContent
            onBtnClick={() => setFormVisible(true)}
            title={
              <>
                行业深挖，技术沉淀
                <br />
                智能营销我们更专业
              </>
            }
            list={[
              { title: '实力雄厚', desc: '专业团队，10+年实力沉淀' },
              {
                title: '权威认证',
                desc: '三大国际权威认证，银行级数据安全保障',
              },
              {
                title: '服务经验',
                desc: '服务42000+企业/机构，覆盖25+行业细分领域',
              },
            ]}
          />
          <DescWrapper
            title="行业定制，精准营销"
            desc="百应服务于42000+不同行业的企业/机构，针对各行业痛点不断深挖，提供个性化营销策略与产品服务">
            <TradeCard
              align="flex-start"
              coverImage={TRADE1_IMG}
              trade="金融行业"
              company="农业银行、360金融"
              title="人机协同，实现精准营销"
              desc="为金融行业量身定制，构建智能风控体系，实现全流程智能质检；意向客户精准筛选，CRM系统自动沉淀"
              info="痛点：获客成本高、转化率低"
            />
            <TradeCard
              align="center"
              coverImage={TRADE2_IMG}
              trade="互联网行业"
              company="腾讯、今日头条、汽车之家"
              title="高效推广，降低获客成本"
              desc="深耕互联网营销领域，L2C全链路追踪，自动生成线索转化漏斗，帮助企业数字化运营；名片社交裂变，让每次分享都能快速获客"
              info="痛点：推广成本高，渠道质量低"
            />
            <TradeCard
              align="flex-end"
              coverImage={TRADE3_IMG}
              trade="教育行业"
              company="新东方、好未来、环球优路"
              title="轻松接待，洞察用户画像"
              desc="洞察教育行业需求，提供AI客服接待，7*24小时全天候响应；多维度标签标记，打造精准用户画像"
              info="痛点：多渠道接待、接待时长有限"
            />
            <TradeMoreCol lg={24}>
              <Link href="/solutions">
                <a>
                  <span>
                    查看更多
                    <i className="iconfont iconchakangengduojiantou" />
                  </span>
                </a>
              </Link>
            </TradeMoreCol>
          </DescWrapper>
          <TryContent
            lightText="提供25+行业定制解决方案，上手零门槛！"
            boldText="聚焦场景建设，注入增长动力"
            onBtnClick={() => setFormVisible(true)}
          />
          <DataCircleContent
            title="百应以智能营销为核心，解决企业发展痛点"
            dataList={[
              {
                color: '#4266ED',
                value: '12',
                unit: '倍',
                name: '时间利用率',
                action: '提升',
              },
              {
                color: '#ECCF6F',
                value: '72',
                unit: '%',
                name: '人力成本',
                action: '节约',
              },
              {
                color: '#DF6C4F',
                value: '148',
                unit: '%',
                name: '销售业绩',
                action: '提升',
              },
              {
                color: '#1B99A9',
                value: '186',
                unit: '%',
                name: '边际收益',
                action: '提升',
              },
              {
                color: '#02FCA3',
                value: '40',
                unit: '%',
                name: '客户满意度',
                action: '提升',
              },
            ]}
          />
          <Partner title="42000+企业/机构的共同选择" partner={partner} />
          <CommentBanner />
          <VoiceFooter
            title="和42000+企业/机构一起，探索大数据+AI的新的增长方式"
            mTitle1="和42000+企业/机构一起"
            mTitle2="探索大数据+AI的新的增长方式"
            btn="免费体验"
            img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
            onBtnClick={setFormVisible}
          />
        </>
      )}
    </Layout>
  );
};
