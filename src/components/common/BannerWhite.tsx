import React, { CSSProperties, FC, ReactNode } from 'react';
import { Hidden, Visible } from 'react-grid-system';
import styled from 'styled-components';
import Box from '../Box';
import { Wrapper } from '../voice-robot/style';
import ByContainer from './ByContainer';
import { Linear } from './LinearLayout';
import { calWidthAndHeight, scrollIntoOffset } from '../../lib/utils';

const TextArea = styled.div`
  @media (max-width: 768px) {
    animation: none;
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
  minWidthPC?: string;
  mobileStyle?: CSSProperties;
}

const commonClassName = ['animate__animated', 'wow'];
const RawBannerWhite: FC<IProps> = ({
  className,
  pcImgs,
  mobileImg,
  background,
  minWidthPC,
  mobileStyle,
  children,
}) => {
  return (
    <Wrapper>
      <Visible md lg xl xxl xxxl>
        <ByContainer
          background={background}
          height={['560px', 'calc(100vh - 116px)']}
          maxWidthPc="1200px"
          minWidthPC={minWidthPC}
          className={className}
          padding={[, '50px 8.6% 0px']}>
          {/* 头部空白占位，以便中间中间部分对齐 */}
          <Hidden xs sm>
            <Placeholder />
          </Hidden>
          <Linear justify="space-between" height={['500px', '100%']}>
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
      </Visible>
      <Visible xs sm>
      <ByContainer
          background={background}
          min-height='calc(100vh - 52px)'
          maxWidthPc="1200px"
          minWidthPC={minWidthPC}
          className={className}>
          {/* 头部空白占位，以便中间中间部分对齐 */}
          <Hidden xs sm>
            <Placeholder />
          </Hidden>
          <Linear justify="space-between" height={['500px', '100%']}>
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
          <img
              onClick={() => {
                scrollIntoOffset('#STRAGETYMOBILE', 50);
              }}
              src="https://by-fe-cdn.oss-cn-hangzhou.aliyuncs.com/static/by-intro-2023/mobile/bg/arror.png"
              className="m-bg-arror"
            />
        </ByContainer>

      </Visible>
    </Wrapper>
  );
};

export type IBannerWhiteProps = IProps;
const BannerWhite = styled(RawBannerWhite) <IBannerWhiteProps>`
  overflow: hidden;
  @media (max-height: 666px) and (max-width: 768px) {
    padding-top: 10px;
  }
  @media (min-height: 750px) and (max-width: 768px) {
    .linear {
      padding-top: 60px;
    }
  }
`;
export default BannerWhite;
