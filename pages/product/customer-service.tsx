import React from 'react';
import { Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { DescImgCol } from '../../src/components/clew/descImg';
import { Layout } from '../../src/components/Layout';
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

const CustomerServiceWrapper = styled.div`
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

const ability = [
  {
    logo: 'https://cdn.byai.com/static/intro/img/customer-service/%E9%97%AE%E9%A2%98%E5%85%A8%E8%A7%A3%E5%86%B3.png',
    title: '问题全解决',
    desc: (
      <div>
        7x24小时全天候在线
        <br />
        问题解决率高达90%
      </div>
    ),
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/customer-service/%E6%9C%8D%E5%8A%A1%E6%9B%B4%E9%AB%98%E6%95%88.png',
    title: '服务更高效',
    desc: (
      <div>
        高并发应对海量咨询
        <br />
        效率提升一倍以上
      </div>
    ),
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/customer-service/%E7%94%A8%E6%88%B7%E6%9B%B4%E6%BB%A1%E6%84%8F.png',
    title: '用户更满意',
    desc: (
      <div>
        流畅对话完成复杂任务
        <br />
        用户满意度提升60%
      </div>
    ),
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/customer-service/%E7%BB%B4%E6%8A%A4%E6%9B%B4%E7%9C%81%E5%BF%83.png',
    title: '维护更省心',
    desc: (
      <div>
        20+行业知识图谱维
        <br />
        护成本降低80%
      </div>
    ),
  },
];

const moreAbilityList = [
  {
    desc: '多轮会话',
    src: 'https://cdn.byai.com/static/intro/img/customer-service/%E5%A4%9A%E8%BD%AE%E4%BC%9A%E8%AF%9D.png',
  },
  {
    desc: '情绪识别',
    src: 'https://cdn.byai.com/static/intro/img/customer-service/%E6%83%85%E7%BB%AA%E8%AF%86%E5%88%AB.png',
  },
  {
    desc: '意图识别',
    src: 'https://cdn.byai.com/static/intro/img/customer-service/%E6%84%8F%E5%9B%BE%E8%AF%86%E5%88%AB.png',
  },
  {
    desc: '用户画像',
    src: 'https://cdn.byai.com/static/intro/img/customer-service/%E7%94%A8%E6%88%B7%E7%94%BB%E5%83%8F.png',
  },
  {
    desc: '动态标签',
    src: 'https://cdn.byai.com/static/intro/img/customer-service/%E5%8A%A8%E6%80%81%E6%A0%87%E7%AD%BE.png',
  },
  {
    desc: '策略回复',
    src: 'https://cdn.byai.com/static/intro/img/customer-service/%E7%AD%96%E7%95%A5%E5%9B%9E%E5%A4%8D.png',
  },
  {
    desc: '人机协作',
    src: 'https://cdn.byai.com/static/intro/img/customer-service/%E4%BA%BA%E6%9C%BA%E5%8D%8F%E4%BD%9C.png',
  },
  {
    desc: '知识图谱',
    src: 'https://cdn.byai.com/static/intro/img/customer-service/%E7%9F%A5%E8%AF%86%E5%9B%BE%E8%B0%B1.png',
  },
  {
    desc: '场景语料',
    src: 'https://cdn.byai.com/static/intro/img/customer-service/%E5%9C%BA%E6%99%AF%E8%AF%AD%E6%96%99.png',
  },
  {
    desc: '场景模板',
    src: 'https://cdn.byai.com/static/intro/img/customer-service/%E5%9C%BA%E6%99%AF%E6%A8%A1%E7%89%88.png',
  },
  {
    desc: '自主学习',
    src: 'https://cdn.byai.com/static/intro/img/customer-service/%E8%87%AA%E4%B8%BB%E5%AD%A6%E4%B9%A0.png',
  },
  { desc: 'API拓展', src: 'https://cdn.byai.com/static/intro/img/customer-service/API%E6%8B%93%E5%B1%95.png' },
];

const OnlineCustomer = () => (
  <Layout>
    {(visible, setVisible) => (
      <Wrapper>
        <CustomerServiceWrapper>
          <Banner>
            <BannerImg
              className="online-service-banner"
              title="客服机器人"
              desc="全天候服务，独立解决 90%常见问题，降本增效，即刻响应"
              desc2="&nbsp;"
              text="立即体验"
              backgroundImage="https://cdn.byai.com/static/intro/img/customer-service/%E5%AE%A2%E6%9C%8D%E6%9C%BA%E5%99%A8%E4%BA%BA-PC-banner.png"
              mobileBackgroundImage="https://cdn.byai.com/static/intro/img/customer-service/%E5%AE%A2%E6%9C%8D%E6%9C%BA%E5%99%A8%E4%BA%BA-APP-%E5%A4%B4%E9%83%A8.png"
              onBtnClick={() => setVisible(true)}
            />
          </Banner>
          <FourCol title1="全智能服务用户，全场景赋能客服" ability={ability} titleBreak bgc="#fff" />
          <BreakTitle>
            <Visible xs sm>
              <h2>
                <div style={{ marginBottom: '15px' }}>懂用户与服务的</div>
                <div>智能机器人</div>
              </h2>
            </Visible>
            <Visible md lg xl xxl xxxl>
              <h2>懂用户与服务的智能机器人</h2>
            </Visible>
          </BreakTitle>
          <DataVisualWrapper odd>
            <Container>
              <Row className="data-visual-wrapper translate-x">
                <DescImgCol lg={14} md={14} sm={24}>
                  <img
                    src="https://cdn.byai.com/static/intro/img/customer-service/%E4%BC%9A%E5%80%BE%E5%90%AC.png"
                    alt=""
                  />
                </DescImgCol>
                <DescCol lg={10} md={10} sm={24} className="desc-col-title">
                  <Visible md lg xl xxl xxxl>
                    <h3>会倾听，准确理解用户诉求</h3>
                  </Visible>
                  <Visible xs sm>
                    <div className="title-mobile">
                      <h3>会倾听</h3>
                      <h3>准确理解用户诉求</h3>
                    </div>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>单轮问答、多轮会话、一问多答，沟通自然流畅</p>
                      <p>强大泛化能力，口语化表达也能准确识别</p>
                      <p>准确理解上下文，全面提取用户特征，快速识别用户意图</p>
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
                    <h3>懂业务，高效服务，聪明营销</h3>
                  </Visible>
                  <Visible xs sm>
                    <div className="title-mobile">
                      <h3>懂业务</h3>
                      <h3>高效服务，聪明营销</h3>
                    </div>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>政务、金融、教育等20+行业知识积累，深度优化，快速启动</p>
                      <p>轻松对接业务系统，自动完成信息查询、业务办理等复杂任务</p>
                      <p>支持多种行为交互模式，释放互动营销想象力</p>
                    </div>
                  </Visible>
                </DescCol>
                <DescImgCol lg={14} md={14} sm={24}>
                  <img
                    src="https://cdn.byai.com/static/intro/img/customer-service/%E6%87%82%E4%B8%9A%E5%8A%A1.png"
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
                    src="https://cdn.byai.com/static/intro/img/customer-service/%E7%9F%A5%E6%95%B0%E6%8D%AE.png"
                    alt=""
                  />
                </DescImgCol>
                <DescCol lg={10} md={10} sm={24} className="desc-col-title">
                  <Visible md lg xl xxl xxxl>
                    <h3>知数据，强大分析能力，驱动业务优化</h3>
                  </Visible>
                  <Visible xs sm>
                    <div className="title-mobile">
                      <h3>知数据，强大分析能力</h3>
                      <h3>驱动业务优化</h3>
                    </div>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>详尽对话记录，对话动态打标，智能构建用户画像</p>
                      <p>全面问答统计，实时热点分析，业务决策有据可依</p>
                      <p>实时监控舆情，提前预警风险，提升企业抗风险能力</p>
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
                    <h3>能成长，自主学习进化，一人轻松运营</h3>
                  </Visible>
                  <Visible xs sm>
                    <div className="title-mobile">
                      <h3>能成长，自主学习进化</h3>
                      <h3>一人轻松运营</h3>
                    </div>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>无监督主动学习未理解问题，持续自我进化</p>
                      <p>根据真实对话不断发现新知识点，完善知识储备</p>
                      <p>提供多种训练工具，自动构建知识库，让运营更省心</p>
                    </div>
                  </Visible>
                </DescCol>
                <DescImgCol lg={14} md={14} sm={24}>
                  <img
                    src="https://cdn.byai.com/static/intro/img/customer-service/%E8%83%BD%E6%88%90%E9%95%BF.png"
                    alt=""
                  />
                </DescImgCol>
              </Row>
            </Container>
          </DataVisualWrapper>
          <Visible md lg xl xxl xxxl>
            <BreakTitle className="white">
              <h2>专注，专业，为你而来</h2>
            </BreakTitle>
          </Visible>
          <Visible xs sm>
            <BreakTitle className="white">
              <h2>
                <div style={{ marginBottom: '15px' }}>专注，专业</div>
                <div>为你而来</div>
              </h2>
            </BreakTitle>
          </Visible>
          <MoreAbility abilityList={moreAbilityList} width={760} title={false} type={3} />
          <VoiceFooter
            title="和42000+顶级企业一起，探索大数据+AI智能的运营与销售"
            btn="免费体验"
            mTitle1="和42000+顶级企业一起探索"
            mTitle2="大数据+AI智能的运营与销售"
            img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
            onBtnClick={() => setVisible(true)}
          />
        </CustomerServiceWrapper>
      </Wrapper>
    )}
  </Layout>
);

export default OnlineCustomer;
