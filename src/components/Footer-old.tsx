import * as React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import Link from 'next/link';
import { media } from '../constants/style';
import { CALL_NUMBER_400 } from '../constants';
import { withOpenOriginLink } from '../high-components/OpenOriginLink';

const ByLink = withOpenOriginLink(Link);

const LOGO = '//cdn.byai.com/static/official-website/home/header-new-white-logo-1222.png';
const QR_CODE = '//cdn.byai.com/static/official-website/home/qrcode-1222.png';
const QR_CODE2 = '//cdn.byai.com/static/official-website/home/qrcode2-1222.png';
const CREDIT_TAG = '//cdn.byai.com/static/official-website/home/xin.png';
const CMMI = '//cdn.byai.com/static/intro/img/footer/CMMI.png';
const ISO = '//cdn.byai.com/static/official-website/home/iso.png';

const FOOTER_CONFIG = [
  {
    title: '快速通道',
    list: [
      { name: '客户登录', href: 'https://crm.byai.com/login' },
      { name: '服务商登录', href: 'https://boss.byai.com/login' },
      { name: '产品更新', href: 'https://www.byai.com/news' },
      // { name: '开放平台', href: 'https://open.byai.com' },
      // { name: '星追智能催收', href: 'https://www.byai.com/product/star' }
    ],
  },
  {
    title: '选择我们',
    list: [
      { name: '渠道合作', href: '/partner' },
      { name: '招纳贤士', href: 'https://www.lagou.com/gongsi/154789.html' },
    ],
  },
  {
    title: '权威认证',
    list: [
      { name: 'ISO', href: '', icon: ISO },
      { name: 'ISO27001信息安全', href: '' },
      { name: '管理体系国际认证', href: '' },
    ],
  },
  {
    title: '联系我们',
    list: [
      { name: CALL_NUMBER_400, href: '' },
      { name: '立即体验', href: '/form?formType=1' },
    ],
  },
];

const FooterWrapper = styled.footer`
  background: #172355;
  padding-top: 50px;
  padding-bottom: 40px;
  > div {
    max-width: 960px;
    margin: 0 auto;
  }
  ${media.phone`
    margin-bottom: 60px;
  `}
`;
const CompanyInfoCol = styled(Col)`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  span {
    font-size: 12px;
    color: #afbde2;
    margin-top: 8px;
  }
  .foot-imgs {
    img {
      height: 28px;
      margin-right: 16px;
    }
  }
`;
const CompanyDescCol = styled(Col)`
  margin-top: 22px;
  div {
    display: flex;
    flex-direction: column;
    ${media.desktop`align-items: center;`}
    &:first-child {
      margin-bottom: 40px;
      img {
        width: 114px;
        height: 33px;
      }
    }
    &:last-child {
      margin-bottom: 20px;
    }
    img {
      width: 80px;
      height: 80px;
      margin-bottom: 0;
    }
    span {
      display: inline-block;
      margin-top: 20px;
      font-size: 12px;
      color: #afbde2;
      &.slogan {
        font-size: 14px;
      }
    }
  }
  .code-content {
    width: 190px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    div {
      margin-bottom: 0;
      img {
        width: 80px;
        height: 80px;
      }
    }
  }
`;
const LinkCol = styled(Col)`
  display: flex;
  flex-direction: column;
  > div > div {
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
    color: #fff;
    margin-bottom: 22px;
    font-size: 14px;
    font-weight: 600;
    ${media.desktop`text-align: center;`}
  }
  a {
    color: #afbde2 !important;
    line-height: 36px;
    font-size: 14px;
    font-weight: 400;
    &:hover,
    &:active {
      text-decoration: none;
    }
  }
  img {
    // margin-top: -13px;
    margin-bottom: 0;
    width: 32px;
    height: 32px;
  }
`;

export const Footer: React.FunctionComponent = props => (
  <FooterWrapper>
    <Container>
      <Row justify="between">
        <CompanyDescCol lg={4}>
          <div>
            <img src={LOGO} alt="" />
            <span className="slogan">以数智化驱动新商业文明</span>
          </div>
          <div className="code-content">
            <div>
              <img src={QR_CODE} alt="" />
              <span>获取最新资讯</span>
            </div>
            <div>
              <img src={QR_CODE2} alt="" />
              <span>下载APP体验</span>
            </div>
          </div>
        </CompanyDescCol>
        {FOOTER_CONFIG.filter(block => block.title !== '热门搜索产品').map(block => (
          <LinkCol key={block.title} lg={3}>
            <h6>{block.title}</h6>
            <Row>
              {block.list.map(item => (
                <Col lg={24} md={8} sm={8} xs={8} key={item.name}>
                  {item.name === CALL_NUMBER_400 ? (
                    <a href="tel:4000235100">{CALL_NUMBER_400}</a>
                  ) : (
                    <ByLink key={item.name} href={item.href} scroll={!!item.href}>
                      <a>{item.icon ? <img src={item.icon} alt="" /> : item.name}</a>
                    </ByLink>
                  )}
                </Col>
              ))}
            </Row>
          </LinkCol>
        ))}
      </Row>
      <Row>
        <CompanyInfoCol align="center" lg={24}>
          <div className="foot-imgs">
            <img src={CREDIT_TAG} alt="" />
            <a href="https://sas.cmmiinstitute.com/pars/pars_detail.aspx?a=5377" target="_blank" rel="noreferrer">
              <img src={CMMI} alt="" />
            </a>
          </div>
          <span>浙江省杭州市余杭区梦想小镇天使村11幢</span>
          <span style={{ padding: '0 20px' }}>
            Copyright © 2016-{new Date().getFullYear()}{' '}
            <a href="https://beian.miit.gov.cn/" target="_Blank" rel="noreferrer">
              浙ICP备16033928号-2
            </a>{' '}
            版权所有 浙江百应科技有限公司
          </span>
        </CompanyInfoCol>
      </Row>
    </Container>
  </FooterWrapper>
);
