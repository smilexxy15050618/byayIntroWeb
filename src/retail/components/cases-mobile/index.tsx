import { VFC } from 'react';
import { retailUrl } from '../../../lib/utils';
import CaseListMobile from './components/case-list-mobile';
import * as SC from './styled';
const data = [
  {
    key: 'CaseListMobile4',
    topImg: 'https://cdn.byai.com/static/oss-script/4abcbd69d94f0f0bd99835b5136311f0.png',
    title: ['国内精油美妆TOP品牌', '携手百应实现“数智营销”'],
    subTitle: '百应 X 阿芙精油',
    desc: ' “百应AI私域加粉，目前是我们效果非常好的拉新方式，用高效率的数智化工具做运营和营销是大势所趋；而且百应的客户成功团队很专业，期待未来开拓更多、更深入的合作场景。”',
    clickUrl: `${retailUrl('/case/afu')}`,
  },
  {
    key: 'CaseListMobile2',
    topImg: 'https://cdn.byai.com/static/oss-script/c7001972fb3786c7b7f8671a8f2e12a6.png',
    title: ['高速增长的潮玩界“黑马”', '携手百应实现公域+私域双增长'],
    subTitle: '百应 ✕ TOP TOY',
    desc: '“与百应的合作中，我们每次的活动数据，都会有详细的分析报告，持续的迭代优化；效果和转化也超出预期，为语音机器人及百应专业的伙伴点赞。”',
    clickUrl: `${retailUrl('/case/toptoy')}`,
  },
  {
    key: 'CaseListMobile3',
    topImg: 'https://cdn.byai.com/static/oss-script/d40f95479f79a6c3f7afe24a3b4ab928.png',
    title: ['全球母婴优标准创领者', '携手百应为私域精细化运营助力'],
    subTitle: '百应 X 可优比',
    desc: '“和百应的合作中，我们发现AI外呼的四点优势：能实现快速触达和高效转化；综合成本相对较低；已具备真实交互感和温度感；可智能识别精准客户，减少不必要打扰。未来，会和百应共同把我们的私域做的更好。”',
    clickUrl: `${retailUrl('/case/kub')}`,
  },
  {
    key: 'CaseListMobile1',
    topImg:
      'https://cdn.byai.com/static/intro/img/retail/customer-case/%E8%AF%A6%E6%83%85%E9%A1%B5/%E9%A1%BE%E5%AE%B6%E7%A7%BB%E5%8A%A8-%E6%80%BB%E9%A1%B5.png',
    title: ['享誉全球的家居品牌', '携手百应用“AI”实现数智化服务体验'],
    subTitle: '百应 ✕ 顾家家居',
    desc: '“我们和百应合作很长时间了，整体的AI外呼效果很好，百应基于家居行业痛点构建的「AI智能售后系统」助力我们打造专业化、细分化、标准化的售后服务流程，为用户带来更便捷的消费体验。”',
    clickUrl: `${retailUrl('/case/KUKA')}`,
  },
  {
    key: 'CaseListMobile5',
    topImg: 'https://cdn.byai.com/static/oss-script/8d3e28e5bc61899ad5ad3ae51cef4f00.png',
    title: ['自热速食独角兽品牌', '携手百应用数智化为消费升级加码'],
    subTitle: '百应 X 自嗨锅品牌',
    desc: '“我们在自热速食方向跑出了一条属于自嗨锅品牌的独特道路，也是一家非常愿意尝试新方式的公司，百应作为我们的AI合作伙伴，通过人工智能技术手段，助力我们实现了客户经营的数智化升级，跑出来的结果也是超出了我们对AI的认知和预期，期待未来能够通过更深入的合作，达到更好的效果。”',
    clickUrl: `${retailUrl('/case/zhg')}`,
  },
  {
    key: 'CaseListMobile6',
    topImg: 'https://cdn.byai.com/static/oss-script/87e31190094a1420b54b909900b1797f.png',
    title: ['致力成为两性健康领域领导者', '携手百应用数智化为客户带来更好的生活'],
    subTitle: '百应 X 杰士邦',
    desc: '“百应提供的行业数智化解决方案，节省了我们的人力成本，提高我们和客户的沟通效率，让我们很直观的看到了AI工具的效果，后续准备加码做私域场景，为用户提供更好的健康服务。”',
    clickUrl: `${retailUrl('/case/jissbon')}`,
  },
];
const CasesMobile: VFC = () => {
  return (
    <SC.CasesMobileWrapper>
      <div className="description">数千家头部零售品牌牵手百应科技</div>
      <div className="card-list">
        {data.map(item => {
          return <CaseListMobile key={item.key} {...item} />;
        })}
      </div>
    </SC.CasesMobileWrapper>
  );
};

export default CasesMobile;
