import React, { FC } from 'react';
import styled from 'styled-components';
import { calWidthAndHeight } from '../../../lib/utils';

interface IContent {
  title: string;
  icon: string;
  subTitle: string;
  desc: string[];
}
interface IProps {
  content: IContent[];
}
const Wrapper = styled.div`
  background: #f9fbfc;
  padding: 0 ${calWidthAndHeight(120)} ${calWidthAndHeight(80)};
  display: flex;
  justify-content: space-between;

  .card-item {
    width: ${calWidthAndHeight(282)};
    background: #ffffff;
    border-radius: ${calWidthAndHeight(10)};
    border: 1px solid rgba(246, 102, 0, 0.5);
    text-align: center;
    padding-bottom: ${calWidthAndHeight(60)};

    .card-item-title {
      height: ${calWidthAndHeight(48)};
      width: ${calWidthAndHeight(136)};
      line-height: ${calWidthAndHeight(48)};
      background: #f66600;
      border-radius: 0px 0px ${calWidthAndHeight(16)} ${calWidthAndHeight(16)};
      font-size: ${calWidthAndHeight(20)};
      font-weight: 500;
      color: #ffffff;
      margin: 0 auto ${calWidthAndHeight(56)};
    }

    .card-item-icon {
      width: ${calWidthAndHeight(49)};
      height: ${calWidthAndHeight(49)};
    }

    .card-item-sub-title {
      margin: ${calWidthAndHeight(32)} 0 ${calWidthAndHeight(24)};
      font-size: ${calWidthAndHeight(22)};
      font-weight: 600;
      color: #2b2b2b;
      line-height: ${calWidthAndHeight(28)};
    }

    .card-item-desc {
      font-size: ${calWidthAndHeight(14)};
      font-weight: 400;
      color: rgba(43, 43, 43, 0.85);
      line-height: ${calWidthAndHeight(24)};
    }
  }

  @media (max-width: 768px) {
    padding: 0 ${calWidthAndHeight(20)} ${calWidthAndHeight(24)};
    flex-wrap: wrap;

    .card-item {
      width: ${calWidthAndHeight(160)};
      border-radius: ${calWidthAndHeight(6)};
      padding-bottom: ${calWidthAndHeight(8)};
      margin-bottom: ${calWidthAndHeight(16)};

      .card-item-title {
        height: ${calWidthAndHeight(32)};
        width: ${calWidthAndHeight(110)};
        line-height: ${calWidthAndHeight(32)};
        border-radius: 0px 0px ${calWidthAndHeight(8)} ${calWidthAndHeight(8)};
        font-size: ${calWidthAndHeight(18)};
        margin: 0 auto ${calWidthAndHeight(24)};
      }

      .card-item-icon {
        width: ${calWidthAndHeight(38)};
        height: ${calWidthAndHeight(38)};
      }

      .card-item-sub-title {
        margin: ${calWidthAndHeight(16)} 0 ${calWidthAndHeight(14)};
        font-family: PingFangSC-Regular, PingFang SC;
        font-size: ${calWidthAndHeight(18)};
        line-height: ${calWidthAndHeight(20)};
      }

      .card-item-desc {
        font-size: ${calWidthAndHeight(12)};
        line-height: ${calWidthAndHeight(18)};
      }
    }
  }
`;

const CommonCard: FC<IProps> = ({ content }) => {
  return (
    <Wrapper>
      {content.map(item => (
        <div className="card-item">
          <div className="card-item-title">{item.title}</div>
          <img className="card-item-icon" src={item.icon} />
          <div className="card-item-sub-title">{item.subTitle}</div>
          {item.desc.map(subItem => (
            <div className="card-item-desc">{subItem}</div>
          ))}
        </div>
      ))}
    </Wrapper>
  );
};

export default CommonCard;
