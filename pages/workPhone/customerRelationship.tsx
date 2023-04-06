import React from 'react';
import { Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { DescImgCol } from '../../src/components/clew/descImg';
import DescImgColNew from '../../src/components/clew/descImgCol';
import { Layout } from '../../src/components/Layout';
import VoiceFooter from '../../src/components/order/footer';
import { DataVisualWrapper, Wrapper } from '../../src/components/product';
import Banner from '../../src/components/workPhone/Banner';
import { DataVisualContent } from '../../src/components/workPhone/DataVisualContent';
import DescCard from '../../src/components/workPhone/DescCard';
import { DescCol } from '../../src/components/workPhone/DescContentNew';

const DescCardProps = {
  cardList: [
    {
      title: '手机风控管理',
      cover:
        'https://cdn.byai.com/static/intro/img/workphone/descCard/%E6%89%8B%E6%9C%BA%E9%A3%8E%E6%8E%A7%E7%AE%A1%E7%90%86.png',
      desc: [
        '帮助企业科学、高效的管理员工工作手机；',
        '工作手机设备、应用及关键数据管理；',
        '规范员工行为、保证企业数据安全；',
        '降低企业运营风险。',
      ],
      path: '/workPhone/phoneManagement',
      mobileCover:
        'https://cdn.byai.com/static/intro/img/workphone/showCardNew/%E6%89%8B%E6%9C%BA%E9%A3%8E%E6%8E%A7%E7%AE%A1%E7%90%86_m.png',
    },
    {
      title: '微信风控管理',
      cover:
        'https://cdn.byai.com/static/intro/img/workphone/descCard/%E5%BE%AE%E4%BF%A1%E9%A3%8E%E6%8E%A7%E7%AE%A1%E7%90%86.png',
      desc: [
        '帮助企业获取社交软件工作数据；',
        '补齐数据短板，打造完整数据链；',
        '建立企业私域流量，客资料长久保存；',
        '微信沟通智能质检，规范员工行为。',
      ],
      path: '/workPhone/wechatManagement',
      mobileCover:
        'https://cdn.byai.com/static/intro/img/workphone/showCardNew/%E5%BE%AE%E4%BF%A1%E9%A3%8E%E6%8E%A7%E7%AE%A1%E7%90%86_m.png',
    },
    {
      title: '员工管理',
      cover: 'https://cdn.byai.com/static/intro/img/workphone/descCard/%E5%91%98%E5%B7%A5%E7%AE%A1%E7%90%86.png',
      desc: [
        '快速分析掌握销售执行情况，量化销售工作；',
        '行为管理，有效监管员工拜访工作轨迹；',
        '客户数据统计，工作情况清晰展现；',
        '数据安全，有效防止客户资源流失。',
      ],
      path: '/workPhone/staffManagement',
      mobileCover:
        'https://cdn.byai.com/static/intro/img/workphone/showCardNew/%E5%AE%A2%E6%88%B7%E5%85%B3%E7%B3%BB%E7%AE%A1%E7%90%86_m.png',
    },
  ],
};

const DescTitle = styled.p`
  font-weight: bold;
  margin-bottom: 0.5em;
  font-size: 16px;
`;

export default props => {
  return (
    <Layout>
      {(visible, setVisible) => (
        <Wrapper>
          <Banner
            title="客户关系管理"
            desc1="企业级智能销售管理解决方案"
            desc2="智能CRM，整合客户资源，工作效率全面提升"
            backgroundImage="https://cdn.byai.com/static/intro/img/workphone/banner/customer_bg.png"
            rightImage="https://cdn.byai.com/static/intro/img/workphone/banner/customer_image.png"
            mobileImage="https://cdn.byai.com/static/intro/img/workphone/H5/pt4.png"
          />
          <DataVisualContent>
            <DataVisualWrapper>
              <Container>
                <Row className="data-visual-wrapper">
                  <DescCol lg={10} md={10} sm={24}>
                    <h3>客户CRM管理</h3>
                    <div className="p-wrapper">
                      <p>客户信息自动同步后台</p>
                      <p>客户公海：导入客户资源，分配客户线索</p>
                      <p>客户标签：支持客户打标，形成精准客户画像</p>
                      <p>商机阶段：管理客户商机阶段，划分客户分层</p>
                    </div>
                  </DescCol>
                  <DescImgCol lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/%20customerRelationship_1.png" alt="" />
                  </DescImgCol>
                </Row>
              </Container>
            </DataVisualWrapper>
            <DataVisualWrapper odd>
              <Container>
                <Row className="data-visual-wrapper">
                  <DescImgColNew lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/%20customerRelationship_2.png" alt="" />
                  </DescImgColNew>
                  <DescCol lg={10} md={10} sm={24}>
                    <h3>客户管理多端支持</h3>
                    <Visible md lg xl xxl xxxl>
                      <div className="p-wrapper">
                        <p>PC</p>
                        <p>手机终端APP</p>
                        <p>微信小程序</p>
                      </div>
                    </Visible>
                    <Visible sm xs>
                      <div className="p-wrapper">
                        <p>PC、手机终端APP、微信小程序</p>
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
                    <h3>自动跟进销售行为</h3>
                    <div className="p-wrapper">
                      <p>时间轴：自动记录客户跟进轨迹，复盘客户跟进情况</p>
                      <p>客户时间轴记录销售每次跟进行为</p>
                    </div>
                  </DescCol>
                  <DescImgCol lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/%20customerRelationship_3.png" alt="" />
                  </DescImgCol>
                </Row>
              </Container>
            </DataVisualWrapper>
            <DataVisualWrapper odd>
              <Container>
                <Row className="data-visual-wrapper">
                  <DescImgColNew lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/%20customerRelationship_4.png" alt="" />
                  </DescImgColNew>
                  <DescCol lg={10} md={10} sm={24}>
                    <h3>销售赋能</h3>
                    <div className="p-wrapper">
                      <DescTitle>来电弹屏 - 避免遗漏重要商机</DescTitle>
                      <p>客户来电自带基本信息及近期跟进情况</p>
                      <DescTitle>挂机弹屏 - 自动汇总客户意向</DescTitle>
                      <p>沟通结束立即记录客户意向，不用单独花时间整理资料</p>
                    </div>
                  </DescCol>
                </Row>
              </Container>
            </DataVisualWrapper>
            <DataVisualWrapper>
              <Container>
                <Row className="data-visual-wrapper">
                  <DescCol lg={10} md={10} sm={24}>
                    <h3>完善智能营销产品矩阵</h3>
                    <div className="p-wrapper">
                      <p>
                        百应手机数据与CRM、AICC无缝对接，精准获取客户生命周期用户画像，帮助企业高效引流，精准获客，以更低成本获取更多的商机，充分挖掘用户价值。
                      </p>
                    </div>
                  </DescCol>
                  <DescImgCol lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/%20customerRelationship_5.png" alt="" />
                  </DescImgCol>
                </Row>
              </Container>
            </DataVisualWrapper>
          </DataVisualContent>
          <DescCard {...DescCardProps} />
          <VoiceFooter
            title="和42000+顶级企业一起，探索大数据+AI智能的运营与销售"
            btn="免费体验"
            mTitle1="和42000+顶级企业一起探索"
            mTitle2="大数据+AI智能的运营与销售"
            img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
            onBtnClick={() => setVisible(true)}
          />
        </Wrapper>
      )}
    </Layout>
  );
};
