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
            'url(https://cdn.byai.com/static/intro/img/retail/customer-case/%E8%AF%A6%E6%83%85%E9%A1%B5/%E8%AF%81%E8%A8%80%E9%98%BF%E8%8A%99.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}></div>
    ),
    voice:
      '“百应AI私域加粉，目前是我们效果非常好的拉新方式，用高效率的数智化工具做运营和营销是大势所趋；而且百应的客户成功团队很专业，期待未来开拓更多、更深入的合作场景。”',
  },
];

const DESC =
  '阿芙精油，创办于2006年，是国内精油美妆类TOP品牌，以“阿芙，就是精油”被业内熟知。在全国一二线城市设有四百余家形象专柜，线上渠道覆盖各大主流平台，在精油及精油美妆品类始终保持较高占有率。';

const CARD_CONFIG = [
  {
    title: '核心诉求',
    desc: ['高效、低成本的拉新', '高效、高标准的转化'],
  },
  {
    title: '主要场景',
    desc: ['针对存量客户', '通过AI进行规模化私域落粉'],
  },
  {
    title: '关注指标',
    desc: ['用户触达率、加粉转化率、', '下单转化率'],
  },
];

const CARD_CONFIG_1 = [
  {
    title: '打造「公众号+企业微信」双私域池',
    desc: ['用户分层匹配，实现私域用户数最大化', '被动加微，实现短时间放量及精准筛选用户'],
  },
  {
    title: 'A/Btest数据测试，跑出最佳数据模型',
    desc: [
      '深入分析用户需求，不断进行A/Btest，实现精准匹配，促进转化',
      '依据百应专业的行业knowhow，帮助客户达成预期甚至超出预期效果',
    ],
  },
];

// 客户案例 - TOP TOY
const AfuCustomerCase: NextFunctionComponent = ({ }) => {
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
      {(visible, setFormVisible) => (
        <div>
          <Visible md lg xl xxl xxxl>
            <IntroductionCommonHead
              title={['国内精油美妆TOP品牌', '携手百应实现“数智营销”']}
              bgImg={CUSTOMER_CASE_BG.HEAD_AFJY}
            />
            <Introduction iconImg={CUSTOMER_CASE_BG.INTRO_AFJY} title="阿芙精油" desc={DESC} />

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
                desc="公众号+企微双私域池承接，实现短时间放量及筛选高净值用户"
                content={[
                  ['3000W+', '六个月触达用户人次'],
                  ['5-10%', '转化率超预期'],
                ]}
              />
            </div>

            <CustomVoice config={CONFIG} />
          </Visible>
          <Visible sm xs>
            <DetailMobileTemplate {...MOBILE_CASE.AFU} />
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

export default AfuCustomerCase;
