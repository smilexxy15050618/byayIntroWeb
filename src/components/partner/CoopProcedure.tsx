import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import ByDesc from '../common/ByDesc';
import BePartnerStep from './BePartnerStepNew';

const PREFIX = 'https://cdn.byai.com/static/official-website/cooperation';
const TRADE37_IMG = `${PREFIX}/coop-process-one.png`;
const TRADE38_IMG = `${PREFIX}/coop-process-two.png`;
const TRADE39_IMG = `${PREFIX}/coop-process-three.png`;
const TRADE40_IMG = `${PREFIX}/coop-process-four.png`;
interface IProps {
  className?: string;
  children?: ReactNode;
}

const RawCoopProcedure: FC<IProps> = ({ className }) => {
  return (
    <ByDesc
      padding={['100px 20px 140px', '0px 20px 40px']}
      descBottom={['110px', '24px']}
      needDecoration={[, false]}
      title="合作流程"
      desc="COOPERATION PROCESS"
      background={['#FFFFFF', '#F5F7FA']}
      className={className}>
      <BePartnerStep
        steps={[
          { url: TRADE37_IMG, desc: '提交申请' },
          { url: TRADE38_IMG, desc: '选择合作伙伴计划加入' },
          { url: TRADE39_IMG, desc: '完成伙伴资质认证' },
          { url: TRADE40_IMG, desc: '成为合作伙伴' },
        ]}
      />
    </ByDesc>
  );
};

export type ICoopProcedureProps = IProps;
const CoopProcedure = styled(RawCoopProcedure)<ICoopProcedureProps>``;
export default CoopProcedure;
