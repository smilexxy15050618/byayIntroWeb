import styled from 'styled-components';

export const taobao = 'https://cdn.byai.com/static/oss-script/66611a271a199bdadc695212124b7d15.png';
export const TMall = 'https://cdn.byai.com/static/oss-script/db428c9a2932fc0c0f17c09a6a3cee04.png';
export const xiaohongshu = 'https://cdn.byai.com/static/oss-script/630bfed0da5178b91adc98a3f80b75d4.png';
export const douyin = 'https://cdn.byai.com/static/oss-script/5f53d21f5c795cbc1f323613455d1b65.png';
export const kuaishou = 'https://cdn.byai.com/static/oss-script/109438d63dd10e0b2f6174a9d3672eee.png';
export const jd = 'https://cdn.byai.com/static/oss-script/36d11420ed62dc1e780fcd0aa1e66854.png';
export const vip = ' https://cdn.byai.com/static/oss-script/d453d22124ce6fee5d480440d05d1297.png';
export const pinduoduo = 'https://cdn.byai.com/static/oss-script/499b4c821cd3a931e06da32ddde9993d.png';
export const suning = 'https://cdn.byai.com/static/oss-script/affbb43e8e823cb0d3405ce5a054e007.png';
export const SupportPlatformContainer = styled.div`
  height: 408px;
  width: 100%;
  background: #ffffff;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  .content {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    margin-bottom: 40px;
    font-size: 36px;
    font-weight: 600;
    color: #2b2a35;
    line-height: 48px;
    letter-spacing: 1.5px;
  }
  .customer-icon-row {
    display: flex;
    align-items: center;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const Model = styled.div`
  position: absolute;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #ffffff 0%, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0) 90%, #ffffff 100%);
`;

export const RoundContainer = styled.div`
  width: 88px;
  height: 88px;
  margin: 16px 48px 16px 0;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 4px 16px 0px rgba(69, 88, 128, 0.08);
`;
