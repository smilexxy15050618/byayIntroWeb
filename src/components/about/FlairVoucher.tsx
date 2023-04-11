import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../constants/style';
import { splitCssValue } from '../../lib/utils';

const Title = styled.div`
  padding-top: 80px;
  padding-bottom: 16px;
  font-size: 40px;
  line-height: 48px;
  color:rgba(255, 255, 255, 1);
  text-align: center;
`;

const SubTitle = styled.div`
padding-bottom: 44px;
font-size: 22px;
line-height: 44x;
color:rgba(255, 255, 255, 1);
text-align: center;
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 105px;
  &::before {
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    content: '';
    width: 100%;
    height: 287px;
    background: rgba(43, 88, 249, 1);
  }
`;

const FlairVoucherContainer = styled.div<{ maxWidthPc?: string; minWidthPC?: string }>`
  @media (min-width: 768px) {
    max-width: ${props => props.maxWidthPc || Theme.ContentWidth};
    min-width: ${props => props.minWidthPC || 'unset'};
    width: calc(
      100vw / ${splitCssValue(Theme.DesignDraftWidth).num} *
        ${props => splitCssValue(props.maxWidthPc || Theme.ContentWidth).num}
    );
    margin: 0 auto;
  }
  position: relative;
  height: 100%;
  @media (max-width: 768px) {
    width: 100% !important;
  }
`;



interface SocietyDutyProps {
  minWidthPC?: string;
  backgroundImage: string;
  societyDuty1: string;
  societyDuty2: string;
}

const FlairVoucher: React.SFC<SocietyDutyProps> = ({ minWidthPC }) => (
  <Wrapper>
    <FlairVoucherContainer maxWidthPc="1200px" minWidthPC={minWidthPC}>
      <Title>社会责任</Title>
      <SubTitle>从自身产品安全性到对外数据服务，为数据安全保驾护航</SubTitle>
      <FlairVoucherSlide>
        
      </FlairVoucherSlide>
    </FlairVoucherContainer>
  </Wrapper>
);

export default FlairVoucher;
