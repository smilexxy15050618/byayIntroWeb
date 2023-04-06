import styled from 'styled-components';

export const CasesWrapper = styled.div`
  width: 100%;
  background: #ffffff;
  padding-bottom: 69px;
  .description {
    margin: 100px auto 48px;
    text-align: center;
    height: 68px;
    font-size: 40px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2b2b2b;
    line-height: 68px;
  }
  .view-description {
    font-size: 14px;
    height: 137px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
    line-height: 24px;
  }
  .view-detail {
    width: 380px;
    height: 48px;
    text-align: center;
    line-height: 48px;
    background: rgba(246, 102, 0, 0.1);
    a {
      color: #f66600;
      &:hover {
        color: #f66600;
      }
    }
  }
`;
