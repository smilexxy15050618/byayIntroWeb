import { NextFunctionComponent } from 'next';
import { Visible } from 'react-grid-system';
import { retailUrl } from '../../../../src/lib/utils';
import ByVoiceFooter from '../../../../src/retail/components/common/ByVoiceFooter';
import CommonHead from '../../../../src/retail/components/common/CommonHead';
import CustomerCaseCard from '../../../../src/retail/components/customerCase/CommonCard';
import CustomerCaseCard1 from '../../../../src/retail/components/customerCase/CommonCard1';
import IntroductionCommonHead from '../../../../src/retail/components/customerCase/CommonHead';
import CommonResult from '../../../../src/retail/components/customerCase/CommonResult';
import Introduction from '../../../../src/retail/components/customerCase/Introduction';
import CustomVoice from '../../../../src/retail/components/CustomeVoice';
import DetailMobileTemplate from '../../../../src/retail/components/detail-mobile-template';
import { Layout } from '../../../../src/retail/components/Layout';
import { CUSTOMER_CASE_BG, FOOTER_BG } from '../../../../src/retail/constants';
import { MOBILE_CASE } from '../../../../src/retail/constants/case';

const CONFIG = [
  {
    title_icon: (
      <div
        className="customer-title-icon"
        style={{
          background:
            'url(https://cdn.byai.com/static/intro/img/retail/customer-case/%E8%AF%A6%E6%83%85%E9%A1%B5/%E9%A1%BE%E5%AE%B6pc%E8%AF%A6%E6%83%85%E9%A1%B5%E8%B5%A0%E8%A8%80.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}></div>
    ),
    voice:
      '“我们和百应合作很长时间了，整体的AI外呼效果很好，百应基于家居行业痛点构建的「AI智能售后系统」助力我们打造专业化、细分化、标准化的售后服务流程，为用户带来更便捷的消费体验。”',
  },
];

const DESC =
  '顾家家居是全球知名的家居上市企业，杭州2022年第19届亚运会官方床垫独家供应商，以“家”为原点，致力于为全球家庭提供健康、舒适、环保的家居解决方案。';

const CARD_CONFIG = [
  {
    title: '核心诉求',
    desc: ['降本增效，', '提升客户服务满意度'],
  },
  {
    title: '主要场景',
    desc: ['订单核实、发货通知、', '满意度回访'],
  },
  {
    title: '关注指标',
    desc: ['接通率、信息采集准确率、', '综合成本、AI和用户交互体感'],
  },
];

const CARD_CONFIG_1 = [
  {
    title: '话术设计关怀化',
    desc: [
      '不断探索新的场景测试模型，平均每个场景打磨20+次',
      '完善NLP知识库，通过ASR、NLU识别提取关键信息，客户标签信息采集准确率超85%',
      '通过快速收集客户痛点和问题，实现减少客户投诉、提升客户满意度',
    ],
  },
  {
    title: '全生命周期会员触达运营',
    desc: [
      '企业品牌号码认证，提升用户信任度',
      '天盾策略检测易投诉人群，限制拨打频次',
      '通过API互通系统，实时回传外呼中采集到的信息，高效便捷',
    ],
  },
];

const KukaCustomerCase: NextFunctionComponent = ({}) => {
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
      {(visible, setFormVisible) => (
        <div>
          <Visible lg md xl>
            <IntroductionCommonHead
              title={['享誉全球的家居品牌', '携手百应用“AI”实现数智化服务体验']}
              bgImg={CUSTOMER_CASE_BG.HEAD_KUKA}
            />
            <Introduction iconImg={CUSTOMER_CASE_BG.INTRO_KUKA} title="顾家家居" desc={DESC} />

            <div>
              <CommonHead title="实现私域用户数、GMV联动提升" />
              <CustomerCaseCard config={CARD_CONFIG} />
            </div>

            <div>
              <CommonHead title="目标达成的核心方法展示" />
              <CustomerCaseCard1 config={CARD_CONFIG_1} />
            </div>

            <div>
              <CommonHead title="最终效果" />
              <CommonResult
                desc="售后回访场景，支持无上限并发，平均效率提⾼2-4倍"
                content={[
                  ['66%+', '接通率'],
                  ['90%+', '成本减低'],
                ]}
              />
            </div>
            <CustomVoice config={CONFIG} />
          </Visible>
          <Visible sm xs>
            <DetailMobileTemplate {...MOBILE_CASE.KUKA} />
          </Visible>
          <ByVoiceFooter
            title={
              <>
                <Visible xl lg md>
                  <span>点击获取专属品牌增长解决方案</span>
                </Visible>
                <Visible xs sm>
                  <span>
                    点击获取
                    <br />
                    专属品牌增长解决方案
                  </span>
                </Visible>
              </>
            }
            desc="百应零售行业专家免费诊断"
            btnText="与我联系"
            background={`url(${FOOTER_BG})`}
            onClick={() => {
              window.open(retailUrl('/form?formType=1'));
            }}
          />
        </div>
      )}
    </Layout>
  );
};

export default KukaCustomerCase;
