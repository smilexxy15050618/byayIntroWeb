import { ReactNode } from 'react';
import { Container, Hidden, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import Box from '../../../src/components/Box';
import CommonCol from '../../../src/components/common/CommonCol';
import CommonFooter from '../../../src/components/common/footer';
import { Layout } from '../../../src/components/Layout';
import FunctionalItem from '../../../src/components/product/FunctionalItem';
import { media } from '../../../src/constants/style';
import { Banner } from './banner-img';
import { DataVisualWrapper } from './data-visual-wrapper';
import { DescCol, DescImgCol } from './desc';
import MobileFunctionalItem from './MobileFunctionalItem';

const functionItemData = [
  {
    desktopIconUrl: 'https://cdn.byai.com/static/intro/img/smart-support/%E9%87%91%E8%9E%8D%E5%82%AC%E6%94%B6.png',
    mobileIconUrl: 'https://cdn.byai.com/static/intro/img/smart-support/%E9%87%91%E8%9E%8D%E5%82%AC%E6%94%B6.png',
    description:
      '催收话术指导、流程指导，催收员对话实时质检，实现金融机构催收业务的全量质检，提升催收质量，强化催收合规性。',
    name: '金融催收',
  },
  {
    desktopIconUrl: 'https://cdn.byai.com/static/intro/img/smart-support/%E5%AE%A2%E6%9C%8D%E6%8E%A5%E5%BE%85.png',
    mobileIconUrl: 'https://cdn.byai.com/static/intro/img/smart-support/%E5%AE%A2%E6%9C%8D%E6%8E%A5%E5%BE%85.png',
    description: '场景话术下的精准推荐和对应知识点的灵活匹配，加快了客户问题的解决速度，进一步提高客户满意度。',
    name: '客户接待',
  },
  {
    desktopIconUrl: 'https://cdn.byai.com/static/intro/img/smart-support/%E7%94%B5%E8%AF%9D%E9%94%80%E5%94%AE.png',
    mobileIconUrl: 'https://cdn.byai.com/static/intro/img/smart-support/%E7%94%B5%E8%AF%9D%E9%94%80%E5%94%AE.png',
    description: '客户画像生成，对话摘要记录，深度理解并记录每一个客户的需求，提高电话销售业绩。',
    name: '电话销售',
  },
  {
    desktopIconUrl: 'https://cdn.byai.com/static/intro/img/smart-support/%E6%94%BF%E5%8A%A1%E7%83%AD%E7%BA%BF.png',
    mobileIconUrl: 'https://cdn.byai.com/static/intro/img/smart-support/%E6%94%BF%E5%8A%A1%E7%83%AD%E7%BA%BF.png',
    description: '智能知识点推荐，话术推荐，流程指导，为每一位办事群众提供贴心服务，提升政务服务质量与满意度。',
    name: '政务热线',
  },
];

const SmartSupportWrapper = styled.div`
  font-size: 18px;
  ${media.phone`
    font-size: 14px;
  `}
  h1 {
    font-size: 56px;
    ${media.phone`
      font-size: 38px;
    `}
  }
  h2 {
    font-size: 42px;
    ${media.phone`
      font-size: 28px;
    `}
  }
  h3 {
    font-size: 36px;
    ${media.phone`
      font-size: 23px;
    `}
  }
  h4 {
    font-size: 30px;
    ${media.phone`
      font-size: 20px;
    `}
  }
  h5 {
    font-size: 17px;
  }
  h1,
  h2 {
    border: none;
    /* margin: 0;
    padding: 0; */
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.4;
  }
  img {
    margin: 0;
  }
  .carousel-indicators {
    bottom: -80px;
  }
  .carousel-indicators li {
    background-color: #3154d4;
  }
`;
const ability = [
  {
    logo: 'https://cdn.byai.com/static/intro/img/smart-support/%E8%B4%A8%E6%A3%80.png',
    desc: (
      <p>
        实时对话质检，违规提醒
        <br />
        降低业务风险
      </p>
    ),
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/smart-support/%E4%BC%9A%E8%AF%9D.png',
    desc: (
      <p>
        知识点实时提醒，客户信息提
        <br />
        示，全面提升服务效率和质量
      </p>
    ),
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/smart-support/%E5%AE%A2%E6%88%B7.png',
    desc: (
      <p>
        客户画像、意向标签生成
        <br />
        自动记录沟通摘要
      </p>
    ),
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/smart-support/%E6%B5%81%E7%A8%8B.png',
    desc: (
      <p style={{ paddingLeft: '10px' }}>
        标准话术推荐，流程指导
        <br />
        新人快速上手
      </p>
    ),
  },
];

const visualDataSource = [
  {
    title1: '实时语音转写',
    title2: '提升坐席服务效率',
    descList: [
      '采用最新一代语音识别技术，实现低延时、高准确率语音对话转写，实时转换文本展示。对话文字记录永久保存，帮助坐席代表提升服务效率。',
    ],
    imgurl: 'https://cdn.byai.com/static/intro/img/smart-support/%E8%AF%AD%E9%9F%B3%E8%BD%AC%E5%86%99.png',
    mobileImgUrl: 'https://cdn.byai.com/static/intro/img/smart-support/%E8%AF%AD%E9%9F%B3%E8%BD%AC%E5%86%99-app.png',
  },
  {
    title1: '智能话术推荐',
    title2: '坐席回答更专业',
    descList: [
      '在与客户沟通过程中，AI将为坐席人员迅速提供最佳的应答语推荐。智能语义识别，准确理解客户意图，提高坐席回答专业度与成单概率。',
    ],
    imgurl: 'https://cdn.byai.com/static/intro/img/smart-support/%E6%99%BA%E8%83%BD%E8%AF%9D%E6%9C%AF.png',
    mobileImgUrl: 'https://cdn.byai.com/static/intro/img/smart-support/%E6%99%BA%E8%83%BD%E8%AF%9D%E6%9C%AF-app.png',
  },
  {
    title1: '便捷编辑客户标签',
    title2: '对话摘要及时记录',
    descList: [
      '智能辅助系统将协助记录沟通中的对话摘要，协助完善客户画像标签，记录客户的个性化需求，帮助业务人员提供针对性的产品及服务。',
    ],
    imgurl: 'https://cdn.byai.com/static/intro/img/smart-support/%E5%AF%B9%E8%AF%9D%E6%91%98%E8%A6%81.png',
    mobileImgUrl: 'https://cdn.byai.com/static/intro/img/smart-support/%E5%AF%B9%E8%AF%9D%E6%91%98%E8%A6%81-app.png',
  },
  {
    title1: '实时风险提醒',
    title2: '及时制止违规行为',
    descList: [
      '在坐席智能辅助系统中，通过实时语音质检，高风险行为可以在第一时间被发现，将违规行为从根源上消除，避免因违规带来的损失。',
    ],
    imgurl: 'https://cdn.byai.com/static/intro/img/smart-support/%E9%A3%8E%E9%99%A9%E6%8F%90%E9%86%92.png',
    mobileImgUrl: 'https://cdn.byai.com/static/intro/img/smart-support/%E9%A3%8E%E9%99%A9%E6%8F%90%E9%86%92-app.png',
  },
  {
    title1: '支持私有化部署',
    title2: '银行级安全防护体系',
    descList: [
      '支持SaaS模式和私有部署两种模式，灵活满足不同业务场景。同时，我们还提供银行级数据安全体系，为企业数据信息保驾护航。',
    ],
    imgurl: 'https://cdn.byai.com/static/intro/img/smart-support/%E7%A7%81%E4%BA%BA%E9%83%A8%E7%BD%B2.png',
    mobileImgUrl: 'https://cdn.byai.com/static/intro/img/smart-support/%E7%A7%81%E4%BA%BA%E9%83%A8%E7%BD%B2-app.png',
  },
];

interface ISceneItem {
  title: string;
  imgUrl: ReactNode;
  label: string[];
  content: ReactNode;
}

const Slogan = styled.div`
  /* height: 266px; */
  padding: 120px 0 80px 0;
  font-size: 36px;
  text-align: center;
  box-sizing: border-box;
  ${media.phone`
      padding: 60px 0 2px 0;
      font-size: 36px;
  `}
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1136px;
  margin: 0 auto 98px;
  ${media.phone`
    padding: 58px 18px 0;
    width: auto;
    justify-content: space-around;
    margin: 0 auto -38px;
  `}
`;

const SmartSupport = () => {
  return (
    <Layout>
      {(visible, setVisible) => (
        <SmartSupportWrapper>
          <Banner
            title="智能辅助"
            desc="为销售、客服人员提供智能坐席辅助"
            desc2="包括智能话术推荐、实时语音转写、全程合规质检等，"
            desc3="全面提升服务效率"
            text="立即体验"
            backgroundImage="https://cdn.byai.com/static/intro/img/smart-support/%E5%A4%B4%E5%9B%BE.png"
            mobileBackgroundImage="https://cdn.byai.com/static/intro/img/smart-support/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%A4%B4%E5%9B%BE.png"
            onBtnClick={() => setVisible(true)}
          />
          <CommonCol title1="智能坐席辅助" title2="全面提升服务效率" ability={ability} hasQ bac="#fff" titleBreak />
          {visualDataSource.map(({ title1, title2, descList, imgurl, mobileImgUrl }, index) => (
            <DataVisualWrapper key={index} odd={index % 2 === 1}>
              <Container>
                <Row className="data-visual-wrapper translate-x">
                  <DescCol lg={10} md={10} sm={24} className="desc-col-title">
                    <Visible md lg xl xxl xxxl>
                      <h3>{title1}</h3>
                      <h3>{title2}</h3>
                    </Visible>
                    <Hidden md lg xl xxl xxxl>
                      <Box as="section" mt="35px" mb="20px">
                        <h3>{title1}</h3>
                        <h3>{title2}</h3>
                      </Box>
                    </Hidden>
                    <Visible md lg xl xxl xxxl>
                      <div className="p-wrapper">
                        {descList.map(descItem => (
                          <p style={{ fontSize: '16px' }} key={descItem}>
                            {descItem}
                          </p>
                        ))}
                      </div>
                    </Visible>
                  </DescCol>
                  <DescImgCol lg={14} md={14} sm={24}>
                    <Visible md lg xl xxl xxxl>
                      <img src={imgurl} alt="" />
                    </Visible>
                    <Hidden md lg xl xxl xxxl>
                      <img src={mobileImgUrl} alt="" />
                    </Hidden>
                  </DescImgCol>
                </Row>
              </Container>
            </DataVisualWrapper>
          ))}
          <Slogan>使用场景</Slogan>
          <Hidden xs sm>
            <ContentWrap>
              {functionItemData.map(item => (
                <FunctionalItem key={item.name} {...item} />
              ))}
            </ContentWrap>
          </Hidden>
          <Visible xs sm>
            <ContentWrap>
              {functionItemData.map(item => (
                <MobileFunctionalItem itemWidth="50%" mb="100px" {...item} />
              ))}
            </ContentWrap>
          </Visible>

          <CommonFooter
            title="百应智能坐席辅助，帮您打造高品质客户体验"
            btn="免费体验"
            mTitle1="百应智能坐席辅助"
            mTitle2="帮您打造高品质客户体验"
            img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
            onBtnClick={() => setVisible(true)}
          />
        </SmartSupportWrapper>
      )}
    </Layout>
  );
};

export default SmartSupport;
