import { VFC } from 'react';
import { retailUrl } from '../../../lib/utils';
import { CaseList } from '../customer-case/case-list';
import * as SC from './styled';
// TODO:content可以抽出来
export const caseDataInfoList = [
  {
    path: retailUrl('/case/afu'),
    title: ['国内精油美妆TOP品牌', '携手百应实现“数智营销”'],
    imageSrc: 'https://cdn.byai.com/static/intro/img/retail/customer-case/%E6%A1%88%E4%BE%8B4.png',
    label: '阿芙精油',
    content: (
      <div>
        <div className="view-description">
          百应科技与阿芙精油达成深度合作，通过对存量客户通过AI进行规模化私域落粉，实现了高效低成本的拉新和高效高标准的转化，转化率超预期5-10个点。
        </div>
        <div className="view-detail" onClick={e => e.stopPropagation()}>
          <a href={retailUrl('/case/afu')}>查看详情 &gt;</a>
        </div>
      </div>
    ),
  },
  {
    path: retailUrl('/case/toptoy'),
    title: ['高速增长的潮玩界“黑马”', '携手百应实现公域+私域双增长'],
    imageSrc: 'https://cdn.byai.com/static/intro/img/retail/customer-case/%E6%A1%88%E4%BE%8B2.png',
    label: 'TOP TOY',
    content: (
      <div>
        <div className="view-description">
          百应科技与TOPTOY达成深度合作，通过周年庆、行业节日等AI活动通知，触达用户达20w，ROI达到9-21。
        </div>
        <div className="view-detail" onClick={e => e.stopPropagation()}>
          <a href={retailUrl('/case/toptoy')}>查看详情 &gt;</a>
        </div>
      </div>
    ),
  },
  {
    path: retailUrl('/case/kub'),
    title: ['全球母婴优标准创领者', '携手百应为私域精细化运营助力'],
    imageSrc: 'https://cdn.byai.com/static/intro/img/retail/customer-case/%E6%A1%88%E4%BE%8B3.png',
    label: '可优比',
    content: (
      <div>
        <div className="view-description">
          百应科技与可优比达成深度合作，通过AI针对A/B不同意向客户，进行主被动不同的加粉链路，降低企业加粉承接压力，提升客户数据安全度，月均新增私域用户涨幅300%。
        </div>
        <div className="view-detail" onClick={e => e.stopPropagation()}>
          <a href={retailUrl('/case/kub')}>查看详情 &gt;</a>
        </div>
      </div>
    ),
  },
  {
    path: retailUrl('/case/KUKA'),
    title: ['享誉全球的家居品牌', '携手百应用“AI”实现数智化服务体验'],
    imageSrc: 'https://cdn.byai.com/static/intro/img/retail/customer-case/%E9%A1%BE%E5%AE%B6pc-%E6%80%BB%E9%A1%B5.png',
    label: '顾家家居',
    content: (
      <div>
        <div className="view-description">
          顾家家居是全球知名的家居上市企业，杭州2022年第19届亚运会官方床垫独家供应商，以“家”为原点，致力于为全球家庭提供健康、舒适、环保的家居解决方案。
        </div>
        <div className="view-detail" onClick={e => e.stopPropagation()}>
          <a href={retailUrl('/case/KUKA')}>查看详情 &gt;</a>
        </div>
      </div>
    ),
  },
  {
    path: retailUrl('/case/zhg'),
    title: ['自热速食独角兽品牌', '携手百应用数智化为消费升级加码'],
    imageSrc: 'https://cdn.byai.com/static/intro/img/retail/customer-case/%E6%A1%88%E4%BE%8B5.png',
    label: '自嗨锅品牌',
    content: (
      <div>
        <div className="view-description">
          百应科技与自嗨锅达成深度合作，通过A/Btest打造转化率最高话术模型通过了解品牌价值定位，人群画像；根据百应行业案例知识库，进行利益点匹配，接通下单人数达到10%+。
        </div>
        <div className="view-detail" onClick={e => e.stopPropagation()}>
          <a href={retailUrl('/case/zhg')}>查看详情 &gt;</a>
        </div>
      </div>
    ),
  },
  {
    path: retailUrl('/case/jissbon'),
    title: ['致力成为两性健康领域领导者', '携手百应用数智化为客户带来更好生活'],
    imageSrc: 'https://cdn.byai.com/static/intro/img/retail/customer-case/%E6%A1%88%E4%BE%8B6.png',
    label: '杰士邦',
    content: (
      <div>
        <div className="view-description">
          百应科技与杰士邦达成深度合作，通过AI分层运营对存量客户进行活动唤醒，提高客户忠诚度及品牌认知，用户意向度30%-45%。
        </div>
        <div className="view-detail" onClick={e => e.stopPropagation()}>
          <a href={retailUrl('/case/jissbon')}>查看详情 &gt;</a>
        </div>
      </div>
    ),
  },
];
const Cases: VFC = () => {
  return (
    <SC.CasesWrapper>
      <div className="description">数千家头部零售品牌牵手百应科技</div>
      <CaseList
        commonCaseInfo={{
          labelColor: {
            bgColor: '#FFFFFF',
            color: 'rgba(43, 43, 43, 0.85)',
          },
        }}
        caseInfoList={caseDataInfoList}
      />
    </SC.CasesWrapper>
  );
};

export default Cases;
