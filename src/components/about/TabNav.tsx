import * as React from 'react';
import styled from 'styled-components';
import { Theme } from '../../constants/style';
import { splitCssValue } from '../../lib/utils';

interface TabNavItem {
  name: string;
}

interface TabNavProps {
  bannerList: TabNavItem[];
  minWidthPC?: string;
}

const NavItemContainer = styled.div<{ maxWidthPc?: string; minWidthPC?: string }>`
  @media (min-width: 768px) {
    max-width: ${props => props.maxWidthPc || Theme.ContentWidth};
    min-width: ${props => props.minWidthPC || 'unset'};
    width: calc(
      100vw / ${splitCssValue(Theme.DesignDraftWidth).num} *
        ${props => splitCssValue(props.maxWidthPc || Theme.ContentWidth).num}
    );
    margin: 0 auto;
  }
  height: 100%;
  @media (max-width: 768px) {
    width: 100% !important;
  }
`;

const NavItem = styled.div<{ active: boolean }>`
  position: relative;
  display: inline-flex;
  transition: all 0.2s ease-in-out;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 80px;
  font-size: 24px;
  color: ${props => (props.active ? 'rgba(43, 88, 249, 1)' : 'rgba(0, 0, 0, 1)')};
  line-height: 80px;
  cursor: pointer;
  margin-left: 40px;
  &::after {
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    content: '';
    width: 160px;
    height: 4px;
    border-radius: 2px;
    background: ${props => (props.active ? 'rgba(43, 88, 249, 1)' : 'transparent')};
  }
  &:last-child {
    margin-left: 0;
  }
`;

const TabNav: React.SFC<TabNavProps> = ({ minWidthPC, bannerList }) => {
  const [index, setIndex] = React.useState(0);
  return (
    <NavItemContainer maxWidthPc="1200px" minWidthPC={minWidthPC}>
      {bannerList.map((item, navIndex) => (
        <NavItem active={navIndex === index}>
          {item.name}
        </NavItem>
      ))}
    </NavItemContainer>
  )
};

export default TabNav;
