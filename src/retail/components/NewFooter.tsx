import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import Box from '../../components/Box';
import { CALL_NUMBER_400 } from '../../constants';
import { media } from '../../constants/style';
import { withOpenOriginLink } from '../../high-components/OpenOriginLink';
import { calWidthAndHeight, retailUrl } from '../../lib/utils';

const ByLink = withOpenOriginLink(Link);

const CMMI_SRC = '//cdn.byai.com/static/official-website/crm/CMMI.png';
const XIN_SRC = '//cdn.byai.com/static/official-website/crm/xin.png';
const PREFIX = 'https://cdn.byai.com/static/intro/img/footer';
const IMG_HOVER_INFO = `${PREFIX}/get-news.png`;
const IMG_DOWNLOAD_APP = `https://cdn.byai.com/static/official-website/home/qrcode2-1222.png`;
const CRM_IMG_HOVER_INFO =
  '//cdn.byai.com/static/official-website/crm/crm%E8%8E%B7%E5%8F%96%E6%9C%80%E6%96%B0%E8%B5%84%E8%AE%AF.png';
const CRM_IMG_DOWNLOAD_APP =
  '//cdn.byai.com/static/official-website/crm/crm%E4%B8%8B%E8%BD%BDAPP%E4%BD%93%E9%AA%8C.png';

// 公众号默认图
const PUBLIC_DEFAULT_IMG = 'https://cdn.byai.com/by-fe-cdn/static/pmp/4c7f4da2-03aa-4545-93ba-4927b8955d73.png';
// 视频号默认图
const VIDEO_DEFAULT_IMG = 'https://cdn.byai.com/by-fe-cdn/static/pmp/58582b22-bc00-4f62-b68e-ef16d39296f1.png';
// 公众号hover图
const PUBLIC_HOVER_IMG = 'https://cdn.byai.com/by-fe-cdn/static/pmp/c4f18427-8362-4664-8e4c-f0e26303927f.png';
// 视频号hover图
const VIDEO_HOVER_IMG = 'https://cdn.byai.com/by-fe-cdn/static/pmp/a17639a9-7a79-4df1-8538-9582a23ed711.png';
// 公众号二维码
const PUBLIC_CODE = 'https://cdn.byai.com/by-fe-cdn/static/pmp/812536b8-5dd6-4fdf-8f8d-57792f7d9858.png';
// 视频号二维码
const VIDEO_CODE = 'https://cdn.byai.com/by-fe-cdn/static/pmp/77229f52-63fc-45b3-a901-4e54192c540a.png';

const FOOTER_CONFIG = [
  {
    title: '场景解决方案',
    list: [
      {
        name: '老客召回',
        href: retailUrl('/recall'),
        icon: 'https://cdn.byai.com/by-fe-cdn/static/pmp/731186d2-7719-47bf-a205-88594d5ec2ba.png',
      },
      {
        name: '私域引流',
        href: retailUrl('/traffic'),
        icon: 'https://cdn.byai.com/by-fe-cdn/static/pmp/731186d2-7719-47bf-a205-88594d5ec2ba.png',
      },
      { name: '私域运营', href: retailUrl('/operate') },
      { name: '客户服务', href: retailUrl('/service') },
    ],
  },
  {
    title: '行业解决方案',
    list: [
      { name: '通用行业', href: retailUrl('/currency') },
      { name: '美妆行业', href: retailUrl('/beauty') },
      { name: '食品行业', href: retailUrl('/food') },
      { name: '鞋服行业', href: retailUrl('/clothes') },
      {
        name: '线下百购',
        href: retailUrl('/mall'),
        icon: 'https://cdn.byai.com/by-fe-cdn/static/pmp/8a0770f8-35fa-4bc2-b948-7a4623a3147f.png',
      },
    ],
  },
  {
    title: '关于我们',
    list: [
      { name: '关于百应', href: retailUrl('/about') },
      { name: '生态合作', href: retailUrl('/ecology') },
      { name: '渠道合作', href: retailUrl('/form?formType=3') },
      { name: '招贤纳士', href: 'https://www.lagou.com/gongsi/154789.html' },
      { name: 'AI数字员工', href: 'https://www.byai.com' },
      { name: '私域动态', href: retailUrl('/anews') },
    ],
  },
];

