import { Container, Hidden, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import Box from '../../src/components/Box';
import { DescImgCol } from '../../src/components/clew/descImg';
import { Layout } from '../../src/components/Layout';
import VoiceFooter from '../../src/components/order/footer';
import { DataVisualWrapper } from '../../src/components/product';
import FourCol from '../../src/components/quality/FourCol';
import FunctionalItem from '../../src/components/quality/FunctionalItem';
import SolutionsForPC from '../../src/components/quality/SolutionsForPC';
import { BannerImg } from '../../src/components/service';
import { DescCol } from '../../src/components/workPhone/DescContentNew';
import { media } from '../../src/constants/style';

const ability = [
  {
    logo: 'https://cdn.byai.com/static/intro/img/quality/four-col-1.svg',
    title: '全面提升质检效率',
    desc: ['100%覆盖，7x24自动质检', '提高效率，降低成本'],
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/quality/four-col-2.svg',
    title: '多维度智能分析',
    desc: ['客户、坐席、热点等报表自动生成', '辅助策略调整'],
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/quality/four-col-3.svg',
    title: '流程把控',
    desc: ['实时流程质检、话术提醒、智能预警', '提升服务规范性'],
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/quality/four-col-4.svg',
    title: '精准赋能',
    desc: ['3大场景、9大行业多模型沉淀', '精准赋能每一个客户'],
  },
];

const scenesList = [
  {
    src: 'https://cdn.byai.com/static/intro/img/quality/scene-1.png',
    title: '客服服务质量检测',
    desc: '质检客服接待客户来电的录音，判断客服的服务质量是否达标',
  },
  {
    src: 'https://cdn.byai.com/static/intro/img/quality/scene-2.png',
    title: '销售专业度管控',
    desc: '质检电销人员与客户的通话录音，检测销售的专业度',
  },
  {
    src: 'https://cdn.byai.com/static/intro/img/quality/scene-3.png',
    title: '客户价值挖掘',
    desc: '从海量的客户录音中，挖掘客户需求和市场价值',
  },
  {
    src: 'https://cdn.byai.com/static/intro/img/quality/scene-4.png',
    title: '社会舆情分析',
    desc: '质检政务热线电话录音，分析来电群众关心的问题',
  },
];

const solutionData = [
  {
    title: '金融',
    imgUrl: 'https://cdn.byai.com/static/intro/img/quality/su-left-1.png',
    label: ['款项催收', '大额核实', '产品销售', '客户服务'],
    content: (
      <div>
        <p>
          金融行业内很多业务都会产生大量的电话录音，对于电话录音的质检不仅是为了质量控制，更能够挖掘电话录音中存在的业务机会。电话录音是宝贵的数据资源，如何高效开发这些资源是关键。
        </p>
        <p>
          基于高性能语音识别（ASR）技术和语音分离技术，将海量录音数据进行智能化的自动语音转文本、话者分离、关键词检出、语速分析、静音分析、情绪检测等核心技术产品，可大大提高金融行业的质检效率，解决人工质检低效率、高成本、难覆盖的问题，提升服务质量与管理水平、降低企业运营成本、挖掘更多潜在商机、提高风险管控，辅助业务经营决策。
        </p>
      </div>
    ),
  },
  {
    title: '教育',
    imgUrl: 'https://cdn.byai.com/static/intro/img/quality/su-left-2.png',
    label: ['电销获客', '课后服务', '电话约课'],
    content: (
      <div>
        <p>
          教育行业售前售后都会产生大量课程顾问和班主任的录音，需要从中寻找是否有影响客户体验的话术或行为出现，对问题加以改进和处理。传统依靠人工质检，质检率不到2%。而且缺乏客观性、成本高，加上质检样本覆盖率低，无法整合分析判断座席服务的问题出在哪里。
        </p>
        <p>
          基于高性能语音识别（ASR）技术和语音分离技术，将海量录音数据进行智能化的自动语音转文本、话者分离、关键词检出、语速分析、静音分析、情绪检测等核心技术产品，可大大提高教育行业的质检效率，解决人工质检低效率、高成本、难覆盖的问题，完善和提升服务品质、轻松聚焦核心问题、提升客户体验，提高学员满意度，打造良好口碑。
        </p>
      </div>
    ),
  },
  {
    title: '物流',
    imgUrl: 'https://cdn.byai.com/static/intro/img/quality/su-left-3.png',
    label: ['运输管理', '司机热线', '企业客诉', '在线客服'],
    content: (
      <div>
        <p>
          随着物流企业信息化的建设，物流服务的核心转变为平台服务、司机与用户的三者关系、对客服、司机的管理逐渐成为物流企业生存发展的关键因素。因此对于服务的电话录音的全量质检变得尤为重要。
        </p>
        <p>
          基于高性能语音识别（ASR）技术和语音分离技术，将海量录音数据进行智能化的自动语音转文本、话者分离、关键词检出、语速分析、静音分析、情绪检测等核心技术产品，可大大物流/汽车服务行业的质检效率，解决人工质检低效率、高成本、难覆盖的问题，完善和提升服务品质、轻松聚焦核心问题、提升司机体验，提高客户满意度，打造良好口碑。
        </p>
      </div>
    ),
  },
];

const FunctionalData = [
  {
    iconUrl: 'https://cdn.byai.com/static/intro/img/quality/fn-1.png',
    name: '文本质检',
  },
  {
    iconUrl: 'https://cdn.byai.com/static/intro/img/quality/fn-2.png',
    name: '流程质检',
  },
  {
    iconUrl: 'https://cdn.byai.com/static/intro/img/quality/fn-3.png',
    name: '实时监控',
  },
  {
    iconUrl: 'https://cdn.byai.com/static/intro/img/quality/fn-4.png',
    name: '投诉预警',
  },
  {
    iconUrl: 'https://cdn.byai.com/static/intro/img/quality/fn-5.png',
    name: '风险分级',
  },
  {
    iconUrl: 'https://cdn.byai.com/static/intro/img/quality/fn-6.png',
    name: '热点分析',
  },
  {
    iconUrl: 'https://cdn.byai.com/static/intro/img/quality/fn-7.png',
    name: '意图挖掘',
  },
  {
    iconUrl: 'https://cdn.byai.com/static/intro/img/quality/fn-8.png',
    name: '话术挖掘',
  },
];

const Slogan = styled.div`
  line-height: 120px;
  font-size: 36px;
  text-align: center;
  box-sizing: border-box;
  font-weight: bold;
  ${media.phone`
      line-height: 125px;
      font-size: 36px;;
      background-color: #F8F9FB;
  `}
`;

const FunctionalItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 1140px;
  ${media.phone`
    width: 540px;
  `}
`;

const QualityWrapper = styled.div`
  h3 {
    font-weight: 500;
    margin-top: 10px;
  }
  .banner-desc {
    white-space: nowrap;
  }
  .p-wrapper > p {
    font-size: 17px;
    line-height: 36px;
  }
  .data-visual-wrapper {
    &.translate-x {
      transform: translateX(-20px);
      .text-translate-x {
        transform: translateX(-30px);
        h3 {
          white-space: nowrap;
        }
      }
    }
    ${media.phone`
      &.translate-x {
        transform: none;
        .text-translate-x {
          transform: none;
        }
      }
      h3 {
        font-size: 20px;
      }
    `}
  }
  .more-scenes-link {
    margin-bottom: 80px;
    ${media.phone`
      height: 122px;
      font-size: 16px;
      margin-bottom: 0;
      display: flex;
      a {
        color: #0D1924 !important;
        margin-bottom: 30px;
      }
    `}
  }
`;

const Quality = () => (
  <Layout>
    {(visible, setVisible) => (
      <QualityWrapper>
        <BannerImg
          title="智能质检"
          desc="针对催收、客服、电销等场景，100%覆盖，多维度分析"
          desc2="全面提升语音质检效率"
          text="立即体验"
          backgroundImage="https://cdn.byai.com/static/intro/img/quality/banner-pc-new.png"
          mobileBackgroundImage="https://cdn.byai.com/static/intro/img/quality/banner-mobile-new.png"
          onBtnClick={() => setVisible(true)}
        />
        <FourCol title1="全方位检测语音/文本质量&nbsp;&nbsp;提升质检效率" ability={ability} bac="#fff" titleBreak />
        <DataVisualWrapper>
          <Container>
            <Row className="data-visual-wrapper">
              <DescCol lg={10} md={10} sm={24}>
                <h3>多形式录音导入</h3>
                <h3>灵活配置质检方案</h3>
                <Visible md lg xl xxl xxxl>
                  <div className="p-wrapper">
                    <p>支持十余种格式音频本地上传，支持API接入</p>
                    <p>与呼叫/客服系统无缝对接</p>
                  </div>
                </Visible>
              </DescCol>
              <DescImgCol lg={14} md={14} sm={24}>
                <img src="https://cdn.byai.com/static/intro/img/quality/desc-col-1.png" alt="" />
              </DescImgCol>
            </Row>
          </Container>
        </DataVisualWrapper>
        <DataVisualWrapper odd>
          <Container>
            <Row className="data-visual-wrapper translate-x">
              <DescImgCol lg={14} md={14} sm={24}>
                <img src="https://cdn.byai.com/static/intro/img/quality/desc-col-2.png" alt="" />
              </DescImgCol>
              <DescCol lg={10} md={10} sm={24} className="text-translate-x">
                <h3>强大的质检引擎</h3>
                <h3>高性能语音转写&分离技术</h3>
                <Visible md lg xl xxl xxxl>
                  <div className="p-wrapper">
                    <p>分析语音特征，识别静音、语速、抢话；</p>
                    <p>识别情绪，检测坐席服务态度；</p>
                    <p>识别关键词，分析高频词汇；</p>
                    <p>检测对话逻辑，分析坐席话术专业度。</p>
                  </div>
                </Visible>
              </DescCol>
            </Row>
          </Container>
        </DataVisualWrapper>
        <DataVisualWrapper>
          <Container>
            <Row className="data-visual-wrapper">
              <DescCol lg={10} md={10} sm={24}>
                <h3>丰富的行业质检模型</h3>
                <h3>全面提升准确率&召回率</h3>
                <Visible md lg xl xxl xxxl>
                  <div className="p-wrapper">
                    <p>催收、服务、电销三大场景，金融、教育、银行等9大行业</p>
                    <p>质检模型可自定义，灵活可配的建模规则，简单高效。</p>
                  </div>
                </Visible>
              </DescCol>
              <DescImgCol lg={14} md={14} sm={24}>
                <img src="https://cdn.byai.com/static/intro/img/quality/desc-col-3.png" alt="" />
              </DescImgCol>
            </Row>
          </Container>
        </DataVisualWrapper>
        <DataVisualWrapper odd>
          <Container>
            <Row className="data-visual-wrapper translate-x">
              <DescImgCol lg={14} md={14} sm={24}>
                <img src="https://cdn.byai.com/static/intro/img/quality/desc-col-4.png" alt="" />
              </DescImgCol>
              <DescCol lg={10} md={10} sm={24} className="text-translate-x">
                <h3>多维度质检结果分析</h3>
                <h3>快速定位问题，助力决策</h3>
                <Visible md lg xl xxl xxxl>
                  <div className="p-wrapper">
                    <p>可视化报表呈现质检结果，客户画像、坐席标签、热点词汇；</p>
                    <p>等报表一键生成，可自定义报表统计维度；</p>
                    <p>调听质检问题关联的录音，定位具体问题。</p>
                  </div>
                </Visible>
              </DescCol>
            </Row>
          </Container>
        </DataVisualWrapper>
        <DataVisualWrapper>
          <Container>
            <Row className="data-visual-wrapper">
              <DescCol lg={10} md={10} sm={24}>
                <h3>智能高效，快速作业</h3>
                <Visible md lg xl xxl xxxl>
                  <div className="p-wrapper">
                    <p>强大的语音处理引擎，高效完成质检工作。</p>
                    <p>1个质检机器人1天可质检3万分钟的录音</p>
                    <p>支持文字检索录音，轻松定位目标录音</p>
                  </div>
                </Visible>
              </DescCol>
              <DescImgCol lg={14} md={14} sm={24}>
                <img src="https://cdn.byai.com/static/intro/img/quality/desc-col-5.png" alt="" />
              </DescImgCol>
            </Row>
          </Container>
        </DataVisualWrapper>
        {/* <UsedScenes
          dataList={scenesList}
        />
        <Row justify="center">
            <TradeMoreCol className="more-scenes-link">
                <Link href="/solutions">
                    <a style={{ color: '#2F82F8' }}>
                        <span>
                            更多场景，由你定义
                            <i className="iconfont iconchakangengduojiantou" />
                        </span>
                    </a>
                </Link>
            </TradeMoreCol>
        </Row> */}
        <Slogan>更多典型功能</Slogan>
        <FunctionalItemWrapper>
          {FunctionalData.map(data => (
            <FunctionalItem {...data} />
          ))}
        </FunctionalItemWrapper>

        <Slogan>行业解决方案</Slogan>

        <SolutionsForPC data={solutionData} />
        <Box pb={['20px', '20px', '40px']} width={['100%', '100%', '1140px']} mx="auto">
          <Slogan>他们都在用</Slogan>
          <Visible md lg xl xxl xxxl>
            <img src="https://cdn.byai.com/static/intro/img/smart-marketing/PC-logo.png" />
          </Visible>
          <Hidden md lg xl xxl xxxl>
            <img src="https://cdn.byai.com/static/intro/img/smart-marketing/APP-logo.png" />
          </Hidden>
        </Box>
        <VoiceFooter
          title="和42000+顶级企业一起，探索大数据+AI智能的语音质检"
          btn="免费体验"
          mTitle1="和42000+顶级企业一起探索"
          mTitle2="大数据+AI智能的运营与销售"
          img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
          onBtnClick={() => setVisible(true)}
        />
      </QualityWrapper>
    )}
  </Layout>
);

export default Quality;
