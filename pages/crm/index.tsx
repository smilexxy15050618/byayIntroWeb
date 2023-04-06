import React from 'react';
import { Visible } from 'react-grid-system';
import Box from '../../src/components/Box';
import { CaseList } from '../../src/components/case-list';
import { getColorForLabelText, LabelText } from '../../src/components/case-list/util';
import ByDesc from '../../src/components/common/ByDesc';
import BannerImg from '../../src/components/crm/Banner';
import { CrmLayout } from '../../src/components/crm/CrmLayout';
import { MobileSceneCarousel } from '../../src/components/crm/MobileSceneCarousel';
import { ProductAdvancedCard } from '../../src/components/crm/ProductAdvancedCard';
import { SceneCarousel } from '../../src/components/crm/SceneCarousel';
import { TechAdvancedCard } from '../../src/components/crm/TechAdvancedCard';
import { RingImgComp } from '../../src/components/RingImgComp';
import { Block, ProductAdvancedCardWrap, TechAdvancedWrap, Wrapper } from './styled';

const technologyAdvanced = [
  {
    img: '//cdn.byai.com/static/official-website/crm/%E4%B8%AD%E7%BE%8E.png',
    desc: '顶尖的中美联合产研团队',
  },
  {
    img: '//cdn.byai.com/static/official-website/crm/%E5%8F%91%E6%98%8E.png',
    desc: '百余项发明专利软件著作权',
  },
  {
    img: '//cdn.byai.com/static/official-website/crm/AICRM.png',
    desc: '首创AICRM管理理念',
  },
  {
    img: '//cdn.byai.com/static/official-website/crm/%E9%83%A8%E7%BD%B2.png',
    desc: '支持灵活部署形式：SaaS、私有化、API、定制开发',
  },
];

const serveAdvanced = [
  {
    img: '//cdn.byai.com/static/official-website/crm/%E4%B8%93%E6%B3%A8%E9%94%80%E5%94%AE%E5%A2%9E%E9%95%BF.png',
    title: '专注销售增长',
    desc: ['直击业务痛点', '提供帮助业绩提升的产品'],
  },
  {
    img: '//cdn.byai.com/static/official-website/crm/%E4%B8%93%E4%B8%9A%E5%AE%A2%E6%9C%8D%E5%9B%A2%E9%98%9F.png',
    title: '专业客服团队',
    desc: ['7x24小时服务保障', '管家式全程贴心服务'],
  },
  {
    img: '//cdn.byai.com/static/official-website/crm/%E4%B8%93%E5%B1%9E%E6%88%90%E5%8A%9F%E7%AD%96%E7%95%A5.png',
    title: '专属成功策略',
    desc: ['为大客户提供定制化的', '专业整体解决方案'],
  },
  {
    img: '//cdn.byai.com/static/official-website/crm/%E4%B8%93%E5%B1%9E%E6%88%90%E9%95%BF%E8%AE%A1%E5%88%92.png',
    title: '专属成长计划',
    desc: ['提供增值的营销知识分享', '助力销售成长'],
  },
];

const productAdvance = [
  {
    title: '3个角色',
    img: '//cdn.byai.com/static/official-website/crm/3%E4%B8%AA%E8%A7%92%E8%89%B2.png',
    desc: ['市场（市场总监、市场运营）·获客难', '销售（销售总监、销售运营）·转化难', '管理层（CEO、CMO、COO）·管理难'],
  },
  {
    title: '6大场景',
    img: '//cdn.byai.com/static/official-website/crm/6%E5%A4%A7%E5%9C%BA%E6%99%AF.png',
    desc: [
      <>
        引流·市场推广
        <Box pl="40px" />
        转化·赋能销售
      </>,
      <>
        集客·营销获客
        <Box pl="40px" />
        提效·销售管理
      </>,
      <>
        裂变·私欲流量
        <Box pl="40px" />
        洞察·数据分析
      </>,
    ],
  },
  {
    title: '1个平台',
    img: '//cdn.byai.com/static/official-website/crm/1%E4%B8%AA%E5%B9%B3%E5%8F%B0.png',
    desc: ['客户全生命周期', '30+行业知识图谱', '多维度数据可视化', '助力企业全链路增长'],
  },
];

const caseList = [
  {
    title: '数智运营六步走，西培教育留学部3个月沉淀2万+精准客户',
    imageSrc: '//cdn.byai.com/static/official-website/crm/case1.png',
    label: LabelText.education,
    content:
      '百应易客提供了工作手机、CRM等产品在内的智能客户关系管理解决方案。覆盖市场广告投放、课程咨询转化、老生续课增购等高频业务场景，构建线上线下学员数字档案，降低客户精细化运营成本。',
  },
  {
    title: '赢败单原因有迹可循，百应易客辅助河北雅果科学管理销售过程',
    imageSrc: '//cdn.byai.com/static/official-website/crm/case2.png',
    label: LabelText.manufacturing,
    content:
      '借助百应易客一站式数智化营销解决方案，河北雅果实现了客户信息留存的个性化诉求，通过自定义线索和客户对象的字段，将客户类型按重要程度分层为重要、普通、低价值客户，为日常的客户跟进提供关键依据。',
  },
  {
    title: '百应易客助力精准学实现全链路客户管理，精准触达客户赢单有捷径',
    imageSrc: '//cdn.byai.com/static/official-website/crm/case3.png',
    label: LabelText.education,
    content:
      '精准学与百应易客携手合作，实现了全周期的客户跟踪管理，并通过对客户信息的数字化解构，更准确地描绘出客户画像，掌握客户真实需求，共同促进K12教育领域OMO落地产品的创新升级。',
  },
];

