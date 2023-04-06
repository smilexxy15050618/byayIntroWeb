import { retailUrl } from '../../lib/utils';
export const NAV_CONFIG = [
  {
    path: retailUrl('/'),
    name: '首页',
  },
  {
    path: retailUrl('/currency'),
    name: '解决方案',
    expand: [
      {
        title: '场景解决方案',
        followExpand: true, // 是否跟随上级节点展开该项
        children: [
          // {
          //   title: '活动营销',
          //   desc: '共建人工智能生态合作联盟',
          //   icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
          //   path: retailUrl('/promote'),
          //   mobileTitle: '活动营销',
          // },
          {
            title: '老客召回',
            desc: '共享「智能+」企业服务市场红利',
            icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-channel.png',
            path: retailUrl('/recall'),
            mobileTitle: '老客召回',
            showNewIcon: true,
          },
          // {
          //   title: '私域引流',
          //   desc: '共建人工智能生态合作联盟',
          //   icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
          //   path: retailUrl('/traffic'),
          //   mobileTitle: '私域引流',
          // },
          {
            title: '私域引流',
            desc: '共建人工智能生态合作联盟',
            icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
            path: retailUrl('/traffic'),
            mobileTitle: '私域引流',
            showNewIcon: true,
          },
          {
            title: '私域运营',
            desc: '共建人工智能生态合作联盟',
            icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
            path: retailUrl('/operate'),
            mobileTitle: '私域运营',
          },
          {
            title: '客户服务',
            desc: '共享「智能+」企业服务市场红利',
            icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-channel.png',
            path: retailUrl('/service'),
            mobileTitle: '客户服务',
          },
        ],
      },
      {
        title: '行业解决方案',
        followExpand: true, // 是否跟随上级节点展开该项
        children: [
          {
            title: '通用行业',
            desc: '共建人工智能生态合作联盟',
            icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
            path: retailUrl('/currency'),
            mobileTitle: '通用行业',
          },
          {
            title: '美妆行业',
            desc: '共建人工智能生态合作联盟',
            icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
            path: retailUrl('/beauty'),
            mobileTitle: '美妆行业',
          },
          {
            title: '食品行业',
            desc: '共建人工智能生态合作联盟',
            icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
            path: retailUrl('/food'),
            mobileTitle: '食品行业',
          },
          {
            title: '鞋服行业',
            desc: '共享「智能+」企业服务市场红利',
            icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-channel.png',
            path: retailUrl('/clothes'),
            mobileTitle: '鞋服行业',
          },
          {
            title: '线下百购',
            desc: '共享「智能+」企业服务市场红利',
            icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-channel.png',
            path: retailUrl('/mall'),
            mobileTitle: '线下百购',
            showDoubleEleven: true,
          },
        ],
      },
    ],
  },
  {
    path: retailUrl('/case'),
    name: '客户案例',
  },
  {
    path: retailUrl('/ecology'),
    name: '生态合作',
  },
  {
    path: retailUrl('/techn'),
    name: '技术服务',
    smallDropdown: true,
    expand: [
      {
        title: '技术',
        desc: '共享「智能+」企业服务市场红利',
        // icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-channel.png',
        icon: '',
        path: retailUrl('/techn'),
        mobileTitle: '技术',
      },
      {
        title: '服务',
        desc: '共建人工智能生态合作联盟',
        // icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
        icon: '',
        path: retailUrl('/servi'),
        mobileTitle: '服务',
      },
    ],
  },
  {
    path: retailUrl('/about'),
    name: '关于我们',
    smallDropdown: true,
    expand: [
      {
        title: '关于百应',
        desc: '共享「智能+」企业服务市场红利',
        icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-channel.png',
        path: retailUrl('/about'),
        mobileTitle: '关于百应',
      },
      {
        title: '加入我们',
        desc: '共建人工智能生态合作联盟',
        icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
        path: retailUrl('/join'),
        mobileTitle: '加入我们',
      },
      {
        title: '私域动态',
        desc: '共建人工智能生态合作联盟',
        icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
        path: retailUrl('/anews'),
        mobileTitle: '私域动态',
      },
    ],
  },
  {
    path: 'https://www.byai.com',
    name: 'AI数字员工',
  },
];

