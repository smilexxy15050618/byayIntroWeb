import styled, { css } from 'styled-components';
import { media } from '../../constants/style';

export default styled.div<{ cover: string }>`
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
      width: 165px;
      height: 220px;
      margin-right: 15px;
    `}
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
      transform: translateY(30px);
    `}
  }
  @media (max-width: 768px) {
    span {
      font-size: 16px;
    }
  }
`;
