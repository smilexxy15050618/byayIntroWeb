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
            'url(https://cdn.byai.com/static/intro/img/retail/customer-case/%E8%AF%A6%E6%83%85%E9%A1%B5/intro_toptoy.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}></div>
    ),
    voice:
      '“百应整体的接通意向率和返回数据都可以，我们市面上销售得一般的产品，通过百应跑出了满意的ROI和转化！百应提供的私域的加粉和转化互相结合的设计，效果是非常不错的~” ',
  },
];

const DESC =
  'TOP TOY定位为全球潮玩集合店，产品线涵盖盲盒、积木、手办、拼装高达、娃娃模型、潮流玩具、独家产品等核心品类，致力于打造成为全球最大最全的潮流玩具集合地。';

const CARD_CONFIG = [
  {
    title: '核心诉求',
    desc: ['对存量客户进行活动触达', '及私域引流'],
  },
  {
    title: '主要场景',
    desc: ['周年庆、行业节日活动', '通知及被动加粉'],
  },
  {
    title: '关注指标',
    desc: ['触达率、下单转化率、', '加微转化率'],
  },
];

const CARD_CONFIG_1 = [
  {
    title: '用户分层触达',
    desc: [
      {
        main: '对会员用户进行多维度分层运营：',
        sub: ['私域、非私域；小程序注册半年内、注册超半年等'],
      },
      '根据A/Btest情况，针对性的进行策略及利益点匹配',
    ],
  },
  {
    title: '分类合理多次触达',
    desc: ['对第一次沟通有意向但未参加的客户进行二次短信提醒；', '对未接通客户在活动结束前夕再次进行触达'],
  },
];

// 客户案例 - TOP TOY
const ToptoyCustomerCase: NextFunctionComponent = ({ }) => {
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']} >
      {(visible, setFormVisible) => (
        <div>
          <Visible md lg xl xxl xxxl>
            <IntroductionCommonHead
              title={['高速增长的潮玩界“黑马”', '携手百应实现公域+私域双增长']}
              bgImg={CUSTOMER_CASE_BG.HEAD_TOPTOY}
            />
            <Introduction iconImg={CUSTOMER_CASE_BG.INTRO_TOPTOY} title="TOP TOY" desc={DESC} />

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
                desc="通过百应AI触达的用户消费转化率、订单数及消费金额都较高"
                content={[
                  ['20W+', '触达用户'],
                  ['9-21', 'ROI'],
                ]}
              />
            </div>
            <CustomVoice config={CONFIG} />
          </Visible>
          <Visible sm xs>
            <DetailMobileTemplate {...MOBILE_CASE.TOPTOY} />
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


export default ToptoyCustomerCase;
