import * as React from 'react';
import styled from 'styled-components';
import { Hidden, Visible } from 'react-grid-system';
import imgurl from '../../../img.url.js'
const joinUsImg = `${imgurl}/join-wap.png`

const JoinUsWrap = styled.div`
  background: linear-gradient(251.87deg, rgba(232, 233, 254, 1) 0%, rgba(246, 252, 255, 1) 100%);
`

const AboutUsBtnWrap = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    padding-top: 11px;
    justify-content: center;
  }
  // > div:nth-child(1) {
  //   margin-right: 24px;
  // }
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

const BriefContainer = styled.div<{ backgroundImage?: string }>`
  width: 1200px;
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
`;

const BriefWapWrap = styled.div`
  width: 100%;
  height: 536px;
  padding-top: 40px;
  box-sizing: border-box;
  img{
    display: block;
    width: 343px;
    height: 286px;
    margin: 0 auto;
  }
  .title{
    padding-top: 24px;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 1.38px;
    line-height: 48px;
    color: rgba(43, 43, 43, 1);
    text-align: center;
  }
  .subtitle{
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 1.25px;
    line-height: 48px;
    color: rgba(43, 43, 43, 1);
    margin-top: -8px;
    text-align: center;
    span{
      color: rgba(43, 88, 249, 1);
    }
  }
`

interface IBriefProps {
  indexTab: string;
  backgroundImage: string;
}

const JoinUs: React.SFC<IBriefProps> = ({ backgroundImage, indexTab }) => (
  <JoinUsWrap id="JoinUs" style={{paddingTop: indexTab == 5 ? '109px' : '0'}}>
    <Hidden xs sm>
      <BriefContainer backgroundImage={backgroundImage}>
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
    </Hidden>
    <Visible xs sm>
      <BriefWapWrap>
        <img src={joinUsImg} />
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
      </BriefWapWrap>
    </Visible>
  </JoinUsWrap>
);

export default JoinUs;
