import React, { VFC } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 100px 120px 80px;
  background-color: #fff;
  .card {
    display: flex;
    flex-direction: column;
    border: none;
  }
  .total-3-cards {
    .list-item {
      height: 200px;
    }
    .item-description {
      margin: 40px 84px 0px 32px;
      width: 268px;
    }
  }
  .total-4-cards {
    .list-item {
      height: 280px;
    }
    .item-description {
      margin: 40px 32px 0px 32px;
      width: 218px;
    }
  }
  .title {
    margin: 0px auto 48px;
    height: 68px;
    font-size: 40px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2b2b2b;
    line-height: 68px;
  }
  .list {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    .list-item {
      position: relative;
      flex: 1;
      background: #ffffff;
      box-shadow: 0px 5px 31px 0px rgba(0, 0, 0, 0.04);
      border-radius: 12px;
      .item-description {
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #2b2b2b;
        line-height: 32px;
        &:after {
          margin-top: 16px;
          display: block;
          content: ' ';
          width: 24px;
          height: 4px;
          background: #f66600;
        }
      }
      &:hover {
        background: #f66600;
        .item-description {
          height: 64px;
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #ffffff;
          line-height: 32px;
          &:after {
            background: #ffffff;
          }
        }
      }
      img {
        margin: 0px;
        position: absolute;
        height: 100%;
        top: 0px;
        right: 0px;
      }
    }
  }
  @media (max-width: 768px) {
    padding: 40px 24px;
    .card {
      .title {
        text-align: center;
        margin-bottom: 32px;
        width: 220px;
        height: 28px;
        font-size: 20px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #2b2b2b;
        line-height: 28px;
      }
      .list {
        flex-direction: column;
        gap: 16px;
        .list-item {
          height: 104px;
          background: rgba(246, 102, 0, 0.03);
          .item-description {
            margin: 24px 84px 0px 24px;
            width: 250px;
            height: 84px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #2b2b2b;
            line-height: 24px;
            &:after {
              margin-top: 8px;
              display: block;
            }
          }
        }
      }
    }
  }
`;
/**
 * 痛点分析
 * @interface IPainPointsProps
 */
interface CardList {
  description: string;
  iconUrl: string;
  hoverIconUrl: string;
}
interface IPainPointsProps {
  title: string;
  cardList: CardList[];
}

export const PainPoints: VFC<IPainPointsProps> = ({ title, cardList }) => {
  return (
    <Wrapper>
      <div className={`card total-${cardList.length}-cards`}>
        <div className="title">{title}</div>
        <div className="list">
          {cardList.map(card => (
            <div className="list-item">
              <div className="item-description">{card.description}</div>
              <img className="normal-img" src={card.iconUrl} alt="" />
              <img className="hover-img" src={card.hoverIconUrl} alt="" />
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
