import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

interface MenuItem {
  path: string;
  bgColor?: string;
  icon: string;
  title: string;
  desc: string;
}

const itemTodo = `
  &.item-todo {
    cursor: default !important;
  }
`;

const MenuItemWrapper = styled.div<{ noPath?: boolean }>`
  display: flex;
  align-content: center;
  padding: 8px 0px;
  margin-left: 15px;
  margin-right: 15px;
  @media (min-width: 993px) and (max-width: 1200px) {
    margin-left: 5px;
  }
  cursor: pointer;
  ${props => props.noPath && itemTodo}

  &:hover {
    background: #f5f5f5;
    border-radius: 4px;
  }
  &:active {
    background: #f8f9fb;
  }
  .left-logo {
    flex: 0 1 18px;
    height: 18px;
    margin: 3px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    -webkit-font-smoothing: antialiased;
    img {
      width: 18px;
      height: 18px;
      margin: 0;
    }
  }
  .right-desc {
    flex: 1;
    .desc-title {
      font-weight: 400;
      color: rgba(0, 0, 0, 0.9);
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 2px;
    }
    .desc-info {
      font-weight: 400;
      color: rgba(0, 0, 0, 0.35);
      font-size: 12px;
      line-height: 18px;
      height: 36px;
      padding-right: 10px;
    }
  }
`;

interface CommonLinkProps {
  menuItem: MenuItem;
  onClick?: (e: React.MouseEvent<HTMLDivElement>, menuItem: MenuItem) => void;
}
export const CommonLink: React.FC<CommonLinkProps> = ({ menuItem, onClick }) => {
  return (
    <Link href={menuItem.path} key={menuItem.title || menuItem.path}>
      <MenuItemWrapper noPath={!menuItem.path} onClick={e => onClick && onClick(e, menuItem)}>
        <div className="left-logo" style={{ backgroundColor: menuItem.bgColor }}>
          {!menuItem.icon.includes('http') ? (
            <i className={menuItem.icon} />
          ) : (
            <img src={menuItem.icon} className="icon" />
          )}
        </div>
        <div className="right-desc">
          <div className="desc-title">{menuItem.title}</div>
          <div className="desc-info">{menuItem.desc}</div>
        </div>
      </MenuItemWrapper>
    </Link>
  );
};
