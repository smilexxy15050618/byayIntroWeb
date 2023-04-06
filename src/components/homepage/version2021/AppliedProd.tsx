import { FC, ReactNode } from 'react';
import { Col, Hidden, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import ByDescFontLight from '../../common/ByDescFontLight';
import ByProgressSwiper from '../../common/ByProgressSwiper';
import ByTabItem from '../../common/ByTabItem';
import ByTabPane, { ITabTemplate } from '../../common/ByTabPane';
import AppliedProdCard from './AppliedProdCard';

const BASE_URL = `https://cdn.byai.com/static/intro/img/index/version2021/applied-prod`;
const BG = `${BASE_URL}/bg.png`;
const INDUSTRY_SOLUTION = [
  {
    title: '银行',
    desc: 'AI助力银行提升运营管理的自动化、数字化、精细化水平，重塑业务流程，打造全新理念、全新模式、全新体验的新一代银行',
    background: ' #F38050',
  },
  {
    title: '政务',
    desc: '云为起点，数字化为手段，智能化为最终目标，AI赋能政务服务“一窗办”、“自助办”、“零次跑”等改革措施快速落地',
    background: '#4A8DF2',
  },
  {
    title: '电商',
    desc: '从智能营销到智能客服，AI赋能7X24小时守候，覆盖售前、售中、售后全生命周期客户联络需求，为客户创造增长价值',
    background: '#F7C53C',
  },
  {
    title: '保险',
    desc: 'AI助推保险业开启智能营销新时代，行业客户画像和数智化精准营销，打造高效客户服务，助力生产力提升',
    background: '#6245E7',
  },
  {
    title: '证券',
    desc: 'AI助力券商变革创新，实现沟通过程数字化，沉淀全量业务数据，高效响应检索需求，大幅提升工作效率',
    background: '#EE6969',
  },
  {
    title: '教育',
    desc: 'AI驱动全流程客户管理，融合多形式信息触达能力，稳步提升有效线索率，实现客户成交、增购率持续提升',
    background: '#1BAFA7',
  },
];

const SCENES_SOLUTION = [
  {
    title: '营销',
    desc: '搭建营销获客矩阵，帮助企业建设从获客、转化、留存到经营的全生命周期营销体系',
    background: '#F38050',
  },
  {
    title: '销售',
    desc: '融合营销、客户管理、云呼叫、数据分析等多种能力，推动销售业绩全面提升',
    background: '#6245E7',
  },
  {
    title: '服务',
    desc: '提供全天候、全渠道、全场景的智能服务，大幅提升顾客体验和满意度',
    background: '#4A8DF2',
  },
  {
    title: '催收',
    desc: '构建贷中/贷后模型，实现差异化催收，直击传统催收痛点，让催收更高效更有温度',
    background: '#1BAFA7',
  },
];

const CenterCol = styled(Col)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 36px;
`;
const TabStyleXs = styled.div`
  width: 126px;
  height: 40px;
  margin: 40px auto;
  background: rgba(44, 87, 248, 0.07);
  border-radius: 50px;
  border: 1px solid #2b58f9;
  font-size: 14px;
  font-weight: 500;
  color: #2b58f9;
  line-height: 40px;
  text-align: center;
`;
/* tab标签样式 */
const TabStyle = styled.div<{ isActive: boolean; index: number }>`
  position: relative;
  border: 1px solid;
  z-index: ${props => (props.isActive ? '1' : '0')};
  color: ${props => (props.isActive ? '#2B58F9' : '#666666')};
  background: ${props => (props.isActive ? 'rgba(43, 88, 249, 0.07)' : '')};
  border-color: ${props =>
    props.isActive
      ? '#2B58F988'
      : props.index === 1
      ? '#66666688 #66666688 #66666688 #FFFFFF00'
      : '#66666688 #FFFFFF00 #66666688 #66666688'};
  margin-left: ${props => (props.index === 1 ? '-1px' : '')};
  border-radius: ${props => (props.index === 1 ? '0px 23px 23px 0px' : '23px 0px 0px 23px')};
  width: 144px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
/* tab标签模板 */
const TabTemplate: ITabTemplate = (tabName, index, isActive) => {
  return (
    <TabStyle {...{ index, isActive }}>
      <div>{tabName}</div>
    </TabStyle>
  );
};

interface IProps {
  className?: string;
  children?: ReactNode;
}

const RawAppliedProd: FC<IProps> = ({ className }) => {
  return (
    <ByDescFontLight
      title="应用型行业产品"
      desc="实践验证，数智未来无限可能"
      padding={['87px 0px 94px', '40px 0px']}
      needDecoration={false}
      descBottom={['56px', '0px']}
      className={className}
      background={[`url(${BG}) no-repeat left top / 100%`, '#ffffff']}>
      {/* PC端 */}
      <Hidden xs sm>
        {/* <Accordion contentList={['', '', '', '']} maxWidth={300} wrapperWidth={800} /> */}
        <ByTabPane tabMargin="0px 0px 76px" tabTemplate={TabTemplate} contentHeight="auto" contentWidth="1224px">
          <ByTabItem tabName="行业解决方案">
            <Row>
              {INDUSTRY_SOLUTION.map((item, i) => (
                <CenterCol sm={8} key={i}>
                  <AppliedProdCard
                    {...item}
                    width="376px"
                    height="240px"
                    twoSpace="8px 39px"
                    padding="38px 35px 0px"
                    borderRadius="8px"
                    background={`
                        url(${BASE_URL}/i${i + 1}.png) no-repeat center/cover,
                        ${item.background}
                      `}
                  />
                </CenterCol>
              ))}
            </Row>
          </ByTabItem>
          <ByTabItem tabName="场景解决方案">
            <Row>
              {SCENES_SOLUTION.map((item, i) => (
                <CenterCol sm={6} key={i}>
                  <AppliedProdCard
                    {...item}
                    width="282px"
                    height="366px"
                    twoSpace="6px 56px"
                    padding="44px 37px 0px"
                    borderRadius="13.65px"
                    background={`
                        url(${BASE_URL}/s${i + 1}.png) no-repeat center/cover,
                        ${item.background}
                      `}
                  />
                </CenterCol>
              ))}
            </Row>
          </ByTabItem>
        </ByTabPane>
      </Hidden>
      {/* 移动端 */}
      <Visible xs sm>
        <TabStyleXs>行业解决方案</TabStyleXs>
        <ByProgressSwiper contentPadding="9.9%" progressPadding="9.8%" previewWidth="5.33%">
          {INDUSTRY_SOLUTION.map((item, i) => (
            // 算垂直百分比时应该用对应(margin或padding)/父元素width，得到其占比
            <AppliedProdCard
              {...item}
              width="100%"
              height={0.6333}
              twoSpace="2% 9%"
              padding="9.66% 8% 0px"
              borderRadius="8px"
              background={`
                url(${BASE_URL}/i${i + 1}.png) no-repeat center/cover,
                ${item.background}
              `}
              key={i}
            />
          ))}
        </ByProgressSwiper>

        <TabStyleXs>场景解决方案</TabStyleXs>
        <ByProgressSwiper contentPadding="9.9%" progressPadding="9.8%" previewWidth="5.33%">
          {SCENES_SOLUTION.map((item, i) => (
            <AppliedProdCard
              {...item}
              width="100%"
              height={0.6333}
              twoSpace="2% 9%"
              padding="9.66% 8% 0px"
              borderRadius="8px"
              background={`
                url(${BASE_URL}/s-xs${i + 1}.png) no-repeat center/cover,
                ${item.background}
              `}
              key={i}
            />
          ))}
        </ByProgressSwiper>
      </Visible>
    </ByDescFontLight>
  );
};

export type IAppliedProdProps = IProps;
const AppliedProd = styled(RawAppliedProd)<IAppliedProdProps>``;
export default AppliedProd;
