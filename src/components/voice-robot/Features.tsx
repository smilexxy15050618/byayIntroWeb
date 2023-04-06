import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import FeatureIntroduce, { IFeatureIntroduceProps } from './FeatureIntroduce';

const PREFIX = 'https://cdn.byai.com/static/intro/img/voice-robot';

const FEATURE_INFO: IFeatureIntroduceProps[] = [
  {
    title: '媲美真人的顺畅沟通体验',
    textOne:
      '通过AI对话管理模块，让百应语音机器人具备准确理解用户意图的能力，支持多轮对话、智能打断、静默音识别、上下文关联、知识库查询等方式，还原自然流畅的真人对话场景。',
    textTwo:
      '此外，百应自助式集成平台保持了高度易用性，用户通过可视化流程轻松搭建场景话术，还可以使用在线工具实时进行训练，不断完善黄金话术。',
    pcImgs: [
      {
        src: `${PREFIX}/feature1/first.png`,
        style: { width: '550px', top: '20px', right: '0px' },
      },
      {
        src: `${PREFIX}/feature1/p2.png`,
        style: { width: '485px', top: '96px', right: '3px' },
      },
      {
        src: `${PREFIX}/feature1/p3.png`,
        style: { width: '331px', top: '319px', right: '29px' },
        className: ['animate__fadeInUp'],
      },
      {
        src: `${PREFIX}/feature1/p4.png`,
        style: { width: '125px', top: '84px', right: '380px' },
        className: ['animate__bounceIn', 'animate__delay_500ms'],
      },
    ],
    mobileImg: `${PREFIX}/feature1/xs.png`,
  },
  {
    title: '持续高效的智能外呼策略',
    textOne:
      '单个百应语音机器人平均每天可处理800-1200通外呼任务，实现不间断持续高效触达客户，效率超过人工1.5倍以上，帮助企业完成客户精准筛选，快速进行市场覆盖及线索清洗。',
    textTwo:
      '基于专业的行业话术模板配置各业务场景专属话术，利用大数据AI技术准确收集分析客户意向，一旦发现重要商机第一时间转接人工坐席跟进转化。同时支持设置反骚扰措施，避免企业因盲目拨打电话而造成资源浪费和糟糕的品牌体验。',
    pcImgs: [
      {
        src: `${PREFIX}/feature2/p1.png`,
        style: { width: '551px', top: '20px', left: '35px' },
        className: ['animate__fadeInUp'],
      },
      {
        src: `${PREFIX}/feature2/p2.png`,
        style: { width: '207px', top: '52px', left: '79px' },
        className: ['animate__fadeInLeft'],
      },
      {
        src: `${PREFIX}/feature2/p3.png`,
        style: { width: '163px', top: '113px', left: '393px' },
        className: ['animate__fadeInRight'],
      },
      {
        src: `${PREFIX}/feature2/p4.png`,
        style: { width: '226px', top: '383px', left: '265px' },
        className: ['animate__fadeInRight'],
      },
      {
        src: `${PREFIX}/feature2/p5.png`,
        style: { width: '163px', top: '307px', left: '34px' },
        className: ['animate__fadeInLeft'],
      },
    ],
    mobileImg: `${PREFIX}/feature2/xs.png`,
  },
  {
    title: '更出色的智能接待服务',
    textOne:
      '打破工作时长限制，百应语音机器人能够7*24小时无间断在线接听客户来电，并从海量数据中快速学习并归纳要点，不断迭代服务，第一时间满足客户的各类即时需求，尤其适用投诉接待、业务咨询等场景。',
    textTwo:
      '搭配智能IVR功能，引导客户通过菜单按键导航，即可享受专业的智能咨询服务及基础的自助式业务办理，帮助呼叫中心分流至少10%以上的话务量，让人工坐席组有更多时间接待重要客户',
    pcImgs: [
      {
        src: `${PREFIX}/feature3/p1.png`,
        style: { width: '550px', top: '20px', right: '0px' },
      },
      {
        src: `${PREFIX}/feature3/p2.png`,
        style: { width: '315px', top: '116px', right: '117px' },
        className: ['animate__fadeInDown'],
      },
      {
        src: `${PREFIX}/feature3/p3.png`,
        style: { width: '419px', top: '175px', right: '0px' },
        className: ['animate__fadeInUp'],
      },
      {
        src: `${PREFIX}/feature3/p4.png`,
        style: { width: '138px', top: '256px', right: '62px' },
        className: ['animate__bounceIn', 'animate__delay_500ms'],
      },
    ],
    mobileImg: `${PREFIX}/feature3/xs.png`,
  },
  {
    title: '完备的AI核心技术闭环',
    textOne:
      '百应拥有自主产权的智能语音、语义识别、大数据分析等AI技术，独立研发的Voicebot全双工智能语音对话机器人的技术已拥有核心技术专利。至今已获得近百项AI及大数据领域相关专利和软件著作，研发水平位列行业前沿，保证了超高语音识别率、超强语义理解，实现人机无障碍交流沟通。',
    textTwo: '',
    pcImgs: [
      {
        src: `${PREFIX}/feature4/four.png`,
        style: { width: '550px', top: '20px', left: '33px' },
        className: ['animate__fadeInDown'],
      },
      {
        src: `${PREFIX}/feature4/p2.png`,
        style: { width: '215px', top: '43px', left: '209px' },
        className: ['animate__zoomInPluse', 'animate__delay_500ms'],
      },
      {
        src: `${PREFIX}/feature4/p3.png`,
        style: { width: '215px', top: '215px', left: '85px' },
        className: ['animate__zoomInPluse', 'animate__delay_500ms'],
      },
      {
        src: `${PREFIX}/feature4/p4.png`,
        style: { width: '215px', top: '215px', left: '325px' },
        className: ['animate__zoomInPluse', 'animate__delay_500ms'],
      },
    ],
    mobileImg: `${PREFIX}/feature4/xs.png`,
  },
];

interface IProps {
  className?: string;
  children?: ReactNode;
}

const RawFeatures: FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      {FEATURE_INFO.map((item, i) => (
        <FeatureIntroduce
          {...item}
          key={i}
          imgFirst={i % 2 === 0}
          background={i % 2 === 0 ? '#FFFFFF' : 'rgba(43, 88, 249, 0.03)'}
          height="520px"
          padding="0 0"
          className="relative-position"
        />
      ))}
    </div>
  );
};

export type IFeaturesProps = IProps;
const Features = styled(RawFeatures)<IFeaturesProps>``;
export default Features;
