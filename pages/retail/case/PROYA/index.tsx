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
            'url(https://cdn.byai.com/static/intro/img/retail/customer-case/%E8%AF%A6%E6%83%85%E9%A1%B5/%E8%AF%81%E8%A8%80%E7%8F%80%E8%8E%B1%E9%9B%85.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}></div>
    ),
    voice:
      '“人工智能营销触达，低成本、更高效，目前AI语音机器人已经非常拟人和成熟，能够帮助我们为客户带来更便捷的情感关怀。”',
  },
];

const DESC =
  '珀莱雅化妆品股份有限公司是国内知名化妆品上市企业，自2003年诞生以来，秉承着年轻前沿科技力为品牌核心实力，成为顺应时代变迁，快速渗透并影响年轻消费人群的“国货之光”品牌之一。';

const CARD_CONFIG = [
  {
    title: '核心诉求',
    desc: ['大促活动营销高效触达，', '提升用户复购率'],
  },
  {
    title: '主要场景',
    desc: ['特殊节日会员关怀，', '细分场景提升用户体验'],
  },
  {
    title: '关注指标',
    desc: ['用户触达率、GMV转化、', 'ROI及客诉率'],
  },
];

const CARD_CONFIG_1 = [
  {
    title: '话术设计关怀化',
    desc: ['在特殊节日、主题活动关怀用户，提升品牌形象', '话术链接情感化，追求跟用户形成更亲密的关系'],
  },
  {
    title: '全生命周期会员触达运营',
    desc: ['针对不同用户阶段，匹配不同触达场景', '激活、体验、复购、会员活跃、入会等多维覆盖'],
  },
];

const ProyaCustomerCase: NextFunctionComponent = ({ }) => {
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']} >
      {(visible, setFormVisible) => (
        <div>
          <Visible md lg xl xxl xxxl>
            <IntroductionCommonHead
              title={['国货之光化妆品上市企业', '携手百应用“AI”实现数智营销服务体验']}
              bgImg={CUSTOMER_CASE_BG.HEAD_BLY}
            />
            <Introduction iconImg={CUSTOMER_CASE_BG.INTRO_BLY} title="珀莱雅" desc={DESC} />

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
                desc="实现大促活动短时间、规模化触达数百万用户，提升营销GMV"
                content={[
                  ['100W+', '大促活动触达用户'],
                  ['30+', '活动ROI'],
                ]}
              />
            </div>

            <CustomVoice config={CONFIG} />
          </Visible>
          <Visible sm xs>
            <DetailMobileTemplate {...MOBILE_CASE.PROYA} />
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


export default ProyaCustomerCase;
