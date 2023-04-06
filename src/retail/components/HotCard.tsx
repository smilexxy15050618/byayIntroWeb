import React, { FC, ReactNode } from 'react';
import { Visible } from 'react-grid-system';
import styled from 'styled-components';
import { calWidthAndHeight } from '../../lib/utils';

const BlockTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: ${calWidthAndHeight(20)};
  font-weight: 500;
  color: #000000;
  line-height: ${calWidthAndHeight(24)};
  @media (max-width: 768px) {
    font-size: ${calWidthAndHeight(18)};
    line-height: ${calWidthAndHeight(24)};
  }
`;

const BlockDesc = styled.div`
  font-size: ${calWidthAndHeight(16)};
  width: ${calWidthAndHeight(270)};
  font-weight: 400;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #000000;
  line-height: ${calWidthAndHeight(24)};
  @media (max-width: 768px) {
    font-size: ${calWidthAndHeight(14)};
    line-height: ${calWidthAndHeight(24)};
    width: ${calWidthAndHeight(200)};
  }
`;
interface IProps {
  className?: string;
  children?: ReactNode;
  src?: string;
  hoverSrc?: string;
  title: string;
  desc: string;
  action: string;
  url?: string;
  special?: boolean;
  hotPopoverBg?: string;
  hotPopoverLogoBg?: string;
  hotPopoverCommonBg?: string;
  hotPopoverTitle?: string;
  hotPopoverIconBg?: string;
  hotPopoverDesc?: string[];
  hotPopoverHeadBg?: string;
  hotPopoverMainTitle?: string;
  hotPopoverSubTitle?: string;
  hotPopoverContent?: string;
  hotPopoverCode?: string;
  position?: string;
  showNewIcon?: boolean;
  onMouseEnter?: () => void;
  onMouseleave?: () => void;
  onClick?: () => void;
}
const RawHotCard: FC<IProps> = ({
  className,
  src,
  title,
  desc,
  action,
  url,
  showNewIcon,
  onMouseEnter,
  onMouseleave,
  onClick,
}) => {
  return (
    <a
      className={className}
      href={url}
      style={{ textDecoration: 'none', cursor: 'pointer' }}
      onMouseEnter={() => {
        onMouseEnter && onMouseEnter();
      }}
      onMouseLeave={() => {
        onMouseleave && onMouseleave();
      }}>
      <Visible md lg xl xxl xxxl>
        <div>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
          <div
            className="action"
            onClick={() => {
              onClick && onClick();
            }}>
            {action}
          </div>
          <div className="icon"></div>
        </div>
      </Visible>
      <Visible xs sm>
        <div className="hot-icon"></div>
        <div>
          <BlockTitle>
            {title}
            {showNewIcon && <span className="new-icon">New</span>}
          </BlockTitle>
          <BlockDesc>{desc}</BlockDesc>
        </div>
      </Visible>
    </a>
  );
};

export interface IHotCard extends IProps {
  background: string;
}
const HotCard = styled(RawHotCard)<IHotCard>`
  width: ${calWidthAndHeight(368)};
  height: ${calWidthAndHeight(150)};
  margin: 0 auto;
  display: flex;
  background: ${props => props.background};
  border-radius: ${calWidthAndHeight(6)};
  padding: ${calWidthAndHeight(16)};
  box-sizing: border-box;

  .title {
    font-size: ${calWidthAndHeight(16)};
    font-weight: 500;
    color: #2b2b2b;
    line-height: ${calWidthAndHeight(24)};
    position: relative;
    left: ${props => (props.special ? calWidthAndHeight(-6) : 0)};
  }

  .desc {
    font-size: ${calWidthAndHeight(14)};
    font-weight: 400;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: #2b2b2b;
    line-height: ${calWidthAndHeight(24)};
  }

  .action {
    font-size: ${calWidthAndHeight(16)};
    font-weight: 300;
    color: #f66600;
    margin-top: ${calWidthAndHeight(38)};
    line-height: ${calWidthAndHeight(24)};
  }

  .icon {
    position: absolute;
    width: ${calWidthAndHeight(120)};
    height: ${calWidthAndHeight(150)};
    background: url(${props => props.src}) no-repeat;
    top: 0;
    right: ${calWidthAndHeight(16)};
    background-size: contain;
  }

  .hot-popover {
  }

  &:hover {
    opacity: 1;
    .new-icon {
      border: 1px solid #ffffff;
      color: #ffffff;
    }
    .hot-icon {
      background: url(${props => props.hoverSrc}) no-repeat;
      background-size: contain;
    }
    .title {
      color: #f66600;
      font-weight: 500;
    }

    .action {
      color: #f66600;
      font-weight: 500;
    }

    .hot-popover {
      display: flex;
    }
  }

  .new-icon {
    height: ${calWidthAndHeight(16)};
    padding: 0 ${calWidthAndHeight(4)};
    border-radius: 1px;
    border: 1px solid #fa6400;
    font-size: ${calWidthAndHeight(12)};
    color: #fa6400;
    display: flex;
    margin-left: ${calWidthAndHeight(4)};
    align-items: center;
    text-align: center;
  }

  .hot-icon {
    width: ${calWidthAndHeight(48)};
    height: ${calWidthAndHeight(48)};
    border-radius: ${calWidthAndHeight(48)};
    margin: 0;
    margin-right: ${calWidthAndHeight(16)};
    background: url(${props => props.src}) no-repeat;
    background-size: contain;
  }

  @media (max-width: 768px) {
    width: ${calWidthAndHeight(310)};
    height: ${calWidthAndHeight(88)};
    padding: ${calWidthAndHeight(16)};
    .hot-icon {
      width: ${calWidthAndHeight(48)};
      height: ${calWidthAndHeight(48)};
      border-radius: ${calWidthAndHeight(48)};
      margin: 0;
      margin-right: ${calWidthAndHeight(16)};
      background: url(${props => props.src}) no-repeat;
      background-size: contain;
    }

    .title {
      font-size: ${calWidthAndHeight(18)};
      line-height: ${calWidthAndHeight(24)};
    }

    .desc {
      font-size: ${calWidthAndHeight(14)};
      line-height: ${calWidthAndHeight(24)};
      width: ${calWidthAndHeight(200)};
    }
  }
`;
export default HotCard;
