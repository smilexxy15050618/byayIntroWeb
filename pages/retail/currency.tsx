import { NextFunctionComponent } from 'next';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { retailUrl } from '../../src/lib/utils';
import ByVoiceFooter from '../../src/retail/components/common/ByVoiceFooter';
import CommonCard2 from '../../src/retail/components/common/CommonCard2';
import CommonCard3 from '../../src/retail/components/common/CommonCard3';
import CommonHead from '../../src/retail/components/common/CommonHead';
import CustomerIconsBlock from '../../src/retail/components/common/CustomerIconsBlock';
import CustomVoice from '../../src/retail/components/CustomeVoice';
import { Layout } from '../../src/retail/components/Layout';
import { Introduction } from '../../src/retail/components/solutions/Introduction';
import { FOOTER_BG, SOLUTION_BG } from '../../src/retail/constants';

interface IMakeUpProps {}

const WrapperGeneral = styled.div`
  text-align: center;

  .introduction-desc {
    height: 89px;
    background: rgba(43, 43, 43, 0.03);
    border-radius: 10px;
    display: flex;
    font-size: 16px;
    line-height: 26px;

    .introduction-desc-item {
      flex-grow: 1;
      padding: 16px 0 20px 16px;

      .introduction-desc-main {
        color: #2b2b2b;
        font-weight: 500;
      }

      .introduction-desc-sub {
        color: rgba(43, 43, 43, 0.65);
      }
    }

    .introduction-desc-item:not(:first-child) {
      position: relative;
      &:before {
        position: absolute;
        content: '';
        width: 1px;
        height: 38px;
        background: rgba(43, 42, 53, 0.09);
        left: 0;
        top: 25px;
      }
    }
  }
`;

const CONFIG = [
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
    icon: '',
    subTitle: '用户加微',
    desc: ['一式三率七变量', '精细化加粉提质增效'],
  },
  {
    title: '会员积分',
    icon: '',
    subTitle: '高效收集',
    desc: ['合理频次高效触达客户', '有效提升复购率'],
  },
  {
    title: '大促通知',
    icon: '',
    subTitle: '快速转化',
    desc: ['AI外呼分层触达', '助力完成全年电商业绩'],
  },
  {
    title: '品牌周年庆',
    icon: '',
    subTitle: '临期处理',
    desc: ['更立体活跃的品牌形象', '加深消费频次'],
  },
];

const CONTENT_CONFIG = [
  {
    icon: SOLUTION_BG.GENERAL_ICON_1,
    text: '号码拦截检测报告',
  },
  {
    icon: SOLUTION_BG.GENERAL_ICON_2,
    text: '敏感号码拦截',
  },
  {
    icon: SOLUTION_BG.GENERAL_ICON_3,
    text: '全网高频号码拦截',
  },
  {
    icon: SOLUTION_BG.GENERAL_ICON_4,
    text: '空号停机等检测过滤',
  },
  {
    icon: SOLUTION_BG.GENERAL_ICON_5,
    text: '风险号码拦截',
  },
  {
    icon: SOLUTION_BG.GENERAL_ICON_6,
    text: '行业高频号码拦截',
  },
];

