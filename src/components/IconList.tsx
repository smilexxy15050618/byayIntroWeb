import React, { FC, useState, useEffect, useRef, useCallback, useMemo, CSSProperties } from 'react';
import styled from 'styled-components';

export const IconWrapper = styled.div<{ size: number }>`
  ${props => `width: ${props.size}px;height: ${props.size}px;`}
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgb(234 236 246 / 35%);
  border: 1px solid rgba(243, 242, 243, 0.7);
  overflow: hidden;
  > img {
    width: 76%;
  }
`;

export const IconListWrapper = styled.div<{ gap: number; row: number; column: number }>`
  display: grid;
  gap: ${props => props.gap}px;
  grid-template-columns: repeat(${props => props.column}, 1fr);
  grid-template-rows: repeat(${props => props.row}, 1fr);
`;

export type IIconListProps = {
  iconInfoList: string[];
  gap: number;
  size?: number;
  column: number;
  row: number;
  style?: CSSProperties;
};

const IconList: FC<IIconListProps> = ({ iconInfoList, size = 70, ...otherProps }) => {
  return (
    <IconListWrapper {...otherProps} className="">
      {iconInfoList.map(src => {
        return (
          <IconWrapper size={size}>
            <img src={src} />
          </IconWrapper>
        );
      })}
    </IconListWrapper>
  );
};

export default IconList;