const painList = [
  {
    title: '获客难',
    desc: '无效线索消耗市场和销售人员大量精力，投入成本逐年增加，但有效转化率不足3%，高效获客成为企业突围的重点。',
    style: { marginBottom: 24, borderRadius: '8px' },
  },
  {
    title: '销售难',
    desc: '客户触达形式单一，电话接通率不足20%，还面临封号风险，销售顾问平均接待客户数量有限，缺少辅助指导。',
    style: { borderRadius: '8px' },
  },
  {
    title: '管理难',
    desc: '销售及客服人员流动性较高，工作交接容易出现断层，且销售外勤无监管，工作效率低下，无法统计有效工作量。',
    style: { margin: '0 0 24px auto', borderRadius: '8px' },
  },
  {
    title: '决策难',
    desc: '难以通过销售过程洞察客户真实需求，客户诉求管理者无法第一时间知晓，订单流失严重却无法追溯，缺少数据洞察。',
    style: { margin: '0 0 0 auto', borderRadius: '8px' },
  },
];

const painSrc = '//cdn.byai.com//static/official-website/crm/%E4%BC%81%E4%B8%9A%E7%97%9B%E7%82%B9.png';

const CrmHome = () => {
  return (
    <CrmLayout>
      {(visible, setVisible) => (
        <Wrapper>
          <BannerImg
            style={{ marginTop: '60px' }}
            title="百应易客"
            desc="一站式数智化营销解决方案"
            desc2="用AI重新定义CRM，已服务42000+企业，驱动业绩持续增长"
            text="免费体验"
            backgroundImage="//cdn.byai.com/static/official-website/crm/%E7%99%BE%E5%BA%94%E6%98%93%E5%AE%A2.png"
            mobileBackgroundImage="//cdn.byai.com/static/official-website/crm/%E5%88%87%E5%9B%BE%E7%A7%BB%E5%8A%A8%E7%AB%AF.png"
            onBtnClick={() => setVisible(true)}
            mobileShowTitle
          />
          <ByDesc title="企业痛点" desc="击破企业经营难点，引领数智化营销新思路" needDecoration={false} />
          <RingImgComp
            list={painList}
            img={painSrc}
            processMobileList={list => list.map(({ style, ...rest }) => rest)}
          />
          <Block width="100%" bgcolor="#F9FAFF">
            <ByDesc
              title="产品优势"
              desc="一站式营销管理中心，为企业提供智能增长引擎解决方案"
              needDecoration={false}
              padding="70px 20px"
            />
            <ProductAdvancedCardWrap>
              {productAdvance.map(({ title, desc, img }) => (
                <ProductAdvancedCard title={title} desc={desc} img={img} />
              ))}
            </ProductAdvancedCardWrap>
          </Block>
          <Box className="ai-scene-wrap">
            <ByDesc
              title="4大数智场景"
              desc="击碎获客难、人效低、成本高等行业痛点"
              needDecoration={false}
              padding="40px 20px"
            />
            <Visible md lg xl xxl xxxl>
              <SceneCarousel />
            </Visible>
            <Visible sm xs>
              <MobileSceneCarousel />
            </Visible>
          </Box>
          <TechAdvancedWrap bgcolor="#F9FAFF">
            <ByDesc title="技术优势" needDecoration={false} padding="70px 20px" />
            <Box className="technology-advanced" display="flex" justifyContent="center">
              <Box display="flex">
                {technologyAdvanced.slice(0, 2).map((it, idx) => (
                  <TechAdvancedCard {...it} key={idx} />
                ))}
              </Box>
              <Box display="flex">
                {technologyAdvanced.slice(2, 4).map((it, idx) => (
                  <TechAdvancedCard {...it} key={idx} />
                ))}
              </Box>
            </Box>
          </TechAdvancedWrap>
          <Block className="serve-wrap">
            <ByDesc title="服务优势" needDecoration={false} padding="70px 20px" />
            <Box className="serve-advanced" display="flex" justifyContent="center">
              <Box display="flex">
                {serveAdvanced.slice(0, 2).map((it, idx) => (
                  <ProductAdvancedCard {...it} key={idx} />
                ))}
              </Box>
              <Box display="flex">
                {serveAdvanced.slice(2, 4).map((it, idx) => (
                  <ProductAdvancedCard {...it} key={idx} />
                ))}
              </Box>
            </Box>
          </Block>
          <Block bgcolor="#F9FAFF">
            <ByDesc title="行业案例" needDecoration={false} padding="80px 20px" />
            <Box display="flex" justifyContent="center">
              <CaseList
                commonCaseInfo={(i, info) => ({
                  labelColor: getColorForLabelText(info.label),
                })}
                caseInfoList={caseList}
              />
            </Box>
          </Block>
        </Wrapper>
      )}
    </CrmLayout>
  );
};

export default CrmHome;
