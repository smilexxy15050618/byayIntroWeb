import { FC, ReactNode, useState } from 'react';
import { Col, Hidden, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import ByDesc from '../common/ByDesc';
import HoverBigBlueCard from './HoverBigBlueCard';

const BASE_URL = `https://cdn.byai.com/static/intro/img/index/base-product`;
const BASE_PRODUCTS = [
  {
    title: '智能虚拟数字人',
    desc: '全维度交互体验、全智能沟通模式、全自动业务服务',
  },
  {
    title: '电话机器人',
    desc: '语音智能有效释放人力、提升效率与品质',
  },
  {
    title: '文本机器人',
    desc: '提供一流的自动化、专业化、智能化文本坐席AI团队',
  },
  {
    title: '分析机器人',
    desc: '全业务、全维度的实时质检、风险洞察与智能控制',
  },
  {
    title: '智能催收工作手机',
    desc: '工作的全流程采集与全数据沉淀',
  },
];
const PCWrapper = styled.div`
  height: 308px;
  display: flex;
  align-items: center;
  > div {
    border-color: rgba(0, 0, 0, 0.08) #ffffff rgba(0, 0, 0, 0.08) rgba(0, 0, 0, 0.08);
  }
  > div:nth-child(5) {
    border-color: rgba(0, 0, 0, 0.08) !important;
  }
`;

const MobileRow = styled(Row)`
  margin-top: 32px;
  width: 100%;
  .cell-container {
    width: 100%;
    padding-top: 100%;
    position: relative;
    > div {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      border-color: rgba(0, 0, 0, 0.08) #ffffff #ffffff rgba(0, 0, 0, 0.08);
    }
  }

  > div:nth-child(2) > .cell-container > div,
  > div:nth-child(4) > .cell-container > div {
    border-color: rgba(0, 0, 0, 0.08) rgba(0, 0, 0, 0.08) #ffffff rgba(0, 0, 0, 0.08);
  }
  > div:nth-child(5) > .cell-container > div {
    border-color: rgba(0, 0, 0, 0.08) !important;
  }
  .lastone {
    padding-top: 50%;
  }
`;

interface IProps {
  className?: string;
  children?: ReactNode;
}
const RawBaseAIProduct: FC<IProps> = ({ className }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <ByDesc
      title="基础型AI产品"
      desc="AI驱动人机协同，提效超乎想象"
      padding={['0px 20px 100px', '33px 0px']}
      descBottom="60px"
      needDecoration={false}
      className={className}>
      <Hidden xs sm>
        <PCWrapper>
          {BASE_PRODUCTS.map((item, i) => (
            <HoverBigBlueCard
              onMouseEnter={() => setActiveIndex(i)}
              isActive={i === activeIndex}
              title={item.title}
              desc={item.desc}
              imgUrl={`${BASE_URL}/img${i}-${i === activeIndex ? 'b' : 'a'}.png`}
              key={item.title}
            />
          ))}
        </PCWrapper>
      </Hidden>
      <Visible xs sm>
        <MobileRow>
          {BASE_PRODUCTS.map((item, i, arr) => (
            <Col xs={i === arr.length - 1 ? 24 : 12} key={i}>
              <div className={i === arr.length - 1 ? 'cell-container lastone' : 'cell-container'}>
                <HoverBigBlueCard
                  title={item.title}
                  desc={item.desc}
                  imgUrl={`${BASE_URL}/img${i}-a.png`}
                  isActive={false}
                  key={item.title}
                />
              </div>
            </Col>
          ))}
        </MobileRow>
      </Visible>
    </ByDesc>
  );
};

export type IBaseAIProductProps = IProps;
const BaseAIProduct = styled(RawBaseAIProduct)<IBaseAIProductProps>``;
export default BaseAIProduct;
