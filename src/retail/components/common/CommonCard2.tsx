import React, { FC } from 'react';
import styled from 'styled-components';
import { calWidthAndHeight } from '../../../lib/utils';

interface IContent {
  icon: string;
  text: string;
}
interface IProps {
  content: Array<IContent>;
}
const Wrapper = styled.div`
  background: #ffffff;
  padding: 0 ${calWidthAndHeight(120)} ${calWidthAndHeight(80)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .card-item {
    background: #ffffff;
    width: ${calWidthAndHeight(380)};
    padding: ${calWidthAndHeight(42)} 0 ${calWidthAndHeight(34)};

    .card-item-icon {
      width: ${calWidthAndHeight(96)};
      height: ${calWidthAndHeight(96)};
      margin-bottom: ${calWidthAndHeight(16)};
    }

    .card-item-sub-text {
      height: ${calWidthAndHeight(28)};
      font-size: ${calWidthAndHeight(20)};
      font-family: PingFangSC-Regular, PingFang SC;
      color: #2b2b2b;
      line-height: ${calWidthAndHeight(28)};
    }
  }
  @media (max-width: 768px) {
    padding: 0 ${calWidthAndHeight(20)} ${calWidthAndHeight(24)};

    .card-item {
      width: ${calWidthAndHeight(160)};
      padding: 0 ${calWidthAndHeight(20)} ${calWidthAndHeight(24)};

      .card-item-icon {
        width: ${calWidthAndHeight(64)};
        height: ${calWidthAndHeight(64)};
        margin-bottom: ${calWidthAndHeight(16)};
      }

      .card-item-sub-text {
        height: ${calWidthAndHeight(28)};
        font-size: ${calWidthAndHeight(12)};
        font-family: PingFangSC-Regular, PingFang SC;
        color: #2b2b2b;
        line-height: ${calWidthAndHeight(28)};
      }
    }
  }
`;

const CommonCard: FC<IProps> = ({ content }) => {
  return (
    <Wrapper>
      {content.map(item => {
        return (
          <div className="card-item">
            <img className="card-item-icon" src={item.icon} />
            <div className="card-item-sub-text">{item.text}</div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default CommonCard;
