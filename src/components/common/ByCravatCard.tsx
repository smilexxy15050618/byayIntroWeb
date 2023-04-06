import React, { FC } from 'react';
import styled from 'styled-components';

interface IProps {
  title: string;
  desc: string;
  className?: string;
}
const RawByCravatCard: FC<IProps> = ({ className, title, desc }) => (
  <div className={className}>
    <div className="title">{title}</div>
    <div className="underline-box"></div>
    <div className="desc">{desc}</div>
  </div>
);

/**
 * @param title:标题
 * @param desc:描述
 * @param color?:小长方块和hover标题的颜色 ' #2B58F9'
 * @param size?:宽高 '290px 224px'
 * @param hoverBackground?: 'rgb(249, 250, 255)'
 */
export interface IByCravatCard extends IProps {
  color?: string;
  hoverBackground?: string;
  size?: string;
}

const ByCravatCard = styled(RawByCravatCard)<IByCravatCard>`
  width: ${props => (props.size ? props.size.split(' ')[0] : '290px')};
  height: ${props => (props.size ? props.size.split(' ')[1] : '224px')};
  border-radius: 12px;
  padding: 16px 20px;
  :hover {
    background: ${props => props.hoverBackground || 'rgb(249, 250, 255)'};
    .title {
      color: ${props => props.color || '#2B58F9'};
    }
  }
  .title {
    font-size: 20px;
    font-weight: 500;
    color: #000000;
    line-height: 28px;
    margin-bottom: 16px;
  }
  .underline-box {
    width: 28px;
    height: 4px;
    background: ${props => props.color || '#2b58f9'};
    margin-bottom: 20px;
  }
  .desc {
    text-align: justify;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.65);
    line-height: 32px;
  }
`;

export default ByCravatCard;
