import styled from 'styled-components';

export const PaneWrapper = styled.div<{ bgColor?: 'white' | 'grey' }>`
  background-color: ${props => (props.bgColor === 'grey' ? 'rgba(243, 246, 250, 1)' : 'white')};
  padding: 80px 0;
`;

export const PaneWrapperMobile = styled.div<{ bgColor?: 'white' | 'grey' }>`
  background-color: ${props => (props.bgColor === 'grey' ? 'rgba(243, 246, 250, 1)' : 'white')};
  padding: 40px 0;
`;

export const TitleMobileWrapper = styled.div`
  margin-bottom: 32px;
`;
export const TitleMobile = styled.div`
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  text-align: center;
  color: #000000;
  line-height: 32px;
`;

export const TITLE_HEIGHT = '48px';

export const Title = styled.div`
  font-size: 40px;
  text-align: center;
  color: rgba(26, 26, 26, 1);
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  line-height: ${TITLE_HEIGHT};
`;
export const Desc = styled.div`
  font-size: 22px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #333333;
  text-align: center;
  line-height: 44px;
  margin-bottom: 40px;
`;
