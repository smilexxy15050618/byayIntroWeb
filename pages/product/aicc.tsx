import Link from 'next/link';
import * as React from 'react';
import { Col, Container, Row, Visible } from 'react-grid-system';
import styled, { css } from 'styled-components';
import { Layout } from '../../src/components/Layout';
import VoiceFooter from '../../src/components/order/footer';
import { BannerImg, Intro, Title } from '../../src/components/service';
import EasyCol from '../../src/components/voice/easy-col';
import System from '../../src/components/voice/system';
import { media } from '../../src/constants/style';

const Wrapper = styled.div`
  background: #fff;
  h1 {
    border: 0;
  }
  .demand-img {
    height: 440px;
    box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);
  }
`;
const Desc = styled.div`
  color: #666;
  font-size: 18px;
  font-weight: 300;
`;
const H3 = styled.div`
  color: #0d1924;
  font-size: 22px;
`;
const SmTip = styled.div`
  text-align: center;
  color: #0d1924;
  font-size: 16px;
  margin: 60px 0 80px;
`;
const DescCol = styled(Col)`
  padding-bottom: 40px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 84px;
    width: 84px;
    margin-bottom: 0;
  }
  .h3 {
    font-weight: 400;
    text-align: center;
    margin: 46px 0 10px;
  }
  .tip {
    margin-left: 6px;
    margin-top: 30px;
    font-size: 18px;
    color: #3153d4;
    position: relative;
    &:before {
      position: absolute;
      content: '';
      width: 10px;
      height: 10px;
      background-color: #3153d4;
      left: -19px;
      top: 9px;
    }
  }

  ${media.phone`
  .h3 {
      margin-top: 20px;
  }
    .tip {
      margin-top: -20px;
      color: #000;
      order: -1;
      margin-left: 0;
      margin-bottom: 40px;
    &:before {
      position: absolute;
      content: '';
      width: 34px;
      height: 2px;
      background-color:#3153D4;
      left: 10px;
      top: 35px;
      right: 10px;  
    }
    }
    `}
`;
const DataVisualWrapper = styled.div<{ odd?: boolean }>`
  h1 {
    text-align: center;
    padding: 60px 0 55px;
    border: 0;
    color: rgba(13, 25, 36, 1);
    font-size: 36px;
    font-weight: 400;
    margin: 0;
    line-height: 44px;
  }
  .wrapper {
    @media (min-width: 768px) {
      padding-top: 30px;
    }
    padding-bottom: 70px;
    ${props =>
    props.odd &&
    css`
        background-color: #f8f9fb;
      `}
  }
`;

const SERVICE_DEMAND = [
  {
    title: '机器人话术编辑',
    desc: '可视化话术编辑，主流程、知识库、多轮会话引导、应答全覆盖',
    cover: 'https://cdn.byai.com/static/official-website/product/aicc/figure/1.png',
  },
  {
    title: '自定义拨打设置',
    desc: '可自主设置拨打时段、频率，自动重拨的通话状态、重拨次数、频率等',
    cover: 'https://cdn.byai.com/static/official-website/product/aicc/figure/2.png',
  },
  {
    title: '自定义客户标签',
    desc: '根据业务自定义设置客户标签，通话中自动生成客户画像，支持自定义标签筛选客户',
    cover: 'https://cdn.byai.com/static/official-website/product/aicc/figure/3-1.png',
  },
  {
    title: '自定义数据管理',
    desc: 'AI外呼任务运行实时数据可视化，实时查询外呼进度、接通率、意向客户比率等',
    cover: 'https://cdn.byai.com/static/official-website/product/aicc/figure/4.png',
  },
];
const DemandItem = styled.div<{ active: boolean }>`
  padding: 30px 30px 35px;
  margin-bottom: 20px;
  position: relative;
  width: 280px;
  ${props =>
    !props.active &&
    css`
      padding: 1px 30px;
    `}
  &:last-child {
    margin-bottom: 0;
  }

  h3 {
    padding: 0;
    margin: 0;
    height: 55px;
    line-height: 55px;
    color: ${props => (props.active ? '#fff' : '#0D1924')};
    font-size: 22px;
    font-weight: 400;
  }
  p {
    position: relative;
    font-size: 16px;
    color: ${props => (props.active ? '#fff' : 'rgba(102, 102, 102, 1)')};
    line-height: 24px;
    transition: all 0.3s ease-in-out;
    opacity: ${props => (props.active ? 1 : 0)};
    max-height: ${props => (props.active ? '150px' : 0)};
    overflow: hidden;
    transition: max-height 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), opacity 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
    padding-top: 15px;
    margin-bottom: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    ${props =>
    !props.active &&
    css`
        padding-top: 0;
      `}
  }
  background-color: ${props => (props.active ? '#3153D4' : '#F8F9FB')};
`;

