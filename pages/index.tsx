import { Visible } from 'react-grid-system';
import React, { FC, useState, useEffect, useRef, useCallback, useMemo, ReactNode } from 'react';
import ByVoiceFooter from '../src/components/common/ByVoiceFooter';
import CustomerIconsBlock from '../src/components/common/CustomerIconsBlock';
import AiPlatform from '../src/components/homepage/version2023/AiPlatform';
import Solution from '../src/components/homepage/version2023/Solution-2023';
import SolutionOld from '../src/components/homepage/version2023/Solution';
import HeightestAi from '../src/components/homepage/version2023/HeightestAi';
import GlobaNumber from '../src/components/homepage/version2023/GlobaNumber';
import CustomerWords from '../src/components/homepage/version2023/CustomerWords2023';
import { IndustryCarousel } from '../src/components/IndustryCarousel-2023';
import { Layout } from '../src/components/Layout';
import { FormType } from '../src/components/TryForm';
import VideoList from '../src/components/videoList-2023';
import VideoListMobile from '../src/components/videoList/VidelListMobile';
import { Wrapper } from '../src/components/voice-robot/style';
import { ScrollToPlugin } from 'gsap/all';
import imgurl from '../img.url.js';
import Advantage from '../src/components/homepage/version2023/advantage';
import {NewVideo} from '../src/components/NewVideo';
import {News} from '../src/components/homepage/version2023/News'
import {LastPng} from './lastPng'
const FOOTER_BG = `${imgurl}/kqaizl.png`;
const BASE_URL = 'https://cdn.byai.com/static/intro/img/index/version2021/banner';
const TEMPORARY_BANNER_BG = `${BASE_URL}/temporary-bg.jpg`;
const TEMPORARY_BANNER_BG_XS = `${BASE_URL}/temporary-bg-xs.jpg`;
const BANNER_XS_IMG = `${BASE_URL}/banner-xs-img.png`;
const BANNER_XS_BG = `${BASE_URL}/banner-xs-bg.png`;
const bannerImgs = [
  {
    src: `${BASE_URL}/p1.png`,
    style: { width: 710, left: -98, top: 121 },
    className: [],
  },
  {
    src: `${BASE_URL}/p2.png`,
    style: { width: 292, left: 45, top: 173 },
    className: ['animate__fadeInLeft'],
  },
  {
    src: `${BASE_URL}/p3.png`,
    style: { width: 183, left: -4, top: 279 },
    className: ['animate__fadeInLeft', 'animate__delay_300ms'],
  },
  {
    src: `${BASE_URL}/p4.png`,
    style: { width: 256, left: -88, top: 321 },
    className: ['animate__fadeInLeft', 'animate__delay_400ms'],
  },
  {
    src: `${BASE_URL}/p5.png`,
    style: { width: 65, left: 371, top: 139 },
    className: ['animate__bounceIn', 'animate__delay_1100ms'],
  },
  {
    src: `${BASE_URL}/p6.png`,
    style: { width: 189, left: 330, top: 397 },
    className: ['animate__fadeInRight', 'animate__delay_400ms'],
  },
  {
    src: `${BASE_URL}/p7.png`,
    style: { width: 147, left: 465, top: 227 },
    className: ['animate__fadeInRight', 'animate__delay_600ms'],
  },
];

