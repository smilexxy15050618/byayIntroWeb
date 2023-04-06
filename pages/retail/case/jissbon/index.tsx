import { NextFunctionComponent } from 'next';
import React from 'react';
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
            'url(https://cdn.byai.com/static/intro/img/retail/customer-case/%E8%AF%A6%E6%83%85%E9%A1%B5/%E8%AF%81%E8%A8%80%E6%9D%B0%E5%A3%AB%E9%82%A6.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}></div>
    ),
    voice:
      '“百应提供的行业数智化解决方案，节省了我们的人力成本，提高我们和客户的沟通效率，让我们很直观的看到了AI工具的效果，后续准备加码做私域场景，为用户提供更好的健康服务。”',
  },
];

const DESC =
  '坚持“两性健康领域领导者”的品牌战略，杰士邦致力于建立世界级的两性健康领导企业。积极推进两性健康全产业链布局，实现了在全球范围内包括中国、美国、泰国、印度等全球研发、市场及产业布局。';

const CARD_CONFIG = [
  {
    title: '核心诉求',
    desc: ['提高客户忠诚度及品牌认知，', '唤醒存量客户'],
  },
  {
    title: '主要场景',
    desc: ['通过百应AI增长解决方案', '进行客户唤醒触达'],
  },
  {
    title: '关注指标',
    desc: ['活动GMV、加粉转化率', '及客诉率'],
  },
];

const CARD_CONFIG_1 = [
  {
    title: '通过不同利益点设置，测试出最佳转化模型',
    desc: ['设置折扣、优惠券等不同利益点组合，测试转化效果', '通过产品交叉的利益点设置模式，提升客户复购'],
  },
  {
    title: '针对不同客户周期，进行分层运营',
    desc: [
      '对不同产品购买和不同时间存量客户进行不同外呼策略匹配',
      '针对客户对品牌不同的认知阶段，调整话术，更精准的提升品牌认知度',
    ],
  },
];

// 客户案例 - TOP TOY
const JissbonCustomerCase: NextFunctionComponent = ({ }) => {
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']} >
      {(visible, setFormVisible) => (
        <div>
          <Visible md lg xl xxl xxxl>
            <IntroductionCommonHead
              title={['高速增长的潮玩界“黑马”', '携手百应实现公域+私域双增长']}
              bgImg={CUSTOMER_CASE_BG.HEAD_JSB}
            />
            <Introduction iconImg={CUSTOMER_CASE_BG.INTRO_JSB} title="杰士邦" desc={DESC} />
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
                desc="通过AI精细化运营，跑出最佳转化模型，提升客户复购"
                content={[
                  ['70%+', '接通率'],
                  ['30-45%', '用户意向度'],
                ]}
              />
            </div>
            <CustomVoice config={CONFIG} />
          </Visible>
          <Visible sm xs>
            <DetailMobileTemplate {...MOBILE_CASE.JISSBON} />
          </Visible>
          <ByVoiceFooter
            title={
              <>
                <Visible md lg xl xxl xxxl>
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

export default JissbonCustomerCase;
