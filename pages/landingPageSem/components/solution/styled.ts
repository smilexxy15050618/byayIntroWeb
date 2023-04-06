import styled from 'styled-components';

export const backgroundImg = '//cdn.byai.com/by-fe-cdn/static/pmp/f2d671f8-4206-44e8-8ae3-d78a4a499a72.png';

export const SolutionContainer = styled.div`
  width: 100%;
  height: 498px;
  display: flex;
  justify-content: center;
  background: #f4f7ff;
  .content {
    display: flex;
    justify-content: center;
  }
  .left {
    padding: 80px 68px 80px 0;
  }
  .right {
    width: 710px;
    height: 498px;
    position: relative;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${backgroundImg});
    @keyframes left-float {
      from {
        top: 180px;
      }
      to {
        top: 175px;
      }
    }
    @keyframes middle-float {
      from {
        top: 240px;
      }
      to {
        top: 235px;
      }
    }
    @keyframes right-float {
      from {
        top: 155px;
      }
      to {
        top: 145px;
      }
    }
  }
  .desc {
    width: 480px;
    height: 160px;
    font-size: 56px;
    font-weight: 500;
    color: #2b2a35;
    line-height: 80px;
    letter-spacing: 2px;
  }
  .cardList {
    height: 74px;
    margin-top: 16px;
    padding: 14px 12px;
    display: flex;
    background-color: rgba(43, 88, 249, 0.03);
    border-radius: 8px;
  }
  .card {
    border: none;
    padding: 0 12px;
    border-radius: 0;
    background-color: unset;
  }
  .card-line {
    width: 1px;
    height: calc(100% - 14px);
    margin-top: 7px;
    background: rgba(43, 42, 53, 0.09);
  }
  .card:nth-child(1) {
    border: none;
    padding-left: 0;
  }
  .card:last-child {
    padding-right: 0;
  }
  .title {
    font-size: 14px;
    font-weight: 500;
    color: #2b2a35;
    line-height: 22px;
    height: 22px;
    font-family: PingFangSC-Medium, PingFang SC;
  }
  .card-desc {
    height: 20px;
    font-size: 12px;
    font-weight: 400;
    color: rgba(43, 42, 53, 0.65);
    line-height: 20px;
    font-family: PingFangSC-Regular, PingFang SC;
    margin-top: 4px;
  }
  .button {
    width: 168px;
    height: 48px;
    margin-top: 40px;
    padding: 10px 24px;
    font-size: 20px;
    font-weight: 400;
    font-family: PingFangSC-Regular, PingFang SC;
    color: #ffffff;
    line-height: 28px;
    background: #2b58f9;
    box-shadow: 0px 4px 16px 0px rgba(43, 88, 249, 0.15), 0px -1px 4px 0px rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    text-decoration: none;
    display: block;
    &:hover {
      background: #547fff;
    }
    &:active {
      background: #193cd4;
    }
  }
`;
