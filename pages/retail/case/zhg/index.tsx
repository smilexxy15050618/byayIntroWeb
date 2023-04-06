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
          background: 'url(https://cdn.byai.com/static/intro/img/retail/customer_title_icon_2.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}></div>
    ),
    voice:
      '“我们在自热速食方向跑出了一条属于自嗨锅品牌的独特道路，也是一家非常愿意尝试新方式的公司，百应作为我们的AI合作伙伴，通过人工智能技术手段，助力我们实现了客户经营的数智化升级，跑出来的结果也是超出了我们对AI的认知和预期，期待未来能够通过更深入的合作，达到更好的效果。”',
  },
];

const DESC =
  '三年成为独角兽，自嗨锅品牌将自热火锅系列作为第一支品类投入市场，为特立独行、拒绝恪守常规的互联网原住民打造出有颜、有料、有趣、有味的自热锅系列，同时帮助都市年轻人从厨房中解放出来。引领自热锅行业潮流，成为消费升级时代领导者。';

const CARD_CONFIG = [
  {
    title: '核心诉求',
    desc: ['规模化用户触达，', '提升用户侧品牌价值'],
  },
  {
    title: '主要场景',
    desc: ['新品尝鲜', '营销活动'],
  },
  {
    title: '关注指标',
    desc: ['GMV、ROI以及', '活动成本'],
  },
];

const CARD_CONFIG_1 = [
  {
    title: '通过不断的A/Btest打造转化率最高话',
    desc: ['通过了解品牌价值定位，人群画像，根据百应行业案例知识库，进行利益点匹配', '客户意向率从43%提升至60%+'],
  },
  {
    title: '多维度优化对话话术，提升用户安全感',
    desc: ['增加来电品牌名称显示，提升品牌形象', '从优惠与服务的双重方向，达到最大的价值体现'],
  },
];

// 客户案例 - 自嗨锅
const ZhgCustomerCase: NextFunctionComponent = ({}) => {
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
      {(visible, setFormVisible) => (
        <div>
          <Visible md lg xl xxl xxxl>
            <IntroductionCommonHead
              title={['自热速食独角兽品牌', '携手百应用数智化为消费升级加码']}
              bgImg={CUSTOMER_CASE_BG.HEAD_ZHG}
            />
            <Introduction iconImg={CUSTOMER_CASE_BG.INTRO_ZHG} title="自嗨锅品牌" desc={DESC} />

            <div>
              <CommonHead title="规模化用户触达，提质增效" />
              <CustomerCaseCard config={CARD_CONFIG} />
            </div>

            <div>
              <CommonHead title="目标达成的核心方法展示" />
              <CustomerCaseCard1 config={CARD_CONFIG_1} />
            </div>

            <div>
              <CommonHead title="最终效果" />
              <CommonResult
                desc="通过不断的A/Btest，持续提升用户意向度及转化"
                content={[
                  ['50%', '触达意向客户占比'],
                  ['10%', '接通下单人数'],
                ]}
              />
            </div>

            <CustomVoice config={CONFIG} />
          </Visible>
          <Visible sm xs>
            <DetailMobileTemplate {...MOBILE_CASE.ZHG} />
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

export default ZhgCustomerCase;
