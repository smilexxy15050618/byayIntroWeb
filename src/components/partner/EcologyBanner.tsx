import * as React from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';

const PREFIX = 'https://cdn.byai.com/static/official-website/cooperation';
const BANNER_PHONE = `${PREFIX}/ecology-banner-phone.png`;
const BANNER_PC = `${PREFIX}/ecology-banner-pc.png`;

const Wrap = styled.div`
  img {
    margin: 0px;
  }
  width: 100%;
  ${media.desktop`
    margin-top: 50px;
  `}
  padding: 0 20px;
  background-color: #f9faff;
  .content {
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    // align-items: center;
    max-width: 1120px;
    min-width: 1068px;
    .img-wrap {
      height: 420px;
      img {
        height: 100%;
      }
    }
  }
  .text {
    height: 100%;
    padding-top: 55px;
    .title {
      font-family: PingFangSC-Medium, PingFang SC;
      font-size: 40px;
      font-weight: 500;
      color: #000000;
      line-height: 56px;
      margin-bottom: 20px;
    }
    .desc {
      font-size: 20px;
      font-family: -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif,
        'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
      color: rgba(0, 0, 0, 0.65);
      font-weight: 400;
      line-height: 30px;
      margin-bottom: 56px;
    }
    .btn {
      cursor: pointer;
      padding: 0px;
      width: 120px;
      height: 40px;
      background: #2b58f9;
      border-radius: 20px;
      font-size: 16px;
      font-weight: 400;
      color: #ffffff;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
  .phone-content {
    display: none;
  }
  ${media.phone`
    padding: 0px;
    .content{
      display: none;
    }
    .phone-content{
      height: 624px;
      background-color: #F9FAFF;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      .small-title{
        margin: 52px 0 9px;
        font-size: 20px;
        font-weight: 400;
        color: #0D1924;
        line-height: 45px;
      }
      .big-title{
        font-size: 43px;
        font-weight: 500;
        color: #0D1924;
        line-height: 50px;
      }
      .btn{
        cursor: pointer;
        width: 184px;
        height: 54px;
        background: #2B58F9;
        border-radius: 40px;
        font-size: 20px;
        font-weight: 300;
        color: #FFFFFF;
        line-height: 54px;
        padding: 0;
        margin-top: 36px;
      }
      img{
        width:394px;
        margin-top: 78px;
      }
    }
  `}
`;

interface IEcologyBannerProps {
  onBtnClick: () => void;
}
const EcologyBanner: React.SFC<IEcologyBannerProps> = ({ onBtnClick }) => (
  <Wrap>
    <div className="content">
      <div className="text animate__animated animate__slow animate__fadeInLeft">
        <div className="title ">百应生态合作计划</div>
        <p className="desc">
          基于AI、智能识别、智能交互、数据挖掘等核心技术，
          <br />
          百应致力于建设人工智能生态合作联盟，为政企行业客户提供
          <br />
          先进的数智化转型解决方案。我们正在寻找大数据、RPA等
          <br />
          技术领域的合作伙伴，协作共赢、共赴星辰大海。
          <br />
        </p>
        <span className="btn" onClick={onBtnClick}>
          立即加入
        </span>
      </div>
      <div className="img-wrap animate__animated animate__slow animate__fadeInRight">
        <img src={BANNER_PC} />
      </div>
    </div>
    <div className="phone-content">
      <span className="small-title">共建人工智能生态合作联盟</span>
      <div className="big-title">百应生态合作计划</div>
      <div className="btn" onClick={onBtnClick}>
        立即加入
      </div>
      <img src={BANNER_PHONE} />
    </div>
  </Wrap>
);

export default EcologyBanner;
