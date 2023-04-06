import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import ByRatioBox from '../../common/ByRatioBox';

const Title = styled.div`
  width: 48px;
  height: 33px;
  font-size: 24px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 33px;
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 25px;
  }
`;
const UnderBlock = styled.div<{ twoSpace: string }>`
  width: 20px;
  height: 4px;
  background: #ffffff;
  margin: ${({ twoSpace }) => {
    if (!twoSpace) return '8px 0px 39px';
    return `${twoSpace.split(' ')[0] + ' 0px ' + twoSpace.split(' ')[1]}`;
  }};
  @media (max-width: 768px) {
    width: 16px;
    height: 3px;
  }
`;
const Desc = styled.div`
  width: 100%;
  height: 66px;
  text-align: justify;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  line-height: 22px;
  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }
`;

interface IProps {
  className?: string;
  children?: ReactNode;
  title: string;
  desc: string;
  twoSpace: string;
  height: string | number; // number类型表示高是宽的多少倍
  width: string;
  padding: string;
}
const RawAppliedProdCard: FC<IProps> = ({ className, title, desc, twoSpace, height, width, padding }) => {
  const useRatioFix = typeof height === 'number';
  return (
    <ByRatioBox {...{ [`${useRatioFix ? 'ratio' : 'height'}`]: height, width, padding }} className={className}>
      <Title>{title}</Title>
      <UnderBlock twoSpace={twoSpace} />
      <Desc>{desc}</Desc>
    </ByRatioBox>
  );
};

export interface IAppliedProdCardProps extends IProps {
  background: string;
  borderRadius: string;
}

const AppliedProdCard = styled(RawAppliedProdCard)<IAppliedProdCardProps>`
  background: ${props => props.background};
  border-radius: ${props => props.borderRadius};
  transition: 0.2s;
  @media (min-width: 769px) {
    :hover {
      transform: scale(1.1);
    }
  }
`;
export default AppliedProdCard;
