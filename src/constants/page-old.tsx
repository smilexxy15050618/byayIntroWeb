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
        title: '营销云',
        children: [
          {
            title: '智能搜客',
            desc: '海量数据、精准筛选、线索画像，帮企业快速锁定目标客户',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/ThreeCircle.svg',
            path: '/product/clew',
          },
          {
            title: '集客营销',
            desc: '全渠道私域流量运营，打造全员营销生态',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/IntelligentCollector.svg',
            path: '/product/show',
          },
          {
            title: '智能投放',
            desc: '表单自动实时导入CRM，ROI实时监控，优化投放',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/Account.svg',
            path: '',
          },
          {
            title: '短信拓客',
            desc: '更精准的短信，更有效的触达',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/Letter.svg',
            path: '',
          },
        ],
      },
      {
        title: '销售云',
        children: [
          {
            title: '客户管理',
            desc: '智能化、精细化销售过程管理，成单率提升39%',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/PeopleCircleArrow.svg',
            path: '/product/smart-sale',
          },
          {
            title: '智能电销',
            desc: '专注电销场景，让销售效率指数级提升',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/AiMobilePhone.svg',
            path: '/product/smart-marketing',
          },
          {
            title: '销售名片',
            desc: '全员裂变营销获客工具，轻量化呈现海量内容，AI热力图洞察客户兴趣',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/PeopleCircleArrow.svg',
            path: '/product/smart-sale#business-card',
          },
          {
            title: '工作手机',
            desc: '数字化员工行为管理，沉淀客户数据，洞察市场信息',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/AiMobilePhone.svg',
            path: '/product/workPhone',
          },
        ],
      },
      {
        title: '联络云',
        children: [
          {
            title: '云呼叫中心',
            desc: '智慧弹屏，优质线路，通话稳定清晰，强大的数据分析',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/CallCenter.svg',
            path: '/product/aicc',
          },
          {
            title: '在线客服',
            desc: '多渠道覆盖，不丢消息闪电响应，监控数据实时掌控',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/OnlineService.svg',
            path: '/product/online-service',
          },
          {
            title: '视频客服',
            desc: '实时音视频，清晰稳定，功能丰富，多端支持',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/VideoCustomerService.svg',
            path: '/product/video-customer-service',
          },
          {
            title: '协同工单',
            desc: '所有渠道消息，智能分配，一键流转，为协同而生',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/WorkOrder.svg',
            path: '/product/order',
          },
        ],
      },
      {
        title: '智能云',
        children: [
          // {
          //   title: '星追',
          //   desc: '自主研发AI语音通话技术栈，26行业知识图谱',
          //   icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/WorkOrder.svg',
          //   path: '/product/star'
          // },
          // {
          //   title: 'AI引擎',
          //   desc: '自主研发AI语音通话技术栈，26行业知识图谱',
          //   icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/WorkOrder.svg',
          //   path: '/technology#ai-engine'
          // },
          {
            title: '外呼机器人',
            desc: '智能外呼，可批量导入外呼数据，支持无缝转人工',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/AssistantRobot.svg',
            path: '',
          },
          {
            title: '热线机器人',
            desc: '智能接待，快速自助解决问题，精准意图识别',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/AssistantRobot.svg',
            path: '',
          },
          {
            title: '质检机器人',
            desc: '高效智能解析，精准挖掘数据',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/AssistantRobot.svg',
            path: '/product/quality',
          },
          {
            title: '客服机器人',
            desc: '准确率98%，可以解决90%常见问题，降低成本，告别等待',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/AssistantRobot.svg',
            path: '/product/customer-service',
          },
          {
            title: '辅助机器人',
            desc: '实时“协助”员工工作，全天候服务，迅速成为业务专家',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/AssistantRobot.svg',
            path: '/product/smartSupport',
          },
          {
            title: '营销机器人',
            desc: '多渠道接入，强大的智能对话引擎，精准获取高质商机',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/AssistantRobot.svg',
            path: '',
          },
          {
            title: '虚拟数字人',
            desc: '全智能服务用户，打造媲美真人的服务体验',
            icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/AssistantRobot.svg',
            path: '',
          },

          // {
          //   title: '智能知识库',
          //   desc: '快速搭建对内对外的智能知识文档共享平台，提升服务质量',
          //   icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/Account.svg',
          //   path: ''
          // }, {
          //   title: 'AI PaaS',
          //   desc: '更容易接入，更深入场景的AI能力。助力企业“智”变升级',
          //   icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/BrokenLineDiagram.svg',
          //   path: '/product/open'
          // }
        ],
      },
    ],
  },
  {
    path: '/solutions',
    name: '解决方案',
    // smallDropdown: true,
    // // render(item) {
    // //   return item.expand.map(subMenu => (
    // //     <div className={`sub-menu-wrap ${subMenu.right && 'right'}`}>
    // //       {
    // //         subMenu.title &&
    // //         <div className="title">{subMenu.title}</div>
    // //       }
    // //       {
    // //         subMenu.children.map(menuItem => (
    // //           <CommonLink key={menuItem.path} menuItem={menuItem} onClick={() => this.handleOpenNewPage(menuItem.path)} />
    // //         ))
    // //       }
    // //     </div>
    // //   ))
    // // },
    // bottom: <LightLinkBtn href="/solutions" style={{marginTop: '14px'}}>定制解决方案{' >'}</LightLinkBtn>,
    // expand: [
    //   {
    //     children: [
    //       {
    //         title: '星追智能催收解决方案',
    //         desc: '赋能贷后催收，构筑高效、合规的智能化催收新范式',
    //         icon: 'https://cdn.byai.com/static/official-website/product/nav-icon/starIcon.svg',
    //         path: '/product/star',
    //         mobileTitle: '星追智能催收'
    //       },
    //     ]
    //   }
    // ]
  },
  {
    path: '/todo',
    name: '客户案例',
  },
  // {
  //   path: '/product/open',
  //   name: '开放平台'
  // },
  // {
  //   path: '/technology',
  //   name: '技术'
  // },
  // {
  //   path: '/service',
  //   name: '服务'
  // },
  // {
  //   path: '/news',
  //   name: '产品更新'
  // },
  // {
  //   path: '/partner',
  //   name: '生态与合作',
  //   smallDropdown: true,
  //   expand: [
  //     {
  //       children: [
  //         {
  //           title: '渠道合作',
  //           desc: '共享「智能+」企业服务市场红利',
  //           icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-channel.png',
  //           path: '/partner/channel',
  //           mobileTitle: '渠道合作'
  //         },
  //         {
  //           title: '生态合作',
  //           desc: '共建人工智能生态合作联盟',
  //           icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
  //           path: '/partner/ecology',
  //           mobileTitle: '生态合作'
  //         },
  //       ]
  //     }
  //   ]
  // },
  {
    path: '/partner/ecology',
    name: '生态合作',
  },
  // {
  //   path: '/about',
  //   name: '关于'
  // },
  // {
  //   path: '/join',
  //   name: '加入我们'
  // }
  {
    path: '/product',
    name: '技术服务',
    smallDropdown: true,
    expand: [
      {
        children: [
          {
            title: '技术',
            desc: '共享「智能+」企业服务市场红利',
            icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-channel.png',
            path: '/technology-service/technology',
            mobileTitle: '技术',
          },
          {
            title: '服务',
            desc: '共建人工智能生态合作联盟',
            icon: 'https://cdn.byai.com/static/official-website/cooperation/icon-ecology.png',
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
