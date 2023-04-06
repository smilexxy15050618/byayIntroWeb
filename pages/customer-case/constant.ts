import { LabelText } from '../../src/components/case-list/util';
import { ArrowStyle } from './index.d';

// 常量维护文件
export const carouselDataList = [
  {
    logoUrl: 'https://cdn.byai.com/static/intro/img/customer-case/xpjy.png',
    content:
      '“呼叫中心事关服务质量，同时这又是一个劳动密集型的业务部门。通过百应AI智能客服系统赋能，很大程度上提升了管理效率和服务质量，实实在在的降本增效，同时也推动了我们的数智化建设。”',
    personAvatarSrc: 'https://cdn.byai.com/static/intro/img/people/avatar1.png',
    personName: '赵江海',
    personDesc: '西培教育副总裁',
  },
  {
    logoUrl: 'https://cdn.byai.com/static/intro/img/customer-case/bksx.png',
    content:
      '“依托于百应服务云系列产品，和群众们可以远程语音、文字、图片、视频等多形式交流，“不见面”也能顺利开展业务办理，智能服务深入人心。这加强了政府服务力、公信力，同时大幅提升了群众满意度，百应让数智政务得到真正的落地实践。”',
    personAvatarSrc: 'https://cdn.byai.com/static/intro/img/people/avatar3.png',
    personName: '马骏',
    personDesc: '北控三兴运维总监',
  },
  {
    logoUrl: 'https://cdn.byai.com/static/intro/img/customer-case/hll.png',
    content:
      '“呼叫中心事关服务质量，同时这又是一个劳动密集型的业务部门。通过百应AI智能客服系统赋能，很大程度上提升了管理效率和服务质量，实实在在的降本增效，同时也推动了我们的数智化建设。”',
    personAvatarSrc: 'https://cdn.byai.com/static/intro/img/people/avatar2.png',
    personName: '刘文旭',
    personDesc: '货拉拉呼叫中心总负责人',
  },
];

