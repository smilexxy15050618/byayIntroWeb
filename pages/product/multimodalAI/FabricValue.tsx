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
const RawFabricValue: FC<IProps> = ({
  className,
  pcImgs,
  mobileImg,
  background,
  minWidthPC,
  mobileStyle,
  children,
}) => {
  return (
    <div>1111</div>
  );
};

export type RawFabricValueProps = IProps;
const FabricValue = styled(RawFabricValue) <RawFabricValueProps>`
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
export default FabricValue;