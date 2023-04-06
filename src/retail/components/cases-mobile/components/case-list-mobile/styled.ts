import styled from 'styled-components';

export const CasesMobileList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;

export const TopImg = styled.div`
  width: 326px;
  height: 100px;
  background: rgba(43, 43, 43, 0.61);
  border-radius: 7px 7px 0px 0px;
`;

export const DescContent = styled.div`
  width: 326px;
  background: #ffffff;
  box-shadow: 0px 4px 17px 0px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  padding: 21px 24px 0 24px;
  .title {
    height: 41px;
    font-size: 16px;
    font-weight: 600;
    color: #2b2b2b;
    line-height: 21px;
  }
  .sub-title {
    height: 21px;
    font-size: 12px;
    font-weight: 400;
    color: rgba(43, 43, 43, 0.85);
    line-height: 21px;
    margin: 16px 0;
  }
  .desc-font {
    width: 284px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    line-height: 24px;
  }
`;
export const ViewDetailsWrapper = styled.div`
  margin-top: 24px;
  margin-bottom: 16px;
  font-size: 16px;
  color: #f66600;
  text-align: center;
`;
