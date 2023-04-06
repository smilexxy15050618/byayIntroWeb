import * as React from 'react';
import { Layout } from '../../src/components/Layout';
import styled from 'styled-components';
import {
  EcologyPartnerCard,
  ReasonCard,
  ServiceCard,
  BePartnerStep,
  EcologyBanner,
} from '../../src/components/partner';
import { FormType } from '../../src/components/TryForm';
import { media } from '../../src/constants/style';

const PREFIX = 'https://cdn.byai.com/static/official-website/cooperation';
const TRADE22_IMG = `${PREFIX}/big-background.png`;
const TRADE23_IMG = `${PREFIX}/radius-background.png`;
const TRADE24_IMG = `${PREFIX}/quotation.png`;
const TRADE25_IMG = `${PREFIX}/ecology-coop-background.png`;
const TRADE26_IMG = `${PREFIX}/AI-intelligence-coop.png`;
const TRADE27_IMG = `${PREFIX}/AI-technology-coop.png`;
const TRADE28_IMG = `${PREFIX}/AI-solution-coop.png`;
const TRADE29_IMG = `${PREFIX}/why-partner-circle.png`;
const TRADE30_IMG = `${PREFIX}/perfect-circle.png`;
const TRADE31_IMG = `${PREFIX}/dots.png`;
const TRADE32_IMG = `${PREFIX}/service-AI-train.png`;
const TRADE33_IMG = `${PREFIX}/service-before.png`;
const TRADE34_IMG = `${PREFIX}/service-do.png`;
const TRADE35_IMG = `${PREFIX}/service-after.png`;
const TRADE36_IMG = `${PREFIX}/coop-process-deco.png`;
const TRADE37_IMG = `${PREFIX}/coop-process-one.png`;
const TRADE38_IMG = `${PREFIX}/coop-process-two.png`;
const TRADE39_IMG = `${PREFIX}/coop-process-three.png`;
const TRADE40_IMG = `${PREFIX}/coop-process-four.png`;
const TRADE41_IMG = `${PREFIX}/silk-lines.png`;