const CONTENT_CONFIG_1 = [
  {
    icon: SOLUTION_BG.GENERAL_ICON_7,
    text: '数据回收周期',
    desc: (
      <div className="card-item-desc">
        小于<span className="card-item-number">24</span>小时
      </div>
    ),
  },
  {
    icon: SOLUTION_BG.GENERAL_ICON_8,
    text: '单个加微成本',
    desc: (
      <div className="card-item-desc">
        <span className="card-item-number">2-5</span>元
      </div>
    ),
  },
  {
    icon: SOLUTION_BG.GENERAL_ICON_9,
    text: '行业平均转粉率',
    desc: (
      <div className="card-item-desc">
        <span className="card-item-number">15-38</span>%
      </div>
    ),
  },
  {
    icon: SOLUTION_BG.GENERAL_ICON_10,
    text: '数据利用率',
    desc: (
      <div className="card-item-desc">
        <span className="card-item-number">70-85</span>%
      </div>
    ),
  },
];
// 食品行业
const General: NextFunctionComponent = ({}) => {
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
      {(visible, setFormVisible) => (
        <WrapperGeneral>
          <Introduction
            title="百应零售AI私域增长"
            subTitle="解决方案"
            imageUrl="https://cdn.byai.com/static/intro/img/retail/solutions/header/%E9%80%9A%E7%94%A8banner.png"
            description={
              <>
                <Visible md lg xl xxl xxxl>
                  <div className="introduction-desc">
                    <div className="introduction-desc-item">
                      <div className="introduction-desc-main">私域引流的必备工具</div>
                      <div className="introduction-desc-sub">加粉转化率最高突破58%</div>
                    </div>
                    <div className="introduction-desc-item">
                      <div className="introduction-desc-main">陪跑1000+头部电商</div>
                      <div className="introduction-desc-sub">构建百万级私域流量池</div>
                    </div>
                    <div className="introduction-desc-item">
                      <div className="introduction-desc-main">新消费品牌信赖选择</div>
                      <div className="introduction-desc-sub">资深顾问团队，ROI有保障</div>
                    </div>
                  </div>
                </Visible>
                <Visible xs sm>
                  <span>私域引流的必备工具 陪跑1000+头部电商 新消费品牌信赖选择</span>
                </Visible>
              </>
            }
          />
          <div>
            <CommonHead
              title={
                <>
                  <Visible md lg xl xxl xxxl>
                    百应AI私域增长解决方案 &nbsp; 四大应用场景
                  </Visible>
                  <Visible xs sm>
                    百应AI私域增长解决方案 <br /> 四大应用场景
                  </Visible>
                </>
              }
            />
            <img style={{ width: 1300 }} src={SOLUTION_BG.GENERAL_CASE_1} />
          </div>
          <div style={{ background: '#f9fbfc' }}>
            <CommonHead
              title="行业领先AI私域加粉玩法"
              subTitle={
                <>
                  <Visible md lg xl xxl xxxl>
                    通过一式三率七变量，打磨AI私域加粉最佳实践，提升转化率
                  </Visible>
                  <Visible xs sm>
                    通过一式三率七变量，打磨AI私域加粉最佳实践 <br /> 提升转化率
                  </Visible>
                </>
              }
              pb={0}
              bgColor="#f9fbfc"
            />
            <img style={{ width: 1300 }} src={SOLUTION_BG.GENERAL_CASE_2} />
          </div>
          <div>
            <CommonHead
              title={
                <>
                  <Visible md lg xl xxl xxxl>
                    全程精细化报表，助力品牌高效引流
                  </Visible>
                  <Visible xs sm>
                    全程精细化报表 <br /> 助力品牌高效引流
                  </Visible>
                </>
              }
              subTitle="线路和成功团队双重保障，助您提升利润率"
            />
            <CommonCard3 content={CONTENT_CONFIG_1} />
          </div>
          <div>
            <CommonHead
              title="独特优势"
              subTitle={
                <>
                  <Visible md lg xl xxl xxxl>
                    强大的自主研发天盾系统，规避同一客户重复营销，避免对客户造成骚扰
                  </Visible>
                  <Visible xs sm>
                    强大的自主研发天盾系统，规避同一客户 <br /> 重复营销，避免对客户造成骚扰
                  </Visible>
                </>
              }
            />
            <CommonCard2 content={CONTENT_CONFIG} />
          </div>
          <Visible md lg xl xxl xxxl>
            <CustomVoice config={CONFIG} />
          </Visible>
          <Visible xs sm>
            <CustomVoice config={CONFIG} noBottomIcon={false} />
          </Visible>
          <CustomerIconsBlock padding="0 0 83px" />
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
        </WrapperGeneral>
      )}
    </Layout>
  );
};

export default General;
