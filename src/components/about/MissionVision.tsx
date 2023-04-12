import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../constants/style';
import { splitCssValue } from '../../lib/utils';


interface MissionVisionProps {
  minWidthPC?: string;
  backgroundImage?: string;
}

const MissionVisionContainer = styled.div<{ maxWidthPc?: string; minWidthPC?: string }>`
  @media (min-width: 768px) {
    max-width: ${props => props.maxWidthPc || Theme.ContentWidth};
    min-width: ${props => props.minWidthPC || 'unset'};
    width: calc(
      100vw / ${splitCssValue(Theme.DesignDraftWidth).num} *
        ${props => splitCssValue(props.maxWidthPc || Theme.ContentWidth).num}
    );
    margin: 0 auto;
  }
  height: 100%;
  @media (max-width: 768px) {
    width: 100% !important;
  }
`;

const Title = styled.div`
  padding-top: 80px;
  padding-bottom:44px;
  font-size: 40px;
  line-height: 48px;
  color:rgba(43, 43, 43, 1);
  text-align: center;
`;

const MissionVisionContainerWrap = styled.div<{ backgroundImage?: string }>`
  position: relative;
  width: 1034px;
  height: 500px;
  margin: 0 auto;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  .mission-tips{
    position: absolute;
    left: 140px;
    top: 72px;
    font-size: 36px;
    color: rgba(43, 88, 249, 1);
    letter-spacing: 4.06px;
    span{
      color:rgba(43, 43, 43, 1)
    }
  }
  .vision-tips{
    position: absolute;
    left: 72px;
    top: 268px;
    font-size: 36px;
    color: rgba(43, 88, 249, 1);
    letter-spacing: 4.06px;
    span{
      color:rgba(43, 43, 43, 1)
    }
  }
`;



const MissionVision: React.SFC<MissionVisionProps> = ({ minWidthPC, backgroundImage }) => {
  return (
    <MissionVisionContainer id="MissionVision" maxWidthPc="1200px" minWidthPC={minWidthPC}>
      <Title>使命和愿景</Title>
      <MissionVisionContainerWrap backgroundImage={backgroundImage}>
        <div className='mission-tips'><span>使命：</span>以AI赋能经济发展和社会生活</div>
        <div className='vision-tips'><span>愿景：</span>成为具有世界级竞争力的中国科技公司</div>
      </MissionVisionContainerWrap>
    </MissionVisionContainer>
  )
};

export default MissionVision;
