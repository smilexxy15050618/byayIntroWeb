import styled from 'styled-components';
import { media } from '../../constants/style';

export const HeadImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${media.phone`
      /* margin-top: 40px; */
    `}
  img {
    margin-bottom: 0;
  }
`;

export const HeadContainer = styled.div`
  position: absolute;
  display: inline-block;
  color: white;
  text-align: center;
  margin-top: -40px;
  h1 {
    font-size: 60px;
    ${media.phone`
      font-size: 32px;
      position: relative;
    top: 30px;
    `}
  }
  p {
    font-size: 32px;
    ${media.phone`
      font-size: 14px;
      position: relative;
    top: 30px;
    `}
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }
  * {
    border: none;
  }
`;

export const NextGoBox = styled.div`
  color: white;
  font-size: 48px;
  text-align: center;
  position: absolute;
  bottom: 25px;
  ${media.phone`
  font-size: 36px;
  bottom: 15px;
`}
  display: inline-block;
  transform: rotate(180deg);
`;

export const NextGo = styled.i`
  color: white;
  font-size: 48px;
  text-align: center;
  ${media.phone`
    font-size: 36px;
  `}
  display: inline-block;
`;

export const More = styled.a`
  width: 64px;
  height: 22px;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #2b58f9 !important;
  line-height: 22px;
  position: absolute;
  bottom: 5px;
  cursor: pointer;
  text-decoration: none;
  :hover {
    text-decoration: none;
  }
  ${media.phone`
    bottom: 7px;
    font-size: 14px;
  `}
  :after {
    position: absolute;
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent transparent transparent #2b58f9;
    top: 7px;
    right: -10px;
    border-width: 5px;
    ${media.phone`
      border-width: 4px;
      right: -5px;
  `}
  }
`;
