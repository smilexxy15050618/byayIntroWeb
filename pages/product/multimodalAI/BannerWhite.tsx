import React, { CSSProperties, FC, ReactNode } from 'react';
import { Hidden, Visible } from 'react-grid-system';
import styled from 'styled-components';
import Box from '../../../src/components/Box';
import ByContainer from '../../../src/components/common/ByContainerNew';

const Linear = styled.div`
  @media (max-width: 768px) {
    padding: 0 12px;
  }
`;
const TextArea = styled.div`
  @media (max-width: 768px) {
    animation: none;
  }
`;
const Img = styled.img`
  margin-bottom: 0;
  width: 100%;
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
      style={{ backgroundSize: 'cover' }}
      height={['1586px', '750px']}
      className={className}>
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
        <Visible xs sm>
          <Img
            className="wap-banner"
            src={mobileImg}
            style={mobileStyle}
          />
        </Visible>
      </Linear>
    </ByContainer>
  );
};

export type IBannerWhiteProps = IProps;
const BannerWhite = styled(RawBannerWhite) < IBannerWhiteProps > `
  overflow: hidden;
  @media (max-height: 666px) and (max-width: 768px) {
    .linear {
      padding-top: 131px;
    }
    .wap-banner {
      padding-top: 20px;
    }
  }
  @media (min-height: 750px) and (max-width: 768px) {
    .linear {
      padding-top: 131px;
    }
    .wap-banner {
      padding-top: 40px;
    }
  }
  @media (max-width: 768px) {
    .linear {
      padding-top: 131px;
    }
    .wap-banner {
      padding-top: 20px;
    }
  }
`;
export default BannerWhite;
