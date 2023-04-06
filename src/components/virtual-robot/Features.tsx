import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import FeatureIntroduce, { IFeatureIntroduceProps } from '../voice-robot/FeatureIntroduce';
interface IProps {
  className?: string;
  children?: ReactNode;
}

const PREFIX = 'https://cdn.byai.com/static/intro/img/virtual-robot';

const FEATURE_INFO: IFeatureIntroduceProps[] = [
  {
    title: (
      <>
        多重对话形式
        <br />
        保障交流沟通更顺畅
      </>
    ),
    textOne:
      '支持多种交流互动形式，如实时对话、按键对讲、文字交流、语音唤醒等，企业可结合不同的硬件终端及场景需求，定制多样化的虚拟数字人形象，供用户根据实际需求自由切换互动方式。',
    pcImgs: [
      {
        src: `${PREFIX}/feature1-1.png`,
        style: { width: 550, top: 20, right: 0 },
        className: ['animate__fadeInDown', 'animate__ahead_300ms'],
      },
      {
        src: `${PREFIX}/feature1-2.png`,
        style: { width: 202, top: 240, right: 350 },
        className: ['animate__fadeInUp', 'animate__delay_200ms'],
      },
      {
        src: `${PREFIX}/feature1-3.png`,
        style: { width: 76, top: 92, right: 156 },
        className: ['animate__bounceIn', 'animate__delay_1000ms'],
      },
    ],
    mobileImg: `${PREFIX}/feature-xs-1.png`,
    background: '#FFFFFF',
  },
  {
    title: (
      <>
        双重互动方式
        <br />
        缩短沟通信息路径
      </>
    ),
    textOne:
      '虚拟数字人整体形象、动作细节、立体感觉和语音表达高度契合，与用户实时语音交流沟通无障碍，搭配使用界面触屏点击双重互动，可以有效缩短信息沟通路径，让用户在较少时间和步骤内快速获取所需帮助，提高效率。',
    pcImgs: [
      {
        src: `${PREFIX}/feature2-1.png`,
        style: { width: 550, top: 20, left: 0 },
        className: ['animate__fadeInDown'],
      },
      {
        src: `${PREFIX}/feature2-2.png`,
        style: { width: 216, top: 167, left: 0 },
        className: ['animate__fadeInLeft', 'animate__delay_300ms'],
      },
      {
        src: `${PREFIX}/feature2-3.png`,
        style: { width: 248, top: 124, left: 301 },
        className: ['animate__fadeInRight', 'animate__delay_300ms'],
      },
      {
        src: `${PREFIX}/feature2-4.png`,
        style: { width: 82, top: 161, left: 207 },
        className: ['animate__bounceIn', 'animate__delay_900ms'],
      },
    ],
    mobileImg: `${PREFIX}/feature-xs-2.png`,
    background: [
      `url(${PREFIX}/feature2-bg.png) left bottom/120px 106px,#2B58F908`,
      `url(${PREFIX}/feature-xs-2-bg) right bottom/41px, #F9FAFFFF`,
    ],
  },
  {
    title: (
      <>
        丰富信息控件融合多种
        <br />
        内容形态，精准传递信息
      </>
    ),
    textOne:
      '通过AI技术创新交互形式，增强与用户间的可视化互动，利用丰富的信息控件，如文字提示、图片展示、播放视频、流程提示、功能菜单、地图导航等，让内容传达方式更灵活恰当，降低用户认知成本，有效拉近企业与用户间的距离。',
    pcImgs: [
      {
        src: `${PREFIX}/feature3-1.png`,
        style: { width: 550, top: 20, right: 0 },
        className: ['animate__fadeInDown'],
      },
      {
        src: `${PREFIX}/feature3-2.png`,
        style: { width: 550, top: 267, right: 0 },
        className: ['animate__fadeInUp'],
      },
      {
        src: `${PREFIX}/feature3-3.png`,
        style: { width: 176, top: 295, right: 257 },
        className: ['animate__bounceIn', 'animate__delay_700ms'],
      },
    ],
    mobileImg: `${PREFIX}/feature-xs-3.png`,
    background: [`url(${PREFIX}/feature3-bg.png) right 0 bottom 120px/ 158px, #FFFFFF`, `#FFFFFFFF`],
  },
  {
    title: (
      <>
        高效人机协同 <br />
        实时掌握全流程服务动态
      </>
    ),
    textOne:
      '可对会话过程进行全程监控，建立风险预警机制，一旦发现风险及时预警，并第一时间进行人工干预，无感切换至人工坐席，继续为用户提供实时视频、语音、文字等后续服务。',
    pcImgs: [
      {
        src: `${PREFIX}/feature4-1.png`,
        style: { width: 550, top: 20, left: 0 },
        className: ['animate__fadeInDown'],
      },
      {
        src: `${PREFIX}/feature4-2.png`,
        style: { width: 190, top: 346, left: 43 },
        className: ['animate__fadeInUp', 'animate__delay_400ms'],
      },
      {
        src: `${PREFIX}/feature4-3.png`,
        style: { width: 218, top: 134, left: 332 },
        className: ['animate__fadeInRight', 'animate__delay_300ms'],
      },
    ],
    mobileImg: `${PREFIX}/feature-xs-4.png`,
    background: [`#2B58F908`, ` #F9FAFFFF`],
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
