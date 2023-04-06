import { NextFunctionComponent } from 'next';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { retailUrl } from '../../src/lib/utils';
import ByVoiceFooter from '../../src/retail/components/common/ByVoiceFooter';
import CommonBottomButton from '../../src/retail/components/common/CommonBottomButton';
import CommonCard from '../../src/retail/components/common/CommonCard';
import CommonHead from '../../src/retail/components/common/CommonHead';
import Problems from '../../src/retail/components/common/Problems';
import CustomVoice from '../../src/retail/components/CustomeVoice';
import { Layout } from '../../src/retail/components/Layout';
import { Introduction } from '../../src/retail/components/solutions/Introduction';
import { FOOTER_BG, SOLUTION_BG } from '../../src/retail/constants';

interface IMakeUpProps {}

const WrapperMakeUp = styled.div`
  text-align: center;
`;

const CONFIG = [
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
];

const PROBLEM_CONFIG = [
  {
    title: ['产品', '可替代性强'],
    desc: '美妆产品的同质化较高， 不同品牌产品差别相对较小',
  },
  {
    title: ['流量成本', '越来越贵'],
    desc: '各大电商平台流量成本激增， 广告费用越来越高',
  },
  {
    title: ['大量沉睡客户', '难激活'],
    desc: '单一的短信、包裹卡触达率及打开率低，效果弱',
  },
  {
    title: ['客户', '难精细化运营'],
    desc: '客户标签不清晰，难以做分层等精细化触达及运营',
  },
];

const CARD_CONFIG = [
  {
    title: '私域引流',
    icon: 'https://cdn.byai.com/static/intro/img/retail/solution_icon_1.png',
    subTitle: '用户加微',
    desc: ['一式三率七变量', '精细化加粉提质增效'],
  },
  {
    title: '会员积分',
    icon: 'https://cdn.byai.com/static/intro/img/retail/solution_icon_8.png',
    subTitle: '高效收集',
    desc: ['合理频次高效触达客户', '有效提升复购率'],
  },
  {
    title: '大促通知',
    icon: 'https://cdn.byai.com/static/intro/img/retail/solution_icon_3.png',
    subTitle: '快速转化',
    desc: ['AI外呼分层触达', '助力完成全年电商业绩'],
  },
  {
    title: '品牌周年庆',
    icon: 'https://cdn.byai.com/static/intro/img/retail/solution_icon_9.png',
    subTitle: '临期处理',
    desc: ['更立体活跃的品牌形象', '加深消费频次'],
  },
];
// 食品行业
const MakeUp: NextFunctionComponent = ({}) => {
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
      {(visible, setFormVisible) => (
        <WrapperMakeUp>
          <Introduction
            title="美妆行业私域"
            subTitle="及会员运营解决方案"
            imageUrl="https://cdn.byai.com/static/intro/img/retail/solutions/header/%E7%BE%8E%E5%A6%86banner.png"
            description="针对美妆行业私域增长、活动营销提质增效需求，帮助品牌实现线上+线下、公域+私域的全域营销打法"
          />
          <div>
            <CommonHead title="美妆行业面临的问题" />
            <Problems contentList={PROBLEM_CONFIG} />
            <div style={{ padding: '56px 0 80px' }}>
              <CommonBottomButton name="免费获取百应解决方案" pl="32px" pr="32px" />
            </div>
          </div>
          <div>
            <CommonHead
              title={
                <>
                  <Visible md lg xl xxl xxxl>
                    全域营销增长，助力美妆行业数字化
                  </Visible>
                  <Visible xs sm>
                    全域营销增长 <br /> 助力美妆行业数字化
                  </Visible>
                </>
              }
              bgColor="#F9FBFC"
            />
            <CommonCard content={CARD_CONFIG} />
          </div>
          <div>
            <CommonHead
              title="案例效果展示"
              subTitle="某中高客单护肤品牌，打造「公众号」+「企业微信」双私域池"
              pb={0}
            />
            <img style={{ width: 1200 }} src={SOLUTION_BG.BP_CASE} />
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
        </WrapperMakeUp>
      )}
    </Layout>
  );
};

export default MakeUp;
