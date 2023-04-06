import Link from 'next/link';
import { FC, ReactNode, useState } from 'react';
import { Col, Hidden, Row, Visible } from 'react-grid-system';
import styled from 'styled-components';
import ByDescFontLight from '../../common/ByDescFontLight';
import BaseAIProductCard from './BaseAIProductCard';

const BASE_URL = `https://cdn.byai.com/static/intro/img/index/version2021/base-product`;
const BASE_PRODUCTS = [
  {
    title: '3D虚拟数字人',
    desc: '面向未来的全维度AI交互体验',
    href: '/product/virtual-robot',
  },
  {
    title: '电话机器人',
    desc: '充分释放传统呼叫中心效能',
    href: '/product/voice-robot',
  },
  {
    title: '文本机器人',
    desc: '更善解人意的AI员工',
    href: '/product/text-robot',
  },
  {
    title: '分析机器人',
    desc: '业务规范与风险的智能保障',
    href: '/product/quality-test-robot',
  },
  {
    title: '智能工作手机',
    desc: '工作全流程智能化管控',
    href: '/product/smart-workphone',
  },
];
const PCWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-left: 20px;
  > div:nth-child(n + 1) {
    margin-right: 20px;
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
  const [activeIndex, setActiveIndex] = useState(-1);
  return (
    <ByDescFontLight
      title="基础型AI产品"
      desc="AI驱动人机协同，提效超乎想象"
      padding={['100px 20px 0px', '33px 0px']}
      descBottom={['64px', '40px']}
      needDecoration={false}
      className={className}>
      <Hidden xs sm>
        <PCWrapper>
          {BASE_PRODUCTS.map((item, i) => (
            <Link href={item.href} key={item.href}>
              <div>
                <BaseAIProductCard
                  onMouseEnter={() => setActiveIndex(i)}
                  onMouseLeave={() => setActiveIndex(-1)}
                  isActive={i === activeIndex}
                  title={item.title}
                  desc={item.desc}
                  imgUrl={`${BASE_URL}/p${i + 1}.png`}
                  key={item.title}
                />
              </div>
            </Link>
          ))}
        </PCWrapper>
      </Hidden>
      <Visible xs sm>
        <MobileRow>
          {BASE_PRODUCTS.map((item, i, arr) => (
            <Col xs={i === arr.length - 1 ? 24 : 12} key={i}>
              <Link href={item.href}>
                <div className={i === arr.length - 1 ? 'cell-container lastone' : 'cell-container'}>
                  <BaseAIProductCard
                    title={item.title}
                    desc={item.desc}
                    imgUrl={`${BASE_URL}/p${i + 1}.png`}
                    isActive={false}
                    key={item.title}
                  />
                </div>
              </Link>
            </Col>
          ))}
        </MobileRow>
      </Visible>
    </ByDescFontLight>
  );
};

export type IBaseAIProductProps = IProps;
const BaseAIProduct = styled(RawBaseAIProduct)<IBaseAIProductProps>``;
export default BaseAIProduct;
