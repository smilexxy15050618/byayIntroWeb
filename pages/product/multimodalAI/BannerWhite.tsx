import React, { CSSProperties, FC, ReactNode } from 'react';
import { Hidden, Visible } from 'react-grid-system';
import styled from 'styled-components';
import ByContainer from '../../../src/components/common/ByContainer';
import Box from '../../../src/components/Box';

const Linear = styled.div`
 
`;
const TextArea = styled.div`
  position: relative;
`;
const Img = styled.img`
  
`;
const ImgArea = styled.div`
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
    <ByContainer
      background={background}
      height={['1586px', 'calc(100vh - 116px)']}
      className={className}
      padding={[, '50px 8.6% 0px']}>
      {/* 头部空白占位，以便中间中间部分对齐 */}
      <Hidden xs sm>
        <Placeholder />
      </Hidden>
      <Linear>
        <TextArea className="linear animate__animated animate__fadeInDown animate__ahead_300ms">{children}</TextArea>
        <Hidden xs sm>
          <ImgArea>
            {pcImgs.map(({ className = [], ...rest }, index) => {
              const cls = [...commonClassName, ...className].join(' ');
              return <Box key={index} as="img" {...rest} className={cls} minWidth={rest.style.width} />;
            })}
          </ImgArea>
        </Hidden>
       
      </Linear>
    </ByContainer>
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