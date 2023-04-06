import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Features from './Features';
import { Wrapper } from '../voice-robot/style';
import IndustryCase from '../voice-robot/IndustryCase';
import Banner from '../common/Banner';
import { Layout } from '../Layout';
import { FormType } from '../TryForm';
import { FOOTER_BG } from '../../constants/img-urls';
import ByVoiceFooter from '../common/ByVoiceFooter';

interface IProps {
  className?: string;
  children?: ReactNode;
}
const PREFIX = 'https://cdn.byai.com/static/intro/img/virtual-robot';

const MOBILE_BANNER = `${PREFIX}/banner-img-xs.png`;
const BANNER_BG_CIRCLE = '//cdn.byai.com/static/intro/img/robot-banner-bg/banner-circle.png';
const BANNER_BG_TRIANGLE = '//cdn.byai.com/static/intro/img/robot-banner-bg/banner-triangle.png';
const MOBILE_BANNER_BG = '//cdn.byai.com/static/intro/img/workphone/banner-mobile%E5%BA%95.png';

const bannerImgs = [
  {
    src: `${PREFIX}/banner-img-1.png`,
    style: { width: 714, left: -114, top: 0 },
    className: [''],
  },
  {
    src: `${PREFIX}/banner-img-2.png`,
    style: { width: 132, left: 69, top: 124 },
    className: ['animate__fadeInDown'],
  },
  {
    src: `${PREFIX}/banner-img-3.png`,
    style: { width: 96, left: 210, top: 124 },
    className: ['animate__fadeInDown', 'animate__delay_400ms'],
  },
  {
    src: `${PREFIX}/banner-img-4.png`,
    style: { width: 248, left: 63, top: 227 },
    className: ['animate__fadeInUp', 'animate__delay_500ms'],
  },
  {
    src: `${PREFIX}/banner-img-5.png`,
    style: { width: 104, left: 470, top: 139 },
    className: ['animate__fadeInRight', 'animate__delay_600ms'],
  },
  {
    src: `${PREFIX}/banner-img-6.png`,
    style: { width: 120, left: 434, top: 65 },
    className: ['animate__fadeInRight', 'animate__delay_900ms'],
  },
];

const CASE_INFOS = [
  {
    title: '虚拟数字人出圈，打造具备企业特质的专属IP形象',
    img: `${PREFIX}/industry-case-1.png`,
    imgXs: `${PREFIX}/industry-case-1-xs.png`,
    content: [
      {
        subTitle: '客户概况',
        desc: '国网江苏省电力有限公司是国家电网公司系统中规模位于前列的省级电网公司之一，现辖13个市、53个县（市）公司及10余个科研、检修、施工等单位，服务全省4000多万电力客户。拥有35千伏及以上变电站2990余座、输电线路8.7万公里，电网规模超过英国、意大利等国家。',
      },
      {
        subTitle: '项目背景',
        desc: '应用于企业内部起到交流展示作用，在领导视察、行业交流团到访等场合，虚拟数字人可以代替传统接待人员担任智能讲解员角色，为参访者进行全方位的讲解，并配合字幕、图片、视频形象化展示电力业务数据、公司信息等丰富内容，更专业出色地完成任务。',
      },
      {
        subTitle: '业务价值',
        desc: '虚拟数字人这种全新的展示方式和讲解方式，不仅释放了人力接待的压力，更凭借其智能化、数字化、多样化的高可用性能，如大屏可视化语音交互、丰富的信息内容传递、高质量的语音对话，大幅提升了政务接待服务标准和服务质量，更直观地展示了公司实力与品牌形象，在未来将拥有更大的想象空间。',
      },
    ],
  },
];

const RawTextRobot: FC<IProps> = ({ className }) => {
  return (
    <Layout headPlaceholder={['#2B58F9', '#2B58F9']} headFontStyle={['light', 'light']}>
      {(visible, setFormVisible) => (
        <Wrapper className={className}>
          <Banner
            title="3D虚拟数字人"
            subTitle="面向未来的全维度AI交互体验"
            desc="超逼真的拟人化动态服务能力，创造沉浸式实景交流体验，做用户眼中最有温度的“沟通使者”。"
            btnText="免费体验"
            pcImgs={bannerImgs}
            minWidthPC="1075px"
            mobileImg={MOBILE_BANNER}
            background={[
              `url(${BANNER_BG_CIRCLE}) no-repeat left 0 bottom 46px/125px,
              url(${BANNER_BG_TRIANGLE}) no-repeat right 11px bottom 60px/95px,
              #2B58F9
             `,
              `url(${MOBILE_BANNER_BG}) no-repeat top right/cover,#2B58F9`,
            ]}
            onClick={() => {
              setFormVisible(true, FormType.CUSTOMER);
            }}
          />
          <Features />
          <IndustryCase caseInfos={CASE_INFOS} />
          <ByVoiceFooter
            title="点击开启「AI数字员工」崭新之旅"
            desc="留下联系方式，将有AI行业专家为您提供专属服务"
            btnText="与我联系"
            background={`url(${FOOTER_BG})`}
            onClick={() => {
              setFormVisible(true, FormType.CUSTOMER);
            }}
          />
        </Wrapper>
      )}
    </Layout>
  );
};

export type ITextRobotProps = IProps;
const TextRobot = styled(RawTextRobot)<ITextRobotProps>``;
export default TextRobot;