// 公共的大标题样式
const BIG_TITLE = `
.big-title{
  font-size: 40px;
  font-weight: 500;
  color: #000000;
  line-height: 56px;
  text-align: center;
}
`;
// 公共的小标题样式
const SMALL_TITLE = `
.small-title{
  font-size: 16px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.65);
  line-height: 32px;
  text-align: center;
}
`;
// 开放、合作、共赢
const OpenCooperateWinDiv = styled.div`
  width: 100%;
  min-height: 500px;
  background-image: url(${TRADE22_IMG});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  .radius-background {
    min-width: 1120px;
    min-height: 292px;
    border-radius: 24px;
    background: url(${TRADE23_IMG}) no-repeat center, url(${TRADE24_IMG}) no-repeat left 50px top -18px;
    background-color: #ffffff;
    box-shadow: 0px 15px 50px -3px rgba(3, 43, 183, 0.13);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    .desc {
      text-align: center;
      font-size: 19px;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.85);
      line-height: 35px;
      span {
        line-height: 50px;
        font-size: 37px;
        color: #2b58f9;
        margin: 0 15px;
      }
    }
  }
  @media (max-width: 768px) {
    .radius-background {
      min-width: 0px;
      width: 100%;
      padding: 93px 0px 68px;
      background: url(${TRADE23_IMG}) no-repeat right -361px top -8px, url(${TRADE24_IMG}) no-repeat left 12px top -18px;
      .desc {
        padding: 0px 70px;
        .first-line {
          display: inline;
        }
        span {
          display: block;
        }
      }
    }
  }
`;
// 生态合作体系
const EcologyCooperate = styled.div`
  width: 100%;
  padding: 100px 20px 120px;
  background: url(${TRADE25_IMG}) no-repeat center;
  background-size: cover;
  background-color: #f9faff;
  ${BIG_TITLE}
  .cards {
    margin-top: 70px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    padding-left: 26px;
    > div {
      margin-bottom: 20px;
      margin-right: 26px;
    }
  }
  @media (min-width: 768px) {
    .cards {
      min-width: 1200px !important;
    }
  }
  @media (max-width: 375px) {
    padding: 100px 0px 120px;
  }
`;
// 为什么要成为百应合作伙伴
const WhyBePartner = styled.div`
  width: 100%;
  min-height: 736px;
  background: url(${TRADE29_IMG}) no-repeat right -80px bottom 185px;
  padding: 100px 20px 120px;
  ${BIG_TITLE}
  ${SMALL_TITLE}
  .small-title {
    margin: 16px 0px 70px;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 18px;
    > div {
      margin-bottom: 20px;
      margin-right: 18px;
    }
  }
  @media (min-width: 768px) {
    .cards {
      min-width: 1200px !important;
    }
  }
`;
// 完善的服务体系保驾护航
const PerfectServiceSystem = styled.div`
  width: 100%;
  background: url(${TRADE30_IMG}) no-repeat left -120px top 165px, url(${TRADE31_IMG}) no-repeat right 140px bottom 80px;
  background-color: #f9faff;
  padding: 100px 20px 120px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  ${BIG_TITLE}
  ${SMALL_TITLE}
  .small-title {
    margin: 20px 0 70px;
  }
  ${media.phone`
    .small-title {
      padding: 0px 20px;
    }
  `}
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 20px;
    > div {
      margin-bottom: 20px;
      margin-right: 20px;
    }
  }
  @media (min-width: 768px) {
    .cards {
      min-width: 1200px;
    }
  }
  // @media (max-width: 1204px){
  //   .cards{
  //     width: 789px;
  //   }
  // }
`;
// 合作流程
const CoopProcess = styled.div`
  width: 100%;
  background: url(${TRADE36_IMG}) no-repeat top center, url(${TRADE29_IMG}) no-repeat right -130px bottom 140px;
  background-color: #ffffff;
  padding: 100px 20px 140px;
  ${BIG_TITLE}
  ${SMALL_TITLE}
  .small-title {
    margin: 16px 0 70px;
  }
`;
// 口号
const Slogan = styled.div`
  padding-top: 72px;
  height: 288px;
  background: url(${TRADE41_IMG}) no-repeat center;
  background-size: cover;
  background-color: #3760f4;
  display: flex;
  flex-direction: column;
  align-items: center;
  .big-title {
    font-size: 40px;
    font-weight: 500;
    color: rgba(255, 255, 255);
    line-height: 56px;
    letter-spacing: 4px;
    text-align: center;
    margin-bottom: 40px;
  }
  .btn {
    padding: 0px;
    width: 200px;
    height: 48px;
    background: #ffffff;
    border-radius: 24px;
    font-size: 20px;
    font-weight: 400;
    color: #2b58f9;
    line-height: 48px;
    text-align: center;
    cursor: pointer;
  }
  @media (max-width: 375px) {
    padding-top: 78px;
    .big-title {
      font-size: 34px !important;
    }
  }
`;
export default props => (
  <Layout>
    {(visible, setVisible) => (
      <>
        {/* 横幅 */}
        <EcologyBanner onBtnClick={() => setVisible(true, FormType.ECOLOGY)} />
        {/* 开放、合作共赢   */}
        <OpenCooperateWinDiv>
          <div className="radius-background">
            <div className="desc">
              <div className="first-line">
                作为全球领先的人工智能企业，百应坚持
                <span>开放、合作、共赢</span>
                的生态合作，坚定执行公平、公开、透明的
              </div>
              原则，与合作伙伴开放合作，共同营造健康的生态环境，实现多赢共赢。
            </div>
          </div>
        </OpenCooperateWinDiv>
        {/* 百应生态合作系统  */}
        <EcologyCooperate>
          <div className="big-title">百应生态合作体系</div>
          <div className="cards">
            <EcologyPartnerCard
              title="AI数智赋能合作"
              desc="面向大数据、云通讯、传统呼叫中心、CRM、电商平台等服务商，百应AI产品及服务将赋能合作伙伴快速打造智能联络中心，实现业务全链路效率升级，提升企业市场竞争力。"
              btnText="加入我们 >"
              imageUrl={TRADE26_IMG}
              onLinkClick={() => setVisible(true, FormType.ECOLOGY)}
            />
            <EcologyPartnerCard
              title="AI技术生态合作"
              desc="面向各行业具有开发实施能力的软件开发商，百应提供标准且丰富的API与SDK，以强大的AI底层技术平台和产品能力，完善伙伴产品及解决方案，助力伙伴商业变现。"
              btnText="加入我们 >"
              imageUrl={TRADE27_IMG}
              onLinkClick={() => setVisible(true, FormType.ECOLOGY)}
            />
            <EcologyPartnerCard
              title="AI解决方案合作"
              desc="面向具备区域市场拓展及产品销售能力的伙伴，基于百应产品矩阵及行业解决方案，共同拓展国内外政企市场，提供更智能、更高效、更精准和更有温度的服务。"
              btnText="加入我们 >"
              imageUrl={TRADE28_IMG}
              onLinkClick={() => setVisible(true, FormType.ECOLOGY)}
            />
          </div>
        </EcologyCooperate>
        {/* 为什么要成为百应合作伙伴 */}
        <WhyBePartner>
          <div className="big-title">为什么要成为百应合作伙伴</div>
          <div className="small-title">百应为合作伙伴提供全方位支持，致力打造共生共赢的合作生态</div>
          <div className="cards">
            <ReasonCard
              title="领先的技术优势"
              desc="百应科技在AI领域拥有顶级配置团队，并获IDC、中国信通院等权威机构评估认可，实现AI核心技术全栈自研，帮助企业实现数智化转型升级。"
            />
            <ReasonCard
              title="深厚的行业积累"
              desc="优秀的产研与市场渠道团队，有着10+年项目开发与行业拓展经验，我们期望与合作伙伴共生共赢，开拓更广阔的市场领域。"
            />
            <ReasonCard
              title="丰富的市场资源"
              desc="基于双方的产品服务和优势资源，联合开展市场推广、峰会交流等活动，帮助您营销和销售您的服务或兼容「百应AI」的解决方案产品。"
            />
            <ReasonCard
              title="完善的培训体系"
              desc="为合作伙伴提供以AI数智化能力为核心的解决方案支持，专业团队培训指导，提升伙伴的技术服务与业务开拓能力。"
            />
          </div>
        </WhyBePartner>
        {/* 完善的服务体系保驾护航 */}
        <PerfectServiceSystem>
          <div className="big-title">完善的服务体系保驾护航</div>
          <div className="small-title">
            300+服务网点，450+服务城市，4大客户成功团队体系，为平台生态建设及运维保障全流程护航
          </div>
          <div className="cards">
            <ServiceCard
              title="售前服务团队"
              desc="根据客户不同行业痛点、业务属性、工作流程等定制专属解决方案，助力企业业务目标达成。"
              imageUrl={TRADE32_IMG}
              onLinkClick={() => setVisible(true, FormType.ECOLOGY)}
            />
            <ServiceCard
              title="项目实施团队"
              desc="专业化的实施团队，在POC阶段、项目实施阶段、后期运维阶段实现快速响应和部署，保障系统正常稳定运行，提供专业产品培训，确保项目保质保量交付。"
              imageUrl={TRADE33_IMG}
              onLinkClick={() => setVisible(true, FormType.ECOLOGY)}
            />
            <ServiceCard
              title="AI训练团队"
              desc="具备26+个行业专业话术设计及话术训练师团队，快速实现客户应用场景话术的上线，并根据行业经验不断优化和训练，使客户的AI能力越来越完善和智能。"
              imageUrl={TRADE34_IMG}
              onLinkClick={() => setVisible(true, FormType.ECOLOGY)}
            />
            <ServiceCard
              title="售后支持团队"
              desc="实时响应客户业务咨询和需求，每周定时提供产品更新日志，同时开设百应课堂，在线分享智能营销知识，辅助客户灵活运用产品，驱动业务增长。"
              imageUrl={TRADE35_IMG}
              onLinkClick={() => setVisible(true, FormType.ECOLOGY)}
            />
          </div>
        </PerfectServiceSystem>
        {/* 合作流程 */}
        <CoopProcess>
          <div className="big-title">合作流程</div>
          <div className="small-title">COOPERATION PROCESS</div>
          <BePartnerStep
            imgs={[
              { url: TRADE37_IMG, desc: '提交申请' },
              { url: TRADE38_IMG, desc: '选择合作伙伴计划加入' },
              { url: TRADE39_IMG, desc: '完成伙伴资质认证' },
              { url: TRADE40_IMG, desc: '成为合作伙伴' },
            ]}
          />
        </CoopProcess>
        {/* 口号 */}
        <Slogan>
          <div className="big-title">数智未来&nbsp;&nbsp;&nbsp;共创共赢</div>
          <span className="btn" onClick={() => setVisible(true, FormType.ECOLOGY)}>
            成为合作伙伴
          </span>
        </Slogan>
      </>
    )}
  </Layout>
);
