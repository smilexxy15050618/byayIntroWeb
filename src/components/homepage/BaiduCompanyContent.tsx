import * as React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import { DescWrapper } from '../DescWrapper';
import { media } from '../../constants/style';

const HALF_COMPANY_LOGO_LIST1 = [
  '//cdn.byai.com/static/official-website/company-logo/21shijibudongchan2.png',
  '//cdn.byai.com/static/official-website/company-logo/alibaba2.png',
  '//cdn.byai.com/static/official-website/company-logo/dasouche2-0626.png',
  '//cdn.byai.com/static/official-website/company-logo/huolala.png',
  '//cdn.byai.com/static/official-website/company-logo/aicaijituan1.png',
  '//cdn.byai.com/static/official-website/company-logo/jinritoutiao2.png',
];
const HALF_COMPANY_LOGO_LIST2 = [
  '//cdn.byai.com/static/official-website/company-logo/zhongguoyinhang1031.png',
  '//cdn.byai.com/static/official-website/company-logo/qichezhijia2.png',
  '//cdn.byai.com/static/official-website/company-logo/xindongfang2.png',
  '//cdn.byai.com/static/official-website/company-logo/xueersi2.png',
  '//cdn.byai.com/static/official-website/company-logo/zhilianzhaopin2.png',
  '//cdn.byai.com/static/official-website/company-logo/zhongguoliantong2.png',
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
  .carousel-indicators {
    margin-bottom: 0;

    li {
      background-color: #000;
      width: 15px;
      height: 4px;
      opacity: 0.1;
      border-radius: 2px;
    }

    .active {
      opacity: 0.4;
    }
  }
`;

const LogoItemWrapper = styled.div`
  width: calc(100% - 30px);
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  background: rgba(249, 249, 249, 1);
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

export const BaiduCompanyContent = () => (
  <CompanyContentWrapper title="30000+企业的共同选择">
    <Carousel controls={false} interval={3000} pauseOnHover={false} style={{ width: '100%', paddingBottom: '40px' }}>
      <CarouselItem>
        <Row>
          {HALF_COMPANY_LOGO_LIST1.map(item => (
            <Col lg={6} md={8} xs={12} sm={12} key={item}>
              <LogoItemWrapper>
                <img src={item} alt="" />
              </LogoItemWrapper>
            </Col>
          ))}
        </Row>
      </CarouselItem>
      <CarouselItem>
        <Row>
          {HALF_COMPANY_LOGO_LIST2.map(item => (
            <Col lg={6} md={8} xs={12} sm={12} key={item}>
              <LogoItemWrapper>
                <img src={item} alt="" />
              </LogoItemWrapper>
            </Col>
          ))}
        </Row>
      </CarouselItem>
    </Carousel>
  </CompanyContentWrapper>
);
