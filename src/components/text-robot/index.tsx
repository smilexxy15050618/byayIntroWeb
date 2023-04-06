import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import Features from './Features';
import { Wrapper } from '../voice-robot/style';
import IndustryCase, { IndustryItem } from '../voice-robot/IndustryCase';
import Banner from '../common/Banner';
import { Layout } from '../Layout';
import { FormType } from '../TryForm';
import { FOOTER_BG } from '../../constants/img-urls';
import ByVoiceFooter from '../common/ByVoiceFooter';

interface IProps {
  className?: string;
  children?: ReactNode;
}
const PREFIX = 'https://cdn.byai.com/static/intro/img/text-robot';

const MOBILE_BANNER = `${PREFIX}/banner/banner-img-xs.png`;
const BANNER_BG_CIRCLE = '//cdn.byai.com/static/intro/img/robot-banner-bg/banner-circle.png';
const BANNER_BG_TRIANGLE = '//cdn.byai.com/static/intro/img/robot-banner-bg/banner-triangle.png';
const MOBILE_BANNER_BG = '//cdn.byai.com/static/intro/img/workphone/banner-mobile%E5%BA%95.png';

const bannerImgs = [
  {
    src: `${PREFIX}/banner/p1.png`,
    style: { width: 680, left: -83, top: 42 },
    className: [],
  },
  {
    src: `${PREFIX}/banner/p2.png`,
    style: { width: 321, left: 232, top: 161 },
    className: ['animate__fadeInUp', 'animate__ahead_400ms'],
  },
  {
    src: `${PREFIX}/banner/p3.png`,
    style: { width: 99, left: 96, top: 96 },
    className: ['animate__rotateIn', 'animate__delay_800ms'],
  },
  {
    src: `${PREFIX}/banner/p4.png`,
    style: { width: 89, left: 188, top: 181 },
    className: ['animate__fadeInLeft', 'animate__delay_400ms'],
  },
  {
    src: `${PREFIX}/banner/p5.png`,
    style: { width: 104, left: 405, top: 52 },
    className: ['animate__fadeInRight', 'animate__delay_400ms'],
  },
];

const CASE_INFOS = [
  {
    title: '深入政务场景，文本机器人让社保业务办理更便捷',
    img: `${PREFIX}/industry-case-1.png`,
    imgXs: `${PREFIX}/industry-case-1-xs.png`,
    content: [
      {
        subTitle: '项目背景',
        desc: '为加快建设全国一体化在线政务服务平台，推动政务服务从政府供给导向向群众需求导向转变，从“线下跑”向“网上办” 、“分头办”向“协同办”转变，全面推进“一网通办” ，让老百姓摆脱效率低下的传统政务大厅办事方式，转向通过互联网远程方式咨询和办理业务，享受到“便捷且有温度” 的政务服务。',
      },
      {
        subTitle: '业务价值',
        desc: (
          <>
            <IndustryItem
              title="• 主动式服务"
              desc="通过短信、文字客服等方式主动推送服务事项、通知政策调整等重要信息，保障参保群众各项社保权益，实现主动办。运行期间，精准主动办短信提醒三万余条。"
            />
            <IndustryItem
              title="• 陪伴式服务"
              desc="社保易窗有实时在线的工作人员，运用语音、文字、视频等综合手段，以一对一陪伴式服务，解决哪儿办、怎么办的痛点和堵点，实现贴心办。已累计服务近25万人次，办件2000余件，日均服务量也由上线初期的185人次，上升至目前的980人次。"
            />
            <IndustryItem
              title="• 智能式服务"
              desc="社保易窗大脑利用完善的知识库，使服务对象无论何时何地，均可通过平台获取权威、精准、易懂的政策解读、经办解答，实现智能办。目前，平台社保知识库共更新60版，共计一万余条，基本覆盖了各类经办业务。"
            />
          </>
        ),
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
            title="文本机器人"
            subTitle="更善解人意的AI员工"
            desc="7*24小时在线，支持多渠道与客户建立连接，能主动通过文本交流获取客户联系方式，持续为客户创造更优质体验。"
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
