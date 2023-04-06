import { Hidden, Visible } from 'react-grid-system';
import styled from 'styled-components';
import Box from '../../../src/components/Box';
import { DataVisual } from '../../../src/components/common/DataVisual';
import CommonCol from '../../../src/components/CommonCol';
import { Layout } from '../../../src/components/Layout';
import { BannerImg } from '../../../src/components/service';
import { media } from '../../../src/constants/style';
import HoverChange, { ISceneItem } from './hover-change';
import HoverChangeMobile from './hover-change-mobile';
import StarFooter from './star-footer';
import { CreditCard, Finance, Money } from './svg';

const StarWrapper = styled.div`
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

const TableImageWrapper = styled.div`
  ${media.phone`
    padding: 0 30px;
  `}
`;

const TableTitle = styled.div`
  ${media.phone`
  font-size: 23px;
  `}
  font-size: 36px;
  margin: 96px 0 50px;
`;

const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 130px;
`;

const ability = [
  {
    logo: 'https://cdn.byai.com/static/intro/img/star/icon1.png',
    desc: (
      <p>
        可依据分案策略
        <br />
        进行自动分案
        <br />
        催收作业更加精细化
      </p>
    ),
    title: '智能案件分类',
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/star/icon2.png',
    desc: (
      <p>
        支持正向、逆向案件流转
        <br />
        案件自动打标
        <br />
        提升案件管理效率
      </p>
    ),
    title: '高效案件管理',
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/star/icon3.png',
    desc: (
      <p>
        支持机器人、外呼、短信等
        <br />
        多种触达模块
        <br />
        让逾期无处遁形
      </p>
    ),
    title: '多方式触达',
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/star/icon4.png',
    desc: (
      <p>
        案件、外呼、作业量等
        <br />
        报表自动生成
        <br />
        辅助决策调整制定
      </p>
    ),
    title: '多维度智能分析',
  },
  {
    logo: 'https://cdn.byai.com/static/intro/img/star/icon5.png',
    desc: (
      <p>
        丰富催收质检规则
        <br />
        全量质检系统
        <br />
        保障催收作业合规性，降低风险
      </p>
    ),
    title: '智能合规性监测',
  },
];

const visualDataSource = [
  {
    title1: '“星追”智能催收解决方案',
    invisibleInMobile: true,
    render() {
      return (
        <TableWrapper>
          <TableTitle>星追智能催收解决方案</TableTitle>
          <TableImageWrapper>
            <img src="https://cdn.byai.com/static/intro/img/star/table.png" alt="" />
          </TableImageWrapper>
        </TableWrapper>
      );
    },
  },
  {
    title1: '智能分案引擎',
    descList: [
      '支持多级分案策略设计，内置多套催收专用业务字段模版；',
      '可自定义编辑分案策略，全面提升分案精细化程度全面提升分案精细化程度。',
    ],
    imgurl: 'https://cdn.byai.com/static/intro/img/star/star1.png',
    mobileImgUrl: 'https://cdn.byai.com/static/intro/img/star/star1.png',
  },
  {
    title1: '智能催收机器人',
    descList: [
      '一键创建智能外呼任务，可通过执行分案策略自动创建外呼任务；',
      '内置多种外呼任务模版、支持自定义外呼任务模版，自动催记。',
    ],
    imgurl: 'https://cdn.byai.com/static/intro/img/star/star2.png',
    mobileImgUrl: 'https://cdn.byai.com/static/intro/img/star/star2.png',
  },
  {
    title1: '智能电催中心',
    descList: [
      '通话过程可视化、质量实时监控、知识点实时提示；',
      '客户信息同步展示，电催完成后自动对案件进行分类；',
      '为人工决策提供便利，让催收作业更高效。',
    ],
    imgurl: 'https://cdn.byai.com/static/intro/img/star/star3.png',
    mobileImgUrl: 'https://cdn.byai.com/static/intro/img/star/star3.png',
  },
  {
    title1: '智能质检',
    descList: [
      '丰富的催收场景质检模型沉淀、支持自定义质检规则；',
      '全量&自动&定时质检，多维度报表自动生成；',
      '降本增效，提高合规性。',
    ],
    imgurl: 'https://cdn.byai.com/static/intro/img/star/star4.png',
    mobileImgUrl: 'https://cdn.byai.com/static/intro/img/star/star4.png',
  },
  {
    title1: '智能工作手机',
    descList: [
      '手机敏感行为监控，微信对话监控，外访作业行动轨迹全程记录；',
      '全面了解外访作业情况，提高外访作业效率、让外访作业更合规、更安全。',
    ],
    imgurl: 'https://cdn.byai.com/static/intro/img/star/star5.png',
    mobileImgUrl: 'https://cdn.byai.com/static/intro/img/star/star5.png',
  },
];

