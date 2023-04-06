import { media } from '../../constants/style';
import styled from 'styled-components';
import { Row, Col } from 'react-grid-system';

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
  padding-left: 15px !important;
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
    font-size: 14px;
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