const videoInfoList = [
  {
    tag: '高用户接听',
    icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E5%AE%98%E7%BD%91%E8%A7%86%E9%A2%91%E6%96%87%E4%BB%B6/tab1.png',
    color: 'rgba(43, 88, 249, 1)',
    infoList: [
      {
        title: (
          <div>
            稳健的<span style={{ color: 'rgba(43, 88, 249, 1)' }}>线路资源</span>，合理规划拨打策略，用户更愿意接听
          </div>
        ),
        desc: ['合适的时间呼叫可触达的人群', '本地外显 企业名片认证', '覆盖全国的优质线路 得天独厚的优势'],
      },
      {
        title: (
          <div>
            <span style={{ color: 'rgba(43, 88, 249, 1)' }}>天盾</span> 保护，号码过滤拦截，用户投诉率极低
          </div>
        ),
        desc: ['企业外呼营销的防火墙 解决投诉难题'],
      },
    ],
  },
  {
    tag: '高意向转化',
    icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E5%AE%98%E7%BD%91%E8%A7%86%E9%A2%91%E6%96%87%E4%BB%B6/tab2.png',
    color: 'rgba(0, 200, 189, 1)',
    infoList: [
      {
        title: (
          <div>
            制定精准<span style={{ color: 'rgba(0, 200, 189, 1)' }}>营销策略</span>，设计最优通话内容，影响用户决策
          </div>
        ),
        desc: ['用户意图精准识别， "销冠"式AI应答，促进成交', '行业专家1V1， 定制品牌专属AI'],
      },
      {
        title: (
          <div>
            AI<span style={{ color: 'rgba(0, 200, 189, 1)' }}>高度拟人</span>，即时响应专业回复，提升用户通话体验
          </div>
        ),
        desc: ['行业亿级知识库 行业领跑的AI能力', '丰富的AI音色市场 匹配全行业全场景'],
      },
    ],
  },
  {
    tag: '优营销模型',
    icon: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/%E5%AE%98%E7%BD%91%E8%A7%86%E9%A2%91%E6%96%87%E4%BB%B6/tab3.png',
    color: 'rgba(246, 102, 0, 1)',
    infoList: [
      {
        title: (
          <div>
            通话数据<span style={{ color: 'rgba(246, 102, 0, 1)' }}>沉淀和分析</span>，快速迭代企业营销模型
          </div>
        ),
        desc: ['通话内容沉淀 回流企业数据库', '通话节点分析 构建策略优化闭环'],
      },
    ],
  },
];

export default props => {
  const [initialOpacity, setInitialOpacity] = useState(true);
  const [cauindex, setCauindex] = useState(0);
  const [navIndex, setNavIndex] = useState(0);
  const hadnleNav = v => {
    setNavIndex(v);
    if (document.body.getBoundingClientRect().top == 0) {
      // 完全到顶部
      if (v == 1) {
        setInitialOpacity(false);
      } else {
        setInitialOpacity(true);
      }
      console.log(v);
    }
  };

  const handleHeaderOpacity = () => {
    // document.body.getBoundingClientRect().top == 0 && navIndex==1 ? setInitialOpacity(true) : setInitialOpacity(false)
    document.body.getBoundingClientRect().top == 0 ? setInitialOpacity(true) : setInitialOpacity(false);
  };

  useEffect(() => {
    document.addEventListener('wheel', handleHeaderOpacity);
  }, []);

  return (
    <Layout initialOpacity={initialOpacity} headPlaceholder={[false, false]} headFontStyle={['light', 'light']}>
      {(visible, setFormVisible) => (
        <Wrapper>
          <IndustryCarousel hadnleNav={hadnleNav} />
          <Visible md lg xl xxl xxxl>
            <NewVideo></NewVideo>
            {/* <VideoList contentList={videoInfoList} /> */}
            <GlobaNumber></GlobaNumber>
            <Solution />
            {/* <AiPlatform></AiPlatform> */}
            <CustomerWords></CustomerWords>
            <CustomerIconsBlock padding="50px 0 80px" />
            <HeightestAi />
            <News></News>
          </Visible>
          <Visible xs sm>
            <VideoListMobile contentList={videoInfoList}></VideoListMobile>
            <SolutionOld />
            <Advantage></Advantage>
          </Visible>
          <ByVoiceFooter
            title="就现在，开启AI电话增长之旅"
            desc="留下联系方式，将有AI行业专家为您提供专属服务"
            btnText="与我联系"
            background={`url(${FOOTER_BG})`}
            onClick={() => {
              window.open('/form?formType=1');
            }}
          />
        </Wrapper>
      )}
    </Layout>
  );
};