const FooterWrapper = styled.footer`
  width: 100%;
  position: relative;
  min-height: 540px;
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
    cursor: pointer;
  }
  .the-icon {
    width: ${calWidthAndHeight(32)};
    margin: 0 0 ${calWidthAndHeight(4)} ${calWidthAndHeight(4)};
    padding: 0;
    height: auto;
  }
`;
const CompanyInfoCol = styled.div`
  /* padding: 0 20px;   */
  max-width: 1200px;
  height: 94px;
  line-height: 94px;
  text-align: center;
  border-top: 1px solid rgb(255, 255, 255, 0.16);
  font-size: 16px;
  color: rgba(255, 255, 255, 0.65);
  letter-spacing: 1px;
  position: absolute !important;
  left: 50%;
  bottom: 0 !important;
  width: 100%;
  transform: translateX(-50%);
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 24px 28px;
    flex-direction: column;
    height: 192px;
    justify-content: flex-start;
    line-height: 20px;
    span {
      margin-bottom: 24px;
    }
  }
`;
// 联系我们
const CompanyDescCol = styled(Col)`
  @media (max-width: 980px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 192px;
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
  margin-top: 16px;
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
      margin-bottom: 7px;
    }
  }
  .two-icon {
    display: flex;
    align-items: center;
    position: relative;
    > div:nth-child(1) {
      margin-right: 24px;
    }
    .public-img {
      width: 32px;
      height: 32px;
      margin-right: 8px;
      background-image: url(${PUBLIC_DEFAULT_IMG});
      background-size: 32px;
      background-repeat: no-repeat;
      cursor: pointer;
      &: hover {
        background-image: url(${PUBLIC_HOVER_IMG});
      }
    }
    .video-img {
      width: 32px;
      height: 32px;
      background-image: url(${VIDEO_DEFAULT_IMG});
      background-size: 32px;
      background-repeat: no-repeat;
      cursor: pointer;
      &: hover {
        background-image: url(${VIDEO_HOVER_IMG});
      }
    }
    .public-code {
      position: absolute;
      bottom: 24px;
      left: -48px;
      width: 140px;
      height: 140px;
      margin-left: -10px;
      background-image: url(${PUBLIC_CODE});
      background-size: 140px;
      background-repeat: no-repeat;
    }
    .video-code {
      position: absolute;
      bottom: 24px;
      width: 140px;
      height: 140px;
      margin-left: -10px;
      background-image: url(${VIDEO_CODE});
      background-size: 140px;
      background-repeat: no-repeat;
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
      ${media.phone`justify-content: flex-start !important;`}
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
  > :nth-last-child(n + 2) {
    margin-right: 16px;
  }
  img {
    height: 28px;
    margin-bottom: 0;
    /* &:first-child {
      margin-right: 16px;
    } */
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
const PrivacyPolicy = styled.a`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.65);
  line-height: 24px;
  letter-spacing: 1px;
  cursor: pointer;
  :hover,
  :active {
    color: #ffffff !important;
    text-decoration: none;
  }
`;

const FriendLink = styled.div`
  position: absolute;
  top: -26px;
  font-size: 14px;
  color: #fffff;
  overflow-y: auto;
  width: calc(100% - 64px);

  .friend-item {
    color: rgba(255, 255, 255, 0.65);
    margin-left: 12px;
    cursor: pointer;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
  }

  @media (max-width: 768px) {
    left: 32px;
  }
