import Link from 'next/link';
import React from 'react';
import { Container, Row, Visible } from 'react-grid-system';
import VoiceFooter from '../src/components/aicc/footer';
import { DescImgCol } from '../src/components/clew/descImg';
import DescImgColNew from '../src/components/clew/descImgCol';
import { ShowCard, TradeMoreCol } from '../src/components/clew/style';
import { DescCol } from '../src/components/homepage/DescContent';
import { Layout } from '../src/components/Layout';
import FourCol from '../src/components/open/four-col';
import { BigTitleWrapper, DataVisualWrapper, Wrapper } from '../src/components/product';
import { Intro } from '../src/components/service';
import { FirstBanner } from '../src/components/workPhone/firstBanner';
import { MarketingContent } from '../src/components/workPhone/marketingContent';

const SERVICE_OPERATE = [
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/workPhone/xiaoshouguocheng%20.png',
    title: `销售过程管控`,
  },
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/workPhone/qiyeshuju.png',
    title: '企业数据保护',
  },
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/workPhone/kehugoutong.png',
    title: '客户沟通记录',
  },
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/workPhone/yuangongxingwei.png',
    title: '员工行为管理',
  },
];

const ability = [
  {
    logo: 'https://cdn.byai.com/node_front/1571811686465/%E5%85%A8%E9%9D%A2%E5%BC%80%E6%94%BE.svg',
    title: '打造完整数据链',
    desc: '收集员工工作数据，补齐数据短板，打造完整数据',
  },
  {
    logo: 'https://cdn.byai.com/static/official-website/product/workPhone/function-2.svg',
    title: '客户沟通全记录',
    desc: '客户沟通全记录，无需重复录入提高工作效率',
  },
  {
    logo: 'https://cdn.byai.com/static/official-website/product/workPhone/function-3.svg',
    title: '管控销售过程',
    desc: '帮助企业管控销售过程，提高管理效率，提升业绩',
  },
  {
    logo: 'https://cdn.byai.com/static/official-website/product/workPhone/function-4.svg',
    title: '数据保护',
    desc: '保证企业数据安全，规范员工行为',
  },
];
const WorkPhone = () => {
  return (
    <Layout>
      {(visible, setVisible) => (
        <Wrapper>
          <FirstBanner onBtnClick={() => setVisible(true)} />
          <FourCol title="特色优势" ability={ability} bgc="#fff" />
          <DataVisualWrapper>
            <Container>
              <Row className="data-visual-wrapper">
                <DescCol lg={10} md={10} sm={24}>
                  <h3>手机管理</h3>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>电话录音，完美支持语音自动转文字 </p>
                      <p>面销录音，有效管控员工现场沟通情况</p>
                      <p>客户销售跟进周期全渠道记录</p>
                    </div>
                  </Visible>
                </DescCol>
                <DescImgCol lg={14} md={14} sm={24}>
                  <img src="https://cdn.byai.com/static/official-website/product/workPhone/phone_manage.png" alt="" />
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
                    src="https://cdn.byai.com/static/official-website/product/workPhone/wx_manage.png"
                    alt=""
                  />
                </DescImgColNew>
                <DescCol lg={10} md={10} sm={24}>
                  <h3>微信管理</h3>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>微信记录同步，有效防止客户微信流失 </p>
                      <p>质检管理，有效监管微信沟通全过程，防止飞单、吃回扣</p>
                      <p>微信数据统计，有效提升营销管理效率</p>
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
                  <h3>员工管理</h3>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>快速分析掌握销售执行情况，量化销售工作</p>
                      <p>行为管理，有效监管员工拜访工作轨迹</p>
                      <p>客户数据统计，工作情况清晰展现</p>
                      <p>数据安全，有效防止客户资源流失</p>
                    </div>
                  </Visible>
                </DescCol>
                <DescImgCol lg={14} md={14} sm={24}>
                  <img
                    src="https://cdn.byai.com/static/official-website/product/workPhone/personnel_manage.png"
                    alt=""
                  />
                </DescImgCol>
              </Row>
            </Container>
          </DataVisualWrapper>
          <DataVisualWrapper odd style={{ marginBottom: 50 }}>
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
                  <h3>特色功能</h3>
                  <Visible md lg xl xxl xxxl>
                    <div className="p-wrapper">
                      <p>来电弹屏，避免遗漏重要商机 </p>
                      <p>挂机弹屏，自动汇总客户意向</p>
                    </div>
                  </Visible>
                </DescCol>
              </Row>
            </Container>
          </DataVisualWrapper>
          <MarketingContent
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
              { title: '留住客户资源', desc: '企业效快速益增长' },
              {
                title: '销售过程管控',
                desc: '提高团队执行力',
              },
              {
                title: '绩效智能考核',
                desc: '快速提升销售业绩',
              },
            ]}
          />

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
            title="和42000+顶级企业一起，探索大数据+AI智能的运营与销售"
            btn="免费体验"
            mTitle1="立即领取免费体验机会"
            mTitle2=""
            img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
            onBtnClick={() => setVisible(true)}
          />
        </Wrapper>
      )}
    </Layout>
  );
};

export default WorkPhone;
