import * as React from 'react';
import { Layout } from '../../../src/components/Layout';
import ByVoiceFooter from '../../../src/components/common/ByVoiceFooter';
import { FormType } from '../../../src/components/TryForm';
import Banner from '../../../src/components/common/Banner';
import IndustryCase, { IndustryItem } from '../../../src/components/voice-robot/IndustryCase';
import Features from '../../../src/components/voice-robot/Features';
import { Wrapper } from '../../../src/components/voice-robot/style';
import { FOOTER_BG } from '../../../src/constants/img-urls';
import { HOST_ENUM } from '../../../src/lib/utils';
const PREFIX = 'https://cdn.byai.com/static/intro/img/voice-robot';
const BANNER = `${PREFIX}/banner.png`;
const BANNER_BG = `//cdn.byai.com/static/intro/img/workphone/%E7%BC%96%E7%BB%84%204.png`;
const BANNER_BG_XS = `${PREFIX}/banner-bg-xs.png`;
const PC_BANNER_IMGS = [
  {
    src: `${PREFIX}/banner/p1.1.png`,
    style: { width: '650px', right: -22, top: 24 },
    className: [],
  },
  {
    src: `${PREFIX}/banner/p2.png`,
    style: { width: '234px', top: 188, right: 373 },
    className: ['animate__fadeInLeft'],
  },
  {
    src: `${PREFIX}/banner/p3.png`,
    style: { width: '126px', top: 92, right: 433 },
    className: ['animate__fadeInLeft'],
  },
  {
    src: `${PREFIX}/banner/p4.png`,
    style: { width: '165px', top: 109, right: 62 },
    className: ['animate__zoomInPluse', 'animate__delay_700ms'],
  },
  {
    src: `${PREFIX}/banner/p5.png`,
    style: { width: '126px', top: 134, right: 70 },
    className: ['animate__fadeInRight'],
  },
];

const CASE_INFOS = [
  {
    title: '深挖二次信贷需求，百应智能外呼助力银行实现精准营销',
    img: `${PREFIX}/industry-case-1.png`,
    imgXs: `${PREFIX}/industry-case-1-xs.png`,
    content: [
      {
        subTitle: '项目背景',
        desc: '由于人力有限的原因，杭州某银行一直没有对曾贷户进行正式的二次贷款营销，过去传统操作方式是将这一批客户直接转给大堂经理跟进，无法完成系统性追踪和数据汇总，形成业务和数据盲区。',
      },
      {
        subTitle: '业务价值',
        desc: (
          <>
            <IndustryItem
              title="• 曾贷户营销全覆盖"
              desc="行方每月新增的曾贷户数量在11000~13000左右，使用百应智能外呼营销解决方案后，弥补了过去的二次贷款营销空白，做到了沉睡用户高质效的营销触达。"
            />
            <IndustryItem
              title="• 提升二次贷款率"
              desc="使用百应智能外呼营销解决方案后，每月的曾贷户群体转化率维持在10%左右，平均贷款金额20万，该场景每个月为行方贡献净增贷款金额2亿以上。"
            />
          </>
        ),
      },
    ],
  },
];

export default ({ hostType = HOST_ENUM.HOST }) => {
  return (
    <Layout hostType={hostType} headPlaceholder={['#2B58F9', '#2B58F9']} headFontStyle={['light', 'light']}>
      {(Visible, setFormVisible) => (
        <Wrapper>
          <Banner
            title="电话机器人"
            subTitle="充分释放传统呼叫中心效能"
            desc="支持智能化语音交互，利用语义识别及合成、自然语言处理、大数据分析等AI技术代替人工进行呼入呼出全自动化处理。"
            btnText="免费体验"
            pcImgs={PC_BANNER_IMGS}
            mobileImg={BANNER}
            minWidthPC="1127px"
            background={[
              `url(${BANNER_BG}) no-repeat center left/cover,#2B58F9`,
              `url(${BANNER_BG_XS}) no-repeat center/cover,#2B58F9`,
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