const sceneDataSource: ISceneItem[] = [
  {
    title: '信用卡催收',
    imgUrl: <CreditCard />,
    message: [
      {
        title: '需求分析',
        content: (
          <p>
            截止2018年末，信用卡累计发卡超过6.86亿张，五家银行（四大行+招行）发卡量均过亿。随着这两年信用卡发卡提速，信用卡的欠款纠纷也越来越多，且信用卡欠款纠纷本身的特点，如单笔金额小、一人多卡、涉及持卡人众多且分布范围广、“欠款总量大，核销难度较大”，致使发卡银行处理信用卡欠款纠纷应接不暇。
          </p>
        ),
      },
      {
        title: '解决方案',
        content: (
          <p>
            百应“星追”智能催收解决方案，配备有智能分案功能，可以根据银行目前业务需要，自动分配案件至发卡银行内部信用卡中心或分支机构、法务部等，以便更好地挽回资金损失。
          </p>
        ),
      },
    ],
  },
  {
    title: '现金贷',
    imgUrl: <Money />,

    message: [
      {
        title: '需求分析',
        content: (
          <p>
            现金贷业务起源于民间的那种无抵押式的为满足个人资金周转的信用借款，这几年起起伏伏，也引起比较大的争议。高利率、高逾期率以及暴力催收是现金贷行业的主要的风险点，但催收能力直接影响的是现金贷平台的坏账率，进而影响平台的盈利水平。如何能够有效遏制这些风险的发生是现金贷行业正规发展的必然，因此催收的效率和合规性直接影响了现金贷平台的长期发展。
          </p>
        ),
      },
      {
        title: '解决方案',
        content: (
          <p>
            百应“星追”智能催收解决方案，通过智能语音质检、外访管理和全域知识图谱等技术方法，融合众多大型金融机构的不良资产处置知识体系和实战经验，助力不良资产处置机构提升经营效率、降低运营成本和催收风险，助力现金贷合规无忧。
          </p>
        ),
      },
    ],
  },
  {
    title: '消费金融',
    imgUrl: <Finance />,
    message: [
      {
        title: '需求分析',
        content: (
          <p>
            近年来，受监管、运营策略、市场变化等多重因素影响，属于消费金融行业突飞猛进的时代已经远去，正逐步回归理性。“扫黑除恶”引发了催收领域的强监管，在整治行业乱象的同时，也促使很多贷后管理机构退出市场，间接推高了贷后成本。这就需要消费金融公司不断提升贷后管理合规性，来保证长远稳定的发展。
          </p>
        ),
      },
      {
        title: '解决方案',
        content: (
          <p>
            百应“星追”智能催收解决方案，通过智能语音质检、外访管理和全域知识图谱等技术方法，融合众多大型金融机构的不良资产处置知识体系和实战经验，解决消费金融贷后场景方的痛点，帮助他们提高贷后管理合规性和用户体验。助力不良资产处置机构提升经营效率、降低运营成本和催收风险。
          </p>
        ),
      },
    ],
  },
];

