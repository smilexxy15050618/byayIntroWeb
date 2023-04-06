import React, { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import Box from '../Box';

interface IProps {
  content: ReactNode;
  imgUrl: string;
}

const Wrap = styled(Box)<{ backgroundImage?: string }>`
  width: 240px;
  height: 218px;
  box-sizing: border-box;
  padding-bottom: 22px;
  ${props => {
    return (
      props.backgroundImage &&
      css`
        background: url('${props.backgroundImage}') no-repeat center/contain;
      `
    );
  }}
`;

export const ImageInnerTitle: FC<IProps> = props => {
  const { content, imgUrl } = props;
  return (
    <Wrap display="flex" flexDirection="column" backgroundImage={imgUrl}>
      <Box color="#fff" textAlign="center" mt="auto">
        {content}
      </Box>
    </Wrap>
  );
};
