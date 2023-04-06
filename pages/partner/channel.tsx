import Link from 'next/link';
import * as React from 'react';
import { Col, Hidden, Visible } from 'react-grid-system';
import styled from 'styled-components';
import { DescWrapper } from '../../src/components/DescWrapper';
import { TradeCard } from '../../src/components/homepage/TradeCard';
import { Layout } from '../../src/components/Layout';
import VoiceFooter from '../../src/components/order/footer';
import { Plan } from '../../src/components/partner';
import { Banner } from '../../src/components/service';
import { FormType } from '../../src/components/TryForm';
import { media } from '../../src/constants/style';

const BACKGOURND_XS = 'https://cdn.byai.com/static/official-website/home/qudaohezuo.png';

const TRADE1_IMG = 'https://cdn.byai.com/static/official-website/cooperation/cooperation_banner.svg';
const TRADE2_IMG = 'https://cdn.byai.com/static/official-website/cooperation/dongxiao2-1222.png';
const TRADE3_IMG = 'https://cdn.byai.com/static/official-website/cooperation/tubiao1.png';
const TRADE4_IMG = 'https://cdn.byai.com/static/official-website/cooperation/tubiao2.png';
const TRADE5_IMG = 'https://cdn.byai.com/static/official-website/cooperation/tubiao3.png';
const TRADE6_IMG = 'https://cdn.byai.com/static/official-website/cooperation/tubiao4.png';
const TRADE7_IMG = 'https://cdn.byai.com/static/official-website/cooperation/tubiao5.png';
const TRADE8_IMG = 'https://cdn.byai.com/static/official-website/cooperation/tu1.png';
const TRADE9_IMG = 'https://cdn.byai.com/static/official-website/cooperation/tu2.png';
const TRADE10_IMG = 'https://cdn.byai.com/static/official-website/cooperation/tu3-20200117.png';
const TRADE11_IMG = 'https://cdn.byai.com/static/official-website/cooperation/bg1.png';
const TRADE12_IMG = 'https://cdn.byai.com/static/official-website/cooperation/yuan1.png';
const TRADE13_IMG = 'https://cdn.byai.com/static/official-website/cooperation/yuan2.png';
const TRADE14_IMG = 'https://cdn.byai.com/static/official-website/cooperation/yuan3.png';
const TRADE15_IMG = 'https://cdn.byai.com/static/official-website/cooperation/yuan4.png';
const TRADE16_IMG = 'https://cdn.byai.com/static/official-website/cooperation/yuan5.png';
const TRADE17_IMG = 'https://cdn.byai.com/static/official-website/cooperation/yuan6.png';

type Align = {
  textAlign?: 'left' | 'right';
  flexAlign?: 'flex-start' | 'flex-end';
};

const DescCol = styled.div`
  width: 1140px;
  margin-top: 30px;
  padding: 37px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  > p {
    font-size: 56px;
    color: rgba(255, 255, 255, 1);
    line-height: 77px;
    font-weight: 300;
    white-space: nowrap;
  }
`;

const JoinBtn = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 50px;
  margin-top: 40px;
  border-radius: 40px;
  border: 1px solid #fff;
  font-size: 14px;
  color: #fff;
  line-height: 20px;
  cursor: pointer;
`;

const DescDiv = styled(Col) <Align>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${props => props.flexAlign || 'flex-end'};
  padding: 30px 0;
  > div {
    text-align: ${props => props.textAlign || 'right'};
    > p {
      color: #0d1924;
      font-size: 22px;
    }
    > div {
      color: #666666;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const SeparateCol = styled(Col)`
  display: flex;
  justify-content: center;
`;

const Separate = styled.div`
  width: 1px;
  height: 276px;
  background: rgba(238, 238, 238, 1);
