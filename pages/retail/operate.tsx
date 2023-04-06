import { NextFunctionComponent } from 'next';
import { VFC } from 'react';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { retailUrl } from '../../src/lib/utils';
import ByVoiceFooter from '../../src/retail/components/common/ByVoiceFooter';
import { Layout } from '../../src/retail/components/Layout';
import { Features } from '../../src/retail/components/solutions/Features';
import { FlowChart } from '../../src/retail/components/solutions/FlowChart';
import { Introduction } from '../../src/retail/components/solutions/Introduction';
import { PainPoints } from '../../src/retail/components/solutions/PainPoints';
import { Photos } from '../../src/retail/components/solutions/Photos';
import { FOOTER_BG } from '../../src/retail/constants';

const ImproveEfficiencyContentWrapper = styled.div`
  display: flex;
  gap: 24px;
  .improve-part {
    margin: 40px 0px 8px;
    img {
      margin: 0px;
    }
    .improve-img {
      position: relative;
      .improve-title {
        position: absolute;
        top: 0px;
        margin: 0 auto;
        width: 100%;
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 92px;
        text-align: center;
      }
    }
    .improve-cards {
      padding: 8px 0px;
      .improve-card {
        margin-top: 16px;
        padding: 32px;
        width: 368px;
        height: 140px;
        background: #ffffff;
        border-radius: 8px;
        border: 1px solid rgba(0, 0, 0, 0.12);
        &:hover {
          border: 1px solid #f66600;
          .title {
            color: #f66600;
          }
        }
        .title {
          height: 24px;
          font-size: 16px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #2b2b2b;
          line-height: 24px;
        }
        .description {
          margin-top: 4px;
          height: 48px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: rgba(43, 43, 43, 0.85);
          line-height: 24px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    margin-top: 32px;
    flex-direction: column;
    .improve-part {
      margin: 0px;
      width: 315px;
      background: #ffffff;
      box-shadow: 0px 5px 31px 0px rgba(0, 0, 0, 0.04);
      border-radius: 8px;
      overflow: hidden;
      .improve-img {
        background: #f66600;
        .improve-title {
          line-height: 48px;
          text-align: left;
          padding-left: 16px;
        }
        img {
          height: 48px;
        }
      }
      .improve-cards {
        padding: 0px 0px 16px;
        .improve-card {
          width: 315px;
          border: none;
          padding: 0px 20px 0px 16px;
          height: auto;
          .title {
            font-weight: 400;
          }
          .description {
            font-weight: 300;
          }
        }
      }
    }
  }
`;
interface IImprovePartProps {
  title: string;
  imageUrl: string;
  cards: {
    title: string;
    description: string;
  }[];
}
const ImprovePart: VFC<IImprovePartProps> = ({ title, imageUrl, cards }) => {
  return (
    <div className="improve-part">
      <div className="improve-img">
        <img src={imageUrl} alt="" />
        <div className="improve-title">{title}</div>
      </div>
      <div className="improve-cards">
        {cards.map(({ title, description }) => (
          <div className="improve-card">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ImproveEfficiencyContent = () => {
  return (
    <ImproveEfficiencyContentWrapper>
      <ImprovePart
        title="私域引流获客"
        imageUrl="https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%9F%A9%E5%BD%A22.png"
        cards={[
          { title: '主动加微', description: '拥有自动批量添加好友的能力，并匹配智能风控规则，高效安全添加企微好友' },
          { title: '被动加微', description: '通过渠道活码，引流短链等高效触达客户，引导客户加微' },
        ]}
      />
      <ImprovePart
        title="客户管理中心"
        imageUrl="https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%AE%AD%E5%A4%B41.png"
        cards={[
          { title: '好友管理', description: '提供好友的分组管理和查询能力' },
          { title: '客户标签', description: '拥有自定义标签，智能标签，模型标签等多种客户打标和灵活运营方式' },
          { title: '数据管理', description: '全业务链的数据追踪和统计，提升运营效率' },
        ]}
      />
      <ImprovePart
        title="企业微信运营"
        imageUrl="https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%AE%AD%E5%A4%B41.png"
        cards={[
          { title: '聚合聊天', description: '拥有一个平台聚合多个企微账号好友的集中聊天管理能力' },
          { title: '智能回复', description: '匹配聊天机器人，提供对客户的自动回复和辅助运营者回复的能力' },
          { title: '内容管理', description: '提供丰富的内容素材库和内容标签管理能力，辅助运营者高效运营' },
          { title: '风控管理', description: '对运营过程监控，提供企微敏感操作设置，规避运营风险' },
        ]}
      />
    </ImproveEfficiencyContentWrapper>
  );
};

interface IPrivateOperateProps {}
// 私域运营
const PrivateOperate: NextFunctionComponent = ({}) => {
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
      {(visible, setFormVisible) => (
        <>
          <Introduction
            title="私域运营"
            imageUrl="https://cdn.byai.com/static/intro/img/retail/solutions/header/%E7%A7%81%E5%9F%9F%E8%BF%90%E8%90%A5-.png"
            description="无时无刻的关注，恰到好处的链接"
          />
          <PainPoints
            title="品牌亟待解决的客户管理痛点"
            cardList={[
              {
                description: '客户数据无法精细化管理和运用，难汇总并进行统一的分层分类',
                iconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E8%BF%90%E8%90%A5%EF%BC%88pc%EF%BC%891.png',
                hoverIconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E8%BF%90%E8%90%A5%EF%BC%88pc%EF%BC%891-1.png',
              },
              {
                description: '缺乏数据看板导致决策依据不充分，缺乏工具支撑，无法高效执行',
                iconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E8%BF%90%E8%90%A5%EF%BC%88pc%EF%BC%892.png',
                hoverIconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E8%BF%90%E8%90%A5%EF%BC%88pc%EF%BC%892-2.png',
              },
              {
                description: '无法根据每个客户特性精准匹配触达内容，造成客户黏性过低或者打扰过度而掉粉',
                iconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E8%BF%90%E8%90%A5%EF%BC%88pc%EF%BC%893.png',
                hoverIconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E8%BF%90%E8%90%A5%EF%BC%88pc%EF%BC%893-3.png',
              },
              {
                description: '优秀的导购复制难，员工流失容易带走客户资源，员工与客户沟通过程不透明',
                iconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E8%BF%90%E8%90%A5%EF%BC%88pc%EF%BC%894.png',
                hoverIconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E8%BF%90%E8%90%A5%EF%BC%88pc%EF%BC%894-4.png',
              },
            ]}
          />
          <FlowChart
            title="全生命周期管理系统，促进转化提效"
            content={ImproveEfficiencyContent()}
            buttonText="获取私域提效方案 ››"
          />
          <Features
            title="深耕需求场景，助力品牌实现营销自动化"
            buttonText="体验多维效果 ››"
            featureList={[
              {
                featureName: '数字化和自动化',
                featureIcon:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E8%BF%90%E8%90%A51.png',
                featureDescription: ' 基于数据的精细化管理和应用，让企业更懂客户，实现千人千面的私域客户运营管理',
              },
              {
                featureName: 'AI赋能私域运营',
                featureIcon:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E8%BF%90%E8%90%A52.png',
                featureDescription: ' 用行业优秀实战经验训练AI机器人，并辅助运营人员参与运营，提升客户体验和客户转化',
              },
              {
                featureName: '多维度标签管理',
                featureIcon:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E8%BF%90%E8%90%A53.png',
                featureDescription: ' 实现根据客户行为自动打标，并可结合多维度的场景灵活运用，提升运营效率',
              },
              {
                featureName: '好友分享和裂变',
                featureIcon:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E8%BF%90%E8%90%A54.png',
                featureDescription: ' 让你的客户带来更多的客户，可追踪传播路径和转化效果，不断提升裂变效率',
              },
              {
                featureName: '数据分析和管理',
                featureIcon:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E7%A7%81%E5%9F%9F%E8%BF%90%E8%90%A55.png',
                featureDescription: ' 跨渠道整合用户数据，帮助企业深度运营存量客户，不断提升ROI和客户价值',
              },
            ]}
          />
          <Photos
            title="行业领先的技术实力"
            photos={[
              {
                photoUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/photos/%E7%A7%81%E5%9F%9F%E8%BF%90%E8%90%A5-1-noradius.png',
                descriptions: ['行业领先的AI技术', '辅助社群高效运营'],
              },
              {
                photoUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/photos/%E7%A7%81%E5%9F%9F%E8%BF%90%E8%90%A5-2-noradius.png',
                descriptions: ['全域数据聚合', '实现多平台客户的集中管理'],
              },
              {
                photoUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/photos/%E7%A7%81%E5%9F%9F%E8%BF%90%E8%90%A5-3-noradius.png',
                descriptions: ['自动化营销流程引擎', '支撑多种复杂业务逻辑'],
              },
              {
                photoUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/photos/%E7%A7%81%E5%9F%9F%E8%BF%90%E8%90%A5-4-noradius.png',
                descriptions: ['领先的算法能力', '完善精准的用户画像'],
              },
            ]}
          />
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
        </>
      )}
    </Layout>
  );
};

export default PrivateOperate;
