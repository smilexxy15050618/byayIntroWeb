import React from 'react';
import { Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { DescImgCol } from '../../src/components/clew/descImg';
import { IndustryCarousel } from '../../src/components/IndustryCarousel';
import { Layout } from '../../src/components/Layout';
import { OtherIntroduction } from '../../src/components/online-service/OtherIntroduction';
import VoiceFooter from '../../src/components/order/footer';
import { DataVisualWrapper, Wrapper } from '../../src/components/product';
import FourCol from '../../src/components/quality/FourCol';
import { BannerImg } from '../../src/components/service';
import { MoreAbility } from '../../src/components/smart-sale/MoreAbility';
import { DescCol } from '../../src/components/workPhone/DescContentNew';
import { media } from '../../src/constants/style';

const Banner = styled.div`
  .banner-title {
    font-size: 56px;
    margin-bottom: 15px;
  }
`;

const OnlineServiceWrapper = styled.div`
  h3 {
    font-weight: 500;
  }
  .translate-x {
    transform: translateX(-50px);
  }
  ${media.phone`
      .translate-x {
        transform: none;
      }
    `}
  .p-wrapper {
    width: 500px;
    ${media.phone`
        width: auto;
      `}
    p {
      font-size: 18px;
      line-height: 36px;
    }
  }
  .icon-wrapper {
    width: 600px;

    transform: translateX(-30px);
    img {
      width: 100%;
      font-weight: 500;
    }
  }
  .desc-col-title {
    h3 {
      width: 510px;
    }
    ${media.phone`
      h3 {
        font-size: 20px;
        font-weight: 500;
      }
    `}
  }
  .title-mobile {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;

    h3 {
      font-weight: 500;
      line-height: 25px;
      font-size: 20px;
      margin: 0;
    }
  }
`;

const BreakTitle = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f9fb;
  &.white {
    background: #fff;
  }
  ${media.phone`
      height: 216px;
    `}

  h2 {
    margin: 0;
    padding: 0;
    font-size: 36px;
    text-align: center;
    border: none;
    div {
      font-weight: 400;
    }
  }
`;

const industryCarouselList = [
  {
    title: '金融',
    icon: 'iconCoin',
    pcSrc:
      'https://cdn.byai.com/static/intro/img/online-service/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D-PC-%E9%87%91%E8%9E%8D.png',
    mobileSrc:
      'https://cdn.byai.com/static/intro/img/online-service/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D-APP-%E9%87%91%E8%9E%8D.png',
    descContent: [
      {
        title: '痛点',
        textList: ['用户咨询问题相相似度高，重复解答消耗较高人力成本', '金融行业对业务知识点要求高，客服培训成本高'],
      },
      {
        title: '方案',
        textList: [
          '客服机器人自动识别意图、解答疑问，降低人力成本',
          '知识库快速查询、知识点自动推荐，客服助理实时辅助，降低培训成本',
        ],
      },
    ],
  },
  {
    title: '教育',
    icon: 'iconBachelorCap',
    pcSrc:
      'https://cdn.byai.com/static/intro/img/online-service/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D-PC-%E6%95%99%E8%82%B2.png',
    mobileSrc:
      'https://cdn.byai.com/static/intro/img/online-service/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D-APP-%E6%95%99%E8%82%B2.png',
    descContent: [
      {
        title: '痛点',
        textList: [
          '网站访问转化率低，转化漏斗数据不全，无法精细化运营',
          '大量重复性问题，消耗人力成本',
          '业务知识多，员工培训和学习成本高',
        ],
      },
      {
        title: '方案',
        textList: [
          '访问轨迹、访问行为自动采集，生成转化漏斗',
          '实时查看访客，主动邀请会话，减少流失',
          '客服机器人自动识别意图、解答疑问，降低人力成本',
          '知识库快速查询、知识点自动推荐，客服助理辅助接待，降低培训成本',
        ],
      },
    ],
  },
  {
    title: '政企',
    icon: 'iconBuilding',
    pcSrc:
      'https://cdn.byai.com/static/intro/img/online-service/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D-PC-%E6%94%BF%E4%BC%81.png',
    mobileSrc:
      'https://cdn.byai.com/static/intro/img/online-service/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D-APP-%E6%94%BF%E4%BC%81.png',
    descContent: [
      {
        title: '痛点',
        textList: ['业务查询及办理工作量大', '线下服务人流量大，人力成本和场地成本高'],
      },
      {
        title: '方案',
        textList: [
          '客服机器人7x24小时全天候服务，减轻人工压力',
          '客服机器人无缝转人工，复杂问题交由人工跟进，服务质量有保障',
          '支持视频、语音通话，可发送图文、文件等多种消息类型，远程服务，便民利民',
        ],
      },
    ],
  },
  {
    title: '电商',
    icon: 'iconShoppingCart',
    pcSrc:
      'https://cdn.byai.com/static/intro/img/online-service/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D-PC-%E7%94%B5%E5%95%86.png',
    mobileSrc:
      'https://cdn.byai.com/static/intro/img/online-service/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D-APP-%E7%94%B5%E5%95%86.png',
    descContent: [
      {
        title: '痛点',
        textList: ['咨询量大，重复问题多，耗时耗力', '服务效果难把控，售后影响客户评价'],
      },
      {
        title: '方案',
        textList: [
          '高效率工作台，统一服务来自多渠道的业务咨询',
          '客服机器人自动接待，降低人力成本',
          '实时监控服务过程，智能质检自动检测，把控服务质量',
        ],
      },
    ],
  },
];

const ability = [
  {
    logo: 'https://cdn.byai.com/static/intro/img/online-service/%E5%85%A8%E6%B8%A0%E9%81%93%E8%BF%9E%E6%8E%A5%E5%AE%A2%E6%88%B7.png',
    title: '全渠道连接客户',
    desc: '全面覆盖网站、微信、APP、微博、抖音等流量入口',
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/online-service/%E5%85%A8%E6%96%B9%E4%BD%8D%E6%B4%9E%E5%AF%9F%E5%AE%A2%E6%88%B7.png',
    title: '全方位洞察客户',
    desc: '自动记录行为轨迹，整合多渠道记录，意向自动打标',
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/online-service/%E5%AF%8C%E5%AA%92%E4%BD%93%E9%AB%98%E6%95%88%E6%B2%9F%E9%80%9A.png',
    title: '富媒体高效沟通',
    desc: '全面支持语音/视频通话、图片、文件、视频，沟通零距离',
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/online-service/%E6%99%BA%E8%83%BD%E5%8C%96%E6%8F%90%E5%8D%87%E6%95%88%E7%9B%8A.png',
    title: '智能化提升效益',
    desc: '客服机器人自动接待，客服助理实时辅助，智能质检自动检测',
  },
];

const moreAbilityList = [
  {
    desc: '多渠道接入',
    src: 'https://cdn.byai.com/static/intro/img/online-service/%E5%A4%9A%E6%B8%A0%E9%81%93%E6%8E%A5%E5%85%A5.png',
  },
  {
    desc: '多种接待方式',
    src: 'https://cdn.byai.com/static/intro/img/online-service/%E5%A4%9A%E7%A7%8D%E6%8E%A5%E5%BE%85%E6%96%B9%E5%BC%8F.png',
  },
  {
    desc: '富媒体沟通',
    src: 'https://cdn.byai.com/static/intro/img/online-service/%E5%AF%8C%E5%AA%92%E4%BD%93%E6%B2%9F%E9%80%9A.png',
  },
  {
    desc: '视频通话',
    src: 'https://cdn.byai.com/static/intro/img/online-service/%E8%A7%86%E9%A2%91%E9%80%9A%E8%AF%9D.png',
  },
  {
    desc: '自动应答',
    src: 'https://cdn.byai.com/static/intro/img/online-service/%E8%87%AA%E5%8A%A8%E5%BA%94%E7%AD%94.png',
  },
  {
    desc: '主动邀请会话',
    src: 'https://cdn.byai.com/static/intro/img/online-service/%E4%B8%BB%E5%8A%A8%E9%82%80%E8%AF%B7%E4%BC%9A%E8%AF%9D.png',
  },
  {
    desc: '满意度评价',
    src: 'https://cdn.byai.com/static/intro/img/online-service/%E6%BB%A1%E6%84%8F%E5%BA%A6%E8%AF%84%E4%BB%B7.png',
  },
  {
    desc: '创建工单',
    src: 'https://cdn.byai.com/static/intro/img/online-service/%E5%88%9B%E5%BB%BA%E5%B7%A5%E5%8D%95.png',
  },
  {
    desc: '访问轨迹',
    src: 'https://cdn.byai.com/static/intro/img/online-service/%E8%AE%BF%E9%97%AE%E8%BD%A8%E8%BF%B9.png',
  },
  {
    desc: '客户画像',
    src: 'https://cdn.byai.com/static/intro/img/online-service/%E5%AE%A2%E6%88%B7%E7%94%BB%E5%83%8F.png',
  },
  {
    desc: '客服机器人',
    src: 'https://cdn.byai.com/static/intro/img/online-service/%E5%AE%A2%E6%9C%8D%E6%9C%BA%E5%99%A8%E4%BA%BA.png',
  },
  {
    desc: '客服助理',
    src: 'https://cdn.byai.com/static/intro/img/online-service/%E5%AE%A2%E6%9C%8D%E5%8A%A9%E7%90%86.png',
  },
  {
    desc: '实时监控',
    src: 'https://cdn.byai.com/static/intro/img/online-service/%E5%AE%9E%E6%97%B6%E7%9B%91%E6%8E%A7.png',
  },
  {
    desc: '智能质检',
    src: 'https://cdn.byai.com/static/intro/img/online-service/%E6%99%BA%E8%83%BD%E8%B4%A8%E6%A3%80.png',
  },
  {
    desc: '数据报表',
    src: 'https://cdn.byai.com/static/intro/img/online-service/%E6%95%B0%E6%8D%AE%E6%8A%A5%E8%A1%A8.png',
  },
];

const introductionList = [
  {
    title: '客服机器人',
    desc: '准确率98%，可以解决90%常见问题，降低成本，告别等待',
    icon: 'https://cdn.byai.com/static/intro/img/online-service/%E5%AE%A2%E6%9C%8D%E6%9C%BA%E5%99%A8%E4%BA%BA2.png',
  },
  {
    title: '视频客服',
    desc: '实时音视频，清晰稳定，功能丰富，多端支持',
    icon: 'https://cdn.byai.com/static/intro/img/online-service/%E8%A7%86%E9%A2%91%E5%AE%A2%E6%9C%8D.png',
  },
  {
    title: '智能销售',
    desc: '智能化、精细化销售过程管理，成单率提升39%',
    icon: 'https://cdn.byai.com/static/intro/img/online-service/%E5%AE%A2%E6%88%B7%E7%AE%A1%E7%90%86.png',
    link: '/product/smart-sale',
  },
  {
    title: '协同工单',
    desc: '所有渠道消息，智能分配，一键流转，为协同而生',
    icon: 'https://cdn.byai.com/static/intro/img/online-service/%E5%8D%8F%E5%90%8C%E5%B7%A5%E5%8D%95.png',
    link: '/product/order',
  },
];

const OnlineCustomer = () => (
  <Layout>
    {(visible, setVisible) => (
      <Wrapper>
        <OnlineServiceWrapper>
          <Banner>
            <BannerImg
              className="online-service-banner"
              title="在线客服"
              desc="全面覆盖流量入口，与客户零距离沟通，"
              desc2="高效提供优质服务，提升客户满意度与转化率"
              text="立即体验"
              backgroundImage="https://cdn.byai.com/static/intro/img/online-service/pc-banner.png"
              mobileBackgroundImage="https://cdn.byai.com/static/intro/img/online-service/mobile-banner.png"
              onBtnClick={() => setVisible(true)}
            />
          </Banner>
          <FourCol title1="服务经济时代，用更高效的服务，提升企业竞争力" ability={ability} bac="#fff" titleBreak />
          <BreakTitle>
            <Visible xs sm>
              <h2>
                <div style={{ marginBottom: '15px' }}>降本增效</div>
                <div>提升客户满意度</div>
              </h2>
            </Visible>
            <Visible md lg xl xxl xxxl>
              <h2>降本增效，提升客户满意度</h2>
            </Visible>
          </BreakTitle>
          <DataVisualWrapper odd>
            <Container>
              <Row className="data-visual-wrapper translate-x">
                <DescImgCol lg={14} md={14} sm={24}>
                  <img
                    src="https://cdn.byai.com/static/intro/img/online-service/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D-%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D1.png"
                    alt=""
                  />
                </DescImgCol>
                <DescCol lg={10} md={10} sm={24} className="desc-col-title">
                  <Visible md lg xl xxl xxxl>
                    <h3>全面覆盖流量入口，沟通零距离</h3>
                  </Visible>
                  <Visible xs sm>
                    <div className="title-mobile">
                      <h3>全面覆盖流量入口</h3>
                      <h3>沟通零距离</h3>
                    </div>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div className="icon-wrapper">
                      <img src="https://cdn.byai.com/static/intro/img/online-service/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D-%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D1-PC%E6%96%87%E5%AD%97%E8%AF%B4%E6%98%8E.png" />
                    </div>
                  </Visible>
                </DescCol>
              </Row>
            </Container>
          </DataVisualWrapper>
          <DataVisualWrapper>
            <Container>
              <Row className="data-visual-wrapper">
                <DescCol lg={10} md={10} sm={24} className="desc-col-title translate-x">
                  <Visible md lg xl xxl xxxl>
                    <h3>从分配到接待，服务事半功倍</h3>
                  </Visible>
                  <Visible xs sm>
                    <div className="title-mobile">
                      <h3>从分配到接待</h3>
                      <h3>服务事半功倍</h3>
                    </div>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>智能识别访客，按多种规则灵活分配给最合适的坐席</p>
                      <p>快捷回复、输入预知、消息提醒，提升客服响应速度</p>
                      <p>自动推荐话术、实时分析舆情，客服助理贴身引导、保驾护航</p>
                    </div>
                  </Visible>
                </DescCol>
                <DescImgCol lg={14} md={14} sm={24}>
                  <img
                    src="https://cdn.byai.com/static/intro/img/online-service/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D-%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D2.png"
                    alt=""
                  />
                </DescImgCol>
              </Row>
            </Container>
          </DataVisualWrapper>
          <DataVisualWrapper odd>
            <Container>
              <Row className="data-visual-wrapper translate-x">
                <DescImgCol lg={14} md={14} sm={24}>
                  <img
                    src="https://cdn.byai.com/static/intro/img/online-service/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D-%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D3.png"
                    alt=""
                  />
                </DescImgCol>
                <DescCol lg={10} md={10} sm={24} className="desc-col-title">
                  <Visible md lg xl xxl xxxl>
                    <h3>机器人自动接待，服务不间断</h3>
                  </Visible>
                  <Visible xs sm>
                    <div className="title-mobile">
                      <h3>机器人自动接待</h3>
                      <h3>服务不间断</h3>
                    </div>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>一键开启，自动解决90%以上常见问题</p>
                      <p>下班时间自动接待，全天在岗，减少客户流失</p>
                      <p>咨询高峰智能分流，人机结合，告别堵塞</p>
                    </div>
                  </Visible>
                </DescCol>
              </Row>
            </Container>
          </DataVisualWrapper>
          <DataVisualWrapper>
            <Container>
              <Row className="data-visual-wrapper">
                <DescCol lg={10} md={10} sm={24} className="desc-col-title">
                  <h3>数字化管理，驱动服务完善</h3>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>实时监控，服务过程清晰可控</p>
                      <p>统计报表，多维度量化分析，提供全面数据支撑</p>
                      <p>智能质检，自动、全量、多维度检测，保障服务质量</p>
                    </div>
                  </Visible>
                </DescCol>
                <DescImgCol lg={14} md={14} sm={24}>
                  <img
                    src="https://cdn.byai.com/static/intro/img/online-service/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D-%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D4.png"
                    alt=""
                  />
                </DescImgCol>
              </Row>
            </Container>
          </DataVisualWrapper>
          <BreakTitle className="white">
            <Visible xs sm>
              <h2>
                <div style={{ marginBottom: '15px' }}>商业洞察</div>
                <div>提升客户转化率</div>
              </h2>
            </Visible>
            <Visible md lg xl xxl xxxl>
              <h2>商业洞察，提升客户转化率</h2>
            </Visible>
          </BreakTitle>
          <DataVisualWrapper odd style={{ background: '#f8f9fb' }}>
            <Container>
              <Row className="data-visual-wrapper">
                <DescImgCol lg={14} md={14} sm={24}>
                  <img
                    src="https://cdn.byai.com/static/intro/img/online-service/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D-%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D5.png"
                    alt=""
                  />
                </DescImgCol>
                <DescCol lg={10} md={10} sm={24} className="desc-col-title">
                  <Visible md lg xl xxl xxxl>
                    <h3>自动记录访问行为，主动营销，减少流失</h3>
                  </Visible>
                  <Visible xs sm>
                    <div className="title-mobile">
                      <h3>自动记录访问行为</h3>
                      <h3>主动营销，减少流失</h3>
                    </div>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>自动记录访客身份、行为轨迹，智能标记访客意向，主动营销有据可依</p>
                      <p>根据访问轨迹、客户意向，主动邀请会话，减少访客流失</p>
                    </div>
                  </Visible>
                </DescCol>
              </Row>
            </Container>
          </DataVisualWrapper>
          <DataVisualWrapper style={{ background: '#fff' }}>
            <Container>
              <Row className="data-visual-wrapper translate-x">
                <DescCol lg={10} md={10} sm={24} className="desc-col-title">
                  <Visible md lg xl xxl xxxl>
                    <h3>聚焦客户生命周期，多维触达，转化倍增</h3>
                  </Visible>
                  <Visible xs sm>
                    <div className="title-mobile">
                      <h3>聚焦客户生命周期</h3>
                      <h3>多维触达，转化倍增</h3>
                    </div>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>对接CRM，对客户生命周期进行统一跟踪管理</p>
                      <p>主动会话、离线消息、消息推送，多种方式主动触达客户</p>
                    </div>
                  </Visible>
                </DescCol>
                <DescImgCol lg={14} md={14} sm={24}>
                  <img
                    src="https://cdn.byai.com/static/intro/img/online-service/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D-%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D6.png"
                    alt=""
                  />
                </DescImgCol>
              </Row>
            </Container>
          </DataVisualWrapper>
          <DataVisualWrapper odd style={{ background: '#f8f9fb' }}>
            <Container>
              <Row className="data-visual-wrapper">
                <DescImgCol lg={14} md={14} sm={24}>
                  <img
                    src="https://cdn.byai.com/static/intro/img/online-service/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D-%E5%8A%9F%E8%83%BD%E4%BB%8B%E7%BB%8D7.png"
                    alt=""
                  />
                </DescImgCol>
                <DescCol lg={10} md={10} sm={24} className="desc-col-title">
                  <Visible md lg xl xxl xxxl>
                    <h3>全站统计，数据驱动转化提升</h3>
                  </Visible>
                  <Visible xs sm>
                    <div className="title-mobile">
                      <h3>全站统计</h3>
                      <h3>数据驱动转化提升</h3>
                    </div>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>收集访问行为，自动生成报表，访问情况整体把握</p>
                      <p>展示流量转化路径和漏斗，转化效果直观呈现</p>
                    </div>
                  </Visible>
                </DescCol>
              </Row>
            </Container>
          </DataVisualWrapper>
          <BreakTitle className="white">
            <Visible xs sm>
              <h2>
                <div style={{ marginBottom: '15px' }}>解决行业痛点</div>
                <div>助力服务升级</div>
              </h2>
            </Visible>
            <Visible md lg xl xxl xxxl>
              <h2>解决行业痛点，助力服务升级</h2>
            </Visible>
          </BreakTitle>
          <IndustryCarousel dataList={industryCarouselList} />
          <Visible md lg xl xxl xxxl>
            <BreakTitle>
              <h2>丰富产品特性，满足多样需求</h2>
            </BreakTitle>
          </Visible>
          <Visible xs sm>
            <BreakTitle className="white">
              <h2>
                <div style={{ marginBottom: '15px' }}>丰富产品特性</div>
                <div>满足多样需求</div>
              </h2>
            </BreakTitle>
          </Visible>
          <MoreAbility
            abilityList={moreAbilityList}
            width={950}
            title={false}
            style={{ background: '#F8F9FB', paddingTop: '50px' }}
            type={3}
          />
          <BreakTitle className="white">
            <Visible xs sm>
              <h2>
                <div style={{ marginBottom: '15px' }}>强强联合</div>
                <div>转化倍增</div>
              </h2>
            </Visible>
            <Visible md lg xl xxl xxxl>
              <h2>强强联合，转化倍增</h2>
            </Visible>
          </BreakTitle>
          <OtherIntroduction dataList={introductionList} style={{ background: '#F8F9FB' }} />
          <VoiceFooter
            title="和42000+顶级企业一起，探索大数据+AI智能的运营与销售"
            btn="免费体验"
            mTitle1="和42000+顶级企业一起探索"
            mTitle2="大数据+AI智能的运营与销售"
            img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
            onBtnClick={() => setVisible(true)}
          />
        </OnlineServiceWrapper>
      </Wrapper>
    )}
  </Layout>
);

export default OnlineCustomer;
