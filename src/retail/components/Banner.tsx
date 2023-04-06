import React, { CSSProperties, FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { useWindowWidth } from '../../lib/hooks-utils';
import ByContainer from './common/ByContainer';

const TextArea = styled.div`
  @media (min-width: 769px) {
    padding-left: 20px;
  }
  height: 100%;
  padding-top: 161px;
  @media (max-width: 768px) {
    height: auto;
    padding-top: 0px;
    display: flex;
    align-items: center;
    flex-direction: column;
    animation: none;
  }
`;
const titleCss = css`
  font-size: 40px;
  font-weight: 500;
  color: #ffffff;
  line-height: 56px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
const Title = styled.div`
  ${titleCss}
  font-size: 60px;
  font-weight: 600;
  line-height: 84px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media (max-height: 666px) and (max-width: 768px) {
    font-size: 26px;
    line-height: 34px;
  }
`;
const SubTitle = styled.div`
  ${titleCss}
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 40px;
  }
  @media (max-height: 666px) and (max-width: 768px) {
    font-size: 18px;
    line-height: 34px;
  }
`;
const Desc = styled.div`
  margin: 16px 0px 26px;
  width: 461px;
  font-size: 27px;
  font-family: PingFangSC-Light, PingFang SC;
  font-weight: 300;
  color: #ffffff;
  line-height: 44px;
  letter-spacing: 1px;
  @media (max-width: 768px) {
    text-align: justify;
    width: 100%;
    font-size: 16px;
    margin: 16px 0px 40px;
    font-size: 24px;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.85);
    line-height: 32px;
  }
  @media (max-height: 666px) and (max-width: 768px) {
    font-size: 21px;
    line-height: 38px;
    margin: 12px 0px 18px;
  }
`;
const Img = styled.img`
  margin-bottom: 0;
  max-width: 574px;
  width: 123.7%;
`;
const ImgArea = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  > img {
    position: absolute;
  }
`;
interface DynamicImg {
  src: string;
  style: CSSProperties;
  className?: string[];
}
interface IProps {
  className?: string;
  children?: ReactNode;
  title?: string;
  subTitle?: string;
  desc?: ReactNode;
  descXs?: ReactNode;
  btnText?: string;
  pcImgs?: DynamicImg[];
  mobileImg?: string;
  onClick?(): void;
  background: string | string[];
  minWidthPC?: string;
  mobileStyle?: CSSProperties;
}

const commonClassName = ['animate__animated', 'wow'];
const RawBanner: FC<IProps> = ({
  className,
  // pcImgs,
  // mobileImg,
  // title,
  // subTitle,
  // desc,
  // descXs,
  // btnText,
  // onClick,
  background,
  minWidthPC,
  children,
  // mobileStyle,
}) => {
  const winWidth = useWindowWidth(17);
  return (
    <>
      <ByContainer
        background={background}
        height={['680px', 'calc(100vh - 52px)']}
        maxWidthPc="1200px"
        minWidthPC={minWidthPC}
        className={className}
        padding={[, '112px 8.6% 0px']}>
        {children}
      </ByContainer>
    </>
  );
};

export type IBannerProps = IProps;
const Banner = styled(RawBanner)<IBannerProps>`
  @media (max-height: 666px) and (max-width: 768px) {
    padding-top: 68px;
  }
`;
export default Banner;
