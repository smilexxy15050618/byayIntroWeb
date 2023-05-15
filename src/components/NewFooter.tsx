import classNames from 'classnames';
import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { CALL_NUMBER_400 } from '../constants';
import { FOOTER_CONFIG } from '../constants/page-modify';
import { media } from '../constants/style';
import { withOpenOriginLink } from '../high-components/OpenOriginLink';
import Box from './Box';
import { BOTTOM_WHITE_LOGO } from './Header-2021';
const ByLink = withOpenOriginLink(Link);

const CMMI_SRC = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/底部隐私政策.png';
const XIN_SRC = '//cdn.byai.com/static/official-website/crm/xin.png';
const PREFIX = 'https://cdn.byai.com/static/intro/img/footer';
const IMG_HOVER_INFO = `${PREFIX}/get-news.png`;
const IMG_DOWNLOAD_APP = `https://cdn.byai.com/static/official-website/home/qrcode2-1222.png`;
const CRM_IMG_HOVER_INFO =
  '//cdn.byai.com/static/official-website/crm/crm%E8%8E%B7%E5%8F%96%E6%9C%80%E6%96%B0%E8%B5%84%E8%AE%AF.png';
const CRM_IMG_DOWNLOAD_APP =
  '//cdn.byai.com/static/official-website/crm/crm%E4%B8%8B%E8%BD%BDAPP%E4%BD%93%E9%AA%8C.png';