`;

const PartnerDesc = styled(Col)`
  text-align: center;
  ${media.tablet`
    margin-bottom: 30px;
  `}
  ${media.phone`
    margin-bottom: 30px;
  `}
  > div {
    height: 30px;
    padding-top: 30px;
    font-size: 22px;
    font-weight: 500;
    color: rgba(13, 25, 36, 1);
    line-height: 30px;
  }
  > p {
    height: 60px;
    padding-top: 50px;

    font-size: 14px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 20px;
    text-align: left;
    ${media.tablet`
      text-align: center;
      padding-left: 30px;
      padding-right: 30px;
    `}
    ${media.phone`
      text-align: center;
      padding-left: 30px;
      padding-right: 30px;
    `}
  }
`;

const TradeMoreCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: rgba(13, 25, 36, 1);
  line-height: 22px;
  margin-top: 60px;
  span {
    cursor: pointer;
  }
  .iconfont {
    display: inline-block;
    margin-left: 10px;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    color: #3153d4;
    .iconfont {
      font-size: 20px;
      transform: translateX(5px);
    }
  }
`;

const ApplyCol = styled(Col) <{ img: string }>`
  display: flex;
  justify-content: center;
  > p {
    width: 150px;
    height: 150px;
    background-image: ${props => `url(${props.img})`};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    color: rgba(49, 83, 212, 1);
    line-height: 22px;
    // margin-top: 100px;
    margin-bottom: 80px;
  }
`;

