import React from 'react';
import { Layout } from '../../src/components/Layout';
import { Container, Row } from 'react-grid-system';
import { DescCol } from '../../src/components/workPhone/DescContentNew';
import { DataVisualWrapper, Wrapper } from '../../src/components/product';
import styled from 'styled-components';
import VoiceFooter from '../../src/components/order/footer';
import { DescImgCol } from '../../src/components/clew/descImg';
import DescImgColNew from '../../src/components/clew/descImgCol';
import DescCard from '../../src/components/workPhone/DescCard';
import Banner from '../../src/components/workPhone/Banner';
import { DataVisualContent } from '../../src/components/workPhone/DataVisualContent';

const DescCardProps = {
  cardList: [
    {
      title: '手机风控管理',
      cover:
        'https://cdn.byai.com/static/intro/img/workphone/descCard/%E6%89%8B%E6%9C%BA%E9%A3%8E%E6%8E%A7%E7%AE%A1%E7%90%86.png',
      mobileCover:
        'https://cdn.byai.com/static/intro/img/workphone/showCardNew/%E6%89%8B%E6%9C%BA%E9%A3%8E%E6%8E%A7%E7%AE%A1%E7%90%86_m.png',
      desc: [
        '帮助企业科学、高效的管理员工工作手机；',
        '工作手机设备、应用及关键数据管理；',
        '规范员工行为、保证企业数据安全；',
        '降低企业运营风险。',
      ],
      path: '/workPhone/phoneManagement',
    },
    {
      title: '员工管理',
      cover: 'https://cdn.byai.com/static/intro/img/workphone/descCard/%E5%91%98%E5%B7%A5%E7%AE%A1%E7%90%86.png',
      mobileCover:
        'https://cdn.byai.com/static/intro/img/workphone/showCardNew/%E5%91%98%E5%B7%A5%E7%AE%A1%E7%90%86_m.png',
      desc: [
        '快速分析掌握销售执行情况，量化销售工作；',
        '行为管理，有效监管员工拜访工作轨迹；',
        '客户数据统计，工作情况清晰展现；',
        '数据安全，有效防止客户资源流失。',
      ],
      path: '/workPhone/staffManagement',
    },
    {
      title: '客户关系管理',
      cover:
        'https://cdn.byai.com/static/intro/img/workphone/descCard/%E5%AE%A2%E6%88%B7%E5%85%B3%E7%B3%BB%E7%AE%A1%E7%90%86.png',
      mobileCover:
        'https://cdn.byai.com/static/intro/img/workphone/showCardNew/%E5%AE%A2%E6%88%B7%E5%85%B3%E7%B3%BB%E7%AE%A1%E7%90%86_m.png',
      desc: [
        '智慧CRM，整合客户资源',
        '分配销售线索，管理客户标签',
        '来电弹层、遗漏重要商机',
        '挂机弹屏，自动汇总那个客户意向',
      ],
      path: '/workPhone/customerRelationship',
    },
  ],
};

export default props => {
  return (
    <Layout>
      {(visible, setVisible) => (
        <Wrapper>
          <Banner
            title="微信风控管理"
            desc1="企业级智能销售管理解决方案"
            desc2="建立企业私域流量，形成与客户的永久连接关系"
            backgroundImage="https://cdn.byai.com/static/intro/img/workphone/banner/wechat_bg.png"
            rightImage="https://cdn.byai.com/static/intro/img/workphone/banner/wechat_image.png"
            mobileImage="https://cdn.byai.com/static/intro/img/workphone/H5/pt2.png"
          />
          <DataVisualContent>
            <DataVisualWrapper>
              <Container>
                <Row className="data-visual-wrapper">
                  <DescCol lg={10} md={10} sm={24}>
                    <h3>聊天内容管理</h3>
                    <div className="p-wrapper">
                      <p>
                        文字、视频、图像、语音消息等记录同步上传云端长期保存，随时查看员工与客户沟通详情，同时又可以避免销售带走客户信息，降低客户流失风险。
                      </p>
                    </div>
                  </DescCol>
                  <DescImgCol lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/wechatManage_1.png" alt="" />
                  </DescImgCol>
                </Row>
              </Container>
            </DataVisualWrapper>
            <DataVisualWrapper odd>
              <Container>
                <Row className="data-visual-wrapper">
                  <DescImgColNew lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/wechatManage_2.png" alt="" />
                  </DescImgColNew>
                  <DescCol lg={10} md={10} sm={24}>
                    <h3>敏感行为管理</h3>
                    <div className="p-wrapper">
                      <p>
                        出现辱骂、回扣等自定义名感词汇以及删除联系人、删除聊天记录、登录PC客户端、推送名片
                        、推送位置等敏感行为时，会及时的发出预警提醒管理者介入。
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
                    <h3>挂机一键加微信</h3>
                    <div className="p-wrapper">
                      <p>电话和微信联动，实现销售自动化，打完电话自动加微信。</p>
                    </div>
                  </DescCol>
                  <DescImgCol lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/wechatManage_3.png" alt="" />
                  </DescImgCol>
                </Row>
              </Container>
            </DataVisualWrapper>
            <DataVisualWrapper odd>
              <Container>
                <Row className="data-visual-wrapper">
                  <DescImgColNew lg={14} md={14} sm={24}>
                    <img src="https://cdn.byai.com/static/intro/img/workphone/wechatManage_4.png" alt="" />
                  </DescImgColNew>
                  <DescCol lg={10} md={10} sm={24}>
                    <h3>合规技术更安全</h3>
                    <div className="p-wrapper">
                      <p>与手机厂商官方合作，合规方式获取数据，不暴力修改社交软件，系统安全稳定，避免外挂封号隐患。</p>
                    </div>
                  </DescCol>
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
