import { App, NewsSolid } from '@indata/icon-byai';
import Link from 'next/link';
import * as React from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { CALL_NUMBER_400 } from '../constants';
import { media } from '../constants/style';
import { withOpenOriginLink } from '../high-components/OpenOriginLink';
import Box from './Box';
import ByHoverIcon from './common/ByHoverIcon';

const ByLink = withOpenOriginLink(Link);

const CMMI_SRC = '//cdn.byai.com/static/official-website/crm/CMMI.png';
const XIN_SRC = '//cdn.byai.com/static/official-website/crm/xin.png';
const PREFIX = 'https://cdn.byai.com/static/intro/img/footer';
const IMG_HOVER_INFO = `${PREFIX}/get-news.png`;
const IMG_DOWNLOAD_APP = `${PREFIX}/download-app.png`;
const CRM_IMG_HOVER_INFO =
  '//cdn.byai.com/static/official-website/crm/crm%E8%8E%B7%E5%8F%96%E6%9C%80%E6%96%B0%E8%B5%84%E8%AE%AF.png';
const CRM_IMG_DOWNLOAD_APP =
  '//cdn.byai.com/static/official-website/crm/crm%E4%B8%8B%E8%BD%BDAPP%E4%BD%93%E9%AA%8C.png';
const FOOTER_CONFIG = [
  {
    title: 'AI产品',
    list: [
      { name: '电话机器人', href: '/product/voice-robot' },
      { name: '文本机器人', href: '/product/text-robot' },
      { name: '分析机器人', href: '/product/quality-test-robot' },
      { name: '智能虚拟数字人', href: '/product/virtual-robot' },
      { name: '智能催收工作手机', href: '/product/workphone' },
      // { name: '星追智能催收', href: 'https://www.byai.com/product/star' }
    ],
  },
  {
    title: '快速通道',
    list: [
      { name: '客户登录', href: 'https://crm.byai.com/login' },
      { name: '服务商登录', href: 'https://boss.byai.com/login' },
      { name: '产品更新', href: 'https://www.byai.com/news' },
      { name: '', href: '' },
      // { name: '开发平台', href: 'https://open.byai.com/' },
    ],
  },
  {
    title: '关于我们',
    list: [
      { name: '关于百应', href: '/about' },
      { name: '新闻中心', href: '/news' },
      { name: '生态合作', href: '/partner/ecology' },
      { name: '渠道合作', href: '/form?formType=3' },
      { name: '招贤纳士', href: 'https://www.lagou.com/gongsi/154789.html' },
    ],
  },
  {
    title: '权威认证',
    style: { display: 'block' },
    list: [
      { icon: '//cdn.byai.com/static/official-website/crm/iso.png' },
      { name: 'ISO27001信息安全', href: '' },
      { name: '管理体系国际认证', href: '' },
    ],
  },
];

const CRM_FOOTER_CONFIG = [
  {
    title: '快速通道',
    list: [
      { name: '客户登录', href: '' },
      { name: '服务商登录', href: '' },
      { name: '产品更新', href: '' },
      { name: '开发平台', href: '' },
    ],
  },
  {
    title: '关于我们',
    list: [
      { name: '渠道合作', href: '' },
      { name: '招纳贤士', href: '' },
    ],
  },
  {
    title: '权威认证',
    style: { display: 'block' },
    list: [
      { icon: '//cdn.byai.com/static/official-website/crm/iso.png' },
      { name: 'ISO27001信息安全', href: '' },
      { name: '管理体系国际认证', href: '' },
    ],
  },
];

const FooterWrapper = styled.footer`
  width: 100%;
  position: relative;
  min-height: 460px;
  background: #0d1727;
  padding-top: 14px;
  /* max-width: 1200px; */
  > div {
    max-width: 1200px !important;
    margin: 0 auto;
  }
  ${media.phone`
    /* margin-bottom: 60px; */
    padding-left: 32px;
    .col-item {
      text-align: left;
      line-height: 22px;
      margin-bottom: 12px;
      &, a {
        font-size: 14px;
        line-height: 22px;
      }
    }
  `}
  .the-btn:hover, a.phone>:hover {
    color: #ffffff !important;
    text-decoration: none !important;
  }
`;
const CompanyInfoCol = styled.span<{ origin?: 'crm' }>`
  /* padding: 0 20px;   */
  max-width: 1200px;
  height: 94px;
  border-top: 1px solid rgb(255, 255, 255, 0.16);
  font-size: 16px;
  color: rgba(255, 255, 255, 0.65);
  line-height: 22px;
  letter-spacing: 1px;
  position: absolute !important;
  left: 50%;
  bottom: 0 !important;
  width: 100%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: ${props => (props.origin === 'crm' ? 'space-between' : 'center')};
  span {
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 24px 28px;
    flex-direction: column;
    height: ${props => (props.origin === 'crm' ? '192px' : '140px')};
    justify-content: flex-start;
    line-height: 20px;
    span {
      margin-bottom: 24px;
    }
  }
`;
// 联系我们
const CompanyDescCol = styled(Col) <{ origin?: string }>`
  @media (max-width: 980px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: ${props => (props.origin === 'crm' ? '192px' : '140px')};
    .margin-adjust {
      display: flex !important;
      align-items: flex-start;
      flex-direction: column;
      font-size: 14px;
      line-height: 22px;
    }
    .two-icon {
      margin-bottom: 40px;
    }
  }
  margin-top: 27px;
  color: rgba(255, 255, 255, 0.65) !important;
  font-size: 16px;
  letter-spacing: 1px;
  .title {
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    line-height: 28px;
    letter-spacing: 1px;
  }
  .phone {
    color: rgba(255, 255, 255, 0.65) !important;
  }
  .addr {
    margin: 23px 0px 24px;
  }
  .margin-adjust {
    > div {
      margin-bottom: 10px;
    }
  }
  .two-icon {
    display: flex;
    align-items: center;
    > div:nth-child(1) {
      margin-right: 24px;
    }
  }

  ${media.phone`
    align-items: flex-start;
    .title {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 22px;
    }
    .addr {
      margin-top: 10px;
      margin-bottom: 20px;
    }
  `}
`;
const LinkCol = styled(Col)`
  display: flex;
  flex-direction: column;
  > div > div {
    margin-bottom: 16px;
    ${media.desktop`text-align: center;`}
  }
  &:nth-child(4) {
    > div {
      ${media.desktop`justify-content: center !important;`}
      > div {
        ${media.desktop`
          flex: 0 0 auto !important;
          width: auto !important;
        `}
      }
    }
  }
  &:nth-child(2) {
    > div {
      ${media.desktop`justify-content: center !important;`}
    }
  }
  h6 {
    margin-bottom: 24px;
    font-size: 20px;
    font-weight: 500;
    color: #ffffff;
    line-height: 28px;
    letter-spacing: 1px;
    ${media.desktop`text-align: center;`}
    ${media.phone`
      text-align: left;
      font-size: 16px;
      line-height: 24px;
      margin-top: 26px;
      margin-bottom: 22px;
    `}
  }
  a {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.65) !important;
    line-height: 24px;
    letter-spacing: 1px;
    &:hover,
    &:active {
      text-decoration: none;
    }
  }
  img {
    margin-bottom: 0;
    width: 32px;
    height: 32px;
  }
`;

