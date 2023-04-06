import { media } from '../../constants/style';
import styled from 'styled-components';
import { Col } from 'react-grid-system';
export const DescColNew = styled(Col)`
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
    font-weight: 500;
    color: rgba(13, 25, 36, 1);
    line-height: 42px;
    transform: translateX(-200px);
    ${media.phone`
      margin-top: 12px;
      padding-left: 0 !important;
      align-items: center;
      text-align: center;
      transform: translateX(0px);
      font-size: 20px;
      margin-top: 0;
      line-height: 28px;
    `}
  }
  h4 {
    font-size: 28px;
    font-weight: 400;
  }
  p {
    color: rgba(102, 102, 102, 1);
    /* margin-bottom: 60px; */
    /* margin-right: 136px; */
    ${media.phone`
      display: none;
    `}
    line-height: 24px;
    font-size: 14px;
  }
  > div {
    display: flex;
    transform: translateX(-200px);
    ${media.phone`
      justify-content: center;
      margin: 16px 0 0 0;
      transform: translateX(0px);
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
