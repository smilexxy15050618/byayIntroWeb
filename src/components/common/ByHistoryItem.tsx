import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
interface IProps {
  className?: string;
  children?: ReactNode;
  tabName: string | number;
}

const ByHistoryItem: FC<IProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export type IByHistoryItemProps = IProps;
const StyledByHistoryItem = styled(ByHistoryItem)<IByHistoryItemProps>``;
export default StyledByHistoryItem;
