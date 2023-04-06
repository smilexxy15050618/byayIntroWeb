import * as React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import { media } from '../../constants/style';

const TRADE2_IMG = 'https://cdn.byai.com/static/official-website/cooperation/dongxiao2-1222.png';

const PLAN_LIST = [
  {
    title: '「智能+」产品',
    desc: '智能电话机器人，人工集客营销、智能呼叫中心',
  },
  {
    title: '移动开发',
    desc: '研发测试、运营中台、后台服务',
  },
  {
    title: '信息安全',
    desc: '数据安全体系，信息安全管理制度',
  },
  {
    title: '数据化运营体系',
  },
  {
    title: 'toB企业服务',
  },
  {
    title: 'AI链接万物',
  },
];

const PlanCol = styled(Col)`
  padding: 30px 25px !important;
  text-align: center;

  ${media.desktop`
        &:nth-child(4n-2) {
            background: rgba(248,249,251,1);
        }
        &:nth-child(4n-1) {
            background: rgba(248,249,251,1);
        }
    `}
  ${media.tablet`
        &:nth-child(even) {
            background: rgba(248,249,251,1);
        }
        &:nth-child(odd) {
            background:rgba(255,255,255,1);
        }
    `}
    ${media.phone`
        &:nth-child(even) {
            background: rgba(248,249,251,1);
        }
        &:nth-child(odd) {
            background:rgba(255,255,255,1);
        }
    `}
    h3 {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 24px;
    font-weight: 500;
    color: rgba(13, 25, 36, 1);
    line-height: 34px;
    letter-spacing: 1px;
  }
  h6 {
    margin-top: 12px;
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 25px;
  }
`;

interface IPlanItem {
  title: string;
  desc?: string;
}

interface IPlanProps {
  list?: IPlanItem[];
}

const Plan: React.SFC<IPlanProps> = ({ list = PLAN_LIST }) => (
  <Container>
    <Row justify="center">
      <Col md={12} sm={16} xs={16}>
        <img style={{ marginBottom: 30 }} src={TRADE2_IMG} />
      </Col>
    </Row>
    <Row justify="center">
      {list.map(item => (
        <PlanCol key={item.title} md={12} sm={24} xs={24}>
          <h3>{item.title}</h3>
          <h6>{item.desc}</h6>
        </PlanCol>
      ))}
    </Row>
  </Container>
);

export default Plan;
