import styled from 'styled-components';

export const footerImgLeft = 'https://cdn.byai.com/static/oss-script/55d25cd0fab22d9af5fc65f891943a6f.png';
export const footerImgRight = 'https://cdn.byai.com/static/oss-script/b18bf34d3b6acce427d0a5628010a43c.png';
export const FooterContainer = styled.div`
  width: 100%;
  height: 247px;
  background: #f4f7ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title {
    font-size: 18px;
    font-weight: 400;
    margin: 40px 0 32px 0;
    color: #2b2a35;
    line-height: 24px;
  }
  .desc-list {
    display: flex;
    padding-bottom: 32px;
  }
  .desc-list .span {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 50px;
  }
  .number {
    font-size: 24px;
    font-weight: bold;
    color: #2b2a35;
    line-height: 32px;
    font-family: DINAlternate-Bold, DINAlternate;
  }
  .desc {
    font-size: 14px;
    font-weight: 400;
    color: rgba(43, 42, 53, 0.45);
    line-height: 22px;
  }
  .copyright {
    width: 1200px;
    height: 60px;
    font-size: 14px;
    font-weight: 400;
    color: #666666;
    line-height: 22px;
    margin: 0 120px;
    border-top: 1px solid rgba(43, 42, 53, 0.09);
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      text-decoration: none;
    }
    .right {
      display: flex;
      align-items: center;
    }
    .right div {
      margin-left: 16px;
    }
    .right .private {
      cursor: pointer;
    }
  }
`;
export const ImgContainer = styled.div<{ width: string; height: string; url: string }>`
  width: ${props => props.width};
  height: ${props => props.height};
  width: ${props => props.width};
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