const ShowSet1 = [
  { title: '极速响应', desc: '反应速度快，不足1秒极速反馈，能体验与真人一样的聊天体验' },
  { title: '智能打断', desc: '自研VAD算法，机器人能够准确判断有效打断和无效打断，可以及时反应、响应突发询问 ' },
  { title: '性别识别', desc: '基于真实人声训练的性别识别模型，提供高达99%识别率的基于语音的性别识别能力' },
  { title: '一问多答', desc: '针对同一个问题，机器人可以根据不同的场景回答不同的话术，贴合场景，提升客户体验' },
  { title: '多轮会话', desc: '机器人支持带上下文的多轮会话，针对一个问题与客户进行多轮交流，完成信息详情获取和应答' },
  { title: '变量植入', desc: '机器人与客户对话时，可根据不同客户的信息讲不同的内容，实现千人千面的智能对话' },
  {
    title: '人机切换',
    desc: '机器人判断出意向客户后，立即切换到人工，第一时间抓住商机，支持切换前后配置统一音色，真正做到客户无感',
  },
  { title: '智能挂机', desc: '当机器人不需要再讲话时，支持在任意话术节点后设置挂机，贴近真人的交流体验' },
];
const ShowSet2 = [
  { title: '自动拨打', desc: '批量导入客户资料，无需手动拨号，系统自动拨打，省时省力' },
  { title: '多并发', desc: '预测式外呼，系统同时外呼电话数大于AI坐席数，减少坐席空闲时间，提高效率' },
  { title: '自动重拨', desc: '外呼时支持对占线、关机等未接通状态进行自动重拨，提高号码接通率' },
  { title: '精准过滤', desc: '黑名单分组管理，智能过滤非目标客群，减少骚扰，降低成本' },
  { title: '自动记录', desc: '基于深度学习记录，将收听到的内容全部录音记录，并精准转化成文字，方便查看' },
  { title: '智能分析', desc: '基于应用场景和知识图谱技术，后台自动客户分类，添加标签，锁定精准客户' },
  { title: '多端协同', desc: 'Web端+移动端协同，随时随地管理呼叫任务，大幅提升办公效率' },
  { title: '自动分配', desc: '意向客户自动推送微信，支持自动轮流分配到指定销售' },
];
const WindowCard = styled.div<{ cover: number }>`
  position: relative;
  width: 90%;
  margin: 0 auto 10px;
  background-color: #fff;
  background-image: url(${props => `//cdn.byai.com/static/official-website/product/aicc/dot_cover_${props.cover}.svg`});
  background-position: center center;
  background-size: cover;
  height: 260px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    margin: 0 auto 20px;
  }
  .title {
    font-size: 22px;
    width: 90px;
    text-align: center;
    padding-top: 50px;
    color: #3153d4;
    position: relative;
    margin-bottom: 30px;
    &:after {
      background-color: #3153d4;
      position: absolute;
      content: '';
      height: 1px;
      left: 35px;
      right: 35px;
      bottom: -15px;
    }
  }
  .desc {
    font-weight: 300;
    font-size: 16px;
    flex: 1;
    width: 210px;
  }

  ${media.phone`
  height: 200px;
  .title {
    padding-top: 30px;
    font-size: 16px;
    font-weight: 500;
    }
      .desc {
    font-weight: 400;
        font-size: 12px;
      }
      `}
