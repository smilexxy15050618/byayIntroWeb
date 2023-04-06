import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import ByDesc from '../common/ByDesc';
import ReasonCard from './ReasonCard';
import { Visible, Hidden } from 'react-grid-system';
interface IProps {
  className?: string;
  children?: ReactNode;
}
const CARDS_INFO = [
  {
    title: '显著的技术优势',
    desc: '百应科技在AI领域拥有资深技术团队，并获IDC、中国信通院等权威机构评估认可，实现AI核心技术全栈自研，帮助企业实现数智化转型升级。',
  },
  {
    title: '深厚的行业积累',
    desc: '优质的产研与市场渠道资源团队，有着10+年项目开发与行业拓展经验，我们期望与合作伙伴共生共赢，开拓更广阔的市场领域。',
  },
  {
    title: '丰富的市场资源',
    desc: '基于双方的产品服务和优势资源，联合开展市场推广、峰会交流等活动，帮助您营销和销售您的服务或兼容「百应AI」的解决方案产品。',
  },
  {
    title: '完善的培训体系',
    desc: '为合作伙伴提供以AI数智化能力为核心的解决方案支持，专业团队培训指导，提升伙伴的技术服务与业务开拓能力。',
  },
];

const CardList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 31px;
  border-radius: 8px;
  > div {
    margin-bottom: 20px;
    margin-right: 31px;
  }
  @media (max-width: 768px) {
    background: white;
    padding-top: 24px;
    flex-direction: column;
    padding-left: 24px;
    > div {
      margin-bottom: 24px;
      margin-right: 24px;
    }
  }
`;

const RawReasonToBePartner: FC<IProps> = ({ className }) => {
  return (
    <ByDesc
      title="为什么要成为百应合作伙伴"
      desc="百应「AI+」生态为伙伴提供多样化、深层次的合作模式，共享万亿级市场红利"
      descBottom={['70px', '24px']}
      needDecoration={[, false]}
      background={[, '#F5F7FA']}
      className={className}
      padding={['100px 20px 140px', '0px calc((100% - 327px) / 2) 40px']}>
      <CardList>
        <Hidden xs sm>
          {CARDS_INFO.map((item, i) => (
            <ReasonCard {...item} key={i} />
          ))}
        </Hidden>
        <Visible xs sm>
          {CARDS_INFO.map((item, i) => (
            <ReasonCard {...item} key={i} size="xsEc" />
          ))}
        </Visible>
      </CardList>
    </ByDesc>
  );
};

const ReasonToBePartner = styled(RawReasonToBePartner)<IProps>``;
export default ReasonToBePartner;
