import React from 'react';
import { Container, Row, Visible } from 'react-grid-system';
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
        'https://cdn.byai.com/static/intro/img/workphone/showCardNew/%E5%91%98%E5%B7%A5%E7%AE%A1%E7%90%86_m.png',
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
      path: '/workPhone/customerRelationship',
      mobileCover:
        'https://cdn.byai.com/static/intro/img/workphone/showCardNew/%E5%AE%A2%E6%88%B7%E5%85%B3%E7%B3%BB%E7%AE%A1%E7%90%86_m.png',
    },
  ],
};

export default props => {
  return (
    <Layout>
      {(visible, setVisible) => (
        <Wrapper>
          <Banner
            title="手机风控管理"
            desc1="企业级智能销售管理解决方案"
            desc2="帮助企业科学、高效的管理员工工作手机"
            backgroundImage="https://cdn.byai.com/static/intro/img/workphone/phoneManagement_BG.png"
            mobileImage="https://cdn.byai.com/static/intro/img/workphone/H5/pt1.png"
          />
          <DataVisualContent>
            <DataVisualWrapper>
              <Container>
                <Row className="data-visual-wrapper">
                  <DescCol lg={10} md={10} sm={24}>
                    <h3>通话、短信监管</h3>
                    <Visible md lg xl xxl xxxl>
                      <div className="p-wrapper">
                        <p>电话自动录音后台上传</p>
                        <p>短信记录自动备份</p>
                        <p>每一次客户沟通了如指掌</p>
                        <p>随时抽检考核员工沟通话术</p>
                      </div>
                    </Visible>
                    <Visible sm xs>
                      <div className="p-wrapper">
                        <p>电话自动录音后台上传、短信记录自动备份、每一次客户沟通了如指掌、随时抽检考核员工沟通话术</p>
                      </div>
                    </Visible>
                  </DescCol>
                  <DescImgCol lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/phoneManagement_1.png" alt="" />
                  </DescImgCol>
                </Row>
              </Container>
            </DataVisualWrapper>
            <DataVisualWrapper odd>
              <Container>
                <Row className="data-visual-wrapper">
                  <DescImgColNew lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/phoneManagement_2.png" alt="" />
                  </DescImgColNew>
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
                    <Visible sm xs>
                      <div className="p-wrapper">
                        <p>
                          电话、面谈音频自动转文字、客户沟通智能质检，分析沟通亮点及不足、及时发现问题找到最佳销售模式、指导销售改进话术
                        </p>
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
                    <h3>员工行为管理</h3>
                    <Visible md lg xl xxl xxxl>
                      <div className="p-wrapper">
                        <p>手机通话录音实时上传云端</p>
                        <p>来电备注显示</p>
                        <p>WiFi信息回传</p>
                        <p>新增联系人信息上传</p>
                      </div>
                    </Visible>
                    <Visible sm xs>
                      <div className="p-wrapper">
                        <p>手机通话录音实时上传云端、来电备注显示、WiFi信息回传、新增联系人信息上传</p>
                      </div>
                    </Visible>
                  </DescCol>
                  <DescImgCol lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/phoneManagement_3.png" alt="" />
                  </DescImgCol>
                </Row>
              </Container>
            </DataVisualWrapper>
            <DataVisualWrapper odd>
              <Container>
                <Row className="data-visual-wrapper">
                  <DescImgColNew lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/phoneManagement_4.png" alt="" />
                  </DescImgColNew>
                  <DescCol lg={10} md={10} sm={24}>
                    <h3>关键数据管理</h3>
                    <Visible md lg xl xxl xxxl>
                      <div className="p-wrapper">
                        <p>远程数据擦除：远程擦除设备的敏感数据</p>
                        <p>数据安全：防止应用内数据导出、拷贝、截屏</p>
                        <p>权限管理：蓝牙、定位等权限管理</p>
                      </div>
                    </Visible>
                    <Visible sm xs>
                      <div className="p-wrapper">
                        <p>
                          远程数据擦除：远程擦除设备的敏感数据、数据安全：防止应用内数据导出、拷贝、截屏、权限管理：蓝牙、定位等权限管理
                        </p>
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
                    <h3>应用管理</h3>
                    <Visible md lg xl xxl xxxl>
                      <div className="p-wrapper">
                        <p>预装APP且不可卸载</p>
                        <p>APP安装黑白名单</p>
                        <p>APP自动升级</p>
                      </div>
                    </Visible>
                    <Visible sm xs>
                      <div className="p-wrapper">
                        <p>预装APP且不可卸载、APP安装黑白名单、APP自动升级</p>
                      </div>
                    </Visible>
                  </DescCol>
                  <DescImgCol lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/phoneManagement_5.png" alt="" />
                  </DescImgCol>
                </Row>
              </Container>
            </DataVisualWrapper>
            <DataVisualWrapper odd>
              <Container>
                <Row className="data-visual-wrapper">
                  <DescImgColNew lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/phoneManagement_6.png" alt="" />
                  </DescImgColNew>
                  <DescCol lg={10} md={10} sm={24}>
                    <h3>设备管理</h3>
                    <Visible md lg xl xxl xxxl>
                      <div className="p-wrapper">
                        <p>设备定位：实时上传GPS位置信息定位</p>
                        <p>设备锁定：远程对手机进行锁定</p>
                        <p>通讯录管理：预制通讯录及刷新</p>
                        <p>设备管理：禁止设备刷机</p>
                      </div>
                    </Visible>
                    <Visible sm xs>
                      <div className="p-wrapper">
                        <p>
                          设备定位：实时上传GPS位置信息定位、设备锁定：远程对手机进行锁定、通讯录管理：预制通讯录及刷新、设备管理：禁止设备刷机
                        </p>
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
                    <h3>关键号码和账号隐藏</h3>
                    <Visible md lg xl xxl xxxl>
                      <div className="p-wrapper">
                        <p>关键信息隐藏</p>
                        <p>防止员工带走客户信息</p>
                        <p>保护企业客户资产</p>
                      </div>
                    </Visible>
                    <Visible sm xs>
                      <div className="p-wrapper">
                        <p>关键信息隐藏、防止员工带走客户信息、保护企业客户资产</p>
                      </div>
                    </Visible>
                  </DescCol>
                  <DescImgCol lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/phoneManagement_7.png" alt="" />
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
