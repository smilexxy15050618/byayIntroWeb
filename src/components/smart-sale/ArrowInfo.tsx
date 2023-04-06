import React, { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import Box from '../Box';

interface IProps {
  title: string;
  content: ReactNode;
  isRight?: boolean;
  mt?: string | number;
}

const Wrap = styled(Box)`
  h5,
  p,
  img {
    margin: 0;
  }
`;

const ArrowWrap = styled(Box)<{ isRight: boolean }>`
  ${props => {
    return !props.isRight
      ? css`
          margin-left: 30px;
        `
      : css`
          margin-right: 30px;
          transform: rotate(180deg);
        `;
  }}
`;

export const ArrowInfo: FC<IProps> = props => {
  const { title, content, isRight = false, mt } = props;
  return (
    <Wrap display="flex" alignItems="center" flexDirection={isRight ? 'row-reverse' : 'row'} mt={mt}>
      <Box>
        <Box fontWeight={600} fontSize={22}>
          {title}
        </Box>
        <Box color="#666" mt={1.5}>
          {content}
        </Box>
      </Box>
      <ArrowWrap isRight={isRight} width={35}>
        <img src="https://cdn.byai.com/static/intro/img/smart-sale/%E7%AE%AD%E5%A4%B4.png" />
      </ArrowWrap>
    </Wrap>
  );
};
