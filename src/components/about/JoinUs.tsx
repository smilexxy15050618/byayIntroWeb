import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../constants/style';
import { splitCssValue } from '../../lib/utils';

const JoinUsWrap = styled.div`
background: linear-gradient(251.87deg, rgba(232, 233, 254, 1) 0%, rgba(246, 252, 255, 1) 100%);
`

const AboutUsBtnWrap = styled.div`
  display: flex;
  align-items: center;
  > div:nth-child(1) {
    margin-right: 24px;
  }
`;

const BlueBtn = styled.div`
  width: 132px;
  height: 48px;
  border-radius: 5.33px;
  background: rgba(43, 88, 249, 1);
  font-size: 16px;
  font-weight: 500;
  line-height: 048px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  &:hover{
      cursor:pointer;
  }
`;

const WhiteBtn = styled.div`
  width: 132px;
  height: 48px;
  opacity: 1;
  border-radius: 5.33px;
  border: 0.67px solid rgba(43, 88, 249, 1); 
  font-size: 16px;
  font-weight: 500;
  line-height: 048px;
  text-align: center;
  color: rgba(43, 88, 249, 1);
  &:hover{
      cursor:pointer;
  }
`;

const BriefContainer = styled.div<{ maxWidthPc?: string; minWidthPC?: string, backgroundImage?: string }>`
  @media (min-width: 768px) {
    max-width: ${props => props.maxWidthPc || Theme.ContentWidth};
    min-width: ${props => props.minWidthPC || 'unset'};
    width: calc(
      100vw / ${splitCssValue(Theme.DesignDraftWidth).num} *
        ${props => splitCssValue(props.maxWidthPc || Theme.ContentWidth).num}
    );
  }
  height: 431px;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: 579px 431px;
  background-position: right top;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 100% !important;
  }
  .title{
    padding-top: 110px;
    font-size: 40px;
    line-heightL 48px;
    color: rgba(43, 43, 43, 1);
    letter-spacing: 2.5px;
  }
  .subtitle{
    padding: 12px 0 18px;
    font-size: 36px;
    letter-spacing: 1px;
    line-height: 48px;
    color: rgba(43, 43, 43, 1);
    font-weight: 500;
    span{
      color: rgb(43,88,249);
    }
  }
  .
`;


interface IBriefProps {
  maxWidthPc?: string;
  backgroundImage: string;
  minWidthPC?: string;
}

const JoinUs: React.SFC<IBriefProps> = ({ minWidthPC,backgroundImage }) => (
  <JoinUsWrap id="JoinUs">
    <BriefContainer maxWidthPc="1200px" minWidthPC={minWidthPC} backgroundImage={backgroundImage}>
      <div className='title'>极致工作 快乐生活</div>
      <div className='subtitle'><span>B</span>uild <span>Y</span>our dreams with us</div>
      <AboutUsBtnWrap>
        <BlueBtn
          onClick={() =>
            window.open('https://www.zhipin.com/gongsir/1f1899216bf70b801HV53tu1FA~~.html?ka=company-jobs')
          }>
          加入我们
        </BlueBtn>
      </AboutUsBtnWrap>
    </BriefContainer>
  </JoinUsWrap>
);

export default JoinUs;
