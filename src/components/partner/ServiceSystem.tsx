import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import ByDesc from '../common/ByDesc';
import ServiceCard from './ServiceCard';
const PREFIX = 'https://cdn.byai.com/static/official-website/cooperation/service-system';
const TRADE30_IMG = `${PREFIX}/perfect-circle.png`;
const TRADE31_IMG = `${PREFIX}/dots.png`;
const TRADE32_IMG = `${PREFIX}/service-AI-train.png`;
const TRADE33_IMG = `${PREFIX}/service-before.png`;
const TRADE34_IMG = `${PREFIX}/service-do.png`;
const TRADE35_IMG = `${PREFIX}/service-after.png`;
const CARDS_INFO = [
  {
    title: '售前服务团队',
    desc: '根据客户不同行业痛点、业务属性、工作流程等定制专属解决方案，助力企业业务目标达成。',
    imageUrl: TRADE32_IMG,
  },
  {
    title: '项目实施团队',
    desc: '专业化的实施团队，在POC阶段、项目实施阶段、后期运维阶段实现快速响应和部署，保障系统正常稳定运行，提供专业产品培训，确保项目保质保量交付。',
    imageUrl: TRADE33_IMG,
  },
  {
    title: 'AI训练团队',
    desc: '具备26+个行业专业话术设计及话术训练师团队，快速实现客户应用场景话术的上线，并根据行业经验不断优化和训练，使客户的AI能力越来越完善和智能。',
    imageUrl: TRADE34_IMG,
  },
  {
    title: '售后支持团队',
    desc: '实时响应客户业务咨询和需求，每周定时提供产品更新日志，同时开设百应课堂，在线分享智能营销知识，辅助客户灵活运用产品，驱动业务增长。',
    imageUrl: TRADE35_IMG,
  },
];

const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-left: 30px;
  > div {
    margin-bottom: 20px;
    margin-right: 30px;
  }
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;

interface IProps {
  className?: string;
  children?: ReactNode;
}
const RawServiceSystem: FC<IProps> = ({ className }) => {
  return (
    <ByDesc
      descBottom={['70px', '24px']}
      padding={['100px 20px 140px', '0px calc((100% - 327px) / 2) 40px']}
      title="完善的服务体系保驾护航"
      desc="300+服务网点，450+服务城市，4大客户成功团队体系，为平台生态建设及运维保障全流程护航"
      needDecoration={[, false]}
      className={className}
      background={[
        `
        url(${TRADE30_IMG}) no-repeat left -120px top 165px,
        url(${TRADE31_IMG}) no-repeat right -30px bottom -30px, #f9faff;
      `,
        `
      #F5F7FA
      `,
      ]}>
      <CardList>
        {CARDS_INFO.map((item, i) => (
          <ServiceCard {...item} key={i} />
        ))}
      </CardList>
    </ByDesc>
  );
};

export type IServiceSystemProps = IProps;
const ServiceSystem = styled(RawServiceSystem)<IServiceSystemProps>``;
export default ServiceSystem;
