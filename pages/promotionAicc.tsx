import React from 'react';
import { Layout } from '../src/components/Layout';
import { Wrapper } from '../src/components/product';
import ThreeCol from '../src/components/voice/three-col';
import Method from '../src/components/aicc/method';
import Partner from '../src/components/aicc/partner';
import FourColM from '../src/components/aicc/four-col-m';
import VoiceFooter from '../src/components/aicc/footer';
import { FirstBanner } from '../src/components/aicc/firstBanner';

const ability = [
  {
    logo: 'https://cdn.byai.com/node_front/1572503221523/%E6%99%BA%E8%83%BD%E5%8C%96%E6%9C%8D%E5%8A%A1.svg',
    title: '便捷的智能化服务',
    desc: '即开即用，设置灵活，全国号码自由选择。拨打接听电话便捷、智能AI辅助人工沟通，通话清晰稳定，为用户提供优质的通话体验',
  },
  {
    logo: 'https://cdn.byai.com/node_front/1572503294866/%E8%90%A5%E9%94%80%E8%BD%AC%E5%8C%96.svg',
    title: '高效率的营销转化',
    desc: '批量导入拨打名单，自动分配客户。一键外呼，精准营销。高效拨打，快速接通，有效触达客户。赋能企业营销转化',
  },
  {
    logo: 'https://cdn.byai.com/node_front/1572503320443/%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90.svg',
    title: '数据分析',
    desc: '可视化图表呈现数据走势，团队数据对比分析。通话数据多维展示，俯瞰团队工作饱和度，纵览客户接受率。直击管理薄弱环节，提升协同工作效率',
  },
];
const descLeft = [
  {
    icon: 'https://cdn.byai.com/node_front/1572503344388/AI%E8%BE%85%E5%8A%A9.svg',
    title: 'AI辅助',
    info: 'AI机器人如影随形，实时协助人工坐席。标准的提示，专业的沟通，带给客户顾问级的营销体验，提升团队整体战斗力',
  },
  {
    icon: 'https://cdn.byai.com/node_front/1572503369253/%E9%A2%84%E6%B5%8B%E5%BC%8F%E5%A4%96%E5%91%BC.svg',
    title: '预测式外呼',
    info: '自学习算法精准预测团队资源空闲量与呼叫接通率，提供井然有序的呼叫分配，资源利用最大化，呼损最小化',
  },
];
const methodImg = 'https://cdn.byai.com/node_front/1571799879343/%E8%AF%AD%E9%9F%B3.png';
const descRight = [
  {
    icon: 'https://cdn.byai.com/node_front/1572503391569/%E5%BF%AB%E9%80%9F%E9%83%A8%E7%BD%B2.svg',
    title: '快速部署',
    info: '账号即开，坐席即用。支持横向无限扩容，无惧业务峰值。低成本，高效率，营造专注的工作氛围',
  },
  {
    icon: 'https://cdn.byai.com/node_front/1572503420538/%E8%AF%9D%E5%8A%A1%E7%AE%A1%E6%8E%A7.svg',
    title: '话务管控',
    info: '实时监控团队工作状态，随时监听团队成员通话质量，强插通话斧正偏差。一站式操作，多样化管理',
  },
];
const partner = [
  'https://cdn.byai.com/node_front/1572610685731/%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8.png',
  'https://cdn.byai.com/node_front/1572610710237/%E4%B8%AD%E5%9B%BD%E8%81%94%E9%80%9A.png',
  'https://cdn.byai.com/node_front/1572610728974/%E4%B8%AD%E5%9B%BD%E7%94%B5%E4%BF%A1.png',
  'https://cdn.byai.com/node_front/1571811865505/360.png',
  'https://cdn.byai.com/node_front/1572610779650/%E9%98%BF%E9%87%8C%E5%B7%B4%E5%B7%B4.png',
  'https://cdn.byai.com/node_front/1572610794829/%E8%85%BE%E8%AE%AF.png',
  'https://cdn.byai.com/node_front/1575273096165/%E5%8C%97%E4%BA%AC%E7%A4%BE%E4%BF%9D%E5%B1%80.png',
  'https://cdn.byai.com/node_front/1572610833802/%E5%9B%BD%E5%AE%B6%E7%94%B5%E7%BD%91.png',
  ,
  'https://cdn.byai.com/node_front/1572610848839/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E6%B0%91%E6%B3%95%E9%99%A2.png',
  'https://cdn.byai.com/node_front/1572610872751/%E4%B8%AD%E5%9B%BD%E7%A4%BE%E4%BC%9A%E4%BF%9D%E9%99%A9.png',
  'https://cdn.byai.com/static/intro/img/part/58tongcheng.png',
  'https://cdn.byai.com/node_front/1572611056312/%E5%B9%B3%E5%AE%89%E9%93%B6%E8%A1%8C.png',
  'https://cdn.byai.com/node_front/1572611090842/%E4%B8%AD%E5%9B%BD%E9%93%B6%E8%A1%8C.png',
  'https://cdn.byai.com/node_front/1572611108617/%E4%B8%AD%E5%9B%BD%E4%BA%BA%E5%AF%BF.png',
  'https://cdn.byai.com/node_front/1572611126075/%E6%99%BA%E8%81%94%E6%8B%9B%E8%81%98.png',
  'https://cdn.byai.com/node_front/1572611142485/%E5%AD%A6%E8%80%8C%E6%80%9D.png',
  'https://cdn.byai.com/node_front/1572611158756/%E6%96%B0%E4%B8%9C%E6%96%B9.png',
  'https://cdn.byai.com/node_front/1572611174619/%E5%A4%A7%E6%90%9C%E8%BD%A6.png',
  'https://cdn.byai.com/node_front/1572611196495/%E6%B1%BD%E8%BD%A6%E4%B9%8B%E5%AE%B6.png',
  'https://cdn.byai.com/node_front/1572611213607/%E4%BB%8A%E6%97%A5%E5%A4%B4%E6%9D%A1.png',
];
const manage = [
  {
    img: 'https://cdn.byai.com/node_front/1572503635803/kehuguanli.png',
    title: '智能销售',
    desc: '公海私海管控客户归属与质量，批量分配与主动领取双重模式，意向等级便捷维护，全方位管理客户',
  },
  {
    img: 'https://cdn.byai.com/node_front/1572503675900/renwuguanli.png',
    title: '任务管理',
    desc: '预测式批量外呼，自定义外呼时间，自动分配客户，自动重拨，天盾拦截、AI辅助、强提醒话后处理。丰富实用的管理功能，精准高效的营销手段',
  },
  {
    img: 'https://cdn.byai.com/node_front/1572503696424/xiaoshouguanli.png',
    title: '资源管理',
    desc: '多级账号权限体系，自定义角色，自上而下分配客户、线路资源，提高资源利用率，规避资源瓶颈',
  },
  {
    img: 'https://cdn.byai.com/node_front/1572503709517/ziyuanguanli.png',
    title: '销售管理',
    desc: '递进式客户跟进阶段，漏斗式客户管理，灵活的通话备注，全面的团队报表，量化销售过程，激励团队斗志',
  },
];
const Aicc = () => {
  return (
    <Layout>
      {(visible, setVisible) => (
        <Wrapper>
          <FirstBanner onBtnClick={() => setVisible(true)} />
          <ThreeCol title="功能介绍" ability={ability} bgc={'#fff'} />
          <Method title="四大优势" descLeft={descLeft} descRight={descRight} img={methodImg} />
          <FourColM title="高效赋能销售团队——提高成单转化率" mtitle="高效赋能销售团队" manage={manage} />
          <Partner title="42000+企业/机构的共同选择" partner={partner} />
          <VoiceFooter
            title="和42000+顶级企业一起，探索大数据+AI智能的运营与销售"
            btn="免费体验"
            mTitle1="立即领取免费体验机会"
            mTitle2=""
            img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
            onBtnClick={() => setVisible(true)}
          />
        </Wrapper>
      )}
    </Layout>
  );
};

export default Aicc;
