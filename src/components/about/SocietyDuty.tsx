import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../constants/style';
import { splitCssValue } from '../../lib/utils';

const Title = styled.div`
  padding-top: 80px;
  padding-bottom:44px;
  font-size: 40px;
  line-height: 48px;
  color:rgba(43, 43, 43, 1);
  text-align: center;
`;

const SocietyDutyContainer = styled.div<{ maxWidthPc?: string; minWidthPC?: string }>`
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

const SocietyDutyContainerWrap = styled.div<{ backgroundImage?: string; societyDuty1?: string }>`
  display: flex; 
  position: relative;
  width: 1140px;
  height: 439px;
  margin-left: 60px;
  background: rgba(246, 252, 255, 1);
  flex-grow: 0; 
  flex-shrink: 0; 
  align-items: normal; 
  justify-content: center; 
  flex-flow: row wrap;
  &::before{
    position: absolute;
    left: -58px;
    top: 40px;
    display: block;
    content: '';
    width: 122px;
    height: 394px;
    background-image: ${props => `url(${props.backgroundImage})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .title{
    padding-top: 50px;
    font-size: 24px;
    color: rgba(43, 88, 249, 1);
  }
  .intro-img{
    position: absolute;
    left: 77px;
    top: 116px;
  }
  .intro-info{
    position: absolute;
    left: 602px;
    top: 136px;
    width: 480px;
    height: 150px;
    line-height: 30px;
    font-size: 16px;
    color: rgba(43, 43, 43, 1);
    span{
      color: rgba(43, 88, 249, 1);
    }
  }
  .intro-tips{
    position: absolute;
    left: 77px;
    top: 350px;
    font-size: 16px;
    color: rgba(43, 88, 249, 1);
    line-height: 22px;
  }
`; 

const SocietyDutyContainerWrap2 = styled.div`
  display: flex;
  align-items: end;
  margin-top: 43px;
  .intro-img{
    position: relative;
    width:490px;
    height: 289px;
    margin-left: 65px;
    box-shadow: 0px 0px 16px 0px rgba(0, 6, 24, 0.15);
  }
  .intro-info{
    flex: 1;
    width: 646px;
    height: 243px;
    padding: 40px;
    font-size: 16px;
    letter-spacing: 0.13px;
    color: rgba(43, 43, 43, 1);
    line-height: 30px;
    border-radius: 0 8px 8px 0;
    background: rgba(246, 252, 255, 1);
  }
`;

interface SocietyDutyProps {
  minWidthPC?: string;
  backgroundImage: string;
  societyDuty1: string;
  societyDuty2: string;
}

const SocietyDuty: React.SFC<SocietyDutyProps> = ({ minWidthPC, backgroundImage, societyDuty1, societyDuty2 }) => (
  <SocietyDutyContainer id="SocietyDuty" maxWidthPc="1200px" minWidthPC={minWidthPC}>
    <Title>社会责任</Title>
    <SocietyDutyContainerWrap backgroundImage={backgroundImage} societyDuty1={societyDuty1}>
      <div className='title'>每一封感谢信，让我们坚定向前</div>
      <div className="intro-img"><img src={societyDuty1} /></div>
      <div className="intro-info">2020-2022年，百应在疫情爆发的第一时间上线了<span>「智能疫情通知回访系统」</span>，助力公安高效开展疫情流调和排查工作，减轻民警工作负荷。帮助了湖北、浙江、北京、辽宁、新疆等全国12个省市地区的公安，回访了数千万人次，筛查了5万多隔离人员，覆盖200多个政府部门、医院、学校和社区。</div>
      <div className="intro-tips">抗疫期间，百应科技先后收到来自武汉、济南、杭州等地的感谢信。有一封信中提到，“对百应科<br />技的辛勤付出、专业服务和高度的社会责任感，我们深表感谢！</div>
    </SocietyDutyContainerWrap>
    <SocietyDutyContainerWrap2>
      <div className="intro-img"><img src={societyDuty2} /></div>
      <div className="intro-info">400+公安机构通过百应Al解决电信网络诈骗问题，为超1亿+民众提供了反欺<br />诈知识，预警诈骗电话超5000万次，成功劝阻100余万名民众受骗。助力基<br />层派出所全年警情下降26.5%。诈骗案发数下降67.7%，案损金额下降<br /> 86.5%。</div>
    </SocietyDutyContainerWrap2>
  </SocietyDutyContainer>
);

export default SocietyDuty;
