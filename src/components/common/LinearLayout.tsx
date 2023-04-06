import styled, { css } from 'styled-components';
import { cssSwitch } from '../../lib/utils';
export const Horizon = styled.div<{
  space?: string;
  reverse?: boolean;
  justify?: string;
  height?: string;
}>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.justify || 'center'};
  height: ${props => props.height || '100%'};
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  // > :nth-child(${props => (props.reverse ? '-n + 1' : 'n + 2')}) {
  //   margin-left: ${props => props.space || '10%'};
  // }
`;

export const Vertical = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export interface ILinear {
  space?: string | string[];
  reverse?: boolean;
  justify?: string;
  height?: string | string[];
  width?: string | string[];
}
/**
 * @param space 间隔 string|string[]
 * @param reverse 是否反向 boolean
 * @param justify 是否反向 对齐方式
 * @param height 高度
 *
 */
export const Linear = styled.div<ILinear>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.justify || 'center'};
  ${props => cssSwitch(props.width, 'width', ['unset', 'unset'], false)}
  ${props => cssSwitch(props.height, 'height', ['100%', '100%'], false)}
  flex-direction: ${props => 'row' + (props.reverse ? '-reverse' : '')};
  > :nth-child(${props => (props.reverse ? '-n + 1' : 'n + 2')}) {
    ${props =>
      props.space
        ? cssSwitch([`0 0 0 ${props.space[0]}`, `${props.space[1]} 0 0 0`], 'margin', ['0px', '0px'], false)
        : ''}
  }
  @media (max-width: 768px) {
    flex-direction: ${props => 'column' + (props.reverse ? '-reverse' : '')} !important;
  }
`;

export const LinearStyle = css<ILinear>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.justify || 'center'};
  height: ${props => props.height || '100%'};
  > :nth-child(${props => (props.reverse ? '-n + 1' : 'n + 2')}) {
    margin-left: ${props => props.space || '10%'};
  }
`;

export const VerticalStyle = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;
