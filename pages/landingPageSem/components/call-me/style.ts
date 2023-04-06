import styled from 'styled-components';

export const CallMeContainer = styled.div`
  width: 100%;
  height: 346px;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  &::after {
    content: '';
    width: 338px;
    height: 346px;
    top: 3840px;
    right: 0;
    position: absolute;
    background-image: url('https://cdn.byai.com/static/oss-script/a7b8a992b08777781b8f60e46f288c00.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .content {
    width: 1200px;
    display: flex;
    position: relative;
    z-index: 2;
    justify-content: space-between;
  }
  .left {
    width: 638px;
    margin-right: 386px;
    .title {
      font-size: 34px;
      font-weight: 600;
      color: #2b2a35;
      line-height: 48px;
      letter-spacing: 1.5px;
      margin-bottom: 16px;
    }
    .desc {
      display: flex;
      align-items: center;
      font-size: 18px;
      font-weight: 400;
      color: #2b2a35;
      line-height: 26px;
      margin-bottom: 48px;
    }
    .call-me .button {
      width: 168px;
      height: 48px;
      margin-top: 40px;
      padding: 10px 24px;
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 28px;
      background: #2b58f9;
      box-shadow: 0px 4px 16px 0px rgba(43, 88, 249, 0.15), 0px -1px 4px 0px rgba(255, 255, 255, 0.2);
      border-radius: 4px;
      display: block;
      text-decoration: none;
      &:hover {
        background: #547fff;
      }
      &:active {
        background: #193cd4;
      }
    }
  }
  .right .desc {
    width: 176px;
    margin-top: 8px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(43, 42, 53, 0.85);
    line-height: 24px;
  }
`;
export const QRCodeContainer = styled.div`
  width: 154px;
  height: 154px;
  margin-left: 11px;
  background-image: url('https://cdn.byai.com/by-fe-cdn/static/pmp/d18e766e-5e7c-4190-a3bf-9611ea8d26dc.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const RoundContainer = styled.div`
  width: 20px;
  height: 20px;
  margin: 0 8px 0 16px;
  background-image: url('https://cdn.byai.com/static/oss-script/8f150e561454bf518d3946a5dcbd09c7.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
