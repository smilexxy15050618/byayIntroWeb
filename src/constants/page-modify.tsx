/**
 * @prop smallDropdown 标记是否是小展开项 (移动端)
 * @prop followExpand 是否跟随上级节点一起展开 (移动端)
 */
import imgurl from '../../img.url.js'

export const NAV_CONFIG = [
  {
    path: '/',
    name: '首页',
  },
  {
    path: '/product',
    name: '产品与服务',
    smallDropdown: true,
    expand: [
      {
        title: '智能用户运营平台（AICOS）',
        desc: 'AI时代的新一代用户运营平台',
        icon: imgurl+'/百应智能（用户）运营平台.svg',
        path: '/product/intelligenceUser',
      },
      {
        title: '多模态情感化AI（MEAI）',
        desc: '真实可感的多模态对话AI',
        icon: imgurl+'/多模态情感化对话AI.svg',
        path: '/product/multimodalAI',
      },
      {
        title: '增强型用户画像洞察（CDP+）',
        desc: '非结构化数据感知',
        icon: imgurl+'/增强型用户画像洞察（CDP+）.svg',
        path: '/enhance',
      },
      {
        title: '全场景用户连接与对话（AICC+ ）',
        desc: '跨平台、多形式的用户触达',
        icon: imgurl+'/全场景用户连接与对话（AICC+ ）.svg',
        path: '/product/fullSceneUserLink',
      },
      {
        title: '策略智能与自动化（OSA）',
        desc: '构建个性化用户自动运营策略',
        icon: imgurl+'/策略智能与自动化（OSA）.svg',
        path: '/intelligence',
      },
     
     
      // {
      //   title: 'AI电话机器人',
      //   desc: 'AI电话营销的优质选择',
      //   icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/nav/AI%E7%94%B5%E8%AF%9D%E6%9C%BA%E5%99%A8%E4%BA%BA.svg',
      //   path: '/product/voice-robot',
      // },
      // {
      //   title: '文本机器人',
      //   desc: '更聪明、更善解人意的AI对话',
      //   icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/nav/文本机器人.svg',
      //   path: '/product/text-robot',
      // },
      // {
      //   title: '分析机器人',
      //   desc: '高效助力企业实现业绩增长',
      //   icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/nav/分析机器人.svg',
      //   path: '/product/quality-test-robot',
      // },
      // {
      //   title: '虚拟数字人',
      //   desc: '能听能说能理解的虚拟形象',
      //   icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/nav/虚拟数字人.svg',
      //   path: '/product/virtual-robot',
      // },
      // {
      //   title: '领先技术',
      //   desc: '七年深耕，行业前沿技术水平',
      //   icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/nav/%E6%8A%80%E6%9C%AF%E9%A2%86%E5%85%88.svg',
      //   path: '/technology-service/technology',
      // },
      // {
      //   title: '咨询服务',
      //   desc: '为客户业务持续增长负责',
      //   icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/nav/%E4%B8%93%E4%B8%9A%E6%9C%8D%E5%8A%A1.svg',
      //   path: '/technology-service/service',
      // },
   
    ],
  },
  {
    path: '/solutions',
    name: '解决方案',
    smallDropdown: true,
    expand: [
      {
        title: '品牌零售',
        desc: '会员用户全域运营管理',
        icon:imgurl+'/pplsheadicon.png',
        path: '/retail',
      },
      {
        title: '互联网',
        desc: '深度挖掘用户价值，拉升LTV',
        icon:imgurl+'/hlwheadicon.png',
        path: '/plat',
      },
      {
        title: '保险',
        desc: '“大数据+AI+人”三驱模式',
        icon:imgurl+'/baoxianheadicon.png',
        path: '/insure',
      },
      {
        title: '公安反诈',
        desc: '强力提升公安反诈预防全业务效能',
        icon:imgurl+'/gafzheadicon.png',
        path: '/unfraud',
      },
      {
        title: '消费金融',
        desc: '全自动、智能化营销服务',
        icon:imgurl+'/xfjrheadicon.png',
        path: '/customer-finance',
      }
      
      // {
      //   title: '教育',
      //   desc: '低成本高效率提升课程复购',
      //   icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/nav/%E6%95%99%E8%82%B2ai.svg',
      //   path: '/retail3',
      // },
      // {
      //   title: 'AI数字员工',
      //   desc: '',
      //   icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/AssistantRobot.svg',
      //   path: '/solutions',
      // },
    ],
  },
  // {
  //   path: '/customer-case',
  //   name: '客户案例',
  // },
  {
    path: '/partner/ecology',
    name: '生态合作',
  },
  // {
  //   path: '/technology',
  //   name: '技术服务',
  //   smallDropdown: true,
  //   expand: [
  //     {
  //       title: '技术',
  //       desc: '共享「智能+」企业服务市场红利',
  //       // icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-channel.png',
  //       icon: '',
  //       path: '/technology-service/technology',
  //       mobileTitle: '技术',
  //     },
  //     {
  //       title: '服务',
  //       desc: '共建人工智能生态合作联盟',
  //       // icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
  //       icon: '',
  //       path: '/technology-service/service',
  //       mobileTitle: '服务',
  //     },
  //   ],
  // },
  // {
  //   path: '/aboutByai',
  //   name: '关于百应',
  // },
  {
    path: '/aboutByai',
    name: '关于百应',
    // smallDropdown: true,
    // expand: [
    //   {
    //     title: '关于百应',
    //     desc: '以AI赋能经济发展和社会生活',
    //     icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/nav/%E5%85%B3%E4%BA%8E%E7%99%BE%E5%BA%94.svg',
    //     path: '/about/about-baiying',
    //     mobileTitle: '关于百应',
    //   },
    //   {
    //     title: '加入我们',
    //     desc: '期待与您共赴星辰大海',
    //     icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/nav/%E5%8A%A0%E5%85%A5%E6%88%91%E4%BB%AC.svg',
    //     path: '/about/join',
    //     mobileTitle: '加入我们',
    //   },
    // ],
  },
];

export const FOOTER_CONFIG = [
  {
    title: 'AI产品服务',
    list: [
      { name: '电话机器人', href: '/product/voice-robot' },
      {
        name: '文本机器人',
        href: '/product/text-robot',
      },
      {
        name: '分析机器人',
        href: '/product/quality-test-robot',
      },
      {
        name: '虚拟数字人',
        href: '/product/virtual-robot',
      },
      { name: '领先技术', href: '/technology-service/technology' },
      { name: '专业服务', href: '/technology-service/service' },
    ],
  },
  {
    title: '快速通道',
    list: [
      { name: '客户登录', href: 'https://crm.byai.com/login' },
      { name: '服务商登录', href: 'https://boss.byai.com/login' },
      { name: '生态合作', href: '/partner/ecology' },
      { name: '渠道合作', href: '/form?formType=3' },
      { name: '', href: '' }, // 占位防止3项时居中问题
    ],
  },
  {
    title: '关于我们',
    list: [
      { name: '关于百应', href: '/aboutByai' },
      { name: '新闻中心', href: '/news' },
      { name: '招贤纳士', href: 'https://www.lagou.com/gongsi/154789.html' },
      { name: '', href: '' }, // 占位防止3项时居中问题
    ],
  },
];
