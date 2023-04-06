import Link from 'next/link';
import * as React from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import styled, { css } from 'styled-components';
import { DescCol } from '../../src/components/homepage/DescContent';
import { Layout } from '../../src/components/Layout';
import VoiceFooter from '../../src/components/order/footer';
import { BannerImg, Intro, Title } from '../../src/components/service';
import { media } from '../../src/constants/style';

const MobileTitle = styled.div`
  padding: 60px 0;
  h1 {
    font-size: 36px;
    font-weight: 400;
    margin: 0;
    line-height: 44px;
  }
`;
const TradeMoreCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: rgba(13, 25, 36, 1);
  height: 50px;
  line-height: 22px;
  margin-top: 20px;
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

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

const PAGE_CONFIG = {
  h1Text: '集客营销',
  h2Text: '社交化营销工具包+智能行为追踪，集合海量的营销内容',
  headerBtnText: '立即体验',
  bannerImg: 'https://cdn.byai.com/static/official-website/product/show_banner.svg',
};

const BACKGOURND_XS =
  'https://cdn.byai.com/node_front/1572956856716/%E7%A7%BB%E5%8A%A8%E7%AB%AF-%E4%BA%A7%E5%93%81-%E6%99%BA%E8%83%BD%E5%90%8D%E7%89%87.png';

const SERVICE_OPERATE = [
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/zhuangxiu.png',
    title: '装修',
  },
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/jiaoyu.png',
    title: '教育',
  },
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/dianshang.png',
    title: '电商',
  },
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/baoxian.png',
    title: '保险',
  },
];

const Wrapper = styled.div`
  background: #f8f9fb;
  h1 {
    border: 0;
  }
`;

const ShowCard = styled.div<{ cover: string }>`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  ${media.phone`
    height: 300px;
    margin-bottom: 10px;

    `}
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
    width: 94%;
    height: 100%;
  }
  .mask {
    position: absolute;
    background: linear-gradient(to bottom, rgba(49, 83, 212, 0.2), rgba(49, 83, 212, 0.9));
    width: 100%;
    height: 100%;
  }
  .cover {
    background-image: url(${props => props.cover});
    position: absolute;
    background-position: center;
    background-size: cover;
    transition: all 0.3s ease-in-out 0s;
    background-repeat: no-repeat;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .wrapper:hover .cover {
    transform: scale(1.06);
  }
  span {
    text-align: center;
    width: 140px;
    position: relative;
    margin-bottom: 54px;
    font-size: 26px;
    color: #ffffff;
    &:after {
      content: '';
      background-color: #fff;
      height: 2px;
      bottom: -12px;
      left: 55px;
      right: 55px;
      position: absolute;
    }
  }

  @media (max-width: 768px) {
    span {
      font-size: 16px;
    }
  }
`;
export const DescImgCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 70vw;
    position: relative;
  }
  img {
    ${media.phone`
      margin-top: 20px;
      width: 100vw;
      margin-bottom: 20px;
    `}
  }
  @media (min-width: 768px) {
    img.move-left {
      left: -60px;
    }
    img.move-left-2 {
      left: -80px;
    }
  }
`;
const CuttingLine = styled.div`
  background-color: #e2e2e2;
  height: 1px;
  width: 100%;
