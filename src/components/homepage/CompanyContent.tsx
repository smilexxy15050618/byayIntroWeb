import * as React from 'react';
import styled from 'styled-components';
import { Col } from 'react-grid-system';
import { DescWrapper } from '../DescWrapper';
import { media } from '../../constants/style';

const COMPANY_LOGO_LIST = [
  '//cdn.byai.com/static/official-website/company-logo/huolala.png',
  '//cdn.byai.com/static/official-website/company-logo/zhongguoliantong2.png',
  '//cdn.byai.com/static/official-website/company-logo/alibaba2.png',
  '//cdn.byai.com/static/official-website/company-logo/aicaijituan1.png',
  '//cdn.byai.com/static/official-website/company-logo/pinganyinhang2.png',
  '//cdn.byai.com/static/official-website/company-logo/jinritoutiao2.png',
  '//cdn.byai.com/static/official-website/company-logo/zhilianzhaopin2.png',
  '//cdn.byai.com/static/official-website/company-logo/qichezhijia2.png',
  '//cdn.byai.com/static/official-website/company-logo/dasouche2-0626.png',
  ,
  '//cdn.byai.com/static/official-website/company-logo/21shijibudongchan2.png',
  '//cdn.byai.com/static/official-website/company-logo/xindongfang2.png',
  '//cdn.byai.com/static/official-website/company-logo/xueersi2.png',
];

const CompanyContentWrapper = styled(DescWrapper)`
  > div > div {
    justify-content: space-between !important;
  }
  h3.desc-title {
    margin-bottom: 60px;
    padding: 0;
  }
  ${media.phone`
    padding: 0 16px;
  `}
`;

const LogoItemWrapper = styled.div`
  width: calc(100% - 30px);
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  box-shadow: none;
  margin-bottom: 30px;
  ${media.phone`
    margin: 0 auto 16px auto;
    width: calc(100% - 16px);
  `}
  img {
    margin-bottom: 0;
  }
`;

export const CompanyContent = () => (
  <CompanyContentWrapper title="30000+企业的共同选择">
    {COMPANY_LOGO_LIST.map(item => (
      <Col lg={6} md={8} xs={12} key={item}>
        <LogoItemWrapper>
          <img src={item} alt="" />
        </LogoItemWrapper>
      </Col>
    ))}
  </CompanyContentWrapper>
);
