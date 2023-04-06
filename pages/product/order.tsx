import Link from 'next/link';
import React from 'react';
import { Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { DescImgCol } from '../../src/components/clew/descImg';
import DescImgColNew from '../../src/components/clew/descImgCol';
import { ShowCard, TradeMoreCol } from '../../src/components/clew/style';
import { DescCol } from '../../src/components/homepage/DescContent';
import { Layout } from '../../src/components/Layout';
import VoiceFooter from '../../src/components/order/footer';
import { DescColNew } from '../../src/components/order/style';
import { BigTitleWrapper, DataVisualWrapper } from '../../src/components/product';
import { BannerImg, Intro, Title } from '../../src/components/service';

const SERVICE_OPERATE = [
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/order/shouqianzixun.png',
    title: '售前咨询',
  },
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/order/shouhoufuwu.png',
    title: '售后服务',
  },
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/order/liuchengshenpi.png',
    title: '流程审批',
  },
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/order/tuikuanweiquan.png',
    title: '退款维权',
  },
];

const Wrapper = styled.div`
  background: #fff;
  h1 {
    border: 0;
  }
  .demand-img {
    height: 440px;
    box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);
  }
`;

const DescTitleWrap = styled.div`
  padding: 60px 0;
  text-align: center;
`;

const DescTitle = styled.p`
  font-size: 36px;
  font-weight: 400;
  line-height: 54px;
  margin-bottom: 0;
  ]font-size: 16px;
`;

const Divider = styled.div`
  height: 1px;
  background: #eee;
`;

const Order = () => {
  return (
    <Layout>
      {(visible, setVisible) => (
        <Wrapper>
          <BannerImg
            title="协同工单"
            desc="灵活、规范、高效、标准化企业服务流程"
            desc2=""
            text="立即体验"
            backgroundImage="https://cdn.byai.com/static/official-website/product/order/order.svg"
            mobileBackgroundImage="https://cdn.byai.com/node_front/1572956946230/%E7%A7%BB%E5%8A%A8%E7%AB%AF-%E4%BA%A7%E5%93%81-%E6%99%BA%E8%83%BD%E5%B7%A5%E5%8D%95.png"
            onBtnClick={() => setVisible(true)}
          />
          <Visible sm xs>
            <DescTitleWrap>
              <DescTitle>协作更高效</DescTitle>
              <DescTitle>客户更满意</DescTitle>
            </DescTitleWrap>
          </Visible>
          <Visible md lg xl xxl xxxl>
            <Title title="协作更高效，客户更满意" desc="用工单，让团队协作更高效、业务流程标准化、服务质量有保障" />
          </Visible>
          <DataVisualWrapper>
            <Container>
              <Row className="data-visual-wrapper">
                <DescCol lg={12} md={12} sm={24}>
                  <h3>无缝流转，高效协同</h3>
                  <Visible sm xs>
                    <h3>跨部门协作再也不用跑断腿</h3>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>快速创建，灵活指派，多渠道实时提醒</p>
                      <p>跨部门协作再也不用跑断腿</p>
                    </div>
                  </Visible>
                </DescCol>
                <DescImgCol lg={12} md={12} sm={24}>
                  <img
                    src="https://cdn.byai.com/static/official-website/product/order/tu1.png"
                    alt=""
                    style={{ marginBottom: 20, marginTop: 20 }}
                  />
                </DescImgCol>
              </Row>
            </Container>
          </DataVisualWrapper>
          <DataVisualWrapper odd>
            <Container>
              <Row className="data-visual-wrapper">
                <DescImgColNew lg={12} md={12} sm={24}>
                  <img
                    className="move-left"
                    src="https://cdn.byai.com/static/official-website/product/order/tu2-center.png"
                    style={{ marginBottom: 20, marginTop: 20 }}
                    alt=""
                  />
                </DescImgColNew>
                <DescCol lg={12} md={12} sm={24}>
                  <Visible md lg xl xxl xxxl>
                    <h3>模板自定义，规范业务流程</h3>
                  </Visible>
                  <Visible sm xs>
                    <h3>模板自定</h3>
                    <h3>规范业务流程</h3>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>贴合实际业务场景，灵活定制不同工单模板 </p>
                      <p>不一样的业务，一样的规范高效</p>
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
                  <Visible md lg xl xxl xxxl>
                    <h3>关联CRM，精准处理工单</h3>
                  </Visible>
                  <Visible sm xs>
                    <h3>关联CRM</h3>
                    <h3>精准处理工单</h3>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>无缝对接百应SCRM，完整展现客户资料、跟进记录</p>
                      <p>丰富信息维度，辅助工单处理</p>
                    </div>
                  </Visible>
                </DescCol>
                <DescImgCol lg={12} md={12} sm={24}>
                  <img
                    src="https://cdn.byai.com/static/official-website/product/order/tu3.png"
                    alt=""
                    style={{ marginBottom: 20, marginTop: 20 }}
                  />
                </DescImgCol>
              </Row>
            </Container>
          </DataVisualWrapper>
          <DataVisualWrapper odd>
            <Container>
              <Row className="data-visual-wrapper">
                <DescImgColNew lg={16} md={16} sm={24}>
                  <img
                    className="move-left"
                    src="https://cdn.byai.com/static/official-website/product/order/tu4.png"
                    alt=""
                    style={{ marginBottom: 20, marginTop: 20 }}
                  />
                </DescImgColNew>
                <DescColNew lg={7} md={8} sm={24}>
                  <Visible md lg xl xxl xxxl>
                    <h3>及时获取反馈，保证问题解决</h3>
                  </Visible>
                  <Visible sm xs>
                    <h3>及时获取反馈</h3>
                    <h3>保证问题解决</h3>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>及时获取任务反馈，提升处理效率</p>
                      <p>跟进记录一目了然，保证问题解决</p>
                    </div>
                  </Visible>
                </DescColNew>
              </Row>
            </Container>
          </DataVisualWrapper>
          <Visible md lg xl xxl xxxl>
            <Divider />
          </Visible>
          <Intro bottom={-5}>
            <Row justify="center">
              <BigTitleWrapper>
                <h1>使用场景</h1>
              </BigTitleWrapper>
            </Row>
            <Row justify="center">
              {SERVICE_OPERATE.map((item, index) => (
                <ShowCard cover={item.coverImage}>
                  <div className="wrapper">
                    <div className="cover" />
                    <div className="mask" />
                    <span>{item.title}</span>
                  </div>
                </ShowCard>
              ))}
            </Row>
          </Intro>
          <Row justify="center">
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
          <VoiceFooter
            title="百应工单，让企业协作流程更高效"
            mTitle1="协同工单"
            mTitle2="让企业协作流程更高效"
            btn="免费体验"
            img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
            onBtnClick={() => setVisible(true)}
          />
        </Wrapper>
      )}
    </Layout>
  );
};

export default Order;
