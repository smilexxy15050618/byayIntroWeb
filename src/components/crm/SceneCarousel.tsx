import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import { ArrowSolidRight, ArrowSolidLeft } from '@indata/icon-byai';
import Box from '../Box';

export interface SceneList {
  title: string;
  content: SceneListItem[];
}
export interface SceneListItem {
  caption: string;
  title: string;
  desc: string[];
  mobileDesc?: string[];
  img: string;
  mobileImg: string;
}
export const sceneList: SceneList[] = [
  {
    title: '数智化营销闭环',
    content: [
      {
        caption: '智能名片',
        title: '把企业官网装进名片',
        desc: [
          '名片小程序：轻量化呈现，打造专业人设与品牌背书',
          '销售公文包：海量精品海报、文章，拓客方式多样化',
          '客户行为跟踪：实时跟踪、提醒跟进，及时捕获商机',
        ],
        img: '//cdn.byai.com/static/official-website/crm/%E6%99%BA%E8%83%BD%E5%90%8D%E7%89%87.png',
        mobileImg: '//cdn.byai.com/static/official-website/crm/%E6%99%BA%E8%83%BD%E5%90%8D%E7%89%87-mobile.png',
      },
      {
        caption: '私域流量运营',
        title: '打造专属私域流量池',
        desc: [
          '自动欢迎语：自动通过好友申请并发送个性化欢迎语，提高客户接待率，让服务更有温度',
          '自动打标：有效追溯客户来源及特征，精准分析客户诉求',
        ],
        img: '//cdn.byai.com/static/official-website/crm/%E7%A7%81%E5%9F%9F%E6%B5%81%E9%87%8F%E8%BF%90%E8%90%A5.png',
        mobileImg:
          '//cdn.byai.com/static/official-website/crm/%E7%A7%81%E5%9F%9F%E6%B5%81%E9%87%8F%E8%BF%90%E8%90%A5-mobile.png',
      },
      {
        caption: '渠道活码',
        title: '活码引流降低封号风险',
        desc: [
          '简单高效的聚客引流工具，解决了个人微信频繁加好友被限制或封号的问题，可监测统计客',
          '户来源渠道，并自动化打标签分组，为后续实现精准营销提供支撑。',
        ],
        img: '//cdn.byai.com/static/official-website/crm/%E6%B8%A0%E9%81%93%E6%B4%BB%E7%A0%81.png',
        mobileImg: '//cdn.byai.com/static/official-website/crm/%E6%B8%A0%E9%81%93%E6%B4%BB%E7%A0%81-mobile.png',
      },
      {
        caption: '丰富营销组件',
        title: '支持多样化营销方式',
        desc: [
          '营销推广落地页：可视化拖拉拽方式轻松设计投放页',
          '线索来源追踪：高效分析优质渠道，降低营销成本',
          '内容营销素材库：一键分享实现全民营销，快速破圈',
        ],
        img: '//cdn.byai.com/static/official-website/crm/%E4%B8%B0%E5%AF%8C%E8%90%A5%E9%94%80%E7%BB%84%E4%BB%B6.png',
        mobileImg:
          '//cdn.byai.com/static/official-website/crm/%E4%B8%B0%E5%AF%8C%E8%90%A5%E9%94%80%E7%BB%84%E4%BB%B6-mobile.png',
      },
      {
        caption: 'AI热力图',
        title: '客户真实意图尽在掌握',
        desc: ['用户行为可视化展示更直观，精准发现客户关注点，快速了解客户真实需求，用合适的话题切入，加速成交转化。'],
        img: '//cdn.byai.com/static/official-website/crm/AI%E7%83%AD%E5%8A%9B%E5%9B%BE.png',
        mobileImg: '//cdn.byai.com/static/official-website/crm/AI%E7%83%AD%E5%8A%9B%E5%9B%BE-mobile.png',
      },
      {
        caption: '客户雷达',
        title: '数据驱动营销策略调优',
        desc: [
          '针对营销素材，客户雷达可实时跟踪客户行为数据，并根据近期访客情况分析结果，辅助调整分享内容，提升获客效果。',
        ],
        img: '//cdn.byai.com/static/official-website/crm/%E5%AE%A2%E6%88%B7%E9%9B%B7%E8%BE%BE.png',
        mobileImg: '//cdn.byai.com/static/official-website/crm/%E5%AE%A2%E6%88%B7%E9%9B%B7%E8%BE%BE-mobile.png',
      },
    ],
  },
  {
    title: '数智化销售管理',
    content: [
      {
        caption: '线索管理',
        title: '将线索沉淀为客户资产',
        desc: [
          '全渠道：自动整合多渠道客户，将碎片化客户信息进行统一管理，实现销售闭环。',
          '全维度：将客户基础信息、沟通阶段、跟进记录、合同订单等数据进行统一管理，高效获取客户资料。',
          '自定义标签：填写跟进记录支持一键打标，便于客户管理和统计分析。',
        ],
        img: '//cdn.byai.com/static/official-website/crm/%E7%BA%BF%E7%B4%A2%E7%AE%A1%E7%90%86.png',
        mobileImg: '//cdn.byai.com/static/official-website/crm/%E7%BA%BF%E7%B4%A2%E7%AE%A1%E7%90%86-mobile.png',
      },
      {
        caption: '销售管理',
        title: '全流程自动化提升人效',
        desc: ['自定义销售流程SOP，实现销售服务客户动作规范化和销售过程数据化管理，提升销售过程管理效率。'],
        img: '//cdn.byai.com/static/official-website/crm/%E9%94%80%E5%94%AE%E7%AE%A1%E7%90%86.png',
        mobileImg: '//cdn.byai.com/static/official-website/crm/%E9%94%80%E5%94%AE%E7%AE%A1%E7%90%86-mobile.png',
      },
      {
        caption: '全方位触达',
        title: '分场景灵活选用触达方式',
        desc: [
          '智能AI外呼：AI机器人前置沟通客户意向，潜在客户交接销售跟进',
          '人工坐席：云呼叫电话点对点沟通无阻，解决高频通话被封号难题',
          '短信触达：支持多种短信模板，为不同画像的客户量身定制服务短信，长期稳固客户关系',
          '工作手机：支持CRM一键唤起手机拨号，手机数据与CRM数据互通',
        ],
        mobileDesc: ['融合智能AI外呼、人工坐席、工作手机、短信等多形式信息触达能力，稳步提升有效线索率'],
        img: '//cdn.byai.com/static/official-website/crm/%E5%85%A8%E6%96%B9%E4%BD%8D%E8%A7%A6%E8%BE%BE.png',
        mobileImg:
          '//cdn.byai.com/static/official-website/crm/%E5%85%A8%E6%96%B9%E4%BD%8D%E8%A7%A6%E8%BE%BE-mobile1.png',
      },
      {
        caption: '会话存档',
        title: '监管销售过程防飞单',
        desc: ['企业微信服务会话合规存档，客户信息全方位保存', '客户跟进记录自动同步CRM客户中心'],
        img: '//cdn.byai.com/static/official-website/crm/%E4%BC%9A%E8%AF%9D%E5%AD%98%E6%A1%A3.png',
        mobileImg: '//cdn.byai.com/static/official-website/crm/%E4%BC%9A%E8%AF%9D%E5%AD%98%E6%A1%A3-mobile.png',
      },
      {
        caption: '商机管理',
        title: '实现签单全流程数字化',
        desc: [
          '遇到售前流程复杂繁琐，签单周期较长的客户，商机管理可辅助销售高效管理销售进度，支持切换列表/看板形式查看不同阶段的商机详情',
        ],
        img: '//cdn.byai.com/static/official-website/crm/%E5%95%86%E6%9C%BA%E7%AE%A1%E7%90%86.png',
        mobileImg: '//cdn.byai.com/static/official-website/crm/%E5%95%86%E6%9C%BA%E7%AE%A1%E7%90%86-mobile.png',
      },
      {
        caption: '订单管理',
        title: '前后台协作推进成交过程',
        desc: [
          '订单流程 ：企业需求个性化定制流程',
          '合同建档 ：分门别类电子留存有迹可循',
          '回款计划 ：定时提醒客户及时回款',
          '回款进度 ：进度把握，轻松管理',
        ],
        img: '//cdn.byai.com/static/official-website/crm/%E8%AE%A2%E5%8D%95%E7%AE%A1%E7%90%86.png',
        mobileImg: '//cdn.byai.com/static/official-website/crm/%E8%AE%A2%E5%8D%95%E7%AE%A1%E7%90%86-mobile.png',
      },
    ],
  },
  {
    title: '数智化员工管理',
    content: [
      {
        caption: '目标设定',
        title: '辅助目标制定与管理',
        desc: ['业绩目标数字化管理，颗粒度细分至团队及个人，提升销售效能'],
        img: '//cdn.byai.com/static/official-website/crm/%E7%9B%AE%E6%A0%87%E8%AE%BE%E5%AE%9A.png',
        mobileImg: '//cdn.byai.com/static/official-website/crm/%E7%9B%AE%E6%A0%87%E8%AE%BE%E5%AE%9A-mobile.png',
      },
      {
        caption: '员工行为监测',
        title: '全方位洞察员工行为',
        desc: [
          'AI赋能的销售管理，针对营销、销售的业务特性，将营销、销售、运营全过程数据线上化，智能化，为员工提供新的工作方式，为企业提供科学的管理工具。',
        ],
        img: '//cdn.byai.com/static/official-website/crm/%E5%91%98%E5%B7%A5%E8%A1%8C%E4%B8%BA%E7%9B%91%E6%B5%8B.png',
        mobileImg:
          '//cdn.byai.com/static/official-website/crm/%E5%91%98%E5%B7%A5%E8%A1%8C%E4%B8%BA%E7%9B%91%E6%B5%8B-mobile.png',
      },
      {
        caption: '工作汇报',
        title: '以结果为导向进行团队管理',
        desc: ['业绩完成情况、工作过程量、商机进度自动生成至日报/周报，让TL帮助销售复盘，更好的提升转化率'],
        img: '//cdn.byai.com/static/official-website/crm/%E5%B7%A5%E4%BD%9C%E6%B1%87%E6%8A%A5.png',
        mobileImg: '//cdn.byai.com/static/official-website/crm/%E5%B7%A5%E4%BD%9C%E6%B1%87%E6%8A%A5-mobile.png',
      },
      {
        caption: '智能任务',
        title: '员工管理智能中心',
        desc: [
          '任务管理系统关联客户信息，支持一键下发任务，实时统计任务完成情况，提高团队工作效率，快速反应，高效运作。',
        ],
        img: '//cdn.byai.com/static/official-website/crm/%E6%99%BA%E8%83%BD%E4%BB%BB%E5%8A%A1.png',
        mobileImg: '//cdn.byai.com/static/official-website/crm/%E6%99%BA%E8%83%BD%E4%BB%BB%E5%8A%A1-mobile.png',
      },
      {
        caption: '行为管控',
        title: '大幅降低经营风险',
        desc: [
          '具备提前预防、智能监控、实时预警、专人处理的风控能力和风控机制，通过风控设置和预警推送实时规范员工行为。',
        ],
        img: '//cdn.byai.com/static/official-website/crm/%E8%A1%8C%E4%B8%BA%E7%AE%A1%E6%8E%A7.png',
        mobileImg: '//cdn.byai.com/static/official-website/crm/%E8%A1%8C%E4%B8%BA%E7%AE%A1%E6%8E%A7-mobile.png',
      },
    ],
  },
  {
    title: '数智化洞察分析',
    content: [
      {
        caption: '客户分析',
        title: '更精准的客户画像',
        desc: ['精准锁定最有价值的客户群体，为企业定向营销和重点维护动作提供数据支撑'],
        img: '//cdn.byai.com/static/official-website/crm/%E5%AE%A2%E6%88%B7%E5%88%86%E6%9E%90.png',
        mobileImg: '//cdn.byai.com/static/official-website/crm/%E5%AE%A2%E6%88%B7%E5%88%86%E6%9E%90-mobile.png',
      },
      {
        caption: '员工分析',
        title: '更科学的团队管理',
        desc: ['直观展示销售的整体沟通频次和沟通质量，为销售过程管理和KPI考核提供数据依据，提升全团队销售能力'],
        img: '//cdn.byai.com/static/official-website/crm/%E5%91%98%E5%B7%A5%E5%88%86%E6%9E%90.png',
        mobileImg: '//cdn.byai.com/static/official-website/crm/%E5%91%98%E5%B7%A5%E5%88%86%E6%9E%90-mobile.png',
      },
      {
        caption: '业绩分析',
        title: '更具前瞻性的策略指导',
        desc: ['实时掌握团队整体业绩趋势，了解市场舆情，及时调整企业经营策略'],
        img: '//cdn.byai.com/static/official-website/crm/%E4%B8%9A%E7%BB%A9%E5%88%86%E6%9E%90.png',
        mobileImg: '//cdn.byai.com/static/official-website/crm/%E4%B8%9A%E7%BB%A9%E5%88%86%E6%9E%90-mobile.png',
      },
      {
        caption: '自定义看板',
        title: '更个性化的数据大屏',
        desc: ['灵活配置可视化BI数据报表，满足企业个性化服务数据分析需求'],
        img: '//cdn.byai.com/static/official-website/crm/%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9C%8B%E6%9D%BF.png',
        mobileImg:
          '//cdn.byai.com/static/official-website/crm/%E8%87%AA%E5%AE%9A%E4%B9%89%E7%9C%8B%E6%9D%BF-mobile.png',
      },
    ],
  },
];

