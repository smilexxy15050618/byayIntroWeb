import React from 'react';
import { Col, Container, Hidden, Row, Visible } from 'react-grid-system';
import styled, { css } from 'styled-components';
import { media } from '../../constants/style';
import Box from '../Box';

export const DataVisualWrapper = styled.div<{
  odd?: boolean;
  hasBtn?: boolean;
  center: boolean;
  invisibleInMobile: boolean;
}>`
  ${props =>
    props.invisibleInMobile &&
    css`
      ${media.phone`
        display: none;
      `}
    `}
  > div {
    height: 100%;
    > div {
      height: 100%;
    }
  }
  h3 {
    line-height: 1.3;
    margin: 0;
    margin-top: ${props => (props.hasBtn ? '-50px' : '0px')};
  }
  .p-wrapper {
    margin-top: 25px;
    flex-direction: column;
  }
  .data-visual-wrapper {
    display: flex;
    flex-direction: row-reverse;
    padding-top: 60px;
    padding-bottom: 40px;
    height: 100%;
    align-items: center !important;
    ${props =>
    props.odd &&
    css`
        flex-direction: row;
      `}
    ${media.phone`
      > div {
        justify-content: center;
      }
      padding: 0 16px;
    `}
    > div {
      height: 100%;
      ${media.phone`
        height: auto;
      `}
    }
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 20px;
    }
  }
  background-color: #f8f9fb;
  background-size: cover;
  ${props =>
    props.odd &&
    css`
      background-color: #fff;
    `}
  /* height: 600px; */
  ${media.phone`
    height: inherit
  `}
`;

export const DescRow = styled(Row)`
  width: 100%;
  max-width: 100vw;
  ${media.phone`
    flex-direction: column-reverse;
  `}
`;

export const DescCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 11px !important;
  ${media.phone`
    padding-left: 0 !important;
    align-items: center;
  `}
  h3,
  h4 {
    margin-top: 20px;
    font-size: 36px;
    font-weight: 400;
    color: rgba(13, 25, 36, 1);
    line-height: 42px;
    ${media.phone`
      margin-top: 12px;
      padding-left: 0 !important;
      align-items: center;
      text-align: center;
    `}
  }
  h4 {
    font-size: 28px;
    font-weight: 400;
  }
  p {
    line-height: 28px;
    font-size: 16px;
    color: #666;
    margin: 0 !important;
  }
  > div {
    display: flex;
    ${media.phone`
      justify-content: center;
      margin: 16px 0 0 0;
    `}
    > div {
      margin-right: 50px;
      ${media.phone`
        margin-right: 16px;
      `}
      &:last-child {
        margin-right: 32px;
        margin-right: 0px;
      }
    }
  }
`;

export const DescImgCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.phone`
    padding-bottom: 50px;
  `}
  img {
    width: 50vw;
    ${media.phone`
      width: 84vw;
      margin-bottom: 0;
    `}
  }
`;

export const DataVisual = ({
  title1,
  imgurl,
  mobileImgUrl,
  descList,
  center = false,
  render,
  odd,
  invisibleInMobile = false,
}) => {
  return (
    <DataVisualWrapper odd={odd} center={center} invisibleInMobile={invisibleInMobile}>
      <Container>
        {typeof render === 'function' ? (
          render()
        ) : (
          <Row className="data-visual-wrapper translate-x">
            <DescCol lg={10} md={10} sm={24}>
              <Visible md lg xl xxl xxxl>
                <h3>{title1}</h3>
              </Visible>
              <Hidden md lg xl xxl xxxl>
                <Box as="section" mt="40px" mb="20px">
                  <h3>{title1}</h3>
                </Box>
              </Hidden>
              <Visible md lg xl xxl xxxl>
                <div className="p-wrapper">
                  {descList.map(descItem => (
                    <p key={descItem}>{descItem}</p>
                  ))}
                </div>
              </Visible>
            </DescCol>
            <DescImgCol lg={14} md={14} sm={24}>
              <Visible md lg xl xxl xxxl>
                <img src={imgurl} alt="" />
              </Visible>
              <Hidden md lg xl xxl xxxl>
                <img src={mobileImgUrl || imgurl} alt="" />
              </Hidden>
            </DescImgCol>
          </Row>
        )}
      </Container>
    </DataVisualWrapper>
  );
};
