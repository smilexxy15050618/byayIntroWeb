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
      mobileCover:
        'https://cdn.byai.com/static/intro/img/workphone/showCardNew/%E6%89%8B%E6%9C%BA%E9%A3%8E%E6%8E%A7%E7%AE%A1%E7%90%86_m.png',
      path: '/workPhone/phoneManagement',
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
      mobileCover:
        'https://cdn.byai.com/static/intro/img/workphone/showCardNew/%E5%BE%AE%E4%BF%A1%E9%A3%8E%E6%8E%A7%E7%AE%A1%E7%90%86_m.png',
      path: '/workPhone/wechatManagement',
    },
    {
      title: '客户关系管理',
      cover:
        'https://cdn.byai.com/static/intro/img/workphone/descCard/%E5%AE%A2%E6%88%B7%E5%85%B3%E7%B3%BB%E7%AE%A1%E7%90%86.png',
      desc: [
        '智慧CRM，整合客户资源',
        '分配销售线索，管理客户标签',
        '来电弹层、遗漏重要商机',
        '挂机弹屏，自动汇总那个客户意向',
      ],
      mobileCover:
        'https://cdn.byai.com/static/intro/img/workphone/showCardNew/%E5%AE%A2%E6%88%B7%E5%85%B3%E7%B3%BB%E7%AE%A1%E7%90%86_m.png',
      path: '/workPhone/customerRelationship',
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
            title="员工管理"
            desc1="企业级智能销售管理解决方案"
            desc2="帮助企业科学、高效的管理员工工作手机"
            backgroundImage="https://cdn.byai.com/static/intro/img/workphone/banner/staff_bg.png"
            rightImage="https://cdn.byai.com/static/intro/img/workphone/banner/staff_image.png"
            mobileImage="https://cdn.byai.com/static/intro/img/workphone/H5/pt3.png"
          />
          <DataVisualContent>
            <DataVisualWrapper>
              <Container>
                <Row className="data-visual-wrapper">
                  <DescCol lg={10} md={10} sm={24}>
                    <h3>面销录音</h3>
                    <Visible md lg xl xxl xxxl>
                      <div className="p-wrapper">
                        <p>有效监管员工 现场沟通情况</p>
                        <p>录制面销过程对话，实时上传后台</p>
                        <p>自动转为文字，进行语义分析</p>
                      </div>
                    </Visible>
                    <Visible sm xs>
                      <div className="p-wrapper">
                        <p>有效监管员工 现场沟通情况、录制面销过程对话，实时上传后台自动转为文字，进行语义分析</p>
                      </div>
                    </Visible>
                  </DescCol>
                  <DescImgCol lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/StaffManagement_1.png" alt="" />
                  </DescImgCol>
                </Row>
              </Container>
            </DataVisualWrapper>
            <DataVisualWrapper odd>
              <Container>
                <Row className="data-visual-wrapper">
                  <DescImgColNew lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/staffManagement_2.png" alt="" />
                  </DescImgColNew>
                  <DescCol lg={10} md={10} sm={24}>
                    <h3>员工行为管理</h3>
                    <Visible md lg xl xxl xxxl>
                      <div className="p-wrapper">
                        <DescTitle>行为轨迹</DescTitle>
                        <p>记录外勤行为轨迹，停留位置、停留时长实时记录，销售去了哪里，清晰可见</p>
                        <DescTitle>时间轴</DescTitle>
                        <p>每日工作时间轴一目了然，工作情况随时掌握</p>
                        <DescTitle>员工面销签到</DescTitle>
                        <p>销售人员外勤拜访地点全记录</p>
                      </div>
                    </Visible>
                    <Visible sm xs>
                      <div className="p-wrapper">
                        <p>行为轨迹: 记录外勤行为轨迹，停留位置、停留时长实时记录，销售去了哪里，清晰可见</p>
                        <p>时间轴: 每日工作时间轴一目了然，工作情况随时掌握</p>
                        <p>员工面销签到: 销售人员外勤拜访地点全记录</p>
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
                    <h3>智能质检</h3>
                    <Visible md lg xl xxl xxxl>
                      <div className="p-wrapper">
                        <p>电话、面谈音频自动转文字</p>
                        <p>客户沟通智能质检，分析沟通亮点及不足</p>
                        <p>及时发现问题找到最佳销售模式</p>
                        <p>指导销售改进话术</p>
                      </div>
                    </Visible>
                    <Visible xs sm>
                      <div className="p-wrapper">
                        <p>
                          电话、面谈音频自动转文字、客户沟通智能质检，分析沟通亮点及不足、及时发现问题找到最佳销售模式、指导销售改进话术
                        </p>
                      </div>
                    </Visible>
                  </DescCol>
                  <DescImgCol lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/StaffManagement_3.png" alt="" />
                  </DescImgCol>
                </Row>
              </Container>
            </DataVisualWrapper>
            <DataVisualWrapper odd>
              <Container>
                <Row className="data-visual-wrapper">
                  <DescImgColNew lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/StaffManagement_4.png" alt="" />
                  </DescImgColNew>
                  <DescCol lg={10} md={10} sm={24}>
                    <h3>员工使用统计</h3>
                    <div className="p-wrapper">
                      <p>
                        快速分析掌握销售执行情况，量化销售工作。员工使用工作手机统计，电话记录与短信记录实时可查，可视化展现，KPI考核量化有依据，随时了解销售工作
                      </p>
                    </div>
                  </DescCol>
                </Row>
              </Container>
            </DataVisualWrapper>
            <DataVisualWrapper>
              <Container>
                <Row className="data-visual-wrapper">
                  <DescCol lg={10} md={10} sm={24}>
                    <h3>微信数据统计</h3>
                    <Visible md lg xl xxl xxxl>
                      <div className="p-wrapper">
                        <p>新增好友、沟通人数、联系人数、收发消息一目了然</p>
                        <p>微信制定KPI</p>
                      </div>
                    </Visible>
                    <Visible md xs>
                      <div className="p-wrapper">
                        <p>新增好友、沟通人数、联系人数、收发消息一目了然、微信制定KPI</p>
                      </div>
                    </Visible>
                  </DescCol>
                  <DescImgCol lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/StaffManagement_5.png" alt="" />
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