`;

const FriendLinkList = [
  {
    name: '企业微信SCRM',
    link: 'https://www.xlbscrm.com/scrm.html',
  },
  {
    name: '亿邦动力',
    link: 'https://www.ebrun.com/',
  },
  {
    name: '数据分析',
    link: ' https://www.guandata.com/',
  },
  {
    name: 'SCRM',
    link: 'http://www.scrmcn.com/',
  },
  {
    name: '万里牛ERP',
    link: 'https://www.hupun.com',
  },
  {
    name: '星耀裂变',
    link: 'https://www.xyookj.com',
  },
];
export const Footer: React.FunctionComponent<{ origin?: 'crm'; disableLink?: boolean }> = ({
  origin,
  disableLink = false,
}) => {
  const [publicCodeVisible, setPublicCodeVisible] = useState<boolean>(false);
  const [videoCodeVisible, setVideoCodeVisible] = useState<boolean>(false);

  return (
    <FooterWrapper>
      <Container>
        <Row justify="between">
          {FOOTER_CONFIG.filter(block => block.title !== '热门搜索产品').map((block, index) => (
            <LinkCol key={block.title} lg={4}>
              <h6>{block.title}</h6>
              <Row style={block.style}>
                {block.list.map((item, i) => (
                  <Col lg={24} md={8} sm={12} xs={12} key={i} className="col-item">
                    {item.name === CALL_NUMBER_400 ? (
                      <a href="tel:4000235100">{CALL_NUMBER_400}</a>
                    ) : (
                      <a className="the-btn" href={item.href}>
                        {item.icon ? (
                          <>
                            <span>{item.name}</span>
                            <img className="the-icon" src={item.icon} alt="" />
                          </>
                        ) : (
                          item.name
                        )}
                      </a>
                    )}
                  </Col>
                ))}
              </Row>
            </LinkCol>
          ))}
          <CompanyDescCol lg={7}>
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
                <div
                  className="public-img"
                  onMouseOver={() => {
                    setPublicCodeVisible(true);
                  }}
                  onMouseLeave={() => {
                    setPublicCodeVisible(false);
                  }}></div>
                {publicCodeVisible && <div className="public-code"></div>}
                <div
                  className="video-img"
                  onMouseOver={() => {
                    setVideoCodeVisible(true);
                  }}
                  onMouseLeave={() => {
                    setVideoCodeVisible(false);
                  }}></div>
                {videoCodeVisible && <div className="video-code"></div>}
              </div>
            </Visible>
            <Visible sm xs>
              <MobileORCode>
                <Box textAlign="center" mr="5%">
                  <img src={PUBLIC_CODE} />
                  <Box lineHeight="20px" fontSize="14px" color="rgba(255, 255, 255, 0.32)" mt="12px" mb={3}>
                    公众号
                  </Box>
                </Box>
                <Box textAlign="center">
                  <img src={VIDEO_CODE} />
                  <Box lineHeight="20px" fontSize="14px" color="rgba(255, 255, 255, 0.32)" mt="12px" mb={3}>
                    视频号
                  </Box>
                </Box>
              </MobileORCode>
            </Visible>
            <div className="margin-adjust" style={{ margin: '26px 0 32px' }}>
              <div>友情链接合作请联系【右侧-渠道合作】微信</div>
            </div>
          </CompanyDescCol>
        </Row>
      </Container>
      <CompanyInfoCol>
        <FriendLink>
          <div style={{ width: 'max-content' }}>
            <span>友情链接: </span>
            {FriendLinkList.map(item => (
              <span
                className="friend-item"
                onClick={() => {
                  window.open(item.link, '_blank');
                }}>
                {item.name}
              </span>
            ))}
          </div>
        </FriendLink>
        <span>
          Copyright © 2016-{new Date().getFullYear()}{' '}
          <a href="https://beian.miit.gov.cn/" target="_Blank" rel="noreferrer">
            浙ICP备16033928号
          </a>{' '}
          版权所有 浙江百应科技有限公司
        </span>
      </CompanyInfoCol>
    </FooterWrapper>
  );
};