`;
const BigTitleWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 50px;
  h1 {
    font-weight: 500;
    font-size: 36px;
    border: 0;
    color: rgba(13, 25, 36, 1);
  }
`;
const DataVisualWrapper = styled.div<{ odd?: boolean }>`
  > div {
    height: 100%;
    > div {
      height: 100%;
    }
  }
  h3 {
    line-height: 1.3;
    margin: 0;
    width: 510px;
  }
  .p-wrapper {
    margin-top: 25px;
    flex-direction: column;
  }
  .data-visual-wrapper {
    height: 100%;
    align-items: center !important;
    ${media.phone`
      > div {
        justify-content: center;
      }
      flex-direction: column-reverse;
      padding: 0 16px;
    `}
    > div {
      height: 100%;
      ${media.phone`
        height: auto;
      `}
    }
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 20px;
    }
    .data-visual-wrapper {
      display: flex;
      flex-direction: row;
      padding-top: 60px;
      ${props =>
    props.odd &&
    css`
          flex-direction: column-reverse;
        `}
    }
  }
  background-color: #f8f9fb;
  background-size: cover;
  ${props =>
    props.odd &&
    css`
      background-color: #fff;
    `}
  height: 600px;
  ${media.phone`
    height: inherit
  `}
`;
const Show: React.FunctionComponent = props => {
  return (
    <Layout>
      {(visible, setVisible) => (
        <>
          <Wrapper>
            <BannerImg
              title={PAGE_CONFIG.h1Text}
              desc={PAGE_CONFIG.h2Text}
              text={PAGE_CONFIG.headerBtnText}
              backgroundImage={PAGE_CONFIG.bannerImg}
              mobileBackgroundImage={BACKGOURND_XS}
              onBtnClick={() => setVisible(true)}
            />
            <Intro bottom={0}>
              <Visible md lg xl xxl xxxl>
                <Title
                  title="数据雷达，通过精准数据跟踪，洞察每一位潜在客户"
                  desc="名片拉客、CRM接客、AI雷达助力转化客户，步步为赢"
                />
                <div style={{ height: 30 }} />
              </Visible>
              <Visible xs sm>
                <MobileTitle>
                  <Row justify="center">
                    <h1>SHOW系统</h1>
                  </Row>
                  <Row justify="center">
                    <h1>大数据精准营销</h1>
                  </Row>
                </MobileTitle>
              </Visible>
              <DataVisualWrapper>
                <Container>
                  <Row className="data-visual-wrapper">
                    <DescCol lg={12} md={12} sm={24}>
                      <h3>AI雷达，洞察客户意向</h3>
                      <h3>掌握最佳跟单时机</h3>
                      <Visible md lg xl xxl xxxl>
                        <div className="p-wrapper">
                          <p>客户行为跟进，实时轨迹不间断查看</p>
                          <p>挖掘潜在客户，分分钟判断合作意向</p>
                          <p>洞察客户兴趣，有针对制定跟进策略</p>
                        </div>
                      </Visible>
                    </DescCol>
                    <DescImgCol lg={12} md={12} sm={24}>
                      <img src="https://cdn.byai.com/node_front/1572589429605/show-1.png" alt="" />
                    </DescImgCol>
                  </Row>
                </Container>
              </DataVisualWrapper>
              <DataVisualWrapper odd>
                <Container>
                  <Row className="data-visual-wrapper">
                    <DescImgCol lg={13} md={12} sm={24}>
                      <img
                        className="move-left"
                        src="https://cdn.byai.com/node_front/1572589468577/show-2.png"
                        alt=""
                      />
                    </DescImgCol>
                    <DescCol lg={11} md={12} sm={24}>
                      <Visible md lg xl xxl xxxl>
                        <h3>智能分配，自动分配给赢单概率高的销售</h3>
                      </Visible>
                      <Visible sm xs>
                        <h3>智能分配</h3>
                        <h3>自动分配给赢单概率高的销售</h3>
                      </Visible>
                      <Visible md lg xl xxl xxxl>
                        <div className="p-wrapper">
                          <p>客户自动入库，直接分配高效率接待</p>
                          <p>AI智能画像，助力千人千面跟进营销</p>
                          <p>员工离职一键交接，客户资源不流失</p>
                        </div>
                      </Visible>
                    </DescCol>
                  </Row>
                </Container>
              </DataVisualWrapper>
              <DataVisualWrapper>
                <Container>
                  <Row className="data-visual-wrapper">
                    <DescCol lg={12} md={12} sm={24}>
                      <h3>内容分享，赋能员工变成高溢价</h3>
                      <h3>的广告媒体</h3>
                      <Visible md lg xl xxl xxxl>
                        <div className="p-wrapper">
                          <p>支持多渠道内容分发，占领每个流量制高地</p>
                          <p>内容附带名片回流，让每一个流量转化成线索</p>
                          <p>内容点赞、查看兴趣度实时跟踪，定位意向客户</p>
                        </div>
                      </Visible>
                    </DescCol>
                    <DescImgCol lg={12} md={12} sm={24}>
                      <img src="https://cdn.byai.com/node_front/1572589490475/show-3.png" alt="" />
                    </DescImgCol>
                  </Row>
                </Container>
              </DataVisualWrapper>
              <DataVisualWrapper odd>
                <Container>
                  <Row className="data-visual-wrapper">
                    <DescImgCol lg={13} md={13} sm={24}>
                      <img
                        className="move-left-2"
                        src="https://cdn.byai.com/node_front/1572589505206/show-4.png"
                        alt=""
                      />
                    </DescImgCol>
                    <DescCol lg={11} md={11} sm={24}>
                      <h3>智能助理，24h金牌销售</h3>
                      <h3>不错过任何商机</h3>
                      <Visible md lg xl xxl xxxl>
                        <div className="p-wrapper">
                          <p>不加微信安心畅聊，照顾每一个敏感客户</p>
                          <p>AI对话，实时学习，会解惑，会调侃，提高客户的逗留时间</p>
                          <p>发图、发视频、发商品、发地址、多种交互聊出售卖力</p>
                        </div>
                      </Visible>
                    </DescCol>
                  </Row>
                </Container>
              </DataVisualWrapper>
              <CuttingLine />
              <Visible md lg xl xxl xxxl>
                <Title
                  title="名片小程序，分分钟打造自己的私有品牌宣传阵地"
                  desc="微信端官网、商城、企业动态低门槛搭建，抓住微信流量新阵地"
                />
                <div style={{ height: 30 }} />
              </Visible>
              <Visible xs sm>
                <MobileTitle>
                  <Row justify="center">
                    <h1>名片小程序</h1>
                  </Row>
                  <Row justify="center">
                    <h1>打造品牌私域流量</h1>
                  </Row>
                </MobileTitle>
              </Visible>
              <DataVisualWrapper>
                <Container>
                  <Row className="data-visual-wrapper">
                    <DescCol lg={12} md={12} sm={24}>
                      <h3>“抖音版”名片，有内涵，</h3>
                      <h3>有颜值，会“自卖自夸”</h3>
                      <Visible md lg xl xxl xxxl>
                        <div className="p-wrapper">
                          <p>独有的“抖音版”名片，沉浸式吸引眼球</p>
                          <p>公司图文介绍，动态展现，增加信任感，缩短决策时间</p>
                          <p>图文、语音、视频多途径展现品牌，人人都能变产品、品牌专家</p>
                        </div>
                      </Visible>
                    </DescCol>
                    <DescImgCol lg={12} md={12} sm={24}>
                      <img src="https://cdn.byai.com/node_front/1572589522179/show-5.png" alt="" />
                    </DescImgCol>
                  </Row>
                </Container>
              </DataVisualWrapper>
              <DataVisualWrapper odd>
                <Container>
                  <Row className="data-visual-wrapper">
                    <DescImgCol lg={13} md={13} sm={24}>
                      <img
                        className="move-left-2"
                        src="https://cdn.byai.com/node_front/1572589546994/show-6.png"
                        alt=""
                      />
                    </DescImgCol>
                    <DescCol lg={11} md={11} sm={24}>
                      <h3>微商城，零门槛</h3>
                      <h3>打造专属移动商城</h3>
                      <Visible md lg xl xxl xxxl>
                        <div className="p-wrapper">
                          <p>无需绑定小程序，即用即开</p>
                          <p>高转化商城模板，搭建方便，展现专业</p>
                          <p>实时对话咨询，提升购买转化</p>
                        </div>
                      </Visible>
                    </DescCol>
                  </Row>
                </Container>
              </DataVisualWrapper>
              <DataVisualWrapper>
                <Container>
                  <Row className="data-visual-wrapper">
                    <DescCol lg={12} md={12} sm={24}>
                      <h3>企业动态</h3>
                      <h3>让企业形象时刻生动</h3>
                      <Visible md lg xl xxl xxxl>
                        <div className="p-wrapper">
                          <p>企业朋友圈，支持图文、视频、超级链接多维度呈现</p>
                          <p>公共动态+个人动态贡献，丰满而不失个性</p>
                          <p>带名片信息的内容转发，曝光的同时可精准回流</p>
                        </div>
                      </Visible>
                    </DescCol>
                    <DescImgCol lg={12} md={12} sm={24}>
                      <img src="https://cdn.byai.com/node_front/1572589563160/show-7-1222.png" alt="" />
                    </DescImgCol>
                  </Row>
                </Container>
              </DataVisualWrapper>
              <DataVisualWrapper odd>
                <Container>
                  <Row className="data-visual-wrapper">
                    <DescImgCol lg={13} md={13} sm={24}>
                      <img src="https://cdn.byai.com/node_front/1572589582228/show-8.png" alt="" />
                    </DescImgCol>
                    <DescCol lg={11} md={11} sm={24}>
                      <h3>微官网，统一品牌形象</h3>
                      <h3>人人可代言</h3>
                      <Visible md lg xl xxl xxxl>
                        <div className="p-wrapper">
                          <p>全员官网统一展现，品牌形象统一输出</p>
                          <p>丰富的官网搭建模块，3分钟搭建高颜值页面</p>
                          <p>微信社交裂变推广，引流同时可追踪访客信息</p>
                        </div>
                      </Visible>
                    </DescCol>
                  </Row>
                </Container>
              </DataVisualWrapper>
              <CuttingLine />
              <Intro bottom={12}>
                <Row justify="center">
                  <BigTitleWrapper>
                    <h1>使用场景</h1>
                  </BigTitleWrapper>
                </Row>
                <Container>
                  <Row justify="center">
                    {SERVICE_OPERATE.map((item, index) => (
                      <Col key={index} lg={6} md={12} sm={12} xs={12}>
                        <ShowCard cover={item.coverImage}>
                          <div className="wrapper">
                            <div className="cover" />
                            <div className="mask" />
                            <span>{item.title}</span>
                          </div>
                        </ShowCard>
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Intro>
              <Row style={{ height: 30 }} justify="center">
                <TradeMoreCol>
                  <Link href="/solutions">
                    <a style={{ color: '#3153D4' }}>
                      <span>
                        更多场景，由你定义
                        <i className="iconfont iconchakangengduojiantou" />
                      </span>
                    </a>
                  </Link>
                </TradeMoreCol>
              </Row>
              <Visible md lg xl xxl xxxl>
                <div style={{ height: 30 }} />
              </Visible>
            </Intro>
            <VoiceFooter
              title="高效私域流量运营，从集客营销开始"
              mTitle1="高效私域流量运营"
              mTitle2="从集客营销开始"
              btn="免费体验"
              img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
              onBtnClick={() => setVisible(true)}
            />
          </Wrapper>
        </>
      )}
    </Layout>
  );
};

export default Show;
