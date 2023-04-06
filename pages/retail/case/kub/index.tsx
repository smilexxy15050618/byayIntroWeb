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
            'url(https://cdn.byai.com/static/intro/img/retail/customer-case/%E8%AF%A6%E6%83%85%E9%A1%B5/%E8%AF%81%E8%A8%80%E5%8F%AF%E4%BC%98%E6%AF%94.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}></div>
    ),
    voice:
      '“和百应的合作中，我们发现AI外呼的四点优势：能实现快速触达和高效转化；综合成本相对较低；已具备真实交互感和温度感；可智能识别精准客户，减少不必要打扰。未来，会和百应共同把我们的私域做的更好。”',
  },
];

const DESC =
  'kub可优比，成立于2009年，是全球母婴优标准的创领者。为满足宝贝成长的所有需求，为宝贝提供0-6岁的全方位成长解决方案，打造高品质、高颜值、高性价比的母婴一站式购物平台。';

const CARD_CONFIG = [
  {
    title: '核心诉求',
    desc: ['提升私域用户增长、', '推广新产品'],
  },
  {
    title: '主要场景',
    desc: ['通过百应AI将新会员', '引流到私域'],
  },
  {
    title: '关注指标',
    desc: ['加粉转化率、', '单客成本'],
  },
];

const CARD_CONFIG_1 = [
  {
    title: '主被动结合的加粉模式，提升转化效果',
    desc: ['针对A/B不同意向客户，进行主被动不同的加粉链路', '降低企业加粉承接压力，提升客户数据安全度'],
  },
  {
    title: '利益点+关怀双模式，关注宝宝成长',
    desc: [
      '通过新人礼包及专业指导服务双重利益点，进行私域引流',
      '帮助宝妈提升宝宝日常呵护知识，给宝妈介绍更多的呵护宝宝产品',
    ],
  },
];

const KubCustomerCase: NextFunctionComponent = ({ }) => {
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']} >
      {(visible, setFormVisible) => (
        <div>
          <Visible md lg xl xxl xxxl>
            <IntroductionCommonHead
              title={['高速增长的潮玩界“黑马”', '携手百应实现公域+私域双增长']}
              bgImg={CUSTOMER_CASE_BG.HEAD_KYB}
            />
            <Introduction iconImg={CUSTOMER_CASE_BG.INTRO_KYB} title="可优比" desc={DESC} />

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
                desc="AI+短信结合，成为最高效私域引流方式"
                content={[
                  ['300%', '月均新增私域用户涨幅'],
                  ['80%', '单客成本降低'],
                ]}
              />
            </div>

            <CustomVoice config={CONFIG} />
          </Visible>
          <Visible sm xs>
            <DetailMobileTemplate {...MOBILE_CASE.KUB} />
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

export default KubCustomerCase;
