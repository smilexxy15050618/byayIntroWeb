import * as React from 'react';
import { Layout } from '../../src/components/Layout';
import Banner from '../../src/components/open/banner';
import HoverChange from '../../src/components/open/hover-change';
import FourCol from '../../src/components/open/four-col';
import Partner from '../../src/components/open/partner';
import VoiceFooter from '../../src/components/voice/footer';
import ThreeColPlus from '../../src/components/voice/three-col-plus';
import Env from '../../src/components/voice/env';
import ThreeCol from '../../src/components/voice/three-col';

// const SOLUTION_BG = '//cdn.byai.com/static/official-website/solution/banner.png';
const BACKGOURND_XS =
  'https://cdn.byai.com/static/official-website/product/%E7%A7%BB%E5%8A%A8%E7%AB%AF-%E4%BA%A7%E5%93%81-%E5%BC%80%E6%94%BE%E5%B9%B3%E5%8F%B02.png';
const SOLUTION_BG = 'https://cdn.byai.com/node_front/1571811293418/banner.png';

const leftItem = ['线索清洗', '智能客服', '快速集成呼叫中心', '个性化定制'];

const rightItem = [
  {
    ftitle: '企业CRM接入AI能力，自动清洗线索，回传意向',
    stitle: '客户数据。加密接口保证安全，自动流转提高效率',
    label: ['数据安全', '流转高效', '无缝衔接', '全自动化'],
    img: 'https://cdn.byai.com/node_front/1571811567213/%E5%88%9D%E6%AD%A5%E6%B8%85%E6%B4%97.png',
  },
  {
    ftitle: '政企客服系统接入AI能力，机器人接听来电解答问题，',
    stitle: '支持即时转人工，减少等待时间，缓解客服工作压力',
    label: ['高效接待', '情绪平稳', '分流解压', '动态扩展'],
    img: 'https://cdn.byai.com/node_front/1571814255018/%E6%99%BA%E8%83%BD%E5%AE%A2%E6%9C%8D.svg',
  },
  {
    ftitle: '完整的场景化呼叫中心SDK，让企业1行代码',
    stitle: '即可接入呼叫能力，快速形成自有呼叫中心',
    label: ['稳定可靠', '降低成本', '简单易用', '告别繁琐'],
    img: 'https://cdn.byai.com/node_front/1571814422456/Mask.svg',
  },
  {
    ftitle: '企业场景定制开发，基于云通讯，语音交互，AI能',
    stitle: '力整合开发和集成',
    label: ['随用随取', '自由编排'],
    img: 'https://cdn.byai.com/node_front/1571814302933/%E4%B8%AA%E6%80%A7%E5%8C%96%E5%AE%9A%E5%88%B6.png',
  },
];
const ability = [
  {
    logo: 'https://cdn.byai.com/node_front/1571811375546/AI%E5%85%A8%E6%A0%88.svg',
    title: 'AI对话能力',
    desc: '提供ASR，NLP，TTS等基础能力，丰富企业产品的AI场景，让企业和开发者享受AI的乐趣',
  },
  {
    logo: 'https://cdn.byai.com/node_front/1571811436496/%E6%99%BA%E8%83%BD%E8%AF%AD%E9%9F%B3.svg',
    title: '智能语音交互能力',
    desc: '为企业和开发者提供完整的语音机器人功能，助力企业快速打造一套属于自己的语音交互应用',
  },
  {
    logo: 'https://cdn.byai.com/node_front/1571811461165/%E4%BA%91%E9%80%9A%E8%AE%AF.svg',
    title: '云通讯能力',
    desc: '通过云通讯，颠覆传统封闭、自开发、软硬一体的通信模式，为企业智能呼叫赋能',
  },
];

const abilityTwo = [
  {
    logo: 'https://cdn.byai.com/node_front/1571811686465/%E5%85%A8%E9%9D%A2%E5%BC%80%E6%94%BE.svg',
    title: '全面开放',
    desc: 'AI对话能力，智能语音交互能力，云通讯能力全面开放，API与SDK标准且丰富，为企业提供强大的AI底层平台',
  },
  {
    logo: 'https://cdn.byai.com/node_front/1571811702065/%E5%AE%89%E5%85%A8%E4%BE%BF%E6%8D%B7.svg',
    title: '安全便捷',
    desc: '在线接口调试，支持多种语言，便捷接入，OAuth 2.0授权，用户数据加密，安全可靠',
  },
  {
    logo: 'https://cdn.byai.com/node_front/1571811716531/%E4%BC%98%E8%B4%A8%E6%9C%8D%E5%8A%A1.svg',
    title: '优质服务',
    desc: '一对一咨询，7x24小时服务，随叫随到。标准化需求管理，高效定制，快速落地',
  },
  {
    logo: 'https://cdn.byai.com/node_front/1571811738309/%E7%A8%B3%E5%AE%9A%E5%8F%AF%E9%9D%A0.svg',
    title: '稳定可靠',
    desc: '日均百万级API调用次数，延迟低于100ms，系统稳定性99.99％',
  },
];

