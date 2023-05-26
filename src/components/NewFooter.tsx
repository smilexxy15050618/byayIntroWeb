import classNames from 'classnames';
import Link from 'next/link';
import * as React from 'react';
import { useState } from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { CALL_NUMBER_400 } from '../constants';
import { FOOTER_CONFIG, FOOTER_WAP_CONFIG } from '../constants/page-modify';
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
  min-height: 510px;
  background: #0d1727;
  > div {
    max-width: 1200px !important;
    margin: 0 auto;
  }
  ${media.phone`
    .col-item {
      text-align: left;
      height: 24px;
      line-height: 24px;
      margin-bottom: 6px;
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
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 1.2px;
    line-height: 17.38px;
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
  a{
    color: rgba(255, 255, 255, 0.65);
    &:hover{
      color:#fff;
      text-decoration: none;
    }
  }
  span {
    text-align: center;
    font-size: 12px;
    letter-spacing: 1.07px;
    line-height: 17.38px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 27px 21px;
    flex-direction: column;
    height: 258px;
    justify-content: flex-start;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.65);
    span {
      /* margin-bottom: 24px; */
    }
  }
`;
// 联系我们
const CompanyDescCol = styled(Col)`
&:empty{
  display:none;
}
  @media (max-width: 980px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 192px;
    
    .two-icon {
      margin-bottom: 40px;
    }
  }
  margin-top: 25px;
  color: rgba(255, 255, 255, 0.65) !important;
  font-size: 16px;
  letter-spacing: 1px;

  
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
    margin-bottom: 6px;
    ${media.desktop`text-align: center;`}
  }
  
  &:nth-child(4) {
    > div {
      ${media.desktop`justify-content: center !important;`}
      > div {
        ${media.desktop`
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
    margin-bottom: 3px;
    font-size: 16px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    height: 44px;
    line-height: 44px;
    margin-top: 34px;
    ${media.desktop`text-align: center;`}
    ${media.phone`
      text-align: left;
      font-size: 16px;
      line-height: 24px;
      margin-top: 26px;
      margin-bottom: 22px;
    `}
    span.qy{
      display: inline-block;
      margin-left: 6px;
      width: 24px;
      height: 14px;
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAcCAYAAAAnbDzKAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIuSURBVFiF7ZgxbtswFIY/KbEHazFauLmDXKDoCSLfwWyXbM0tOlBacoqOXWL5DpZv0ACR7xB38WIPUVt2CCTIFiWTsgOhQL/JJvTI/396jyQE/+kWB2At+ALcAW+Bi04VGaDgEZebq3senKfPfHD+8KNrUS25dR3F965VtEUp7lwU77sW0hbH4Y3bJtATIZ4ITxbQGweV/4djR7i0NtAbBwyEpOdf24ZW5hnKxZ7gvl8dO4a1gaFckKVJIaBrjA30xgGjmSJLEzbRhE00AWA0U7av/awYGciznYsHit9Zmli/9nNy1IAnwor4crOVTdQ1tq7eTemNAzwR1sbWGsgXHQjJLo4K8QDeVO7V/yaasIsjBkIymqmKkbxnvKm0NtD3XzaNLE3MDQzlohC4iSZs41D32B7bOOTnJ2fPSDlruzhqs00WCazjUjeYrZZs51Gt6ybKZsvxz6uEAZK+HxjPm7/JpgRqDZQDPBHyvEqszOgWzNKXOWzOj2PZhxoDh5MQozVQ17R1GdvOI+NmNsk+GBhoQpfNbLWsfT5PgjeVbOfNmTXJPpxooLwz2cTku1ITuzgy2jxaXeZOwbSXTMRDBwbOzT9vQNsDlXu6f62t2aY6LpdK063Vm0o4OKF1Y9lqqS0rrYH8+C4LHWrENgkzaUJdP9gens5a8AvNl4hz3C7bnOS2OGvBE/Du1Vd6HR5dR/G1axVtUS437mjON+CjgrRrQYb8BtYXcHt1z8Nfgz/zApzDBFUAAAAASUVORK5CYII=')
        no-repeat center center/ contain;
    }
    span.zw{
      display: inline-block;
      margin-left: 6px;
      width: 24px;
      height: 14px;
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAcCAYAAAAnbDzKAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALYSURBVFiF7VhLittAEH3VMj5AArmDZUPIok8iQRyYjcmsdIXg1cAcQasBbwJmwDpJbzJgy2dITpAYW52FXO1W6y8vlEUeDNjtlvq9qupXxQD/MS4IABbL01eN7Bmg9wC8kTm1goC91vRweJ2+0fzz6SNI/xib1BAQ6FEQ6e9jExkKjexZaGAxNpHB0PRO3PsO6QtE4bBrc8+zAADCZFL34jaoNAMAbNYTxMml99lR6CEKvEHP2qgUsFlXLhewejpD+gQAUKnudaj0BaLgFvm2LMS7epGVTFdP58L3KMgzEieZWVNpBul75nNXSF9gs56YZ+SMGve2ZahSQInQVYC7zlHcb6eVL198ORX3X8uG4QaKYYtsij5QI6ALOO0qzaCOtxKSM6qM3GY9Mevx7oIo9HKSR10gySJVmtUKbBWQ16hAnGSt5eHu2W+nhqQNddSIk7PZyyIKd8Ei3rUsazMgfQEkWXkNgPTJHBwFAiuu5wb3cgXZe20R6qghfYJKO/HvXkLSF9g4BN0osStVkZU+mQvL5FWaZ4/NgffYLsVnuKXWW4Bdk7f616a2m1LOLmaIJOcCuSj0EO8uhaizaKDZqQZdYjcSXEZ1janpMt4urS4EIc9OO5fBLmQfZI8EdbZnR7SwbsqKTF8pn6FrM3y3gDjJsLnWbFPTsS9+FZp+W6X1GewtgCPJUeG/tvkp3pWt1Z6HqjJn94RBAvKUC0PO7rgclSj0bvbacNnK7xaN5LuiUgC7RhR4QHBzC7Y72z04QuqoEQWecZQ28l1GBTmj1oZWEmB7tEu4ILKm5XMtVxHjDs+22zYqdBnmaL78028WBgreX5pcrfGAR4Io9EyDsterxLlr7kDoYgLggp7/iXDnGht25E0XTTXkjBpnHJVmUJbNqlRDdRjmaL78/ROgD30E/CsgYC9A4tvYRIZCa3oQh+30RQv6BOAwNqGOuAD6F4EeD6/Tt79+QZ7tXYXxFQAAAABJRU5ErkJggg==')
        no-repeat center center/ contain;
    }
  }
  a {
    height: 24px;
    display: block;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.65) !important;
    line-height: 24px;
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
  
  .phone {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.65) !important;
    &:hover{
      color: #ffffff !important;
      text-decoration: none !important;
    }
  }
  .addr {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.65) !important;
    margin: 0px 0px 24px;
  }
  .margin-adjust {
    display: flex !important;
    align-items: flex-start;
    flex-direction: column;
    font-size: 14px;
    line-height: 22px;
    > div {
      margin-bottom: 7px;
    }
  }
