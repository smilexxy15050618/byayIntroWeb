import React, { FC } from 'react';
import styled from 'styled-components';
import { calWidthAndHeight } from '../../../lib/utils';

interface IContent {
  icon: string;
  text: string;
  desc: React.ReactElement;
}
interface IProps {
  content: IContent[];
}
const Wrapper = styled.div`
  background: #ffffff;
  padding: 0 ${calWidthAndHeight(120)};
  display: flex;

  .card-item {
    width: ${calWidthAndHeight(300)};
    background: #ffffff;
    border-radius: ${calWidthAndHeight(8)};
    text-align: center;
    padding: ${calWidthAndHeight(24)} 0 ${calWidthAndHeight(64)};

    .card-item-icon {
      width: ${calWidthAndHeight(160)};
      height: ${calWidthAndHeight(120)};
    }

    .card-item-title {
      margin-top: ${calWidthAndHeight(8)};
      font-size: ${calWidthAndHeight(20)};
      font-weight: 500;
      color: #2b2a35;
      line-height: ${calWidthAndHeight(28)};
    }

    .card-item-desc {
      margin-top: ${calWidthAndHeight(40)};
      font-size: ${calWidthAndHeight(16)};
      font-weight: 400;
      color: #2b2a35;
      line-height: ${calWidthAndHeight(24)};
    }

    .card-item-number {
      font-size: ${calWidthAndHeight(48)};
      font-weight: 600;
      color: #2b2a35;
      line-height: ${calWidthAndHeight(56)};
      padding: 0 ${calWidthAndHeight(8)};
    }

    &:hover {
      z-index: 9;
      box-shadow: 0px 4px 16px 0px rgba(43, 43, 43, 0.08);
    }
  }

  @media (max-width: 768px) {
    padding: 0 ${calWidthAndHeight(20)} ${calWidthAndHeight(24)};
    flex-wrap: wrap;
    justify-content: space-between;

    .card-item {
      width: ${calWidthAndHeight(160)};
      text-align: center;
      padding: ${calWidthAndHeight(16)} 0 ${calWidthAndHeight(16)};
      box-shadow: 0px ${calWidthAndHeight(4)} ${calWidthAndHeight(16)} 0px rgba(128, 131, 141, 0.1);
      margin-bottom: ${calWidthAndHeight(16)};
      .card-item-icon {
        width: ${calWidthAndHeight(104)};
        height: ${calWidthAndHeight(76)};
      }

      .card-item-title {
        margin-top: ${calWidthAndHeight(4)};
        font-size: ${calWidthAndHeight(12)};
        line-height: ${calWidthAndHeight(18)};
      }

      .card-item-desc {
        margin-top: ${calWidthAndHeight(28)};
        font-size: ${calWidthAndHeight(12)};
        line-height: ${calWidthAndHeight(18)};
      }

      .card-item-number {
        font-size: ${calWidthAndHeight(32)};
        line-height: ${calWidthAndHeight(36)};
        padding: 0 ${calWidthAndHeight(8)};
      }
    }
  }
`;

const CommonCard: FC<IProps> = ({ content }) => {
  return (
    <Wrapper>
      {content.map(item => (
        <div className="card-item">
          <img className="card-item-icon" src={item.icon} />
          <div className="card-item-title">{item.text}</div>
          {item.desc}
        </div>
      ))}
    </Wrapper>
  );
};

export default CommonCard;