export const PHONE_NAV_CONFIG = [
  {
    path: retailUrl('/'),
    name: '首页',
  },
  {
    // path: retailUrl(''),
    name: '场景解决方案',
    smallDropdown: true,
    expand: [
      // {
      //   title: '活动营销',
      //   desc: '共建人工智能生态合作联盟',
      //   icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
      //   path: retailUrl('/promote'),
      //   mobileTitle: '活动营销',
      // },
      {
        title: '老客召回',
        desc: '共享「智能+」企业服务市场红利',
        icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-channel.png',
        path: retailUrl('/recall'),
        mobileTitle: '老客召回',
        showNewIcon: true,
      },
      {
        title: '私域引流',
        desc: '共建人工智能生态合作联盟',
        icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
        path: retailUrl('/traffic'),
        mobileTitle: '私域引流',
        showNewIcon: true,
      },
      {
        title: '私域运营',
        desc: '共建人工智能生态合作联盟',
        icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
        path: retailUrl('/operate'),
        mobileTitle: '私域运营',
      },
      {
        title: '客户服务',
        desc: '共享「智能+」企业服务市场红利',
        icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-channel.png',
        path: retailUrl('/service'),
        mobileTitle: '客户服务',
      },
    ],
  },
  {
    // path: retailUrl(''),
    name: '行业解决方案',
    smallDropdown: true,
    expand: [
      {
        title: '通用行业',
        desc: '共建人工智能生态合作联盟',
        icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
        path: retailUrl('/currency'),
        mobileTitle: '通用行业',
      },
      {
        title: '美妆行业',
        desc: '共建人工智能生态合作联盟',
        icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
        path: retailUrl('/beauty'),
        mobileTitle: '美妆行业',
      },
      {
        title: '食品行业',
        desc: '共建人工智能生态合作联盟',
        icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
        path: retailUrl('/food'),
        mobileTitle: '食品行业',
      },
      {
        title: '鞋服行业',
        desc: '共享「智能+」企业服务市场红利',
        icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-channel.png',
        path: retailUrl('/clothes'),
        mobileTitle: '鞋服行业',
      },
      {
        title: '线下百购',
        desc: '共享「智能+」企业服务市场红利',
        icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-channel.png',
        path: retailUrl('/mall'),
        mobileTitle: '线下百购',
        showDoubleEleven: true,
      },
    ],
  },
  {
    path: retailUrl('/case'),
    name: '客户案例',
  },
  {
    path: retailUrl('/ecology'),
    name: '生态合作',
  },
  {
    // path: retailUrl('/technology'),
    name: '技术服务',
    smallDropdown: true,
    expand: [
      {
        title: '技术',
        desc: '共享「智能+」企业服务市场红利',
        icon: '',
        path: retailUrl('/techn'),
        mobileTitle: '技术',
      },
      {
        title: '服务',
        desc: '共建人工智能生态合作联盟',
        icon: '',
        path: retailUrl('/servi'),
        mobileTitle: '服务',
      },
    ],
  },
  {
    // path: retailUrl('/about'),
    name: '关于我们',
    smallDropdown: true,
    expand: [
      {
        title: '关于百应',
        desc: '共享「智能+」企业服务市场红利',
        icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-channel.png',
        path: retailUrl('/about'),
        mobileTitle: '关于百应',
      },
      {
        title: '加入我们',
        desc: '共建人工智能生态合作联盟',
        icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
        path: retailUrl('/join'),
        mobileTitle: '加入我们',
      },
      {
        title: '私域动态',
        desc: '共建人工智能生态合作联盟',
        icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
        path: retailUrl('/anews'),
        mobileTitle: '私域动态',
      },
    ],
  },
  {
    path: 'https://www.byai.com',
    name: 'AI数字员工',
  },
];
