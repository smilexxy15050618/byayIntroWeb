import Link from 'next/link';
import React from 'react';
import { Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { DescImgCol } from '../../src/components/clew/descImg';
import DescImgColNew from '../../src/components/clew/descImgCol';
import VoiceFooter from '../../src/components/clew/footer';
import { BigTitleWrapper, ShowCard, TradeMoreCol } from '../../src/components/clew/style';
import { DescCol } from '../../src/components/homepage/DescContent';
import { Layout } from '../../src/components/Layout';
import { DataVisualWrapper, Wrapper } from '../../src/components/product';
import { BannerImg, Intro, Title } from '../../src/components/service';

const SERVICE_OPERATE = [
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/clew/zhinengwaihu.png',
    title: '一键智能外呼',
  },
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/clew/xiansuoqingxi.png',
    title: '销售线索清洗',
  },
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/clew/kehuwajue.png',
    title: '意向客户挖掘',
  },
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/clew/shichangdiaoyan.png',
    title: '市场调研分析',
  },
];

const DescTitleWrap = styled.div`
  padding: 60px 0;
  text-align: center;
`;

const DescTitle = styled.p`
  font-size: 36px;
  font-weight: 400;
  line-height: 54px;
  margin-bottom: 0;
  font-size: 16px;
`;

const Clew = () => {
  return (
    <Layout>
      {(visible, setVisible) => (
        <Wrapper>
          <BannerImg
            title="智能搜客"
            desc="市场营销利器，大数据精准挖掘，拓客效率提升10倍"
            desc2=""
            text="立即体验"
            backgroundImage="https://cdn.byai.com/static/official-website/product/clew/clew.svg"
            mobileBackgroundImage="https://cdn.byai.com/node_front/1572956984838/%E7%A7%BB%E5%8A%A8%E7%AB%AF-%E4%BA%A7%E5%93%81-%E6%99%BA%E8%83%BD%E7%BA%BF%E7%B4%A2.png"
            onBtnClick={() => setVisible(true)}
          />
          <Visible sm xs>
            <DescTitleWrap>
              <DescTitle>大数据精准搜客</DescTitle>
              <DescTitle>一键外呼省时高效</DescTitle>
            </DescTitleWrap>
          </Visible>
          <Visible md lg xl xxl xxxl>
            <Title
              title="大数据精准搜客，一键外呼省时高效"
              desc="搜企业、找客户、拓市场，精准行业额细分，智能外呼更轻松"
            />
          </Visible>
          <DataVisualWrapper>
            <Container>
              <Row className="data-visual-wrapper">
                <DescCol lg={10} md={10} sm={24}>
                  <h3>海量线索</h3>
                  <Visible sm xs>
                    <h3>省时省力省成本 </h3>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>省时省力省成本 </p>
                      <p>企业信息快速查询，精准找到所需企业详细信息</p>
                    </div>
                  </Visible>
                </DescCol>
                <DescImgCol lg={14} md={14} sm={24}>
                  <img
                    src="https://cdn.byai.com/static/official-website/product/clew/tu1.png"
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
                <DescImgColNew lg={14} md={14} sm={24}>
                  <img
                    className="move-left"
                    src="https://cdn.byai.com/static/official-website/product/clew/tu2.png"
                    alt=""
                  />
                </DescImgColNew>
                <DescCol lg={10} md={10} sm={24}>
                  <h3>精准筛选</h3>
                  <Visible sm xs>
                    <h3>匹配各类行业客群 </h3>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>关键词精准搜索 </p>
                      <p>多纬度筛选，精准匹配各类行业客群</p>
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
                  <h3>一键外呼</h3>
                  <Visible sm xs>
                    <h3>高效率意向筛选</h3>
                  </Visible>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>高效率意向筛选</p>
                      <p>无缝对接电话机器人，批量极速触达，线索即筛即用</p>
                    </div>
                  </Visible>
                </DescCol>
                <DescImgCol lg={14} md={14} sm={24}>
                  <img
                    src="https://cdn.byai.com/static/official-website/product/clew/tu3.png"
                    alt=""
                    style={{ marginBottom: 20, marginTop: 20 }}
                  />
                </DescImgCol>
              </Row>
            </Container>
          </DataVisualWrapper>
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
                    <span style={{ width: 160 }}>{item.title}</span>
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
            title="精准搜客 一键外呼"
            btn="免费体验"
            img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
            onBtnClick={() => setVisible(true)}
          />
        </Wrapper>
      )}
    </Layout>
  );
};

export default Clew;
