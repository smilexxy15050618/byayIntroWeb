import React, { FC } from 'react';
import styled from 'styled-components';

const WrapperCommonCard = styled.div`
  background: #ffffff;
  padding: 0 120px 80px;
  display: flex;
  justify-content: space-around;

  .common-card {
    width: 390px;
    flex-grow: 1;
    text-align: center;
    border-radius: 10px;
    border: 1px solid #f66600;
    padding: 32px 0;

    & + .common-card {
      margin-left: 16px;
    }

    &:hover {
      cursor: pointer;
      .common-card-desc {
        color: #f66600;
      }
    }

    .common-card-title {
      font-size: 20px;
      font-weight: 600;
      color: #2b2b2b;
      line-height: 24px;
    }

    .common-card-tag {
      width: 26px;
      height: 4px;
      background: #00c8bd;
      margin: 16px auto;
    }

    .common-card-desc {
      font-size: 20px;
      font-weight: 400;
      color: rgba(43, 43, 43, 0.65);
      line-height: 32px;
    }
  }

  .common-card:hover {
    border-bottom: 7px solid #f66600;
    padding-bottom: 26px;
    .common-card-desc {
      color: #f66600;
    }
  }
`;

interface IConfig {
  title: string;
  desc: string[];
  icon?: string;
}

const CommonCard: FC<{ config: IConfig[] }> = ({ config }) => {
  return (
    <WrapperCommonCard>
      {config.map(item => (
        <div className="common-card">
          <div className="common-card-title">{item.title}</div>
          <div className="common-card-tag"></div>
          {item.desc.map(subItem => (
            <div className="common-card-desc">{subItem}</div>
          ))}
        </div>
      ))}
    </WrapperCommonCard>
  );
};

export default CommonCard;
