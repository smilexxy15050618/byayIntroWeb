import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { useWindowWidth } from '../../lib/hooks-utils';
import Box from '../Box';
import ByContainer from '../common/ByContainer';
import IndustryCaseCard, { ICaseInfo } from './IndustryCaseCard';

const PREFIX = 'https://cdn.byai.com/static/intro/img/voice-robot';
const BG_XS = `${PREFIX}/industry-case-bg-xs.png`;
const PC_BG = '//cdn.byai.com/static/intro/img/workphone/%E8%A1%8C%E4%B8%9A%E6%A1%88%E4%BE%8B%402x.png';
const ValueTitle = styled.div`
  margin-top: 10px;
  font-size: 18px;
  line-height: 28px;
  @media (max-width: 768px) {
    margin-top: 10px;
    font-size: 14px;
    line-height: 22px;
  }
`;
const Desx = styled.div`
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
// 带“•”的小组件
export const IndustryItem: FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <>
    <ValueTitle>{title}</ValueTitle>
    <Desx>{desc}</Desx>
  </>
);
// 案例数据

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 600;
  color: #000000;
  line-height: 40px;
  margin-bottom: 65px;
  @media (max-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
    font-weight: 500;
    color: #000000;
    line-height: 32px;
  }
`;

interface IProps {
  className?: string;
  children?: ReactNode;
  caseInfos: ICaseInfo[];
  bgColor?: string;
}
const RawIndustryCase: FC<IProps> = ({ className, caseInfos, bgColor }) => {
  const windowWidth = useWindowWidth(200);
  return (
    <ByContainer
      maxWidthPc="1200px"
      padding={['100px 0', '40px 6.4%']}
      className={className}
      background={[
        `url(${PC_BG}) ${bgColor || 'transparent'} no-repeat center 0 / cover`,
        `
        url(${BG_XS}) ${bgColor || 'transparent'} center/cover
      `,
      ]}>
      <Content>
        <Title>行业案例</Title>
        {caseInfos.map((item, i) => (
          <IndustryCaseCard caseInfo={item} key={i} isMobile={windowWidth < 768} />
        ))}
      </Content>
    </ByContainer>
  );
};

export type IIndustryCaseProps = IProps;
const IndustryCase = styled(RawIndustryCase)<IIndustryCaseProps>``;
export default IndustryCase;