const partner = [
  'https://cdn.byai.com/node_front/1571811865505/360.png',
  'https://cdn.byai.com/node_front/1571811885849/%E5%BE%B7%E9%82%A6.png',
  'https://cdn.byai.com/node_front/1571811908016/%E5%BE%AE%E8%B4%B7.png',
  'https://cdn.byai.com/node_front/1571811938485/%E8%B4%A7%E6%8B%89%E6%8B%89.png',
  '//cdn.byai.com/static/official-website/company-logo/21shijibudongchan2.png',
  '//cdn.byai.com/static/official-website/company-logo/zhilianzhaopin2.png',
  'https://cdn.byai.com/node_front/1571811995308/%E4%BB%8A%E6%97%A5%E5%A4%B4%E6%9D%A1.png',
  '//cdn.byai.com/static/official-website/company-logo/qichezhijia2.png',
];

const colItem = [
  {
    img: 'https://cdn.byai.com/node_front/1571810256086/%E6%99%BA%E8%83%BD%E5%B7%A5%E4%BD%9C%E6%89%8B%E6%9C%BA.png',
    title: '智能工作手机',
    desc: '专为销售人员定制的手机，帮助企业管控销售过程，提升团队执行力，提高业绩；自动化收集客户跟进数据，加速企业数据沉淀；保证企业数据安全，规范员工行为。',
    link: 'https://www.byai.com/product/workPhone',
  },
  {
    img: 'https://cdn.byai.com/node_front/1571810273226/%E6%99%BA%E8%83%BD%E5%91%BC%E5%8F%AB%E4%B8%AD%E5%BF%83.png',
    title: '云呼叫中心',
    desc: '云呼叫中心，赋能电话呼叫业务，实现高效率低成本转化。该产品将实现人机协同工作，提供无缝切换的优质体验，并提供优质稳定的通话质量，为企业高效获客提供安全保障。',
    link: 'https://www.byai.com/product/aicc',
  },
  {
    img: 'https://cdn.byai.com/node_front/1571810079211/%E4%BD%8D%E5%9B%BE.png',
    title: '香蕉来电',
    desc: '香蕉来电是新一代智能来电接听小助手。在您不想、不能、不方便接听来电的时候，帮接听。从此接电话再也不用焦虑～',
    link: 'https://banana.byai.com/',
  },
];

const envItem = [
  {
    title1: '线索清洗',
    title2: '',
    img: 'https://cdn.byai.com/node_front/1571811567213/%E5%88%9D%E6%AD%A5%E6%B8%85%E6%B4%97.png',
  },
  {
    title1: '智能客服',
    title2: '',
    img: 'https://cdn.byai.com/node_front/1571814255018/%E6%99%BA%E8%83%BD%E5%AE%A2%E6%9C%8D.svg',
  },
  {
    title1: '快速集成呼叫中心',
    title2: '',
    img: 'https://cdn.byai.com/node_front/1571814422456/Mask.svg',
  },
  {
    title1: '个性化定制',
    title2: '',
    img: 'https://cdn.byai.com/node_front/1571814302933/%E4%B8%AA%E6%80%A7%E5%8C%96%E5%AE%9A%E5%88%B6.png',
  },
];

const Open = () => {
  return (
    <Layout>
      {(visible, setVisible) => (
        <>
          <Banner
            mobileBackgroundImage={BACKGOURND_XS}
            backgroundImage={SOLUTION_BG}
            text="免费体验"
            api="技术文档"
            title="百应开放平台"
            desc={<>AI对话能力 · 智能语音交互能力 · 云通讯能力</>}
            onBtnClick1={() => setVisible(true)}
            onBtnClick2={() => window.open('https://open.byai.com/document/quick_to_door')}
          />
          <ThreeCol title="功能介绍" ability={ability} bgc={'#fff'} />
          <HoverChange title="应用场景" leftItem={leftItem} rightItem={rightItem} />
          <Env title="应用场景" envItem={envItem} />
          <FourCol title="特色优势" ability={abilityTwo} />
          <Partner title="合作案例" partner={partner} />
          <VoiceFooter
            title="开启人机交互新体验"
            btn="免费体验"
            img={'https://cdn.byai.com/node_front/1571802269271/bg1%402x.png'}
            onBtnClick={() => setVisible(true)}
          />
          <ThreeColPlus title="相关推荐" colItem={colItem} />
        </>
      )}
    </Layout>
  );
};

export default Open;
