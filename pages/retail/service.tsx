import { Anotice, Confirm, ContinuousService, LearnFrom, ReturnVisit, UnConfirm } from '@indata/icon-byai';
import { NextFunctionComponent } from 'next';
import { ReactNode } from 'react';
import { Visible } from 'react-grid-system';
import styled, { ThemeProvider } from 'styled-components';
import { retailUrl } from '../../src/lib/utils';
import ByVoiceFooter from '../../src/retail/components/common/ByVoiceFooter';
import { Layout } from '../../src/retail/components/Layout';
import { Features } from '../../src/retail/components/solutions/Features';
import { FlowChart } from '../../src/retail/components/solutions/FlowChart';
import { Introduction } from '../../src/retail/components/solutions/Introduction';
import { PainPoints } from '../../src/retail/components/solutions/PainPoints';
import { Photos } from '../../src/retail/components/solutions/Photos';
import { FOOTER_BG } from '../../src/retail/constants';

interface IMeetNeedsContent {
  iconUrl: ReactNode;
  title: string;
  description: string[];
}
interface IVSContent {
  title: string;
  description: string[];
}
const MeetNeedsContentWrapper = styled.div`
  display: flex;
  gap: 24px;
  margin: 48px 0px 8px;
  .card {
    display: flex;
    align-items: center;
    padding: 30px 0px 40px;
    width: 282px;
    height: 232px;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.16);
    img {
      width: 48px;
      height: 48px;
      margin: 0px;
    }
    .title {
      margin-top: 12px;
      margin-bottom: 11px;
      height: 32px;
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #f66600;
      line-height: 32px;
    }
    .description {
      display: flex;
      flex-direction: column;
      align-items: center;
      .description-item {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(43, 43, 43, 0.85);
        line-height: 24px;
      }
    }
    .byicon {
      font-size: 38px;
    }
    &:hover {
      border: 1px solid #f66600;
    }
  }
  @media (max-width: 768px) {
    margin: 40px 0px 0px;
    display: grid;
    grid-template-columns: repeat(2, 164px);
    grid-gap: 16px;
    grid-auto-rows: 142px;
    .card {
      padding: 0px 0px 0px 16px;
      width: 164px;
      height: 142px;
      box-shadow: 0px 4px 16px 0px rgba(128, 131, 141, 0.1);
      border-radius: 8px;
      display: block;
      .title {
        margin: 0px;
        width: 140px;
        height: 24px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #2b2b2b;
        line-height: 24px;
      }
      .description {
        width: 140px;
        height: 48px;
        font-family: PingFangSC-Light, PingFang SC;
        line-height: 24px;
        display: block;
        .description-item {
          font-size: 14px;
          font-weight: 300;
          color: rgba(43, 43, 43, 0.85);
        }
      }
    }
  }
`;
const VSContentWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  margin-bottom: 8px;
  background: #f9fbfc;
  border-radius: 8px;
  overflow: hidden;
  margin-top: 64px;
  img {
    position: absolute;
    width: 173px;
    height: 173px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    transform: translateY(16px);
  }
  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      width: 100%;
      height: 32px;
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 32px;
      text-align: center;
    }
    &:nth-child(1) {
      .title {
        background: #f66600;
      }
    }

    &:nth-child(2) {
      .title {
        background: #2b2b2b;
      }
    }
    .description {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 64px 0px 58px;
      .byicon {
        font-size: 21px;
        margin-right: 8px;
      }
      .description-item {
        height: 24px;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #2b2b2b;
        line-height: 24px;
      }
    }
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    img {
      right: -200px;
      width: 88px;
      height: 88px;
    }
    .robot {
      background: #ffffff;
    }
    .human {
      background: #f9fbfc;
    }

    & > div {
      align-items: flex-start;
      border-radius: 16px;
      overflow: hidden;
      .title {
        margin: 0px;
        height: 32px;
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 32px;
      }

      &:nth-child(2) {
        .title {
          position: absolute;
          bottom: 0px;
          background: #2b2b2b;
        }
      }
      .description {
        padding: 18px 0px 38px 22px;
        .description-item {
          height: 24px;
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #2b2b2b;
          line-height: 24px;
        }
      }
    }
  }
