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
      {
        title: 'AI电话机器人',
        desc: 'AI电话营销的第一选择',
        icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/nav/AI%E7%94%B5%E8%AF%9D%E6%9C%BA%E5%99%A8%E4%BA%BA.svg',
        path: '/product/voice-robot',
      },
      {
        title: '文本机器人',
        desc: '更聪明、更善解人意的AI对话',
        icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/nav/文本机器人.svg',
        path: '/product/text-robot',
      },
      {
        title: '分析机器人',
        desc: '高效助力企业实现业绩增长',
        icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/nav/分析机器人.svg',
        path: '/product/quality-test-robot',
      },
       {
        title: '虚拟数字人',
        desc: '能听能说能理解的虚拟形象',
        icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/nav/虚拟数字人.svg',
        path: '/product/virtual-robot',
      },
      {
        title: '领先技术',
        desc: '7年深耕 技术水平行业领先',
        icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/nav/%E6%8A%80%E6%9C%AF%E9%A2%86%E5%85%88.svg',
        path: '/technology-service/technology',
      },
      {
        title: '咨询服务',
        desc: '为客户业务持续增长负责',
        icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/nav/%E4%B8%93%E4%B8%9A%E6%9C%8D%E5%8A%A1.svg',
        path: '/technology-service/service',
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
        type: 'scheme-title qy-icon',
        list: [
          {
            title: '品牌零售',
            path: '/retail'
          },
          {
            title: '汽车行业',
            path: '/car'
          },
          {
            title: '游戏',
            path: '/game'
          },
          {
            title: '电子商务',
            path: '/technology-service/service'
          },
          {
            title: '通讯',
            path: '/technology-service/service'
          },
          {
            title: '互联网',
            path: '/technology-service/service'
          },
          {
            title: '中小企业',
            path: '/technology-service/service'
          },
        ]
      },
      {
        title: '政务',
        type: 'scheme-title zw-icon',
        list: [
          {
            title: '公安综治',
            path: '/technology-service/service'
          },
          {
            title: '公安反诈',
            path: '/unfraud'
          },
          {
            title: '政府服务窗',
            path: '/technology-service/service'
          },
        ]
      },
      {
        title: '金融',
        type: 'scheme-title jr-icon',
        list: [
          {
            title: '银行',
            path: '/technology-service/service'
          },
          {
            title: '证券基金',
            path: '/technology-service/service'
          },
          {
            title: '消费金融',
            path: '/customer-finance'
          },
          {
            title: '保险',
            path: '/insure'
          },
        ]
      },
    ],
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
    title: 'AI产品服务',
    list: [
      { name: '电话机器人', href: '/product/voice-robot' },
      { name: '领先技术', href: '/technology-service/technology' },
      { name: '专业服务', href: '/technology-service/service' },
      { name: '', href: '' }, // 占位防止3项时居中问题
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
      { name: '关于百应', href: '/about' },
      { name: '新闻中心', href: '/news' },
      { name: '招贤纳士', href: 'https://www.lagou.com/gongsi/154789.html' },
      { name: '', href: '' }, // 占位防止3项时居中问题
    ],
  },
];