`;

const CrmImg = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  img {
    height: 20px;
    margin-bottom: 0;
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
  width: 72px;
  font-size: 12px;
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
    width: 100%;
    order: 3;
  }
`;

const LinkColWap = styled.div`
  width: 100%;
  &:nth-child(1){
    margin-top: 32px;
  }
  h6{
    position: relative;
    padding-left: 32px;
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    line-height: 44px;
    color: rgba(255, 255, 255, 1);
    &::after{
      position: absolute;
      right: 32px;
      top: 15px;
      content: '';
      width: 16px;
      height: 16px;
      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABnSURBVFiFY2AYCuD///8F////LxhIB8DAwDgCGgKjjhh1xKgjRh0x6ohRR5DjiPeE1DLRyA0BUPoijczHDf7//38A6vsDI9ZygvE+avmo5aOWj1pOjuVEVy60csDAWQ51wMB1TGkNAP36ZwJAerQYAAAAAElFTkSuQmCC') no-repeat center center/ contain;
      transition: all 0.3s ease-in-out;
    }
  }
  h6.active{
    &::after{
      transform: rotate(90deg);
    }
  }
  .type-wap-wrap{
    padding: 10px 0;
    background: rgba(12, 27, 52, 1);
    .col-wap-item{
      display: block;
      padding-left: 32px;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.65);
      &:hover{
        color: rgba(255, 255, 255, 0.65);
        text-decoration: none;
      }
    }
  }
`

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
  const [footetWapIndex, setFootetWapIndex] = useState<number>(5);
  const [currCodeSrc, setCurrCordSrc] = useState(PUBLIC_CODE);
  return (
    <FooterWrapper>
      <Container>
        <Row justify="between" style={{paddingBottom: '13px'}}>
          <Visible md lg xl xxl xxxl>
            <div style={{ width: '242px'}}>
              <div style={{ width: '184px', marginLeft: 14, marginTop: 44 }}>
                <img src={BOTTOM_WHITE_LOGO} />
              </div>
            </div>
          </Visible>
          <Visible md lg xl xxl xxxl>
            {(origin === 'crm' ? CRM_FOOTER_CONFIG : FOOTER_CONFIG)
            .filter(block => block.title !== '热门搜索产品')
            .map((block, index) => (
              <LinkCol key={block.title} style={{width: block.title=='百应产品' ? '274px' : block.title=='解决方案' ? '172px' : block.title == '探索百应' ? '152px' : 'auto', flex:'none'}}>
                <h6>
                  {block.title}
                  <span className="qy" style={{ display: block.type == 'qy' ? 'inline-block' : 'none' }}></span>
                  <span className="zw" style={{ display: block.type == 'zw' ? 'inline-block' : 'none' }}></span>
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
            <LinkCol style={{width: '300px'}}>
              <h6>联系我们</h6>
              <a href="tel:4000235100" className="margin-adjust phone">
                <div>电话: </div>
                <div>400-0235-100</div>
              </a>
              <div className="margin-adjust addr">
                <div>公司地址：</div>
                <div>浙江省杭州市余杭区梦想小镇天使村11幢</div>
              </div>
            </LinkCol>
          </Visible>
          <Visible sm xs>
            {FOOTER_WAP_CONFIG.map((item, index) => (
              <LinkColWap key={item.title}>
                <h6 
                  className={footetWapIndex == index ? 'active' : ''} 
                  onClick={e => {
                    if(footetWapIndex == index){
                      setFootetWapIndex(5)
                    } else {
                      setFootetWapIndex(index)
                    }
                  }} 
                >
                  {item.title}
                </h6>
                <div className="type-wap-wrap" style={{display: footetWapIndex == index ? 'block' : 'none'}}>
                  {item.list.map((items, i) => (
                    <a href={items.href} className="col-wap-item">
                      {items.name}
                    </a>
                  ))}
                </div>
              </LinkColWap>
            ))}
          </Visible>
          <CompanyDescCol>
            <Visible sm xs>
              <Box
                mb="40px"
                flexDirection="column"
                width="calc(100vw - 64px)"
                height="304px"
                bgcolor="#0D1F3B"
                display="flex"
                ml="32px"
                borderRadius="8px"
                justifyContent="center"
                alignItems="center">
                <div style={{ width: '132px', height: '30px' }}>
                  <img src={BOTTOM_WHITE_LOGO} style={{margin: '0'}} />
                </div>
                <img style={{ height: '128px', marginTop: '2px', marginBottom:'16px' }} src={currCodeSrc} />
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
                {/* <Box mt="40px" width="100%" display="flex" justifyContent="space-around">
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
                </Box> */}
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
        <Visible md lg xl xxl xxxl>
          <CrmImg>
            <PrivacyPolicy href="/privacy-policy" target="_blank">
              隐私政策
            </PrivacyPolicy>
            <img src={CMMI_SRC} style={{ width: '38px' }} />
            <img src={XIN_SRC} />
          </CrmImg>
        </Visible>
        <Visible sm xs>
          <CrmImg>
            <img src={CMMI_SRC} style={{ width: '38px' }} />
            <img src={XIN_SRC} />
            <PrivacyPolicy href="/privacy-policy" target="_blank">
              隐私政策
            </PrivacyPolicy>
          </CrmImg>
        </Visible>
        
      </CompanyInfoCol>
    </FooterWrapper>
  );
};
