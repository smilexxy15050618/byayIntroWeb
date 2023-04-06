import React, { FC, useState, useEffect, useRef, useCallback, useMemo, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { calWidthAndHeight } from '../lib/utils';
import { AngleRight } from './accordion/AngleRight';

export type IJumpBtnProps = {
  scale?: number;
};
const Wrapper = styled.div<{ scale }>`
  display: inline-block;
  height: 60px;
  padding: 0 32px 0 40px;
  line-height: 60px;
  border-radius: 8px;
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  background: #2b58f9;
  transform: scale(${props => props.scale});
  transform-origin: 0 0;
  cursor: pointer;
  &:hover {
    svg {
      animation: lrmove 3s infinite both;
    }
  }
  svg {
    display: inline-block;
    position: relative;
    top: -2px;
    height: 20px;
  }

  @keyframes lrmove {
    0% {
      transform: translate(0);
    }
    10% {
      transform: translate(4px);
    }
    20% {
      transform: translate(-2px);
    }
    30% {
      transform: translate(4px);
    }
    40% {
      transform: translate(-2px);
    }
    50% {
      transform: translate(0);
    }
  }
`;
const JumpBtn: FC<IJumpBtnProps & HTMLAttributes<HTMLDivElement>> = ({ children, scale = 1, ...otherProps }) => {
  return (
    <Wrapper {...otherProps} scale={scale}>
      {children} <AngleRight />
    </Wrapper>
  );
};

export default JumpBtn;
