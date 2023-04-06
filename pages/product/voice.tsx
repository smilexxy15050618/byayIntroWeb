import * as React from 'react';
import { Layout } from '../../src/components/Layout';
import Banner from '../../src/components/voice/banner';
import Method from '../../src/components/voice/method';
import HoverChange from '../../src/components/voice/hover-change';
import ThreeCol from '../../src/components/voice/three-col';
import EasyCol from '../../src/components/voice/easy-col';
import Partner from '../../src/components/voice/partner';
import VoiceFooter from '../../src/components/voice/footer';
import ThreeColPlus from '../../src/components/voice/three-col-plus';
import Env from '../../src/components/voice/env';

// const SOLUTION_BG = '//cdn.byai.com/static/official-website/solution/banner.png';
const BACKGOURND_XS =
  'https://cdn.byai.com/node_front/1572244570549/%E7%A7%BB%E5%8A%A8%E7%AB%AF-%E4%BA%A7%E5%93%81-%E8%AF%AD%E9%9F%B3%E8%87%AA%E8%AE%AD%E7%BB%83%E5%B9%B3%E5%8F%B0.png';
const SOLUTION_BG =
  'https://cdn.byai.com/node_front/1571799311595/%E8%AF%AD%E9%9F%B3%E8%87%AA%E8%AE%AD%E7%BB%83%E5%B9%B3%E5%8F%B0.svg';
const methodImg = 'https://cdn.byai.com/node_front/1571799879343/%E8%AF%AD%E9%9F%B3.png';

const descLeft = [
  {
    icon: 'https://cdn.byai.com/node_front/1571800750163/%E8%AE%AD%E7%BB%83%E6%A8%A1%E5%9E%8B.svg',
    title: '深度训练模型',
    info: '提供业务场景相关文本，即可训练语言模型，支持长文本训练方式',
  },
  {
    icon: 'https://cdn.byai.com/node_front/1571800797163/%E8%BF%AD%E4%BB%A3.svg',
    title: '支持迭代，持续优化',
    info: '可多次提供文本进行训练，持续优化语音识别准确率，使人工智能无限接近完美',
  },
];

const descRight = [
  {
    icon: 'https://cdn.byai.com/node_front/1571800818305/%E9%9F%B3%E8%89%B2%E5%AE%9A%E5%88%B6.svg',
    title: '音色定制',
    info: '跟据场景特点，定制专用合成音色，或甜美可人，或浑厚儒雅，或强势专业。没有最好，只有最合适',
  },
  {
    icon: 'https://cdn.byai.com/node_front/1571800860217/%E4%B8%93%E5%B1%9E.svg',
    title: '快速上线，专属使用',
    info: '快速高效完成模型训练，上线后专属使用，为每个企业打造其精准且独有的语言模型',
  },
];

const leftItem = ['政策咨询', '医疗回访'];

const rightItem = [
  {
    ftitle: '针对某类政策咨询接待服务，训练其场景语言模',
    stitle: '型，精准识别政策术语，提升服务质量',
    label: ['专业精准', '服务亲民'],
    img: 'https://cdn.byai.com/node_front/1571801005468/%E6%94%BF%E7%AD%96%E5%92%A8%E8%AF%A2.svg',
  },
  {
    ftitle: '患者关怀场景，定制专属音色，对就医或体检者进',
    stitle: '行医嘱回访，轻缓平静的音色，近人又不失专业',
    label: ['音色平和', '语气诚恳'],
    img: 'https://cdn.byai.com/node_front/1571813069327/%E5%8C%BB%E7%96%97%E5%9B%9E%E8%AE%BF.svg',
  },
];
const ability = [
  {
    logo: 'https://cdn.byai.com/node_front/1571801288004/%E6%98%93%E7%94%A8.svg',
    title: '易用',
    desc: '自训练平台提供了自助语音优化方案，极大地降低了语音智能优化所需要的门云，使用方无需技术人员介入即可提高自身业务识别准确率，打造专属模型',
  },
  {
    logo: 'https://cdn.byai.com/node_front/1571801372974/%E5%BF%AB%E9%80%9F.svg',
    title: '快速',
    desc: '自训练平台能够在半小时之内完成业务专属定制模型的优化测试上线，更能支持业务热词的实时优化，相较传统定制化优化长达数月的交付周期，有了质的飞跃',
  },
  {
    logo: 'https://cdn.byai.com/node_front/1571812900353/%E5%87%86%E7%A1%AE.svg',
    title: '准确',
    desc: '自训练平台优化效果在众多行业中得到了充分的应用与验证，准确率得到显着提升，加之机器自学习的持续迭代，准确率仍在平稳上升',
  },
];

const partner = [
  'https://cdn.byai.com/node_front/1571802006203/%E6%A1%88%E4%BE%8B1.png',
  'https://cdn.byai.com/node_front/1571802035296/%E6%A1%88%E4%BE%8B2.png',
  'https://cdn.byai.com/node_front/1571802067627/%E6%A1%88%E4%BE%8B3.png',
];

const colItem = [
  {
    img: 'https://cdn.byai.com/node_front/1571810256086/%E6%99%BA%E8%83%BD%E5%B7%A5%E4%BD%9C%E6%89%8B%E6%9C%BA.png',
    title: '智能工作手机',
    desc: '专为销售人员定制的手机，帮助企业管控销售过程，提升团队执行力，提高业绩；自动化收集客户跟进数据，加速企业数据沉淀；保证企业数据安全，规范员工行为。',
    link: '/product/workPhone',
  },
  {
    img: 'https://cdn.byai.com/node_front/1571810273226/%E6%99%BA%E8%83%BD%E5%91%BC%E5%8F%AB%E4%B8%AD%E5%BF%83.png',
    title: '云呼叫中心',
    desc: '云呼叫中心，赋能电话呼叫业务，实现高效率低成本转化。该产品将实现人机协同工作，提供无缝切换的优质体验，并提供优质稳定的通话质量，为企业高效获客提供安全保障。',
    link: '/product/aicc',
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
    title1: '精准识别政策术语',
    title2: '提升服务质量',
    img: 'https://cdn.byai.com/node_front/1571801005468/%E6%94%BF%E7%AD%96%E5%92%A8%E8%AF%A2.svg',
  },
  {
    title1: '患者关怀场景',
    title2: '定制专属音色，近人又不失专业',
    img: 'https://cdn.byai.com/node_front/1571813069327/%E5%8C%BB%E7%96%97%E5%9B%9E%E8%AE%BF.svg',
  },
];

const Voice = () => {
  return (
    <Layout>
      {(visible, setVisible) => (
        <>
          <Banner
            mobileBackgroundImage={BACKGOURND_XS}
            backgroundImage={SOLUTION_BG}
            text="免费体验"
            title="语音自训练平台"
            desc={
              <>
                使用业务场景语料，对语音技术进行深度定制，训练语言模型，
                <br />
                精准识别语音内容，有效提升特定业务领域识别准确率
              </>
            }
            onBtnClick={() => setVisible(true)}
          />
          <Method title="功能介绍" descLeft={descLeft} descRight={descRight} img={methodImg} />
          <HoverChange title="应用场景" leftItem={leftItem} rightItem={rightItem} />
          <Env title="应用场景" envItem={envItem} />
          <ThreeCol title="特色优势" ability={ability} />
          <Partner title="合作案例" partner={partner} />
          <VoiceFooter
            title="开启语音识别训练之路"
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

export default Voice;