// 公众号默认图
const PUBLIC_DEFAULT_IMG = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/footer/w.png';
// 视频号默认图
const VIDEO_DEFAULT_IMG = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/footer/s.png';
// 公众号hover图
const PUBLIC_HOVER_IMG = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/footer/w-active.png';
// 视频号hover图
const VIDEO_HOVER_IMG = 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/footer/s-active.png';
// 公众号二维码
const PUBLIC_CODE = 'https://cdn.byai.com/by-fe-cdn/static/pmp/812536b8-5dd6-4fdf-8f8d-57792f7d9858.png';
// 视频号二维码
const VIDEO_CODE = 'https://cdn.byai.com/by-fe-cdn/static/pmp/77229f52-63fc-45b3-a901-4e54192c540a.png';

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
  min-height: 547px;
  background: #0d1727;
  padding-top: 14px;
  /* max-width: 1200px; */
  > div {
    max-width: 1200px !important;
    margin: 0 auto;
  }
  ${media.phone`
    min-height: 524px;
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

  .footer-icon-wrapper {
    position: relative;
    padding: 0 32px;
    width: 1200px;
    height: 60px;
    background: rgba(13, 31, 59, 0.66);
    border-radius: 36px;
    /* opacity: 0.66; */
    display: flex;
    align-items: center;
  }

  .footer-icon-right {
    margin-left: auto;
    display: flex;
    align-items: center;
    span {
      color: rgba(255, 255, 255, 0.65);
    }
  }

  .footer-icon-right--item {
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 1.6px;
    line-height: 23.17px;
    color: rgba(255, 255, 255, 0.65);
    cursor: pointer;
    &:hover {
      color: #00c8bd;
    }
    img {
      height: 32px;
      margin: 0 8px 0 0;
    }
    @media (max-width: 768px) {
      margin: 0;
      opacity: 1;
      span {
        opacity: 0.45;
        height: 24px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 24px;
      }
      img {
        margin: 0 auto;
        width: 32px;
      }
    }
  }

  .public-img--common {
    position: relative;
    width: 32px;
    height: 32px;
    margin-right: 8px;
    border-radius: 50%;
    background-color: black;
    background-size: 100%;
    background-repeat: no-repeat;
    cursor: pointer;
    &.mobile {
      width: 38px;
      height: 38px;
    }
  }

  .public-img {
    background-image: url(${PUBLIC_DEFAULT_IMG});
    &.active,
    &:hover {
      /* background-color: rgba(0, 197, 81, 0.5); */
      background-image: url(${PUBLIC_HOVER_IMG});
    }
  }
  .video-img {
    background-image: url(${VIDEO_DEFAULT_IMG});
    &.active,
    &:hover {
      background-image: url(${VIDEO_HOVER_IMG});
    }
  }

  .public-qr-code {
    transform: translate(-50%, -100%);
    top: -18px;
    left: 50%;
    position: absolute;
    background-size: 128px;
    background-repeat: no-repeat;
    width: 128px;
    height: 128px;
    border-radius: 4px;
    background-color: white;
  }
  .public-code {
    /* bottom: 54px;
      left: -10px; */

    /* margin-left: -10px; */
    background-image: url(${PUBLIC_CODE});
  }
  .video-code {
    /* bottom: 54px;
      margin-left: -14px; */
    background-image: url(${VIDEO_CODE});
  }
`;
const CompanyInfoCol = styled.span`
  /* padding: 0 20px;   */
  max-width: 1200px;
  text-align: center;
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
  justify-content: space-between;
  span {
    text-align: center;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 24px 28px;
    flex-direction: column;
    height: 228px;
    justify-content: flex-start;
    line-height: 20px;
    span {
      /* margin-bottom: 24px; */
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
  margin-top: 25px;
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
          /* flex: 0 0 auto !important; */
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
    margin-top: 25px;
    ${media.desktop`text-align: center;`}
    ${media.phone`
      text-align: left;
      font-size: 16px;
      line-height: 24px;
      margin-top: 26px;
      margin-bottom: 22px;
    `}
    span {
      display: inline-block;
      margin-left: 3px;
      width: 26px;
      height: 12px;
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAYCAYAAAC1Ft6mAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAILSURBVFiF1ZdBkuIwDEWf3FyDZkWKW2B2vpWTW2VH5hYUs0r6HG3PwlERmATCtNNMvyo2trElW/pSBODD7Wzk04NYfhyxicivTX0uASQ5E47DyRda9zQCHiBCtanPJa0rys4V8dWGfYXObY/qgxHwEapXG/UVhLcKUuqsxhZ8uJ0NBGswzbo+NVMbta4oATR+x/YBCAQ7HB9br2fOsP+vPdb1qelcAcCoQ4FgBXwgADRTm6b4jaPzrSvKSPD9uis6V3jBHIaXpWfOcWbqTAAzb4PnaF1RqrOCObzXZ3mvzxKh0vCOhKO+IKQbF8xh+FPDb8c1xMYYfaEcziTV+V0O5zRMWleQ1nx6BhFwG96d2/qx8XtkfyENm6m8uszFBsQOXykHWR1S4+aopoZN/0rZuBtyQtyrks2hT+yX8iCHxArYJQ6+SG3eduuuQxEqg2mm57Vluubef5bmocrdUxgtZorBNJHg+wI5+b8hubuUrKKgzgtx/2jtM7n5DAsU1iTHjwxWec8dngvUoSTHAn7MqQ+3s53bHiGF2zNFcw7ZO4V1fWpaV1QCXsB3brvXbywh7iPBgly+XzKzSC+3qc+l9m699PtL45n6uyWcAZDOFXGp2/pOOldEwRxW6cZ4qEr/M5qr6/rUrIS3KhKOOvjKovgv9L2g1XomMPx++ZkMU+aql8zdyn8Ht7L/B8AQ9/bBLiWNAAAAAElFTkSuQmCC')
        no-repeat center center/ contain;
    }
  }
  a {
    font-size: 14px;
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
  gap: 16px;

  img {
    height: 28px;
    margin-bottom: 0;
    /* &:first-child {
      margin-right: 16px;
    } */
  }
  @media (max-width: 768px) {
    width: 300px;
    justify-content: center;
    margin-top: 24px;
    flex-wrap: wrap;
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
  @media (max-width: 768px) {
    order: 3;
  }
`;

const FriendLink = styled.div`
  position: absolute;
  // left: 32px;
  top: -24px;
  font-size: 14px;
  transform: translateY(-100%);
  color: #fffff;
  overflow-y: auto;
  width: calc(100% - 64px);

  .friend-item {
    color: rgba(255, 255, 255, 0.65);
    cursor: pointer;
    &:hover {
      color: #00c8bd;
    }
  }

  @media (max-width: 768px) {
    left: 32px;
  }
`;

const FriendLinkList = [
  {
    name: '飞书',
    link: 'https://www.feishu.cn',
  },
  {
    name: 'WPS',
    link: 'https://www.wps.cn',
  },
  {
    name: '樊登读书',
    link: 'https://www.dushu365.com',
  },
  {
    name: '杭州社保',
    link: 'http://hrss.hangzhou.gov.cn',
  },
  {
    name: '亿邦动力',
    link: 'https://www.ebrun.com',
  },
  {
    name: '企业微信SCRM',
    link: 'https://www.xlbscrm.com/scrm.html',
  },
  {
    name: '数据分析',
    link: 'https://www.guandata.com',
  },
];

export const Footer: React.FunctionComponent<{ origin?: 'crm'; disableLink?: boolean }> = ({
  origin,
  disableLink = false,
}) => {
  const [publicCodeVisible, setPublicCodeVisible] = useState<boolean>(false);
  const [videoCodeVisible, setVideoCodeVisible] = useState<boolean>(false);
  const [currCodeSrc, setCurrCordSrc] = useState(PUBLIC_CODE);
  return (
    <FooterWrapper>
      <Container>
        <Row justify="between">
          <Visible md lg xl xxl xxxl>
            <Col lg={4}>
              <div style={{ width: '184px', marginTop: 26 }}>
                <img src={BOTTOM_WHITE_LOGO} />
              </div>
            </Col>
          </Visible>
          {(origin === 'crm' ? CRM_FOOTER_CONFIG : FOOTER_CONFIG)
            .filter(block => block.title !== '热门搜索产品')
            .map((block, index) => (
              <LinkCol key={block.title} lg={index == 0 ? 5 : 3}>
                <h6>
                  {block.title}
                  <span style={{ display: index == 1 ? 'inline-block' : 'none' }}></span>
                </h6>
                <Row style={block.style}>
                  {block.list.map((item, i) => (
                    <Col lg={24} md={8} sm={12} xs={12} key={i} className="col-item">
                      {item.name === CALL_NUMBER_400 ? (
                        <a href="tel:4000235100">{CALL_NUMBER_400}</a>
                      ) : (
                          <ByLink
                            key={item.name}
                            href={!disableLink ? item.href : ''}
                            scroll={!disableLink && !!item.href}>
                            <a className="the-btn">{item.icon ? <img src={item.icon} alt="" /> : item.name}</a>
                          </ByLink>
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
            <Visible sm xs>
              <Box
                mb="80px"
                flexDirection="column"
                width="calc(100vw - 64px)"
                height="396px"
                bgcolor="#0D1F3B"
                display="flex"
                mr="32px"
                justifyContent="center"
                alignItems="center">
                <div style={{ width: '184px', marginTop: 0 }}>
                  <img src={BOTTOM_WHITE_LOGO} />
                </div>
                <img style={{ height: '128px' }} src={currCodeSrc} />
                <Box display="flex">
                  <div
                    onClick={() => {
                      setCurrCordSrc(PUBLIC_CODE);
                    }}
                    className={classNames('public-img mobile public-img--common', {
                      active: currCodeSrc === PUBLIC_CODE,
                    })}></div>
                  <div
                    onClick={() => {
                      setCurrCordSrc(VIDEO_CODE);
                    }}
                    style={{ marginRight: 0 }}
                    className={classNames('video-img mobile public-img--common', {
                      active: currCodeSrc === VIDEO_CODE,
                    })}></div>
                </Box>
                <Box mt="40px" width="100%" display="flex" justifyContent="space-around">
                  <Box display="flex" flexDirection="column" className="footer-icon-right--item">
                    <img src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/footer/iso.png" />
                    <span>ISO27001</span>
                  </Box>
                  <Box display="flex" flexDirection="column" className="footer-icon-right--item">
                    <img src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/footer/%E4%BF%9D%E6%8A%A4.png" />
                    <span>三级等保</span>
                  </Box>
                  <Box display="flex" flexDirection="column" className="footer-icon-right--item">
                    <img src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/footer/%E5%8A%A0%E5%AF%86.png" />
                    <span>加密传输方案</span>
                  </Box>
                </Box>
              </Box>
            </Visible>
          </CompanyDescCol>
        </Row>
      </Container>
      <Visible md lg xl xxl xxxl>
        <div className="footer-icon-wrapper">
          <div
            className="public-img public-img--common"
            onMouseOver={() => {
              setPublicCodeVisible(true);
            }}
            onMouseLeave={() => {
              setPublicCodeVisible(false);
            }}>
            {publicCodeVisible && <div className="public-code public-qr-code"></div>}
          </div>
          <div
            className="video-img public-img--common"
            onMouseOver={() => {
              setVideoCodeVisible(true);
            }}
            onMouseLeave={() => {
              setVideoCodeVisible(false);
            }}>
            {videoCodeVisible && <div className="video-code public-qr-code"></div>}
          </div>
          <div className="footer-icon-right">
            {FriendLinkList.map((item, i) => {
              const ret = (
                <span
                  className="footer-icon-right--item"
                  onClick={() => {
                    window.open(item.link, '_blank');
                  }}>
                  {item.name}
                </span>
              );
              return i === 0 ? ret : [<span style={{ textAlign: 'center', width: '18px' }}>|</span>, ret];
            })}
          </div>
        </div>
      </Visible>
      <CompanyInfoCol>
        <span>
          Copyright © 2016-{new Date().getFullYear()}{' '}
          <a href="https://beian.miit.gov.cn/" target="_Blank" rel="noreferrer">
            浙ICP备16033928号
          </a>{' '}
          版权所有 浙江百应科技有限公司
        </span>
        <CrmImg>
          <PrivacyPolicy href="/privacy-policy" target="_blank">
            隐私政策
          </PrivacyPolicy>
          <img src={CMMI_SRC} style={{ width: '54px' }} />
          <img src={XIN_SRC} />
        </CrmImg>
      </CompanyInfoCol>
    </FooterWrapper>
  );
};
