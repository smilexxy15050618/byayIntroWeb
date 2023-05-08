import styled, { css } from 'styled-components';
import { media } from '../../constants/style';

export const BigTitleWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 50px;
  h1 {
    font-weight: 500;
    font-size: 36px;
    border: 0;
    color: rgba(13, 25, 36, 1);
    ${media.phone`
        margin: 0;
        padding: 0;
        font-weight: 400;
    `}
  }
`;

export const ShowCard = styled.div<{ cover: string }>`
  display: flex;
  justify-content: center;
  ${media.phone`
    margin-bottom: 20px;
    &:nth-child(2n) {
      .wrapper {
          margin-right: 0;
        }
      }
    `}
  &:nth-child(4n) {
    .wrapper {
      margin-right: 0;
    }
  }
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    position: relative;
    width: 282px;
    height: 400px;
    margin-right: 20px;
    ${media.phone`
      width: 155px;
      height: 220px;
      margin-right: 15px;
    `}
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
    ${media.phone`
      transform: translateY(18px)
    `}
    &:after {
      content: '';
      background-color: #fff;
      height: 2px;
      bottom: -12px;
      left: 50%;
      margin-left: -15px;
      right: 55px;
      width: 30px;
      position: absolute;
    }
  }
  @media (max-width: 768px) {
    span {
      font-size: 16px;
    }
  }
`;

export const TradeMoreCol = styled.div`
  font-size: 16px;
  color: rgba(13, 25, 36, 1);
  margin-bottom: 50px;
  margin-top: 70px;
  ${media.phone`
    margin-top: 30px;
    margin-bottom: 50px;
  `}
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
      transform: translateX(5px);
    }
  }
`;
