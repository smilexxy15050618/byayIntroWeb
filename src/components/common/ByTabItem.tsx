import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
interface IProps {
  tabName: string;
  className?: string;
  children?: ReactNode;
}

const RawByTabItem: FC<IProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export type IByTabItemProps = IProps;
const ByTabItem = styled(RawByTabItem)<IByTabItemProps>``;
export default ByTabItem;
