import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import FeatureIntroduce, { IFeatureIntroduceProps } from '../voice-robot/FeatureIntroduce';

interface IProps {
  className?: string;
  children?: ReactNode;
}

const PREFIX = 'https://cdn.byai.com/static/intro/img/quality-test-robot';

const FEATURE_INFO: IFeatureIntroduceProps[] = [
  {
    title: (
      <>
        多形式录音导入
        <br />
        灵活配置质检方案
      </>
    ),
    textOne:
      '支持SaaS级产品部署，快速完成和企业呼叫中心、在线客服系统、服务营销数据API等无缝对接上线，同时适配十余种格式音频本地上传，通过自定义质检规则设置，灵活配置质检方案，让企业能够轻松享受智能质检带来的高效与便捷。',
    pcImgs: [
      {
        src: `${PREFIX}/feature1-1.png`,
        style: { width: 550, top: 20, right: 0 },
      },
      {
        src: `${PREFIX}/feature1-2.png`,
        style: { width: 313, top: 247, right: 45 },
        className: ['animate__fadeInUp', 'animate__delay_200ms'],
      },
      {
        src: `${PREFIX}/feature1-3.png`,
        style: { width: 433, top: 42, right: 103 },
        className: ['animate__fadeInDown', 'animate__delay_200ms'],
      },
      {
        src: `${PREFIX}/feature1-4.png`,
        style: { width: 117, top: 221, right: 29 },
        className: ['animate__bounceIn', 'animate__delay_900ms'],
      },
    ],
    mobileImg: `${PREFIX}/feature-xs-1.png`,
    background: '#FFFFFF',
  },
  {
    title: (
      <>
        强大的质检引擎
        <br />
        高性能语音转写/分离技术
      </>
    ),
    textOne:
      '质检机器人可以利用关键词、语义、语速、音量、情绪等声音文字特征识别，对客服的服务态度、话术规范进行检测，告别低效的传统人工抽检方式，1个质检机器人1天可质检3万分钟录音，帮助企业建立起一套精细化的对话质量管理体系。',
    pcImgs: [
      {
        src: `${PREFIX}/feature2-1.png`,
        style: { width: 550, top: 20, left: 0 },
      },
      {
        src: `${PREFIX}/feature2-2.png`,
        style: { width: 201, top: 241, left: 13 },
        className: ['animate__rotateIn', 'animate__delay_600ms'],
      },
      {
        src: `${PREFIX}/feature2-3.png`,
        style: { width: 309, top: 324, left: 222 },
        className: ['animate__fadeInRight', 'animate__delay_300ms'],
      },
      {
        src: `${PREFIX}/feature2-4.png`,
        style: { width: 88, top: 127, left: 421 },
        className: ['animate__zoomInPluse', 'animate__delay_400ms'],
      },
    ],
    mobileImg: `${PREFIX}/feature-xs-2.png`,
    background: ['#2B58F908', '#F9FAFF'],
  },
  {
    title: (
      <>
        丰富质检模型
        <br />
        高可靠质检准确率
      </>
    ),
    textOne:
      '百应质检机器人已被成熟地运用于催收、服务、电销三大场景，覆盖金融、教育、电商等9大行业，支持多样化自定义质检模型、灵活可配的建模规则，在实际应用过程中，保证了拦截预警的高准确率，大幅减少人工二次复检，同时不遗漏任何一条违规行为。',
    pcImgs: [
      {
        src: `${PREFIX}/feature3-1.png`,
        style: { width: 550, top: 20, right: 0 },
      },
      {
        src: `${PREFIX}/feature3-2.png`,
        style: { width: 120, top: 301, right: 305 },
        className: ['animate__fadeInUp', 'animate__delay_200ms'],
      },
      {
        src: `${PREFIX}/feature3-3.png`,
        style: { width: 270, top: 318, right: 20 },
        className: ['animate__fadeInRight', 'animate__delay_200ms'],
      },
      {
        src: `${PREFIX}/feature3-4.png`,
        style: { width: 130, top: 78, right: 110 },
        className: ['animate__bounceIn', 'animate__delay_1100ms'],
      },
    ],
    mobileImg: `${PREFIX}/feature-xs-3.png`,
    background: [
      `url(${PREFIX}/feature3-bg.png) left center / 115px auto,#FFFFFF`,
      `url(${PREFIX}/feature-xs-3-bg.png) right bottom 80px / 75px auto,#FFFFFF`,
    ],
  },
  {
    title: (
      <>
        多维度质检结果分析
        <br />
        快速查找定位问题
      </>
    ),
    textOne:
      '利用AI技术层层解析会话数据，从语音、话术、业务等多方面整理与分析数据，针对客户需求、购买意向、意见建议等进行提取分析，质检结果以可视化报表形式呈现，支持管理者自定义报表统计维度，随时调听关联录音，定位具体问题，更全面的掌控服务动态。',
    pcImgs: [
      {
        src: `${PREFIX}/feature4-1.png`,
        style: { width: 550, top: 20, left: 0 },
        className: ['animate__fadeInDown', 'animate__ahead_'],
      },
      {
        src: `${PREFIX}/feature4-2.png`,
        style: { width: 104, top: 71, left: 36 },
        className: ['animate__bounceIn', 'animate__delay_1100ms'],
      },
      {
        src: `${PREFIX}/feature4-3.png`,
        style: { width: 246, top: 249, left: 21 },
        className: ['animate__fadeInUp', 'animate__delay_200ms'],
      },
      {
        src: `${PREFIX}/feature4-4.png`,
        style: { width: 298, top: 246, left: 241 },
        className: ['animate__fadeInRight', 'animate__delay_200ms'],
      },
    ],
    mobileImg: `${PREFIX}/feature-xs-4.png`,
    background: ['#2B58F908', `url(${PREFIX}/feature-xs-4-bg.png) right bottom 133px / 85px auto, #F9FAFF`],
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
