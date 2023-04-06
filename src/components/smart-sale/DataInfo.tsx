import React, { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Visible, Hidden } from 'react-grid-system';
import Box from '../Box';
import { media } from '../../constants/style';

interface ISubItem {
  subTitle: string;
  subContent: string;
}

export interface IDataInfoProps {
  title: string;
  desc: ReactNode;
  imgUrl: string;
  sublist?: ISubItem[];
  isOdd?: boolean;
  id?: string;
}

const Wrap = styled(Box)`
  img {
    display: block;
  }
`;

const TitleWrap = styled(Box)`
  position: relative;
  ::after {
    content: '';
    width: 36px;
    height: 6px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #fdb832;
  }
  ${media.phone`
    ::after {
      width: 18px;
      height: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
  `}
`;

export const DataInfo: FC<IDataInfoProps> = props => {
  const { title, desc, imgUrl, sublist = [], isOdd = false, id } = props;
  return (
    <>
      <Hidden xs sm>
        <Wrap
          id={id}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          flexDirection={isOdd ? 'row-reverse' : 'row'}>
          <Box>
            <TitleWrap as="h3" my={0} py={2}>
              {title}
            </TitleWrap>
            <Box fontSize={24} fontWeight={600} mt={2} mb={0}>
              {desc}
            </Box>
            <Box mt={4} maxWidth={520}>
              {sublist.map(({ subTitle, subContent }) => (
                <Box key={subTitle} lineHeight="36px">
                  <Box as="span" fontWeight={600}>
                    {subTitle}：
                  </Box>
                  <Box color="#666" as="span">
                    {subContent}
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
          <Box width={600}>
            <img src={imgUrl} />
          </Box>
        </Wrap>
      </Hidden>
      <Visible xs sm>
        <img src={imgUrl} />
        <Box textAlign="center">
          <TitleWrap as="h4" my={0} pb={1}>
            {title}
          </TitleWrap>
          <Box mt="10px" fontWeight={600} color="#666">
            {desc}
          </Box>
        </Box>
      </Visible>
    </>
  );
};
