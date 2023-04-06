import React, { Children, FC, ReactElement, ReactNode, useState } from 'react';
import { Nav, Tab } from 'react-bootstrap';
import styled from 'styled-components';
import { IByTabItemProps } from './ByTabItem';

export type ITabTemplate = (tabName: string, index: number, isActive: boolean) => ReactNode;

interface IProps {
  className?: string;
  children?: ReactNode;
  tabTemplate?: ITabTemplate;
}

const ComponentContent: FC<IProps> = ({ className, children, tabTemplate }) => {
  const [key, setKey] = useState(0);
  return (
    <div className={className}>
      <Tab.Container activeKey={key} onSelect={key => setKey(key * 1)}>
        <Nav>
          {Children.map(children, (child, index) => (
            <Nav.Item key={index}>
              <Nav.Link eventKey={index}>
                {tabTemplate((child as ReactElement<IByTabItemProps>).props.tabName, index, index === key)}
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
        <Tab.Content>
          {Children.map(children, (child, index) => {
            return <Tab.Pane eventKey={index}>{child}</Tab.Pane>;
          })}
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export interface IByTabPaneProps extends IProps {
  width?: string;
  justify?: string;
  tabMargin?: string;
  contentHeight?: string;
  contentWidth?: string;
}
const ByTabPane = styled(ComponentContent)<IByTabPaneProps>`
  width: ${props => props.width};
  // tab栏
  .nav {
    display: flex;
    align-items: center;
    justify-content: ${props => props.justify || 'center'};
  }
  // tab选项
  .nav-item {
    font-size: 1.6rem;
    position: relative;
    > a {
      color: rgb(24, 27, 48);
      padding: 0px;
    }
    margin: ${props => props.tabMargin || '.5rem 1rem'};
  }
  // 没一项内容的容器
  .tab-pane > div {
    height: ${props => props.contentHeight || 'auto'};
    width: ${props => props.contentWidth || 'auto'};
  }
`;
export default ByTabPane;