export default props => (
  <Layout>
    {(visible, setVisible) => (
      <>
        <Banner
          backgroundImage={TRADE1_IMG}
          mobileBackgroundImage={BACKGOURND_XS}
          text="申请合作"
          title={
            <>
              邀您共享万亿级「智能+」
              <br />
              企业服务市场红利
            </>
          }
          onBtnClick={() => setVisible(true, FormType.PARTNER)}
        />
        <Visible md lg xl xxl xxxl>
          <DescWrapper
            title="百应合作伙伴计划"
            desc="百应「智能+」生态为伙伴提供多样化、深层次的合作模式，共享万亿级市场红利">
            <DescDiv lg={8}>
              <div>
                <p>「智能+」产品</p>
                <div>智能电话机器人，智能名片、智能呼叫中心</div>
              </div>
              <div style={{ marginRight: 60 }}>
                <p>移动开发</p>
                <div>研发测试、运营中台、后台服务</div>
              </div>
              <div>
                <p>信息安全</p>
                <div>数据安全体系，信息安全管理制度</div>
              </div>
            </DescDiv>
            <Col lg={8}>
              <img style={{ marginTop: 60 }} src={TRADE2_IMG} />
            </Col>
            <DescDiv lg={8} textAlign="left" flexAlign="flex-start">
              <div>
                <p>数据化运营体系</p>
              </div>
              <div style={{ marginLeft: 60 }}>
                <p>toB企业服务</p>
              </div>
              <div>
                <p>AI链接万物</p>
              </div>
            </DescDiv>
          </DescWrapper>
        </Visible>
        <Visible xs sm>
          <DescWrapper
            title="百应合作伙伴计划"
            desc="百应「智能+」生态为伙伴提供多样化、深层次的合作模式，共享万亿级市场红利">
            <Plan />
          </DescWrapper>
        </Visible>
        <DescWrapper
          title="合作伙伴优势"
          desc="提供全方位的资源合作与技术支持"
          backgroundColor="#f8f9fb"
          style={{ paddingBottom: 100 }}>
          <PartnerDesc lg={4} md={8} sm={12}>
            <img src={TRADE3_IMG} />
            <div>培训赋能支持</div>
            <p>提供技术培训赋能，快速提升合作伙伴SaaS产品应用和技术服务能力</p>
          </PartnerDesc>

          <Hidden xs sm>
            <SeparateCol lg={1} md={3}>
              <Separate />
            </SeparateCol>
          </Hidden>

          <PartnerDesc lg={4} md={8} sm={12}>
            <img src={TRADE4_IMG} />
            <div>市场营销支持</div>
            <p>提供市场资源相关的支持，包括品牌推广和客户资源分享等</p>
          </PartnerDesc>
          <Hidden xs sm>
            <SeparateCol lg={1}>
              <Separate />
            </SeparateCol>
          </Hidden>
          <PartnerDesc lg={4} md={8} sm={12}>
            <img src={TRADE5_IMG} />
            <div>资源支持</div>
            <p>百应科技对不同的级别的合作伙伴提供相应的资源服务支持</p>
          </PartnerDesc>
          <Hidden xs sm>
            <SeparateCol lg={1}>
              <Separate />
            </SeparateCol>
          </Hidden>
          <PartnerDesc lg={4} md={8} sm={12}>
            <img src={TRADE6_IMG} />
            <div>技术支持</div>
            <p>拥有专属的合作伙伴经理解决方案、架构师技术指导、售前技术支持</p>
          </PartnerDesc>
          <Hidden xs sm>
            <SeparateCol lg={1}>
              <Separate />
            </SeparateCol>
          </Hidden>
          <PartnerDesc lg={4} md={8} sm={12}>
            <img src={TRADE7_IMG} />
            <div>业务支持 </div>
            <p>由专属的渠道经理提供业务和商务支持，在「智能+」企业服务领域取得成功</p>
          </PartnerDesc>
        </DescWrapper>
        <DescWrapper title="合作案例" desc="COOPERATION CASE">
          <TradeCard
            align="flex-start"
            coverImage={TRADE8_IMG}
            trade="互联网"
            company="数心网络科技（苏州）有限公司"
            title="营销升级，推广更高效"
            desc="帮助企业实现AI营销赋能，提供更优质的专业解决方案和服务，实现获客营销方式升级，完成智能化销售转型，提升营销和服务效率。"
            info="服务900+客户，500万年销售额"
          />
          <TradeCard
            align="center"
            coverImage={TRADE9_IMG}
            trade="互联网"
            company="深圳百应智能科技有限公司"
            title="CRM助力，意向更精准"
            desc="为各行业用户提供智能语音系统，助力企业提升销售效率，节省成本投入；意向客户精准筛选，通过CRM系统自动沉淀。"
            info="服务1000+客户，600万年销售额"
          />
          <TradeCard
            align="flex-end"
            coverImage={TRADE10_IMG}
            trade="互联网"
            company="山东数亿邦网络科技有限公司"
            title="智能外呼，获客更轻松"
            desc="帮助企业优化管理流程，节省大量人力成本；提供AI电话智能外呼，解决渠道获客难题；释放企业市场营销能力，为行业客户创造价值。"
            info="服务500+客户，300万年销售额"
          />
          <TradeMoreCol lg={24}>
            <Link href="/solutions">
              <a>
                <span>
                  更多案例
                  <i className="iconfont iconchakangengduojiantou" />
                </span>
              </a>
            </Link>
          </TradeMoreCol>
        </DescWrapper>
        <DescWrapper title="合作流程" desc="COOPERATION PROCESS" background={TRADE11_IMG}>
          <ApplyCol lg={4} img={TRADE12_IMG}>
            <p>提交申请</p>
          </ApplyCol>
          <ApplyCol lg={4} img={TRADE13_IMG}>
            <p>线下审核</p>
          </ApplyCol>
          <ApplyCol lg={4} img={TRADE14_IMG}>
            <p>洽谈方案</p>
          </ApplyCol>
          <ApplyCol lg={4} img={TRADE15_IMG}>
            <p>签约合作</p>
          </ApplyCol>
          <ApplyCol lg={4} img={TRADE16_IMG}>
            <p>启动培训</p>
          </ApplyCol>
          <ApplyCol lg={4} img={TRADE17_IMG}>
            <p>认证授权</p>
          </ApplyCol>
        </DescWrapper>
        <VoiceFooter
          title="互联网下半场，拼的是协同效应"
          mTitle1="互联网下半场"
          mTitle2="拼的是协同效应"
          btn="免费体验"
          img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
          onBtnClick={() => setVisible(true)}
        />
      </>
    )}
  </Layout>
);
