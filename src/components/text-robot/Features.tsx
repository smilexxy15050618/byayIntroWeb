import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import FeatureIntroduce, { IFeatureIntroduceProps } from '../voice-robot/FeatureIntroduce';
interface IProps {
  className?: string;
  children?: ReactNode;
}

const PREFIX = 'https://cdn.byai.com/static/intro/img/text-robot';

const FEATURE_INFO: IFeatureIntroduceProps[] = [
  {
    title: '秒级响应多渠道客户咨询',
    textOne:
      '百应文本机器人可以被灵活地嵌入到国内外的网站、小程序、APP等多种渠道，部署方便快捷，满足了企业通过一个中心管理多个客户渠道的运营需求。',
    textTwo:
      '只要有客户的地方，就可构建秒级响应的专业服务，基于不同访问来源、不同业务场景分配媲美专业咨询顾问般的机器人客服，提供针对性服务，让企业不再错过任何一次增长机会。',
    pcImgs: [
      {
        src: `${PREFIX}/feature1/feature1-1.png`,
        style: { width: 550, top: 20, right: 0 },
      },
      {
        src: `${PREFIX}/feature1/p2.png`,
        style: { width: 164, top: 304, right: 344 },
        className: ['animate__fadeInUp', 'animate__delay_300ms'],
      },
      {
        src: `${PREFIX}/feature1/p3.png`,
        style: { width: 164, top: 260, right: 271 },
        className: ['animate__fadeInUp', 'animate__delay_300ms'],
      },
      {
        src: `${PREFIX}/feature1/p4.png`,
        style: { width: 164, top: 320, right: 205 },
        className: ['animate__fadeInUp', 'animate__delay_300ms'],
      },
      {
        src: `${PREFIX}/feature1/p5.png`,
        style: { width: 247, top: 215, right: -6 },
        className: ['animate__bounceIn', 'animate__delay_900ms'],
      },
    ],
    mobileImg: `${PREFIX}/feature1/xs.png`,
    background: '#FFFFFF',
  },
  {
    title: '独立解决80%客户难题',
    textOne:
      '拥有行业前列的语义理解技术，通过结合语境和交互场景，文本机器人可以精准识别出用户当下的真实诉求，同时参照金融、政务、教育、电商等行业知识库推荐，妥善引导客户完成信息查询、业务办理等复杂任务。',
    textTwo:
      '支持多种行为交互模式，文本机器人可独立完成绝大部分常规性问题的解答，轻松应对百万级别的海量并发咨询，服务效率提升200%以上。',
    pcImgs: [
      {
        src: `${PREFIX}/feature2/p1.png`,
        style: { width: 550, top: 20, left: 37 },
        className: ['animate__fadeInUp', 'animate__ahead_300ms'],
      },
      {
        src: `${PREFIX}/feature2/p2.png`,
        style: { width: 339, top: 102, left: 41 },
        className: ['animate__fadeInDown', 'animate__ahead_300ms'],
      },
      {
        src: `${PREFIX}/feature2/p3.png`,
        style: { width: 167, top: 206, left: 307 },
        className: ['animate__fadeInRight', 'animate__ahead_300ms'],
      },
    ],
    mobileImg: `${PREFIX}/feature2/xs.png`,
    background: ['#2B58F908', `url(${PREFIX}/feature2/bg-xs.png) center/cover, #F9FAFF`],
  },
  {
    title: '自主学习进化的智能帮手',
    textOne:
      '每一次沟通也是机器人不断训练进化的过程，结合丰富的历史交互数据，百应文本机器人可以无监督主动学习未理解问题，持续补齐知识盲点，并通过总结用户特征，丰富用户画像，不断拓展千人千面的定向服务场景，让机器人客服越用越聪明，释放数智化互动营销想象力。',
    pcImgs: [
      {
        src: `${PREFIX}/feature3/p1.png`,
        style: { width: 550, top: 20, right: 0 },
      },
      {
        src: `${PREFIX}/feature3/p2.png`,
        style: { width: 279, top: 52, right: 85 },
        className: ['animate__fadeInUp'],
      },
      {
        src: `${PREFIX}/feature3/p3.png`,
        style: { width: 167, top: 102, right: 286 },
        className: ['animate__fadeInDown', 'animate__delay_300ms'],
      },
      {
        src: `${PREFIX}/feature3/p4.png`,
        style: { width: 104, top: 255, right: 77 },
        className: ['animate__bounceIn', 'animate__delay_700ms'],
      },
    ],
    mobileImg: `${PREFIX}/feature3/xs.png`,
    background: [
      `url(${PREFIX}/feature3/bg.png) left 0 center/132px 277px, #FFFFFF`,
      `url(${PREFIX}/feature3/bg-xs.png) right 0 bottom 145px/74px`,
    ],
  },
  {
    title: '为商业决策提供有力依据',
    textOne:
      '具备完善的数据分析体系，可以提供智能分析数据报表、热点词汇分析、客户标签分析、对话轮次分析等多维度数据分析功能，以数据能力赋能商业决策优化。',
    textTwo:
      '通过挖掘更深度的数据价值，以及数据可视化报表的直观呈现，企业管理者可以准确定位用户关注点，提前发现业务风险，量化评估当前企业服务质量，自驱动地进行精细化运营。',
    pcImgs: [
      {
        src: `${PREFIX}/feature4/p1.png`,
        style: { width: 550, top: 20, left: 0 },
      },
      {
        src: `${PREFIX}/feature4/p2.png`,
        style: { width: 378, top: 170, left: 0 },
        className: ['animate__fadeInUp', 'animate__delay_100ms'],
      },
      {
        src: `${PREFIX}/feature4/p3.png`,
        style: { width: 218, top: 136, left: 328 },
        className: ['animate__fadeInTopRight', 'animate__delay_200ms'],
      },
      {
        src: `${PREFIX}/feature4/p4.png`,
        style: { width: 218, top: 272, left: 328 },
        className: ['animate__fadeInBottomRight', 'animate__delay_200ms'],
      },
    ],
    mobileImg: `${PREFIX}/feature4/xs.png`,
    background: ['#2B58F908', '#F9FAFF'],
  },
];

const RawFeatures: FC<IProps> = ({ className }) => {
  return (
    <div className={className}>
      {FEATURE_INFO.map((item, i) => (
        <FeatureIntroduce
          {...item}
          key={i}
          imgFirst={i % 2 === 0}
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
