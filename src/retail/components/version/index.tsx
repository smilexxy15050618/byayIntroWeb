import styled from 'styled-components';

const Wrap = styled.div`
  .vision-wrap {
    text-align: center;
    .vision-title {
      margin-top: 69px;
      height: 68px;
      font-size: 40px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #2b2b2b;
      line-height: 68px;
    }
    .vision-second-title {
      height: 68px;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #404040;
      line-height: 68px;
    }
    .title-slogan {
      height: 246px;
      background: linear-gradient(360deg, #f66600 0%, #fd9400 100%);
      img {
        width: 685px;
        margin-top: 67px;
      }
    }
    .slogan-detail {
      img {
        margin: 80px 0px;
        width: 800px;
      }
    }
    .slogan-cos {
      img {
        margin: 80px 0px;
        width: 1000px;
      }
    }
  }
`;
const Vision = () => (
  <Wrap>
    <div className="vision-wrap">
      <div className="vision-title">愿景</div>
      <div className="vision-second-title">VISION</div>
      <div className="title-slogan">
        <img src="https://cdn.byai.com/static/intro/img/retail/about/about-baiying/slogan.png" alt="" />
      </div>
      <div className="slogan-detail">
        <img src="https://cdn.byai.com/static/intro/img/retail/about/about-baiying/slogan-detail.png" alt="" />
      </div>
    </div>
  </Wrap>
);

export default Vision;
