import React, { FC, ReactNode, CSSProperties } from 'react';
import { Hidden, Visible } from 'react-grid-system';
import styled, { css } from 'styled-components';
import Box from '../Box';
import ByContainer from './ByContainer';
import ByNormalBtn from './ByNormalBtn';
import { Linear } from './LinearLayout';

const TextArea = styled.div`
  @media (max-width: 768px) {
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
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 40px;
  }
  @media (max-height: 666px) and (max-width: 768px) {
    font-size: 28px;
    line-height: 36px;
  }
`;
const SubTitle = styled.div`
  ${titleCss}
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 40px;
  }
  @media (max-height: 666px) and (max-width: 768px) {
    font-size: 20px;
    line-height: 36px;
  }
`;
const Desc = styled.div`
  width: 548px;
  font-size: 20px;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.75);
  line-height: 30px;
  margin: 20px 0px 48px;
  @media (max-width: 768px) {
    text-align: justify;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin: 16px 0px 24px;
  }
  @media (max-height: 666px) and (max-width: 768px) {
    font-size: 12px;
    line-height: 20px;
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
  title: ReactNode;
  subTitle?: string;
  desc?: string;
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
  btnText,
  onClick,
  background,
  minWidthPC,
  mobileStyle,
}) => {
  return (
    <>
      <ByContainer
        background={background}
        height={['500px', 'calc(100vh - 112px)']}
        maxWidthPc="1200px"
        minWidthPC={minWidthPC}
        className={className}
        padding={[, '50px 8.6% 0px']}>
        <Linear space={['0px', '10px']} justify="space-evenly">
          <TextArea className="animate__animated animate__fadeInLeft">
            <Title>{title}</Title>
            {subTitle && <SubTitle>{subTitle}</SubTitle>}
            {desc && <Desc>{desc}</Desc>}
            <ByNormalBtn
              onClick={() => onClick()}
              color="#FFFFFF"
              background="#00C8BD"
              bigStyle={`
                font-size: 16px;
                font-weight: 500;
                line-height: 22px;
                padding: 14px 32px;
              `}
              smallStyle={`
                line-height: 22px;
                padding: 11px 32px;
              `}>
              {btnText}
            </ByNormalBtn>
          </TextArea>
          <Hidden xs sm>
            <ImgArea>
              {pcImgs.map(({ className = [], ...rest }) => {
                const cls = [...commonClassName, ...className].join(' ');
                return <Box as="img" {...rest} className={cls} minWidth={rest.style.width} />;
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
    padding-top: 10px;
  }
`;
export default Banner;
