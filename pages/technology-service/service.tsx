import * as React from 'react';
import { Col, ColProps, Container, Hidden, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { BigTitle, BlueBtn, Desc, SmallSubTitle, TextArea } from '../../src/components/common/BannerTextElements';
import BannerWhite from '../../src/components/common/BannerWhite';
import ByVoiceFooter from '../../src/components/common/ByVoiceFooter';
import { Layout } from '../../src/components/Layout';
import {
  Contact,
  DemandCard,
  Deploy,
  Guarantee,
  Intro,
  OperateCard,
  Support,
  SupportMD,
  Title,
} from '../../src/components/service';
import { FOOTER_BG } from '../../src/constants/img-urls';
import { HOST_ENUM } from '../../src/lib/utils';
const BASE_URL = 'https://cdn.byai.com/static/intro/img/Banner/2021-3-';
const BANNER_XS = `${BASE_URL}service-xs.png`;
const BANNER = `${BASE_URL}service.png`;

const SERVICE_SUPPORT = [
  {
    title: '丰富的资源配置',
    descList: ['线路市场，对接丰富优质线路', '话术市场，对接海量有效话术', '解决方案，26行业成熟应用方案'],
    backgroundImage: '//cdn.byai.com/static/official-website/service/kuai-left.png',
  },
  {
    title: '专属客户成功团队',
    descList: ['服务专属，管家全程贴心服务', '客户成功，我们的目标始终如一', '共同成长，一起遇见更好的自己'],
    backgroundImage: '//cdn.byai.com/static/official-website/service/kuai-right.png',
  },
  {
    title: '详尽的使用文档、视频',
    descList: ['使用手册，快速入门的自学手册', '开发者文档，关于技术对接的一切', '百应课堂，在线视频直播教学'],
    backgroundImage: '//cdn.byai.com/static/official-website/service/kuai-3.png',
  },
  {
    title: '每周产品更新日志',
    descList: ['每周迭代，见证产品卓越进阶', '图文并茂，让每一次升级清晰顺滑', '及时推送，高效应用总是先知先觉'],
    backgroundImage: '//cdn.byai.com/static/official-website/service/kuai-4.png',
  },
];

const SERVICE_OPERATE = [
  {
    coverImage: '//cdn.byai.com/static/official-website/service/tu5.png',
    title: '机器人托管代运营',
    desc: '彻底释放运营压力',
  },
  {
    coverImage: 'https://cdn.byai.com/static/official-website/service/tu6.png',
    title: '持续巡检监控',
    desc: 'AI运行质量全优',
  },
  {
    coverImage: 'https://cdn.byai.com/static/official-website/service/tu7.png',
    title: '上门或远程培训服务',
    desc: '人人都能轻松上手',
  },
  {
    coverImage: 'https://cdn.byai.com/static/official-website/service/tu8.png',
    title: '声学模型定制服务',
    desc: 'ASR精准识别',
  },
];

const SERVICE_GUARANTEE = [
  {
    icon: '//cdn.byai.com/static/official-website/service/tubiao1.png',
    title: '7*24小时应急响应',
    desc: '快速预警',
  },
  {
    icon: '//cdn.byai.com/static/official-website/service/tubiao2.png',
    title: '全员联动追踪落地',
    desc: '处理机制',
  },
  {
    icon: '//cdn.byai.com/static/official-website/service/tubiao3.png',
    title: '服务中断5倍补偿',
    desc: '服务承诺',
  },
];

const SERVICE_DEPLOY = [
  {
    icon: '//cdn.byai.com/static/official-website/service/tubiao4.png',
    title: 'SaaS',
    desc: '公有云、混合云、私有云',
  },
  {
    icon: '//cdn.byai.com/static/official-website/service/tubiao5.png',
    title: '开放平台',
    desc: '无缝对接企业原有系统',
  },
  {
    icon: '//cdn.byai.com/static/official-website/service/tubiao6.png',
    title: '本地部署',
    desc: '个性化功能定制',
  },
];

const SERVICE_DEMAND = [
  {
    color: 'rgba(49,83,212,1)',
    title: '专属产品需求',
    desc: '匹配需求的产品才是好产品。我们会认真了解你的需求，提供真正帮助你业务提升的产品',
    cover: '//cdn.byai.com/static/official-website/service/tu1.png',
  },
  {
    color: 'rgba(84,196,197,1)',
    title: '专属团队服务',
    desc: '不仅仅是售前售后服务，而是整个团队的资源匹配。我们为每一家合作企业组织一支专业的4v1团队，帮助你更快更好上手使用，并全程保障服务',
    cover: '//cdn.byai.com/static/official-website/service/tu2.png',
  },
  {
    color: 'rgba(254,188,0,1)',
    title: '专属成功策略',
    desc: '为大客户提供定制化的专业整体解决方案。我们将深入了解客户业务痛点，提供营销方案、产品服务、售后保障等定制服务，帮助企业快速搭建智能营销体系，实现销售业务增长',
    cover: '//cdn.byai.com/static/official-website/service/tu3.png',
  },
  {
    color: 'rgba(234,105,64,1)',
    title: '专属成长计划',
    desc: '突破单纯的产品服务界限，提供增值的智能营销知识分享。百应课堂，为你的职业成长、技能进阶、圈层交流补给充电，让学习随时随地、更生动有趣',
    cover: '//cdn.byai.com/static/official-website/service/tu4.png',
  },
];

const SPAN = styled.span<{ fontSize?: number }>`
  font-size: ${props => props.fontSize || 14 + 'px'};
  color: rgba(102, 102, 102, 1);
  line-height: 24px;
`;

const Wrapper = styled.div`
  /* background: #f8f9fb; */
  background: #2b58f9;
`;

const DemandWrap = styled.div`
  margin-top: 40px;
  img {
    width: 400px;
    height: 400px;
  }
`;

const ServeContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 630px;
  background-image: url('//cdn.byai.com/static/official-website/animation/robot-10.png');
  background-repeat: no-repeat;
  background-size: 300px;
  background-position: left 50% top calc(50% - 35px);
`;

const ServeCol = styled(Col)<{ end?: boolean } & ColProps>`
  display: flex;
  justify-content: ${props => (props.end ? 'flex-end' : 'flex-start')};
`;

const DemandItem = styled.div<{ color: string; active: boolean }>`
  margin-bottom: 60px;
  position: relative;
  width: 488px;
  padding-left: 32px;
  &:last-child {
    margin-bottom: 0;
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 6px;
    background: ${props => props.color};
    border-radius: 4px;
    transform-origin: top;
    transform: ${props => (props.active ? 'scaleY(1) translateZ(0)' : 'scaleY(0) translateZ(0)')};
    transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    will-change: transform;
  }

  h3 {
    color: rgba(13, 25, 36, 1);
    font-size: 32px;
    font-weight: 400;
  }
  p {
    font-size: 16px;
    color: rgba(102, 102, 102, 1);
    line-height: 24px;
    transition: all 0.3s ease-in-out;
    opacity: ${props => (props.active ? 1 : 0)};
    max-height: ${props => (props.active ? '150px' : 0)};
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
`;

const SupportGridWrap = styled.div`
  display: grid;
  margin: 0 auto;
  width: 1190px;
  height: 630px;
  grid-template-columns: 402px 402px;
  grid-template-rows: 245px 245px;
  justify-content: space-between;
  align-content: space-between;
  background-image: url('//cdn.byai.com/static/official-website/animation/robot-10.png');
  background-repeat: no-repeat;
  background-size: 550px;
  background-position: center;
`;

const Service: React.SFC<{ hostType?: HOST_ENUM }> = ({ hostType = HOST_ENUM.HOST }) => {
  const [demandIndex, setDemandIndex] = React.useState(0);

  function handleDemandHover(index) {
    setDemandIndex(index);
  }
  return (
    <Layout hostType={hostType} headPlaceholder={[false, '#F9FAFF']}>
      {(visible, setVisible) => (
        <>
          <Wrapper>
            <BannerWhite
              minWidthPC="1075px"
              background={['#F9FAFF', '#F9FAFF']}
              pcImgs={[
                {
                  src: BANNER,
                  style: { width: 600, top: 0, right: 0 },
                  className: ['animate__fadeInRight', 'animate__ahead_300ms'],
                },
              ]}
              mobileImg={BANNER_XS}>
              <TextArea spaces={['20px 48px', '8px 32px']}>
                <Hidden xs sm>
                  <BigTitle>始终坚守客户第一</BigTitle>
                  <Desc>
                    百应坚守始终以客户为中心
                    <br />
                    在合作前、中、后全周期提供高效服务保障，坚持使命必达
                  </Desc>
                </Hidden>
                <Visible xs sm>
                  <SmallSubTitle>贯穿全生命周期的服务体系</SmallSubTitle>
                  <BigTitle>始终坚守客户第一</BigTitle>
                </Visible>
                <BlueBtn onClick={() => setVisible(true)}>体验百应服务</BlueBtn>
              </TextArea>
            </BannerWhite>
            <Intro>
              <Title
                title="以客户成功为目标，贯穿客户生命周期的服务体系"
                desc="百应始终以完成客户目标为价值导向，制定以助力客户成功为目标的服务体系"
              />
              <Visible md lg xl xxl xxxl>
                <DemandWrap>
                  <Container style={{ height: 550 }}>
                    <Row justify="between">
                      <Col>
                        {SERVICE_DEMAND.map((item, index) => (
                          <DemandItem
                            key={index}
                            active={demandIndex === index}
                            color={item.color}
                            onMouseEnter={() => {
                              handleDemandHover(index);
                            }}>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                          </DemandItem>
                        ))}
                      </Col>
                      <Col align="end" style={{ marginTop: 40 }}>
                        <img src={SERVICE_DEMAND[demandIndex].cover} alt="" />
                      </Col>
                    </Row>
                  </Container>
                </DemandWrap>
              </Visible>
              <Visible xs sm>
                <Container>
                  <Row>
                    {SERVICE_DEMAND.map((item, index) => (
                      <Col lg={6} md={12} key={index}>
                        <DemandCard index={index} coverImage={item.cover} title={item.title} desc={item.desc} />
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Visible>
            </Intro>
            <Intro odd>
              <Title title="产品使用支持" desc="PRODUCT SUPPORT" />
              {/* <Visible md lg xl xxl xxxl>
                                <SupportGridWrap>
                                    {SERVICE_SUPPORT.map((item, index) => (
                                        <Support
                                            key={index}
                                            backgroundImage={item.backgroundImage}
                                            title={item.title}
                                            descList={item.descList}
                                        />
                                    ))}
                                </SupportGridWrap>
                            </Visible> */}
              <Visible md lg xl xxl xxxl>
                <ServeContainer>
                  <Row>
                    {SERVICE_SUPPORT.slice(0, 2).map((item, index) => (
                      <ServeCol key={item.title} lg={12} end={index === 1}>
                        <Support backgroundImage={item.backgroundImage} title={item.title} descList={item.descList} />
                      </ServeCol>
                    ))}
                  </Row>
                  <Row>
                    {SERVICE_SUPPORT.slice(2, 4).map((item, index) => (
                      <ServeCol key={item.title} lg={12} end={index === 1}>
                        <Support backgroundImage={item.backgroundImage} title={item.title} descList={item.descList} />
                      </ServeCol>
                    ))}
                  </Row>
                </ServeContainer>
              </Visible>
              <Visible xs sm>
                <Container>
                  <Row justify="center">
                    {SERVICE_SUPPORT.map((item, index) => (
                      <Col key={index} lg={6} md={12}>
                        <SupportMD
                          index={index}
                          coverImage="//cdn.byai.com/static/official-website/animation/robot-10.png"
                          title={item.title}
                          descList={item.descList}
                        />
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Visible>
            </Intro>
            <Intro bottom={116}>
              <Title title="AI运营服务" desc="保障AI运行状态全优，支持定制服务，满足个性化需求" />
              <Container>
                <Row justify="center">
                  {SERVICE_OPERATE.map((item, index) => (
                    <Col key={index} lg={6} md={12}>
                      <OperateCard index={index} coverImage={item.coverImage} title={item.title} desc={item.desc} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </Intro>
            <Intro odd bottom={156}>
              <Title title="高保障的服务机制" desc="HIGH-ASSURANCE SERVICE MECHANISM" />
              <Container>
                <Row justify="center">
                  {SERVICE_GUARANTEE.map((item, index) => (
                    <Col key={index} lg={8} md={12}>
                      <Guarantee icon={item.icon} title={item.title} desc={item.desc} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </Intro>
            <Intro bottom={300}>
              <Title
                title="服务部署"
                desc="灵活部署方式，满足不同组织类型和业务需求，全国300+本地化服务商，上门+远程服务覆盖全国"
              />
              <Container>
                <Row justify="center">
                  {SERVICE_DEPLOY.map((item, index) => (
                    <Col key={index} lg={8} md={12}>
                      <Deploy icon={item.icon} title={item.title} desc={item.desc} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </Intro>
            {/* 撑开的背景由整个页面的background控制，在Wrapper中定义 */}
            <Contact style={{ marginTop: -168 }} />
            <ByVoiceFooter
              title="打造企业级数字化劳动力"
              desc="留下联系方式，将有AI行业专家为您提供专属服务"
              btnText="与我联系"
              background={`url(${FOOTER_BG})`}
              onClick={() => {
                setVisible(true);
              }}
            />
            {/* <VoiceFooter
              title="百应服务，全心全意"
              mTitle1="百应服务，全心全意"
              btn="免费体验"
              img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
              onBtnClick={() => setVisible(true)}
            /> */}
          </Wrapper>
        </>
      )}
    </Layout>
  );
};

export default Service;
