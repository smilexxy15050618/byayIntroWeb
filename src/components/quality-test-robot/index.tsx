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

const PREFIX = 'https://cdn.byai.com/static/intro/img/quality-test-robot';

const MOBILE_BANNER = `${PREFIX}/banner-img-xs.png`;
const BANNER_BG_CIRCLE = '//cdn.byai.com/static/intro/img/robot-banner-bg/banner-circle.png';
const BANNER_BG_TRIANGLE = '//cdn.byai.com/static/intro/img/robot-banner-bg/banner-triangle.png';
const MOBILE_BANNER_BG = '//cdn.byai.com/static/intro/img/workphone/banner-mobile%E5%BA%95.png';

const bannerImgs = [
  {
    src: `${PREFIX}/banner-img-1.png`,
    style: { width: 696, left: -96, top: 0 },
    className: ['animate__fadeInRight', 'animate__ahead_300ms'],
  },
  {
    src: `${PREFIX}/banner-img-2.png`,
    style: { width: 187, left: -6, top: 225 },
    className: ['animate__fadeInLeft', 'animate__delay_500ms'],
  },
  {
    src: `${PREFIX}/banner-img-3.png`,
    style: { width: 169, left: 219, top: 103 },
    className: ['animate__bounceIn', 'animate__delay_1200ms'],
  },
  {
    src: `${PREFIX}/banner-img-4.png`,
    style: { width: 225, left: 347, top: 212 },
    className: ['animate__fadeInRight', 'animate__delay_500ms'],
  },
];

const CASE_INFOS = [
  {
    title: '贷后催收告别粗放管理时代，智能质检助力科学催收',
    img: `${PREFIX}/industry-case-1.png`,
    imgXs: `${PREFIX}/industry-case-1-xs.png`,
    content: [
      {
        subTitle: '客户概况',
        desc: '微贷网于2011年7月8日上线运营。作为国内“互联网+汽车金融”的先行者，微贷网打造了车贷垂直市场的标准化发展模式，为中小微企业与个人用户提供一站式金融服务。',
      },
      {
        subTitle: '项目背景',
        desc: '催收业务长期面临政策约束及监管，但很多催收员为了业绩，不顾违规风险频踩监管红线，导致企业被罚款或者通讯线路被封，更有甚者会被约谈，不仅给公司带来经营风险，也给用户留下了难以扭转的不良体验，导致公司名誉受损。因此，通过新型技术产品完成高效的催收录音检测，对整个催收过程进行质量管控变得尤为重要。',
      },
      {
        subTitle: '业务价值',
        desc: '通过使用分析机器人,微贷网可以对每位催收人员的行为和话术进行逐条过滤与质检,按照不同的催收阶段进行识别、区分，帮助企业对催收过程实现标准化管理，业务更加规范，降低了风控管理成本，提高了催收业务效率。',
      },
    ],
  },
];

const RawQualityTestRobot: FC<IProps> = ({ className }) => {
  return (
    <Layout headPlaceholder={['#2B58F9', '#2B58F9']} headFontStyle={['light', 'light']}>
      {(visible, setFormVisible) => (
        <Wrapper className={className}>
          <Banner
            title="分析机器人"
            subTitle="业务规范与风险的智能保障"
            desc="针对催收、电销等场景下的会话数据进行多维度质检分析，全方位覆盖，助力实现合规透明、降本增效。"
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

export type IQualityTestRobotProps = IProps;
const QualityTestRobot = styled(RawQualityTestRobot)<IQualityTestRobotProps>``;
export default QualityTestRobot;
