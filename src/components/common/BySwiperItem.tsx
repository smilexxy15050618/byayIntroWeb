import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
interface IProps {
  className?: string;
  children?: ReactNode;
  tabName: string;
}

const BySwiperItem: FC<IProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export type IBySwiperItemProps = IProps;
const StyledBySwiperItem = styled(BySwiperItem)<IBySwiperItemProps>``;
export default StyledBySwiperItem;
