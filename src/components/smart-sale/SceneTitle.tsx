import React, { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import Box from '../Box';
import { Visible, Hidden } from 'react-grid-system';

interface IProps {
  title: string;
  content: string;
  numberImg?: string;
  tipImg?: string;
}

const Wrap = styled(Box)``;

export const SceneTitle: FC<IProps> = props => {
  const { title, content, numberImg, tipImg } = props;
  return (
    <Wrap pt={8} textAlign="center">
      <Box as="h3" fontSize={36} position="relative" display="inline-block" my={0}>
        {title}
        {numberImg && (
          <Box width={[48, 48, 96]} position="absolute" left="50%" bottom={1} style={{ transform: 'translateX(-50%)' }}>
            <img src={numberImg} />
          </Box>
        )}
        {tipImg && (
          <Box
            width={[75, 75, 125]}
            position="absolute"
            left={['calc( 100% + 13px )', 'calc( 100% + 13px )', 'calc( 100% + 30px )']}
            bottom={0}>
            <img src={tipImg} />
          </Box>
        )}
      </Box>
      <Box color="#666" fontSize={[14, 14, 20]} mt={[0.75, 0.75, 1.5]}>
        {content}
      </Box>
    </Wrap>
  );
};
