import { FC, ReactNode, useState } from 'react';
import { Hidden, Visible } from 'react-grid-system';
import styled from 'styled-components';
import ByDesc from '../common/ByDesc';
import ByProgressSwiper from '../common/ByProgressSwiper';
import ShadowHoverCard from './ShadowHoverCard';
const BASE_URL = 'https://cdn.byai.com/static/intro/img/index/applied-product';
const BACKGROUND = `${BASE_URL}/background.png`;
const BLUE_UNDER_DECO = `${BASE_URL}/blue-under-deco.png`;
const INDUSTRY_SOLUS = [
  {
    title: '银行',
    desc: 'AI助力，打造银行数字化转型“新引擎”',
    background: `url(${BASE_URL}/industy-solu-0.png)`,
  },
  {
    title: '政务',
    desc: 'AI赋能政务服务“零次跑”、“不见面”改革',
    background: `url(${BASE_URL}/industy-solu-1.png)`,
  },
  {
    title: '电商',
    desc: '从智能客服到智能营销，AI赋能7x24小时守候',
    background: `url(${BASE_URL}/industy-solu-2.png)`,
  },
  {
    title: '保险',
    desc: 'AI为保险业创造新价值，助力生产力提升',
    background: `url(${BASE_URL}/industy-solu-3.png)`,
  },
  {
    title: '证券',
    desc: 'AI助力券商变革创新，实现存量客户的深度开发',
    background: `url(${BASE_URL}/industy-solu-4.png)`,
  },
  {
    title: '教育',
    desc: 'AI驱动人机协同，实现邀约成功率持续提升',
    background: `url(${BASE_URL}/industy-solu-5.png)`,
  },
];
const SCENE_SOLUS = [
  {
    title: '营销',
    desc: '搭建营销获客矩阵，帮助企业建设从获客、转化、留存到经营的全生命周期营销体系',
    background: `url(${BASE_URL}/scene-solu-0.png)`,
  },
  {
    title: '销售',
    desc: '融合营销、客户管理、云呼叫、数据分析等多种能力，推动销售业绩全面提升',
    background: `url(${BASE_URL}/scene-solu-1.png)`,
  },
  {
    title: '服务',
    desc: '提供全天候、全渠道、全场景的智能服务，大幅提升顾客体验和满意度',
    background: `url(${BASE_URL}/scene-solu-2.png)`,
  },
  {
    title: '催收',
    desc: '构建贷中/贷后模型，实现差异化催收，直击传统催收痛点，让催收更高效更有温度',
    background: `url(${BASE_URL}/scene-solu-3.png)`,
  },
];
const ProductsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 25px;
  max-width: 1253px;
  min-width: 1253px;
  > div {
    margin-right: 25px;
    margin-bottom: 25px;
  }
`;

// 蓝色小标题
const BlueTitle = styled.div`
  margin-top: 60px;
  font-size: 18px;
  font-weight: 600;
  color: #2b58f9;
  line-height: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 40px;
  img {
    margin-top: 4px;
    width: 19px;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    font-size: 14px;
    img {
      width: 14px;
    }
    margin: 28px 0px 20px !important;
  }
`;

interface IProps {
  className?: string;
  children?: ReactNode;
}
const RawAppliedProduct: FC<IProps> = ({ className }) => {
  const [industrySolu, setIndustrySolu] = useState(0);
  const [sceneSolu, setSceneSolu] = useState(0);
  return (
    <ByDesc
      padding={['100px 20px', '40px 0px']}
      className={className}
      needDecoration={false}
      title="应用型行业产品"
      desc="实践验证，数智未来无限可能"
      background={`
        url(${BACKGROUND}) center/contain,
        #F9FAFF
      `}>
      {/* pc */}
      <Hidden xs sm>
        <BlueTitle>
          行业解决方案
          <img src={BLUE_UNDER_DECO} />
        </BlueTitle>
        <ProductsWrapper>
          {INDUSTRY_SOLUS.map(item => (
            <ShadowHoverCard
              key={item.title}
              title={item.title}
              desc={item.desc}
              width="383px"
              background={item.background}
            />
          ))}
        </ProductsWrapper>
        <BlueTitle>
          场景解决方案
          <img src={BLUE_UNDER_DECO} />
        </BlueTitle>
        <ProductsWrapper>
          {SCENE_SOLUS.map(item => (
            <ShadowHoverCard
              key={item.title}
              title={item.title}
              desc={item.desc}
              width="282px"
              background={item.background}
            />
          ))}
        </ProductsWrapper>
      </Hidden>
      {/* 移动端 */}
      <Visible xs sm>
        <BlueTitle>
          行业解决方案
          <img src={BLUE_UNDER_DECO} />
        </BlueTitle>
        <ByProgressSwiper
          setActiveIndex={index => {
            setIndustrySolu(index);
          }}
          contentPadding="10%"
          progressPadding="9%"
          width="100%"
          previewWidth="6%">
          {INDUSTRY_SOLUS.map((item, i) => (
            <ShadowHoverCard
              smallActive={industrySolu === i}
              key={item.title}
              title={item.title}
              desc={item.desc}
              width="100%"
              background={item.background}
            />
          ))}
        </ByProgressSwiper>
        <BlueTitle>
          场景解决方案
          <img src={BLUE_UNDER_DECO} />
        </BlueTitle>
        <ByProgressSwiper
          setActiveIndex={index => {
            setSceneSolu(index);
          }}
          contentPadding="10%"
          progressPadding="9%"
          width="100%"
          previewWidth="6%">
          {SCENE_SOLUS.map((item, i) => (
            <ShadowHoverCard
              smallActive={sceneSolu === i}
              key={item.title}
              title={item.title}
              desc={item.desc}
              width="100%"
              background={item.background}
            />
          ))}
        </ByProgressSwiper>
      </Visible>
    </ByDesc>
  );
};

export type IAppliedProductProps = IProps;
const AppliedProduct = styled(RawAppliedProduct)<IAppliedProductProps>``;
export default AppliedProduct;
