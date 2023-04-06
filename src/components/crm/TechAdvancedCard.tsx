import React, { FC } from 'react';
import styled from 'styled-components';
import { media } from '../../constants/style';

export const Wrap = styled.div`
  height: 328px;
  width: 285px;
  background: #fff;
  border-radius: 14px;
  @media (min-width: 768px) {
    &:hover {
      img {
        transform: scale(1.08);
      }
    }
  }
  img {
    width: 100%;
    height: 200px;
    transition: all 0.3s ease-in-out;
    width: 100%;
    height: 100%;
    margin: 0;
  }
  ${media.phone`
      width: 163px;
      height: 210px;
      border-radius: 8px;
      img {
        height: 114px;
      }
    `}
`;

const ImgWrap = styled.div`
  overflow: hidden;
  border-radius: 14px 14px 0 0;

  ${media.phone`
    border-radius: 8px 8px 0 0;
  `}
`;

const Desc = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: #000;
  line-height: 28px;
  white-space: wrap;
  padding: 32px 18px 0;

  ${media.phone`
    padding: 16px 16px 0;
    font-size: 14px;
    line-height: 20px;
  `}
`;
type IProps = {
  img: string;
  desc: string;
};
const TechAdvancedCard: FC<IProps> = ({ img, desc }) => {
  return (
    <Wrap>
      <ImgWrap>
        <img src={img} />
      </ImgWrap>
      <Desc>{desc}</Desc>
    </Wrap>
  );
};

export { TechAdvancedCard };
