import AngleRight from '@indata/icon/lib/direction/AngleRight';
import Link from 'next/link';
import React from 'react';
import { Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../../constants/style';
import { DescImgCol } from '../clew/descImg';
import DescImgColNew from '../clew/descImgCol';
import { TradeMoreCol } from '../clew/style';
import { Layout } from '../Layout';
import VoiceFooter from '../order/footer';
import { BigTitleWrapper, Wrapper } from '../product';
import { Intro } from '../service';
import Banner from './Banner';
import DataVisualWrapper from './DataVisualWrapperNew';
import { DescCol } from './DescContentNew';
import FourColNew from './four-col-new';
import { MarketingContentNew } from './marketingContentNew';
import ShowCardNew from './showCardNew';

const SERVICE_OPERATE = [
  {
    coverImage: 'https://cdn.byai.com/static/intro/img/workphone/showCardNew/%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF1.png',
    title: `销售过程管控`,
  },
  {
    coverImage: 'https://cdn.byai.com/static/intro/img/workphone/showCardNew/%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF2.png',
    title: '企业数据保护',
  },
  {
    coverImage: 'https://cdn.byai.com/static/intro/img/workphone/showCardNew/%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF3.png',
    title: '客户沟通记录',
  },
  {
    coverImage: 'https://cdn.byai.com/static/intro/img/workphone/showCardNew/%E4%BD%BF%E7%94%A8%E5%9C%BA%E6%99%AF4.png',
    title: '员工行为管理',
  },
];

const PageTitle = styled.div`
  height: 237px;
  width: 100%;
  line-height: 237px;
  text-align: center;
  font-size: 40px;
  color: #0d1924;
  border-bottom: 1px solid #e8e8e8;
`;

const GetMoreBtn = styled.button`
  width: 184px;
  height: 40px;
  color: #999;
  font-size: 14px;
  border-radius: 20px;
  border: 1px solid #999;
  background: transparent;
  margin-top: 24px;
  transition: all 0.3s;
  .icon {
    margin-top: -3px;
    transition: transform 0.3s;
  }
  &:hover {
    border-color: #3153d4;
    color: #3153d4;
  }
  &:hover .icon {
    transform: translateX(5px);
  }
`;

const VideoContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 74px 0 50px 0;
  ${media.phone`
    padding: 25px 0;
  `}
  video {
    width: 80%;
    max-width: 1140px;
    border: 1px solid rgba(0, 0, 0, 0.06);
    outline: none;
    ${media.phone`
      width: 100%;
    `}
  }
`;

const H4 = styled.h4`
  font-size: 20px;
`;

const DataVisualContent = styled.div`
  .white {
    background: #fff;
  }
  .grey {
    background: #f8f9fb;
  }
  Link {
    color: #2f82f8;
  }
  .data-visual-wrapper {
    h3 {
      font-size: 22px;
      font-weight: 500;
    }
    p {
      font-size: 16px;
    }
  }
`;

const GetMoreLink = styled.a`
  cursor: pointer;
  .icon {
    margin-top: -3px;
  }
`;

const ability = [
  {
    logo: 'https://cdn.byai.com/static/intro/img/workphone/%E9%94%80%E5%94%AE%E7%AE%A1%E7%90%86.svg',
    title: '销售管理',
    desc: '帮助企业管控销售过程，沟通智能质检，提高管理效率，提升业绩。',
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/workphone/%E9%94%80%E5%94%AE%E8%87%AA%E5%8A%A8%E5%8C%96.svg',
    title: '销售自动化',
    desc: '客户沟通过程全渠道记录，无需重复录入系统，提高工作效率。',
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/workphone/%E5%AE%A2%E6%88%B7%E5%85%B3%E7%B3%BB%E7%AE%A1%E7%90%86.svg',
    title: '客户关系管理',
    desc: '打通线上线下客户沟通数据，补齐企数据短板，打造企业完整数据链。',
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/workphone/%E4%BC%81%E4%B8%9A%E6%95%B0%E6%8D%AE%E4%BF%9D%E6%8A%A4.svg',
    title: '企业数据保护',
    desc: '360度无死角保护客户资源，规范员工行为，防止客户丢失，保护企业数据安全。',
  },
];

const ability1 = [
  {
    logo: 'https://cdn.byai.com/static/intro/img/workphone/%E6%8F%90%E9%AB%98%E4%BA%BA%E6%95%88.svg',
    title: '提高人效',
    desc: '员工行为规范，工作效率提升',
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/workphone/%E5%A2%9E%E5%8A%A0%E6%94%B6%E5%85%A5.svg',
    title: '增加收入',
    desc: '高效触达用户，提升成交变化',
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/workphone/%E6%B2%89%E6%B7%80%E6%95%B0%E6%8D%AE.svg',
    title: '沉淀数据',
    desc: '销售管理数据化，智能化',
  },
];

const WorkPhoneHome = props => {
  const { Form } = props;
  return (
    <Layout>
      {(visible, setVisible) => (
        <Wrapper>
          <Banner
            backgroundImage="https://cdn.byai.com/static/intro/img/workphone/banner/bg.png"
            rightImage="https://cdn.byai.com/static/intro/img/workphone/banner/%E6%89%8B%E6%9C%BA.png"
            mobileImage="https://cdn.byai.com/static/intro/img/workphone/H5/pt5.png"
            title="智能工作手机"
            desc1="企业级智能销售管理解决方案"
            desc2="针对销售业务特性，打造以人为本、AI大数据驱动的专业行业解决方案，为销售全过程智能化提供新的工作方式。"
            text="立即体验"
            height="715px"
            onBtnClick={() => setVisible(true)}
          />
          <VideoContent>
            <video
              src="https://cdn.byai.com/static/intro/img/workphone/promotional-video-1222.mp4"
              controls
              playsInline
            />
          </VideoContent>
          {Form && <Form />}
          <FourColNew title1="解决管理难题" title2="提升销售效率" ability={ability} bac="#fff" titleBreak />
          <FourColNew
            title1="帮助企业降本增效"
            ability={ability1}
            mr="200px"
            bgc="url(https://cdn.byai.com/static/intro/img/workphone/bg2.png) no-repeat center center #F8F9FB"
          />
          <PageTitle>百应 智能工作手机</PageTitle>
          <DataVisualContent>
            <DataVisualWrapper hasBtn className="white">
              <Container>
                <Row className="data-visual-wrapper">
                  <DescCol lg={10} md={10} sm={24}>
                    <h3>手机风控管理</h3>
                    <Visible md lg xl xxl xxxl>
                      <div className="p-wrapper">
                        <p>帮助企业科学、高效的管理员工工作手机； </p>
                        <p>工作手机设备、应用及关键数据管理，保证数据安全；</p>
                        <p>规范员工行为、保证企业数据安全；</p>
                        <p>降低企业运营风险。</p>
                      </div>
                    </Visible>
                    <Visible sm xs>
                      <div className="p-wrapper">
                        <p>
                          电话、面谈音频自动转文字；客户沟通智能质检，分析沟通亮点及不足；及时发现问题找到最佳销售模式；指导销售改进话术
                        </p>
                        <Link href="/workPhone/phoneManagement">
                          <GetMoreLink style={{ color: '#2F82F8' }}>
                            <span>
                              了解更多 <AngleRight className="icon" />
                            </span>
                          </GetMoreLink>
                        </Link>
                      </div>
                    </Visible>

                    <Visible md lg xl xxl xxxl>
                      <GetMoreBtn onClick={() => (location.href = '/workPhone/phoneManagement')}>
                        了解更多
                        <AngleRight className="icon" />{' '}
                      </GetMoreBtn>
                    </Visible>
                  </DescCol>
                  <DescImgCol lg={14} md={14} sm={24}>
                    <img
                      src="https://cdn.byai.com/static/intro/img/workphone/%E6%89%8B%E6%9C%BA%E9%A3%8E%E6%8E%A7%E7%AE%A1%E7%90%86-1222.png"
                      alt=""
                    />
                  </DescImgCol>
                </Row>
              </Container>
            </DataVisualWrapper>
            <DataVisualWrapper odd hasBtn className="grey">
              <Container>
                <Row className="data-visual-wrapper">
                  <DescImgColNew lg={14} md={14} sm={24}>
                    <img
                      className="move-left"
                      src="https://cdn.byai.com/static/intro/img/workphone/%E5%BE%AE%E4%BF%A1%E9%A3%8E%E6%8E%A7%E7%AE%A1%E7%90%86-1222.png"
                      alt=""
                    />
                  </DescImgColNew>
                  <DescCol lg={10} md={10} sm={24}>
                    <h3>微信风控管理</h3>
                    <Visible md lg xl xxl xxxl>
                      <div className="p-wrapper">
                        <p>帮助企业获取社交软件工作数据； </p>
                        <p>补齐数据短板，打造完整数据链；</p>
                        <p>建立企业私域流量，客户资料长久保存；</p>
                        <p>微信沟通智能质检，规范员工行为。</p>
                      </div>
                      <GetMoreBtn onClick={() => (location.href = '/workPhone/wechatManagement')}>
                        了解更多
                        <AngleRight className="icon" />{' '}
                      </GetMoreBtn>
                    </Visible>
                    <Visible sm xs>
                      <div className="p-wrapper">
                        <p>
                          帮助企业获取社交软件工作数据；补齐数据短板，打造完整数据链；建立企业私域流量，客户资料长久保存；微信沟通智能质检，规范员工行为。
                        </p>
                        <Link href="/workPhone/wechatManagement">
                          <GetMoreLink style={{ color: '#2F82F8' }}>
                            <span>
                              了解更多 <AngleRight className="icon" />
                            </span>
                          </GetMoreLink>
                        </Link>
                      </div>
                    </Visible>
                  </DescCol>
                </Row>
              </Container>
            </DataVisualWrapper>
            <DataVisualWrapper hasBtn className="white">
              <Container>
                <Row className="data-visual-wrapper">
                  <DescCol lg={10} md={10} sm={24}>
                    <h3>员工管理</h3>
                    <Visible md lg xl xxl xxxl>
                      <div className="p-wrapper">
                        <p>快速分析掌握销售执行情况，量化销售工作</p>
                        <p>行为管理，有效监管员工拜访工作轨迹</p>
                        <p>客户数据统计，工作情况清晰展现</p>
                        <p>数据安全，有效防止客户资源流失</p>
                      </div>
                      <GetMoreBtn onClick={() => (location.href = '/workPhone/staffManagement')}>
                        了解更多
                        <AngleRight className="icon" />{' '}
                      </GetMoreBtn>
                    </Visible>
                    <Visible sm xs>
                      <div className="p-wrapper">
                        <p>
                          快速分析掌握销售执行情况，量化销售工作；行为管理，有效监管员工拜访工作轨迹；客户数据统计，工作情况清晰展现；数据安全，有效防止客户资源流失。
                        </p>
                        <Link href="/workPhone/staffManagement">
                          <GetMoreLink style={{ color: '#2F82F8' }}>
                            <span>
                              了解更多 <AngleRight className="icon" />
                            </span>
                          </GetMoreLink>
                        </Link>
                      </div>
                    </Visible>
                  </DescCol>
                  <DescImgCol lg={14} md={14} sm={24}>
                    <img
                      src="https://cdn.byai.com/static/intro/img/workphone/%E5%91%98%E5%B7%A5%E7%AE%A1%E7%90%86-1222.png"
                      alt=""
                    />
                  </DescImgCol>
                </Row>
              </Container>
            </DataVisualWrapper>
            <DataVisualWrapper odd hasBtn className="grey">
              <Container>
                <Row className="data-visual-wrapper">
                  <DescImgColNew lg={14} md={14} sm={24}>
                    <img
                      className="move-left"
                      src="https://cdn.byai.com/static/official-website/product/workPhone/function.png"
                      alt=""
                    />
                  </DescImgColNew>
                  <DescCol lg={10} md={10} sm={24}>
                    <h3>客户关系管理</h3>
                    <div className="p-wrapper">
                      <p>智慧CRM，整合客户资源，分配销售线索，管理客户标签； </p>
                      <p>来电弹屏，避免遗漏重要商机；</p>
                      <p>挂机弹屏，自定汇总客户意向。</p>
                      <Visible xs sm>
                        <Link href="/workPhone/customerRelationship">
                          <GetMoreLink style={{ color: '#2F82F8' }}>
                            <span>
                              了解更多 <AngleRight className="icon" />
                            </span>
                          </GetMoreLink>
                        </Link>
                      </Visible>
                    </div>
                    <Visible md lg xl xxl xxxl>
                      <GetMoreBtn onClick={() => (location.href = '/workPhone/customerRelationship')}>
                        了解更多
                        <AngleRight className="icon" />{' '}
                      </GetMoreBtn>
                    </Visible>
                  </DescCol>
                </Row>
              </Container>
            </DataVisualWrapper>
          </DataVisualContent>
          <MarketingContentNew
            showTaste={true}
            onBtnClick={() => setVisible(true)}
            title={
              <>
                技术支撑，
                <br />
                满足大型企业多种需求
              </>
            }
            list={[
              {
                icon: 'https://cdn.byai.com/static/intro/img/workphone/PaaSk%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B0.svg',
                title: 'PaaS开放平台',
                desc: '丰富的API和SDK，支持定制企业专属的应用',
              },
              {
                icon: 'https://cdn.byai.com/static/intro/img/workphone/%E9%83%A8%E7%BD%B2%E6%96%B9%E6%A1%88.svg',
                title: '灵活部署方案',
                desc: '支持公有云，私有云，混合等各种部署方式',
              },
              {
                icon: 'https://cdn.byai.com/static/intro/img/workphone/%E5%AE%9A%E5%88%B6%E5%8C%96%E6%9C%8D%E5%8A%A1.svg',
                title: '定制化服务',
                desc: '支持大型销售团队定制开发服务',
              },
            ]}
            reverse
            bg="url(https://cdn.byai.com/static/intro/img/workphone/bg3.png) no-repeat center center"
          />
          <MarketingContentNew
            showTaste={true}
            onBtnClick={() => setVisible(true)}
            title={
              <>
                提高团队执行力
                <br />
                快速提升销售业绩
              </>
            }
            list={[
              {
                icon: 'https://cdn.byai.com/static/intro/img/workphone/%E5%AE%A2%E6%88%B7%E8%B5%84%E6%BA%90.svg',
                title: '留住客户资源',
                desc: '企业快速效益增长',
              },
              {
                icon: 'https://cdn.byai.com/static/intro/img/workphone/%E9%94%80%E5%94%AE%E8%BF%87%E7%A8%8B%E7%AE%A1%E6%8E%A7.svg',
                title: '销售过程管控',
                desc: '提高团队执行力',
              },
              {
                icon: 'https://cdn.byai.com/static/intro/img/workphone/%E7%BB%A9%E6%95%88%E6%99%BA%E8%83%BD%E8%80%83%E6%A0%B8.svg',
                title: '绩效智能考核',
                desc: '快速提升销售业绩',
              },
            ]}
            hasBtn
            bg="url(https://cdn.byai.com/static/intro/img/workphone/bg4.png) no-repeat center center"
          />
          <Visible md lg xl xxl xxxl>
            <div style={{ height: 80 }} />
          </Visible>
          <Intro bottom={-5}>
            <Row justify="center">
              <BigTitleWrapper>
                <h1>使用场景</h1>
              </BigTitleWrapper>
            </Row>
            <Row justify="center">
              {SERVICE_OPERATE.map((item, index) => (
                <ShowCardNew cover={item.coverImage}>
                  <div className="wrapper">
                    <div className="cover" />
                    <span style={{ width: 160 }}>{item.title}</span>
                  </div>
                </ShowCardNew>
              ))}
            </Row>
          </Intro>
          <Row justify="center">
            <TradeMoreCol>
              <Link href="/solutions">
                <a style={{ color: '#2F82F8' }}>
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
          {Form ? (
            <Form />
          ) : (
            <VoiceFooter
              title="和42000+顶级企业一起，探索大数据+AI智能的运营与销售"
              btn="免费体验"
              mTitle1="和42000+顶级企业一起探索"
              mTitle2="大数据+AI智能的运营与销售"
              img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
              onBtnClick={() => setVisible(true)}
            />
          )}
        </Wrapper>
      )}
    </Layout>
  );
};

export default WorkPhoneHome;