`;
const cards: IMeetNeedsContent[] = [
  {
    iconUrl: <ContinuousService />,
    title: '持续服务',
    description: ['7*24小时可支持', '没有服务空白期'],
  },
  {
    iconUrl: <LearnFrom />,
    title: '智能学习',
    description: ['应用深度学习技术', '自动优化知识库内容'],
  },
  {
    iconUrl: <ReturnVisit />,
    title: '满意度回访',
    description: ['根据客户情况AI智能', '外呼进行满意度回访'],
  },
  {
    iconUrl: <Anotice />,
    title: '智能通知',
    description: ['服务通知高效下发', '有效触达'],
  },
];
const MeetNeedsContent = () => {
  return (
    <MeetNeedsContentWrapper>
      {cards.map(({ iconUrl, title, description }) => (
        <div className="card">
          {/* <img src={iconUrl} alt={title} /> */}
          {/* <ContinuousService /> */}
          {iconUrl}
          <div className="title">{title}</div>
          <div className="description">
            {description.map(item => (
              <div className="description-item">{item}</div>
            ))}
          </div>
        </div>
      ))}
    </MeetNeedsContentWrapper>
  );
};
const vsContent: IVSContent[] = [
  { title: '百应AI外呼机器人', description: ['并发无上限', '单日通话量无上限', '单次综合成本0.2-0.3元', '工作效率高'] },
  {
    title: '人工客服',
    description: ['并发取决于客服数量', '单日通话量：客服数×200', '单次综合成本2-5元', '工作效率低'],
  },
];
const VSContent = () => {
  return (
    <VSContentWrapper>
      <div className="robot">
        <div className="title">{vsContent[0].title}</div>
        <div className="description">
          {vsContent[0].description.map(item => (
            <div className="description-item">
              <Confirm />
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="human">
        <div className="title">{vsContent[1].title}</div>
        <div className="description">
          {vsContent[1].description.map(item => (
            <div className="description-item">
              <UnConfirm />
              {item}
            </div>
          ))}
        </div>
      </div>
      <img
        src="https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E5%AE%A2%E6%88%B7%E6%9C%8D%E5%8A%A1%EF%BC%88pc%EF%BC%89vs.png"
        alt="VS"
      />
    </VSContentWrapper>
  );
};
interface ICustomerServiceProps {}
// 客户服务
const CustomerService: NextFunctionComponent = ({}) => {
  return (
    <Layout headPlaceholder={[false, false]} headFontStyle={['dark', 'dark']}>
      {(visible, setFormVisible) => (
        <>
          <Introduction
            title="客户服务"
            imageUrl="https://cdn.byai.com/static/intro/img/retail/solutions/header/%E5%AE%A2%E6%88%B7%E6%9C%8D%E5%8A%A1-.png"
            description="高效率、低成本、全天候的智能客户服务助手"
          />
          <PainPoints
            title="品牌亟待解决的客户管理痛点"
            cardList={[
              {
                description: '人工服务不及时，服务标准难统一，客户满意度低',
                iconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E5%AE%A2%E6%88%B7%E6%9C%8D%E5%8A%A1%EF%BC%88pc%EF%BC%891.png',
                hoverIconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E5%AE%A2%E6%88%B7%E6%9C%8D%E5%8A%A1%EF%BC%88pc%EF%BC%891-1.png',
              },
              {
                description: '人员流动大，培训成本高，服务质量参差不齐',
                iconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E5%AE%A2%E6%88%B7%E6%9C%8D%E5%8A%A1%EF%BC%88pc%EF%BC%892.png',
                hoverIconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E5%AE%A2%E6%88%B7%E6%9C%8D%E5%8A%A1%EF%BC%88pc%EF%BC%892-2.png',
              },
              {
                description: '7*24服务需要员工多班倒，人力成本高',
                iconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E5%AE%A2%E6%88%B7%E6%9C%8D%E5%8A%A1%EF%BC%88pc%EF%BC%893.png',
                hoverIconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E5%AE%A2%E6%88%B7%E6%9C%8D%E5%8A%A1%EF%BC%88pc%EF%BC%893-3.png',
              },
              {
                description: '服务通知下发迟缓，难以满足消费者及时性服务体验',
                iconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E5%AE%A2%E6%88%B7%E6%9C%8D%E5%8A%A1%EF%BC%88pc%EF%BC%894.png',
                hoverIconUrl:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E5%AE%A2%E6%88%B7%E6%9C%8D%E5%8A%A1%EF%BC%88pc%EF%BC%894-4.png',
              },
            ]}
          />
          <FlowChart
            title="满足用户多维需求，助力提升品牌心智"
            content={MeetNeedsContent()}
            buttonText="立即免费体验 ››"
          />
          <Features
            title="售前、售中、售后营销服务，提升客户体验"
            buttonText="获取AI方案 ››"
            extraContent={VSContent()}
            featureList={[
              {
                featureName: '大幅降低成本',
                featureIcon:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E5%AE%A2%E6%88%B7%E6%9C%8D%E5%8A%A11.png',
                featureDescription: '人力成本节约 85%',
                highlightString: '85%',
              },
              {
                featureName: '提升服务效率',
                featureIcon:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E5%AE%A2%E6%88%B7%E6%9C%8D%E5%8A%A12.png',
                featureDescription: '客服效率提升 100%',
                highlightString: '100%',
              },
              {
                featureName: '提升客户满意度',
                featureIcon:
                  'https://cdn.byai.com/static/intro/img/retail/solutions/icons/%E5%AE%A2%E6%88%B7%E6%9C%8D%E5%8A%A13.png',
                featureDescription: ' 满意度提升 30%',
                highlightString: '30%',
              },
            ]}
          />
          <ThemeProvider
            theme={{
              gridTemplateColumns: 'repeat(3, 384px)',
              gridGap: '24px',
            }}>
            <Photos
              title="行业领先的技术实力"
              photos={[
                {
                  photoUrl:
                    'https://cdn.byai.com/static/intro/img/retail/solutions/photos/%E6%B4%BB%E5%8A%A8%E8%90%A5%E9%94%80-1-noradius.png',
                  descriptions: ['行业领先的AI技术实力', '提供更优质的人机对话体验'],
                },
                {
                  photoUrl:
                    'https://cdn.byai.com/static/intro/img/retail/solutions/photos/%E6%B4%BB%E5%8A%A8%E8%90%A5%E9%94%80-2-noradius.png',
                  descriptions: ['多轮会话能力', '精准理解上下文', '准确识别客户意图'],
                },
                {
                  photoUrl:
                    'https://cdn.byai.com/static/intro/img/retail/solutions/photos/%E6%B4%BB%E5%8A%A8%E8%90%A5%E9%94%80-3-noradius.png',
                  descriptions: ['各行业场景专属知识库', '为不同客户提供针对性服务'],
                },
              ]}
            />
          </ThemeProvider>
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

export default CustomerService;
