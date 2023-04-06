import React, { CSSProperties, FC } from 'react';
import styled from 'styled-components';
import Box from './Box';

const Wrap = styled.div``;

interface IProps {
  width: string;
  height: string;
  data: DynamicImg[];
}

interface DynamicImg {
  src: string;
  style: CSSProperties;
  className?: string;
}

const DynamicImgs: FC<IProps> = ({ width, height, data }) => {
  return (
    <Box width={width} height={height} position="relative">
      {data.map(it => (
        <img {...it} />
      ))}
    </Box>
  );
};

export { DynamicImgs };