`;
const ToneWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .title {
    width: 306px;
    height: 45px;
    font-size: 32px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 45px;
    background: rgba(49, 83, 212, 1);
    text-align: center;
  }
  img {
    margin: 30px 10px 50px;
    max-width: 95%;
  }
  @media (max-width: 768px) {
    .title {
      line-height: 40px;
      height: 40px;
      width: 200px;
      font-size: 16px;
    }
  }
`;
const AbilitySet1 = [
  {
    title: '主流程',
    svg: 'https://cdn.byai.com/static/official-website/product/aicc/ability/1.svg',
  },
  {
    title: '跳转分支',
    svg: 'https://cdn.byai.com/static/official-website/product/aicc/ability/2.svg',
  },
  {
    title: '知识库',
    svg: 'https://cdn.byai.com/static/official-website/product/aicc/ability/3.svg',
  },
  {
    title: '热词',
    svg: 'https://cdn.byai.com/static/official-website/product/aicc/ability/4.svg',
  },
  {
    title: '意向标签',
    svg: 'https://cdn.byai.com/static/official-website/product/aicc/ability/5.svg',
  },
  {
    title: '话术词典',
    svg: 'https://cdn.byai.com/static/official-website/product/aicc/ability/6.svg',
  },
];
const AbilitySet2 = [
  {
    title: '可视化建模',
    svg: 'https://cdn.byai.com/static/official-website/product/aicc/ability/7.svg',
  },
  {
    title: '智能语音质检',
    svg: 'https://cdn.byai.com/static/official-website/product/aicc/ability/8.svg',
  },
  {
    title: '深度学习',
    svg: 'https://cdn.byai.com/static/official-website/product/aicc/ability/9.svg',
  },
  {
    title: '智能IVR',
    svg: 'https://cdn.byai.com/static/official-website/product/aicc/ability/10.svg',
  },
  {
    title: '自定义声学模型',
    svg: 'https://cdn.byai.com/static/official-website/product/aicc/ability/11.svg',
  },
  {
    title: '多轮回话',
    svg: 'https://cdn.byai.com/static/official-website/product/aicc/ability/12.svg',
  },
];
const TradeMoreCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: rgba(13, 25, 36, 1);
  height: 50px;
  line-height: 22px;
  margin-top: 20px;
  a {
    color: #ffffff;
  }
  a:hover {
    color: #4078c0;
  }

  span {
    cursor: pointer;
  }
  .iconfont {
    display: inline-block;
    margin-left: 10px;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    color: #3153d4;
    .iconfont {
      font-size: 20px;
      transform: translateX(5px);
    }
  }
