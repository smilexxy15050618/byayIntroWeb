import { NextFunctionComponent } from 'next';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { calWidthAndHeight, isPc, retailUrl } from '../../src/lib/utils';
import ByVoiceFooter from '../../src/retail/components/common/ByVoiceFooter';
import CommonBottomButton from '../../src/retail/components/common/CommonBottomButton';
import CommonCard from '../../src/retail/components/common/CommonCard';
import CommonHead from '../../src/retail/components/common/CommonHead';
import Problems from '../../src/retail/components/common/Problems';
import CustomVoice from '../../src/retail/components/CustomeVoice';
import { Layout } from '../../src/retail/components/Layout';
import { Introduction } from '../../src/retail/components/solutions/Introduction';
import { FOOTER_BG, SOLUTION_BG } from '../../src/retail/constants';

interface IFoodProps {}

const WrapperFood = styled.div`
  text-align: center;
`;

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
      '“我们是一家非常愿意尝试新方式的公司，百应作为我们的AI合作伙伴，通过人工智能技术手段，助力我们实现了客户经营的数智化升级，跑出来的结果也是超出了我们对AI的认知和预期。”',
    customer_icon: (
      <div
        className="customer-icon"
        style={{
          background: 'url(https://cdn.byai.com/static/intro/img/retail/customer_icon_2.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}></div>
    ),
    customer_name: '招财',
    customer_desc: '自嗨锅品牌CRM运营负责人',
  },
  {
    title_icon: (
      <div
        className="customer-title-icon"
        style={{
          background: 'url(https://cdn.byai.com/static/intro/img/retail/customer_title_icon_1.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}></div>
    ),
    voice:
      '“和百应的合作中，我们发现AI外呼的四点优势：能实现快速触达和高效转化；综合成本相对较低；已具备真实交互感和温度感；可智能识别精准客户，减少不必要打扰。未来，会和百应共同把我们的私域做的更好。”',
    customer_icon: (
      <div
        className="customer-icon"
        style={{
          background: 'url(https://cdn.byai.com/static/intro/img/retail/customer_icon_1.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}></div>
    ),
    customer_name: '钱丽丽',
    customer_desc: '可优比副总裁&CMO',
  },
  {
    title_icon: (
      <div
        className="customer-title-icon"
        style={{
          background: 'url(https://cdn.byai.com/static/intro/img/retail/customer_title_icon_3.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}></div>
    ),
    voice:
      '“百应AI私域加粉，目前是我们效果非常好的拉新方式，用高效率的数智化工具做运营和营销是大势所趋；而且百应的客户成功团队很专业，期待未来开拓更多、更深入的合作场景。”',
    customer_icon: (
      <div
        className="customer-icon"
        style={{
          background: 'url(https://cdn.byai.com/static/intro/img/retail/customer_icon_3.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}></div>
    ),
    customer_name: '阿芙精油',
    customer_desc: '阿芙精油私域负责人',
  },
];

const PROBLEM_CONFIG = [
  {
    title: ['离店后', '触达难'],
    desc: '消费者离店后无消费者联系方式，没办法长期培育忠诚度',
  },
  {
    title: ['毛利低', '单粉成本敏感'],
    desc: '食品行业毛利相对较低 对于单个加粉成本难以跑正',
  },
  {
    title: ['客户黏性', '相对低'],
    desc: '食品客户可替代品多，同品类竞争激烈，私域黏性培育难',
  },
  {
    title: ['私域转化', '成本高'],
    desc: '食品客单价较低 私域加粉后急需完成转化复购',
  },
  {
    title: ['新品调研', '方式单一'],
    desc: '食品上新频次快 人工调研返回数据慢、成本高',
  },
];

const CARD_CONFIG = [
  {
    title: '私域引流',
    icon: 'https://cdn.byai.com/static/intro/img/retail/solution_icon_1.png',
    subTitle: '用户加微',
    desc: ['精细化加粉链路设置', '全面提升ROI'],
  },
  {
    title: '新品调研',
    icon: 'https://cdn.byai.com/static/intro/img/retail/solution_icon_2.png',
    subTitle: '高效收集',
    desc: ['低成本、快速的收集客户', '反馈、助力快决策'],
  },
  {
    title: '节点营销',
    icon: 'https://cdn.byai.com/static/intro/img/retail/solution_icon_3.png',
    subTitle: '快速转化',
    desc: ['AI外呼强力触达', '有效提升大促ROI'],
  },
  {
    title: '库存清理',
    icon: 'https://cdn.byai.com/static/intro/img/retail/solution_icon_4.png',
    subTitle: '临期处理',
    desc: ['解决食品临期问题', 'AI强触达营销活动'],
  },
];
// 食品行业
const Food: NextFunctionComponent = ({}) => {
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
      {(visible, setFormVisible) => (
        <WrapperFood>
          <Introduction
            title="食品行业私域"
            subTitle="及会员运营解决方案"
            imageUrl="https://cdn.byai.com/static/intro/img/retail/solutions/header/%E9%A3%9F%E5%93%81banner.png"
            description="针对食品行业数智化升级需求，帮助品牌通过AI高效实现线上+线下、公域+私域的全域营销打法"
          />
          <div>
            <CommonHead title="食品行业做私域的挑战" />
            <Problems contentList={PROBLEM_CONFIG} width="224" />
            <div
              style={
                isPc()
                  ? { padding: `${calWidthAndHeight(56)} 0 ${calWidthAndHeight(80)}` }
                  : { padding: `${calWidthAndHeight(32)} 0 ${calWidthAndHeight(40)}` }
              }>
              <CommonBottomButton name="免费获取百应解决方案" pl="32px" pr="32px" />
            </div>
          </div>
          <div>
            <CommonHead
              title={
                <>
                  <Visible md lg xl xxl xxxl>
                    多需求场景覆盖，助力食品行业数字化备份
                  </Visible>
                  <Visible xs sm>
                    多需求场景覆盖 <br /> 助力食品行业数字化备份
                  </Visible>
                </>
              }
              bgColor="#F9FBFC"
            />
            <CommonCard content={CARD_CONFIG} />
          </div>
          <div>
            <CommonHead title="案例效果展示" subTitle="某低客单价品牌，分层外呼ROI实现8-15的跃升" />
            <img style={{ width: 1200 }} src={SOLUTION_BG.FOOD_CASE} />
            <div style={{ paddingBottom: 80 }}>
              <CommonBottomButton name="和我们的顾问聊聊" pl="32px" pr="32px" />
            </div>
          </div>

          <Visible md lg xl xxl xxxl>
            <CustomVoice config={CONFIG} />
          </Visible>
          <Visible xs sm>
            <CustomVoice config={CONFIG} noBottomIcon={false} />
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
        </WrapperFood>
      )}
    </Layout>
  );
};

export default Food;
