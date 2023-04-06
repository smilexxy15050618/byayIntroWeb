import React, { FC, ReactNode, CSSProperties } from 'react';
import { Hidden, Visible } from 'react-grid-system';
import styled, { css } from 'styled-components';
import { useWindowWidth } from '../../../lib/hooks-utils';
import Box from '../../Box';
import ByContainer from '../../common/ByContainer';
import ByNormalBtn from '../../common/ByNormalBtn';
import { Linear } from '../../common/LinearLayout';

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
  title: string;
  subTitle?: string;
  desc?: ReactNode;
  descXs?: ReactNode;
  btnText: string;
  pcImgs: DynamicImg[];
  mobileImg: string;
  onClick?(): void;
  background: string | string[];
  minWidthPC?: string;
  mobileStyle?: CSSProperties;
}

const commonClassName = ['animate__animated', 'wow'];
const RawBanner: FC<IProps> = ({
  className,
  pcImgs,
  mobileImg,
  title,
  subTitle,
  desc,
  descXs,
  btnText,
  onClick,
  background,
  minWidthPC,
  mobileStyle,
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
        <Linear justify="space-evenly" space={['0', '10px']} height={['100%', '100%']}>
          <TextArea className="animate__animated animate__fadeInLeft">
            <Title>{title}</Title>
            {subTitle && <SubTitle>{subTitle}</SubTitle>}
            {desc && <Desc>{winWidth > 768 ? desc : descXs}</Desc>}
            <ByNormalBtn
              onClick={() => onClick()}
              width="128px"
              height="50px"
              color="#FFFFFF"
              bigStyle={`
                width: 128px;
                height: 50px;
                border-radius: 25px;
                border: 1px solid #FFFFFF;
                font-size: 16px;
                font-weight: 500;
                color: #FFFFFF;
              `}
              smallStyle={`
                width: 128px;
                height: 44px;
                font-size: 16px;
                font-weight: 400;
              `}
              background="transparent">
              {btnText}
            </ByNormalBtn>
          </TextArea>
          <Hidden xs sm>
            <ImgArea>
              {pcImgs.map(({ className = [], ...rest }) => {
                const cls = [...commonClassName, ...className].join(' ');
                return <Box as="img" {...rest} className={cls} minWidth={rest.style.width} key={rest.src} />;
              })}
            </ImgArea>
          </Hidden>
          <Visible xs sm>
            <Img src={mobileImg} style={mobileStyle} />
          </Visible>
        </Linear>
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
