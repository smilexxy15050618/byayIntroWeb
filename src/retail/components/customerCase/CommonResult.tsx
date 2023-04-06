import React, { FC } from 'react';
import styled from 'styled-components';
import { CUSTOMER_CASE_BG } from '../../constants/index';

const WrapperCommonResult = styled.div`
  padding: 0 120px 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  .result-icon {
    width: 600px;
    height: 462px;
  }
  .result-card {
    background: #ffffff;
    box-shadow: 0px 4px 16px 0px rgba(128, 131, 141, 0.1);
    border-radius: 10px;
    width: 600px;
    min-width: 600px;
    padding: 40px 80px 52px;
    height: 272px;
    text-align: center;
  }
  .result-content {
    display: flex;
    font-size: 18px;
    font-weight: 400;
    color: #2b2b2b;
    line-height: 32px;

    .result-ceontent-item {
      flex-grow: 1;
    }

    .result-content-weight {
      color: #f66600;
    }

    .result-content-number {
      font-size: 48px;
      font-weight: 600;
      line-height: 69px;
    }
  }
  .result-desc {
    margin-top: 54px;
    font-size: 16px;
    font-weight: 400;
    color: rgba(43, 43, 43, 0.65);
    line-height: 24px;
  }
`;

const CommonResult: FC<{ desc: string; content: Array<[string, string]> }> = ({ desc, content }) => {
  return (
    <WrapperCommonResult>
      <img className="result-icon" src={CUSTOMER_CASE_BG.RESULT_ICON} />
      <div className="result-card">
        <div className="result-content">
          {content.map(item => (
            <div className="result-ceontent-item">
              <div className="result-content-weight">
                <span className="result-content-number">{item[0]}</span>
              </div>
              <div>{item[1]}</div>
            </div>
          ))}
        </div>
        <div className="result-desc">{desc}</div>
      </div>
    </WrapperCommonResult>
  );
};

export default CommonResult;
