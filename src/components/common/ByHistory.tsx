import { throttle } from 'lodash';
import React, { Children, FC, ReactElement, ReactNode, useRef, useState } from 'react';
import styled from 'styled-components';
import { IByHistoryItemProps } from './ByHistoryItem';
interface IProps {
  className?: string;
  children?: ReactNode;
}

const ByHistory: FC<IProps> = ({ className, children }) => {
  // 初始化激活项
  const tabNames = Children.toArray(children).map(child => (child as ReactElement<IByHistoryItemProps>).props.tabName);
  const [activeTabName, setActiveTabName] = useState(tabNames[0]);
  // 滚动列表ref
  const historyRef = useRef(null);
  const getBoundaries = () => Array.prototype.map.call(historyRef.current.childNodes, node => node.offsetLeft);
  const getScrollLeft = () => historyRef.current.scrollLeft;
  // 滚动事件
  const onScroll = throttle(() => {
    const boundaries = getBoundaries();
    const activeIndex = boundaries.findIndex((item, index, arr) => {
      return getScrollLeft() >= item && getScrollLeft() < (arr[index + 1] || Infinity);
    });
    setActiveTabName(tabNames[activeIndex]);
  }, 450);
  // tab选择事件
  const handleSelect = index => {
    const boundaries = getBoundaries();
    historyRef.current.scrollLeft = boundaries[index];
    setActiveTabName(tabNames[index]);
  };

  return (
    <div className={className}>
      <div className="history-nav-bar">
        {tabNames.map((tabName, index) => {
          return (
            <div
              className={tabName === activeTabName ? 'active-history-nav' : ''}
              onClick={() => handleSelect(index)}
              key={tabName}>
              {tabName}
            </div>
          );
        })}
      </div>
      <div className="histories" ref={historyRef} onScrollCapture={onScroll}>
        {children}
      </div>
    </div>
  );
};

export type IByHistoryProps = IProps;
const StyledByHistory = styled(ByHistory)<IByHistoryProps>`
  width: 100%;
  position: relative;
  .histories {
    height: 300px;
    overflow-x: auto;
    background: #e3dcfc;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    > div {
      height: 100%;
      flex-shrink: 0;
    }
    transition: 1s;
  }
  .history-nav-bar {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    div {
      cursor: pointer;
    }
  }
  .active-history-nav {
    color: blue;
  }
`;
export default StyledByHistory;