`;

const SERVICE_OPERATE = [
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/aicc/scene/1.png',
    title: '提醒催收',
  },
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/aicc/scene/2.png',
    title: '线索清洗',
  },
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/aicc/scene/3.png',
    title: '满意度回访',
  },
  {
    coverImage: 'https://cdn.byai.com/static/official-website/product/aicc/scene/4.png',
    title: '活动通知',
  },
];
const ShowCard = styled.div<{ cover: string }>`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  ${media.phone`
    height: 300px;
    margin-bottom: 10px;
    `}
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
    width: 94%;
    height: 100%;
  }
  .mask {
    position: absolute;
    background: linear-gradient(to bottom, rgba(49, 83, 212, 0.2), rgba(49, 83, 212, 0.9));
    width: 100%;
    height: 100%;
  }
  .cover {
    background-image: url(${props => props.cover});
    position: absolute;
    background-position: center;
    background-size: cover;
    transition: all 0.3s ease-in-out 0s;
    background-repeat: no-repeat;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .wrapper:hover .cover {
    transform: scale(1.06);
  }
  span {
    text-align: center;
    width: 140px;
    position: relative;
    margin-bottom: 54px;
    font-size: 26px;
    color: #ffffff;
    &:after {
      content: '';
      background-color: #fff;
      height: 2px;
      bottom: -12px;
      left: 55px;
      right: 55px;
      position: absolute;
    }
  }
  @media (max-width: 768px) {
    span {
      font-size: 16px;
    }
  }
`;
const BottomBanner = styled.div`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.byai.com/static/official-website/product/aicc/banner_1.png');
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h3 {
    font-weight: 500;
    color: #ffffff;
    font-size: 36px;
    letter-spacing: 10px;
  }

  ${media.phone`
    height: 180px;
  h3 {   
   margin-bottom: -20px;
    font-size: 20px;
  }
  `}
`;
const SVGCollect = styled.div`
  padding: 0;
  width: 100%;
  margin-bottom: 40px;
  .title {
    text-align: center;
    font-size: 26px;
    color: #0d1924;
    margin-bottom: 80px;
  }
  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
    img {
      width: 60px;
      height: 60px;
    }
  }

  @media (max-width: 768px) {
  }
  ${media.phone`
    box-shadow: 0 10px 60px 0px rgba(49,83,212,0.1);
    border-radius:11px;
    border: 0;
    margin: 0 auto;
   
    width: 90%;  
    padding: 0 10px;
      padding-bottom: 30px;
      margin-bottom: 20px;
    
    .title {
      padding-top: 50px;
      margin-bottom: 10px;
    }
  .wrapper {
      padding-bottom: 10px;
    img {
      margin-top: 30px;
      width: 30px;
      height: 30px;
    }
  }
    `}