const sceneDataSourceMobile: ISceneItem[] = [
  {
    title: ' 催收',
    imgUrl: <CreditCard />,
    message: [
      {
        title: '需求分析',
        content: (
          <p>
            截止2018年末，信用卡累计发卡超过6.86亿张，五家银行（四大行+招行）发卡量均过亿。随着这两年信用卡发卡提速，信用卡的欠款纠纷也越来越多，且信用卡欠款纠纷本身的特点，如单笔金额小、一人多卡、涉及持卡人众多且分布范围广、“欠款总量大，核销难度较大”，致使发卡银行处理信用卡欠款纠纷应接不暇。
          </p>
        ),
      },
      {
        title: '解决方案',
        content: (
          <p>
            百应“星追”智能催收解决方案，配备有智能分案功能，可以根据银行目前业务需要，自动分配案件至发卡银行内部信用卡中心或分支机构、法务部等，以便更好地挽回资金损失。
          </p>
        ),
      },
    ],
  },
  {
    title: '现金贷',
    imgUrl: <Money />,

    message: [
      {
        title: '需求分析',
        content: (
          <p>
            现金贷业务起源于民间的那种无抵押式的为满足个人资金周转的信用借款，这几年起起伏伏，也引起比较大的争议。高利率、高逾期率以及暴力催收是现金贷行业的主要的风险点，但催收能力直接影响的是现金贷平台的坏账率，进而影响平台的盈利水平。如何能够有效遏制这些风险的发生是现金贷行业正规发展的必然，因此催收的效率和合规性直接影响了现金贷平台的长期发展。
          </p>
        ),
      },
      {
        title: '解决方案',
        content: (
          <p>
            百应“星追”智能催收解决方案，通过智能语音质检、外访管理和全域知识图谱等技术方法，融合众多大型金融机构的不良资产处置知识体系和实战经验，助力不良资产处置机构提升经营效率、降低运营成本和催收风险，助力现金贷合规无忧。
          </p>
        ),
      },
    ],
  },
  {
    title: '消费金融',
    imgUrl: <Finance />,
    message: [
      {
        title: '需求分析',
        content: (
          <p>
            近年来，受监管、运营策略、市场变化等多重因素影响，属于消费金融行业突飞猛进的时代已经远去，正逐步回归理性。“扫黑除恶”引发了催收领域的强监管，在整治行业乱象的同时，也促使很多贷后管理机构退出市场，间接推高了贷后成本。这就需要消费金融公司不断提升贷后管理合规性，来保证长远稳定的发展。
          </p>
        ),
      },
      {
        title: '解决方案',
        content: (
          <p>
            百应“星追”智能催收解决方案，通过智能语音质检、外访管理和全域知识图谱等技术方法，融合众多大型金融机构的不良资产处置知识体系和实战经验，解决消费金融贷后场景方的痛点，帮助他们提高贷后管理合规性和用户体验。助力不良资产处置机构提升经营效率、降低运营成本和催收风险。
          </p>
        ),
      },
    ],
  },
];

const Slogan = styled.div`
  height: 266px;
  line-height: 266px;
  font-size: 36px;
  text-align: center;
  box-sizing: border-box;
  background-color: #f8f9fb;
  ${media.phone`
      height: 125px;
      line-height: 125px;
      font-size: 36px;;
  `}
`;

const ContentWrap = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 1136px;
  margin: 0 auto;
  ${media.phone`
    padding: 58px 18px 26px;
    width: auto;
    justify-content: space-around;
  `}
`;
const SubTitle = styled.span`
  font-size: 32px;
  /* line-height: 78px; */
  ${media.phone`
      /* display: none; */
      font-size: 28px;
  `}
`;

const MainTitle = styled.span`
  font-size: 56px;
  margin-right: 53px;
  ${media.phone`
      flex: 1;
      margin-right: 0;
      font-size: 26px;
      text-align: center;
  `}
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
  ${media.phone`
    align-items: center;
    flex-direction: column;
  `}
`;

const Star = () => {
  return (
    <Layout>
      {(visible, setVisible) => (
        <StarWrapper>
          <BannerImg
            title={
              <TitleWrapper>
                <MainTitle>星追</MainTitle>
                <SubTitle>智能催收解决方案</SubTitle>
              </TitleWrapper>
            }
            desc="赋能贷后催收，构筑高效、合规的智能化催收新范式。"
            text="立即体验"
            mobileShowTitle={true}
            backgroundImage="https://cdn.byai.com/static/intro/img/star/star-top.jpg"
            mobileBackgroundImage="https://cdn.byai.com/static/intro/img/star/star-top-app.png"
            onBtnClick={() => setVisible(true)}
          />
          <CommonCol
            title="更高效，更规范，全面提升催收作业效率和管理水平"
            title1="更高效，更规范，全面提升"
            title2="催收作业效率和管理水平"
            ability={ability}
            bac="#fff"
            mr="0px"
          />

          {visualDataSource.map((data, index) => (
            <DataVisual {...data} key={index} odd={index % 2 === 1} />
          ))}
          <Slogan>应用场景</Slogan>
          <Visible md lg xl xxl xxxl>
            <HoverChange dataSource={sceneDataSource} />
            <Box textAlign="center" py={5}>
              <a href="https://www.byai.com/solutions" style={{ color: '#3153D4' }}>
                更多行业案例&emsp;→
              </a>
            </Box>
          </Visible>
          <Hidden md lg xl xxl xxxl>
            <HoverChangeMobile data={sceneDataSourceMobile} />
          </Hidden>
          <StarFooter
            title1="百应星追催收管理系统，赋能贷后催收"
            title2="构筑高效、合规的智能化催收新范式"
            btn="立即体验"
            mTitle1="百应星追催收管理系统"
            mTitle2="构筑高效、合规的"
            mTitle3="智能化催收新范式"
            img={'//cdn.byai.com/static/official-website/solution/bg2.png'}
            onBtnClick={() => setVisible(true)}
          />
        </StarWrapper>
      )}
    </Layout>
  );
};

export default Star;
