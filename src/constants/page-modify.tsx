/**
 * @prop smallDropdown 标记是否是小展开项 (移动端)
 * @prop followExpand 是否跟随上级节点一起展开 (移动端)
 */

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
      // {
      //   title: '智能用户运营平台',
      //   desc: '',
      //   icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/百应智能（用户）运营平台.svg',
      //   path: 'javascript:void(0)',
      //   // path:'/product/intelligenceUser'
      // },
      {
        title: '多模态情感化AI（MEAI）',
        desc: '多模态、情感化、主动式、全双工',
        icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/多模态情感化对话AI.svg',
        path: '/product/multimodalAI',
      },
      {
        title: '增强型用户画像洞察（CDP+）',
        desc: '构建全景客户画像，驱动精细化运营',
        icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/增强型用户画像洞察.svg',
        path: '/enhance',
      },
      {
        title: '全场景用户连接与对话（AICC+)',
        desc: '全场景、全平台，用沟通连接用户',
        icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/全场景用户连接与对话.svg',
        path: '/product/fullSceneUserLink',
      },
      {
        title: '策略智能与自动化（OSA）',
        desc: '自动化策略生成与执行',
        icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/策略智能与自动化（OSA）.svg',
        path: '/intelligence',
      },
    ],
  },
  {
    path: '/solutions',
    name: '解决方案',
    smallDropdown: true,
    expand: [
      {
        title: '企业',
        type: 'scheme-title',
        followExpand: true,
        expand: [
          {
            title: '银行',
            desc: '实现AUM和MAU双效提升',
            icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/nav-solution-2.svg',
            path: '/bank'
          },
          {
            title: '零售',
            desc: '会员用户全域运营管理',
            icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/nav-solution-1.svg',
            path: '/retail',
          },
          {
            title: '保险',
            desc: '“大数据+Al+人”三驱模式',
            icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/nav-solution-4.svg',
            path: '/insure'
          },
          {
            title: '互联网',
            desc: '深度挖掘用户价值，拉升LTV',
            icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/nav-solution-3.svg',
            path: '/internet-solution'
          },
          {
            title: '消费金融',
            desc: '全自动、智能化营销服务',
            icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/nav-solution-6.svg',
            path: '/customer-finance'
          },
          {
            title: '汽车',
            desc: '达成客户体验闭环，驱动增长',
            icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/nav-solution-5.svg',
            path: '/selection_car'
          },
        ]
      },
      {
        title: '政务',
        type: 'scheme-title',
        followExpand: true,
        expand: [
          {
            title: '公安综治',
            desc: '开辟基层治理新路径',
            icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/nav-solution-7.svg',
            path: '/gongAn-synthetical'
          },
          {
            title: '公安反诈',
            desc: '提升公安反诈预防全业务效能',
            icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/nav-solution-8.svg',
            path: '/unfraud'
          },
          {
            title: '政务服务',
            desc: '智慧型、一体化、可持续',
            icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/img2023/nav-solution-9.svg',
            path: '/government-services'
          }
        ]
      },
    ],
  },
  {
    path: '/tech-innovation',
    name: '技术创新',
  },
  {
    path: '/partner/ecology',
    name: '生态合作',
  },
  {
    path: '/aboutByai',
    name: '关于百应',
  },
];