const SwitchBtn = styled.div<{ active?: boolean }>`
  height: 50px;
  width: 192px;
  border: 1px solid;
  color: ${props => (props.active ? '#2B58F9' : '#000000')};
  border-color: ${props => (props.active ? '#2B58F9' : 'rgba(0, 0, 0, 0.25)')};
  font-weight: ${props => (props.active ? 500 : 400)};
  background: ${props => (props.active ? 'rgba(43, 88, 249, 0.08);' : '#fff')};
  z-index: ${props => (props.active ? 1 : 'auto')};
  text-align: center;
  line-height: 50px;
  margin-left: -1px;
  cursor: pointer;
  &:hover {
    border-color: #2b58f9;
    color: #2b58f9;
    z-index: 1;
  }
`;
const CarouselWrap = styled.div`
  padding-bottom: 100px;

  .cursor {
    cursor: pointer;
  }

  ul {
    list-style-type: none;
    margin: 0;
  }

  .control:hover {
    .byicon {
      background: #fff;
      color: inherit;
      color: #2b58f9;
    }
  }

  .byicon {
    width: 24px;
    height: 24px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 9px;
    transition: all 0.3s ease-in-out;
  }

  .inner-carousel {
    position: absolute;
    right: 50px;
    bottom: 50px;
    width: 790px;
    height: 539px !important;
    background: #fff;
    box-shadow: 0px 13px 24px 0px rgba(29, 58, 158, 0.16);
    border-radius: 14px;

    img {
      margin: 0;
    }
  }

  .inner-carousel-item {
    /* padding: 24px 32px; */
    padding: 32px;
    display: flex;
    flex-direction: column;
  }

  .inner-carousel,
  .inner-carousel-item,
  .carousel-inner {
    height: 100%;
  }

  .count {
    height: 64px;
    display: flex;
    align-items: flex-end;
  }

  .line {
    height: 30px;
    width: 2px;
    background: #fff;
    height: 25px;
    width: 1px;
    transform: rotate(15deg);
    border: 1px solid;
    margin: 0 4px 3px;
  }
  .list-item:hover .block {
    background: #fff !important;
  }
`;

