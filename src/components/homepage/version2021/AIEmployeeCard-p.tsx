import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const BlockImg = styled.img`
  width: 48px;
  height: 48px;
  margin: 0;
  margin-right: 16px;
  @media (max-width: 768px) {
    width: 39px;
    height: 39px;
  }
`;
const BlockTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 500;
  color: #000000;
  line-height: 24px;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
const NewIcon = styled.span`
  height: 16px;
  padding: 0 4px;
  border-radius: 1px;
  border: 1px solid #fa6400;
  font-size: 12px;
  color: #fa6400;
  display: flex;
  margin-left: 4px;
  align-items: center;
  text-align: center;
`;
const BlockDesc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #000000;
  line-height: 24px;
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 12px;
    line-height: 19px;
  }
`;
interface IProps {
  className?: string;
  children?: ReactNode;
  src?: string;
  title: string;
  desc: string;
  url?: string;
  showNewIcon?: boolean;
  iconText?: string;
}
const RawAIEmployeeCard: FC<IProps> = ({ className, src, title, desc, url, showNewIcon, iconText }) => {
  return (
    <a className={className} href={url} style={{ textDecoration: 'none' }}>
      <BlockImg src={src} />
      <div>
        <BlockTitle>
          {title}
          {showNewIcon && <NewIcon>{iconText || 'New'}</NewIcon>}
        </BlockTitle>
        <BlockDesc>{desc}</BlockDesc>
      </div>
    </a>
  );
};

export interface IAIEmployeeCardProps extends IProps {
  background: string;
}
const AIEmployeeCard = styled(RawAIEmployeeCard)<IAIEmployeeCardProps>`
  width: 368px;
  height: 112px;
  margin: 0 auto;
  display: flex;
  background: ${props => props.background};
  border-radius: 6px;
  opacity: 0.71;
  padding: 32px 16px;
  box-sizing: border-box;
  &:hover {
    color: #2b58f9;
    opacity: 1;
    div {
      color: #2b58f9;
    }
  }
  @media (max-width: 768px) {
    width: 290px;
    height: 80px;
    border-radius: 5px;
    padding: 16px 0 0 18px;
  }
`;
export default AIEmployeeCard;
