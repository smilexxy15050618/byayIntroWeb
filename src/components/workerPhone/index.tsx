import { FOOTER_BG } from '../../constants/img-urls';
import Banner from '../common/Banner';
import ByDesc from '../common/ByDesc';
import ByVoiceFooter from '../common/ByVoiceFooter';
import { Layout } from '../Layout';
import { IReasonCardProps } from '../partner/ReasonCard';
import { RingImgComp } from '../RingImgComp';
import { FormType } from '../TryForm';
import IndustryCase, { IndustryItem } from '../voice-robot/IndustryCase';
import { Wrapper } from '../voice-robot/style';
import { RawFeatures } from './Features';

const BANNER_BG = '//cdn.byai.com/static/intro/img/workphone/%E7%BC%96%E7%BB%84%204.png';
const MOBILE_BANNER = 'https://cdn.byai.com/static/intro/img/workphone/banner%E9%85%8D%E5%9B%BE.png';
const MOBILE_BANNER_BG = '//cdn.byai.com/static/intro/img/workphone/banner-mobile%E5%BA%95.png';

const cardStyle = { width: '290px', height: '160px' };
const mobileStyle = { height: '142px', overflow: 'hidden', whiteSpace: 'nowrap' as const };
const painList = [
  {
    title: '客户资源流失风险',
    desc: (
      <>
        员工私下接活
        <br />
        离职带走客户
      </>
    ),
    style: { marginBottom: 88, borderRadius: '8px', ...cardStyle },
  },
  {
    title: '客户沟通内容不可控',
    desc: (
      <>
        聊天内容无法管理
        <br />
        索要返点回扣行为
      </>
    ),
    style: { borderRadius: '8px', ...cardStyle },
  },
  {
    title: '频繁外出却不成单',
    desc: (
      <>
        外勤工作无法监管
        <br />
        查岗影响客户体验
      </>
    ),
    style: { margin: '0 0 88px auto', borderRadius: '8px', ...cardStyle },
  },
  {
    title: '绩效考核不准确',
    desc: (
      <>
        工作无法标准量化
        <br />
        任务追踪繁琐困难
      </>
    ),
    style: { margin: '0 0 0 auto', borderRadius: '8px', ...cardStyle },
  },
];
const pcImgs = [
  {
    src: 'https://cdn.byai.com/static/intro/img/workphone/%E7%BC%96%E7%BB%84%206%E5%A4%87%E4%BB%BD.png',
    className: [],
    style: { width: '658px', left: '20px' },
  },
  {
    src: 'https://cdn.byai.com/static/intro/img/workphone/%E7%BC%96%E7%BB%84%2014.png',
    className: ['animate__fadeInRight'],
    style: { width: '253px', left: '272px', top: '232px' },
  },
  {
    src: 'https://cdn.byai.com/static/intro/img/workphone/%E7%BC%96%E7%BB%84%2095.png',
    className: ['animate__fadeInRight'],
    style: { width: '141px', top: '72px', left: '400px' },
  },
  {
    src: 'https://cdn.byai.com/static/intro/img/workphone/%E7%BC%96%E7%BB%84%2013.png',
    className: ['animate__fadeInLeft'],
    style: { width: '142px', top: '127px', left: '133px' },
  },
];

