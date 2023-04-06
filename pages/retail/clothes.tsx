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

interface IClothesProps {}

const ClothesWrapper = styled.div`
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
    title: ['传统手段触达', '转化低'],
    desc: '会员触达手段单一，转化率低',
  },
  {
    title: ['会员激活、复购', '成本高'],
    desc: '传统以人力方式触达客户，成本较高',
  },
  {
    title: ['线下门店运营', '难以跟上市场新变化'],
    desc: '地区加盟商运营能力弱，配合度不高',
  },
  {
    title: ['庞大沉睡客户', '难以规模化唤醒'],
    desc: '沉睡客户量大，企业数字化难',
  },
];

const CARD_CONFIG = [
  {
    title: '私域引流',
    icon: 'https://cdn.byai.com/static/intro/img/retail/solution_icon_1.png',
    subTitle: '用户加微',
    desc: ['客户分层运营', '精细化加粉提质增效'],
  },
  {
    title: '生日关怀',
    icon: 'https://cdn.byai.com/static/intro/img/retail/solution_icon_5.png',
    subTitle: '到店率',
    desc: ['合理频次高效触达客户', '有效提升到店率'],
  },
  {
    title: '主题活动',
    icon: 'https://cdn.byai.com/static/intro/img/retail/solution_icon_6.png',
    subTitle: '到店转化',
    desc: ['AI外呼强力触达', '有效提升到店转化'],
  },
  {
    title: '新店开业',
    icon: 'https://cdn.byai.com/static/intro/img/retail/solution_icon_7.png',
    subTitle: '临期处理',
    desc: ['引流全自动化进行', '无须导购花费大量时间'],
  },
];
// 鞋服行业
const Clothes: NextFunctionComponent = ({}) => {
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
      {(visible, setFormVisible) => (
        <ClothesWrapper>
          <Introduction
            title="鞋服行业私域"
            subTitle="及会员运营解决方案"
            imageUrl="https://cdn.byai.com/static/intro/img/retail/solutions/header/%E6%9C%8D%E8%A3%85banner.png"
            description="针对鞋类和服装行业私域引流、活动营销、会员关怀等触达需求，帮助品牌实现数智化全域营销打法。"
          />
          <div>
            <CommonHead title="传统鞋服行业面临的问题" />
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
                    深耕私域+营销场景，助力鞋服行业数字化
                  </Visible>
                  <Visible xs sm>
                    深耕私域+营销场景 <br /> 助力鞋服行业数字化
                  </Visible>
                </>
              }
              bgColor="#F9FBFC"
            />
            <CommonCard content={CARD_CONFIG} />
          </div>
          <div>
            <CommonHead title="案例效果展示" subTitle="某连锁服饰品牌，通过AI提升引流到店人数" pb={0} />
            <img style={{ width: 1200 }} src={SOLUTION_BG.CLOTHES_CASE} />
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
        </ClothesWrapper>
      )}
    </Layout>
  );
};

export default Clothes;