export const FOOTER_CONFIG = [
  {
    title: '百应产品',
    list: [
      {
        name: '多模态情感化AI（MEAI）',
        href: '/product/multimodalAI',
      },
      {
        name: '增强型用户画像洞察（CDP+）',
        href: '/enhance',
      },
      {
        name: '全场景用户连接与对话（AICC+ ）',
        href: '/product/fullSceneUserLink',
      },
      {
        name: '策略智能与自动化（OSA）',
        href: '/intelligence',
      },
    ],
  },
  {
    title: '解决方案',
    type:'qy',
    list: [
      {
        name: '银行',
        href: '/bank'
      },
      {
        name: '零售',
        href: '/retail',
      },
      {
        name: '保险',
        href: '/insure'
      },
      {
        name: '互联网',
        href: '/internet-solution'
      },
      {
        name: '消费金融',
        href: '/customer-finance'
      },
      {
        name: '汽车',
        href: '/selection_car'
      },
      { name: '', href: '' }, // 占位防止3项时居中问题
    ],
    
  },
  {
    title: '解决方案',
    type:'zw',
    list: [
      {
        name: '公安综治',
        href: '/gongAn-synthetical'
      },
      {
        name: '公安反诈',
        href: '/unfraud'
      },
      {
        name: '政务服务',
        href: '/government-services'
      },
      { name: '', href: '' }, // 占位防止3项时居中问题
    ],
  },
  {
    title: '探索百应',
    list: [
      { name: '关于百应', href: '/aboutByai' },
      { name: '招贤纳士', href: 'https://www.lagou.com/gongsi/154789.html' },
      { name: '生态合作', href: '/partner/ecology' },
      { name: '渠道合作', href: '/form?formType=3' },
      { name: '客户登录', href: 'https://crm.byai.com/login' },
      { name: '服务商登陆', href: '/form?formType=3' },
      { name: '', href: '' }, // 占位防止3项时居中问题
    ],
  },
];

export const FOOTER_WAP_CONFIG = [
  {
    title: '百应产品',
    list: [
      {
        name: '多模态情感化AI（MEAI）', href: '/product/multimodalAI',
      },
      {
        name: '增强型用户画像洞察（CDP+）', href: '/enhance',
      },
      {
        name: '全场景用户连接与对话（AICC+ ）', href: '/product/fullSceneUserLink',
      },
      {
        name: '策略智能与自动化（OSA）', href: '/intelligence',
      },
    ],
  },
  {
    title: '解决方案',
    list: [
      {
        name: '银行',
        href: '/bank'
      },
      {
        name: '零售',
        href: '/retail',
      },
      {
        name: '保险',
        href: '/insure'
      },
      {
        name: '互联网',
        href: '/internet-solution'
      },
      {
        name: '消费金融',
        href: '/customer-finance'
      },
      {
        name: '汽车',
        href: '/selection_car'
      },
      {
        name: '公安综治',
        href: '/gongAn-synthetical'
      },
      {
        name: '公安反诈',
        href: '/unfraud'
      },
      {
        name: '政务服务',
        hrf: '/government-services'
      }
    ],
  },
  {
    title: '探索百应',
    list: [
      { name: '关于百应', href: '/aboutByai' },
      { name: '招贤纳士', href: 'https://www.lagou.com/gongsi/154789.html' },
      { name: '生态合作', href: '/partner/ecology' },
      { name: '渠道合作', href: '/form?formType=3' },
      { name: '客户登录', href: 'https://crm.byai.com/login' },
      { name: '服务商登陆', href: '/form?formType=3' },
    ],
  },
  {
    title: '友情链接',
    list: [
      {
        name: '飞书', href: 'https://www.feishu.cn',
      },
      {
        name: 'WPS', href: 'https://www.wps.cn',
      },
      {
        name: '樊登读书', href: 'https://www.dushu365.com',
      },
      {
        name: '杭州社保', href: 'http://hrss.hangzhou.gov.cn',
      },
      {
        name: '亿邦动力', href: 'https://www.ebrun.com',
      },
      {
        name: '企业微信SCRM', href: 'https://www.xlbscrm.com/scrm.html',
      },
      {
        name: '数据分析', href: 'https://www.guandata.com',
      },
    ],
  },
  {
    title: '联系我们',
    list: [
      {
        name: '电话', href: 'javascript:void(0)',
      },
      {
        name: '400-0235-100', href: 'tel:4000235100',
      },
      {
        name: '公司地址：', href: 'javascript:void(0)',
      },
      {
        name: '浙江省杭州市余杭区梦想小镇天使村11幢', href: 'javascript:void(0)',
      }
    ],
  },
];