const CASE_INFOS = [
  {
    title: '科学监管工作全流程，帮助企业降本增效',
    img: `//cdn.byai.com/static/intro/img/workphone/%E5%B7%A5%E4%BD%9C%E6%89%8B%E6%9C%BApc%E5%9B%BE.png`,
    imgXs: `//cdn.byai.com/static/intro/img/workphone/%E5%B7%A5%E4%BD%9C%E6%89%8B%E6%9C%BA%E7%A7%BB%E5%8A%A8%E5%9B%BE.png`,
    content: [
      {
        subTitle: '客户概况',
        desc: '易鑫集团成立于2014年8月，并于2017年上市，是国内专业的汽车金融交易平台，人员规模超1000+，以“汽车融资租赁+催收”为主要经营模式，截至2019年12月31日止全年，促成的总交易金额同比增长5%至400亿元人民币。',
      },
      {
        subTitle: '项目背景',
        desc: (
          <>
            <IndustryItem
              title="• 销售过程管控"
              desc="目前获客成本很高，前端营销部门在拓客环节存在飞单行为，造成客户资源流失，因此需要洞察销售过程，防止客户资源流失浪费。"
            />
            <IndustryItem
              title="• 合规监管"
              desc="受政策要求，需要全方位监控员工在催收过程中的合规性，防止出现暴力催收现象，同时通过可量化数据，考核其工作过程指标。"
            />
            <IndustryItem
              title="• 服务质量考核"
              desc="客服在回访客户的过程中，需要通过智能质检能功能进行服务质量评定，同时考核其工作任务的完成度和客户满意度。"
            />
            <IndustryItem
              title="• 数据安全保障"
              desc="因业务特殊性，对于数据安全性有极高的要求，需要配合客户进行私有化部署，将数据存储在本地服务器。"
            />
          </>
        ),
      },
      {
        subTitle: '业务价值',
        desc: (
          <>
            <IndustryItem
              title="• 合规的产品"
              desc="百应产品由百应价值观引导，不做破解微信等违规操作（违规操作会导致客户微信大面积封号），客户非常重视产品的合规性及稳定性，以期开展长期战略性合作。"
            />
            <IndustryItem
              title="• 稳定的系统"
              desc="百应产品规划有完整的架构，产品矩阵完备，产品规划完善，各产品间切分明确，联结点明晰，私有化部署系统运行稳定，工作手机涉及大量一线员工的使用，故需有稳定的系统支持。"
            />
            <IndustryItem
              title="• 完备的功能"
              desc="百应工作手机不仅仅止步在于信息留痕，且有完备的信息汇总处理，大大提升管理效率。"
            />
          </>
        ),
      },
    ],
  },
];

const painSrc = '//cdn.byai.com/static/intro/img/workphone/%E4%BC%81%E4%B8%9A%E7%97%9B%E7%82%B9.png';
const mobilePainSrc = 'https://cdn.byai.com/static/intro/img/workphone/%E4%BC%81%E4%B8%9A%E7%97%9B%E7%82%B9-mobile.png';
const WorkPhone = () => {
  const processMobilePainList = (list: IReasonCardProps[]) =>
    list.map(it => {
      return {
        ...it,
        title: it.title === '客户沟通内容不可控' ? '沟通内容不可控' : it.title,
        style: { ...mobileStyle, margin: 0 },
      };
    });

  return (
    <Layout headPlaceholder={['#2B58F9', '#2B58F9']} headFontStyle={['light', 'light']}>
      {(visible, setFormVisible) => (
        <Wrapper>
          <Banner
            title="智能工作手机"
            subTitle="工作全流程智能化管控"
            desc="伴随业务全程开展行为数据采集沉淀，实现智能监管及风控预警，已广泛应用于销售流程管理、金融贷后催收等场景。"
            btnText="免费体验"
            pcImgs={pcImgs}
            minWidthPC="1075px"
            mobileImg={MOBILE_BANNER}
            background={[
              `url(${BANNER_BG}) no-repeat center left/cover,#2B58F9`,
              `url(${MOBILE_BANNER_BG}) no-repeat top right/cover,#2B58F9`,
            ]}
            onClick={() => {
              setFormVisible(true, FormType.CUSTOMER);
            }}
          />
          <ByDesc title="企业痛点" needDecoration={false} padding={['100px 20px', '40px 20px 16px']} />
          <RingImgComp
            list={painList}
            img={{
              src: painSrc,
              mobileSrc: mobilePainSrc,
              mobileStyle: { marginBottom: 0, width: '100vw', height: 'auto' },
              pcStyle: { margin: '0 auto' },
            }}
            processMobileList={processMobilePainList}
          />
          <RawFeatures />
          <IndustryCase caseInfos={CASE_INFOS} bgColor="rgba(43, 88, 249, 0.04)" />
          <ByVoiceFooter
            title="点击开启「AI数字员工」崭新之旅"
            desc="留下联系方式，将有AI行业专家为您提供专属服务"
            btnText="与我联系"
            background={`url(${FOOTER_BG})`}
            onClick={() => {
              setFormVisible(true, FormType.CUSTOMER);
            }}
          />
        </Wrapper>
      )}
    </Layout>
  );
};

export { WorkPhone };
