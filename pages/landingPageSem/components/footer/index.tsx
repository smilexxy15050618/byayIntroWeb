import React from 'react';
import { FooterContainer, footerImgLeft, footerImgRight, ImgContainer } from './styled';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="content">
        <div className="title">百应，全域数智化业务增长引擎</div>
        <div className="desc-list">
          <span className="span">
            <span className="number">6+</span>
            <span className="desc">国际认证</span>
          </span>
          <span className="span">
            <span className="number">400+</span>
            <span className="desc">成员规模</span>
          </span>
          <span className="span">
            <span className="number">42000+</span>
            <span className="desc">服务客户</span>
          </span>
          <span className="span">
            <span className="number">100+</span>
            <span className="desc">在申及授权专利</span>
          </span>
        </div>
      </div>
      <div className="copyright">
        <div className="left">
          Copyright © 2016-2021{' '}
          <a href="https://beian.miit.gov.cn/" target="_blank">
            浙ICP备16033928号
          </a>{' '}
          版权所有 浙江百应科技有限公司
        </div>
        <div className="right">
          <div className="private" onClick={() => window.open('/privacy-policy')}>
            隐私政策
          </div>
          <ImgContainer height="28px" width="144px" url={footerImgLeft} />
          <ImgContainer height="28px" width="96px" url={footerImgRight} />
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
