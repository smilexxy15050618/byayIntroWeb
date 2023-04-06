import styled from 'styled-components';

export const ECommerceLayout = styled.div`
  width: 100%;
  height: 100%;
`;
export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 64px;
  position: absolute;
`;
export const MobileContentContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 44px;
  position: absolute;
  .call-me {
    width: 100%;
    height: 50px;
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
    line-height: 28px;
    padding-top: 11px;
    text-align: center;
    background: #2b58f9;
    border: none;
  }
  .footer {
    width: 100%;
    height: 34px;
    display: flex;
    justify-content: center;
    .driver {
      width: 134px;
      height: 5px;
      background: #000000;
      margin-top: 20px;
      border-radius: 100px;
    }
  }
`;
