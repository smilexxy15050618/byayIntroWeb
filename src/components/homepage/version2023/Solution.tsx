import React, { FC, useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Visible } from 'react-grid-system';
import { HOST_ENUM } from '../../../lib/utils';
import Accordion from '../../accordion';
import AccordionForMobile from '../../accordion/AccordionForMobile';
import Pane from './Pane';

export type ISolutionProps = {};

const content = [
  {
    title: '零售',
    color: 'rgba(246, 102, 0, 1)',
    specialColor: 'rgba(247, 181, 0, 1)',
    bgSrc: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/解决方案/零售.png',
    maxDesc: ['6大类目的TOP50品牌，', '超80%用百应AI与会员有效沟通'],
    minDesc: ['80%的TOP50品', '牌用百应AI', '与会员有效沟通'],
    tagList: ['私域加粉', '会员运营', '活动营销', '客户服务'],
    jumpSrc: '',
    hostType: HOST_ENUM.DS_HOST,
  },
  {
    title: '平台',
    color: 'rgba(125, 77, 255, 1)',
    specialColor: 'rgba(255, 182, 254, 1)',
    maxDesc: ['TOP级平台类客户用百应AI', '规模化激活流失用户，提升订单转化'],
    bgSrc: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/解决方案/平台.png',
    minDesc: ['助力平台类客户', '提升会员订单', '转化'],
    tagList: ['用户激活', '流失召回', '付费转化', '加微转化'],
    hostType: HOST_ENUM.PF_HOST,
  },
  {
    title: '教育',
    color: 'rgba(38, 196, 116, 1)',
    specialColor: 'rgba(95, 255, 214, 1)',
    maxDesc: ['聚焦4大场景为头部客户提供AI服务，', '提高流量转化和续费率'],
    bgSrc: 'https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/解决方案/教育.png',
    minDesc: ['通过四大场景', '为TOP客户', '提高续费率'],
    tagList: ['流量转化', '课程复购', '私域引流', '老客激活'],
    hostType: null,
  },
  // "教育AI：
  // 关键词：、、、"
];

export const SOLUTION_ID = 'solution';

const Solution: FC<ISolutionProps> = ({}) => {
  // contentList: { color: string; title: string; maxDesc: string[]; minDesc: string[]; tagList: string[]  }[];

  return (
    <Pane id={SOLUTION_ID} title="行业解决方案" paneBgColor="grey" titleMarginBottom={51}>
      <Visible md lg xl xxl xxxl>
        <Accordion maxWidth={584} minWidth={284} contentList={content}></Accordion>
      </Visible>
      <Visible xs sm>
        <AccordionForMobile maxWidth={584} minWidth={284} contentList={content}></AccordionForMobile>
      </Visible>
    </Pane>
  );
};

export default Solution;
