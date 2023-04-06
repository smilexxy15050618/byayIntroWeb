import React, { FC } from 'react';
import styled from 'styled-components';
import { Theme } from '../../constants/style';

interface IProps {
  imgUrl: string;
  text: string;
  className?: string;
}

const ByIconTag: FC<IProps> = ({ className, imgUrl, text }) => {
  return (
    <div className={className}>
      <img src={imgUrl} />
      {text}
    </div>
  );
};

interface IByIconTagProps extends IProps {
  width?: number;
  height?: number;
  background: string;
  shadowColor?: string;
}
const StyledByIconTag = styled(ByIconTag)<IByIconTagProps>`
  position: relative;
  width: ${props => props.width || 120}px;
  height: ${props => props.height || 40}px;
  background: ${props => props.background || Theme.Background};
  border: 1px solid #00000002;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  img {
    margin: 0;
    height: 60%;
    width: auto;
  }
  :after {
    content: '';
    background: ${props => props.shadowColor || 'inherit'};
    width: 101%;
    height: 100%;
    position: absolute;
    top: calc(50% + 7px);
    left: 50%;
    transform: translate(-50%, -50%);
    filter: blur(3px) brightness(90%) opacity(50%);
    border-radius: 999px;
    z-index: -1;
  }
`;
export default StyledByIconTag;