const borderRadiusConfig = {
  0: '100px 0px 0px 100px',
  3: '0px 100px 100px 0px',
};

const SceneCarousel = () => {
  const [outActiveKey, setOutActiveKey] = useState(0);
  const [innerActiceKey, setInnerActiceKey] = useState(0);
  const intervalRef = useRef<number>(0);
  const innerKeyRef = useRef(0);

  const handleNext = (total: number) => {
    const key = (innerKeyRef.current + 1) % total;
    setInnerActiceKey(key);
  };

  const handlePre = (total: number) => {
    const key = innerKeyRef.current ? innerKeyRef.current - 1 : total - 1;
    setInnerActiceKey(key);
  };

  const handleStopInterval = () => {
    intervalRef.current && clearInterval(intervalRef.current);
  };

  const handleStartInterval = () => {
    intervalRef.current && clearInterval(intervalRef.current);
    const currentContentLength = sceneList[outActiveKey].content.length;
    intervalRef.current = setInterval(handleNext, 5 * 1000, currentContentLength);
  };

  useEffect(() => {
    innerKeyRef.current = innerActiceKey;
  }, [innerActiceKey]);

  useEffect(() => {
    setInnerActiceKey(0);
    handleStartInterval();
    return () => {
      intervalRef.current && clearInterval(intervalRef.current);
      intervalRef.current = 0;
    };
  }, [outActiveKey]);

  return (
    <CarouselWrap>
      <Box display="flex" justifyContent="center" mb="40px" bgcolor="#fff">
        {sceneList.map(({ title }, idx) => (
          <SwitchBtn
            style={{ borderRadius: borderRadiusConfig[idx] }}
            active={idx === outActiveKey}
            onClick={() => setOutActiveKey(idx)}
            key={title}>
            {title}
          </SwitchBtn>
        ))}
      </Box>
      <Carousel activeIndex={outActiveKey} indicators={false} controls={false} className="carouse-wrap">
        {sceneList.map(({ content, title }) => {
          return (
            <CarouselItem key={title}>
              <Box height="630px" display="flex" alignItems="flex-end" justifyContent="center">
                <Box height="465px" minWidth="1200px" bgcolor="#2B58F9" borderRadius="14px" position="relative">
                  <Box
                    width="360px"
                    py="50px"
                    pl="60px"
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    height="100%">
                    <ul>
                      {content.map(({ caption }, idx) => (
                        <Box
                          key={caption}
                          alignItems="center"
                          display="flex"
                          color="#fff"
                          mb="20px"
                          fontWeight={innerActiceKey === idx ? 500 : 400}
                          onClick={() => setInnerActiceKey(idx)}
                          className="cursor list-item"
                          style={{ color: innerActiceKey === idx ? '#fff' : 'rgba(255,255,255,0.65)' }}>
                          <Box
                            width="4px"
                            height="4px"
                            mr={3}
                            className="block"
                            style={{ background: innerActiceKey === idx ? '#fff' : 'rgba(255,255,255,0.65)' }}
                          />
                          <Box fontSize="20px" lineHeight="28px">
                            {caption}
                          </Box>
                        </Box>
                      ))}
                    </ul>
                    <Box display="flex" justifyContent="space-between">
                      <Box display="flex" fontWeight="bold" alignItems="flex-end" color="#fff">
                        <Box fontSize="32px" width="50px" lineHeight="32px" justifyContent="flex-end" className="count">
                          {(innerActiceKey + 1 + '').padStart(2, '0')}
                        </Box>
                        <Box className="line" />
                        <Box fontSize="20px" className="count" lineHeight="20px" color="rgba(255,255,255,0.65)">
                          {(content.length + '').padStart(2, '0')}
                        </Box>
                      </Box>
                      <Box mr={2}>
                        <Box
                          className="cursor control"
                          mb="12px"
                          onClick={() => handlePre(content.length)}
                          onMouseEnter={handleStopInterval}
                          onMouseLeave={handleStartInterval}>
                          <ArrowSolidLeft />
                        </Box>
                        <Box
                          className="cursor control"
                          onClick={() => handleNext(content.length)}
                          onMouseEnter={handleStopInterval}
                          onMouseLeave={handleStartInterval}>
                          <ArrowSolidRight />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Carousel
                    activeIndex={innerActiceKey}
                    indicators={false}
                    controls={false}
                    slide={false}
                    fade
                    className="inner-carousel">
                    {content.map(({ title, desc, img }) => {
                      return (
                        <CarouselItem className="inner-carousel-item" key={title}>
                          <Box fontSize="20px" color="#202640" fontWeight={500} mb={2}>
                            {title}
                          </Box>
                          {desc.map((it, idx) => (
                            <Box mb={1} fontSize="16px" lineHeight="28px" color="#666B80" key={idx}>
                              {it}
                            </Box>
                          ))}
                          <Box flexGrow="1" display="flex" alignItems="flex-end">
                            <img src={img} />
                          </Box>
                        </CarouselItem>
                      );
                    })}
                  </Carousel>
                </Box>
              </Box>
            </CarouselItem>
          );
        })}
      </Carousel>
    </CarouselWrap>
  );
};

export { SceneCarousel };