`;
const BigTitleWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 50px;
  h1 {
    font-weight: 500;
    font-size: 36px;
    border: 0;
    color: rgba(13, 25, 36, 1);
  }
`;
const MobileTitle = styled.div`
  padding: 60px 0;
  h1 {
    font-size: 36px;
    font-weight: 400;
    margin: 0;
    line-height: 44px;
  }
`;
const AICC: React.FunctionComponent = props => {
  const [demandIndex, setDemandIndex] = React.useState(0);

  function handleDemandHover(index) {
    setDemandIndex(index);
  }
  const easyCol = [
    {
      icon: 'https://cdn.byai.com/node_front/1571801517120/%E6%99%BA%E8%83%BD%E5%91%BC%E5%8F%AB%E4%B8%AD%E5%BF%83.svg',
      desc: '智能外呼',
      title: '智能外呼',
      colDesc:
        '基于ASR、TTS、NLP技术、精准识别客户意图，打造真实的互动语音体验。自助式集成平台，结合智能大数据分析，帮助企业自动筛选并标记意向客户，实现高效率低成本转化，助力企业高效智能发展。',
      img: 'https://cdn.byai.com/node_front/1571816647510/%E6%99%BA%E8%83%BD%E5%A4%96%E5%91%BC.png',
      hoverIcon:
        'https://cdn.byai.com/node_front/1571920320431/%E6%99%BA%E8%83%BD%E5%91%BC%E5%8F%AB%E4%B8%AD%E5%BF%83-%E7%99%BD.svg',
    },
    {
      icon: 'https://cdn.byai.com/node_front/1571801555147/%E6%99%BA%E8%83%BD%E6%8E%A5%E5%BE%85.svg',
      desc: '智能接待',
      title: '智能接待',
      colDesc:
        '企业呼叫中心语音接待平台，帮助企业解答各类答疑及咨询服务，完成业务咨询、信息查询、业务办理等多种常见业务场景，实现高度智能的用户自助服务。',
      img: 'https://cdn.byai.com/node_front/1571816692868/%E6%99%BA%E8%83%BD%E6%8E%A5%E5%BE%85.png',
      hoverIcon: 'https://cdn.byai.com/node_front/1571920350993/%E6%99%BA%E8%83%BD%E6%8E%A5%E5%BE%85-%E7%99%BD.svg',
    },
    {
      icon: 'https://cdn.byai.com/node_front/1571801578580/%E5%9D%90%E5%B8%AD%E8%BE%85%E5%8A%A9.svg',
      desc: '坐席辅助',
      title: '坐席辅助',
      colDesc:
        '销售人员的辅助利器，内置26个行业知识图谱帮助客服人员第一时间获得相关业务信息提示，赋予企业更完善的客户交流能力，帮助提高客户交付价值和客户满意度。',
      img: 'https://cdn.byai.com/node_front/1571816721903/%E5%9D%90%E5%B8%AD%E8%BE%85%E5%8A%A9-1222.png',
      hoverIcon: 'https://cdn.byai.com/node_front/1571920373768/%E5%9D%90%E5%B8%AD%E8%BE%85%E5%8A%A9-%E7%99%BD.svg',
    },
    {
      icon: 'https://cdn.byai.com/node_front/1571801593116/%E6%99%BA%E8%83%BD%E8%B4%A8%E6%A3%80.svg',
      desc: '智能质检',
      title: '智能质检',
      colDesc:
        '支持多元化自定义质检规则，智能实时解析语音通话，帮助企业管理者挖掘对话中的服务问题与商机，告别抽样分析盲区，实现对客服工作的全量质检，充分把控客服通话质量，降低运营风险。',
      img: 'https://cdn.byai.com/node_front/1571816742606/%E6%99%BA%E8%83%BD%E8%B4%A8%E6%A3%80.png',
      hoverIcon: 'https://cdn.byai.com/node_front/1571920396352/%E6%99%BA%E8%83%BD%E8%B4%A8%E6%A3%80-%E7%99%BD.svg',
    },
    {
      icon: 'https://cdn.byai.com/node_front/1571801651574/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D.svg',
      desc: '智能在线客服',
      title: '智能在线客服',
      colDesc:
        '智能【文字+语音】在线客服平台，整合多渠道客服统一话术逻辑配置，实现标准化客户服务。提供标准API接口，可实现全渠道接入。',
      img: 'https://cdn.byai.com/node_front/1571917437880/%E6%99%BA%E8%83%BD%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D.png',
      hoverIcon: 'https://cdn.byai.com/node_front/1571920418830/%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D-%E7%99%BD.svg',
    },
  ];
  const system = [
    {
      btn: '智能外呼',
      img: 'https://cdn.byai.com/node_front/1571816647510/%E6%99%BA%E8%83%BD%E5%A4%96%E5%91%BC.png',
    },
    {
      btn: '智能接待',
      img: 'https://cdn.byai.com/node_front/1571816692868/%E6%99%BA%E8%83%BD%E6%8E%A5%E5%BE%85.png',
    },
    {
      btn: '坐席辅助',
      img: 'https://cdn.byai.com/node_front/1571816721903/%E5%9D%90%E5%B8%AD%E8%BE%85%E5%8A%A9-1222.png',
    },
    {
      btn: '智能质检',
      img: 'https://cdn.byai.com/node_front/1571816742606/%E6%99%BA%E8%83%BD%E8%B4%A8%E6%A3%80.png',
    },
    {
      btn: '智能在线客服',
      img: 'https://cdn.byai.com/node_front/1571917437880/%E6%99%BA%E8%83%BD%E5%9C%A8%E7%BA%BF%E5%AE%A2%E6%9C%8D.png',
    },
  ];
  return (
    <Layout>
      {(visible, setVisible) => (
        <Wrapper>
          <BannerImg
            title="云呼叫中心"
            desc="智能、高效、千人千面地语音互动，完成前期的线索挖掘及意向判断"
            desc2="入围工信部人工智能产业创新重点任务“揭榜”项目"
            text="立即体验"
            backgroundImage="https://cdn.byai.com/static/official-website/product/aicc/banner.svg"
            mobileBackgroundImage="https://cdn.byai.com/node_front/1572589860866/%E7%A7%BB%E5%8A%A8%E7%AB%AF-%E4%BA%A7%E5%93%81-%E6%99%BA%E8%83%BD%E8%81%94%E7%BB%9C%E4%B8%AD%E5%BF%83.png"
            onBtnClick={() => setVisible(true)}
          />
          <Visible md lg xl xxl xxxl>
            <Title
              title="人性化智能沟通，助力企业赢得每一位客户"
              desc="高效率转化，低成本管理，企业的智能营销专家（适用提醒、通知、回访、电销、催收等多种场景）"
            />
          </Visible>
          <Visible xs sm>
            <MobileTitle>
              <Row justify="center">
                <h1>人性化智能沟通</h1>
              </Row>
              <Row justify="center">
                <h1>助力企业赢得客户</h1>
              </Row>
            </MobileTitle>
          </Visible>
          <Container>
            <Row>
              <Col md={8} sm={24}>
                <DescCol>
                  <img src="https://cdn.byai.com/static/official-website/product/aicc/1.svg" alt="" />
                  <div className="h3">
                    <H3>语音识别</H3>
                    <H3>倾听客户的声音</H3>
                  </div>
                  <Desc>主动降噪、深度学习、模型优化</Desc>
                  <Desc>精准识别客户语音</Desc>
                  <div className="tip">更精准</div>
                </DescCol>
              </Col>
              <Col md={8} sm={24}>
                <DescCol>
                  <img src="https://cdn.byai.com/static/official-website/product/aicc/2.svg" alt="" />
                  <div className="h3">
                    <H3>语义理解</H3>
                    <H3>读懂客户的心声</H3>
                  </div>
                  <Desc>NLP、知识图谱、关键词强化</Desc>
                  <Desc>准确理解客户意图</Desc>
                  <div className="tip">更理解</div>
                </DescCol>
              </Col>
              <Col md={8} sm={24}>
                <DescCol>
                  <img src="https://cdn.byai.com/static/official-website/product/aicc/3.svg" alt="" />
                  <div className="h3">
                    <H3>语音合成</H3>
                    <H3>与客户语音互动</H3>
                  </div>
                  <Desc>真人配音、TTS音色、个性变量植入</Desc>
                  <Desc>千人千面的沟通</Desc>
                  <div className="tip">更真实</div>
                </DescCol>
              </Col>
            </Row>
            <Visible md lg xl xxl xxxl>
              <SmTip>行业知识图谱：26大行业知识积累</SmTip>
            </Visible>
          </Container>
          <EasyCol title="产品体系" easyCol={easyCol} onBtnClick={() => setVisible(true)} />
          <System title="产品体系" system={system} />
          <DataVisualWrapper odd>
            <div className="wrapper">
              <Visible xs sm>
                <h1>
                  更出色的智能表现
                  <br />
                  99%真人互动感
                </h1>
              </Visible>
              <Visible md lg xl xxl xxxl>
                <h1>更出色的智能表现，99%真人互动感</h1>
              </Visible>
              <Container>
                <Row justify="center" style={{ marginBottom: -15, marginLeft: 10, marginRight: 10 }}>
                  {ShowSet1.map(show => (
                    <Col md={6} sm={12} xs={12}>
                      <WindowCard cover={1}>
                        <span className="title">{show.title}</span>
                        <span className="desc">{show.desc}</span>
                      </WindowCard>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </DataVisualWrapper>
          <DataVisualWrapper>
            <div className="wrapper" style={{ paddingBottom: 0 }}>
              <Visible xs sm>
                <h1>
                  自定义设置
                  <br />
                  千人千面的智能沟通
                </h1>
              </Visible>
              <Visible md lg xl xxl xxxl>
                <h1>自定义设置，实现千人千面的智能沟通</h1>
              </Visible>
              <Visible md lg xl xxl xxxl>
                <Container>
                  <Container style={{ height: 450 }}>
                    <Row justify="between">
                      <Col lg={7}>
                        {SERVICE_DEMAND.map((item, index) => (
                          <DemandItem
                            key={index}
                            active={demandIndex === index}
                            onMouseEnter={() => {
                              handleDemandHover(index);
                            }}>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                          </DemandItem>
                        ))}
                      </Col>
                      <Col lg={17} align="start" style={{ marginTop: 0 }}>
                        <img className="demand-img" src={SERVICE_DEMAND[demandIndex].cover} alt="" />
                      </Col>
                    </Row>
                  </Container>
                </Container>
              </Visible>
              <Visible xs sm>
                {SERVICE_DEMAND.map(item => (
                  <ToneWrapper>
                    <div className="title">{item.title}</div>
                    <img src={item.cover} alt="" />
                  </ToneWrapper>
                ))}
              </Visible>
            </div>
            <Visible md lg xl xxl xxxl>
              <div style={{ height: 60 }} />
            </Visible>
          </DataVisualWrapper>
          <DataVisualWrapper odd>
            <div className="wrapper">
              <Visible xs sm>
                <h1>
                  全程自动化智能运行
                  <br />
                  更高的效率
                </h1>
              </Visible>
              <Visible md lg xl xxl xxxl>
                <h1>全程自动化智能运行，更高的效率</h1>
              </Visible>
              <Container>
                <Row justify="center" style={{ marginBottom: -15 }}>
                  {ShowSet2.map(show => (
                    <Col md={6} sm={12} xs={12}>
                      <WindowCard cover={2}>
                        <span className="title">{show.title}</span>
                        <span className="desc">{show.desc}</span>
                      </WindowCard>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </DataVisualWrapper>
          <DataVisualWrapper>
            <div className="wrapper" style={{ paddingBottom: 60 }}>
              <Visible xs sm>
                <h1>
                  简单易用的运营体系
                  <br />
                  零成本，快速接入
                </h1>
              </Visible>
              <Visible md lg xl xxl xxxl>
                <h1>简单易用的AI运营体系，零学习成本，快速接入</h1>
              </Visible>
              <Container>
                <SVGCollect>
                  <div className="title">数据驱动AI效能提升</div>
                  <Row justify="between">
                    {AbilitySet1.map(ability => (
                      <Col lg={4} sm={8} xs={8}>
                        <div className="wrapper">
                          <img src={ability.svg} alt="" />
                          <span>{ability.title}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </SVGCollect>
                <SVGCollect>
                  <div className="title">可视化AI构建工具</div>
                  <Row justify="between">
                    {AbilitySet2.map(ability => (
                      <Col lg={4} sm={8} xs={8}>
                        <div className="wrapper">
                          <img src={ability.svg} alt="" />
                          <span>{ability.title}</span>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </SVGCollect>
              </Container>
            </div>
          </DataVisualWrapper>
          <BottomBanner>
            <Row justify="center" align="center">
              <h3>智能内核·极致沟通</h3>
            </Row>
            <TradeMoreCol>
              <Link href="/solutions">
                <a>
                  <span>
                    点击了解百应机器人核心能力
                    <i className="iconfont iconchakangengduojiantou" />
                  </span>
                </a>
              </Link>
            </TradeMoreCol>
          </BottomBanner>
          <Intro bottom={-5}>
            <Row justify="center">
              <BigTitleWrapper>
                <h1>使用场景</h1>
              </BigTitleWrapper>
            </Row>
            <Container>
              <Row justify="center">
                {SERVICE_OPERATE.map((item, index) => (
                  <Col key={index} lg={6} md={12} sm={12} xs={12}>
                    <ShowCard cover={item.coverImage}>
                      <div className="wrapper">
                        <div className="cover" />
                        <div className="mask" />
                        <span>{item.title}</span>
                      </div>
                    </ShowCard>
                  </Col>
                ))}
              </Row>
            </Container>
          </Intro>
          <Row style={{ height: 80 }} justify="center">
            <TradeMoreCol>
              <Link href="/solutions">
                <a style={{ color: '#3153D4' }}>
                  <span>
                    更多场景，由你定义
                    <i className="iconfont iconchakangengduojiantou" />
                  </span>
                </a>
              </Link>
            </TradeMoreCol>
          </Row>
          <Visible md lg xl xxl xxxl>
            <div style={{ height: 30 }} />
          </Visible>
          <VoiceFooter
            title="百应服务，全心全意"
            mTitle1="百应服务，全心全意"
            btn="免费体验"
            img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
            onBtnClick={() => setVisible(true)}
          />
        </Wrapper>
      )}
    </Layout>
  );
};

export default AICC;
