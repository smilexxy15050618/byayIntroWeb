import Link from 'next/link';
import React, { FC, MouseEvent, ReactNode } from 'react';
import styled from 'styled-components';
import { Theme } from '../../constants/style';
import { handleStyleProp } from '../../lib/utils';
interface IProps {
  className?: string;
  href?: string;
  onClick?: (e: MouseEvent) => void;
  children?: ReactNode;
}

const RawByNormalBtn: FC<IProps> = ({ href = '', onClick, className, children }) => {
  return (
    <div className={className}>
      <Link href={onClick ? '' : href}>
        <div onClick={onClick}>{children}</div>
      </Link>
    </div>
  );
};
/**
 * @param href?:
 * @param onClick?:
 * @param width?: number
 * @param height?: number
 * @param background?:
 * @param borderColor?:
 * @param color?:
 */
export interface IByNormalBtnProps extends IProps {
  width?: string;
  height?: string;
  background?: string;
  borderColor?: string | boolean;
  color?: string;
  bigStyle?: string;
  smallStyle?: string;
  borderRadius?: number;
}
/**
 *
 */
const ByNormalBtn = styled(RawByNormalBtn)<IByNormalBtnProps>`
  cursor: pointer;
  width: ${props => props.width || 'fit-content'};
  height: ${props => props.height || 'fit-content'};
  color: ${props => props.color || Theme.Color};
  background: ${props => props.background || Theme.Background};
  border: ${handleStyleProp('borderColor', value => `1px solid ${value}`, `1px solid ${Theme.BorderColor}`)};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${props => props.borderRadius || '999'}px;
  ${props => props.bigStyle}
  @media (max-width: 768px) {
    ${props => props.smallStyle}
  }
  :hover {
    opacity: 0.85;
  }
`;
export default ByNormalBtn;
