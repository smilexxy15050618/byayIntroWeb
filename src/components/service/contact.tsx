import Link from 'next/link';
import * as React from 'react';
import { Col, Container, Row } from 'react-grid-system';
import styled from 'styled-components';
import { CALL_NUMBER_400 } from '../../constants';
import { media } from '../../constants/style';

const Contact_CONFIG = [
  {
    title: '产品更新日志',
    list: [{ name: '近期更新详情', href: 'https://www.byai.com/news' }],
  },
  {
    title: '产品使用手册',
    list: [{ name: '开发者文档', href: 'https://open.byai.com/document/quick_to_door' }],
  },
];

const ContactContainer = styled(Container)`
  padding-top: 80px !important;
  padding-left: 120px !important;
  padding-right: 120px !important;
  padding-bottom: 72px;
  background-color: #ffffff;
  box-shadow: 0px 0px 30px 0px rgba(49, 83, 212, 0.1);
  ${media.desktop`
      padding: 40px 60px!important;
    `}
  > div > div {
    ${media.phone`
        flex: unset !important;
        width: 50% !important;
        margin-bottom: 20px;
        height: 120px;
      `}
  }
`;

const HotLineCol = styled(Col)`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  justify-content: start;
  > div {
    flex: 1;
  }
  h6 {
    font-size: 16px;
    color: #0d1924;
    margin: 0;
    margin-bottom: 22px;
  }
  span {
    line-height: 36px;
  }
  .online-service {
    font-size: 14px;
    color: #54c4c5;
    cursor: pointer;
    .iconfont {
      font-size: 32px;
      color: #54c4c5;
      vertical-align: middle;
      margin-right: 5px;
    }
  }
`;

const LinkCol = styled(Col)`
  display: flex;
  flex-direction: column;
  h6 {
    font-size: 16px;
    color: #0d1924;
    margin-bottom: 22px;
    margin-top: 0px;
  }
  a {
    font-size: 16px;
    color: #666666;
    line-height: 36px;
  }
`;

const CodeCol = styled(Col)`
  display: flex;
  flex-direction: column;
  img {
    width: 120px;
    height: 120px;
    margin-top: -8px;
  }
  span {
    font-size: 14px;
    color: #666666;
    padding-left: 8px;
    display: inline-block;
    width: 148px;
  }
`;

interface IContactProps {
  style?: object;
}

const Contact: React.SFC<IContactProps> = ({ style = {} }) => (
  <ContactContainer style={style}>
    <Row>
      <HotLineCol>
        <h6>服务热线</h6>
        <span>{CALL_NUMBER_400}</span>
      </HotLineCol>
      {Contact_CONFIG.map((item, index) => (
        <LinkCol key={item.title}>
          <h6>{item.title}</h6>
          <Row>
            {item.list.map(it => (
              <Col lg={24} md={24} sm={24} xs={24} key={it.name}>
                <Link href={it.href}>
                  <a>{it.name}</a>
                </Link>
              </Col>
            ))}
          </Row>
        </LinkCol>
      ))}
      <CodeCol>
        <img src="https://cdn.byai.com/static/official-website/home/qrcode-1222.png" alt="" />
        <span>扫一扫，获取最新资讯</span>
      </CodeCol>
    </Row>
  </ContactContainer>
);

export default Contact;
