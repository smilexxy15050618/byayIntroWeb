import React, { FC } from 'react';
import styled from 'styled-components';
import { CUSTOMER_CASE_BG } from '../../constants/index';

const WrapperCommonCard = styled.div`
  background: #ffffff;
  padding: 0 120px 80px;
  display: flex;
  justify-content: space-around;

  .common-card {
    background: #ffffff;
    box-shadow: 0px 4px 16px 0px rgba(128, 131, 141, 0.1);
    border-radius: 10px;
    padding: 44px 36px;
    width: 588px;
    position: relative;

    & + .common-card {
      margin-left: 16px;
    }

    .common-card-title {
      font-size: 20px;
      font-weight: 600;
      color: #f66600;
      line-height: 24px;
      padding-left: 24px;
      margin-bottom: 28px;
    }

    .common-card-desc {
      padding-left: 24px;
      font-size: 16px;
      font-weight: 500;
      color: #2b2b2b;
      line-height: 24px;
      position: relative;
      margin-top: 16px;

      &:before {
        position: absolute;
        width: 18px;
        height: 18px;
        content: '';
        background: url(${CUSTOMER_CASE_BG.LIST_ICON}) no-repeat;
        background-size: cover;
        left: 0;
        // top: 50%;
        // transform: translateY(-50%);
      }
    }

    .common-card-desc:first-child {
      margin-top: 0;
    }

    .common-card-sub-desc {
      font-size: 14px;
      font-weight: 400;
      color: rgba(43, 43, 43, 0.85);
      line-height: 24px;
      margin-top: 4px;
      padding-left: 24px;
    }
    .common-card-bg {
      width: 97px;
      height: 88px;
      background: url(${CUSTOMER_CASE_BG.CARD_BG_2}) no-repeat;
      background-size: cover;
      position: absolute;
      top: 5px;
    }
  }
  .common-card:first-child {
    .common-card-bg {
      background: url(${CUSTOMER_CASE_BG.CARD_BG_1}) no-repeat;
      background-size: cover;
    }
  }
`;

interface IConfig {
  title: string;
  desc: Array<string | { main: string; sub: string[] }>;
  icon?: string;
}

const CommonCard: FC<{ config: IConfig[] }> = ({ config }) => {
  return (
    <WrapperCommonCard>
      {config.map(item => (
        <div className="common-card">
          <div className="common-card-bg"></div>
          <div className="common-card-title">{item.title}</div>
          {item.desc.map(subItem => (
            <>
              <div className="common-card-desc">{typeof subItem === 'string' ? subItem : subItem.main}</div>
              {typeof subItem !== 'string' &&
                subItem.sub.map(microItem => <div className="common-card-sub-desc">{microItem}</div>)}
            </>
          ))}
        </div>
      ))}
    </WrapperCommonCard>
  );
};

export default CommonCard;