/** 默认展示的列表大小为6 */
export const defaultCaseDataInfoListSize = 6;
export const caseDataInfoList = [
  {
    title: '杭银消金携手百应打造金融科技创新实践，助力客户体验升级',
    imageSrc: 'https://cdn.byai.com/static/intro/img/customer-case/case-banner/1.png',
    label: LabelText.finance,
    content:
      '依托百应营销机器人、客服机器人等AI数字员工，赋能信用卡办理、客服咨询等服务体验升级，构建了一体化的精准营销获客体系，全面提升贷后智能催收效率，为企业发展注入了强劲动力。',
  },
  {
    title: '存量时代的增长新机遇，环球优路教育如何“掘金”存量用户？',
    imageSrc: 'https://cdn.byai.com/static/intro/img/customer-case/case-banner/2.png',
    label: LabelText.education,
    content:
      '环球优路与百应携手合作，基于营销获客、课程推荐、课程咨询等不同场景，智能匹配AI外呼机器人，并围绕用户画像制定个性化的话术及营销策略，实现课程邀约成功率与触达效率的同步提升。',
  },
  {
    title: '杭州社保“易窗”加速浙江全省推广，百应提供技术支持',
    imageSrc: 'https://cdn.byai.com/static/intro/img/customer-case/case-banner/3.png',
    label: LabelText.affairs,
    content:
      '通过百应AI+政务智能解决方案，打造了一个独立的线上“枢纽”服务站，全时提供权威、精准、易懂的政策解读，实时精准指导群众网办流程，大幅缩短业务审批时限，迈入“一次不用跑”时代。',
  },
  {
    title: '汽车金融公司如何实现合规催收？用这三招轻松搞定',
    imageSrc: 'https://cdn.byai.com/static/intro/img/customer-case/case-banner/4.png',
    label: LabelText.finance,
    content:
      '某头部公司通过为催收人员标配一部百应工作手机，围绕电话录音、微信沟通等场景，实现拜访轨迹完整记录、沟通记录自动存档、敏感行为监控记录，完成催收业务的合规签约、合规处置、合规收款。',
  },
  {
    title: '试听引流、续课转化，海风教育如何实现营销效率5倍提升？',
    imageSrc: 'https://cdn.byai.com/static/intro/img/customer-case/case-banner/5.png',
    label: LabelText.education,
    content:
      '借助百应智能电销、客户管理等产品功能，构建学员精细化运营模式，快速圈选精准人群，智能分配销售执行。AI助力销售过程记录，推动线索精细化管理，实现用户规模的高速增长。',
  },
  {
    title: '科技为民，百应AI助力公安3天完成5万群众防诈骗安全教育',
    imageSrc: 'https://cdn.byai.com/static/intro/img/customer-case/case-banner/6.png',
    label: LabelText.affairs,
    content:
      '双方携手合作，以数字化宣传教育为切入点，融入“数字政府”大平台体系，借助人工智能、大数据等技术，开展全县范围内的“防诈骗”热线宣传教育，快速覆盖数十个派出所辖区，让信息高效触达民众。',
  },
  {
    title: '千人千面智能沟通，百应AI加速银行金融行业数智化转型',
    imageSrc: 'https://cdn.byai.com/static/intro/img/customer-case/case-banner/7.png',
    label: LabelText.finance,
    content:
      '打造一站式智能呼叫中心，从信用卡业务推荐、贷款类营销外呼、智能催收等多个场景切入，围绕各生命周期用户洞察分析，为每个阶段的客户匹配定制化的外呼策略，全面助力银行机构提效降本。',
  },
  {
    title: '智能电销触客效率升级，叮咚课堂邀约成功率持续提升',
    imageSrc: 'https://cdn.byai.com/static/intro/img/customer-case/case-banner/8.png',
    label: LabelText.education,
    content:
      '利用百应「智能电销」系统实现了批量任务外呼，拨号效率指数级提升，快速清晰百万级的存量客户线索，制定完整的线索培育策略；实现“AI智能外呼+人机无缝切换”服务体验，掌握有利跟单时机。',
  },
  {
    title: '人机协同完成快速邀约，教培机构电话邀约转化率翻倍提升',
    imageSrc: 'https://cdn.byai.com/static/intro/img/customer-case/case-banner/9.png',
    label: LabelText.education,
    content:
      '掌门一对一与百应携手合作，实现高并发低延迟智能外呼，提高意向筛查效率；通过AI人机协同模式，实现AI转人工无缝切换；客户意向自动打标，智能生成客户画像，助力客户精准营销。',
  },
  {
    title: '助力山西省某城商行解决催收合规难题，催收效率提升150%',
    imageSrc: 'https://cdn.byai.com/static/intro/img/customer-case/case-banner/10.png',
    label: LabelText.finance,
    content:
      '双方携手在数字化转型与金融科技实践方面积极探索。在贷后风险管理方面，依靠百应AI技术的应用，大幅扩充催收产能，以催回率为代表的数据指标持续上升，催收效率提升超150%。',
  },
  {
    title: '数智运营六步走，西培教育留学部3个月沉淀2万+精准客户',
    imageSrc: 'https://cdn.byai.com/static/intro/img/customer-case/case-banner/11.png',
    label: LabelText.education,
    content:
      '百应提供了工作手机、CRM等产品在内的智能客户关系管理解决方案。覆盖市场广告投放、课程咨询转化、老生续课增购等高频业务场景，构建线上线下学员数字档案，降低客户精细化运营成本。',
  },
  {
    title: '北京人社局深度合作，“AI数字公务员”开启人社服务新模式',
    imageSrc: 'https://cdn.byai.com/static/intro/img/customer-case/case-banner/12.png',
    label: LabelText.affairs,
    content:
      '依托百应人工智能、大数据的核心算法，帮助人社局通过“AI数字公务员”的精准外呼触达，耗时不足3天就将新出台的人社政策精准触达辖区企业，企业主动咨询比例提升至70%，营造了良好的营商环境。',
  },
  {
    title: '双11大促借势AI外呼，老客转化效果效率齐升',
    imageSrc: 'https://cdn.byai.com/static/intro/img/customer-case/case-banner/13.png',
    label: LabelText.eCommerce,
    content:
      '在双11大促期间，某纸品类目头部品牌通过合理的AI话术和外呼策略，有节奏有计划地分批外呼，并根据业务自定义设置客户标签。最终在21000+名老客户中筛选出2600+个意向客户，实现35%以上的客户转化率，产生20万元+销售总额。',
  },
  {
    title: '私域加粉率达48%，解码护肤行业“获客”新链路',
    imageSrc: 'https://cdn.byai.com/static/intro/img/customer-case/case-banner/14.png',
    label: LabelText.eCommerce,
    content:
      '在近一个月的测试过程中，某美白护肤类目TOP3品牌进行了两版AB话术的测试外呼，细节到添加微信ID或者绑定手机号。以会员日活动为切入点，平均加粉率达到48%左右，实现私域流量的高效引流。',
  },
  {
    title: '私域蓄水一步到位，高效拉新节省70%引流成本',
    imageSrc: 'https://cdn.byai.com/static/intro/img/customer-case/case-banner/15.png',
    label: LabelText.eCommerce,
    content:
      '某美妆类目TOP级别商家通过百应AI私域加粉解决方案，在没有任何利益激励的情况下，获客转化率达到18%；相较传统的加微手段，AI外呼在12小时内精准触达5万+老客户，帮助商家成功节省70%的引流成本。',
  },
];

/**
 * 两个下箭头的组件样式
 */
export const arrowStyleList: ArrowStyle[] = [
  {
    borderWidth: '5px 5px 0 5px',
    color: '#2b58f9',
    top: 28,
    left: 71,
  },
  {
    borderWidth: '4px 4px 0 4px',
    color: '#fff',
    top: 27,
    left: 72,
  },
  {
    borderWidth: '5px 5px 0 5px',
    color: '#2b58f9',
    top: 22,
    left: 71,
  },
  {
    borderWidth: '4px 4px 0 4px',
    color: '#fff',
    top: 21,
    left: 72,
  },
];
