import React, { CSSProperties } from 'react';
import Box, { IBoxProps } from '../../../../components/Box';
import { CaseBox, ICaseBoxProps } from './components/case-box';
import { CaseListWrapper } from './styled';

interface ICaseListProps extends IBoxProps {
  caseInfoList: ICaseBoxProps[];
  style?: CSSProperties;
  commonCaseInfo?: Partial<ICaseBoxProps> | ((index: number, info: ICaseBoxProps) => Partial<ICaseBoxProps>);
}

export const CaseList: React.FC<ICaseListProps> = ({ caseInfoList, style, commonCaseInfo, ...boxProps }) => {
  return (
    <Box style={style} {...boxProps}>
      <CaseListWrapper>
        {caseInfoList.map((info, i) => {
          const commonProps = typeof commonCaseInfo === 'function' ? commonCaseInfo(i, info) : commonCaseInfo;
          return <CaseBox {...commonProps} {...info} />;
        })}
      </CaseListWrapper>
    </Box>
  );
};
