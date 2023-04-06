import styled, { css } from 'styled-components';
import { media } from '../../../src/constants/style';

export const DataVisualWrapper = styled.div<{ odd?: boolean; hasBtn?: boolean }>`
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
    flex-direction: row;
    height: 100%;
    align-items: center !important;
    ${props =>
      props.odd &&
      css`
        flex-direction: row-reverse;
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

export const ShowCard = styled.div<{ cover: string }>`
  height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  ${media.phone`
    height: 300px;
    margin-bottom: 10px;
    `}
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
    width: 94%;
    height: 100%;
  }
  .mask {
    position: absolute;
    background: linear-gradient(to bottom, rgba(49, 83, 212, 0.2), rgba(49, 83, 212, 0.9));
    width: 100%;
    height: 100%;
  }
  .cover {
    background-image: url(${props => props.cover});
    position: absolute;
    background-position: center;
    background-size: cover;
    transition: all 0.3s ease-in-out 0s;
    background-repeat: no-repeat;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
  .wrapper:hover .cover {
    transform: scale(1.06);
  }
  span {
    text-align: center;
    width: 140px;
    position: relative;
    margin-bottom: 54px;
    font-size: 26px;
    color: #ffffff;
    &:after {
      content: '';
      background-color: #fff;
      height: 2px;
      bottom: -12px;
      left: 55px;
      right: 55px;
      position: absolute;
    }
  }
  @media (max-width: 768px) {
    span {
      font-size: 16px;
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
