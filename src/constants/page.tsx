export const NAV_CONFIG = [
  {
    path: '/',
    name: '首页',
  },
  {
    path: '/product',
    name: '产品',
    expand: [
      {
        title: 'AI产品',
        children: [
          {
            title: '电话机器人',
            desc: '',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/AssistantRobot.svg',
            path: '/product/customer-service',
          },
          {
            title: '文本机器人',
            desc: '',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/AssistantRobot.svg',
            path: '',
          },
          {
            title: '分析机器人',
            desc: '',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/AssistantRobot.svg',
            path: '/product/quality',
          },
          {
            title: '智能虚拟数字人',
            desc: '',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/AssistantRobot.svg',
            path: '',
          },
          {
            title: '智能催收工作手机',
            desc: '',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/Letter.svg',
            path: '/product/workPhone',
          },
        ],
      },
      // {
      //   title: '行业产品',
      //   children: [
      //     {
      //       title: '易窗',
      //       desc: '智能外呼，可批量导入外呼数据，支持无缝转人工',
      //       icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/ThreeCircle.svg',
      //       path: '/product/clew'
      //     }
      //   ]
      // }
    ],
  },
  {
    path: '/solutions',
    name: '解决方案',
  },
  {
    path: '/customer-case',
    name: '客户案例',
  },
  {
    path: '/partner/ecology',
    name: '生态合作',
  },
  {
    path: '/technology',
    name: '技术服务',
    smallDropdown: true,
    expand: [
      {
        children: [
          {
            title: '技术',
            desc: '共享「智能+」企业服务市场红利',
            // icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-channel.png',
            icon: '',
            path: '/technology-service/technology',
            mobileTitle: '技术',
          },
          {
            title: '服务',
            desc: '共建人工智能生态合作联盟',
            // icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
            icon: '',
            path: '/technology-service/service',
            mobileTitle: '服务',
          },
        ],
      },
    ],
  },
  {
    path: '/about',
    name: '关于我们',
    smallDropdown: true,
    expand: [
      {
        children: [
          {
            title: '关于百应',
            desc: '共享「智能+」企业服务市场红利',
            icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-channel.png',
            path: '/about/about-baiying',
            mobileTitle: '关于百应',
          },
          {
            title: '加入我们',
            desc: '共建人工智能生态合作联盟',
            icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
            path: '/about/join',
            mobileTitle: '加入我们',
          },
        ],
      },
    ],
  },
];
