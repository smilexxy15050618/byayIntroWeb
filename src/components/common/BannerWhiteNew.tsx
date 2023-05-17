import React, { CSSProperties, FC, ReactNode } from 'react';
import { Hidden, Visible } from 'react-grid-system';
import styled from 'styled-components';
import Box from '../Box';
import { Wrapper } from '../voice-robot/style';
import ByContainer from './ByContainer';

const Linear = styled.div <{
  height?: string;
}>`

  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  height: ${props => props.height[0] || '100%'};
  @media (max-width: 768px) {
    display: block;
    justify-content: flex-start;
  }
`;

const TextArea = styled.div`
  @media (max-width: 768px) {
    animation: none;
  }
`;
const Img = styled.img`
  margin-bottom: 0;
  max-width: 574px;
  width: 123.7%;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;
const ImgArea = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  > img {
    position: absolute;
  }
`;
const Placeholder = styled.div`
  height: 60px;
  width: 100%;
  background: transparent;
  @media (max-width: 768px) {
    height: 64px;
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
  pcImgs: DynamicImg[];
  mobileImg: string;
  background: string | string[];
  height: CSSProperties;
  LinearHeight: CSSProperties;
  minWidthPC?: string;
  mobileStyle?: CSSProperties;
}

const commonClassName = ['animate__animated', 'wow'];
const RawBannerWhite: FC<IProps> = ({
  className,
  pcImgs,
  mobileImg,
  background,
  height,
  LinearHeight,
  minWidthPC,
  mobileStyle,
  children,
}) => {
  return (
    <Wrapper>
      <ByContainer
        background={background}
        height={height}
        maxWidthPc="1200px"
        minWidthPC={minWidthPC}
        className={className}
        padding={[, '']}>
        {/* 头部空白占位，以便中间中间部分对齐 */}
        <Hidden xs sm>
          <Placeholder />
        </Hidden>
        <Linear height={LinearHeight}>
          <TextArea className="linear animate__animated animate__fadeInLeft animate__ahead_300ms">{children}</TextArea>
          <Hidden xs sm>
            <ImgArea>
              {pcImgs.map(({ className = [], ...rest }, index) => {
                const cls = [...commonClassName, ...className].join(' ');
                return <Box key={index} as="img" {...rest} className={cls} minWidth={rest.style.width} />;
              })}
            </ImgArea>
          </Hidden>
          <Visible xs sm>
            <Img src={mobileImg} style={mobileStyle} />
          </Visible>
        </Linear>
      </ByContainer>
    </Wrapper>
  );
};

export type IBannerWhiteProps = IProps;
const BannerWhite = styled(RawBannerWhite) < IBannerWhiteProps > `
  overflow: hidden;
  @media (max-height: 666px) and (max-width: 768px) {
    .linear {
      padding-top: 111px;
    }
  }
  @media (min-height: 750px) and (max-width: 768px) {
    .linear {
      padding-top: 111px;
    }
  }
`;
export default BannerWhite;
