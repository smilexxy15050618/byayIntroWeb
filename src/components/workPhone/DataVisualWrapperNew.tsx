import styled, { css } from 'styled-components';
import { media } from '../../constants/style';

export default styled.div<{ odd?: boolean; hasBtn?: boolean }>`
  > div {
    height: 100%;
    > div {
      height: 100%;
    }
  }
  h3 {
    line-height: 1.3;
    margin: 0;
    width: 510px;
    margin-top: ${props => (props.hasBtn ? '-50px' : '0px')};
    ${media.phone`
      margin-top: 120px;
    `}
  }
  .p-wrapper {
    margin-top: 25px;
    flex-direction: column;
  }
  .data-visual-wrapper {
    height: 100%;
    align-items: center !important;
    ${media.phone`
      > div {
        justify-content: center;
      }
      flex-direction: column-reverse;
      padding: 0 20px;
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
    .data-visual-wrapper {
      display: flex;
      flex-direction: row;
      ${props =>
        props.odd &&
        css`
          flex-direction: column-reverse;
        `}
    }
  }
  background-color: #f8f9fb;
  background-size: cover;
  ${props =>
    props.odd &&
    css`
      background-color: #fff;
    `}
  height: 600px;
  ${media.phone`
    height: inherit
  `}
`;

export const BigTitleWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 50px;
  h1 {
    font-weight: 500;
    font-size: 36px;
    border: 0;
    color: rgba(13, 25, 36, 1);
  }
`;

export const TradeMoreCol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: rgba(13, 25, 36, 1);
  height: 50px;
  line-height: 22px;
  margin-top: 20px;
  a {
    color: #ffffff;
  }
  a:hover {
    color: #4078c0;
  }

  span {
    cursor: pointer;
  }
  .iconfont {
    display: inline-block;
    margin-left: 10px;
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    color: #3153d4;
    .iconfont {
      font-size: 20px;
      transform: translateX(5px);
    }
  }
`;

export const Wrapper = styled.div`
  background: #fff;
  h1 {
    border: 0;
  }
  .demand-img {
    height: 440px;
    box-shadow: 0px 10px 30px 0px rgba(49, 83, 212, 0.1);
  }
`;

export const H3 = styled.div`
  color: #0d1924;
  font-size: 22px;
`;

export const Desc = styled.div`
  color: #666;
  font-size: 18px;
  font-weight: 300;
`;