const CrmImg = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 28px;
    margin-bottom: 0;
    &:first-child {
      margin-right: 16px;
    }
  }
`;

const MobileORCode = styled.div`
  padding-right: 32px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  img {
    width: 140px;
    height: 140px;
    margin: 0;
  }
`;
export const Footer: React.FunctionComponent<{ origin?: 'crm' }> = ({ origin }) => (
  <FooterWrapper>
    <Container>
      <Row justify="between">
        {(origin === 'crm' ? CRM_FOOTER_CONFIG : FOOTER_CONFIG)
          .filter(block => block.title !== '热门搜索产品')
          .map((block, index) => (
            <LinkCol key={block.title} lg={4}>
              <h6>{block.title}</h6>
              <Row style={block.style}>
                {block.list.map(item => (
                  <Col lg={24} md={8} sm={12} xs={12} key={item.name} className="col-item">
                    {item.name === CALL_NUMBER_400 ? (
                      <a href="tel:4000235100">{CALL_NUMBER_400}</a>
                    ) : (
                      <ByLink key={item.name} href={item.href} scroll={!!item.href}>
                        <a className="the-btn">{item.icon ? <img src={item.icon} alt="" /> : item.name}</a>
                      </ByLink>
                    )}
                  </Col>
                ))}
              </Row>
            </LinkCol>
          ))}
        <CompanyDescCol lg={7} origin={origin}>
          <div className="title">联系我们</div>
          <a href="tel:4000235100" className="margin-adjust phone">
            <div>电话: </div>
            <div>400-0235-100</div>
          </a>
          <div className="margin-adjust addr">
            <div>公司地址：</div>
            <div>浙江省杭州市余杭区梦想小镇天使村11幢</div>
          </div>
          <Visible md lg xl xxl xxxl>
            <div className="two-icon">
              <ByHoverIcon
                hoverTitle="最新资讯"
                size={38}
                hoverImgSize={200}
                hoverImgUrl={origin === 'crm' ? CRM_IMG_HOVER_INFO : IMG_HOVER_INFO}>
                <NewsSolid />
              </ByHoverIcon>
              <ByHoverIcon
                hoverTitle="下载APP"
                size={38}
                hoverImgSize={200}
                hoverImgUrl={origin === 'crm' ? CRM_IMG_DOWNLOAD_APP : IMG_DOWNLOAD_APP}>
                <App />
              </ByHoverIcon>
            </div>
          </Visible>
          <Visible sm xs>
            <MobileORCode>
              <Box textAlign="center">
                <img src={origin === 'crm' ? CRM_IMG_HOVER_INFO : IMG_HOVER_INFO} />
                <Box lineHeight="20px" fontSize="14px" color="rgba(255, 255, 255, 0.32)" mt="12px" mb={3}>
                  获取最新资讯
                </Box>
              </Box>
              <Box textAlign="center">
                <img src={origin === 'crm' ? CRM_IMG_DOWNLOAD_APP : IMG_DOWNLOAD_APP} />
                <Box lineHeight="20px" fontSize="14px" color="rgba(255, 255, 255, 0.32)" mt="12px" mb={3}>
                  下载APP体验
                </Box>
              </Box>
            </MobileORCode>
          </Visible>
        </CompanyDescCol>
      </Row>
    </Container>
    <CompanyInfoCol origin={origin}>
      <span>Copyright © 2016-{new Date().getFullYear()} 浙ICP备16033928号 版权所有 浙江百应科技有限公司</span>
      {origin === 'crm' && (
        <CrmImg>
          <img src={CMMI_SRC} />
          <img src={XIN_SRC} />
        </CrmImg>
      )}
    </CompanyInfoCol>
  </FooterWrapper>
);
